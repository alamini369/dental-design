import { Link } from "react-router-dom";

const base =
  "btn-animated inline-flex items-center justify-center gap-2 rounded-full type-btn whitespace-nowrap disabled:pointer-events-none disabled:opacity-50";

const variants = {
  // Signal Orange is the one glowing dial: the primary pill only.
  primary: "bg-signal text-white hover:bg-signal-600",
  // Ghost pill for light surfaces.
  secondary: "border border-cosmic/70 bg-transparent text-cosmic hover:bg-cosmic hover:text-white",
  // Ghost pill on Cosmic Ink / Cinder surfaces.
  onDark: "border border-signal bg-transparent text-white hover:bg-signal",
  // WhatsApp action on light surfaces (neutral ghost, no third accent hue).
  whatsapp: "border border-cosmic/70 bg-transparent text-cosmic hover:bg-cosmic hover:text-white",
  // WhatsApp action on dark surfaces.
  whatsappOnDark: "border border-fog/50 bg-transparent text-white hover:border-white hover:bg-white/5",
  ghost: "bg-mist text-cosmic hover:bg-fog/60",
  text: "min-h-0 p-0 text-cosmic underline-offset-4 hover:text-signal-700 hover:underline",
};

const sizes = {
  sm: "min-h-10 px-5 py-2 text-sm",
  md: "min-h-11 px-6 py-2.5",
  lg: "min-h-[52px] px-7 py-3.5 text-base",
};

/**
 * One button component for links, router links, and actions.
 * Use `to` for internal routes, `href` for external links/phone.
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  type = "button",
  icon: Icon,
  iconRight: IconRight,
  className = "",
  fullWidth = false,
  external = false,
  ...props
}) {
  const classes = [
    base,
    variants[variant] ?? variants.primary,
    variant === "text" ? "min-h-0 p-0" : sizes[size] ?? sizes.md,
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {Icon ? <Icon aria-hidden="true" className="h-5 w-5 shrink-0" strokeWidth={1.8} /> : null}
      <span>{children}</span>
      {IconRight ? (
        <IconRight aria-hidden="true" className="h-5 w-5 shrink-0" strokeWidth={1.8} />
      ) : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {content}
    </button>
  );
}
