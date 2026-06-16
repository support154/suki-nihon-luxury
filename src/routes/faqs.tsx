import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, Breadcrumbs, CTAStrip } from "@/components/SiteLayout";
import { SITE, breadcrumbJsonLd } from "@/lib/site";

const PATH = "/faqs";
const TITLE = "FAQs | Suki Nihon Phase 2 Alibag";
const DESC = "Find answers about plots, pricing, location, amenities, legal approvals, and booking procedures.";

const faqs = [
  { q: "Where is Suki Nihon Phase 2 Alibag located?", a: "At Survey No. 51/6 & 121/5, Opp. HP Petrol Pump, Bagmala, Alibag — with direct access via the Alibag–Revdanda Road, about 1 km from Nagaon Beach." },
  { q: "What plot sizes are available?", a: "A range of residential plot sizes — from compact second-home plots to larger villa plots. Request the current price sheet for live availability." },
  { q: "What is the payment plan?", a: "A 0% interest payment facility with milestone-based payments, plus support for bank financing from leading lenders." },
  { q: "Is the title clear and freehold?", a: "Yes. Plots are offered on a freehold basis with clear title, and all statutory documentation is shared with buyers." },
  { q: "Who are the developers?", a: "Bhimeshwar Developers (Promoter) and Orbits Infra Developers (Concept to Creation)." },
  { q: "What amenities are included?", a: "21 amenities including club house, Japanese-style swimming pool, Onsen hot-spring bath, open-air gym, zen garden, party lawns and more." },
  { q: "How do I book a site visit?", a: "Visit the Book Site Visit page or WhatsApp us at +91 9004792888. Site visits are scheduled at your preferred date and time." },
  { q: "Is bank loan financing available?", a: "Yes, financing support is available from leading banks and housing finance companies." },
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
    ],
    links: [{ rel: "canonical", href: `${SITE.url}${PATH}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "FAQs", path: PATH },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
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
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "FAQs", path: PATH }]} />
      <PageHero
        label="Suki Nihon Phase 2 FAQ"
        title="Frequently Asked Questions"
        intro="Quick answers about plots, pricing, location, amenities and the booking process."
      />
      <section className="py-20 md:py-28 bg-parchment">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          {faqs.map((f) => (
            <details key={f.q} className="card-zen p-6 group">
              <summary className="cursor-pointer font-display text-xl text-[var(--crimson)] list-none flex items-center justify-between gap-4">
                <span>{f.q}</span>
                <span className="text-2xl transition group-open:rotate-45">+</span>
              </summary>
              <p className="text-[var(--sumi)] leading-relaxed mt-4">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
      <CTAStrip />
    </SiteLayout>
  );
}

