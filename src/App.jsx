import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider, useLanguage } from "./i18n/LanguageContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import FloatingCTA from "./components/layout/FloatingCTA";
import ScrollToTop from "./components/layout/ScrollToTop";
import SmoothScroll from "./components/layout/SmoothScroll";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Problems = lazy(() => import("./pages/Problems"));
const NewPatients = lazy(() => import("./pages/NewPatients"));
const Contact = lazy(() => import("./pages/Contact"));
const Book = lazy(() => import("./pages/Book"));
const NotFound = lazy(() => import("./pages/NotFound"));

function SkipLink() {
  const { t } = useLanguage();
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-signal focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-white"
    >
      {t("a11y.skipToContent")}
    </a>
  );
}

function RouteFallback() {
  const { t } = useLanguage();
  return (
    <div
      className="container-page flex min-h-[50vh] items-center justify-center py-16"
      role="status"
      aria-live="polite"
    >
      <span className="flex items-center gap-3 text-sm font-medium text-ink-500">
        <span
          aria-hidden="true"
          className="h-5 w-5 animate-spin rounded-full border-2 border-fog border-t-signal motion-reduce:animate-none"
        />
        {t("a11y.loading")}
      </span>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <SmoothScroll />
          <div className="flex min-h-screen flex-col">
            <SkipLink />
            <Header />
            <main id="main" className="flex-1">
              <Suspense fallback={<RouteFallback />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/services/:slug" element={<ServiceDetail />} />
                  <Route path="/problems" element={<Problems />} />
                  <Route path="/new-patients" element={<NewPatients />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/book" element={<Book />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            {/* Space for the fixed mobile call/WhatsApp bar (matches the footer so it reads as padding) */}
            <div aria-hidden="true" className="h-24 bg-cosmic md:hidden" />
            <FloatingCTA />
          </div>
          <Analytics />
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  );
}
