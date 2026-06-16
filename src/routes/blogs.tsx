import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero, Breadcrumbs, CTAStrip } from "@/components/SiteLayout";
import { SITE, breadcrumbJsonLd } from "@/lib/site";

const PATH = "/blogs";
const TITLE = "Alibag Real Estate Blog | Investment Insights";
const DESC = "Insights on Alibag property investment, plot buying, weekend homes and real estate market trends near Mumbai.";

const categories = [
  "Alibag Property Investment",
  "Weekend Homes",
  "Real Estate Market Trends",
  "Land Investment",
  "Property Buying Guide",
];

const posts = [
  { slug: "alibag-investment-destination", title: "Why Alibag is Emerging as Maharashtra's Top Investment Destination", cat: "Alibag Property Investment" },
  { slug: "plots-vs-apartments", title: "Benefits of Investing in Plots over Apartments", cat: "Land Investment" },
  { slug: "best-weekend-home-destinations-near-mumbai", title: "Best Weekend Home Destinations Near Mumbai", cat: "Weekend Homes" },
  { slug: "future-of-alibag-real-estate", title: "Future of Alibag Real Estate Market", cat: "Real Estate Market Trends" },
  { slug: "plot-investment-guide-first-time-buyers", title: "Plot Investment Guide for First-Time Buyers", cat: "Property Buying Guide" },
  { slug: "alibag-coastal-road-impact", title: "How the Coastal Road Will Reshape Alibag Real Estate", cat: "Real Estate Market Trends" },
  { slug: "atal-setu-alibag-property", title: "Atal Setu Effect: New Demand for Alibag Property", cat: "Alibag Property Investment" },
  { slug: "rera-checklist-alibag-plots", title: "RERA & Legal Checklist Before Buying Plots in Alibag", cat: "Property Buying Guide" },
  { slug: "weekend-home-build-cost-alibag", title: "Cost of Building a Weekend Home in Alibag", cat: "Weekend Homes" },
  { slug: "rental-yield-alibag-villas", title: "Rental Yield Potential of Alibag Weekend Villas", cat: "Weekend Homes" },
  { slug: "gated-vs-non-gated-plots", title: "Gated vs Non-Gated Plot Communities: What to Choose", cat: "Land Investment" },
  { slug: "alibag-best-localities-2026", title: "Alibag's Best Localities for Property Investment in 2026", cat: "Alibag Property Investment" },
  { slug: "japanese-architecture-second-home", title: "Why Japanese Architecture Works for an Indian Second Home", cat: "Weekend Homes" },
  { slug: "nri-investing-in-alibag", title: "An NRI's Guide to Investing in Alibag Real Estate", cat: "Alibag Property Investment" },
  { slug: "documents-required-plot-purchase", title: "Documents Required to Purchase a Plot in Maharashtra", cat: "Property Buying Guide" },
  { slug: "tax-benefits-plot-investment", title: "Tax Benefits on Plot &amp; Land Investments", cat: "Land Investment" },
  { slug: "alibag-vs-karjat-lonavala", title: "Alibag vs Karjat vs Lonavala: Comparing Weekend Home Markets", cat: "Real Estate Market Trends" },
  { slug: "monsoon-due-diligence-alibag", title: "Monsoon Due Diligence: What to Check Before Buying Coastal Plots", cat: "Property Buying Guide" },
  { slug: "infrastructure-driving-alibag", title: "Top 5 Infrastructure Projects Driving Alibag's Growth", cat: "Real Estate Market Trends" },
  { slug: "how-to-shortlist-plot-alibag", title: "How to Shortlist the Right Plot in Alibag", cat: "Property Buying Guide" },
];

export const Route = createFileRoute(PATH)({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE.url}${PATH}/` },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}${PATH}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blogs", path: PATH },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: TITLE,
          url: `${SITE.url}${PATH}/`,
          blogPost: posts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title.replace(/&amp;/g, "&"),
            url: `${SITE.url}${PATH}/${p.slug}`,
          })),
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Blog", path: PATH }]} />
      <PageHero
        label="Insights &amp; Guides"
        title="Real Estate Insights & Property Investment Guides"
        intro="Curated reads on Alibag plot investing, weekend homes, market trends and the buying process."
      />
      <section className="py-16 md:py-20 bg-parchment-dark">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-xl uppercase tracking-widest text-[var(--crimson)] text-center">Categories</h2>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            {categories.map((c) => (
              <span key={c} className="card-zen px-4 py-2 text-sm">{c}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 md:py-28 bg-parchment">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.slug} className="card-zen p-6 flex flex-col">
              <div className="section-label">{p.cat}</div>
              <h3 className="font-display text-xl text-[var(--ink)] mt-3 flex-1" dangerouslySetInnerHTML={{ __html: p.title }} />
              <Link to={PATH} className="text-[var(--crimson)] tracking-widest text-xs uppercase mt-5">Read More →</Link>
            </article>
          ))}
        </div>
      </section>
      <CTAStrip />
    </SiteLayout>
  );
}
