import { CalendarCheck, Clock, MapPin, Phone } from "lucide-react";
import { clinic } from "../../data/clinic";
import { useLanguage } from "../../i18n/LanguageContext";
import { ANALYTICS_EVENTS, trackEvent } from "../../utils/analytics";
import Button from "../ui/Button";
import Starfield from "../ui/Starfield";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-cosmic md:min-h-[calc(100svh-72px)]">
      <Starfield />

      {/* Video Background with blend */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="absolute inset-0 min-w-full min-h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.webp"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          <source src="/videos/hero.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        
        {/* Blend overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-cosmic/80 via-transparent to-cosmic/60" />
      </div>

      <div className="container-page relative py-16 md:py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="eyebrow eyebrow-light inline-flex items-center gap-2 rounded-full border border-fog/25 px-4 py-2">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-signal" />
            {t("hero.eyebrow")}
          </p>

          <h1 className="type-hero mt-6 text-white">
            <span className="block text-signal">{t("hero.titleAccent")}</span>
            <span className="block">{t("hero.titleRest")}</span>
          </h1>

          <p className="type-body-lg mt-5 max-w-2xl text-white/70">{t("hero.subtitle")}</p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              to="/book"
              variant="primary"
              size="lg"
              icon={CalendarCheck}
              onClick={() => trackEvent(ANALYTICS_EVENTS.book)}
            >
              {t("hero.primary")}
            </Button>
            <Button
              href={clinic.phoneHref}
              variant="onDark"
              size="lg"
              icon={Phone}
              onClick={() => trackEvent(ANALYTICS_EVENTS.call)}
            >
              {t("hero.secondary")}
            </Button>
          </div>

          <div className="mt-10 flex flex-col items-center gap-2 border-t border-fog/20 pt-6 text-sm text-fog sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6">
            <span className="inline-flex items-center gap-1.5">
              <Clock aria-hidden="true" className="h-4 w-4 text-signal" strokeWidth={1.8} />
              {t("clinic.hours.everyday")}: {t("clinic.hours.display")}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin aria-hidden="true" className="h-4 w-4 text-signal" strokeWidth={1.8} />
              {t("clinic.landmarks")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}