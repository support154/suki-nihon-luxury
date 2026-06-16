import { createFileRoute } from "@tanstack/react-router";
import p3 from "@/assets/p3.jpg.asset.json";
import { SiteLayout, PageHero, Breadcrumbs, CTAStrip } from "@/components/SiteLayout";
import { SITE, breadcrumbJsonLd } from "@/lib/site";

const PATH = "/development-updates";
const TITLE = "Construction & Development Updates | Suki Nihon Phase 2";
const DESC = "Stay updated with the latest development progress and infrastructure updates.";

const updates = [
  { date: "Ongoing", h: "Internal Road Network", body: "9 m wide tarred internal roads being laid across the Phase 2 layout." },
  { date: "Ongoing", h: "Compound Wall &amp; Entrance", body: "Perimeter compound wall and the signature Japanese entrance under execution." },
  { date: "Planned", h: "Club House &amp; Amenity Block", body: "Club house, swimming pool and Onsen amenity block scheduled in the next phase of works." },
  { date: "Planned", h: "Landscaping &amp; Zen Garden", body: "Master-planned landscaping, zen garden and meditation areas to follow amenity block completion." },
];

export const Route = createFileRoute(PATH)({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE.url}${PATH}/` },
      { property: "og:type", content: "article" },
      { property: "og:image", content: p3.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: p3.url },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}${PATH}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Development Updates", path: PATH },
          ]),
        ),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Development Updates", path: PATH }]} />
      <PageHero
        label="Construction Progress"
        title="Latest Development Updates"
        intro="A transparent log of construction and infrastructure progress at Suki Nihon Phase 2 Alibag."
      />
      <section className="py-20 md:py-28 bg-parchment">
        <div className="max-w-4xl mx-auto px-6">
          <ol className="relative border-l border-[var(--crimson)]/40 ml-3 space-y-10">
            {updates.map((u) => (
              <li key={u.h} className="pl-8">
                <span className="absolute -left-2 w-4 h-4 rounded-full bg-[var(--crimson)] ring-4 ring-parchment" />
                <div className="section-label">{u.date}</div>
                <h2 className="font-display text-2xl mt-2" dangerouslySetInnerHTML={{ __html: u.h }} />
                <p className="text-[var(--sumi)] leading-relaxed mt-2" dangerouslySetInnerHTML={{ __html: u.body }} />
              </li>
            ))}
          </ol>
          <p className="text-xs text-[var(--sumi)]/70 italic mt-10 text-center">
            Updates reflect current planning and are indicative — subject to change as construction progresses.
          </p>
        </div>
      </section>
      <CTAStrip />
    </SiteLayout>
  );
}
