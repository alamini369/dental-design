import { CalendarCheck, CheckCircle2, Clock, MapPin } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import SEO from "../components/ui/SEO";
import PageHero from "../components/sections/PageHero";
import ScrollReveal from "../components/ui/ScrollReveal";
import Button from "../components/ui/Button";
import CTABanner from "../components/sections/CTABanner";
import { clinic, directionsUrl } from "../data/clinic";
import { ANALYTICS_EVENTS, trackEvent } from "../utils/analytics";

export default function NewPatients() {
  const { t, formatNumber } = useLanguage();

  return (
    <>
      <SEO
        title={t("seo.newPatients.title")}
        description={t("seo.newPatients.desc")}
        path="/new-patients"
      />
      <PageHero
        eyebrow={t("newPatients.eyebrow")}
        title={t("newPatients.title")}
        intro={t("newPatients.intro")}
      >
        <Button
          to="/book"
          variant="primary"
          icon={CalendarCheck}
          onClick={() => trackEvent(ANALYTICS_EVENTS.book)}
        >
          {t("btn.book")}
        </Button>
      </PageHero>

      <section className="section bg-cloud">
        <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
          <div>
            <ol className="flex flex-col gap-4">
              {[1, 2, 3, 4].map((step, index) => (
                <ScrollReveal
                  as="li"
                  key={step}
                  delay={index * 50}
                  className="flex gap-4 rounded-card bg-ash p-5 md:p-6"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cosmic font-mono text-xs text-white">
                    {formatNumber(step)}
                  </span>
                  <p className="type-body pt-1.5 text-ink-700">{t(`newPatients.step.${step}`)}</p>
                </ScrollReveal>
              ))}
            </ol>

            <div className="mt-8 rounded-card border border-mist bg-cloud p-6 md:p-8">
              <h2 className="type-card text-cosmic">{t("newPatients.bring.title")}</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {[1, 2, 3].map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 h-5 w-5 shrink-0 text-signal-700"
                      strokeWidth={1.8}
                    />
                    <span className="type-body text-ink-700">{t(`newPatients.bring.${item}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside>
            <div className="rounded-card bg-ash p-6 md:p-8">
              <h2 className="type-card text-cosmic">{t("location.hours")}</h2>
              <p className="mt-2 flex items-center gap-2 text-sm text-ink-700">
                <Clock aria-hidden="true" className="h-4 w-4 text-signal-700" strokeWidth={1.8} />
                {t("clinic.hours.everyday")}: {t("clinic.hours.display")}
              </p>
              <p className="mt-2 text-sm text-ink-500">{t("newPatients.hoursNote")}</p>

              <div className="mt-5 border-t border-mist pt-5">
                <h2 className="type-card text-cosmic">{t("contact.visitHeading")}</h2>
                <p className="mt-2 flex gap-2 text-sm text-ink-700">
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
                <Button
                  href={directionsUrl}
                  external
                  variant="secondary"
                  size="sm"
                  className="mt-4"
                >
                  {t("btn.directions")}
                </Button>
              </div>

              <div className="mt-5 border-t border-mist pt-5">
                <p className="text-sm font-medium text-cosmic">{t("footer.contact")}</p>
                <a
                  href={clinic.phoneHref}
                  onClick={() => trackEvent(ANALYTICS_EVENTS.call)}
                  className="mt-1 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-signal-700 hover:underline"
                >
                  {formatNumber(clinic.phone)}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
