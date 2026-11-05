import { useState } from "react";
import { CalendarCheck, Menu, Phone } from "lucide-react";
import { NavLink } from "react-router-dom";
import { clinic } from "../../data/clinic";
import { useLanguage } from "../../i18n/LanguageContext";
import { ANALYTICS_EVENTS, trackEvent } from "../../utils/analytics";
import Button from "../ui/Button";
import LanguageToggle from "./LanguageToggle";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import ServicesDropdown from "./ServicesDropdown";

export default function Header() {
  const { t, formatNumber } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-fog/20 bg-cosmic">
      <div className="container-page flex h-16 items-center justify-between gap-3 md:h-[72px]">
        <Logo light />

        <nav
          aria-label={t("nav.main")}
          className="hidden shrink-0 items-center gap-1 whitespace-nowrap xl:flex xl:gap-2"
        >
          <HeaderNavLink to="/about" label={t("nav.about")} />
          <ServicesDropdown />
          <HeaderNavLink to="/problems" label={t("nav.problems")} />
          <HeaderNavLink to="/new-patients" label={t("nav.newPatients")} />
          <HeaderNavLink to="/contact" label={t("nav.contact")} />
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <LanguageToggle className="hidden sm:inline-flex" onDark />

          <a
            href={clinic.phoneHref}
            onClick={() => trackEvent(ANALYTICS_EVENTS.call)}
            className="hidden min-h-10 items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 text-xs font-medium text-white/70 transition-colors hover:text-white xl:inline-flex xl:text-sm"
          >
            <Phone aria-hidden="true" className="h-4 w-4 text-signal" strokeWidth={1.8} />
            {formatNumber(clinic.phone)}
          </a>

          <Button
            to="/book"
            variant="primary"
            size="sm"
            icon={CalendarCheck}
            className="hidden whitespace-nowrap sm:inline-flex"
            onClick={() => trackEvent(ANALYTICS_EVENTS.book)}
          >
            {t("btn.book")}
          </Button>

          <a
            href={clinic.phoneHref}
            onClick={() => trackEvent(ANALYTICS_EVENTS.call)}
            aria-label={`${t("btn.call")} ${formatNumber(clinic.phone)}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-fog/40 text-white transition-colors hover:border-white sm:hidden"
          >
            <Phone aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label={t("nav.openMenu")}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-fog/40 text-white transition-colors hover:border-white xl:hidden"
          >
            <Menu aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
          </button>
        </div>
      </div>

      <div id="mobile-menu">
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </header>
  );
}

function HeaderNavLink({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `inline-flex min-h-9 items-center rounded-nav px-2.5 text-sm font-medium transition-colors hover:text-white xl:px-3 ${
          isActive ? "text-signal" : "text-white/70"
        }`
      }
    >
      {label}
    </NavLink>
  );
}
