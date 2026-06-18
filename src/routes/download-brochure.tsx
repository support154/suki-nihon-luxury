import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, Breadcrumbs, CTAStrip } from "@/components/SiteLayout";
import { SITE, WA, breadcrumbJsonLd } from "@/lib/site";

const TITLE = "Download Brochure | Suki Nihon Phase 2 Alibag";
const DESC = "Download the latest project brochure including plot details, amenities, pricing, and location map.";

export const Route = createFileRoute("/download-brochure")({
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
            { name: "Download Brochure", path: PATH },
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
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Download Brochure", path: PATH }]} />
      <PageHero
        label="Project Brochure"
        title="Download Project Brochure"
        intro="Get the complete project deck — plot details, amenities, pricing structure and location map — sent instantly to your WhatsApp."
      />
      <section className="py-20 md:py-28 bg-parchment">
        <div className="max-w-2xl mx-auto px-6">
          <form
            className="card-zen p-8 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              const f = e.currentTarget;
              const data = new FormData(f);
              const msg = `Hi, please share the Suki Nihon Phase 2 Alibag brochure.\n\nName: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email") ?? ""}`;
              window.open(`https://wa.me/919004792888?text=${encodeURIComponent(msg)}`, "_blank");
            }}
          >
            <h2 className="headline text-2xl">Request the Brochure</h2>
            <input name="name" required placeholder="Full Name" className="w-full bg-transparent border-b border-[oklch(0.6_0.04_60/0.5)] py-2 outline-none focus:border-[var(--crimson)]" />
            <input name="phone" required placeholder="Phone Number" className="w-full bg-transparent border-b border-[oklch(0.6_0.04_60/0.5)] py-2 outline-none focus:border-[var(--crimson)]" />
            <input name="email" type="email" placeholder="Email (optional)" className="w-full bg-transparent border-b border-[oklch(0.6_0.04_60/0.5)] py-2 outline-none focus:border-[var(--crimson)]" />
            <button type="submit" className="btn-primary">Send Brochure on WhatsApp</button>
          </form>
          <div className="mt-8 text-center">
            <a href={WA} target="_blank" rel="noreferrer" className="btn-ghost">Or message {SITE.phone}</a>
          </div>
        </div>
      </section>
      <CTAStrip />
    </SiteLayout>
  );
}
