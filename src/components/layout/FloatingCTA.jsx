import { MessageCircle, Phone } from "lucide-react";
import { clinic } from "../../data/clinic";
import { useLanguage } from "../../i18n/LanguageContext";
import { buildWhatsAppChatLink } from "../../utils/buildWhatsAppLink";
import { ANALYTICS_EVENTS, trackEvent } from "../../utils/analytics";

/** Mobile-only bottom bar with tap-to-call and WhatsApp. */
export default function FloatingCTA() {
  const { t, formatNumber } = useLanguage();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-fog/20 bg-cosmic/95 px-3 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-2">
        <a
          href={clinic.phoneHref}
          onClick={() => trackEvent(ANALYTICS_EVENTS.call)}
          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-fog/40 px-4 text-sm font-medium text-white"
        >
          <Phone aria-hidden="true" className="h-5 w-5 text-signal" strokeWidth={1.8} />
          {t("btn.call")}
          <span className="sr-only">{formatNumber(clinic.phone)}</span>
        </a>
        <a
          href={buildWhatsAppChatLink(t("whatsapp.chatMessage"))}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent(ANALYTICS_EVENTS.whatsapp)}
          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-signal px-4 text-sm font-medium text-white"
        >
          <MessageCircle aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
          {t("btn.whatsapp")}
        </a>
      </div>
    </div>
  );
}
