import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { clinic, directionsUrl } from "../data/clinic";
import { useLanguage } from "../i18n/LanguageContext";
import SEO from "../components/ui/SEO";
import PageHero from "../components/sections/PageHero";
import BookingForm from "../components/booking/BookingForm";
import Location from "../components/sections/Location";
import CTABanner from "../components/sections/CTABanner";
import Button from "../components/ui/Button";
import { buildWhatsAppChatLink } from "../utils/buildWhatsAppLink";
import { ANALYTICS_EVENTS, trackEvent } from "../utils/analytics";
import { buildDentistSchema } from "../utils/schema";

export default function Contact() {
  const { t, formatNumber } = useLanguage();

  return (
    <>
      <SEO
        title={t("seo.contact.title")}
        description={t("seo.contact.desc")}
        path="/contact"
        jsonLd={buildDentistSchema(t)}
      />
      <PageHero
        eyebrow={t("contact.eyebrow")}
        title={t("contact.title")}
        intro={t("contact.intro")}
      />

      <section className="section bg-ash">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <h2 className="type-section text-cosmic">{t("contact.formHeading")}</h2>
            <p className="type-body mt-2 max-w-prose text-ink-700">{t("contact.formText")}</p>
            <BookingForm className="mt-6" />
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-card bg-cloud p-6 md:p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-nav bg-mist text-cinder">
                <Phone aria-hidden="true" className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <h2 className="type-card mt-4 text-cosmic">{t("contact.callHeading")}</h2>
              <p className="type-small mt-1 text-ink-700">{t("contact.callText")}</p>
              <a
                href={clinic.phoneHref}
                onClick={() => trackEvent(ANALYTICS_EVENTS.call)}
                className="mt-2 inline-flex min-h-10 items-center font-heading text-xl font-semibold text-signal-700 hover:underline"
              >
                {formatNumber(clinic.phone)}
              </a>
            </div>

            <div className="rounded-card bg-cloud p-6 md:p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-nav bg-mist text-cinder">
                <MessageCircle aria-hidden="true" className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <h2 className="type-card mt-4 text-cosmic">{t("contact.whatsappHeading")}</h2>
              <p className="type-small mt-1 text-ink-700">{t("contact.whatsappText")}</p>
              <Button
                href={buildWhatsAppChatLink(t("whatsapp.chatMessage"))}
                variant="whatsapp"
                size="sm"
                icon={MessageCircle}
                external
                className="mt-3"
                onClick={() => trackEvent(ANALYTICS_EVENTS.whatsapp)}
              >
                {t("btn.whatsapp")}
              </Button>
            </div>

            <div className="rounded-card bg-cloud p-6 md:p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-nav bg-mist text-cinder">
                <Clock aria-hidden="true" className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <h2 className="type-card mt-4 text-cosmic">{t("location.hours")}</h2>
              <p className="type-small mt-1 text-ink-700">
                {t("clinic.hours.everyday")}: {t("clinic.hours.display")}
              </p>
              <p className="mt-1 text-xs text-ink-500">{t("newPatients.hoursNote")}</p>
            </div>

            <div className="rounded-card bg-cloud p-6 md:p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-nav bg-mist text-cinder">
                <MapPin aria-hidden="true" className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <h2 className="type-card mt-4 text-cosmic">{t("contact.visitHeading")}</h2>
              <p className="type-small mt-1 text-ink-700">
                {t("clinic.address")}
                <br />
                {t("clinic.landmarks")}
              </p>
              <Button
                href={directionsUrl}
                external
                variant="secondary"
                size="sm"
                className="mt-3"
              >
                {t("btn.directions")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Location />
      <CTABanner />
    </>
  );
}
