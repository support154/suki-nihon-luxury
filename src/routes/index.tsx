import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import p1 from "@/assets/p1.jpg.asset.json";
import p2 from "@/assets/p2.jpg.asset.json";
import p4 from "@/assets/p4.jpg.asset.json";
import p6 from "@/assets/p6.jpg.asset.json";
import jitaku from "@/assets/jitaku.jpg.asset.json";
import zen from "@/assets/zen.jpg.asset.json";
import { SiteLayout, PageHero, CTAStrip } from "@/components/SiteLayout";
import { SITE, WA, breadcrumbJsonLd, localBusinessJsonLd, realEstateJsonLd } from "@/lib/site";

const TITLE = "Suki Nihon Phase 2 Alibag | Premium Investment Plots in Alibag";
const DESC =
  "Invest in premium plots at Suki Nihon Phase 2 Alibag. Strategic location, modern amenities, high appreciation potential, and excellent connectivity.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "Alibag Plots, Plots in Alibag, Suki Nihon Phase 2 Alibag, Alibag Real Estate, Weekend Home Plots Near Mumbai, Alibag Villa Plots, Premium Plots in Alibag" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE.url}/` },
      { property: "og:type", content: "website" },
      { property: "og:image", content: p1.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: p1.url },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd()) },
      { type: "application/ld+json", children: JSON.stringify(realEstateJsonLd()) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }])) },
    ],
  }),
  component: Index,
});

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll<HTMLElement>(".reveal");
    if (!els) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

function Sakura() {
  const petals = Array.from({ length: 14 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((_, i) => (
        <span
          key={i}
          className="sakura"
          style={{
            left: `${(i * 7.3) % 100}%`,
            animationDuration: `${10 + (i % 6) * 2}s`,
            animationDelay: `${-i * 1.4}s`,
            transform: `scale(${0.6 + ((i * 13) % 7) / 10})`,
          }}
        />
      ))}
    </div>
  );
}

const highlights = [
  ["38", "Limited Edition Plots"],
  ["0%", "Interest Payment Plan"],
  ["Freehold", "Clear Title Ownership"],
  ["Zero", "Maintenance Living"],
];

const whyInvest = [
  { h: "Gated Community", p: "A secured, master-planned community in Bagmala, Alibag — designed for privacy, quiet and long-term value." },
  { h: "Scenic Surroundings", p: "Just 1 km from Nagaon Beach, surrounded by Konkan greenery, sandy shores and fresh coastal air." },
  { h: "Future Growth Potential", p: "Backed by upcoming infrastructure — coastal road, jetty upgrades and Alibag's rise as Mumbai's premier weekend destination." },
  { h: "Weekend Home Destination", p: "A short drive or ferry from Mumbai — your zero-maintenance second home, ready to enjoy whenever you arrive." },
];

