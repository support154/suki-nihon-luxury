import { createFileRoute, Link } from "@tanstack/react-router";
import p6 from "@/assets/p6.jpg.asset.json";
import { SiteLayout, PageHero, Breadcrumbs, CTAStrip } from "@/components/SiteLayout";
import { SITE, breadcrumbJsonLd } from "@/lib/site";

const TITLE = "Master Plan | Suki Nihon Phase 2 Alibag";
const DESC = "Explore the master-planned layout, road network, amenities, and infrastructure of Suki Nihon Phase 2 Alibag.";

const layoutKey = [
  "Japanese Entrance", "Zen Garden", "Children Play Area", "Car Parking",
  "Residential Plots", "Meditation Area", "Japanese Garden", "Open Garden",
  "Rain Dance Deck", "Swimming Pool with Baby Pool & Jacuzzi",
  "Open Showers", "Party Lawn", "Club House", "Open Gym",
  "Indoor Games", "Restaurant & Cafeteria",
];

export const Route = createFileRoute("/master-plan")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE.url}${PATH}/` },
      { property: "og:type", content: "article" },
      { property: "og:image", content: p6.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: p6.url },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}${PATH}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Master Plan", path: PATH },
          ]),
        ),
      },
    ],
  }),
  component: Page,
});

const blocks = [
  { h: "Community Layout", body: "A gated, walkable community arranged around a central amenity spine — connecting the club house, swimming pool, zen garden and party lawns." },
  { h: "Plot Distribution", body: "Plots distributed along a 9 m wide internal road, with clear demarcations and a mix of sizes suitable for second homes and villa builds." },
  { h: "Road Network", body: "Tarred internal roads with underground utilities, street lighting and signage. A single landscaped entrance with controlled access." },
  { h: "Open Spaces", body: "Generous shared open spaces, Japanese gardens, meditation areas and a rain dance deck — designed to keep the community calm and breathable." },
];

function Page() {
  return (
    <SiteLayout>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Master Plan", path: PATH }]} />
      <PageHero
        label="The Layout"
        title="Master Plan of Suki Nihon Phase 2"
        intro="A master-planned plotted community combining a thoughtful road network, ample open spaces and a full lifestyle amenity layer."
      />
      <section className="py-20 md:py-28 bg-parchment">
        <div className="max-w-6xl mx-auto px-6">
          <img src={p6.url} alt="Suki Nihon Phase 2 Alibag master plan layout" className="w-full rounded-sm shadow-[var(--shadow-zen)]" loading="lazy" />
          <div className="mt-14 grid md:grid-cols-2 gap-10">
            {blocks.map((b) => (
              <article key={b.h}>
                <h2 className="headline text-3xl md:text-4xl">{b.h}</h2>
                <div className="divider-zen my-5 max-w-xs"><span className="kanji-mark text-lg">PLAN</span></div>
                <p className="text-[var(--sumi)] leading-relaxed">{b.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-16">
            <h3 className="font-display text-2xl text-[var(--crimson)] uppercase tracking-widest text-center">Layout Key</h3>
            <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2 text-[var(--sumi)]">
              {layoutKey.map((s, i) => (
                <li key={s} className="flex gap-2 text-sm py-1.5 border-b border-dashed border-[oklch(0.7_0.04_60/0.4)]">
                  <span className="text-[var(--crimson)] font-display w-7">{String(i + 1).padStart(2, "0")}</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 text-center">
            <Link to="/plot-sizes-pricing" className="btn-primary">View Plot Sizes &amp; Pricing</Link>
          </div>
        </div>
      </section>
      <CTAStrip />
    </SiteLayout>
  );
}
