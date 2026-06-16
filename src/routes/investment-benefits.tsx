import { createFileRoute, Link } from "@tanstack/react-router";
import explore from "@/assets/explore.jpg.asset.json";
import { SiteLayout, PageHero, Breadcrumbs, CTAStrip } from "@/components/SiteLayout";
import { SITE, breadcrumbJsonLd } from "@/lib/site";

const PATH = "/investment-benefits";
const TITLE = "Investment Benefits | Alibag Real Estate Opportunity";
const DESC = "Discover why Suki Nihon Phase 2 Alibag is an ideal investment with strong appreciation and future growth potential.";

export const Route = createFileRoute(PATH)({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE.url}${PATH}/` },
      { property: "og:type", content: "article" },
      { property: "og:image", content: explore.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: explore.url },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}${PATH}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Investment Benefits", path: PATH },
          ]),
        ),
      },
    ],
  }),
  component: Page,
});

const blocks = [
  { h: "Capital Appreciation", body: "Alibag land prices have steadily risen as Mumbai's HNI base discovers the coast. Plotted developments in master-planned communities are leading that growth." },
  { h: "Weekend Home Potential", body: "Build a zero-maintenance second home — or hold the plot while infrastructure matures and weekend-home demand keeps climbing." },
  { h: "Infrastructure Growth", body: "The Atal Setu, Virar–Alibag corridor and Alibag coastal road are compressing travel times from Mumbai — directly translating into stronger land values." },
  { h: "High Demand Destination", body: "Alibag is consistently ranked among the top weekend-home markets near Mumbai, with limited gated-plot supply driving long-term scarcity." },
];

function Page() {
  return (
    <SiteLayout>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Investment Benefits", path: PATH }]} />
      <PageHero
        label="Alibag Real Estate Investment"
        title="Why Invest in Suki Nihon Phase 2 Alibag"
        intro="A premium, gated plotted community with high appreciation potential, strong rental demand and a once-in-a-decade infrastructure tailwind."
      />
      <section className="py-20 md:py-28 bg-parchment">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-10">
            {blocks.map((b) => (
              <article key={b.h}>
                <h2 className="headline text-3xl md:text-4xl">{b.h}</h2>
                <div className="divider-zen my-5 max-w-xs"><span className="kanji-mark text-lg">VALUE</span></div>
                <p className="text-[var(--sumi)] leading-relaxed">{b.body}</p>
              </article>
            ))}
            <div className="flex gap-3 flex-wrap">
              <Link to="/plot-sizes-pricing" className="btn-primary">Plot Sizes &amp; Pricing</Link>
              <Link to="/location-connectivity" className="btn-ghost">Location &amp; Connectivity</Link>
            </div>
          </div>
          <div className="lg:sticky lg:top-28">
            <img src={explore.url} alt="Investment potential at Suki Nihon Phase 2 Alibag" className="w-full rounded-sm shadow-[var(--shadow-zen)]" loading="lazy" />
          </div>
        </div>
      </section>
      <CTAStrip />
    </SiteLayout>
  );
}
