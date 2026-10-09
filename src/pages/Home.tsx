import {
  Activity,
  ArrowRight,
  CalendarDays,
  Compass,
  Flame,
  Flower2,
  Hand,
  Hash,
  HeartPulse,
  Leaf,
  MapPin,
  Sparkles,
  WalletCards,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import BookCollectionImage from "../components/BookCollectionImage";
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

const Home = () => {
  const { t } = useTranslation();
  const services = t("home.services.items", { returnObjects: true }) as Array<{
    title: string;
    text: string;
  }>;

  return (
    <div className="overflow-hidden bg-[#fffdf9]">
      <section className="hero-surface relative">
        <div className="hero-glow" />
        <div className="site-shell grid min-h-[560px] items-center gap-10 py-12 lg:grid-cols-[1.08fr_.92fr] lg:py-16">
          <div className="relative z-10 max-w-[720px]">
            <div className="eyebrow">{t("home.eyebrow")}</div>
            <h1 className="mt-4 max-w-[760px] font-serif text-[2.5rem] font-bold leading-[1.17] tracking-[-0.03em] text-[#8f181c] sm:text-[3.2rem] lg:text-[4.15rem]">
              {t("home.hero.title")}
            </h1>
            <p className="mt-5 max-w-[680px] text-base leading-8 text-[#4f443b] md:text-lg">
              {t("home.hero.description")}
            </p>

            <div className="mt-5 max-w-[680px] rounded-[1.15rem] border border-[#e4cfad] bg-[#fff9ee]/90 p-4 shadow-[0_8px_24px_rgba(80,48,26,.05)]">
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                <span className="font-serif text-lg font-bold text-[#8f181c]">
                  {t("home.legacy.age")}
                </span>
                <span className="font-serif text-lg font-bold text-[#b06a24]">
                  {t("home.legacy.experience")}
                </span>
              </div>
              <p className="mt-2 text-sm leading-7 text-[#65564b]">
                {t("home.legacy.text")}
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/appointment" className="button-primary">
                <CalendarDays size={18} /> {t("home.hero.primary")} <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="button-secondary">
                {t("home.hero.secondary")}
              </Link>
            </div>

            <div className="mt-8 grid max-w-[680px] gap-3 sm:grid-cols-3">
              <div className="hero-stat">
                <span className="hero-stat-label">{t("home.stats.fee")}</span>
                <strong>{siteConfig.consultationFee}</strong>
                <small>{t("home.stats.officePayment")}</small>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-label">{t("home.stats.hours")}</span>
                <strong>11–1 / 6–8</strong>
                <small>{t("common.appointment.appointmentOnly")}</small>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-label">{t("home.stats.days")}</span>
                <strong>{t("home.stats.daysValue")}</strong>
                <small>{t("common.appointment.appointmentOnly")}</small>
              </div>
            </div>
          </div>

          {media.photos.homeHero.src && (
            <div className="relative mx-auto w-full max-w-[520px] lg:justify-self-end">
              <div className="absolute -inset-5 rounded-[2.5rem] border border-[#e6bd7d]/50" />
              <div className="relative overflow-hidden rounded-[2.15rem] border-[7px] border-white bg-white shadow-[0_25px_65px_rgba(81,43,21,.18)]">
                <MediaSlot
                  asset={media.photos.homeHero}
                  priority
                  className="h-[470px] sm:h-[560px]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2e160f]/85 via-[#2e160f]/30 to-transparent px-6 pb-6 pt-20 text-white">
                  <p className="font-serif text-xl font-semibold">Nalin Dada</p>
                  <p className="mt-1 text-sm text-white/80">Dr. Nalin Pandya</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section-block">
        <div className={`site-shell grid items-center gap-10 ${media.photos.homeAbout.src ? "lg:grid-cols-[.92fr_1.08fr]" : ""}`}>
          {media.photos.homeAbout.src && (
            <div className="relative mx-auto w-full max-w-[430px]">
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-3xl bg-[#f3dfbd]" />
              <MediaSlot
                asset={media.photos.homeAbout}
                className="relative h-[540px] rounded-[1.6rem] bg-[#f7ead5] shadow-[0_18px_45px_rgba(74,44,24,.14)] sm:h-[560px]"
              />
            </div>
          )}

          <div>
            <div className="eyebrow">{t("home.intro.eyebrow")}</div>
            <h2 className="section-title mt-3">{t("home.intro.title")}</h2>
            <p className="mt-5 text-base leading-8 text-[#5c5147]">{t("home.intro.p1")}</p>
            <p className="mt-4 text-base leading-8 text-[#5c5147]">{t("home.intro.p2")}</p>
            <Link to="/about" className="text-link mt-6">
              {t("home.intro.link")} <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-block bg-[#fbf5eb]">
        <div className="site-shell">
          <div className="max-w-3xl">
            <div className="eyebrow">{t("home.services.eyebrow")}</div>
            <h2 className="section-title mt-3">{t("home.services.title")}</h2>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {services.map((service, index) => {
              const Icon = serviceIcons[index] ?? Sparkles;
              return (
                <article key={service.title} className="service-card">
                  <div className="service-icon">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link to="/services" className="button-secondary">
              {t("home.services.all")} <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="site-shell">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="eyebrow">{t("home.books.eyebrow")}</div>
              <h2 className="section-title mt-3">{t("home.books.title")}</h2>
            </div>
            <Link to="/books" className="text-link">
              {t("home.books.link")} <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {media.books.slice(0, 4).map((book, index) => (
              <article
                key={book.recommendedFile}
                className="book-preview-card rounded-[1.1rem] border border-[#ead9c1] bg-white p-2.5 shadow-[0_10px_28px_rgba(78,48,28,.06)]"
              >
                <BookCollectionImage
                  book={book}
                  alt={`${t("books.collection.imageAlt")} ${index + 1}`}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block bg-[#fbf5eb]">
        <div className="site-shell">
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="location-card">
              <div className="location-icon"><Flower2 size={28} /></div>
              <div>
                <span className="card-kicker">{t("home.places.ashramKicker")}</span>
                <h2>{t("home.places.ashramTitle")}</h2>
                <p>{t("home.places.ashramText")}</p>
                <Link to="/ashram" className="text-link mt-4">
                  {t("home.places.ashramLink")} <ArrowRight size={16} />
                </Link>
              </div>
            </article>

            <article className="location-card">
              <div className="location-icon"><MapPin size={28} /></div>
              <div>
                <span className="card-kicker">{t("home.places.officeKicker")}</span>
                <h2>{t("home.places.officeTitle")}</h2>
                <p>{siteConfig.officeAddress}</p>
                <p className="mt-3 font-semibold text-[#7e201f]">
                  {t("common.appointment.days")} · {siteConfig.morningSlot} · {siteConfig.eveningSlot}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="appointment-band">
        <div className="site-shell grid items-center gap-7 py-10 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="flex items-center gap-3 text-[#e5ac53]">
              <WalletCards size={23} />
              <span className="text-sm font-bold tracking-[.14em]">{t("home.cta.eyebrow")}</span>
            </div>
            <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
              {t("home.cta.title", { fee: siteConfig.consultationFee })}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#ead8cf] md:text-base">
              {t("home.cta.description")}
            </p>
          </div>
          <Link to="/appointment" className="button-gold">
            {t("home.cta.button")} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
