import { createFileRoute, Link } from "@tanstack/react-router";
import p6 from "@/assets/p6.jpg.asset.json";
import { SiteLayout, PageHero, Breadcrumbs, CTAStrip } from "@/components/SiteLayout";
import { SITE, breadcrumbJsonLd } from "@/lib/site";

const TITLE = "Suki Nihon Phase 2 Overview | Alibag Investment Property";
const DESC = "Explore the master-planned Phase 2 development offering premium plots and investment opportunities in Alibag.";

const PATH = "/phase-2-overview";
export const Route = createFileRoute("/phase-2-overview")({
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
            { name: "Phase 2 Overview", path: PATH },
          ]),
        ),
      },
    ],
  }),
  component: Page,
});

const sections = [
  { h: "Project Features", body: "A gated, master-planned community of premium plots set within Japanese-inspired landscaping, walkable internal streets and shared lifestyle amenities." },
  { h: "Infrastructure Development", body: "Tarred internal roads, drainage, water lines, electrical infrastructure and street lighting — laid out for ready-to-build plot owners." },
  { h: "Lifestyle Benefits", body: "Club house, Japanese-style swimming pool, Onsen hot-spring bath, open-air gym, zen garden and party lawns — 21 amenities in total." },
  { h: "Plot Layout", body: "A range of plot sizes arranged along a 9 m wide road, with clear demarcations, plot numbering and ample open green space throughout the layout." },
];

function Page() {
  return (
    <SiteLayout>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Phase 2 Overview", path: PATH }]} />
      <PageHero
        label="Master-Planned Development"
        title="Suki Nihon Phase 2 Overview"
        intro="Premium plots, structured infrastructure and a lifestyle layer designed around Japanese calm — all within a gated community in Bagmala, Alibag."
      />
      <section className="py-20 md:py-28 bg-parchment">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-10">
            {sections.map((s) => (
              <article key={s.h}>
                <h2 className="headline text-3xl md:text-4xl">{s.h}</h2>
                <div className="divider-zen my-5 max-w-xs"><span className="kanji-mark text-lg">SN</span></div>
                <p className="text-[var(--sumi)] leading-relaxed">{s.body}</p>
              </article>
            ))}
            <div className="flex gap-3 flex-wrap">
              <Link to="/master-plan" className="btn-ghost">Master Plan</Link>
              <Link to="/plot-sizes-pricing" className="btn-ghost">Plot Sizes &amp; Pricing</Link>
            </div>
          </div>
          <div className="lg:sticky lg:top-28">
            <img src={p6.url} alt="Suki Nihon Phase 2 Alibag site overview" className="w-full rounded-sm shadow-[var(--shadow-zen)]" loading="lazy" />
          </div>
        </div>
      </section>
      <CTAStrip />
    </SiteLayout>
  );
}
