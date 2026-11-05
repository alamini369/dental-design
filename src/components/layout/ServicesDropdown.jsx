import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { services } from "../../data/services";
import { useLanguage } from "../../i18n/LanguageContext";

export default function ServicesDropdown() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  };

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((current) => !current)}
        className="inline-flex min-h-9 items-center gap-1 whitespace-nowrap rounded-nav px-2.5 text-sm font-medium text-white/70 transition-colors hover:text-white xl:px-3"
      >
        {t("nav.services")}
        <ChevronDown
          aria-hidden="true"
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          strokeWidth={2}
        />
      </button>

      {open ? (
        <div
          className="dropdown-fade absolute left-0 top-full z-50 w-64 overflow-hidden rounded-card border border-fog/25 bg-cosmic py-2"
          onMouseEnter={openMenu}
          onMouseLeave={scheduleClose}
        >
          <Link
            to="/services"
            className="block px-4 py-3 text-sm font-medium text-signal transition-colors hover:bg-white/5"
            onClick={() => setOpen(false)}
          >
            {t("btn.viewAll")}
          </Link>
          <div className="my-1 border-t border-fog/20" />
          {services.map((service) => (
            <NavLink
              key={service.slug}
              to={`/services/${service.slug}`}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 text-sm transition-colors hover:bg-white/5 hover:text-white ${
                  isActive ? "font-medium text-signal" : "text-white/70"
                }`
              }
            >
              {t(service.titleKey)}
            </NavLink>
          ))}
        </div>
      ) : null}
    </div>
  );
}