function Index() {
  const rootRef = useReveal();

  return (
    <SiteLayout>
      <div ref={rootRef}>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={p1.url} alt="Suki Nihon Phase 2 Alibag — Japanese-inspired plot development rendering" className="w-full h-full object-cover opacity-95" />
            <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.93_0.04_80/0.4)] via-transparent to-[oklch(0.85_0.06_60/0.85)]" />
          </div>
          <Sakura />
          <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-32 md:pt-36 md:pb-48 text-center">
            <div className="flex justify-center mb-8">
              <div className="sun-stamp w-28 h-28 md:w-36 md:h-36 grid place-items-center">
                <div className="text-center leading-tight">
                  <div className="kanji-mark text-white text-2xl md:text-3xl">NIHON</div>
                  <div className="text-[0.62rem] tracking-[0.3em] text-white/90 mt-1">SUKI · NIHON</div>
                </div>
              </div>
            </div>
            <p className="section-label">Phase 2 · Bagmala, Alibag</p>
            <h1 className="headline text-4xl md:text-6xl lg:text-7xl mt-6">
              Premium Investment Plots at <span className="brush-underline text-[var(--crimson)]">Suki Nihon Phase 2 Alibag</span>
            </h1>
            <p className="mt-7 max-w-2xl mx-auto text-lg md:text-xl text-[var(--sumi)] font-serif italic">
              A master-planned, Japan-inspired plotted community — strategic location, modern amenities and high appreciation potential, minutes from Nagaon Beach.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link to="/book-site-visit" className="btn-primary">Book Site Visit</Link>
              <a href={WA} target="_blank" rel="noreferrer" className="btn-ghost">WhatsApp Enquiry</a>
            </div>
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-center">
              {highlights.map(([n, l]) => (
                <div key={l} className="card-zen rounded-sm py-4 px-3">
                  <div className="font-display text-3xl text-[var(--crimson)]">{n}</div>
                  <div className="text-[0.68rem] tracking-[0.22em] uppercase text-[var(--sumi)] mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DISCOVER LUXURY LIVING */}
        <section className="relative py-24 md:py-32 bg-parchment">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p className="section-label">Discover Luxury Living in Alibag</p>
              <h2 className="headline text-4xl md:text-5xl mt-4">
                A coastal town, <em className="text-[var(--crimson)] not-italic">a quiet escape</em>
              </h2>
              <div className="divider-zen my-6 max-w-xs"><span className="kanji-mark text-xl">SN</span></div>
              <div className="space-y-5 text-[var(--sumi)] leading-relaxed text-[1.02rem]">
                <p>
                  Suki Nihon Phase 2 sits in Bagmala — a quiet pocket of Alibag, away from the city noise yet directly connected via the Alibag–Revdanda Road. It is a thoughtfully planned investment destination offering premium plots and a lifestyle anchored in Japanese calm.
                </p>
                <p>
                  Whether you are buying land to build your weekend home, or holding a plot in one of Maharashtra's fastest growing coastal markets, Phase 2 gives you both — a place to enjoy, and an asset to grow.
                </p>
              </div>
              <div className="mt-8 flex gap-3 flex-wrap">
                <Link to="/about-suki-nihon-phase-2-alibag" className="btn-ghost">About the Project</Link>
                <Link to="/master-plan" className="btn-ghost">View Master Plan</Link>
              </div>
            </div>
            <div className="reveal relative">
              <div className="absolute -inset-3 bg-[var(--crimson)]/10 rotate-2 rounded-sm" />
              <img src={p2.url} alt="Suki Nihon Phase 2 Alibag aerial rendering" className="relative rounded-sm shadow-[var(--shadow-zen)] w-full" loading="lazy" />
            </div>
          </div>
        </section>

        {/* WHY INVEST */}
        <section className="relative py-24 md:py-32 bg-parchment-dark overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center reveal">
              <p className="section-label">Investment Highlights</p>
              <h2 className="headline text-4xl md:text-5xl mt-4">Why Invest in Suki Nihon Phase 2</h2>
              <div className="divider-zen my-6 max-w-sm mx-auto"><span className="kanji-mark text-xl">VALUE</span></div>
            </div>
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {whyInvest.map((w) => (
                <article key={w.h} className="reveal card-zen p-8">
                  <h3 className="font-display text-2xl text-[var(--crimson)]">{w.h}</h3>
                  <p className="mt-3 text-[var(--sumi)] leading-relaxed">{w.p}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PREMIUM AMENITIES */}
        <section className="relative py-24 md:py-32 bg-parchment">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center reveal">
              <p className="section-label">Lifestyle</p>
              <h2 className="headline text-4xl md:text-5xl mt-4">Premium Amenities</h2>
              <div className="divider-zen my-6 max-w-sm mx-auto"><span className="kanji-mark text-xl">Onsen</span></div>
              <p className="max-w-3xl mx-auto text-[var(--sumi)] leading-relaxed">
                Club house, Japanese-style swimming pool, Onsen hot-spring bath, zen garden, open-air gym and 17 more amenities designed for comfort, recreation and long-term value appreciation.
              </p>
            </div>
            <div className="mt-10 reveal">
              <img src={jitaku.url} alt="Suki Nihon Phase 2 Alibag amenities and Japanese architecture" className="w-full rounded-sm shadow-[var(--shadow-zen)]" loading="lazy" />
            </div>
            <div className="mt-8 text-center">
              <Link to="/amenities" className="btn-ghost">Explore All Amenities</Link>
            </div>
          </div>
        </section>

        {/* STRATEGIC LOCATION */}
        <section className="relative py-24 md:py-32 bg-parchment-dark">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <p className="section-label">Connectivity</p>
              <h2 className="headline text-4xl md:text-5xl mt-4">Strategic Location Advantages</h2>
              <div className="divider-zen my-6 max-w-xs"><span className="kanji-mark text-xl">EN</span></div>
              <ul className="space-y-3 text-[var(--sumi)]">
                {[
                  ["Nagaon Beach", "1 km"],
                  ["Alibag City Centre", "11 km"],
                  ["Mandwa Jetty (Ferry from Mumbai)", "Direct"],
                  ["Pen Railway Station", "Nearest rail"],
                  ["Mumbai via Coastal Road", "Upcoming"],
                  ["Pune via Highway", "Road access"],
                ].map(([n, d]) => (
                  <li key={n} className="flex items-center justify-between border-b border-dashed border-[oklch(0.7_0.04_60/0.5)] py-3">
                    <span className="font-serif text-lg">{n}</span>
                    <span className="text-[var(--crimson)] tracking-widest text-sm">{d}</span>
                  </li>
                ))}
              </ul>
              <Link to="/location-connectivity" className="btn-ghost mt-6 inline-flex">View Location Map</Link>
            </div>
            <div className="reveal">
              <img src={p6.url} alt="Suki Nihon Phase 2 Alibag master plan and site layout" className="w-full rounded-sm shadow-[var(--shadow-zen)]" loading="lazy" />
            </div>
          </div>
        </section>

        {/* INVESTMENT OPPORTUNITIES */}
        <section className="relative py-24 md:py-32 bg-parchment">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center reveal">
              <p className="section-label">Plots &amp; Pricing</p>
              <h2 className="headline text-4xl md:text-5xl mt-4">Investment Opportunities</h2>
              <div className="divider-zen my-6 max-w-sm mx-auto"><span className="kanji-mark text-xl">IE</span></div>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 mt-12 reveal">
              {[
                ["Residential Plots", "A range of plot sizes to suit your build — from compact second homes to expansive villa plots."],
                ["Flexible Payment Plans", "0% interest payment facility with structured milestones, designed to make ownership easy."],
                ["Future Appreciation", "Alibag's coastal real estate continues to attract Mumbai's HNI and weekend-home buyers."],
              ].map(([t, d]) => (
                <div key={t} className="card-zen p-7">
                  <div className="font-display text-xl text-[var(--crimson)]">{t}</div>
                  <p className="text-sm text-[var(--sumi)] mt-3 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
            <div className="reveal mt-10 text-center">
              <Link to="/plot-sizes-pricing" className="btn-primary">View Plot Sizes &amp; Pricing</Link>
            </div>
            <div className="reveal mt-12">
              <img src={p4.url} alt="Suki Nihon Phase 2 Alibag plot floor plan and layout" className="w-full rounded-sm shadow-[var(--shadow-zen)]" loading="lazy" />
            </div>
          </div>
        </section>

        {/* SCHEDULE / ZEN */}
        <section className="relative py-28 md:py-36 overflow-hidden">
          <div className="absolute inset-0">
            <img src={zen.url} alt="Japanese Zen Garden at Suki Nihon Phase 2 Alibag" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-[oklch(0.16_0.015_40/0.6)]" />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="reveal">
              <p className="section-label !text-[var(--gold)]">Visit</p>
              <h2 className="headline text-4xl md:text-6xl mt-5 text-[var(--parchment)]">
                Schedule Your Site Visit
              </h2>
              <p className="text-[var(--parchment)]/90 leading-relaxed text-lg font-serif italic mt-6 max-w-2xl mx-auto">
                Walk the plots. Stand under the trees. See for yourself why Suki Nihon Phase 2 is Alibag's most thoughtfully planned investment address.
              </p>
              <div className="mt-10 flex gap-3 justify-center flex-wrap">
                <Link to="/book-site-visit" className="btn-primary">Book Site Visit</Link>
                <Link to="/download-brochure" className="btn-ghost !text-[var(--parchment)] !border-[var(--parchment)]/40">Download Brochure</Link>
              </div>
            </div>
          </div>
        </section>

        <CTAStrip />
      </div>
    </SiteLayout>
  );
}
