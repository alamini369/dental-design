import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { reviews } from "../../data/reviews";
import { clinic, mapPreviewUrl } from "../../data/clinic";
import { useLanguage } from "../../i18n/LanguageContext";
import SectionHeading from "../ui/SectionHeading";
import StarRating from "../ui/StarRating";
import ScrollReveal from "../ui/ScrollReveal";

function initialsFor(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
}

export default function Reviews() {
  const { t } = useLanguage();
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const reviewsUrl = clinic.googleReviewsUrl || mapPreviewUrl;

  const syncPosition = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    const progress = maxScroll > 0 ? track.scrollLeft / maxScroll : 0;
    const index = Math.round(progress * (reviews.length - 1));

    setActive(index);
    setAtStart(track.scrollLeft <= 4);
    setAtEnd(track.scrollLeft >= maxScroll - 4);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    syncPosition();
    track.addEventListener("scroll", syncPosition, { passive: true });
    window.addEventListener("resize", syncPosition);
    return () => {
      track.removeEventListener("scroll", syncPosition);
      window.removeEventListener("resize", syncPosition);
    };
  }, [syncPosition]);

  const goTo = (index) => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const clamped = Math.max(0, Math.min(index, reviews.length - 1));
    const target = reviews.length > 1 ? (maxScroll * clamped) / (reviews.length - 1) : 0;
    const reduceMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: target, behavior: reduceMotion ? "auto" : "smooth" });
  };

  const step = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[0];
    if (!card) return;
    track.scrollBy({
      left: direction * (card.offsetWidth + 24),
      behavior:
        typeof window.matchMedia === "function" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
    });
  };

  return (
    <section className="section bg-cloud">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow={t("reviews.eyebrow")} title={t("reviews.heading")} />
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => step(-1)}
              disabled={atStart}
              aria-label={t("a11y.previous")}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-mist text-cosmic transition-colors hover:border-fog disabled:opacity-40"
            >
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              disabled={atEnd}
              aria-label={t("a11y.next")}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-mist text-cosmic transition-colors hover:border-fog disabled:opacity-40"
            >
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          role="group"
          aria-roledescription="carousel"
          aria-label={t("reviews.heading")}
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") {
              event.preventDefault();
              goTo(active + 1);
            } else if (event.key === "ArrowLeft") {
              event.preventDefault();
              goTo(active - 1);
            }
          }}
          className="no-scrollbar relative mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2"
        >
          {reviews.map((review, index) => {
            const name = t(review.nameKey);
            return (
              <ScrollReveal
                key={review.id}
                delay={(index % 3) * 60}
                className="w-[85%] shrink-0 snap-start sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <figure className="card-hover flex h-full flex-col rounded-card bg-cinder p-6 md:p-12">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-fog/40 font-heading text-sm font-semibold text-white"
                    >
                      {initialsFor(name)}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{name}</p>
                      <p className="text-xs text-white/60">{t(review.areaKey)}</p>
                    </div>
                  </div>

                  <div className="my-5 border-t border-dashed border-fog/40" />

                  <blockquote className="type-body flex-1 text-white">
                    <p>{t(review.quoteKey)}</p>
                  </blockquote>

                  <figcaption className="mt-6">
                    <StarRating rating={review.rating} />
                  </figcaption>
                </figure>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-xs text-ink-500">{t("reviews.placeholderNote")}</p>
          <div className="flex items-center gap-2">
            {reviews.map((review, index) => (
              <button
                key={review.id}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`${t("a11y.slide")} ${index + 1}`}
                aria-current={active === index ? "true" : undefined}
                className={`h-3 w-3 rounded-full transition-colors ${
                  active === index ? "bg-signal" : "bg-mist hover:bg-fog"
                }`}
              />
            ))}
          </div>
        </div>

        <a
          href={reviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex min-h-10 items-center gap-1.5 text-sm font-medium text-signal-700 hover:underline"
        >
          {t("reviews.link")}
          <ExternalLink aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
