import { Globe } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";

export default function LanguageToggle({ className = "", onDark = false }) {
  const { isBangla, toggleLanguage, t } = useLanguage();
  const label = isBangla ? t("nav.switchToEnglish") : t("nav.switchToBangla");

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t("nav.language")}
      className={`btn-animated inline-flex min-h-9 items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1 text-xs font-medium transition-colors duration-200 ${
        onDark
          ? "border-fog/40 bg-transparent text-white/80 hover:border-white hover:text-white"
          : "border-mist bg-cloud text-cosmic hover:border-fog"
      } ${className}`}
    >
      <Globe
        aria-hidden="true"
        className={`h-3.5 w-3.5 ${onDark ? "text-signal" : "text-signal-700"}`}
        strokeWidth={1.8}
      />
      <span>{label}</span>
    </button>
  );
}
