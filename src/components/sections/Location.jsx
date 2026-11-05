import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { clinic, directionsUrl, mapEmbedSrc } from "../../data/clinic";
import { useLanguage } from "../../i18n/LanguageContext";
import { ANALYTICS_EVENTS, trackEvent } from "../../utils/analytics";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";

export default function Location() {
  const { t, formatNumber } = useLanguage();

  return (
    <section className="section bg-cloud">
      <div className="container-page">
        <SectionHeading
          eyebrow={t("location.eyebrow")}
          title={t("location.heading")}
          align="center"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <ScrollReveal>
            <dl className="flex h-full flex-col gap-6 rounded-panel bg-ash p-6 md:p-10">
              <div className="flex gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-nav bg-mist text-cinder">
                  <MapPin aria-hidden="true" className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.08em] text-ink-500">
                    {t("location.address")}
                  </dt>
                  <dd className="mt-1 text-sm text-ink-700">
                    {t("clinic.address")}
                    <br />
                    {t("clinic.landmarks")}
                  </dd>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-nav bg-mist text-cinder">
                  <Phone aria-hidden="true" className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.08em] text-ink-500">
                    {t("location.phone")}
                  </dt>
                  <dd className="mt-1 text-sm">
                    <a
                      href={clinic.phoneHref}
                      onClick={() => trackEvent(ANALYTICS_EVENTS.call)}
                      className="font-semibold text-signal-700 hover:underline"
                    >
                      {formatNumber(clinic.phone)}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-nav bg-mist text-cinder">
                  <Clock aria-hidden="true" className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.08em] text-ink-500">
                    {t("location.hours")}
                  </dt>
                  <dd className="mt-1 text-sm text-ink-700">
                    {t("clinic.hours.everyday")}: {t("clinic.hours.display")}
                  </dd>
                </div>
              </div>

              <div className="mt-auto pt-2">
                <Button
                  href={directionsUrl}
                  external
                  variant="secondary"
                  icon={Navigation}
                  onClick={() => trackEvent(ANALYTICS_EVENTS.call)}
                >
                  {t("btn.directions")}
                </Button>
                <p className="mt-2 text-xs text-ink-500">{t("location.directionsNote")}</p>
              </div>
            </dl>
          </ScrollReveal>

          <ScrollReveal delay={80} className="min-h-[340px]">
            <iframe
              src={mapEmbedSrc}
              title={t("location.mapTitle")}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[360px] w-full rounded-panel border border-mist"
              allowFullScreen
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
