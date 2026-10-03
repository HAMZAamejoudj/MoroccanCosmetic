const fs = require('fs');
const path = require('path');

const routes = [
  '/blog',
  '/blog/how-moroccan-black-soap-is-made',
  '/blog/ghassoul-clay-bulk-buying-guide',
  '/blog/orange-blossom-water-vs-rose-water',
  '/blog/sidr-powder-for-hair',
  '/blog/what-is-blue-nila-powder',
  '/blog/packaging-for-natural-oils'
];

console.log('| Route | Title | Canonical |');
console.log('|---|---|---|');

routes.forEach(route => {
  let file;
  if (route === '/blog') {
    file = path.join(process.cwd(), '.next', 'server', 'app', 'blog.html');
  } else {
    const slug = route.split('/').pop();
    file = path.join(process.cwd(), '.next', 'server', 'app', 'blog', slug + '.html');
  }

  if (fs.existsSync(file)) {
    const html = fs.readFileSync(file, 'utf8');
    const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
    const canonicalMatch = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i);
    const title = titleMatch ? titleMatch[1] : 'N/A';
    const canonical = canonicalMatch ? canonicalMatch[1] : 'N/A';
    console.log(`| ${route}/ | ${title} | ${canonical} |`);
  } else {
    console.log(`| ${route}/ | File not found: ${file} | N/A |`);
  }
});
