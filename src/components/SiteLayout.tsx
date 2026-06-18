import { Link } from "@tanstack/react-router";
import { useState } from "react";
import type { ReactNode } from "react";
import { SITE, WA } from "@/lib/site";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-parchment text-[var(--ink)]">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}

type NavItem = { to: string; label: string };
type NavGroup = { label: string; to?: string; children?: NavItem[] };

const PRIMARY_NAV: NavGroup[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about-suki-nihon-phase-2-alibag" },
  {
    label: "Phase 2",
    to: "/phase-2-overview",
    children: [
      { to: "/master-plan", label: "Master Plan" },
      { to: "/plot-sizes-pricing", label: "Pricing" },
      { to: "/amenities", label: "Amenities" },
      { to: "/location-connectivity", label: "Location" },
    ],
  },
  { label: "Investment", to: "/investment-benefits" },
  { label: "Gallery", to: "/gallery" },
  { label: "FAQs", to: "/faqs" },
  { label: "Blog", to: "/blogs" },
  { label: "Contact", to: "/contact-us" },
];

function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[oklch(0.93_0.04_80/0.9)] border-b border-[oklch(0.7_0.04_60/0.35)]">
      <div className="max-w-7xl mx-auto px-5 h-14 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <span className="w-6 h-6 rounded-full bg-[var(--crimson)] shadow-[0_0_0_2px_oklch(0.97_0.02_80)]" />
          <span className="font-display text-base tracking-[0.22em] uppercase">Suki Nihon</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-[0.68rem] tracking-[0.18em] uppercase text-[var(--sumi)]">
          {PRIMARY_NAV.map((g) =>
            g.children ? (
              <div key={g.label} className="relative group">
                <Link
                  to={g.to!}
                  className="px-2.5 py-1.5 inline-flex items-center gap-1 hover:text-[var(--crimson)] transition rounded"
                  activeProps={{ className: "text-[var(--crimson)]" }}
                >
                  {g.label}
                  <span className="text-[0.55rem] opacity-60">▾</span>
                </Link>
                <div className="absolute left-0 top-full pt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition">
                  <div className="min-w-[180px] rounded-md bg-[oklch(0.97_0.02_80)] border border-[oklch(0.7_0.04_60/0.3)] shadow-xl py-1.5">
                    {g.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className="block px-3 py-1.5 text-[0.68rem] tracking-[0.18em] uppercase hover:bg-[oklch(0.9_0.04_80)] hover:text-[var(--crimson)] transition"
                        activeProps={{ className: "text-[var(--crimson)]" }}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={g.to}
                to={g.to!}
                className="px-2.5 py-1.5 hover:text-[var(--crimson)] transition rounded"
                activeProps={{ className: "text-[var(--crimson)]" }}
                activeOptions={{ exact: true }}
              >
                {g.label}
              </Link>
            )
          )}
        </nav>
        <div className="flex items-center gap-2">
          <a href={WA} target="_blank" rel="noreferrer" className="btn-primary !py-2 !px-3.5 text-[0.7rem]">Enquire</a>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden w-9 h-9 grid place-items-center rounded border border-[oklch(0.7_0.04_60/0.4)]"
          >
            <span className="block w-4 h-px bg-current relative before:content-[''] before:absolute before:-top-1.5 before:left-0 before:w-4 before:h-px before:bg-current after:content-[''] after:absolute after:top-1.5 after:left-0 after:w-4 after:h-px after:bg-current" />
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden border-t border-[oklch(0.7_0.04_60/0.25)] bg-[oklch(0.95_0.03_80)]">
          <ul className="px-5 py-3 text-[0.72rem] tracking-[0.18em] uppercase text-[var(--sumi)]">
            {PRIMARY_NAV.map((g) => (
              <li key={g.label} className="py-1">
                {g.to && (
                  <Link
                    to={g.to}
                    onClick={() => setOpen(false)}
                    className="block py-1 hover:text-[var(--crimson)]"
                    activeProps={{ className: "text-[var(--crimson)]" }}
                  >
                    {g.label}
                  </Link>
                )}
                {g.children && (
                  <ul className="pl-4 border-l border-[oklch(0.7_0.04_60/0.3)] mt-1">
                    {g.children.map((c) => (
                      <li key={c.to}>
                        <Link
                          to={c.to}
                          onClick={() => setOpen(false)}
                          className="block py-1 text-[0.68rem] opacity-80 hover:text-[var(--crimson)]"
                          activeProps={{ className: "text-[var(--crimson)] !opacity-100" }}
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-6 pt-6">
      <ol className="flex flex-wrap items-center gap-2 text-xs tracking-[0.18em] uppercase text-[var(--sumi)]">
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={it.path} className="flex items-center gap-2">
              {last ? (
                <span className="text-[var(--crimson)]">{it.name}</span>
              ) : (
                <Link to={it.path} className="hover:text-[var(--crimson)] transition">
                  {it.name}
                </Link>
              )}
              {!last && <span className="opacity-40">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function PageHero({
  label,
  title,
  intro,
}: {
  label: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <section className="relative bg-parchment-dark py-16 md:py-24 border-b border-[oklch(0.7_0.04_60/0.25)]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="section-label">{label}</p>
        <h1 className="headline text-4xl md:text-6xl mt-5">{title}</h1>
        {intro && (
          <p className="mt-6 max-w-3xl mx-auto text-[var(--sumi)] text-lg leading-relaxed font-serif italic">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}

export function CTAStrip() {
  return (
    <section className="bg-[var(--ink)] text-[var(--parchment)] py-14">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="section-label !text-[var(--gold)]">Schedule</p>
        <h2 className="headline text-3xl md:text-4xl mt-3 text-[var(--parchment)]">
          Schedule Your Site Visit
        </h2>
        <p className="mt-4 text-[var(--parchment)]/75 max-w-2xl mx-auto">
          Walk the master-planned layout, see the plot demarcations and feel the calm of Bagmala, Alibag.
        </p>
        <div className="mt-7 flex flex-wrap gap-3 justify-center">
          <Link to="/book-site-visit" className="btn-primary">Book Site Visit</Link>
          <a href={WA} target="_blank" rel="noreferrer" className="btn-ghost !text-[var(--parchment)] !border-[var(--parchment)]/40">
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="relative bg-[var(--ink)] text-[var(--parchment)] pt-20 pb-10">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--crimson)] to-transparent" />
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-[var(--crimson)]" />
            <span className="font-display tracking-[0.3em] text-xl uppercase">Suki Nihon</span>
          </div>
          <p className="mt-4 text-sm text-[var(--parchment)]/70 leading-relaxed font-serif italic max-w-md">
            Unveil the Japan at Alibag — premium investment plots at Suki Nihon Phase 2, Bagmala.
          </p>
          <a href={WA} target="_blank" rel="noreferrer" className="btn-primary mt-6">{SITE.phone}</a>
        </div>

        <div>
          <div className="section-label !text-[var(--gold)]">Explore</div>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.slice(1, 8).map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-[var(--parchment)]/80 hover:text-[var(--gold)] transition">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="section-label !text-[var(--gold)]">Contact</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/contact-us" className="text-[var(--parchment)]/80 hover:text-[var(--gold)] transition">Contact Us</Link></li>
            <li><Link to="/book-site-visit" className="text-[var(--parchment)]/80 hover:text-[var(--gold)] transition">Book Site Visit</Link></li>
            <li><Link to="/download-brochure" className="text-[var(--parchment)]/80 hover:text-[var(--gold)] transition">Download Brochure</Link></li>
            <li><Link to="/faqs" className="text-[var(--parchment)]/80 hover:text-[var(--gold)] transition">FAQs</Link></li>
          </ul>
          <p className="mt-4 text-xs text-[var(--parchment)]/60 leading-relaxed">
            {SITE.address.street},<br />
            {SITE.address.locality} {SITE.address.postal}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-14 pt-8 border-t border-[var(--parchment)]/15 text-[0.72rem] leading-relaxed text-[var(--parchment)]/55">
        <p>
          <strong className="text-[var(--parchment)]/80">Developers:</strong> Bhimeshwar Developers (Promoter) · Orbits Infra Developers (Developer — Concept to Creation).
        </p>
        <p className="mt-3">
          <strong className="text-[var(--parchment)]/80">Disclaimer:</strong> This communication is purely conceptual and not a legal offering. It is made only for promotional purposes. The information contained is only indicative of the kind of development proposed and is subject to change. The developers reserve the right to make changes or alterations.
        </p>
        <p className="mt-4 flex flex-wrap justify-between gap-3">
          <span>© {new Date().getFullYear()} Suki Nihon · sukinihon.in</span>
          <span className="kanji-mark text-[var(--crimson)]">SUKI · NIHON</span>
        </p>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
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
  );
}
