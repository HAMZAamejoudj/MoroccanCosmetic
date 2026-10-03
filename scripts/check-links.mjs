import fs from "fs";
import path from "path";

const OUT_DIR = path.join(process.cwd(), "out");

const SKIP_PREFIXES = ["/_next/", "/images/", "/favicon", "/moroccan-cosmetic-logo"];
const SKIP_EXT =
  /\.(woff2?|ttf|otf|css|js|mjs|map|svg|webp|png|jpe?g|gif|ico|webmanifest|xml|txt|json)(\?|$)/i;

function listHtmlFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...listHtmlFiles(full));
    } else if (entry.name.endsWith(".html")) {
      results.push(full);
    }
  }
  return results;
}

function isPageHref(href) {
  if (!href || href.startsWith("#")) return false;
  if (/^[a-z][a-z0-9+.-]*:/i.test(href)) return false;
  if (href.startsWith("//")) return false;
  if (href.startsWith("mailto:") || href.startsWith("tel:")) return false;

  const target = href.split(/[?#]/)[0];
  if (!target.startsWith("/")) return false;
  if (SKIP_PREFIXES.some((p) => target.startsWith(p))) return false;
  if (SKIP_EXT.test(target)) return false;
  return true;
}

function resolvePageFile(href) {
  let target = href.split(/[?#]/)[0];
  if (!target.endsWith("/")) {
    target = `${target}/`;
  }

  const relative = target.replace(/^\//, "");
  const indexPath = path.join(OUT_DIR, relative, "index.html");
  if (fs.existsSync(indexPath)) {
    return indexPath;
  }

  const htmlPath = path.join(OUT_DIR, `${relative.replace(/\/$/, "")}.html`);
  if (fs.existsSync(htmlPath)) {
    return htmlPath;
  }

  return indexPath;
}

function extractHrefs(html) {
  const hrefs = [];
  const re = /href\s*=\s*("([^"]*)"|'([^']*)')/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    hrefs.push(m[2] ?? m[3]);
  }
  return hrefs;
}

const htmlFiles = listHtmlFiles(OUT_DIR);
const broken = [];
const seen = new Set();

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  for (const href of extractHrefs(html)) {
    if (!isPageHref(href)) continue;
    const resolved = resolvePageFile(href);
    if (!fs.existsSync(resolved)) {
      const key = `${path.relative(OUT_DIR, file)}|${href}`;
      if (!seen.has(key)) {
        seen.add(key);
        broken.push({
          from: path.relative(OUT_DIR, file),
          href,
          expected: path.relative(OUT_DIR, resolved),
        });
      }
    }
  }
}

if (broken.length === 0) {
  console.log(`check:links OK — ${htmlFiles.length} HTML files, 0 broken internal page links.`);
  process.exit(0);
}

console.error(`check:links FAILED — ${broken.length} broken page link(s):`);
for (const row of broken) {
  console.error(`  ${row.from} → ${row.href} (missing ${row.expected})`);
}
process.exit(1);
