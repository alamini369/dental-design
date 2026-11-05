import { CalendarCheck } from "lucide-react";
import { clinic } from "../../data/clinic";
import { useLanguage } from "../../i18n/LanguageContext";
import { ANALYTICS_EVENTS, trackEvent } from "../../utils/analytics";
import Button from "../ui/Button";
import Starfield from "../ui/Starfield";

/** Renders only when the owner enables a real offer in src/data/clinic.js. */
export default function OfferBanner() {
  const { t } = useLanguage();

  if (!clinic.offer.enabled) return null;

  return (
    <section className="bg-cloud py-10 md:py-14">
      <div className="container-page">
        <div className="relative isolate overflow-hidden rounded-panel bg-cosmic">
          <Starfield />
          <div className="relative flex flex-col items-center gap-5 px-6 py-10 text-center md:flex-row md:justify-between md:px-12 md:text-left">
            <div>
              <h2 className="type-section text-signal">{t(clinic.offer.titleKey)}</h2>
              <p className="type-body mt-2 max-w-2xl text-white/80">
                {t(clinic.offer.textKey)}
              </p>
            </div>
            <Button
              to="/book"
              variant="primary"
              icon={CalendarCheck}
              onClick={() => trackEvent(ANALYTICS_EVENTS.book)}
            >
              {t("offer.cta")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
