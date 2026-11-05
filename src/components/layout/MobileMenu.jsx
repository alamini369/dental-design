import { useEffect, useRef, useState } from "react";
import { CalendarCheck, ChevronDown, MessageCircle, Phone, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { clinic } from "../../data/clinic";
import { services } from "../../data/services";
import { useLanguage } from "../../i18n/LanguageContext";
import { buildWhatsAppChatLink } from "../../utils/buildWhatsAppLink";
import { ANALYTICS_EVENTS, trackEvent } from "../../utils/analytics";
import Button from "../ui/Button";
import LanguageToggle from "./LanguageToggle";
import Logo from "./Logo";

const navLinks = [
  { to: "/about", key: "nav.about" },
  { to: "/problems", key: "nav.problems" },
  { to: "/new-patients", key: "nav.newPatients" },
  { to: "/contact", key: "nav.contact" },
];

// Must match the .menu-sheet transition duration in styles/index.css.
const SHEET_MS = 320;

export default function MobileMenu({ open, onClose }) {
  const { t, formatNumber } = useLanguage();
  const location = useLocation();
  const panelRef = useRef(null);
  const closeButtonRef = useRef(null);
  const pathnameRef = useRef(location.pathname);
  const [servicesOpen, setServicesOpen] = useState(false);
  // Stay mounted while the sheet slides back out (CSS: .menu-sheet).
  const [mounted, setMounted] = useState(open);
  const [entered, setEntered] = useState(open);

  useEffect(() => {
    if (open) {
      setMounted(true);
      return undefined;
    }
    setEntered(false);
    const timer = setTimeout(() => setMounted(false), SHEET_MS);
    return () => clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (!mounted || !open) return undefined;
    const raf = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(raf);
  }, [mounted, open]);

  // Close only when the route actually changes (not when the menu opens).
  useEffect(() => {
    if (pathnameRef.current !== location.pathname) {
      pathnameRef.current = location.pathname;
      onClose();
    }
  }, [location.pathname, onClose]);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = panelRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!mounted) return null;

  return (
    <div
      className={`menu-sheet fixed inset-0 z-[60] xl:hidden ${entered ? "" : "menu-sheet-hidden"}`}
      role="dialog"
      aria-modal="true"
      aria-label={t("nav.main")}
    >
      <div className="flex h-full flex-col overflow-y-auto bg-cosmic" ref={panelRef}>
        <div className="flex items-center justify-between border-b border-fog/20 px-4 py-3">
          <Logo light onClick={onClose} />
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={t("nav.closeMenu")}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-fog/30 text-white hover:border-white"
          >
            <X aria-hidden="true" className="h-6 w-6" strokeWidth={1.8} />
          </button>
        </div>

        <nav aria-label={t("nav.main")} className="flex-1 px-4 py-4">
          <ul className="flex flex-col">
            <li>
              <NavLink
                to="/"
                onClick={onClose}
                className={({ isActive }) =>
                  `flex min-h-12 items-center rounded-nav px-3 text-base font-medium ${
                    isActive ? "bg-white/5 text-signal" : "text-white/80"
                  }`
                }
              >
                {t("nav.home")}
              </NavLink>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setServicesOpen((current) => !current)}
                aria-expanded={servicesOpen}
                aria-controls="mobile-services-panel"
                className="flex min-h-12 w-full items-center justify-between rounded-nav px-3 text-left text-base font-medium text-white/80"
              >
                {t("nav.services")}
                <ChevronDown
                  aria-hidden="true"
                  className={`h-5 w-5 text-fog transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                id="mobile-services-panel"
                className={`grid transition-[grid-template-rows] duration-300 ${
                  servicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <ul className="mb-2 ml-3 border-l border-fog/20 pl-3">
                    <li>
                      <Link
                        to="/services"
                        onClick={onClose}
                        className="flex min-h-12 items-center rounded-nav px-3 text-sm font-medium text-signal"
                      >
                        {t("btn.viewAll")}
                      </Link>
                    </li>
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          to={`/services/${service.slug}`}
                          onClick={onClose}
                          className="flex min-h-12 items-center rounded-nav px-3 text-sm text-white/70 hover:text-white"
                        >
                          {t(service.titleKey)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex min-h-12 items-center rounded-nav px-3 text-base font-medium ${
                      isActive ? "bg-white/5 text-signal" : "text-white/80"
                    }`
                  }
                >
                  {t(link.key)}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3 border-t border-fog/20 pt-6">
            <Button to="/book" variant="primary" fullWidth icon={CalendarCheck} onClick={onClose}>
              {t("btn.book")}
            </Button>
            <Button
              href={clinic.phoneHref}
              variant="onDark"
              fullWidth
              icon={Phone}
              onClick={() => trackEvent(ANALYTICS_EVENTS.call)}
            >
              {t("btn.call")} {formatNumber(clinic.phone)}
            </Button>
            <Button
              href={buildWhatsAppChatLink(t("whatsapp.chatMessage"))}
              variant="whatsappOnDark"
              fullWidth
              icon={MessageCircle}
              external
              onClick={() => trackEvent(ANALYTICS_EVENTS.whatsapp)}
            >
              {t("btn.whatsapp")}
            </Button>
            <div className="flex justify-center pt-2">
              <LanguageToggle onDark />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
