import { CalendarCheck, Check, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { clinic } from "../../data/clinic";
import { getProblem } from "../../data/problems";
import { useLanguage } from "../../i18n/LanguageContext";
import { ANALYTICS_EVENTS, trackEvent } from "../../utils/analytics";
import Button from "../ui/Button";
import Accordion from "../ui/Accordion";
import PageHero from "../sections/PageHero";
import CTABanner from "../sections/CTABanner";
import ScrollReveal from "../ui/ScrollReveal";

export default function ServicePageTemplate({ service }) {
  const { t, tList, formatNumber } = useLanguage();
  const steps = tList(service.stepsKey);
  const benefits = tList(service.benefitsKey);
  const relatedProblems = (service.relatedProblems || [])
    .map((slug) => getProblem(slug))
    .filter(Boolean);

  const faqItems = service.faqs.map((faq, index) => ({
    id: `${service.slug}-faq-${index}`,
    question: t(faq.qKey),
    answer: t(faq.aKey),
  }));

  return (
    <>
      <PageHero
        eyebrow={t(`services.${service.slug}.eyebrow`)}
        title={t(service.titleKey)}
        intro={t(service.introKey)}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            to={`/book?treatment=${service.slug}`}
            variant="primary"
            icon={CalendarCheck}
            onClick={() => trackEvent(ANALYTICS_EVENTS.book, { service: service.slug })}
          >
            {t("btn.book")}
          </Button>
          <Button
            href={clinic.phoneHref}
            variant="onDark"
            icon={Phone}
            onClick={() => trackEvent(ANALYTICS_EVENTS.call, { service: service.slug })}
          >
            {t("btn.call")}
          </Button>
        </div>
      </PageHero>

      <section className="section bg-ash">
        <div className="container-page grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-14">
          <div>
            <ScrollReveal>
              <h2 className="type-section text-cosmic">{t("servicePage.whoFor")}</h2>
              <p className="type-body-lg mt-3 max-w-prose text-ink-700">
                {t(service.forWhomKey)}
              </p>
            </ScrollReveal>

            <ScrollReveal className="mt-10" delay={60}>
              <h2 className="type-section text-cosmic">{t("servicePage.howItWorks")}</h2>
              <ol className="mt-5 flex flex-col gap-4">
                {steps.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-fog/60 font-mono text-xs text-signal-700">
                      {formatNumber(String(index + 1).padStart(2, "0"))}
                    </span>
                    <span className="type-body pt-1.5 text-ink-700">{step}</span>
                  </li>
                ))}
              </ol>
            </ScrollReveal>

            <ScrollReveal className="mt-10" delay={80}>
              <h2 className="type-section text-cosmic">{t("servicePage.benefits")}</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex gap-2.5 rounded-nav border border-mist bg-cloud p-4"
                  >
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 h-5 w-5 shrink-0 text-signal-700"
                      strokeWidth={2}
                    />
                    <span className="type-small font-medium text-ink-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {faqItems.length > 0 ? (
              <ScrollReveal className="mt-10" delay={100}>
                <h2 className="type-section text-cosmic">{t("servicePage.faqs")}</h2>
                <Accordion className="mt-5" items={faqItems} />
              </ScrollReveal>
            ) : null}

            {relatedProblems.length > 0 ? (
              <ScrollReveal className="mt-10" delay={100}>
                <h2 className="type-card text-cosmic">{t("servicePage.relatedProblems")}</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {relatedProblems.map((problem) => (
                    <Link
                      key={problem.slug}
                      to={`/problems#${problem.slug}`}
                      className="inline-flex min-h-10 items-center rounded-full border border-mist bg-cloud px-4 text-sm font-medium text-ink-700 transition-colors hover:border-fog hover:text-signal-700"
                    >
                      {t(problem.titleKey)}
                    </Link>
                  ))}
                </div>
              </ScrollReveal>
            ) : null}
          </div>

          <aside className="order-first lg:order-last">
            <div className="lg:sticky lg:top-24">
              <img
                src={service.image}
                alt={t(service.imageAltKey)}
                width="800"
                height="700"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-panel border border-mist object-cover"
              />
              <div className="mt-5 rounded-card bg-cloud p-6 md:p-8">
                <p className="type-small text-ink-700">{t(service.noteKey)}</p>
                <Button
                  to={`/book?treatment=${service.slug}`}
                  variant="primary"
                  fullWidth
                  icon={CalendarCheck}
                  className="mt-4"
                  onClick={() => trackEvent(ANALYTICS_EVENTS.book, { service: service.slug })}
                >
                  {t("btn.book")}
                </Button>
                <Button
                  href={clinic.phoneHref}
                  variant="secondary"
                  fullWidth
                  icon={Phone}
                  className="mt-3"
                  onClick={() => trackEvent(ANALYTICS_EVENTS.call, { service: service.slug })}
                >
                  {t("btn.call")}
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
