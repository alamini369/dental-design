import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getIcon } from "../../utils/icons";

export default function ServiceCard({ service, title, short, learnMoreLabel }) {
  const Icon = getIcon(service.icon);

  return (
    <article className="group card-hover flex h-full flex-col rounded-card border border-mist bg-cloud p-6 hover:border-fog md:p-8">
      <span className="flex h-12 w-12 items-center justify-center rounded-nav bg-mist text-cinder">
        <Icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.6} />
      </span>
      <h3 className="type-card mt-5 text-cosmic">
        <Link to={`/services/${service.slug}`} className="hover:text-signal-700">
          {title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-500">{short}</p>
      <Link
        to={`/services/${service.slug}`}
        className="mt-5 inline-flex min-h-10 items-center gap-1.5 text-sm font-medium text-signal-700 hover:underline"
      >
        {learnMoreLabel}
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
        />
      </Link>
    </article>
  );
}
