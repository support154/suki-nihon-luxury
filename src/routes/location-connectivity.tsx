import { createFileRoute, Link } from "@tanstack/react-router";
import p8 from "@/assets/p8.jpg.asset.json";
import { SiteLayout, PageHero, Breadcrumbs, CTAStrip } from "@/components/SiteLayout";
import { SITE, breadcrumbJsonLd } from "@/lib/site";

const TITLE = "Location & Connectivity | Suki Nihon Phase 2 Alibag";
const DESC = "Discover excellent connectivity from Mumbai, Navi Mumbai, Panvel and surrounding areas to Suki Nihon Phase 2 Alibag.";

export const Route = createFileRoute("/location-connectivity")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE.url}${PATH}/` },
      { property: "og:type", content: "article" },
      { property: "og:image", content: p8.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: p8.url },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}${PATH}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Location & Connectivity", path: PATH },
          ]),
        ),
      },
    ],
  }),
  component: Page,
});

const mumbai = [
  ["Mandwa Jetty (Ferry from Gateway of Mumbai)", "~45 min ferry"],
  ["Mumbai via Atal Setu / Coastal Road", "Upcoming faster route"],
  ["Navi Mumbai & Panvel", "Via Mumbai–Goa Highway"],
  ["Pune", "Direct road access via highway"],
];

const landmarks = [
  ["Nagaon Beach", "1 km"],
  ["Alibag City Centre", "11 km"],
  ["Kolaba Fort", "Short drive"],
  ["Akshi Beach", "Coastal drive"],
  ["Kihim Beach", "Nearby"],
  ["Pen Railway Station", "Nearest rail"],
];

function Page() {
  return (
    <SiteLayout>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Location", path: PATH }]} />
      <PageHero
        label="Bagmala, Alibag"
        title="Prime Location in Alibag"
        intro="Survey No. 51/6 & 121/5, Opposite HP Petrol Pump, Bagmala — with direct access via the Alibag–Revdanda Road."
      />
      <section className="py-20 md:py-28 bg-parchment">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div className="space-y-10">
            <article>
              <h2 className="headline text-3xl md:text-4xl">Connectivity to Mumbai</h2>
              <div className="divider-zen my-5 max-w-xs"><span className="kanji-mark text-lg">REACH</span></div>
              <ul>
                {mumbai.map(([n, d]) => (
                  <li key={n} className="flex items-center justify-between border-b border-dashed border-[oklch(0.7_0.04_60/0.5)] py-3">
                    <span className="font-serif text-lg">{n}</span>
                    <span className="text-[var(--crimson)] tracking-widest text-sm">{d}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article>
              <h2 className="headline text-3xl md:text-4xl">Nearby Landmarks</h2>
              <div className="divider-zen my-5 max-w-xs"><span className="kanji-mark text-lg">NEAR</span></div>
              <ul>
                {landmarks.map(([n, d]) => (
                  <li key={n} className="flex items-center justify-between border-b border-dashed border-[oklch(0.7_0.04_60/0.5)] py-3">
                    <span className="font-serif text-lg">{n}</span>
                    <span className="text-[var(--crimson)] tracking-widest text-sm">{d}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article>
              <h2 className="headline text-3xl md:text-4xl">Road Access</h2>
              <div className="divider-zen my-5 max-w-xs"><span className="kanji-mark text-lg">ROAD</span></div>
              <p className="text-[var(--sumi)] leading-relaxed">
                Direct entry off the Alibag–Revdanda Road, with a 9 m wide internal road network within the community.
              </p>
            </article>
            <article>
              <h2 className="headline text-3xl md:text-4xl">Upcoming Infrastructure</h2>
              <div className="divider-zen my-5 max-w-xs"><span className="kanji-mark text-lg">GROWTH</span></div>
              <p className="text-[var(--sumi)] leading-relaxed">
                The Mumbai Trans Harbour Link (Atal Setu), Virar–Alibag multi-modal corridor and coastal road upgrades are reshaping Alibag's accessibility — translating directly into long-term land appreciation.
              </p>
            </article>
            <div>
              <Link to="/book-site-visit" className="btn-primary">Book a Site Visit</Link>
            </div>
          </div>
          <div className="lg:sticky lg:top-28">
            <img src={p8.url} alt="Location map of Suki Nihon Phase 2 Alibag" className="w-full rounded-sm shadow-[var(--shadow-zen)]" loading="lazy" />
            <div className="mt-6 aspect-video rounded-sm overflow-hidden border border-[oklch(0.7_0.04_60/0.3)]">
              <iframe
                title="Suki Nihon Phase 2 Alibag location map"
                src="https://www.google.com/maps?q=Bagmala+Alibag&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      <CTAStrip />
    </SiteLayout>
  );
}
