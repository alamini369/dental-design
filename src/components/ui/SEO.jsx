import { Helmet } from "react-helmet-async";
import { clinic } from "../../data/clinic";
import { useLanguage } from "../../i18n/LanguageContext";

export default function SEO({
  title,
  description,
  path = "/",
  image = "/images/og-cover.png",
  noindex = false,
  jsonLd,
}) {
  const { t } = useLanguage();
  const siteUrl = (clinic.siteUrl || "").replace(/\/$/, "");
  const fullTitle = title || t("seo.defaultTitle");
  const fullDescription = description || t("seo.defaultDesc");
  const canonical = siteUrl ? `${siteUrl}${path}` : undefined;
  const imageUrl = siteUrl ? `${siteUrl}${image}` : image;

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      {noindex ? <meta name="robots" content="noindex, follow" /> : null}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={t("clinic.name")} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={imageUrl} />
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      <meta property="og:locale" content="en_BD" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={imageUrl} />

      {jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Helmet>
  );
}
