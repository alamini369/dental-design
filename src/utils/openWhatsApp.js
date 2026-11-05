/** Open WhatsApp in a new tab without handing it a reference to this page. */
export function openWhatsApp(url) {
  if (typeof window === "undefined") return null;
  const win = window.open(url, "_blank", "noopener,noreferrer");
  if (win) win.opener = null;
  return win;
}
