import fs from "fs";
import path from "path";

const root = path.join(process.cwd(), "src", "i18n", "locales");
const namespaces = [
  "home",
  "homePage",
  "about",
  "products",
  "benefits",
  "contact",
  "privateLabelPage",
  "blog",
];

function readJson(locale, file) {
  const p = path.join(root, locale, `${file}.json`);
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

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
          rows.push({ key: `${next}[${i}]`, value: String(item) });
        }
      });
    } else {
      rows.push({ key: next, value: String(value) });
    }
  }
  return rows;
}

function bundle(locale) {
  const meta = readJson(locale, "meta");
  const data = { meta };
  for (const ns of namespaces) {
    const json = readJson(locale, ns);
    if (json) data[ns] = json;
  }
  return flatten(data);
}

function escapeCsv(s) {
  return `"${String(s).replace(/"/g, '""')}"`;
}

function writeCsv(targetLocale, filename) {
  const enFlat = bundle("en");
  const targetFlat = bundle(targetLocale);
  const lines = ["page,key,English,translation"];
  for (const row of enFlat) {
    const page = row.key.split(".")[0];
    const tr = targetFlat.find((t) => t.key === row.key)?.value ?? "";
    lines.push([page, row.key, escapeCsv(row.value), escapeCsv(tr)].join(","));
  }
  const outDir = path.join(process.cwd(), "review");
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, filename), lines.join("\n"), "utf8");
  console.log(`Wrote ${filename} (${lines.length - 1} rows)`);
}

writeCsv("fr", "translations-fr.csv");
writeCsv("ar", "translations-ar.csv");
