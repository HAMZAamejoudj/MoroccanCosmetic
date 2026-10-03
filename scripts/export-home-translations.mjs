import fs from "fs";
import path from "path";

const root = path.join(process.cwd(), "src", "i18n", "locales");
const enHome = JSON.parse(fs.readFileSync(path.join(root, "en", "home.json"), "utf8"));
const enHomePage = JSON.parse(fs.readFileSync(path.join(root, "en", "homePage.json"), "utf8"));
const enMeta = JSON.parse(fs.readFileSync(path.join(root, "en", "meta.json"), "utf8"));
const frHome = JSON.parse(fs.readFileSync(path.join(root, "fr", "home.json"), "utf8"));
const frHomePage = JSON.parse(fs.readFileSync(path.join(root, "fr", "homePage.json"), "utf8"));
const frMeta = JSON.parse(fs.readFileSync(path.join(root, "fr", "meta.json"), "utf8"));
const arHome = JSON.parse(fs.readFileSync(path.join(root, "ar", "home.json"), "utf8"));
const arHomePage = JSON.parse(fs.readFileSync(path.join(root, "ar", "homePage.json"), "utf8"));
const arMeta = JSON.parse(fs.readFileSync(path.join(root, "ar", "meta.json"), "utf8"));

function flatten(obj, prefix = "") {
  const rows = [];
  for (const [key, value] of Object.entries(obj)) {
    const next = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      rows.push(...flatten(value, next));
    } else if (Array.isArray(value)) {
      value.forEach((item, i) => {
        if (item && typeof item === "object") {
          rows.push(...flatten(item, `${next}[${i}]`));
        } else {
          rows.push({ key: `${next}[${i}]`, en: String(item) });
        }
      });
    } else {
      rows.push({ key: next, en: String(value) });
    }
  }
  return rows;
}

function lookup(flat, key) {
  return flat.find((r) => r.key === key)?.value ?? "";
}

function toFlat(map) {
  const rows = flatten(map);
  return rows.map((r) => ({ key: r.key, value: r.en }));
}

const enFlat = [
  ...toFlat({ home: enHome, homePage: enHomePage, meta: { home: enMeta.home } }),
];
const frFlat = toFlat({ home: frHome, homePage: frHomePage, meta: { home: frMeta.home } });
const arFlat = toFlat({ home: arHome, homePage: arHomePage, meta: { home: arMeta.home } });

function escapeCsv(s) {
  const v = s.replace(/"/g, '""');
  return `"${v}"`;
}

function writeCsv(targetLocale, targetFlat, filename) {
  const lines = ["page,key,English,translation"];
  for (const row of enFlat) {
    const tr = targetFlat.find((t) => t.key === row.key)?.value ?? "";
    lines.push(
      [escapeCsv("home"), escapeCsv(row.key), escapeCsv(row.value), escapeCsv(tr)].join(","),
    );
  }
  const outDir = path.join(process.cwd(), "review");
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, filename), lines.join("\n"), "utf8");
}

writeCsv("fr", frFlat, "translations-fr.csv");
writeCsv("ar", arFlat, "translations-ar.csv");
console.log("Wrote review/translations-fr.csv and review/translations-ar.csv");
