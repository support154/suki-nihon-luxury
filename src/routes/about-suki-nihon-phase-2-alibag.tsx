import { createFileRoute, Link } from "@tanstack/react-router";
import p2 from "@/assets/p2.jpg.asset.json";
import { SiteLayout, PageHero, Breadcrumbs, CTAStrip } from "@/components/SiteLayout";
import { SITE, breadcrumbJsonLd } from "@/lib/site";

const TITLE = "About Suki Nihon Phase 2 Alibag | Premium Real Estate Project";
const DESC =
  "Learn about Suki Nihon Phase 2 Alibag, a thoughtfully planned investment destination offering premium plots and lifestyle amenities.";

export const Route = createFileRoute("/about-suki-nihon-phase-2-alibag")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE.url}${PATH}/` },
      { property: "og:type", content: "article" },
      { property: "og:image", content: p2.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: p2.url },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}${PATH}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About Project", path: PATH },
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
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: PATH }]} />
      <PageHero
        label="About the Project"
        title="About Suki Nihon Phase 2 Alibag"
        intro="A premium plotted community in Bagmala, Alibag — designed with Japanese sensibility, planned for long-term value."
      />
      <section className="py-20 md:py-28 bg-parchment">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">
          <div className="space-y-10">
            <article>
              <h2 className="headline text-3xl md:text-4xl">Vision &amp; Concept</h2>
              <div className="divider-zen my-5 max-w-xs"><span className="kanji-mark text-lg">VISION</span></div>
              <p className="text-[var(--sumi)] leading-relaxed">
                Suki Nihon — meaning "Like Japan" — was born from a simple idea: bring the calm, craft and discipline of Japanese living to India's most loved coastal weekend destination. Phase 2 extends that vision into a master-planned plotted community where every road, garden and shared amenity is intentional.
              </p>
            </article>
            <article>
              <h2 className="headline text-3xl md:text-4xl">Project Highlights</h2>
              <div className="divider-zen my-5 max-w-xs"><span className="kanji-mark text-lg">HIGHLIGHTS</span></div>
              <ul className="space-y-2 text-[var(--sumi)] list-disc pl-5">
                <li>Master-planned, gated plotted community in Bagmala, Alibag</li>
                <li>Japan-inspired architecture, landscaping and zen gardens</li>
                <li>0% interest payment facility, freehold ownership</li>
                <li>21 lifestyle amenities including club house, Onsen and pool</li>
                <li>Direct access from Alibag–Revdanda Road, 1 km from Nagaon Beach</li>
              </ul>
            </article>
            <article>
              <h2 className="headline text-3xl md:text-4xl">Developer Commitment</h2>
              <div className="divider-zen my-5 max-w-xs"><span className="kanji-mark text-lg">TRUST</span></div>
              <p className="text-[var(--sumi)] leading-relaxed">
                Brought to you by <strong>Bhimeshwar Developers</strong> (Promoter) and <strong>Orbits Infra Developers</strong> (Concept to Creation), Suki Nihon Phase 2 is delivered with clear titles, transparent documentation and an obsession with finishing what we start.
              </p>
            </article>
            <article>
              <h2 className="headline text-3xl md:text-4xl">Future Development Plans</h2>
              <div className="divider-zen my-5 max-w-xs"><span className="kanji-mark text-lg">FUTURE</span></div>
              <p className="text-[var(--sumi)] leading-relaxed">
                Phase 2 is part of a long-term master plan for the Bagmala precinct — additional clubhouse expansions, landscaped community spaces and connectivity upgrades aligned with Alibag's coastal road and jetty improvements.
              </p>
            </article>
            <div className="flex gap-3 flex-wrap">
              <Link to="/phase-2-overview" className="btn-ghost">Phase 2 Overview</Link>
              <Link to="/master-plan" className="btn-ghost">Master Plan</Link>
            </div>
          </div>
          <div className="lg:sticky lg:top-28">
            <img src={p2.url} alt="About Suki Nihon Phase 2 Alibag aerial rendering" className="w-full rounded-sm shadow-[var(--shadow-zen)]" loading="lazy" />
          </div>
        </div>
      </section>
      <CTAStrip />
    </SiteLayout>
  );
}
