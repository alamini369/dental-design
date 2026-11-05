import { getIcon } from "../../utils/icons";
import { useLanguage } from "../../i18n/LanguageContext";
import ScrollReveal from "../ui/ScrollReveal";
import SectionHeading from "../ui/SectionHeading";

const cards = [
  { icon: "HeartHandshake", titleKey: "comfort.1.title", textKey: "comfort.1.text" },
  { icon: "ShieldCheck", titleKey: "comfort.2.title", textKey: "comfort.2.text" },
  { icon: "Microscope", titleKey: "comfort.3.title", textKey: "comfort.3.text" },
];

export default function Comfort() {
  const { t } = useLanguage();

  return (
    <section className="section bg-ash">
      <div className="container-page">
        <SectionHeading
          eyebrow={t("comfort.eyebrow")}
          title={t("comfort.heading")}
          align="center"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = getIcon(card.icon);
            return (
              <ScrollReveal key={card.titleKey} delay={index * 70} className="h-full">
                <div className="card-hover flex h-full flex-col rounded-card bg-cloud p-6 md:p-12">
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-nav bg-mist text-cinder">
                      <Icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.6} />
                    </span>
                    <span className="font-mono text-xs text-fog">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="type-card mt-6 text-cosmic">{t(card.titleKey)}</h3>
                  <p className="type-body mt-2 text-ink-700">{t(card.textKey)}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
