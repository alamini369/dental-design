/**
 * Accepts Bangladeshi mobile numbers written as:
 *   01XXXXXXXXX, +8801XXXXXXXXX, 8801XXXXXXXXX
 * Spaces, dashes, and parentheses are ignored.
 */
export function normalizePhone(value = "") {
  return String(value).replace(/[\s\-()]/g, "");
}

export function validatePhone(value = "") {
  const phone = normalizePhone(value);
  return /^(?:\+?880|0)1[3-9]\d{8}$/.test(phone);
}

/** International form used for wa.me links: 8801XXXXXXXXX */
export function toInternationalPhone(value = "") {
  const phone = normalizePhone(value);
  if (phone.startsWith("+880")) return phone.slice(1);
  if (phone.startsWith("880")) return phone;
  if (phone.startsWith("0")) return `88${phone}`;
  return phone;
}
