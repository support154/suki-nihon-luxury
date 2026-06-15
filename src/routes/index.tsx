import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import p1 from "@/assets/p1.jpg.asset.json";
import p2 from "@/assets/p2.jpg.asset.json";
import p3 from "@/assets/p3.jpg.asset.json";
import p4 from "@/assets/p4.jpg.asset.json";
import p5 from "@/assets/p5.jpg.asset.json";
import p6 from "@/assets/p6.jpg.asset.json";
import p7 from "@/assets/p7.jpg.asset.json";
import p8 from "@/assets/p8.jpg.asset.json";
import jitaku from "@/assets/jitaku.jpg.asset.json";
import explore from "@/assets/explore.jpg.asset.json";
import zen from "@/assets/zen.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Suki Nihon | Unveil the Japan at Alibaug — 38 Limited Edition Jitaku" },
      { name: "description", content: "38 Limited Edition Japan-inspired luxury Jitaku in Alibaug. Zero maintenance second homes, 1 km from Nagaon Beach. 0% interest payment facility." },
      { property: "og:title", content: "Suki Nihon | Unveil the Japan at Alibaug" },
      { property: "og:description", content: "38 Limited Edition Japan-inspired luxury Jitaku in Alibaug. Zero maintenance, freehold ownership, 0% interest payment facility." },
      { property: "og:image", content: p1.url },
      { name: "twitter:image", content: p1.url },
    ],
  }),
  component: Index,
});

const WA = "https://wa.me/919004792888?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Suki%20Nihon%20Jitaku.";

const amenities = [
  "Club House", "Gym (Open Air)", "Indoor Sports",
  "Swimming Pool (Japanese Style)", "Jacuzzi, Open Showers",
  "Hot Spring Bath (Onsen)", "Restaurant", "Cafe 'n' Lounge",
  "Party Hall", "DJ / Dance Floor", "Selfie Point",
  "Guest Accommodation Facility", "Driver's Dormetry", "Party Lawns",
  "Children's Play Area", "Japanese Zen Garden", "Gazebos",
  "Wifi Zones", "Food Home Delivery", "Dramatic Mood Lighting",
  "Pick-up & Drop Service from Alibaug & Mandwa Jetty",
];

const interiors = [
  "Natural Stone Flooring",
  "Jaguar Sanitary Fixtures",
  "Modular Pantry",
  "Powder Coated Aluminium Windows",
  "Landscaped Private Decks (Front & Rear)",
];

const sitePlan = [
  "Japanese Entrance", "Zen Garden", "Children Play Area", "Car Parking",
  "Jitaku", "Meditation Area", "Japanese Garden", "Garden",
  "Rain Dance Deck", "Swimming Pool with Baby Pool & Jacuzzi",
  "Open Showers", "Party Lawn", "Club House", "Open Gym",
  "Indoor Games", "Restaurant & Cafeteria",
];

const connectivity = [
  { name: "Nagaon Beach", dist: "1 km" },
  { name: "Alibaug City Centre", dist: "11 km" },
  { name: "Mandwa Jetty (Ferry from Mumbai)", dist: "via Alibaug-Revdanda Rd" },
  { name: "Alibaug Kolaba Fort", dist: "Short drive" },
  { name: "Pen Railway Station", dist: "Nearest rail" },
  { name: "Pune (via highway)", dist: "Road access" },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll<HTMLElement>(".reveal");
    if (!els) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 }
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

