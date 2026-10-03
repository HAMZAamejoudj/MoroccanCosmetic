import fs from "fs";
import path from "path";

const OUT_DIR = path.join(process.cwd(), "out");

function listHtmlFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...listHtmlFiles(full));
    else if (entry.name.endsWith(".html")) results.push(full);
  }
  return results;
}

function pageUrlFromFile(file) {
  const rel = path.relative(OUT_DIR, file).replace(/\\/g, "/");
  if (rel === "index.html") return "/";
  if (rel.endsWith("/index.html")) return `/${rel.slice(0, -"/index.html".length)}/`;
  if (rel.endsWith(".html")) return `/${rel.slice(0, -5)}/`;
  return `/${rel}/`;
}

function parseHead(html) {
  const lang = html.match(/<html[^>]*\slang="([^"]+)"/i)?.[1] ?? "";
  const dir = html.match(/<html[^>]*\sdir="([^"]+)"/i)?.[1] ?? "";
  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1]?.trim() ?? "";
  const canonical =
    html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i)?.[1] ??
    html.match(/<link[^>]+href="([^"]+)"[^>]+rel="canonical"/i)?.[1] ??
    "";
  const hreflangs = [...html.matchAll(/<link[^>]+rel="alternate"[^>]+hreflang="([^"]+)"/gi)].map(
    (m) => m[1],
  );
  const ogLocale =
    html.match(/<meta[^>]+property="og:locale"[^>]+content="([^"]+)"/i)?.[1] ??
    html.match(/<meta[^>]+content="([^"]+)"[^>]+property="og:locale"/i)?.[1] ??
    "";
  return { lang, dir, title, canonical, hreflangCount: hreflangs.length, ogLocale, hreflangs };
}

if (!fs.existsSync(OUT_DIR)) {
  console.error("Run npm run build first.");
  process.exit(1);
}

const files = listHtmlFiles(OUT_DIR).filter((f) => {
  const rel = path.relative(OUT_DIR, f).replace(/\\/g, "/");
  return !rel.startsWith("_next/") && rel !== "404.html" && !rel.endsWith("/404.html");
});

const rows = files
  .map((file) => ({ url: pageUrlFromFile(file), ...parseHead(fs.readFileSync(file, "utf8")) }))
  .sort((a, b) => a.url.localeCompare(b.url));

console.log("url|lang|dir|title|canonical|hreflang_count|og:locale");
for (const r of rows) {
  console.log(
    `${r.url}|${r.lang}|${r.dir}|${r.title.replace(/\|/g, "/")}|${r.canonical}|${r.hreflangCount}|${r.ogLocale}`,
  );
}
