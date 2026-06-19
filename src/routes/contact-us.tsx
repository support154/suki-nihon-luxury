import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, Breadcrumbs, CTAStrip } from "@/components/SiteLayout";
import { SITE, WA, breadcrumbJsonLd } from "@/lib/site";

const TITLE = "Contact Us | Suki Nihon Phase 2 Alibag";
const DESC = "Get in touch with our sales team for site visits, pricing details, and project information.";

const PATH = "/contact-us";
export const Route = createFileRoute("/contact-us")({
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
            { name: "Contact Us", path: PATH },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: TITLE,
          url: `${SITE.url}${PATH}/`,
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact Us", path: PATH }]} />
      <PageHero
        label="Get in Touch"
        title="Contact Suki Nihon Phase 2 Alibag"
        intro="Speak with our sales team for site visits, pricing details and project information."
      />
      <section className="py-20 md:py-28 bg-parchment">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="card-zen p-7">
              <div className="section-label">Phone &amp; WhatsApp</div>
              <a href={`tel:${SITE.phoneRaw}`} className="font-display text-3xl text-[var(--crimson)] mt-3 block">{SITE.phone}</a>
              <a href={WA} target="_blank" rel="noreferrer" className="btn-primary mt-5">Chat on WhatsApp</a>
            </div>
            <div className="card-zen p-7">
              <div className="section-label">Site Address</div>
              <p className="mt-3 text-[var(--sumi)] leading-relaxed">
                {SITE.address.street},<br />
                {SITE.address.locality} {SITE.address.postal}, {SITE.address.region}<br />
                Direct access via Alibag–Revdanda Road.
              </p>
            </div>
            <div className="card-zen p-7">
              <div className="section-label">Email</div>
              <a href={`mailto:${SITE.email}`} className="font-display text-2xl mt-3 block">{SITE.email}</a>
            </div>
          </div>

          <form
            action="https://formsubmit.co/support@nuwebwave.com"
            method="POST"
            className="card-zen p-7 space-y-4"
          >
            <input type="hidden" name="_subject" value="New enquiry — Suki Nihon Phase 2 Alibag" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={`${SITE.url}/contact-us/?sent=1`} />
            <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
            <h2 className="headline text-2xl">Send an enquiry</h2>
            <input name="name" required placeholder="Full Name" className="w-full bg-transparent border-b border-[oklch(0.6_0.04_60/0.5)] py-2 outline-none focus:border-[var(--crimson)]" />
            <input name="phone" required placeholder="Phone Number" className="w-full bg-transparent border-b border-[oklch(0.6_0.04_60/0.5)] py-2 outline-none focus:border-[var(--crimson)]" />
            <input name="email" type="email" placeholder="Email (optional)" className="w-full bg-transparent border-b border-[oklch(0.6_0.04_60/0.5)] py-2 outline-none focus:border-[var(--crimson)]" />
            <textarea name="message" rows={4} placeholder="Tell us about your requirement…" className="w-full bg-transparent border-b border-[oklch(0.6_0.04_60/0.5)] py-2 outline-none focus:border-[var(--crimson)]" />
            <button type="submit" className="btn-primary mt-2">Send Enquiry</button>
            <p className="text-xs text-[var(--sumi)]/70">Or chat instantly on <a href={WA} target="_blank" rel="noreferrer" className="underline">WhatsApp</a>.</p>
          </form>
        </div>
      </section>
      <CTAStrip />
    </SiteLayout>
  );
}
