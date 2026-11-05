import { CheckCircle2, CalendarCheck } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import SEO from "../components/ui/SEO";
import PageHero from "../components/sections/PageHero";
import Button from "../components/ui/Button";
import DoctorIntro from "../components/sections/DoctorIntro";
import CTABanner from "../components/sections/CTABanner";
import ScrollReveal from "../components/ui/ScrollReveal";
import { ANALYTICS_EVENTS, trackEvent } from "../utils/analytics";

export default function About() {
  const { t } = useLanguage();

  return (
    <>
      <SEO title={t("seo.about.title")} description={t("seo.about.desc")} path="/about" />
      <PageHero eyebrow={t("about.eyebrow")} title={t("about.title")} intro={t("about.intro")}>
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
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <ScrollReveal>
            <img
              src="/images/clinic-interior.svg"
              alt={t("services.imageAlt")}
              width="1000"
              height="750"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-panel border border-mist object-cover"
            />
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p className="eyebrow">{t("about.eyebrow")}</p>
            <h2 className="type-section mt-3 text-cosmic">{t("about.approach.title")}</h2>
            <ul className="mt-6 flex flex-col gap-4">
              {[1, 2, 3].map((step) => (
                <li key={step} className="flex gap-3">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-signal-700"
                    strokeWidth={1.8}
                  />
                  <span className="type-body text-ink-700">{t(`about.approach.${step}`)}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-nav bg-ash p-4 text-sm text-ink-700">
              {t("clinic.address")}
              <br />
              <span className="text-ink-500">{t("clinic.landmarks")}</span>
            </p>
          </ScrollReveal>
        </div>
      </section>

      <DoctorIntro />
      <CTABanner />
    </>
  );
}
