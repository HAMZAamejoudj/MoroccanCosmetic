import { buildOrganizationSchema, buildWebSiteSchema } from "@/lib/jsonLd";

/** Site-wide JSON-LD on all pages (homepage adds FAQ via HomeJsonLd). */
export default function GlobalJsonLd() {
  const graph = [buildOrganizationSchema(), buildWebSiteSchema()];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
