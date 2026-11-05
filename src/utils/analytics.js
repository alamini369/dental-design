/**
 * One small wrapper for conversion events, so the analytics provider can change
 * without touching components. No personal data is sent.
 * Add Plausible, GA, or another script in index.html to activate these events.
 */
export function trackEvent(name, params = {}) {
  if (typeof window === "undefined") return;

  if (typeof window.plausible === "function") {
    window.plausible(name, { props: params });
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: name, ...params });
  }
}

export const ANALYTICS_EVENTS = {
  call: "call_click",
  whatsapp: "whatsapp_click",
  book: "book_click",
  formSubmit: "booking_form_submit",
};
