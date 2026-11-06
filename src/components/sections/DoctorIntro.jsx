import { CalendarCheck, Phone } from "lucide-react";
import { clinic } from "../../data/clinic";
import { useLanguage } from "../../i18n/LanguageContext";
import { ANALYTICS_EVENTS, trackEvent } from "../../utils/analytics";
import Button from "../ui/Button";
import ScrollReveal from "../ui/ScrollReveal";

export default function DoctorIntro() {
  const { t } = useLanguage();

  return (
    <section className="section bg-cloud">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
        <ScrollReveal>
          <p className="eyebrow">{t("doctor.eyebrow")}</p>
          <h2 className="type-section mt-3 text-cosmic">{t("doctor.heading")}</h2>
          <p className="type-body-lg mt-4 max-w-prose text-ink-700">{t("doctor.text")}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button
              to="/book"
              variant="primary"
              icon={CalendarCheck}
              onClick={() => trackEvent(ANALYTICS_EVENTS.book)}
            >
              {t("doctor.cta")}
            </Button>
            <Button
              href={clinic.phoneHref}
              variant="secondary"
              icon={Phone}
              onClick={() => trackEvent(ANALYTICS_EVENTS.call)}
            >
              {t("btn.call")}
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative overflow-hidden rounded-panel border border-fog/20 bg-cosmic p-3 md:p-4">
            <img
              src="/images/doctor-mustak.svg"
              alt={t("doctor.imageAlt")}
              width="800"
              height="1000"
              loading="lazy"
              className="relative aspect-[4/5] w-full rounded-card object-cover"
            />
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-3 rounded-card border border-fog/25 bg-cosmic/90 px-4 py-3 backdrop-blur">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-fog">
                {t("doctor.eyebrow")}
              </p>
              <p className="font-heading text-sm font-semibold text-white">
                {t("clinic.dentist")}
              </p>
            </div>
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-signal" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
