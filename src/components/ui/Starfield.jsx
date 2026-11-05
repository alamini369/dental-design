/**
 * Brand-owned starfield texture for Cosmic Ink surfaces.
 * Kept inside dark panels only; place the panel content above it with `relative`.
 */
export default function Starfield({ className = "", glow = true }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 starfield-grid" />
      <div className="absolute inset-0 starfield-dots" />
      {glow ? (
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-fog/10 blur-3xl" />
      ) : null}
    </div>
  );
}
