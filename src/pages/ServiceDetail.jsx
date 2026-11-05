import { useParams } from "react-router-dom";
import { getService } from "../data/services";
import { useLanguage } from "../i18n/LanguageContext";
import SEO from "../components/ui/SEO";
import ServicePageTemplate from "../components/services/ServicePageTemplate";
import NotFound from "./NotFound";

export default function ServiceDetail() {
  const { slug } = useParams();
  const { t } = useLanguage();
  const service = getService(slug);

  if (!service) {
    return <NotFound />;
  }

  return (
    <>
      <SEO
        title={t(service.metaTitleKey)}
        description={t(service.metaDescKey)}
        path={`/services/${service.slug}`}
      />
      <ServicePageTemplate service={service} />
    </>
  );
}
