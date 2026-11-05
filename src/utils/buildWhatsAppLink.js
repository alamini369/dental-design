import { clinic } from "../data/clinic";

export const whatsappBase = `https://wa.me/${clinic.whatsapp}`;

/**
 * Build a wa.me link with the appointment request prefilled.
 * @param {{name?: string, phone?: string, date?: string, time?: string, treatment?: string, message?: string}} values
 * @param {string} template - i18n string with {name}, {phone}, ... placeholders
 * @param {string} fallbackTreatment - used when no treatment is selected
 */
export function buildWhatsAppLink(values, template, fallbackTreatment = "-") {
  const vars = {
    name: values.name?.trim() || "-",
    phone: values.phone?.trim() || "-",
    date: values.date?.trim() || "-",
    time: values.time?.trim() || "-",
    treatment: values.treatment?.trim() || fallbackTreatment,
    message: values.message?.trim() || "-",
  };

  const text = String(template).replace(/\{(\w+)\}/g, (match, key) =>
    vars[key] === undefined ? match : vars[key],
  );

  return `${whatsappBase}?text=${encodeURIComponent(text)}`;
}

export function buildWhatsAppChatLink(message) {
  return `${whatsappBase}?text=${encodeURIComponent(message)}`;
}
