import { createFileRoute } from "@tanstack/react-router";
import p1 from "@/assets/p1.jpg.asset.json";
import p2 from "@/assets/p2.jpg.asset.json";
import p3 from "@/assets/p3.jpg.asset.json";
import p4 from "@/assets/p4.jpg.asset.json";
import p5 from "@/assets/p5.jpg.asset.json";
import p6 from "@/assets/p6.jpg.asset.json";
import p7 from "@/assets/p7.jpg.asset.json";
import p8 from "@/assets/p8.jpg.asset.json";
import jitaku from "@/assets/jitaku.jpg.asset.json";
import explore from "@/assets/explore.jpg.asset.json";
import zen from "@/assets/zen.jpg.asset.json";
import { SiteLayout, PageHero, Breadcrumbs, CTAStrip } from "@/components/SiteLayout";
import { SITE, breadcrumbJsonLd } from "@/lib/site";

const TITLE = "Project Gallery | Suki Nihon Phase 2 Alibag";
const DESC = "View project images, site photographs, development progress, and lifestyle visuals.";

const images = [
  { src: p1.url, alt: "Suki Nihon Phase 2 Alibag pagoda architecture rendering" },
  { src: jitaku.url, alt: "Japan-inspired Jitaku at Suki Nihon Phase 2" },
  { src: p2.url, alt: "Aerial rendering of Suki Nihon Phase 2 Alibag" },
  { src: explore.url, alt: "Suki Nihon Phase 2 at twilight" },
  { src: p3.url, alt: "Suki Nihon Phase 2 community visual" },
  { src: p4.url, alt: "Plot floor plan at Suki Nihon Phase 2" },
  { src: p5.url, alt: "Suki Nihon Phase 2 amenities rendering" },
  { src: p6.url, alt: "Suki Nihon Phase 2 master plan layout" },
  { src: p7.url, alt: "Suki Nihon Phase 2 lifestyle rendering" },
  { src: p8.url, alt: "Location map of Suki Nihon Phase 2 Alibag" },
  { src: zen.url, alt: "Japanese zen garden at Suki Nihon Phase 2" },
];

const PATH = "/gallery";
export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE.url}${PATH}/` },
      { property: "og:type", content: "article" },
      { property: "og:image", content: jitaku.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: jitaku.url },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}${PATH}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Gallery", path: PATH },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: TITLE,
          image: images.map((i) => i.src),
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Gallery", path: PATH }]} />
      <PageHero
        label="Suki Nihon Alibag Gallery"
        title="Project Gallery"
        intro="Renderings, site visuals and lifestyle imagery from Suki Nihon Phase 2 Alibag."
      />
      <section className="py-20 md:py-28 bg-parchment">
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((img) => (
            <figure key={img.src} className="overflow-hidden rounded-sm shadow-[var(--shadow-zen)] group">
              <img src={img.src} alt={img.alt} className="w-full h-64 object-cover group-hover:scale-105 transition duration-700" loading="lazy" />
            </figure>
          ))}
        </div>
      </section>
      <CTAStrip />
    </SiteLayout>
  );
}
