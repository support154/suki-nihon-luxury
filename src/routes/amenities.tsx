import { createFileRoute } from "@tanstack/react-router";
import jitaku from "@/assets/jitaku.jpg.asset.json";
import { SiteLayout, PageHero, Breadcrumbs, CTAStrip } from "@/components/SiteLayout";
import { SITE, breadcrumbJsonLd } from "@/lib/site";

const PATH = "/amenities";
const TITLE = "Amenities | Suki Nihon Phase 2 Alibag";
const DESC = "Enjoy premium lifestyle amenities designed for comfort, recreation, and long-term value appreciation.";

const amenities = [
  "Club House", "Gym (Open Air)", "Indoor Sports",
  "Swimming Pool (Japanese Style)", "Jacuzzi, Open Showers",
  "Hot Spring Bath (Onsen)", "Restaurant", "Cafe 'n' Lounge",
  "Party Hall", "DJ / Dance Floor", "Selfie Point",
  "Guest Accommodation Facility", "Driver's Dormitory", "Party Lawns",
  "Children's Play Area", "Japanese Zen Garden", "Gazebos",
  "Wifi Zones", "Food Home Delivery", "Dramatic Mood Lighting",
  "Pick-up & Drop Service from Alibag & Mandwa Jetty",
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
      { property: "og:image", content: jitaku.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: jitaku.url },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}${PATH}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Amenities", path: PATH },
          ]),
        ),
      },
    ],
  }),
  component: Page,
});

const blocks = [
  { h: "Landscaped Gardens", body: "Japanese gardens, zen garden and meditation areas — designed to feel intimate, inspiring and uniquely beautiful in every season." },
  { h: "Internal Roads", body: "Tarred 9 m wide internal road network with street lighting and signage for safe pedestrian and vehicle movement." },
  { h: "Security Features", body: "Gated entrance with controlled access, perimeter lighting and round-the-clock security personnel." },
  { h: "Recreational Areas", body: "Swimming pool with jacuzzi, open showers, party lawn, club house, open-air gym, indoor games and a restaurant / cafeteria." },
];

function Page() {
  return (
    <SiteLayout>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Amenities", path: PATH }]} />
      <PageHero
        label="21 Lifestyle Amenities"
        title="World-Class Amenities"
        intro="Designed for comfort, recreation and long-term value — every amenity at Suki Nihon Phase 2 is built into the community, never an after-thought."
      />
      <section className="py-20 md:py-28 bg-parchment">
        <div className="max-w-6xl mx-auto px-6">
          <img src={jitaku.url} alt="Amenities at Suki Nihon Phase 2 Alibag" className="w-full rounded-sm shadow-[var(--shadow-zen)]" loading="lazy" />
          <div className="mt-14 grid md:grid-cols-2 gap-10">
            {blocks.map((b) => (
              <article key={b.h}>
                <h2 className="headline text-3xl md:text-4xl">{b.h}</h2>
                <div className="divider-zen my-5 max-w-xs"><span className="kanji-mark text-lg">EASE</span></div>
                <p className="text-[var(--sumi)] leading-relaxed">{b.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="font-display text-2xl text-[var(--crimson)] uppercase tracking-widest text-center">Full Amenities List</h3>
            <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
              {amenities.map((a, i) => (
                <li key={a} className="flex items-baseline gap-2 py-2 border-b border-dashed border-[oklch(0.7_0.04_60/0.4)]">
                  <span className="amenity-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[var(--sumi)] text-[0.97rem]">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <CTAStrip />
    </SiteLayout>
  );
}