function Index() {
  const rootRef = useReveal();

  return (
    <div ref={rootRef} className="relative min-h-screen bg-parchment text-[var(--ink)]">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[oklch(0.93_0.04_80/0.85)] border-b border-[oklch(0.7_0.04_60/0.35)]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-[var(--crimson)] shadow-[0_0_0_2px_oklch(0.97_0.02_80)]" />
            <span className="font-display text-xl tracking-[0.25em] uppercase">Suki Nihon</span>
          </a>
          <nav className="hidden md:flex gap-8 text-[0.72rem] tracking-[0.28em] uppercase text-[var(--sumi)]">
            <a href="#about" className="hover:text-[var(--crimson)] transition">About</a>
            <a href="#jitaku" className="hover:text-[var(--crimson)] transition">Jitaku</a>
            <a href="#amenities" className="hover:text-[var(--crimson)] transition">Amenities</a>
            <a href="#plans" className="hover:text-[var(--crimson)] transition">Plans</a>
            <a href="#site" className="hover:text-[var(--crimson)] transition">Site</a>
            <a href="#zen" className="hover:text-[var(--crimson)] transition">Zen</a>
            <a href="#contact" className="hover:text-[var(--crimson)] transition">Contact</a>
          </nav>
          <a href={WA} target="_blank" rel="noreferrer" className="btn-primary !py-2.5 !px-4 hidden sm:inline-flex">Enquire</a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={p1.url} alt="Suki Nihon — Japanese-inspired pagoda architecture rendering on parchment" className="w-full h-full object-cover opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.93_0.04_80/0.4)] via-transparent to-[oklch(0.85_0.06_60/0.85)]" />
        </div>
        <Sakura />
        <div className="relative max-w-5xl mx-auto px-6 pt-28 pb-40 md:pt-40 md:pb-56 text-center">
          <div className="flex justify-center mb-8">
            <div className="sun-stamp w-28 h-28 md:w-36 md:h-36 grid place-items-center">
              <div className="text-center leading-tight">
                <div className="kanji-mark text-white text-2xl md:text-3xl">NIHON</div>
                <div className="text-[0.62rem] tracking-[0.3em] text-white/90 mt-1">SUKI · NIHON</div>
              </div>
            </div>
          </div>
          <p className="section-label">Bagmala · Alibaug</p>
          <h1 className="headline text-5xl md:text-7xl lg:text-8xl mt-6">
            Unveil the <span className="brush-underline text-[var(--crimson)]">Japan</span><br /> at Alibaug
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-[var(--sumi)] font-serif italic">
            38 Limited Edition Japan-Inspired Jitaku. Zero maintenance luxury second homes,
            woven with the quiet grace of Japanese architecture.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a href={WA} target="_blank" rel="noreferrer" className="btn-primary">Enquire Now</a>
            <a href="#jitaku" className="btn-ghost">Discover the Jitaku</a>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-center">
            {[
              ["38", "Limited Edition Jitaku"],
              ["0%", "Interest Payment Facility"],
              ["Freehold", "Ownership"],
              ["Zero", "Maintenance"],
            ].map(([n, l]) => (
              <div key={l} className="card-zen rounded-sm py-4 px-3">
                <div className="font-display text-3xl text-[var(--crimson)]">{n}</div>
                <div className="text-[0.68rem] tracking-[0.22em] uppercase text-[var(--sumi)] mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-24 md:py-32 bg-parchment">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <p className="section-label">About Suki Nihon</p>
            <h2 className="headline text-4xl md:text-5xl mt-4">
              Meaning <em className="text-[var(--crimson)] not-italic">"Like Japan"</em>
            </h2>
            <div className="divider-zen my-6 max-w-xs"><span className="kanji-mark text-2xl">SN</span></div>
            <div className="space-y-5 text-[var(--sumi)] leading-relaxed text-[1.02rem]">
              <p>
                <span className="font-semibold text-[var(--ink)]">Suki Nihon</span> is not merely a cluster of row houses with an impressive name — it is truly the pinnacle of fine living, incorporating subtle and classy touches of Japanese architecture.
              </p>
              <p>
                Located away from the traffic and noise of the city with direct access through the Alibaug–Revdanda Road, Suki Nihon sits in a coastal town in the Konkan region, well known for its sandy beaches, clean water and fresh, rejuvenating air.
              </p>
              <p>
                The strategic location allows easy access to Mumbai and Pune via road highway, the Mumbai–Mandwa ferry, and the nearest railway station at Pen. Suki Nihon is just a short drive from the centre of Alibaug city — and yet feels a world away.
              </p>
              <p className="font-serif italic text-[var(--crimson-deep)] text-lg">
                For those in search of a luxurious second home that's also zero maintenance, Suki Nihon Jitaku is the perfect investment.
              </p>
            </div>
          </div>
          <div className="reveal relative">
            <div className="absolute -inset-3 bg-[var(--crimson)]/10 rotate-2 rounded-sm" />
            <img src={p2.url} alt="Suki Nihon aerial rendering — Japanese-inspired homes by water in Alibaug" className="relative rounded-sm shadow-[var(--shadow-zen)] w-full" loading="lazy" />
            <div className="absolute -bottom-6 -left-6 bg-[var(--ink)] text-[var(--parchment)] px-5 py-3">
              <div className="text-[0.65rem] tracking-[0.3em] uppercase opacity-70">Site</div>
              <div className="font-display text-lg">Bagmala, Alibaug</div>
            </div>
          </div>
        </div>
      </section>

      {/* JITAKU */}
      <section id="jitaku" className="relative py-24 md:py-32 bg-parchment-dark overflow-hidden">
        <div className="absolute top-10 right-10 opacity-10 kanji-mark text-[14rem] leading-none select-none">IE</div>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center reveal">
            <p className="section-label">38 Limited Edition</p>
            <h2 className="headline text-4xl md:text-5xl mt-4">Japan-Inspired Jitaku</h2>
            <div className="divider-zen my-6 max-w-sm mx-auto"><span className="kanji-mark text-2xl">Wabi · Sabi</span></div>
          </div>

          <div className="mt-12 reveal">
            <img src={jitaku.url} alt="Suki Nihon Jitaku at golden hour — pagoda roofs, sakura and Buddha statue" className="w-full rounded-sm shadow-[var(--shadow-zen)]" loading="lazy" />
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-10">
            <div className="reveal card-zen p-8 md:p-10">
              <div className="kanji-mark text-3xl mb-3">I · A Touch of Japan</div>
              <p className="text-[var(--sumi)] leading-relaxed">
                The single-storey variant of the modern Jitaku reinvents the classic row house — combining a gable roof with harmonious garden landscaping to create a truly Japanese atmosphere.
              </p>
            </div>
            <div className="reveal card-zen p-8 md:p-10">
              <div className="kanji-mark text-3xl mb-3">II · Welcome to Japan</div>
              <p className="text-[var(--sumi)] leading-relaxed">
                The living area of the Jitaku floor plan dispenses with the need for doors and disruptive partitions, accompanied by all the basic modern amenities. The kitchen and dining open directly onto nature — your own private paradise. Walk upstairs and be welcomed by a spacious bedroom with attached palatial bathrooms for a complete luxury experience.
              </p>
            </div>
          </div>

          <div className="mt-12 reveal relative">
            <img src={explore.url} alt="Suki Nihon at twilight — pagoda forms with cherry blossom and torii" className="w-full rounded-sm shadow-[var(--shadow-zen)]" loading="lazy" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[oklch(0.16_0.015_40/0.85)] to-transparent p-8">
              <p className="font-display italic text-3xl md:text-4xl text-[var(--parchment)]">Come and explore the Japan in Alibaug</p>
            </div>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section id="amenities" className="relative py-24 md:py-32 bg-parchment">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center reveal">
            <p className="section-label">Specifications</p>
            <h2 className="headline text-4xl md:text-5xl mt-4">Amenities &amp; Interiors</h2>
            <div className="divider-zen my-6 max-w-sm mx-auto"><span className="kanji-mark text-xl">Onsen</span></div>
          </div>

          <div className="mt-14 grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3 reveal">
              <h3 className="font-display text-2xl text-[var(--crimson)] tracking-widest uppercase border-b border-[var(--crimson)]/30 pb-3">
                Specifications · 21 Amenities
              </h3>
              <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {amenities.map((a, i) => (
                  <li key={a} className="flex items-baseline gap-1 py-2 border-b border-dashed border-[oklch(0.7_0.04_60/0.4)]">
                    <span className="amenity-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[var(--sumi)] text-[0.97rem]">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2 reveal">
              <h3 className="font-display text-2xl text-[var(--crimson)] tracking-widest uppercase border-b border-[var(--crimson)]/30 pb-3">
                Interiors of Jitaku
              </h3>
              <ul className="mt-6 space-y-3">
                {interiors.map((a, i) => (
                  <li key={a} className="flex items-baseline gap-1 py-2 border-b border-dashed border-[oklch(0.7_0.04_60/0.4)]">
                    <span className="amenity-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[var(--sumi)]">{a}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 card-zen p-6">
                <div className="kanji-mark text-xl mb-2">Ishi · Built to last</div>
                <p className="text-sm text-[var(--sumi)] leading-relaxed">
                  Natural stone, premium fittings and landscaped private decks — every Jitaku is finished to be enjoyed, never maintained by you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOOR PLANS */}
      <section id="plans" className="relative py-24 md:py-32 bg-parchment-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center reveal">
            <p className="section-label">Floor Plans</p>
            <h2 className="headline text-4xl md:text-5xl mt-4">Ground &amp; First Floor</h2>
            <div className="divider-zen my-6 max-w-sm mx-auto"><span className="kanji-mark text-xl">MA</span></div>
          </div>
          <div className="reveal mt-12">
            <img src={p4.url} alt="Suki Nihon Jitaku — Ground Floor Plan, First Floor Plan and Backyard Garden" className="w-full rounded-sm shadow-[var(--shadow-zen)]" loading="lazy" />
          </div>
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {[
              ["Ground Floor", "Open living, kitchen & dining flowing onto a private garden."],
              ["First Floor", "Spacious bedroom with attached palatial bathroom upstairs."],
              ["Backyard Garden", "A private zen retreat at the rear of every Jitaku."],
            ].map(([t, d]) => (
              <div key={t} className="card-zen p-6">
                <div className="font-display text-xl text-[var(--crimson)]">{t}</div>
                <p className="text-sm text-[var(--sumi)] mt-2 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SITE PLAN & LOCATION */}
      <section id="site" className="relative py-24 md:py-32 bg-parchment">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center reveal">
            <p className="section-label">Site Plan</p>
            <h2 className="headline text-4xl md:text-5xl mt-4">The Master Layout</h2>
            <div className="divider-zen my-6 max-w-sm mx-auto"><span className="kanji-mark text-xl">EN</span></div>
            <p className="max-w-3xl mx-auto text-[var(--sumi)] leading-relaxed mt-4">
              The social and recreational hub of Suki Nihon caters to your family's wellness through sports facilities, recreational areas and a host of essential retail. Awaken to fresh air, take to the open swimming pool, veranda and outdoor shower, then explore a unique culinary experience — meals can be arranged anywhere within the premises.
            </p>
          </div>
          <div className="reveal mt-12">
            <img src={p6.url} alt="Suki Nihon site plan with numbered amenities and 9m wide road" className="w-full rounded-sm shadow-[var(--shadow-zen)]" loading="lazy" />
          </div>
          <div className="mt-12 reveal">
            <h3 className="font-display text-2xl text-[var(--crimson)] uppercase tracking-widest text-center">Layout Key</h3>
            <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2 text-[var(--sumi)]">
              {sitePlan.map((s, i) => (
                <li key={s} className="flex gap-1 text-sm py-1.5 border-b border-dashed border-[oklch(0.7_0.04_60/0.4)]">
                  <span className="text-[var(--crimson)] font-display w-7">{String(i + 1).padStart(2, "0")}</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* LOCATION */}
          <div className="mt-24 grid lg:grid-cols-2 gap-12 items-start">
            <div className="reveal">
              <p className="section-label">Location &amp; Connectivity</p>
              <h3 className="headline text-3xl md:text-4xl mt-4">A short drive from everywhere that matters</h3>
              <p className="mt-5 text-[var(--sumi)] leading-relaxed">
                Survey No. 51/6 &amp; 121/5, Opp. HP Petrol Pump, Bagmala, Alibaug — with direct access via the Alibaug–Revdanda Road.
              </p>
              <ul className="mt-8 space-y-3">
                {connectivity.map((c) => (
                  <li key={c.name} className="flex items-center justify-between border-b border-dashed border-[oklch(0.7_0.04_60/0.5)] py-3">
                    <span className="font-serif text-lg">{c.name}</span>
                    <span className="text-[var(--crimson)] tracking-widest text-sm">{c.dist}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal">
              <img src={p8.url} alt="Location map — Alibaug region with Mandwa, Nagaon Beach, Kolaba Fort" className="w-full rounded-sm shadow-[var(--shadow-zen)]" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ZEN GARDEN */}
      <section id="zen" className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={zen.url} alt="Japanese Zen Garden at Suki Nihon with Buddha and cherry blossoms" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-[oklch(0.16_0.015_40/0.55)]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="reveal">
            <p className="section-label !text-[var(--gold)]">Zen Garden &amp; Lifestyle</p>
            <h2 className="headline text-4xl md:text-6xl mt-5 text-[var(--parchment)]">
              A magical place — <em className="not-italic text-[var(--gold)]">intimate &amp; inspiring</em>
            </h2>
            <div className="divider-zen my-8 max-w-sm mx-auto"><span className="text-[var(--gold)] kanji-mark text-2xl">ZEN</span></div>
            <p className="text-[var(--parchment)]/90 leading-relaxed text-lg font-serif italic">
              The Japanese Zen Garden is arguably the most popular spot at Suki Nihon. It's a garden that functions on multiple levels at once — intimate and inspiring. The garden invites you to experience the thrill of personal interpretation and discovery in a serene landscape, uniquely beautiful in every season.
            </p>
            <div className="mt-10">
              <a href={WA} target="_blank" rel="noreferrer" className="btn-primary">Visit the Site</a>
            </div>
          </div>
        </div>
      </section>

      {/* PAYMENT PLAN */}
      <section className="relative py-24 md:py-32 bg-parchment">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="reveal">
            <p className="section-label">Payment Plan</p>
            <h2 className="headline text-4xl md:text-6xl mt-5">
              <span className="text-[var(--crimson)]">0% Interest</span> Payment Facility
            </h2>
            <p className="mt-6 font-serif italic text-2xl text-[var(--sumi)]">
              Our payment plan will make you feel at home.
            </p>
            <div className="divider-zen my-10 max-w-sm mx-auto"><span className="kanji-mark text-2xl">IE</span></div>
          </div>
          <div className="reveal grid sm:grid-cols-3 gap-6 mt-8">
            {[
              ["Freehold", "Ownership of your Jitaku, on clear title."],
              ["Zero Maintenance", "Designed to be lived in, never managed."],
              ["38 Only", "A truly limited edition — once they're gone, they're gone."],
            ].map(([t, d]) => (
              <div key={t} className="card-zen p-8">
                <div className="font-display text-2xl text-[var(--crimson)]">{t}</div>
                <p className="text-sm text-[var(--sumi)] mt-3 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 reveal">
            <a href={WA} target="_blank" rel="noreferrer" className="btn-primary">Reserve Your Jitaku</a>
          </div>
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer id="contact" className="relative bg-[var(--ink)] text-[var(--parchment)] pt-20 pb-10">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--crimson)] to-transparent" />
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[var(--crimson)]" />
              <span className="font-display tracking-[0.3em] text-xl uppercase">Suki Nihon</span>
            </div>
            <p className="mt-4 text-sm text-[var(--parchment)]/70 leading-relaxed font-serif italic">
              Unveil the Japan at Alibaug — 38 Limited Edition Jitaku.
            </p>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-primary mt-6">+91 90047 92888</a>
          </div>
          <div>
            <div className="section-label !text-[var(--gold)]">Site Address</div>
            <p className="mt-4 text-sm leading-relaxed text-[var(--parchment)]/85">
              Survey No. 51/6 &amp; 121/5,<br />
              Opp. HP Petrol Pump,<br />
              Bagmala, Alibaug.<br /><br />
              Direct access via Alibaug–Revdanda Road.
            </p>
          </div>
          <div>
            <div className="section-label !text-[var(--gold)]">Developed By</div>
            <div className="mt-4 space-y-3 text-sm">
              <div>
                <div className="uppercase text-[0.65rem] tracking-[0.3em] text-[var(--parchment)]/55">Promoter</div>
                <div className="font-display text-lg">Bhimeshwar Developers</div>
              </div>
              <div>
                <div className="uppercase text-[0.65rem] tracking-[0.3em] text-[var(--parchment)]/55">Developer</div>
                <div className="font-display text-lg">Orbits Infra Developers</div>
                <div className="text-[0.7rem] italic opacity-70">Concept to Creation</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 mt-14 pt-8 border-t border-[var(--parchment)]/15 text-[0.72rem] leading-relaxed text-[var(--parchment)]/55">
          <p>
            <strong className="text-[var(--parchment)]/80">Disclaimer:</strong> This communication is purely conceptual and not a legal offering. It is made only for promotional purposes. The information contained is only indicative of the kind of development proposed and is subject to change. Orbits Infra Developers reserves the right to make changes or alterations.
          </p>
          <p className="mt-4 flex flex-wrap justify-between gap-3">
            <span>© {new Date().getFullYear()} Suki Nihon · sukinihon.in</span>
            <span className="kanji-mark text-[var(--crimson)]">SUKI · NIHON</span>
          </p>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a
        href={WA}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="whatsapp-pulse fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full grid place-items-center bg-[oklch(0.62_0.17_145)] text-white shadow-2xl hover:scale-105 transition"
      >
        <svg viewBox="0 0 32 32" className="w-7 h-7" fill="currentColor" aria-hidden="true">
          <path d="M19.11 17.18c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.1 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM16.03 5.33c-5.91 0-10.71 4.8-10.71 10.71 0 1.89.5 3.74 1.44 5.36L5 26.67l5.41-1.71a10.66 10.66 0 0 0 5.61 1.6h.01c5.91 0 10.71-4.8 10.71-10.71 0-2.86-1.11-5.55-3.14-7.58a10.65 10.65 0 0 0-7.57-3.14z" />
        </svg>
      </a>
    </div>
  );
}
