import { CalendarCheck, Home } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import SEO from "../components/ui/SEO";
import Button from "../components/ui/Button";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title={t("seo.notFound.title")}
        description={t("seo.notFound.desc")}
        path="/404"
        noindex
      />
      <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-cosmic md:min-h-[calc(100svh-72px)]">
        <div className="container-page relative flex flex-col items-center py-16 text-center">
          <p className="eyebrow eyebrow-light">{t("notFound.eyebrow")}</p>
          <h1 className="type-hero mt-4 max-w-2xl text-white">{t("notFound.title")}</h1>
          <p className="type-body-lg mt-4 max-w-xl text-white/70">{t("notFound.text")}</p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button to="/" variant="onDark" icon={Home}>
              {t("btn.backHome")}
            </Button>
            <Button to="/book" variant="primary" icon={CalendarCheck}>
              {t("btn.book")}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
