import { useMemo, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Info,
  LockKeyhole,
  MapPin,
  MessageCircleMore,
  Phone,
  UserRound,
  WalletCards,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { siteConfig } from "../config/site";

const serviceOptions = [
  "ज्योतिष",
  "हस्तरेखा",
  "अंक ज्योतिष",
  "आयुर्वेद एवं प्राकृतिक स्वास्थ्य",
  "समग्र जीवन मार्गदर्शन",
  "नाभि चिकित्सा",
  "आध्यात्मिक मार्गदर्शन",
  "तंत्र एवं मंत्र साधना",
  "पारंपरिक उपाय",
  "अन्य / पहले चर्चा करना चाहता/चाहती हूँ",
];

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "कृपया अपना पूरा नाम दर्ज करें")
    .max(80, "नाम 80 अक्षरों से कम रखें"),
  mobile: z
    .string()
    .trim()
    .regex(/^[6-9][0-9]{9}$/, "कृपया वैध 10-अंकीय भारतीय मोबाइल नंबर दर्ज करें"),
  city: z
    .string()
    .trim()
    .min(2, "कृपया अपना शहर दर्ज करें")
    .max(80, "शहर का नाम 80 अक्षरों से कम रखें"),
  service: z.string().min(1, "कृपया सेवा चुनें"),
  date: z
    .string()
    .min(1, "कृपया पसंदीदा तारीख चुनें")
    .refine((value) => {
      if (!value) return true;
      const selected = new Date(value + "T12:00:00");
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selected >= today;
    }, "कृपया आज या भविष्य की तारीख चुनें")
    .refine((value) => {
      if (!value) return true;
      return new Date(value + "T12:00:00").getDay() !== 0;
    }, "रविवार को अपॉइंटमेंट उपलब्ध नहीं है"),
  timeSlot: z.string().min(1, "कृपया समय चुनें"),
  message: z.string().trim().max(600, "संदेश 600 अक्षरों से कम रखें").optional(),
});

type FormData = z.infer<typeof formSchema>;

const getLocalDateInputValue = () => {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60_000);
  return local.toISOString().slice(0, 10);
};

