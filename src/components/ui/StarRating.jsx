import { Star } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";

export default function StarRating({ rating = 5, className = "" }) {
  const { t } = useLanguage();
  const label = `${rating} ${t("a11y.rating")}`;

  return (
    <div className={`flex items-center gap-0.5 ${className}`} role="img" aria-label={label}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          aria-hidden="true"
          className={`h-4 w-4 ${
            star <= rating ? "fill-signal text-signal" : "text-fog/40"
          }`}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}
