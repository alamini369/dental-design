import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../../data/services";
import { useLanguage } from "../../i18n/LanguageContext";
import ScrollReveal from "../ui/ScrollReveal";
import ServiceRow from "../services/ServiceRow";

export default function ServicesGrid() {
  const { t } = useLanguage();

  return (
    <section className="section bg-cloud">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow">{t("services.eyebrow")}</p>
          <h2 className="type-section mt-3 text-cosmic">{t("services.heading")}</h2>
          <p className="type-body-lg mt-3 text-ink-700">{t("services.subtitle")}</p>
          <Link
            to="/services"
            className="group mt-5 inline-flex min-h-12 items-center gap-1.5 text-sm font-medium text-signal-700 underline-offset-4 hover:underline"
          >
            {t("btn.viewAll")}
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
            />
          </Link>
        </div>

        <div className="mt-10 flex flex-col gap-3 md:gap-4">
          {services.slice(0, -2).map((service, index) => (
            <ScrollReveal key={service.slug} delay={index * 60}>
              <ServiceRow
                service={service}
                title={t(service.titleKey)}
                short={t(service.shortKey)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
