import { CalendarCheck } from "lucide-react";
import { services } from "../data/services";
import { useLanguage } from "../i18n/LanguageContext";
import SEO from "../components/ui/SEO";
import PageHero from "../components/sections/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import ServiceCard from "../components/services/ServiceCard";
import ScrollReveal from "../components/ui/ScrollReveal";
import Button from "../components/ui/Button";
import CTABanner from "../components/sections/CTABanner";
import { ANALYTICS_EVENTS, trackEvent } from "../utils/analytics";

export default function Services() {
  const { t } = useLanguage();

  return (
    <>
      <SEO title={t("seo.services.title")} description={t("seo.services.desc")} path="/services" />
      <PageHero
        eyebrow={t("services.eyebrow")}
        title={t("services.heading")}
        intro={t("servicesPage.intro")}
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

      <section className="section bg-ash">
        <div className="container-page">
          <SectionHeading eyebrow={t("featured.eyebrow")} title={t("servicesPage.allHeading")} />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ScrollReveal key={service.slug} delay={(index % 3) * 60} className="h-full">
                <ServiceCard
                  service={service}
                  title={t(service.titleKey)}
                  short={t(service.shortKey)}
                  learnMoreLabel={t("btn.learnMore")}
                />
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-8 max-w-prose text-sm text-ink-500">{t("services.note.generic")}</p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
