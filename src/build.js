'use strict';

const fs = require('fs');
const path = require('path');

const site = require('./data/site');
const services = require('./data/services');
const { towns } = require('./data/towns');

const renderHome = require('./templates/home');
const renderService = require('./templates/service');
const renderTown = require('./templates/town');
const renderAbout = require('./templates/about');
const renderContact = require('./templates/contact');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'public');

function rimraf(dir) {
  if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true, force: true });
}

function writePage(urlPath, html) {
  const dir = urlPath === '/' ? OUT : path.join(OUT, urlPath.replace(/^\//, ''));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

function build() {
  rimraf(OUT);
  fs.mkdirSync(OUT, { recursive: true });

  const pages = [];

  // Homepage
  writePage('/', renderHome());
  pages.push({ loc: '/', priority: '1.0' });

  // Service pages
  services.forEach((service) => {
    writePage(`/${service.slug}`, renderService(service));
    pages.push({ loc: `/${service.slug}`, priority: service.flagship ? '0.9' : '0.8' });
  });

  // Town pages
  towns.forEach((town) => {
    writePage(`/${town.slug}`, renderTown(town));
    pages.push({ loc: `/${town.slug}`, priority: '0.7' });
  });

  // Supporting pages
  writePage('/about', renderAbout());
  pages.push({ loc: '/about', priority: '0.5' });

  writePage('/contact', renderContact());
  pages.push({ loc: '/contact', priority: '0.6' });

  // Static assets
  copyDir(path.join(__dirname, 'assets'), path.join(OUT, 'assets'));

  // sitemap.xml
  const today = new Date().toISOString().slice(0, 10);
  const urls = pages
    .map(
      (p) => `  <url>
    <loc>${site.baseUrl}${p.loc === '/' ? '/' : p.loc}</loc>
    <lastmod>${today}</lastmod>
    <priority>${p.priority}</priority>
  </url>`
    )
    .join('\n');
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  fs.writeFileSync(path.join(OUT, 'sitemap.xml'), sitemap, 'utf8');

  // robots.txt
  const robots = `User-agent: *
Allow: /

Sitemap: ${site.baseUrl}/sitemap.xml
`;
  fs.writeFileSync(path.join(OUT, 'robots.txt'), robots, 'utf8');

  console.log(`Built ${pages.length} pages into ${path.relative(ROOT, OUT)}/`);
}

build();
