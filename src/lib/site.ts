export const SITE = {
  url: "https://www.sukinihon.in",
  name: "Suki Nihon Phase 2 Alibag",
  phone: "+91 9004792888",
  phoneRaw: "+919004792888",
  email: "sales@sukinihon.in",
  address: {
    street: "Survey No. 51/6 & 121/5, Opp. HP Petrol Pump, Bagmala",
    locality: "Alibag",
    region: "Maharashtra",
    postal: "402201",
    country: "IN",
  },
  geo: { lat: 18.5728, lng: 72.9012 },
};

export const WA =
  "https://wa.me/919004792888?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Suki%20Nihon%20Phase%202%20Alibag.";

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about-suki-nihon-phase-2-alibag", label: "About" },
  { to: "/phase-2-overview", label: "Phase 2" },
  { to: "/master-plan", label: "Master Plan" },
  { to: "/plot-sizes-pricing", label: "Pricing" },
  { to: "/amenities", label: "Amenities" },
  { to: "/location-connectivity", label: "Location" },
  { to: "/investment-benefits", label: "Investment" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faqs", label: "FAQs" },
  { to: "/blogs", label: "Blog" },
  { to: "/contact-us", label: "Contact" },
] as const;

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path}`,
    })),
  };
}

export function realEstateJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: "Suki Nihon Phase 2 Alibag — Premium Investment Plots",
    url: SITE.url,
    description:
      "Premium investment plots at Suki Nihon Phase 2 Alibag with gated community, scenic surroundings and modern amenities.",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postal,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    telephone: SITE.phone,
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: SITE.name,
    image: `${SITE.url}/og.jpg`,
    url: SITE.url,
    telephone: SITE.phone,
    priceRange: "₹₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postal,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    areaServed: ["Alibag", "Mumbai", "Navi Mumbai", "Panvel", "Pune"],
  };
}
