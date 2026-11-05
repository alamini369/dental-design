import { useLanguage } from "../i18n/LanguageContext";
import SEO from "../components/ui/SEO";
import { buildDentistSchema } from "../utils/schema";
import Hero from "../components/sections/Hero";
import TrustStrip from "../components/sections/TrustStrip";
import DoctorIntro from "../components/sections/DoctorIntro";
import ServicesGrid from "../components/sections/ServicesGrid";
import Comfort from "../components/sections/Comfort";
import OfferBanner from "../components/sections/OfferBanner";
import Reviews from "../components/sections/Reviews";
import FAQSection from "../components/sections/FAQSection";
import Location from "../components/sections/Location";
import CTABanner from "../components/sections/CTABanner";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title={t("seo.home.title")}
        description={t("seo.home.desc")}
        path="/"
        jsonLd={buildDentistSchema(t)}
      />
      <Hero />
      <TrustStrip />
      <DoctorIntro />
      <ServicesGrid />
      <Comfort />
      <OfferBanner />
      <Reviews />
      <FAQSection />
      <Location />
      <CTABanner />
    </>
  );
}
