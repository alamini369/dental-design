import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getIcon } from "../../utils/icons";

/**
 * Full-width treatment row for the services band.
 * The whole row is a single link, so it stays one keyboard tab stop
 * with a tap target well over 48px.
 */
export default function ServiceRow({ service, title, short }) {
  const Icon = getIcon(service.icon);

  return (
    <Link
      to={`/services/${service.slug}`}
      className="group card-hover flex items-center gap-4 rounded-card border border-mist bg-cloud p-5 hover:border-fog sm:gap-5 md:p-6"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-nav bg-mist text-cinder sm:h-14 sm:w-14">
        <Icon aria-hidden="true" className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.6} />
      </span>
      <span className="min-w-0 flex-1">
        <h3 className="type-card text-cosmic">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-ink-500">{short}</p>
      </span>
      <span
        aria-hidden="true"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-mist text-cinder transition-colors duration-200 group-hover:border-fog group-hover:text-signal-700"
      >
        <ArrowRight className="h-5 w-5" strokeWidth={1.6} />
      </span>
    </Link>
  );
}
