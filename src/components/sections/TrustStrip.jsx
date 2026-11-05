import { getIcon } from "../../utils/icons";
import { useLanguage } from "../../i18n/LanguageContext";
import ScrollReveal from "../ui/ScrollReveal";

const items = [
  { icon: "HeartHandshake", titleKey: "trust.1.title", textKey: "trust.1.text" },
  { icon: "MessageSquareText", titleKey: "trust.2.title", textKey: "trust.2.text" },
  { icon: "Sparkles", titleKey: "trust.3.title", textKey: "trust.3.text" },
  { icon: "MapPin", titleKey: "trust.4.title", textKey: "trust.4.text" },
];

export default function TrustStrip() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-mist bg-cloud py-10 md:py-14">
      <div className="container-page">
        <p className="eyebrow text-center">{t("hero.eyebrow")}</p>

        <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {items.map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <ScrollReveal
                key={item.titleKey}
                delay={index * 80}
                className={`flex gap-3.5 lg:px-8 ${
                  index > 0 ? "lg:border-l lg:border-mist" : ""
                }`}
              >
                <Icon
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-fog"
                  strokeWidth={1.6}
                />
                <div>
                  <p className="text-sm font-semibold text-cosmic">{t(item.titleKey)}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-500">{t(item.textKey)}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
