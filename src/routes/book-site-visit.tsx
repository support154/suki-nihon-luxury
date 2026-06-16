import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, Breadcrumbs, CTAStrip } from "@/components/SiteLayout";
import { SITE, WA, breadcrumbJsonLd } from "@/lib/site";

const PATH = "/book-site-visit";
const TITLE = "Book Site Visit | Suki Nihon Phase 2 Alibag";
const DESC = "Schedule a site visit and explore premium investment opportunities at Suki Nihon Phase 2 Alibag.";

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
            { name: "Book Site Visit", path: PATH },
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
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Book Site Visit", path: PATH }]} />
      <PageHero
        label="Visit the Site"
        title="Book Your Site Visit"
        intro="Walk the plots, see the demarcations and meet our team on-site at Bagmala, Alibag."
      />
      <section className="py-20 md:py-28 bg-parchment">
        <div className="max-w-3xl mx-auto px-6">
          <form
            className="card-zen p-8 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              const f = e.currentTarget;
              const data = new FormData(f);
              const msg = `Hi, I'd like to book a site visit at Suki Nihon Phase 2 Alibag.\n\nName: ${data.get("name")}\nPhone: ${data.get("phone")}\nPreferred Date: ${data.get("date")}\nVisitors: ${data.get("visitors")}\nNotes: ${data.get("notes") ?? ""}`;
              window.open(`https://wa.me/919004792888?text=${encodeURIComponent(msg)}`, "_blank");
            }}
          >
            <h2 className="headline text-2xl">Schedule a Visit</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" required placeholder="Full Name" className="bg-transparent border-b border-[oklch(0.6_0.04_60/0.5)] py-2 outline-none focus:border-[var(--crimson)]" />
              <input name="phone" required placeholder="Phone Number" className="bg-transparent border-b border-[oklch(0.6_0.04_60/0.5)] py-2 outline-none focus:border-[var(--crimson)]" />
              <input name="date" required type="date" className="bg-transparent border-b border-[oklch(0.6_0.04_60/0.5)] py-2 outline-none focus:border-[var(--crimson)]" />
              <input name="visitors" placeholder="No. of Visitors" className="bg-transparent border-b border-[oklch(0.6_0.04_60/0.5)] py-2 outline-none focus:border-[var(--crimson)]" />
            </div>
            <textarea name="notes" rows={3} placeholder="Any specific requirement?" className="w-full bg-transparent border-b border-[oklch(0.6_0.04_60/0.5)] py-2 outline-none focus:border-[var(--crimson)]" />
            <button type="submit" className="btn-primary">Confirm via WhatsApp</button>
            <p className="text-xs text-[var(--sumi)] italic">
              We'll confirm slot availability within working hours. Pick-up &amp; drop service available from Alibag &amp; Mandwa Jetty.
            </p>
          </form>

          <div className="mt-10 text-center">
            <p className="section-label">Or call us directly</p>
            <a href={`tel:${SITE.phoneRaw}`} className="font-display text-3xl text-[var(--crimson)] mt-2 block">{SITE.phone}</a>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-ghost mt-4">WhatsApp Us</a>
          </div>
        </div>
      </section>
      <CTAStrip />
    </SiteLayout>
  );
}
