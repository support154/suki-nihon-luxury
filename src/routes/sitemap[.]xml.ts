import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://www.sukinihon.in";

const routes: { path: string; priority: string; changefreq: string }[] = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about-suki-nihon-phase-2-alibag/", priority: "0.9", changefreq: "monthly" },
  { path: "/phase-2-overview/", priority: "0.9", changefreq: "monthly" },
  { path: "/master-plan/", priority: "0.9", changefreq: "monthly" },
  { path: "/plot-sizes-pricing/", priority: "0.9", changefreq: "weekly" },
  { path: "/amenities/", priority: "0.8", changefreq: "monthly" },
  { path: "/location-connectivity/", priority: "0.8", changefreq: "monthly" },
  { path: "/investment-benefits/", priority: "0.8", changefreq: "monthly" },
  { path: "/gallery/", priority: "0.7", changefreq: "monthly" },
  { path: "/development-updates/", priority: "0.7", changefreq: "weekly" },
  { path: "/faqs/", priority: "0.7", changefreq: "monthly" },
  { path: "/contact-us/", priority: "0.8", changefreq: "monthly" },
  { path: "/book-site-visit/", priority: "0.9", changefreq: "monthly" },
  { path: "/download-brochure/", priority: "0.8", changefreq: "monthly" },
  { path: "/blogs/", priority: "0.6", changefreq: "weekly" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().slice(0, 10);
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) =>
      `  <url><loc>${BASE_URL}${r.path}</loc><lastmod>${today}</lastmod><changefreq>${r.changefreq}</changefreq><priority>${r.priority}</priority></url>`,
  )
  .join("\n")}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
