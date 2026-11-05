import { Clock, Facebook, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { clinic, directionsUrl } from "../../data/clinic";
import { services } from "../../data/services";
import { useLanguage } from "../../i18n/LanguageContext";
import { buildWhatsAppChatLink } from "../../utils/buildWhatsAppLink";
import { ANALYTICS_EVENTS, trackEvent } from "../../utils/analytics";
import Logo from "./Logo";

const quickLinks = [
  { to: "/about", key: "nav.about" },
  { to: "/services", key: "nav.services" },
  { to: "/problems", key: "nav.problems" },
  { to: "/new-patients", key: "nav.newPatients" },
  { to: "/contact", key: "nav.contact" },
  { to: "/book", key: "btn.book" },
];

export default function Footer() {
  const { t, formatNumber } = useLanguage();
  const hasSocial = Boolean(clinic.social.facebook || clinic.social.instagram);

  return (
    <footer className="border-t border-fog/20 bg-cosmic">
      <div className="container-page py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo light />
            <p className="type-small mt-4 max-w-xs text-fog">{t("footer.about")}</p>
            <div className="mt-5 flex flex-col gap-1 text-sm text-fog">
              <span className="inline-flex items-center gap-2 font-medium text-white">
                <Clock aria-hidden="true" className="h-4 w-4 text-signal" strokeWidth={1.8} />
                {t("footer.hours")}
              </span>
              <span>
                {t("clinic.hours.everyday")}: {t("clinic.hours.display")}
              </span>
            </div>
          </div>

          <nav aria-label={t("footer.services")}>
            <h2 className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-fog">
              {t("footer.services")}
            </h2>
            <ul className="mt-4 flex flex-col gap-1">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex min-h-10 items-center text-sm text-fog transition-colors hover:text-white"
                  >
                    {t(service.titleKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t("footer.quickLinks")}>
            <h2 className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-fog">
              {t("footer.quickLinks")}
            </h2>
            <ul className="mt-4 flex flex-col gap-1">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-flex min-h-10 items-center text-sm text-fog transition-colors hover:text-white"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-fog">
              {t("footer.contact")}
            </h2>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-fog">
              <li className="flex gap-2.5">
                <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-signal" strokeWidth={1.8} />
                <span>
                  {t("clinic.address")}
                  <br />
                  <span className="text-fog">{t("clinic.landmarks")}</span>
                </span>
              </li>
              <li>
                <a
                  href={clinic.phoneHref}
                  onClick={() => trackEvent(ANALYTICS_EVENTS.call)}
                  className="inline-flex min-h-10 items-center gap-2.5 font-medium text-white hover:underline"
                >
                  <Phone aria-hidden="true" className="h-4 w-4 text-signal" strokeWidth={1.8} />
                  {formatNumber(clinic.phone)}
                </a>
              </li>
              <li>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-2.5 hover:text-white hover:underline"
                >
                  <MapPin aria-hidden="true" className="h-4 w-4 text-signal" strokeWidth={1.8} />
                  {t("btn.directions")}
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppChatLink(t("whatsapp.chatMessage"))}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent(ANALYTICS_EVENTS.whatsapp)}
                  className="inline-flex min-h-10 items-center gap-2.5 hover:text-white hover:underline"
                >
                  <MessageCircle aria-hidden="true" className="h-4 w-4 text-signal" strokeWidth={1.8} />
                  {t("btn.whatsapp")}
                </a>
              </li>
            </ul>

            {hasSocial ? (
              <div className="mt-5">
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-fog">
                  {t("footer.follow")}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  {clinic.social.facebook ? (
                    <a
                      href={clinic.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-fog/30 text-white hover:border-white"
                    >
                      <Facebook aria-hidden="true" className="h-5 w-5" />
                    </a>
                  ) : null}
                  {clinic.social.instagram ? (
                    <a
                      href={clinic.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-fog/30 text-white hover:border-white"
                    >
                      <Instagram aria-hidden="true" className="h-5 w-5" />
                    </a>
                  ) : null}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-fog/20 pt-6 text-xs text-fog sm:flex-row sm:items-center sm:justify-between">
          <p>{t("footer.copyright")}</p>
          <p>{t("footer.callNote")}</p>
        </div>
      </div>
    </footer>
  );
}
