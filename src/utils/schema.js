import { clinic } from "../data/clinic";

/** schema.org Dentist / LocalBusiness JSON-LD built from clinic.js. */
export function buildDentistSchema(t) {
  const sameAs = [clinic.social.facebook, clinic.social.instagram, clinic.googleReviewsUrl].filter(
    Boolean,
  );

  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: t("clinic.name"),
    description: t("footer.about"),
    telephone: clinic.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.addressParts.streetAddress,
      addressLocality: clinic.addressParts.addressLocality,
      postalCode: clinic.addressParts.postalCode,
      addressCountry: clinic.addressParts.addressCountry,
    },
    openingHoursSpecification: clinic.hours.map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: entry.schemaDays,
      opens: entry.opens,
      closes: entry.closes,
    })),
    ...(clinic.siteUrl ? { url: clinic.siteUrl } : {}),
    ...(sameAs.length ? { sameAs } : {}),
  };
}

/** BreadcrumbList for service and inner pages (optional, keeps SEO tidy). */
export function buildBreadcrumbSchema(items) {
  if (!clinic.siteUrl) return null;
  const base = clinic.siteUrl.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${base}${item.path}`,
    })),
  };
}