const Appointment = () => {
  const [submitNote, setSubmitNote] = useState("");
  const minDate = useMemo(getLocalDateInputValue, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors,
      isSubmitting,
      isValid,
      dirtyFields,
    },
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
    setSubmitNote("");

    if (!siteConfig.whatsappNumber) {
      setSubmitNote(
        "फॉर्म की validation पूरी तरह काम कर रही है। Nalin Dada का नया WhatsApp नंबर मिलते ही इसी flow से तैयार WhatsApp message खुलेगा।",
      );
      return;
    }

    const messageLines = [
      "नमस्ते Nalin Dada 🙏",
      "",
      "मैं वेबसाइट के माध्यम से अपॉइंटमेंट अनुरोध भेज रहा/रही हूँ।",
      "",
      "नाम: " + data.name,
      "मोबाइल: " + data.mobile,
      "शहर: " + data.city,
      "सेवा / विषय: " + data.service,
      "पसंदीदा तारीख: " + data.date,
      "पसंदीदा समय: " + data.timeSlot,
      data.message ? "संदेश: " + data.message : "",
      "",
      "कृपया उपलब्ध समय की पुष्टि करें।",
    ].filter(Boolean);

    const whatsappUrl =
      "https://wa.me/" +
      siteConfig.whatsappNumber +
      "?text=" +
      encodeURIComponent(messageLines.join("\n"));

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="overflow-hidden bg-[#fffdf9]">
      <section className="hero-surface relative">
        <div className="hero-glow" />
        <div className="site-shell grid min-h-[510px] items-center gap-10 py-12 lg:grid-cols-[1.06fr_.94fr] lg:py-16">
          <div className="relative z-10">
            <div className="eyebrow">मुख्य पृष्ठ · अपॉइंटमेंट एवं संपर्क</div>
            <h1 className="mt-4 font-serif text-[2.65rem] font-bold leading-[1.14] tracking-[-0.035em] text-[#8f181c] sm:text-[3.3rem] lg:text-[4rem]">
              व्यक्तिगत परामर्श के लिए अपॉइंटमेंट
            </h1>
            <p className="mt-5 max-w-[720px] text-base leading-8 text-[#51463e] md:text-lg">
              Nalin Dada से मिलने के लिए नीचे दिया गया फॉर्म भरें। Submit करने के बाद आपकी जानकारी तैयार WhatsApp संदेश में खुलेगी और आप स्वयं Send दबाकर अपॉइंटमेंट अनुरोध भेज सकेंगे।
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#appointment-form" className="button-primary">
                <CalendarDays size={18} /> अपॉइंटमेंट फॉर्म भरें <ArrowRight size={18} />
              </a>
              <a href="#contact-details" className="button-secondary">
                संपर्क विवरण देखें
              </a>
            </div>

            <div className="mt-8 grid max-w-[720px] gap-3 sm:grid-cols-3">
              <div className="hero-stat">
                <span className="hero-stat-label">परामर्श शुल्क</span>
                <strong>{siteConfig.consultationFee}</strong>
                <small>कार्यालय में भुगतान</small>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-label">समय</span>
                <strong>11–1 / 6–8</strong>
                <small>केवल अपॉइंटमेंट</small>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-label">रविवार</span>
                <strong>बंद</strong>
                <small>कोई अपॉइंटमेंट नहीं</small>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[500px]">
            <div className="absolute -inset-4 rounded-[2rem] border border-[#e3b86f]/45" />
            <img
              src="/images/nalin-speaking.jpg"
              alt="Nalin Dada speaking and guiding people at an event"
              className="relative h-[445px] w-full rounded-[1.7rem] border-[7px] border-white object-cover object-[center_27%] shadow-[0_24px_60px_rgba(78,44,22,.17)]"
            />
            <div className="absolute -bottom-5 left-5 right-5 rounded-[1rem] border border-[#ead4b6] bg-[#fffdf9]/95 px-5 py-4 shadow-[0_16px_34px_rgba(77,45,25,.13)] backdrop-blur">
              <p className="text-xs leading-6 text-[#675a50]">
                ऑनलाइन या वीडियो consultation उपलब्ध नहीं है। मुलाकात केवल consultation office में होगी।
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block bg-[#fbf5eb]">
        <div className="site-shell">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <article className="rounded-[1.15rem] border border-[#e4d3bd] bg-white p-5">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-[#fff2dd] text-[#b56522]">
                <WalletCards size={22} />
              </div>
              <h2 className="mt-4 font-serif text-lg font-bold text-[#7f171b]">
                शुल्क {siteConfig.consultationFee}
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#675b51]">
                शुल्क consultation office में भुगतान किया जाएगा। कोई online payment नहीं है।
              </p>
            </article>

            <article className="rounded-[1.15rem] border border-[#e4d3bd] bg-white p-5">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-[#fff2dd] text-[#b56522]">
                <Clock3 size={22} />
              </div>
              <h2 className="mt-4 font-serif text-lg font-bold text-[#7f171b]">
                दो समय स्लॉट
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#675b51]">
                सुबह {siteConfig.morningSlot} और शाम {siteConfig.eveningSlot}। केवल prior appointment से।
              </p>
            </article>

            <article className="rounded-[1.15rem] border border-[#e4d3bd] bg-white p-5">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-[#fff2dd] text-[#b56522]">
                <UserRound size={22} />
              </div>
              <h2 className="mt-4 font-serif text-lg font-bold text-[#7f171b]">
                Offline consultation
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#675b51]">
                Video call या online consultation नहीं रखा गया है।
              </p>
            </article>

            <article className="rounded-[1.15rem] border border-[#e4d3bd] bg-white p-5">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-[#fff2dd] text-[#b56522]">
                <LockKeyhole size={22} />
              </div>
              <h2 className="mt-4 font-serif text-lg font-bold text-[#7f171b]">
                Ashram location private
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#675b51]">
                Ashram address और map सार्वजनिक रूप से साझा नहीं किए जाते।
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="appointment-form" className="section-block scroll-mt-24">
        <div className="site-shell grid gap-9 xl:grid-cols-[1.3fr_.7fr]">
          <div>
            <div className="eyebrow">अपॉइंटमेंट फॉर्म</div>
            <h2 className="section-title mt-3">अपनी जानकारी भरें</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#706158]">
              यह फॉर्म आपकी जानकारी वेबसाइट पर संग्रहीत नहीं करता। WhatsApp नंबर सक्रिय होने पर Submit करने से आपकी जानकारी के साथ तैयार संदेश खुलेगा।
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="premium-form mt-8 rounded-[1.5rem] border border-[#e4d3bd] bg-[#fbf5eb] p-5 shadow-[0_12px_34px_rgba(82,50,29,.06)] sm:p-7 lg:p-9"
              noValidate
            >
              <div className="mb-6 flex flex-col gap-2 rounded-[1rem] border border-[#ead9c1] bg-white/80 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#62554b]">
                  <CheckCircle2
                    size={18}
                    className={isValid ? "text-[#3f7f5b]" : "text-[#b89363]"}
                  />
                  <span>
                    {isValid
                      ? "सभी आवश्यक जानकारी सही है"
                      : "आवश्यक fields भरते ही validation तुरंत दिखाई देगी"}
                  </span>
                </div>
                <span
                  className={
                    "validation-status " +
                    (isValid ? "validation-status-valid" : "validation-status-pending")
                  }
                >
                  {isValid ? "Ready" : "Incomplete"}
                </span>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="field-label" htmlFor="appointment-name">
                  आपका नाम <span className="required-mark">*</span>
                  <input
                    id="appointment-name"
                    {...register("name")}
                    autoComplete="name"
                    placeholder="अपना नाम दर्ज करें"
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
                  मोबाइल नंबर <span className="required-mark">*</span>
                  <input
                    id="appointment-mobile"
                    {...register("mobile")}
                    inputMode="numeric"
                    autoComplete="tel"
                    maxLength={10}
                    pattern="[0-9]*"
                    placeholder="10-अंकीय मोबाइल नंबर"
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
                  शहर <span className="required-mark">*</span>
                  <input
                    id="appointment-city"
                    {...register("city")}
                    autoComplete="address-level2"
                    placeholder="अपना शहर दर्ज करें"
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

                <label className="field-label" htmlFor="appointment-service">
                  सेवा / विषय <span className="required-mark">*</span>
                  <select
                    id="appointment-service"
                    {...register("service")}
                    aria-invalid={Boolean(errors.service)}
                    aria-describedby={errors.service ? "service-error" : undefined}
                    className={"form-control premium-select mt-2 " + fieldState("service")}
                  >
                    <option value="">सेवा चुनें</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <span id="service-error" className="field-error" role="alert">
                      {errors.service.message}
                    </span>
                  )}
                </label>

                <label className="field-label" htmlFor="appointment-date">
                  पसंदीदा तारीख <span className="required-mark">*</span>
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

                <label className="field-label" htmlFor="appointment-time">
                  पसंदीदा समय <span className="required-mark">*</span>
                  <select
                    id="appointment-time"
                    {...register("timeSlot")}
                    aria-invalid={Boolean(errors.timeSlot)}
                    aria-describedby={errors.timeSlot ? "time-error" : undefined}
                    className={"form-control premium-select mt-2 " + fieldState("timeSlot")}
                  >
                    <option value="">समय चुनें</option>
                    <option value={siteConfig.morningSlot}>सुबह {siteConfig.morningSlot}</option>
                    <option value={siteConfig.eveningSlot}>शाम {siteConfig.eveningSlot}</option>
                  </select>
                  {errors.timeSlot && (
                    <span id="time-error" className="field-error" role="alert">
                      {errors.timeSlot.message}
                    </span>
                  )}
                </label>
              </div>

              <label className="field-label mt-5 block" htmlFor="appointment-message">
                आपका प्रश्न / संदेश
                <textarea
                  id="appointment-message"
                  {...register("message")}
                  rows={5}
                  placeholder="संक्षेप में बताएं कि आप किस विषय पर परामर्श चाहते हैं..."
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
                    रविवार को appointment नहीं है। चुनी गई तारीख और समय final confirmation नहीं है; WhatsApp पर Nalin Dada की ओर से पुष्टि मिलने के बाद ही appointment confirm माना जाएगा।
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting || !isValid}
                  className="button-primary button-submit w-full sm:w-auto"
                >
                  <MessageCircleMore size={19} />
                  {isSubmitting ? "तैयार हो रहा है..." : "WhatsApp पर अनुरोध तैयार करें"}
                  <ArrowRight size={18} />
                </button>

                <p className="mt-3 max-w-2xl text-xs leading-6 text-[#7b6c60]">
                  सभी required fields valid होने के बाद button सक्रिय होगा। Submit करने पर WhatsApp खुलेगा; message भेजने के लिए आपको वहाँ Send दबाना होगा।
                </p>

                {submitNote && (
                  <div className="form-notice mt-4" role="status" aria-live="polite">
                    <Info size={18} className="shrink-0" />
                    <span>{submitNote}</span>
                  </div>
                )}
              </div>
            </form>
          </div>

          <aside id="contact-details" className="scroll-mt-24 space-y-5">
            <article className="rounded-[1.35rem] border border-[#e4d3bd] bg-white p-6 shadow-[0_10px_28px_rgba(82,50,29,.06)]">
              <div className="flex items-center gap-3 text-[#b56522]">
                <MapPin size={23} />
                <span className="text-xs font-bold tracking-[.12em]">
                  CONSULTATION OFFICE
                </span>
              </div>
              <h2 className="mt-3 font-serif text-2xl font-bold text-[#7f171b]">
                परामर्श कार्यालय
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#62564d]">
                {siteConfig.officeAddress}
              </p>
              <div className="mt-5 border-t border-[#eee0cf] pt-5">
                <p className="flex gap-3 text-sm leading-6 text-[#62564d]">
                  <Clock3 className="mt-0.5 shrink-0 text-[#b56522]" size={19} />
                  <span>
                    {siteConfig.appointmentDays}
                    <br />
                    {siteConfig.morningSlot}
                    <br />
                    {siteConfig.eveningSlot}
                    <br />
                    <strong className="text-[#8f181c]">{siteConfig.sundayStatus}</strong>
                  </span>
                </p>
              </div>
              <div className="mt-5 rounded-[.9rem] bg-[#fbf5eb] p-4 text-xs leading-6 text-[#76675c]">
                Google Map अभी शामिल नहीं किया गया है।
              </div>
            </article>

            <article className="rounded-[1.35rem] border border-[#e4d3bd] bg-white p-6 shadow-[0_10px_28px_rgba(82,50,29,.06)]">
              <div className="flex items-center gap-3 text-[#b56522]">
                <Phone size={22} />
                <span className="text-xs font-bold tracking-[.12em]">
                  MOBILE / WHATSAPP
                </span>
              </div>
              <h2 className="mt-3 font-serif text-xl font-bold text-[#7f171b]">
                नया नंबर लंबित है
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#62564d]">
                Nalin Dada ने नया mobile/WhatsApp number देने को कहा है। नंबर मिलते ही इसी page के form और contact card में जोड़ दिया जाएगा।
              </p>
            </article>

            <article className="rounded-[1.35rem] border border-[#e4d3bd] bg-[#123f37] p-6 text-white shadow-[0_10px_28px_rgba(34,58,51,.12)]">
              <div className="flex items-center gap-3 text-[#e5ac53]">
                <LockKeyhole size={22} />
                <span className="text-xs font-bold tracking-[.12em]">
                  ASHRAM PRIVACY
                </span>
              </div>
              <h2 className="mt-3 font-serif text-xl font-bold">
                Ashram address सार्वजनिक नहीं है
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#dce6e1]">
                Ashram Nalin Dada की निजी साधना भूमि है। वहाँ जाने की आवश्यकता होने पर जानकारी व्यक्तिगत चर्चा के बाद दी जाएगी।
              </p>
            </article>
          </aside>
        </div>
      </section>

      <section className="section-block bg-[#fbf5eb]">
        <div className="site-shell">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow justify-center">बुकिंग प्रक्रिया</div>
            <h2 className="section-title mx-auto mt-3">
              फॉर्म से appointment confirmation तक
            </h2>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                number: "01",
                title: "फॉर्म भरें",
                text: "नाम, नंबर, शहर, विषय, तारीख और पसंदीदा समय भरें।",
              },
              {
                number: "02",
                title: "WhatsApp खुलेगा",
                text: "आपके विवरण से तैयार message Nalin Dada के WhatsApp के लिए खुलेगा।",
              },
              {
                number: "03",
                title: "Send दबाएँ",
                text: "WhatsApp में जानकारी जाँचकर स्वयं Send दबाएँ।",
              },
              {
                number: "04",
                title: "पुष्टि प्राप्त करें",
                text: "समय की पुष्टि मिलने के बाद office consultation के लिए आएँ।",
              },
            ].map((step) => (
              <article
                key={step.number}
                className="relative overflow-hidden rounded-[1.2rem] border border-[#e5d4bc] bg-white p-6"
              >
                <span className="absolute right-4 top-2 font-serif text-6xl font-bold text-[#f3e4cb]">
                  {step.number}
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
                व्यक्तिगत परामर्श
              </span>
            </div>
            <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
              {siteConfig.consultationFee} · कार्यालय में भुगतान
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#dfe8e4] md:text-base">
              ऑनलाइन भुगतान और video consultation उपलब्ध नहीं है। Ashram location निजी रखी जाती है।
            </p>
          </div>
          <a href="#appointment-form" className="button-gold">
            अपॉइंटमेंट फॉर्म <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
