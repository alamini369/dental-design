import { Link } from "react-router-dom";
import { clinic } from "../../data/clinic";
import { useLanguage } from "../../i18n/LanguageContext";

function ToothMark({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2.6c-2.4 0-3.9 1.3-5.7 1.3-1.6 0-2.8-.7-3.3 1.9-.6 3.1.6 5 1.4 8.6.4 1.7.6 4 2 4 1.5 0 1.5-2.5 2-4.6.3-1.3.8-2.1 1.8-2.1s1.5.8 1.8 2.1c.5 2.1.5 4.6 2 4.6 1.4 0 1.6-2.3 2-4 .8-3.6 2-5.5 1.4-8.6-.5-2.6-1.7-1.9-3.3-1.9-1.8 0-3.3-1.3-5.7-1.3Z" />
      <path
        d="M7.1 6.1c.9 0 1.8.5 2.1 1.5"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}

export default function Logo({ light = false, showText = true, onClick }) {
  const { t } = useLanguage();

  return (
    <Link
      to="/"
      onClick={onClick}
      className="inline-flex shrink-0 items-center gap-2.5 rounded-nav"
      aria-label={`${t("clinic.name")} — ${t("nav.home")}`}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-nav bg-signal text-white">
        <ToothMark className="h-6 w-6" />
      </span>
      {showText ? (
        <span
          className={`hidden font-heading text-base font-semibold tracking-tight sm:block ${
            light ? "text-white" : "text-cosmic"
          }`}
        >
          {clinic.name}
        </span>
      ) : null}
    </Link>
  );
}
