export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  as: Heading = "h2",
  className = "",
  id,
}) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const isDark = tone === "dark";

  return (
    <div className={`flex max-w-3xl flex-col gap-3 ${alignment} ${className}`}>
      {eyebrow ? <p className={`eyebrow ${isDark ? "eyebrow-light" : ""}`}>{eyebrow}</p> : null}
      <Heading id={id} className={`type-section ${isDark ? "text-white" : "text-cosmic"}`}>
        {title}
      </Heading>
      {intro ? (
        <p className={`type-body-lg max-w-prose ${isDark ? "text-white/70" : "text-ink-700"}`}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}
