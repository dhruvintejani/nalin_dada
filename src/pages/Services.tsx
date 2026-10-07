import {
  Activity,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Compass,
  Flame,
  Flower2,
  Hand,
  Hash,
  HeartHandshake,
  HeartPulse,
  Leaf,
  MessageCircleMore,
  ShieldCheck,
  Sparkles,
  UserRound,
  WalletCards,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import MediaSlot from "../components/MediaSlot";
import { media } from "../config/media";
import { siteConfig } from "../config/site";

const serviceIcons = [
  Sparkles,
  Hand,
  Hash,
  Leaf,
  HeartPulse,
  Activity,
  Flower2,
  Flame,
  Compass,
];

const processIcons = [
  CalendarDays,
  MessageCircleMore,
  CheckCircle2,
  HeartHandshake,
];

const Services = () => {
  const { t } = useTranslation();
  const services = t("services.list.items", { returnObjects: true }) as Array<{
    title: string;
    text: string;
  }>;
  const consultationPoints = t("services.consultation.points", {
    returnObjects: true,
  }) as string[];
  const process = t("services.process.items", { returnObjects: true }) as Array<{
    title: string;
    text: string;
  }>;

  return (
    <div className="overflow-hidden bg-[#fffdf9]">
      <section className="hero-surface relative">
        <div className="hero-glow" />
        <div className={`site-shell grid min-h-[510px] items-center gap-10 py-12 ${media.photos.servicesHero.src ? "lg:grid-cols-[1.08fr_.92fr]" : ""} lg:py-16`}>
          <div className="relative z-10">
            <div className="eyebrow">{t("services.eyebrow")}</div>
            <h1 className="mt-4 font-serif text-[2.65rem] font-bold leading-[1.14] tracking-[-0.035em] text-[#8f181c] sm:text-[3.3rem] lg:text-[4rem]">
              {t("services.title")}
            </h1>
            <p className="mt-5 max-w-[720px] text-base leading-8 text-[#51463e] md:text-lg">
              {t("services.description")}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/appointment" className="button-primary">
                <CalendarDays size={18} /> {t("services.appointmentButton")} <ArrowRight size={18} />
              </Link>
              <a href="#all-services" className="button-secondary">
                {t("services.allButton")}
              </a>
            </div>
          </div>

          {media.photos.servicesHero.src && (
            <div className="relative mx-auto w-full max-w-[500px]">
              <div className="absolute -inset-4 rounded-[2rem] border border-[#e3b86f]/45" />
              <MediaSlot
                asset={media.photos.servicesHero}
                priority
                className="relative h-[445px] rounded-[1.7rem] border-[7px] border-white shadow-[0_24px_60px_rgba(78,44,22,.17)]"
              />
            </div>
          )}
        </div>
      </section>

      <section id="all-services" className="section-block scroll-mt-24 bg-[#fbf5eb]">
        <div className="site-shell">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow justify-center">{t("services.list.eyebrow")}</div>
            <h2 className="section-title mx-auto mt-3">{t("services.list.title")}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#706158]">
              {t("services.list.description")}
            </p>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {services.map((service, index) => {
              const Icon = serviceIcons[index] ?? Sparkles;
              return (
                <article key={service.title} className="service-card">
                  <div className="service-icon">
                    <Icon size={26} strokeWidth={1.75} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className={`site-shell grid items-center gap-10 ${media.photos.servicesConsultation.src ? "lg:grid-cols-[.92fr_1.08fr]" : ""}`}>
          {media.photos.servicesConsultation.src && (
            <MediaSlot
              asset={media.photos.servicesConsultation}
              className="min-h-[410px] rounded-[1.5rem]"
            />
          )}

          <div>
            <div className="eyebrow">{t("services.consultation.eyebrow")}</div>
            <h2 className="section-title mt-3">{t("services.consultation.title")}</h2>
            <p className="mt-5 text-base leading-8 text-[#5d5148]">
              {t("services.consultation.description")}
            </p>

            <div className="mt-6 grid gap-3">
              {consultationPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-[.9rem] border border-[#eadbc7] bg-[#fffdf9] px-4 py-3.5"
                >
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#bd7729]" size={20} />
                  <p className="text-sm leading-6 text-[#5d5148]">{point}</p>
                </div>
              ))}
            </div>

            <Link to="/appointment" className="button-primary mt-7">
              {t("services.consultation.button")} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-block bg-[#fbf5eb]">
        <div className="site-shell">
          <div className="grid gap-5 lg:grid-cols-3">
            <article className="rounded-[1.25rem] border border-[#ead9c1] bg-[#fffdf9] p-6">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[#fff2dd] text-[#b56522]">
                <ShieldCheck size={24} />
              </div>
              <h3 className="mt-4 font-serif text-xl font-bold text-[#7f171b]">
                {t("services.cards.privacyTitle")}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#675b51]">
                {t("services.cards.privacyText")}
              </p>
            </article>

            <article className="rounded-[1.25rem] border border-[#ead9c1] bg-[#fffdf9] p-6">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[#fff2dd] text-[#b56522]">
                <WalletCards size={24} />
              </div>
              <h3 className="mt-4 font-serif text-xl font-bold text-[#7f171b]">
                {t("services.cards.feeTitle", { fee: siteConfig.consultationFee })}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#675b51]">
                {t("services.cards.feeText")}
              </p>
            </article>

            <article className="rounded-[1.25rem] border border-[#ead9c1] bg-[#fffdf9] p-6">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[#fff2dd] text-[#b56522]">
                <UserRound size={24} />
              </div>
              <h3 className="mt-4 font-serif text-xl font-bold text-[#7f171b]">
                {t("services.cards.offlineTitle")}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#675b51]">
                {t("services.cards.offlineText")}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="site-shell">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow justify-center">{t("services.process.eyebrow")}</div>
            <h2 className="section-title mx-auto mt-3">{t("services.process.title")}</h2>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item, index) => {
              const Icon = processIcons[index] ?? CheckCircle2;
              return (
                <article
                  key={item.title}
                  className="relative overflow-hidden rounded-[1.2rem] border border-[#e6d6c1] bg-white p-6 shadow-[0_8px_24px_rgba(84,51,28,.05)]"
                >
                  <span className="absolute right-4 top-2 font-serif text-6xl font-bold text-[#f2e1c6]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="relative">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-[#8f181c] text-white">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-5 font-serif text-xl font-bold text-[#7f171b]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#675b51]">{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-[#eadbc7] bg-[#fff8ec] py-8">
        <div className="site-shell">
          <p className="mx-auto max-w-4xl text-center text-xs leading-6 text-[#76675c]">
            {t("services.disclaimer")}
          </p>
        </div>
      </section>

      <section className="appointment-band">
        <div className="site-shell grid items-center gap-7 py-10 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="flex items-center gap-3 text-[#e5ac53]">
              <WalletCards size={23} />
              <span className="text-sm font-bold tracking-[.14em]">
                {t("services.cta.eyebrow")}
              </span>
            </div>
            <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
              {t("services.cta.title", {
                days: t("common.appointment.days"),
                morning: siteConfig.morningSlot,
                evening: siteConfig.eveningSlot,
              })}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#dfe8e4] md:text-base">
              {t("services.cta.description")}
            </p>
          </div>
          <Link to="/appointment" className="button-gold">
            {t("services.cta.button")} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
