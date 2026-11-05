import { AlertTriangle, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { clinic } from "../data/clinic";
import { problems } from "../data/problems";
import { getService } from "../data/services";
import { useLanguage } from "../i18n/LanguageContext";
import SEO from "../components/ui/SEO";
import PageHero from "../components/sections/PageHero";
import ScrollReveal from "../components/ui/ScrollReveal";
import Button from "../components/ui/Button";
import CTABanner from "../components/sections/CTABanner";
import Starfield from "../components/ui/Starfield";
import { getIcon } from "../utils/icons";
import { ANALYTICS_EVENTS, trackEvent } from "../utils/analytics";

export default function Problems() {
  const { t } = useLanguage();

  return (
    <>
      <SEO title={t("seo.problems.title")} description={t("seo.problems.desc")} path="/problems" />
      <PageHero
        eyebrow={t("problems.eyebrow")}
        title={t("problems.heading")}
        intro={t("problems.intro")}
      >
        <Button
          to="/book"
          variant="primary"
          onClick={() => trackEvent(ANALYTICS_EVENTS.book)}
        >
          {t("btn.book")}
        </Button>
      </PageHero>

      <section className="section bg-cloud">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2">
            {problems.map((problem, index) => {
              const Icon = getIcon(problem.icon);
              const relatedServices = problem.services.map(getService).filter(Boolean);

              return (
                <ScrollReveal
                  key={problem.slug}
                  delay={(index % 2) * 70}
                  className="scroll-mt-24"
                >
                  <article
                    id={problem.slug}
                    className="card-hover flex h-full scroll-mt-24 flex-col rounded-card border border-mist bg-cloud p-6 hover:border-fog md:p-8"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-nav bg-mist text-cinder">
                        <Icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.6} />
                      </span>
                      <h2 className="type-card text-cosmic">{t(problem.titleKey)}</h2>
                    </div>
                    <p className="type-body mt-4 flex-1 text-ink-700">{t(problem.textKey)}</p>

                    {relatedServices.length > 0 ? (
                      <div className="mt-5 border-t border-mist pt-4">
                        <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-ink-500">
                          {t("problems.relatedServices")}
                        </p>
                        <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                          {relatedServices.map((service) => (
                            <li key={service.slug}>
                              <Link
                                to={`/services/${service.slug}`}
                                className="inline-flex min-h-10 items-center gap-1 text-sm font-medium text-signal-700 hover:underline"
                              >
                                {t(service.titleKey)}
                                <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </article>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="relative isolate mt-10 overflow-hidden rounded-panel bg-cosmic">
            <Starfield />
            <div className="relative flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between md:p-10">
              <div className="flex items-start gap-3">
                <AlertTriangle
                  aria-hidden="true"
                  className="mt-0.5 h-6 w-6 shrink-0 text-signal"
                  strokeWidth={1.8}
                />
                <p className="type-body font-medium text-white">{t("problems.urgent")}</p>
              </div>
              <Button
                href={clinic.phoneHref}
                variant="primary"
                icon={Phone}
                className="shrink-0"
                onClick={() => trackEvent(ANALYTICS_EVENTS.call)}
              >
                {t("btn.call")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
