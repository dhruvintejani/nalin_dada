import {
  ArrowRight,
  BookHeart,
  CalendarCheck2,
  Flame,
  Flower2,
  HandHeart,
  MessageCircleMore,
  MoonStar,
  Sparkles,
  Waves,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import MediaSlot from "../components/MediaSlot";
import { media } from "../config/media";

const journeyIcons = [Sparkles, Flower2, HandHeart, Flame];
const practiceIcons = [Flame, Sparkles, BookHeart, MoonStar];
const cardIcons = [CalendarCheck2, HandHeart, Waves];

const Ashram = () => {
  const { t } = useTranslation();
  const stats = t("ashram.stats", { returnObjects: true }) as Array<{
    label: string;
    value: string;
    text: string;
  }>;
  const journey = t("ashram.journey.items", { returnObjects: true }) as Array<{
    title: string;
    text: string;
  }>;
  const practices = t("ashram.practices.items", { returnObjects: true }) as Array<{
    title: string;
    text: string;
  }>;
  const cards = t("ashram.cards", { returnObjects: true }) as Array<{
    title: string;
    text: string;
  }>;
  const galleryAssets = [
    media.photos.ashramGalleryOne,
    media.photos.ashramGalleryTwo,
    media.photos.ashramGalleryThree,
    media.photos.ashramGalleryFour,
  ].filter((asset) => Boolean(asset.src));

  return (
    <div className="overflow-hidden bg-[#fffdf9]">
      <section className="hero-surface relative">
        <div className="hero-glow" />
        <div className={`site-shell grid min-h-[520px] items-center gap-10 py-12 ${media.photos.ashramHero.src ? "lg:grid-cols-[1.06fr_.94fr]" : ""} lg:py-16`}>
          <div className="relative z-10">
            <div className="eyebrow">{t("ashram.eyebrow")}</div>
            <h1 className="mt-4 font-serif text-[2.7rem] font-bold leading-[1.12] tracking-[-0.035em] text-[#8f181c] sm:text-[3.35rem] lg:text-[4.1rem]">
              {t("ashram.title")}
            </h1>
            <p className="mt-5 max-w-[720px] text-base leading-8 text-[#51463e] md:text-lg">
              {t("ashram.description")}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#history" className="button-primary">
                {t("ashram.journeyButton")} <ArrowRight size={18} />
              </a>
              <Link to="/appointment" className="button-secondary">
                {t("ashram.contactButton")}
              </Link>
            </div>

            <div className="mt-8 grid max-w-[720px] gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="hero-stat">
                  <span className="hero-stat-label">{stat.label}</span>
                  <strong>{stat.value}</strong>
                  <small>{stat.text}</small>
                </div>
              ))}
            </div>
          </div>

          {media.photos.ashramHero.src && (
            <div className="relative mx-auto w-full max-w-[500px]">
              <div className="absolute -inset-4 rounded-[2rem] border border-[#e3b86f]/45" />
              <MediaSlot
                asset={media.photos.ashramHero}
                priority
                className="min-h-[440px] rounded-[1.35rem]"
              />
            </div>
          )}
        </div>
      </section>

      <section className="section-block">
        <div className={`site-shell grid items-center gap-10 ${media.photos.ashramMain.src ? "lg:grid-cols-[.92fr_1.08fr]" : ""}`}>
          {media.photos.ashramMain.src && (
            <MediaSlot
              asset={media.photos.ashramMain}
              className="min-h-[440px] rounded-[1.35rem]"
            />
          )}

          <div>
            <div className="eyebrow">{t("ashram.intro.eyebrow")}</div>
            <h2 className="section-title mt-3">{t("ashram.intro.title")}</h2>
            <p className="mt-5 text-base leading-8 text-[#5d5148]">
              {t("ashram.intro.p1")}
            </p>
            <p className="mt-4 text-base leading-8 text-[#5d5148]">
              {t("ashram.intro.p2")}
            </p>
          </div>
        </div>
      </section>

      <section id="history" className="section-block scroll-mt-24 bg-[#fbf5eb]">
        <div className="site-shell">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow justify-center">{t("ashram.journey.eyebrow")}</div>
            <h2 className="section-title mx-auto mt-3">{t("ashram.journey.title")}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#706158]">
              {t("ashram.journey.description")}
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {journey.map((item, index) => {
              const Icon = journeyIcons[index] ?? Sparkles;
              return (
                <article
                  key={item.title}
                  className="relative overflow-hidden rounded-[1.2rem] border border-[#e5d4bc] bg-white p-6 shadow-[0_8px_24px_rgba(84,51,28,.05)]"
                >
                  <span className="absolute right-4 top-2 font-serif text-6xl font-bold text-[#f3e4cb]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="relative">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-[#8f181c] text-white">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-5 font-serif text-xl font-bold leading-8 text-[#7f171b]">
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

      <section className="section-block">
        <div className="site-shell">
          <div className="max-w-3xl">
            <div className="eyebrow">{t("ashram.practices.eyebrow")}</div>
            <h2 className="section-title mt-3">{t("ashram.practices.title")}</h2>
            <p className="mt-4 text-sm leading-7 text-[#706158]">
              {t("ashram.practices.description")}
            </p>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {practices.map((item, index) => {
              const Icon = practiceIcons[index] ?? Flame;
              return (
                <article
                  key={item.title}
                  className="flex gap-5 rounded-[1.25rem] border border-[#ead9c1] bg-[#fffdf9] p-6 shadow-[0_8px_22px_rgba(84,51,28,.04)]"
                >
                  <div className="grid h-13 w-13 shrink-0 place-items-center rounded-full border border-[#e0b77c] bg-[#fff3df] text-[#b56522]">
                    <Icon size={24} strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#7f171b]">
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

      {galleryAssets.length > 0 && (
        <section className="section-block bg-[#fbf5eb]">
          <div className="site-shell">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <div className="eyebrow">{t("ashram.gallery.eyebrow")}</div>
                <h2 className="section-title mt-3">{t("ashram.gallery.title")}</h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-[#716359]">
                {t("ashram.gallery.description")}
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {galleryAssets.map((asset) => (
                <MediaSlot
                  key={asset.recommendedFile}
                  asset={asset}
                  className="min-h-[245px] rounded-[1.35rem]"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-block">
        <div className="site-shell">
          <div className="grid gap-5 lg:grid-cols-3">
            {cards.map((card, index) => {
              const Icon = cardIcons[index] ?? HandHeart;
              return (
                <article
                  key={card.title}
                  className="rounded-[1.25rem] border border-[#ead9c1] bg-white p-6"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-[#fff2dd] text-[#b56522]">
                    <Icon size={23} />
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-bold text-[#7f171b]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#675b51]">{card.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="appointment-band">
        <div className="site-shell grid items-center gap-7 py-10 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="flex items-center gap-3 text-[#e5ac53]">
              <MessageCircleMore size={23} />
              <span className="text-sm font-bold tracking-[.14em]">
                {t("ashram.cta.eyebrow")}
              </span>
            </div>
            <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
              {t("ashram.cta.title")}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#dfe8e4] md:text-base">
              {t("ashram.cta.description")}
            </p>
          </div>
          <Link to="/appointment" className="button-gold">
            {t("ashram.cta.button")} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Ashram;
