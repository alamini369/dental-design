import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { clinic, directionsUrl } from "../data/clinic";
import { useLanguage } from "../i18n/LanguageContext";
import SEO from "../components/ui/SEO";
import PageHero from "../components/sections/PageHero";
import BookingForm from "../components/booking/BookingForm";
import Button from "../components/ui/Button";
import { buildWhatsAppChatLink } from "../utils/buildWhatsAppLink";
import { ANALYTICS_EVENTS, trackEvent } from "../utils/analytics";

export default function Book() {
  const { t, formatNumber } = useLanguage();

  return (
    <>
      <SEO title={t("seo.book.title")} description={t("seo.book.desc")} path="/book" />
      <PageHero
        eyebrow={t("cta.eyebrow")}
        title={t("contact.formHeading")}
        intro={t("contact.formText")}
      />

      <section className="section bg-ash">
        <div className="container-page grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <BookingForm />

          <aside className="flex flex-col gap-4">
            <div className="rounded-card bg-cloud p-6 md:p-8">
              <h2 className="type-card text-cosmic">{t("contact.callHeading")}</h2>
              <p className="type-small mt-1 text-ink-700">{t("contact.callText")}</p>
              <a
                href={clinic.phoneHref}
                onClick={() => trackEvent(ANALYTICS_EVENTS.call)}
                className="mt-2 inline-flex min-h-10 items-center gap-2 font-heading text-xl font-semibold text-signal-700 hover:underline"
              >
                <Phone aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
                {formatNumber(clinic.phone)}
              </a>
              <div className="mt-3">
                <Button
                  href={buildWhatsAppChatLink(t("whatsapp.chatMessage"))}
                  variant="whatsapp"
                  size="sm"
                  icon={MessageCircle}
                  external
                  onClick={() => trackEvent(ANALYTICS_EVENTS.whatsapp)}
                >
                  {t("btn.whatsapp")}
                </Button>
              </div>
            </div>

            <div className="rounded-card bg-cloud p-6 md:p-8">
              <h2 className="type-card text-cosmic">{t("location.hours")}</h2>
              <p className="type-small mt-2 flex items-center gap-2 text-ink-700">
                <Clock aria-hidden="true" className="h-4 w-4 text-signal-700" strokeWidth={1.8} />
                {t("clinic.hours.everyday")}: {t("clinic.hours.display")}
              </p>
            </div>

            <div className="rounded-card bg-cloud p-6 md:p-8">
              <h2 className="type-card text-cosmic">{t("contact.visitHeading")}</h2>
              <p className="type-small mt-2 flex gap-2 text-ink-700">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-signal-700"
                  strokeWidth={1.8}
                />
                <span>
                  {t("clinic.address")}
                  <br />
                  {t("clinic.landmarks")}
                </span>
              </p>
              <Button href={directionsUrl} external variant="secondary" size="sm" className="mt-3">
                {t("btn.directions")}
              </Button>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
