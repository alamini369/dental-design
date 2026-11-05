import Starfield from "../ui/Starfield";

export default function PageHero({ eyebrow, title, intro, children, align = "left" }) {
  return (
    <section className="relative isolate overflow-hidden bg-cosmic">
      <Starfield />
      <div className="container-page relative py-14 md:py-20">
        <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
          {eyebrow ? <p className="eyebrow eyebrow-light">{eyebrow}</p> : null}
          <h1 className="type-hero mt-4 text-white">{title}</h1>
          {intro ? <p className="type-body-lg mt-4 max-w-2xl text-white/70">{intro}</p> : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
