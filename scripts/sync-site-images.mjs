/**
 * Converts referenced site images to WebP under public/images/ and removes unused raster assets.
 * Run: node scripts/sync-site-images.mjs
 */
import fs from "fs";
import path from "path";
import sharp from "sharp";

const ROOT = process.cwd();
const PUBLIC = path.join(ROOT, "public");

/** @type {{ input: string; output: string; maxEdge?: number; maxBytes?: number }[]} */
const JOBS = [
  { input: "image/imag/back.png", output: "images/hero-home.webp", maxEdge: 1920, maxBytes: 150_000 },
  { input: "image/imag/catalog-argan-oil.png", output: "images/catalog/argan-oil.webp", maxEdge: 1254, maxBytes: 150_000 },
  { input: "image/imag/catalog-black-soap.png", output: "images/catalog/black-soap.webp", maxEdge: 1254, maxBytes: 150_000 },
  { input: "image/imag/catalog-rose-water.png", output: "images/catalog/rose-water.webp", maxEdge: 1254, maxBytes: 150_000 },
  { input: "image/imag/catalog-blue-nila.png", output: "images/catalog/blue-nila.webp", maxEdge: 1254, maxBytes: 150_000 },
  { input: "image/imag/catalog-prickly-pear-oil.png", output: "images/catalog/prickly-pear-oil.webp", maxEdge: 1254, maxBytes: 150_000 },
  { input: "image/imag/catalog-ghassoul-clay.png", output: "images/catalog/ghassoul-clay.webp", maxEdge: 1254, maxBytes: 150_000 },
  { input: "image/imag/catalog-orange-blossom-water.png", output: "images/catalog/orange-blossom-water.webp", maxEdge: 1254, maxBytes: 150_000 },
  { input: "image/imag/catalog-aker-fassi.png", output: "images/catalog/aker-fassi.webp", maxEdge: 1254, maxBytes: 150_000 },
  { input: "image/imag/catalog-sidr-powder.png", output: "images/catalog/sidr-powder.webp", maxEdge: 1254, maxBytes: 150_000 },
  { input: "image/imag/br.jpeg", output: "images/factory/production-line.webp", maxEdge: 1600, maxBytes: 150_000 },
  { input: "image/imag/be.jpeg", output: "images/factory/quality-documents.webp", maxEdge: 1600, maxBytes: 150_000 },
  {
    input: "image/imag/WhatsApp Image 2026-09-28 at 18.42.38.jpeg",
    output: "images/factory/export-pallet.webp",
    maxEdge: 1600,
    maxBytes: 150_000,
  },
  {
    input: "image/imag/WhatsApp Image 2026-09-28 at 18.42.37 (1).jpeg",
    output: "images/factory/bulk-production.webp",
    maxEdge: 1600,
    maxBytes: 150_000,
  },
  {
    input: "image/imag/WhatsApp Image 2026-09-28 at 18.42.37.jpeg",
    output: "images/factory/order-packing.webp",
    maxEdge: 1600,
    maxBytes: 150_000,
  },
  { input: "images/manufacture/pure-oils.jpg", output: "images/manufacture/pure-oils.webp", maxEdge: 1200, maxBytes: 150_000 },
  { input: "images/manufacture/black-soap.jpg", output: "images/manufacture/black-soap.webp", maxEdge: 1200, maxBytes: 150_000 },
  { input: "images/manufacture/ghassoul-clay.jpg", output: "images/manufacture/ghassoul-clay.webp", maxEdge: 1200, maxBytes: 150_000 },
  { input: "images/manufacture/floral-waters.jpg", output: "images/manufacture/floral-waters.webp", maxEdge: 1200, maxBytes: 150_000 },
  { input: "images/manufacture/botanical-powders.jpg", output: "images/manufacture/botanical-powders.webp", maxEdge: 1200, maxBytes: 150_000 },
  { input: "images/manufacture/hammam-kits.jpg", output: "images/manufacture/hammam-kits.webp", maxEdge: 1200, maxBytes: 150_000 },
  { input: "image/img26.png", output: "images/benefits-hero.webp", maxEdge: 1400, maxBytes: 150_000 },
  { input: "image/payment.png", output: "images/payment-methods.webp", maxEdge: 800, maxBytes: 80_000 },
  { input: "image/transport-partner.png", output: "images/shipping-partners.webp", maxEdge: 800, maxBytes: 80_000 },
];

const BLOG_SLUGS = [
  "how-moroccan-black-soap-is-made",
  "ghassoul-clay-bulk-buying-guide",
  "orange-blossom-water-vs-rose-water",
  "packaging-for-natural-oils",
  "sidr-powder-for-hair",
  "what-is-blue-nila-powder",
];

