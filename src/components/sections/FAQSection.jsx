import { faqs } from "../../data/faqs";
import { useLanguage } from "../../i18n/LanguageContext";
import Accordion from "../ui/Accordion";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";
import { clinic } from "../../data/clinic";

export default function FAQSection({ items, heading, intro }) {
  const { t } = useLanguage();
  const list =
    items ??
    faqs.map((faq) => ({
      id: faq.id,
      question: t(faq.qKey),
      answer: t(faq.aKey),
    }));

  return (
    <section className="section bg-ash">
      <div className="container-page">
        <ScrollReveal className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow={t("faq.eyebrow")}
            title={heading ?? t("faq.heading")}
            intro={intro ?? t("faq.intro")}
            align="center"
          />
          <Accordion className="mt-8" items={list} />
          <p className="mt-6 text-center type-small text-ink-500">
            {t("questions.callPrompt")}{" "}
            <a
              href={clinic.phoneHref}
              className="font-semibold text-signal-700 hover:underline"
            >
              {t("btn.call")}
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
