import { MessageCircle, Phone } from "lucide-react";
import { clinic } from "../../data/clinic";
import { useLanguage } from "../../i18n/LanguageContext";
import { buildWhatsAppChatLink } from "../../utils/buildWhatsAppLink";
import { ANALYTICS_EVENTS, trackEvent } from "../../utils/analytics";
import Button from "../ui/Button";
import ScrollReveal from "../ui/ScrollReveal";

export default function CTABanner() {
  const { t } = useLanguage();

  return (
    <section className="relative isolate overflow-hidden bg-cosmic">
      <div className="container-page relative py-16 md:py-24">
        <ScrollReveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="eyebrow eyebrow-light">{t("cta.eyebrow")}</p>
          <h2 className="type-section mt-3 text-white">{t("cta.title")}</h2>
          <p className="type-body-lg mt-3 max-w-2xl text-white/70">{t("cta.text")}</p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              href={clinic.phoneHref}
              variant="primary"
              icon={Phone}
              onClick={() => trackEvent(ANALYTICS_EVENTS.call)}
            >
              {t("btn.call")}
            </Button>
            <Button
              href={buildWhatsAppChatLink(t("whatsapp.chatMessage"))}
              variant="onDark"
              icon={MessageCircle}
              external
              onClick={() => trackEvent(ANALYTICS_EVENTS.whatsapp)}
            >
              {t("btn.whatsapp")}
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