async function encodeWebp(inputPath, outputPath, maxEdge, maxBytes) {
  let quality = 82;
  let lastMeta = null;

  for (let attempt = 0; attempt < 8; attempt++) {
    let pipeline = sharp(inputPath).rotate();
    if (maxEdge) {
      pipeline = pipeline.resize(maxEdge, maxEdge, { fit: "inside", withoutEnlargement: true });
    }
    const buffer = await pipeline.webp({ quality, effort: 6 }).toBuffer();
    if (!maxBytes || buffer.length <= maxBytes || quality <= 52) {
      fs.mkdirSync(path.dirname(outputPath), { recursive: true });
      fs.writeFileSync(outputPath, buffer);
      lastMeta = await sharp(buffer).metadata();
      return { width: lastMeta.width ?? 0, height: lastMeta.height ?? 0, bytes: buffer.length, quality };
    }
    quality -= 6;
  }

  throw new Error(`Could not compress ${inputPath} under ${maxBytes} bytes`);
}

function posix(p) {
  return p.replace(/\\/g, "/");
}

async function main() {
  const meta = {};

  for (const job of JOBS) {
    const input = path.join(PUBLIC, job.input);
    const output = path.join(PUBLIC, job.output);
    if (!fs.existsSync(input)) {
      console.warn(`SKIP (missing): ${job.input}`);
      continue;
    }
    const result = await encodeWebp(input, output, job.maxEdge, job.maxBytes);
    const webPath = `/${posix(job.output)}`;
    meta[webPath] = { width: result.width, height: result.height, bytes: result.bytes };
    console.log(`OK ${job.output} (${Math.round(result.bytes / 1024)} KB, q~${result.quality})`);
  }

  for (const slug of BLOG_SLUGS) {
    const jpg = path.join(PUBLIC, "blog", `${slug}.jpg`);
    const webp = path.join(PUBLIC, "blog", `${slug}.webp`);
    const source = fs.existsSync(jpg) ? jpg : fs.existsSync(webp) ? webp : null;
    if (!source) {
      console.warn(`SKIP blog: ${slug}`);
      continue;
    }
    const result = await encodeWebp(source, webp, 1400, 180_000);
    meta[`/blog/${slug}.webp`] = { width: result.width, height: result.height, bytes: result.bytes };
    console.log(`OK blog/${slug}.webp`);
  }

  const metaTs = `/** Generated by scripts/sync-site-images.mjs — do not edit manually */\nexport const imageMeta = ${JSON.stringify(meta, null, 2)} as const;\n`;
  fs.writeFileSync(path.join(ROOT, "src/config/imageMeta.generated.ts"), metaTs);

  const keep = new Set(
    [
      ...JOBS.map((j) => posix(path.join(PUBLIC, j.output))),
      ...BLOG_SLUGS.map((s) => posix(path.join(PUBLIC, "blog", `${s}.webp`))),
      posix(path.join(PUBLIC, "favicon")),
      posix(path.join(PUBLIC, "icons")),
      posix(path.join(PUBLIC, "moroccan-cosmetic-logo.svg")),
      posix(path.join(PUBLIC, "images")),
    ].flat(),
  );

  function shouldDeleteRaster(filePath) {
    const rel = posix(path.relative(PUBLIC, filePath));
    if (rel.startsWith("images/") && rel.endsWith(".webp")) return false;
    if (rel.startsWith("blog/") && rel.endsWith(".webp")) return false;
    if (rel.startsWith("favicon/")) return false;
    if (rel === "moroccan-cosmetic-logo.svg") return false;
    if (rel.startsWith("icons/") && rel.endsWith(".svg")) return false;
    if (!/\.(jpe?g|png|gif|jfif|webp)$/i.test(rel)) return false;
    return true;
  }

  function walkDelete(dir) {
    if (!fs.existsSync(dir)) return;
    for (const name of fs.readdirSync(dir)) {
      const full = path.join(dir, name);
      if (fs.statSync(full).isDirectory()) {
        if (full === path.join(PUBLIC, "images")) continue;
        walkDelete(full);
        if (fs.readdirSync(full).length === 0) fs.rmdirSync(full);
      } else if (shouldDeleteRaster(full)) {
        fs.unlinkSync(full);
        console.log(`DEL ${posix(path.relative(PUBLIC, full))}`);
      }
    }
  }

  walkDelete(path.join(PUBLIC, "image"));
  walkDelete(path.join(PUBLIC, "assets"));
  walkDelete(path.join(PUBLIC, "blog"));

  for (const job of JOBS) {
    const jpgManufacture = job.output.endsWith(".webp") && job.input.endsWith(".jpg")
      ? path.join(PUBLIC, job.input)
      : null;
    if (jpgManufacture && fs.existsSync(jpgManufacture)) {
      fs.unlinkSync(jpgManufacture);
      console.log(`DEL ${posix(path.relative(PUBLIC, jpgManufacture))}`);
    }
  }

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
