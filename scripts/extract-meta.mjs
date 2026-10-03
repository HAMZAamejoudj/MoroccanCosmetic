import fs from "fs";

const pages = [
  ["/", "out/index.html"],
  ["/about/", "out/about/index.html"],
  ["/benefits/", "out/benefits/index.html"],
  ["/blog/", "out/blog/index.html"],
  ["/contact/", "out/contact/index.html"],
  ["/products/", "out/products/index.html"],
  [
    "/private-label-moroccan-cosmetics/",
    "out/private-label-moroccan-cosmetics/index.html",
  ],
];

function pick(html, re) {
  const m = html.match(re);
  return m
    ? m[1].replace(/&amp;/g, "&").replace(/&quot;/g, '"').trim()
    : "";
}

for (const [route, file] of pages) {
  const html = fs.readFileSync(file, "utf8");
  const title = pick(html, /<title>([^<]*)<\/title>/);
  const desc = pick(html, /<meta name="description" content="([^"]*)"/);
  const canon = pick(html, /<link rel="canonical" href="([^"]*)"/);
  const lang = pick(html, /<html lang="([^"]*)"/);
  console.log(
    `${route}\t${title}\t${desc}\t${canon}\tlang=${lang}`,
  );
}

const home = fs.readFileSync("out/index.html", "utf8");
const mainMatch = home.match(/<main[\s\S]*<\/main>/i);
const mainText = (mainMatch ? mainMatch[0] : home)
  .replace(/<script[\s\S]*?<\/script>/gi, "")
  .replace(/<[^>]+>/g, " ")
  .replace(/\s+/g, " ")
  .trim();
const words = mainText.split(" ").filter(Boolean).length;
const h1 = [...home.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) =>
  m[1].replace(/<[^>]+>/g, "").trim(),
);
const h2 = [...home.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map((m) =>
  m[1].replace(/<[^>]+>/g, "").trim(),
);
const h3 = [...home.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map((m) =>
  m[1].replace(/<[^>]+>/g, "").trim(),
);
console.log("\nHOME_WORDS", words);
console.log("HOME_H1", h1);
console.log("HOME_H2", h2);
console.log("HOME_H3", h3);
