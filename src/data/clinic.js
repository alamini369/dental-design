/**
 * Single source of truth for clinic facts.
 * Do not hardcode these values inside components.
 *
 * Items marked [TODO] must be confirmed by the clinic owner before launch.
 */
export const clinic = {
  name: "Metro Dental BD",
  nameKey: "clinic.name",
  dentist: "Dr. Mustak",
  dentistKey: "clinic.dentist",

  phone: "01716374977",
  phoneHref: "tel:+8801716374977",
  whatsapp: "8801716374977",

  address: "59 Kazi Alauddin Rd, Bangshal, Dhaka 1100, Bangladesh",
  addressKey: "clinic.address",
  landmarksKey: "clinic.landmarks",
  mapQuery: "59 Kazi Alauddin Rd, Bangshal, Dhaka 1100, Bangladesh",
  // Structured parts for schema.org (keep in sync with `address` above).
  addressParts: {
    streetAddress: "59 Kazi Alauddin Rd, Bangshal",
    addressLocality: "Dhaka",
    postalCode: "1100",
    addressCountry: "BD",
  },

  // Hours supplied in AGENTS.md: 10 AM to 9 PM. [TODO: owner to confirm exact days]
  hours: [
    {
      dayKey: "clinic.hours.everyday",
      day: "Every day",
      dayShort: "Everyday",
      opens: "10:00",
      closes: "21:00",
      display: "10:00 AM – 9:00 PM",
      schemaDays: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
    },
  ],

  // [TODO: paste the Google Maps embed URL from Google Maps > Share > Embed a map]
  mapEmbedUrl: "",
  // [TODO: add the real Google Business Profile review link]
  googleReviewsUrl: "",

  // [TODO: add the real social profile links]
  social: {
    facebook: "",
    instagram: "",
  },

  // Used for canonical/OG URLs and the sitemap. Set VITE_SITE_URL at build time.
  siteUrl: import.meta.env.VITE_SITE_URL || "",

  // The offer banner only renders when `enabled` is true and real copy exists.
  // [TODO: owner to confirm an offer; leave disabled until then]
  offer: {
    enabled: false,
    titleKey: "offer.title",
    textKey: "offer.text",
  },

  // WhatsApp message template keys live in i18n (whatsapp.*)
  booking: {
    // Appointment requests are confirmed by the clinic on WhatsApp, not by the site.
    replyNoteKey: "form.success.text",
  },
};

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  clinic.mapQuery,
)}`;

export const mapPreviewUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  clinic.mapQuery,
)}`;

// Keyless Google Maps iframe embed derived from the address; prefers the
// owner-pasted embed URL once mapEmbedUrl is filled in.
export const mapEmbedSrc =
  clinic.mapEmbedUrl ||
  `https://maps.google.com/maps?q=${encodeURIComponent(clinic.mapQuery)}&z=16&output=embed`;
