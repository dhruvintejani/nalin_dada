import { useMemo } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Info,
  MapPin,
  MessageCircleMore,
  Phone,
  Quote,
  UserRound,
  WalletCards,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import MediaSlot from "../components/MediaSlot";
import PremiumSelect from "../components/PremiumSelect";
import { media } from "../config/media";
import { siteConfig } from "../config/site";

const formatPhone = (number: string) =>
  number.replace(/(\d{5})(\d{5})/, "$1 $2");

const getLocalDateInputValue = () => {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60_000);
  return local.toISOString().slice(0, 10);
};

type FormData = {
  name: string;
  mobile: string;
  city: string;
  service: string;
  date: string;
  timeSlot: string;
  message?: string;
};

const Appointment = () => {
  const { t, i18n } = useTranslation();
  const minDate = useMemo(getLocalDateInputValue, []);
  const whatsappNumber = siteConfig.whatsappNumber.replace(/\D/g, "");
  const serviceOptions = t("appointment.services", { returnObjects: true }) as string[];
  const cards = t("appointment.cards", { returnObjects: true }) as Array<{
    title: string;
    text: string;
  }>;
  const process = t("appointment.process.items", { returnObjects: true }) as Array<{
    title: string;
    text: string;
  }>;

  const formSchema = useMemo(
    () =>
      z.object({
        name: z
          .string()
          .trim()
          .min(2, t("appointment.validation.nameMin"))
          .max(80, t("appointment.validation.nameMax")),
        mobile: z
          .string()
          .trim()
          .regex(/^[6-9][0-9]{9}$/, t("appointment.validation.mobile")),
        city: z
          .string()
          .trim()
          .min(2, t("appointment.validation.cityMin"))
          .max(80, t("appointment.validation.cityMax")),
        service: z.string().min(1, t("appointment.validation.service")),
        date: z
          .string()
          .min(1, t("appointment.validation.dateRequired"))
          .refine((value) => {
            if (!value) return true;
            const selected = new Date(value + "T12:00:00");
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            return selected >= today;
          }, t("appointment.validation.datePast"))
          .refine((value) => {
            if (!value) return true;
            return new Date(value + "T12:00:00").getDay() !== 0;
          }, t("appointment.validation.dateSunday")),
        timeSlot: z.string().min(1, t("appointment.validation.time")),
        message: z
          .string()
          .trim()
          .max(600, t("appointment.validation.messageMax"))
          .optional(),
      }),
    [t, i18n.language],
  );

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid, dirtyFields },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    criteriaMode: "firstError",
    delayError: 120,
    shouldFocusError: true,
    defaultValues: {
      name: "",
      mobile: "",
      city: "",
      service: "",
      date: "",
      timeSlot: "",
      message: "",
    },
  });

  const messageLength = watch("message")?.length ?? 0;

  const fieldState = (name: keyof FormData) => {
    if (errors[name]) return "form-control-error";
    if (dirtyFields[name]) return "form-control-valid";
    return "";
  };

  const onSubmit = (data: FormData) => {
    if (!whatsappNumber) return;

    const messageLines = [
      t("appointment.whatsapp.greeting"),
      "",
      t("appointment.whatsapp.intro"),
      "",
      `${t("appointment.whatsapp.name")}: ${data.name}`,
      `${t("appointment.whatsapp.mobile")}: ${data.mobile}`,
      `${t("appointment.whatsapp.city")}: ${data.city}`,
      `${t("appointment.whatsapp.service")}: ${data.service}`,
      `${t("appointment.whatsapp.date")}: ${data.date}`,
      `${t("appointment.whatsapp.time")}: ${data.timeSlot}`,
      data.message ? `${t("appointment.whatsapp.message")}: ${data.message}` : "",
      "",
      t("appointment.whatsapp.confirm"),
    ].filter(Boolean);

    const whatsappUrl =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(messageLines.join("\n"));

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };


  return (
    <div className="overflow-hidden bg-[#fffdf9]">
      <section className="hero-surface relative">
        <div className="hero-glow" />
        <div className={`site-shell grid min-h-[510px] items-center gap-10 py-12 ${media.photos.appointmentHero.src ? "lg:grid-cols-[1.06fr_.94fr]" : ""} lg:py-16`}>
          <div className="relative z-10">
            <div className="eyebrow">{t("appointment.eyebrow")}</div>
            <h1 className="mt-4 font-serif text-[2.65rem] font-bold leading-[1.14] tracking-[-0.035em] text-[#8f181c] sm:text-[3.3rem] lg:text-[4rem]">
              {t("appointment.title")}
            </h1>
            <p className="mt-5 max-w-[720px] text-base leading-8 text-[#51463e] md:text-lg">
              {t("appointment.description")}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#appointment-form" className="button-primary">
                <CalendarDays size={18} /> {t("appointment.formButton")} <ArrowRight size={18} />
              </a>
              <a href="#contact-details" className="button-secondary">
                {t("appointment.detailsButton")}
              </a>
            </div>

            <div className="mt-8 grid max-w-[720px] gap-3 sm:grid-cols-3">
              <div className="hero-stat">
                <span className="hero-stat-label">{t("common.appointment.feeLabel")}</span>
                <strong>{siteConfig.consultationFee}</strong>
                <small>{t("common.appointment.feePayment")}</small>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-label">{t("common.appointment.timeLabel")}</span>
                <strong>11–1 / 6–8</strong>
                <small>{t("common.appointment.appointmentOnly")}</small>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-label">{t("common.appointment.daysLabel")}</span>
                <strong>{t("common.appointment.days")}</strong>
                <small>{t("common.appointment.appointmentOnly")}</small>
              </div>
            </div>
          </div>

          {media.photos.appointmentHero.src && (
            <div className="relative mx-auto w-full max-w-[500px]">
              <div className="absolute -inset-4 rounded-[2rem] border border-[#e3b86f]/45" />
              <MediaSlot
                asset={media.photos.appointmentHero}
                priority
                className="relative h-[445px] rounded-[1.7rem] border-[7px] border-white shadow-[0_24px_60px_rgba(78,44,22,.17)]"
              />
            </div>
          )}
        </div>
      </section>

      <section className="section-block bg-[#fbf5eb]">
        <div className="site-shell">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {cards.map((card, index) => {
              const icons = [WalletCards, Clock3, UserRound, CalendarDays];
              const Icon = icons[index] ?? CalendarDays;
              return (
                <article
                  key={card.title}
                  className="rounded-[1.15rem] border border-[#e4d3bd] bg-white p-5"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-[#fff2dd] text-[#b56522]">
                    <Icon size={22} />
                  </div>
                  <h2 className="mt-4 font-serif text-lg font-bold text-[#7f171b]">
                    {t(`appointment.cards.${index}.title`, {
                      fee: siteConfig.consultationFee,
                      morning: siteConfig.morningSlot,
                      evening: siteConfig.eveningSlot,
                      days: t("common.appointment.days"),
                      defaultValue: card.title,
                    })}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#675b51]">
                    {t(`appointment.cards.${index}.text`, {
                      fee: siteConfig.consultationFee,
                      morning: siteConfig.morningSlot,
                      evening: siteConfig.eveningSlot,
                      days: t("common.appointment.days"),
                      defaultValue: card.text,
                    })}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="site-shell">
          <div className="relative overflow-hidden rounded-[1.7rem] border border-[#e4cfad] bg-[linear-gradient(120deg,#fff8ec,#fffdf9_58%,#f6e5c8)] px-6 py-9 shadow-[0_16px_40px_rgba(80,45,25,.07)] md:px-10 md:py-11">
            <Quote
              className="absolute right-6 top-5 text-[#d9a353]/20 md:right-9 md:top-7"
              size={84}
              strokeWidth={1.2}
              aria-hidden="true"
            />
            <div className="relative max-w-4xl">
              <div className="eyebrow">{t("appointment.inPersonMessage.eyebrow")}</div>
              <h2 className="mt-3 max-w-3xl font-serif text-2xl font-bold leading-tight text-[#8f181c] md:text-3xl">
                {t("appointment.inPersonMessage.title")}
              </h2>
              <p className="mt-5 font-serif text-lg leading-9 text-[#5f493b] md:text-xl">
                “{t("appointment.inPersonMessage.line1")}”
              </p>
              <p className="mt-4 text-sm leading-7 text-[#6a5a4f] md:text-base">
                {t("appointment.inPersonMessage.line2")}
              </p>
              <p className="mt-5 text-sm font-bold text-[#b06a24]">
                — {t("appointment.inPersonMessage.author")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="appointment-form" className="section-block scroll-mt-24">
        <div className="site-shell grid gap-9 xl:grid-cols-[1.3fr_.7fr]">
          <div>
            <div className="eyebrow">{t("appointment.form.eyebrow")}</div>
            <h2 className="section-title mt-3">{t("appointment.form.title")}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#706158]">
              {t("appointment.form.description")}
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="premium-form mt-8 rounded-[1.5rem] border border-[#e4d3bd] bg-[#fbf5eb] p-5 shadow-[0_12px_34px_rgba(82,50,29,.06)] sm:p-7 lg:p-9"
              noValidate
            >
              <div className="grid gap-5 md:grid-cols-2">
                <label className="field-label" htmlFor="appointment-name">
                  {t("appointment.form.name")} <span className="required-mark">*</span>
                  <input
                    id="appointment-name"
                    {...register("name")}
                    autoComplete="name"
                    placeholder={t("appointment.form.namePlaceholder")}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={"form-control mt-2 " + fieldState("name")}
                  />
                  {errors.name && (
                    <span id="name-error" className="field-error" role="alert">
                      {errors.name.message}
                    </span>
                  )}
                </label>

                <label className="field-label" htmlFor="appointment-mobile">
                  {t("appointment.form.mobile")} <span className="required-mark">*</span>
                  <input
                    id="appointment-mobile"
                    {...register("mobile")}
                    inputMode="numeric"
                    autoComplete="tel"
                    maxLength={10}
                    pattern="[0-9]*"
                    placeholder={t("appointment.form.mobilePlaceholder")}
                    aria-invalid={Boolean(errors.mobile)}
                    aria-describedby={errors.mobile ? "mobile-error" : undefined}
                    className={"form-control mt-2 " + fieldState("mobile")}
                  />
                  {errors.mobile && (
                    <span id="mobile-error" className="field-error" role="alert">
                      {errors.mobile.message}
                    </span>
                  )}
                </label>

                <label className="field-label" htmlFor="appointment-city">
                  {t("appointment.form.city")} <span className="required-mark">*</span>
                  <input
                    id="appointment-city"
                    {...register("city")}
                    autoComplete="address-level2"
                    placeholder={t("appointment.form.cityPlaceholder")}
                    aria-invalid={Boolean(errors.city)}
                    aria-describedby={errors.city ? "city-error" : undefined}
                    className={"form-control mt-2 " + fieldState("city")}
                  />
                  {errors.city && (
                    <span id="city-error" className="field-error" role="alert">
                      {errors.city.message}
                    </span>
                  )}
                </label>

                <div className="field-label">
                  <label htmlFor="appointment-service">
                    {t("appointment.form.service")} <span className="required-mark">*</span>
                  </label>
                  <div className="mt-2">
                    <Controller
                      name="service"
                      control={control}
                      render={({ field }) => (
                        <PremiumSelect
                          id="appointment-service"
                          value={field.value}
                          options={serviceOptions.map((service) => ({
                            value: service,
                            label: service,
                          }))}
                          placeholder={t("appointment.form.servicePlaceholder")}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          invalid={Boolean(errors.service)}
                          valid={Boolean(dirtyFields.service && !errors.service)}
                          describedBy={errors.service ? "service-error" : undefined}
                        />
                      )}
                    />
                  </div>
                  {errors.service && (
                    <span id="service-error" className="field-error" role="alert">
                      {errors.service.message}
                    </span>
                  )}
                </div>

                <label className="field-label" htmlFor="appointment-date">
                  {t("appointment.form.date")} <span className="required-mark">*</span>
                  <input
                    id="appointment-date"
                    type="date"
                    min={minDate}
                    {...register("date")}
                    aria-invalid={Boolean(errors.date)}
                    aria-describedby={errors.date ? "date-error" : undefined}
                    className={"form-control mt-2 " + fieldState("date")}
                  />
                  {errors.date && (
                    <span id="date-error" className="field-error" role="alert">
                      {errors.date.message}
                    </span>
                  )}
                </label>

                <div className="field-label">
                  <label htmlFor="appointment-time">
                    {t("appointment.form.time")} <span className="required-mark">*</span>
                  </label>
                  <div className="mt-2">
                    <Controller
                      name="timeSlot"
                      control={control}
                      render={({ field }) => (
                        <PremiumSelect
                          id="appointment-time"
                          value={field.value}
                          options={[
                            {
                              value: siteConfig.morningSlot,
                              label: t("appointment.form.morning", {
                                time: siteConfig.morningSlot,
                              }),
                            },
                            {
                              value: siteConfig.eveningSlot,
                              label: t("appointment.form.evening", {
                                time: siteConfig.eveningSlot,
                              }),
                            },
                          ]}
                          placeholder={t("appointment.form.timePlaceholder")}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          invalid={Boolean(errors.timeSlot)}
                          valid={Boolean(dirtyFields.timeSlot && !errors.timeSlot)}
                          describedBy={errors.timeSlot ? "time-error" : undefined}
                        />
                      )}
                    />
                  </div>
                  {errors.timeSlot && (
                    <span id="time-error" className="field-error" role="alert">
                      {errors.timeSlot.message}
                    </span>
                  )}
                </div>
              </div>

              <label className="field-label mt-5 block" htmlFor="appointment-message">
                {t("appointment.form.message")}
                <textarea
                  id="appointment-message"
                  {...register("message")}
                  rows={5}
                  placeholder={t("appointment.form.messagePlaceholder")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : "message-count"}
                  className={"form-control mt-2 resize-y " + fieldState("message")}
                />
                <span
                  id="message-count"
                  className={
                    "mt-1.5 block text-right text-[0.7rem] " +
                    (messageLength > 560 ? "text-[#9b151a]" : "text-[#8c7e72]")
                  }
                >
                  {messageLength}/600
                </span>
                {errors.message && (
                  <span id="message-error" className="field-error" role="alert">
                    {errors.message.message}
                  </span>
                )}
              </label>

              <div className="mt-6 rounded-[1rem] border border-[#e4cfad] bg-[#fff9ee] p-4">
                <div className="flex items-start gap-3">
                  <Info className="mt-0.5 shrink-0 text-[#b56825]" size={20} />
                  <p className="text-xs leading-6 text-[#6d5e52]">
                    {t("appointment.form.note", {
                      days: t("common.appointment.days"),
                    })}
                  </p>
                </div>
              </div>

              {whatsappNumber && (
                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting || !isValid}
                    className="button-primary button-submit w-full sm:w-auto"
                  >
                    <MessageCircleMore size={19} />
                    {isSubmitting
                      ? t("appointment.form.submitting")
                      : t("appointment.form.submit")}
                    <ArrowRight size={18} />
                  </button>
                </div>
              )}
            </form>
          </div>

          <aside id="contact-details" className="scroll-mt-24 space-y-5">
            <article className="rounded-[1.35rem] border border-[#e4d3bd] bg-white p-6 shadow-[0_10px_28px_rgba(82,50,29,.06)]">
              <div className="flex items-center gap-3 text-[#b56522]">
                <MapPin size={23} />
                <span className="text-xs font-bold tracking-[.12em]">
                  {t("appointment.contact.officeLabel")}
                </span>
              </div>
              <h2 className="mt-3 font-serif text-2xl font-bold text-[#7f171b]">
                {t("appointment.contact.officeTitle")}
              </h2>
              <p className="mt-2 text-sm font-bold text-[#b06a24]">
                {t("common.institution.name")}
              </p>
              <p className="mt-4 text-sm leading-7 text-[#62564d]">
                {siteConfig.officeAddress}
              </p>
              <div className="mt-5 border-t border-[#eee0cf] pt-5">
                <p className="flex gap-3 text-sm leading-6 text-[#62564d]">
                  <Clock3 className="mt-0.5 shrink-0 text-[#b56522]" size={19} />
                  <span>
                    {t("appointment.contact.hours", {
                      days: t("common.appointment.days"),
                      morning: siteConfig.morningSlot,
                      evening: siteConfig.eveningSlot,
                    })}
                  </span>
                </p>
              </div>
            </article>

            <article className="rounded-[1.35rem] border border-[#e4d3bd] bg-white p-6 shadow-[0_10px_28px_rgba(82,50,29,.06)]">
              <div className="flex items-center gap-3 text-[#b56522]">
                <Phone size={22} />
                <span className="text-xs font-bold tracking-[.12em]">
                  {t("appointment.contact.phoneLabel")}
                </span>
              </div>
              <h2 className="mt-3 font-serif text-xl font-bold text-[#7f171b]">
                {t("appointment.contact.phoneTitle")}
              </h2>
              <div className="mt-4 grid gap-2">
                {siteConfig.contactNumbers.map((number) => (
                  <a
                    key={number}
                    href={`tel:+91${number}`}
                    className="text-link w-fit"
                  >
                    {formatPhone(number)}
                  </a>
                ))}
              </div>
              {whatsappNumber && (
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary mt-5"
                >
                  <MessageCircleMore size={18} />
                  {t("appointment.contact.whatsappAppointment")}
                  <ArrowRight size={16} />
                </a>
              )}
            </article>

            <article className="rounded-[1.35rem] border border-[#e4d3bd] bg-[#123f37] p-6 text-white shadow-[0_10px_28px_rgba(34,58,51,.12)]">
              <div className="flex items-center gap-3 text-[#e5ac53]">
                <CalendarDays size={22} />
                <span className="text-xs font-bold tracking-[.12em]">
                  {t("appointment.contact.appointmentLabel")}
                </span>
              </div>
              <h2 className="mt-3 font-serif text-xl font-bold">
                {t("appointment.contact.appointmentTitle")}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#dce6e1]">
                {t("appointment.contact.appointmentText")}
              </p>
            </article>
          </aside>
        </div>
      </section>

      <section className="section-block bg-[#fbf5eb]">
        <div className="site-shell">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow justify-center">{t("appointment.process.eyebrow")}</div>
            <h2 className="section-title mx-auto mt-3">{t("appointment.process.title")}</h2>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {process.map((step, index) => (
              <article
                key={step.title}
                className="relative overflow-hidden rounded-[1.2rem] border border-[#e5d4bc] bg-white p-6"
              >
                <span className="absolute right-4 top-2 font-serif text-6xl font-bold text-[#f3e4cb]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <CheckCircle2 className="relative text-[#b56522]" size={24} />
                <h3 className="relative mt-5 font-serif text-xl font-bold text-[#7f171b]">
                  {step.title}
                </h3>
                <p className="relative mt-3 text-sm leading-7 text-[#675b51]">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="appointment-band">
        <div className="site-shell grid items-center gap-7 py-10 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="flex items-center gap-3 text-[#e5ac53]">
              <WalletCards size={23} />
              <span className="text-sm font-bold tracking-[.14em]">
                {t("appointment.cta.eyebrow")}
              </span>
            </div>
            <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
              {t("appointment.cta.title", { fee: siteConfig.consultationFee })}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#ead8cf] md:text-base">
              {t("appointment.cta.description")}
            </p>
          </div>
          <a href="#appointment-form" className="button-gold">
            {t("appointment.cta.button")} <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
