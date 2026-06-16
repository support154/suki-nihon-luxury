import { createFileRoute, Link } from "@tanstack/react-router";
import p4 from "@/assets/p4.jpg.asset.json";
import { SiteLayout, PageHero, Breadcrumbs, CTAStrip } from "@/components/SiteLayout";
import { SITE, WA, breadcrumbJsonLd } from "@/lib/site";

const PATH = "/plot-sizes-pricing";
const TITLE = "Plot Sizes & Pricing | Suki Nihon Phase 2 Alibag";
const DESC = "View available plot sizes, pricing options, and investment opportunities at Suki Nihon Phase 2 Alibag.";

export const Route = createFileRoute(PATH)({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE.url}${PATH}/` },
      { property: "og:type", content: "article" },
      { property: "og:image", content: p4.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: p4.url },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}${PATH}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Plot Sizes & Pricing", path: PATH },
          ]),
        ),
      },
    ],
  }),
  component: Page,
});

const tiers = [
  { h: "Compact Plot", note: "Ideal for a Jitaku-style weekend home." },
  { h: "Premium Plot", note: "Expanded layout with private garden setbacks." },
  { h: "Villa Plot", note: "Largest plots for bespoke villa builds." },
];

function Page() {
  return (
    <SiteLayout>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Pricing", path: PATH }]} />
      <PageHero
        label="Plots &amp; Pricing"
        title="Available Plot Sizes & Pricing"
        intro="A range of residential plot sizes with a flexible 0% interest payment facility. Final pricing shared on enquiry."
      />
      <section className="py-20 md:py-28 bg-parchment">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-10">
            <article>
              <h2 className="headline text-3xl md:text-4xl">Residential Plots</h2>
              <div className="divider-zen my-5 max-w-xs"><span className="kanji-mark text-lg">PLOTS</span></div>
              <div className="grid sm:grid-cols-3 gap-4">
                {tiers.map((t) => (
                  <div key={t.h} className="card-zen p-6">
                    <div className="font-display text-xl text-[var(--crimson)]">{t.h}</div>
                    <p className="text-xs text-[var(--sumi)] mt-2 leading-relaxed">{t.note}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[var(--sumi)] mt-4 italic">
                Plot dimensions and inventory are updated regularly. Request the current price sheet for live availability.
              </p>
            </article>
            <article>
              <h2 className="headline text-3xl md:text-4xl">Investment Plans</h2>
              <div className="divider-zen my-5 max-w-xs"><span className="kanji-mark text-lg">PLAN</span></div>
              <p className="text-[var(--sumi)] leading-relaxed">
                Choose between a structured construction-linked plan or a milestone-based plan — both come with 0% interest and clear documentation throughout.
              </p>
            </article>
            <article>
              <h2 className="headline text-3xl md:text-4xl">Flexible Payment Options</h2>
              <div className="divider-zen my-5 max-w-xs"><span className="kanji-mark text-lg">EASE</span></div>
              <ul className="space-y-2 text-[var(--sumi)] list-disc pl-5">
                <li>Token booking amount</li>
                <li>Stage-linked payment milestones</li>
                <li>Bank loan support from leading lenders</li>
                <li>Transparent registration &amp; stamp duty assistance</li>
              </ul>
            </article>
            <article>
              <h2 className="headline text-3xl md:text-4xl">Booking Process</h2>
              <div className="divider-zen my-5 max-w-xs"><span className="kanji-mark text-lg">STEPS</span></div>
              <ol className="space-y-2 text-[var(--sumi)] list-decimal pl-5">
                <li>Site visit at Bagmala, Alibag</li>
                <li>Choose your plot &amp; reserve with token amount</li>
                <li>Sign agreement &amp; complete first milestone</li>
                <li>Stage-wise payments till registration</li>
              </ol>
            </article>
            <div className="flex gap-3 flex-wrap">
              <a href={WA} target="_blank" rel="noreferrer" className="btn-primary">Request Price Sheet</a>
              <Link to="/book-site-visit" className="btn-ghost">Book Site Visit</Link>
            </div>
          </div>
          <div className="lg:sticky lg:top-28">
            <img src={p4.url} alt="Suki Nihon Phase 2 Alibag plot floor plan" className="w-full rounded-sm shadow-[var(--shadow-zen)]" loading="lazy" />
          </div>
        </div>
      </section>
      <CTAStrip />
    </SiteLayout>
  );
}
