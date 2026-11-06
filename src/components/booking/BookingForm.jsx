import { useEffect, useMemo, useRef, useState } from "react";
import { openWhatsApp } from "../../utils/openWhatsApp";
import {
  AlertCircle,
  CalendarCheck,
  CheckCircle2,
  MessageCircle,
  Phone,
  RotateCcw,
} from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { clinic } from "../../data/clinic";
import { services } from "../../data/services";
import { useLanguage } from "../../i18n/LanguageContext";
import { buildWhatsAppLink } from "../../utils/buildWhatsAppLink";
import { formatDateForMessage, formatTimeForMessage, todayISO } from "../../utils/format";
import { validatePhone } from "../../utils/validatePhone";
import { ANALYTICS_EVENTS, trackEvent } from "../../utils/analytics";
import Button from "../ui/Button";

const emptyValues = {
  name: "",
  phone: "",
  date: "",
  time: "",
  treatment: "not-sure",
  message: "",
};

const fieldOrder = ["name", "phone", "date", "time"];

export default function BookingForm({ className = "" }) {
  const { t, isBangla } = useLanguage();
  const [searchParams] = useSearchParams();
  const initialTreatment = useMemo(() => {
    const fromQuery = searchParams.get("treatment");
    return services.some((service) => service.slug === fromQuery) ? fromQuery : "not-sure";
  }, [searchParams]);

  const [values, setValues] = useState({ ...emptyValues, treatment: initialTreatment });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [waLink, setWaLink] = useState("");
  const successRef = useRef(null);
  const fieldRefs = useRef({});

  useEffect(() => {
    setValues((current) =>
      current.treatment === initialTreatment ? current : { ...current, treatment: initialTreatment },
    );
  }, [initialTreatment]);

  const update = (field) => (event) => {
    const { value } = event.target;
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const validate = () => {
    const nextErrors = {};

    if (!values.name.trim()) nextErrors.name = t("form.error.required");
    if (!values.phone.trim()) nextErrors.phone = t("form.error.required");
    else if (!validatePhone(values.phone)) nextErrors.phone = t("form.error.phone");
    if (!values.date) nextErrors.date = t("form.error.required");
    else if (values.date < todayISO()) nextErrors.date = t("form.error.future");
    if (!values.time) nextErrors.time = t("form.error.required");

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = fieldOrder.find((field) => nextErrors[field]);
      fieldRefs.current[firstInvalid]?.focus();
      return;
    }

    const treatmentLabel =
      values.treatment === "not-sure"
        ? t("form.treatment.other")
        : t(services.find((service) => service.slug === values.treatment)?.titleKey ?? "form.treatment.other");

    const link = buildWhatsAppLink(
      {
        name: values.name,
        phone: values.phone,
        date: formatDateForMessage(values.date, isBangla),
        time: formatTimeForMessage(values.time, isBangla),
        treatment: treatmentLabel,
        message: values.message,
      },
      t("whatsapp.template"),
      t("whatsapp.treatmentFallback"),
    );

    setWaLink(link);
    setSubmitted(true);
    trackEvent(ANALYTICS_EVENTS.formSubmit, { treatment: values.treatment });
    openWhatsApp(link);

    window.setTimeout(() => {
      successRef.current?.focus();
    }, 50);
  };

  const resetForm = () => {
    setSubmitted(false);
    setWaLink("");
    setValues({ ...emptyValues, treatment: initialTreatment });
    setErrors({});
  };

  if (submitted) {
    return (
      <div
        className={`success-enter relative isolate overflow-hidden rounded-panel bg-cosmic p-6 md:p-10 ${className}`}
      >
        <div ref={successRef} tabIndex={-1} role="status" aria-live="polite" className="relative">
          <span className="success-badge-enter flex h-12 w-12 items-center justify-center rounded-full border border-signal/60 text-signal">
            <CheckCircle2 aria-hidden="true" className="h-6 w-6" strokeWidth={1.8} />
          </span>
          <h3 className="type-card mt-5 text-white">{t("form.success.title")}</h3>
          <p className="type-body mt-2 text-white/80">{t("form.success.text")}</p>
          <p className="type-small mt-2 text-fog">{t("form.whatsappBlocked")}</p>
          <p className="type-small text-fog">{t("form.success.fallback")}</p>
          <div className="mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button href={waLink} variant="primary" icon={MessageCircle} external>
              {t("btn.whatsapp")}
            </Button>
            <Button href={clinic.phoneHref} variant="onDark" icon={Phone}>
              {t("btn.call")}
            </Button>
          </div>
          <button
            type="button"
            onClick={resetForm}
            className="mt-4 inline-flex min-h-10 items-center gap-1.5 text-sm font-medium text-signal hover:underline"
          >
            <RotateCcw aria-hidden="true" className="h-4 w-4" />
            {t("form.success.again")}
          </button>
        </div>
      </div>
    );
  }

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className={`rounded-panel border border-mist bg-cloud p-6 md:p-10 ${className}`}
    >
      <p className="type-small mb-5 text-ink-500">{t("form.requiredNote")}</p>

      {hasErrors ? (
        <div
          role="alert"
          className="error-enter mb-5 flex items-start gap-2 rounded-nav border border-signal/40 bg-signal/5 p-4 text-sm font-medium text-signal-700"
        >
          <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
          {t("form.error.summary")}
        </div>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="booking-name">
            {t("form.name")} <span className="text-signal-700">*</span>
          </label>
          <input
            id="booking-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-required="true"
            aria-invalid={errors.name ? "true" : undefined}
            aria-describedby={errors.name ? "booking-name-error" : undefined}
            className={`field-input ${errors.name ? "border-danger" : ""}`}
            value={values.name}
            onChange={update("name")}
            ref={(node) => {
              fieldRefs.current.name = node;
            }}
          />
          {errors.name ? (
            <p id="booking-name-error" className="field-error">
              <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label className="field-label" htmlFor="booking-phone">
            {t("form.phone")} <span className="text-signal-700">*</span>
          </label>
          <input
            id="booking-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            aria-required="true"
            placeholder="01XXXXXXXXX"
            aria-invalid={errors.phone ? "true" : undefined}
            aria-describedby={errors.phone ? "booking-phone-error" : "booking-phone-hint"}
            className={`field-input ${errors.phone ? "border-danger" : ""}`}
            value={values.phone}
            onChange={update("phone")}
            ref={(node) => {
              fieldRefs.current.phone = node;
            }}
          />
          {errors.phone ? (
            <p id="booking-phone-error" className="field-error">
              <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
              {errors.phone}
            </p>
          ) : (
            <p id="booking-phone-hint" className="mt-2 text-xs text-ink-500">
              {t("form.phoneHint")}
            </p>
          )}
        </div>

        <div>
          <label className="field-label" htmlFor="booking-date">
            {t("form.date")} <span className="text-signal-700">*</span>
          </label>
          <input
            id="booking-date"
            name="date"
            type="date"
            required
            min={todayISO()}
            aria-required="true"
            aria-invalid={errors.date ? "true" : undefined}
            aria-describedby={errors.date ? "booking-date-error" : undefined}
            className={`field-input ${errors.date ? "border-danger" : ""}`}
            value={values.date}
            onChange={update("date")}
            ref={(node) => {
              fieldRefs.current.date = node;
            }}
          />
          {errors.date ? (
            <p id="booking-date-error" className="field-error">
              <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
              {errors.date}
            </p>
          ) : null}
        </div>

        <div>
          <label className="field-label" htmlFor="booking-time">
            {t("form.time")} <span className="text-signal-700">*</span>
          </label>
          <input
            id="booking-time"
            name="time"
            type="time"
            required
            aria-required="true"
            aria-invalid={errors.time ? "true" : undefined}
            aria-describedby={errors.time ? "booking-time-error" : undefined}
            className={`field-input ${errors.time ? "border-danger" : ""}`}
            value={values.time}
            onChange={update("time")}
            ref={(node) => {
              fieldRefs.current.time = node;
            }}
          />
          {errors.time ? (
            <p id="booking-time-error" className="field-error">
              <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
              {errors.time}
            </p>
          ) : null}
        </div>

        <div className="md:col-span-2">
          <label className="field-label" htmlFor="booking-treatment">
            {t("form.treatment")}
          </label>
          <select
            id="booking-treatment"
            name="treatment"
            className="field-input"
            value={values.treatment}
            onChange={update("treatment")}
          >
            <option value="not-sure">{t("form.treatment.other")}</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {t(service.titleKey)}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="field-label" htmlFor="booking-message">
            {t("form.message")}
          </label>
          <textarea
            id="booking-message"
            name="message"
            rows={4}
            className="w-full rounded-lg border border-mist bg-cloud px-4 py-3 text-base text-cosmic placeholder:text-ink-500 focus:border-signal focus:outline-none focus:ring-2 focus:ring-signal/25"
            value={values.message}
            onChange={update("message")}
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" variant="primary" icon={MessageCircle} className="sm:min-w-56">
          {t("form.submit")}
        </Button>
        <span className="type-small text-ink-500">
          <CalendarCheck aria-hidden="true" className="mr-1 inline h-4 w-4 text-signal-700" />
          {t("form.note")}
        </span>
      </div>
    </form>
  );
}
