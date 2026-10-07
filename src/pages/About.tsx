import {
  ArrowRight,
  BookOpen,
  Compass,
  Flame,
  Flower2,
  Hand,
  Hash,
  Heart,
  Leaf,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import MediaSlot from "../components/MediaSlot";
import { media } from "../config/media";
import { siteConfig } from "../config/site";

const areaIcons = [Flower2, Hand, Hash, Leaf, Flame, Compass];

const About = () => {
  const { t } = useTranslation();
  const areas = t("about.areas.items", { returnObjects: true }) as string[];
  const journey = t("about.journey.items", { returnObjects: true }) as Array<{
    year: string;
    title: string;
    text: string;
  }>;
  const themes = t("about.writing.themes", { returnObjects: true }) as string[];

  return (
    <div className="overflow-hidden bg-[#fffdf9]">
      <section className="hero-surface relative">
        <div className="hero-glow" />
        <div className={`site-shell grid min-h-[500px] items-center gap-10 py-12 ${media.photos.aboutHero.src ? "lg:grid-cols-[1.05fr_.95fr]" : ""} lg:py-16`}>
          <div className="relative z-10">
            <div className="eyebrow">{t("about.eyebrow")}</div>
            <h1 className="mt-4 font-serif text-[2.65rem] font-bold leading-[1.14] tracking-[-0.035em] text-[#8f181c] sm:text-[3.3rem] lg:text-[4rem]">
              {t("about.title")}
            </h1>
            <h2 className="mt-4 max-w-[720px] font-serif text-[1.35rem] font-semibold leading-[1.6] text-[#b06a24] md:text-[1.7rem]">
              {t("about.subtitle")}
            </h2>
            <p className="mt-5 max-w-[720px] text-base leading-8 text-[#51463e] md:text-lg">
              {t("about.description")}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#journey" className="button-primary">
                {t("about.journeyButton")} <ArrowRight size={18} />
              </a>
              <Link to="/books" className="button-secondary">
                {t("about.booksButton")}
              </Link>
            </div>
          </div>

          {media.photos.aboutHero.src && (
            <div className="relative mx-auto w-full max-w-[500px]">
              <div className="absolute -inset-4 rounded-[2rem] border border-[#e3b86f]/45" />
              <MediaSlot
                asset={media.photos.aboutHero}
                priority
                className="relative h-[440px] rounded-[1.7rem] border-[7px] border-white shadow-[0_24px_60px_rgba(78,44,22,.17)]"
              />
            </div>
          )}
        </div>
      </section>

      <section className="section-block">
        <div className={`site-shell grid items-center gap-10 ${media.photos.aboutPortrait.src ? "lg:grid-cols-[.92fr_1.08fr]" : ""}`}>
          {media.photos.aboutPortrait.src && (
            <MediaSlot
              asset={media.photos.aboutPortrait}
              className="min-h-[390px] rounded-[1.4rem]"
            />
          )}

          <div>
            <div className="eyebrow">{t("about.overview.eyebrow")}</div>
            <h2 className="section-title mt-3">{t("about.overview.title")}</h2>
            <p className="mt-5 text-base leading-8 text-[#5d5148]">
              {t("about.overview.p1")}
            </p>
            <p className="mt-4 text-base leading-8 text-[#5d5148]">
              {t("about.overview.p2")}
            </p>

            <div className="mt-7 rounded-[1.2rem] border-l-4 border-[#d7a04b] bg-[#fff7e9] px-5 py-4">
              <p className="font-serif text-lg leading-8 text-[#6d4931]">
                {t("about.overview.highlight")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block bg-[#fbf5eb]">
        <div className="site-shell">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow justify-center">{t("about.areas.eyebrow")}</div>
            <h2 className="section-title mx-auto mt-3">{t("about.areas.title")}</h2>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((title, index) => {
              const Icon = areaIcons[index] ?? Flower2;
              return (
                <article
                  key={title}
                  className="flex items-center gap-4 rounded-[1rem] border border-[#eadbc7] bg-[#fffdf9] px-5 py-5 shadow-[0_6px_18px_rgba(91,55,28,.04)]"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[#e2bd82] bg-[#fff7e9] text-[#b56522]">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>
                  <h3 className="font-serif text-lg font-bold leading-7 text-[#7f171b]">{title}</h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="journey" className="section-block scroll-mt-24">
        <div className="site-shell">
          <div className="max-w-3xl">
            <div className="eyebrow">{t("about.journey.eyebrow")}</div>
            <h2 className="section-title mt-3">{t("about.journey.title")}</h2>
            <p className="mt-4 text-sm leading-7 text-[#716359]">
              {t("about.journey.description")}
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {journey.map((item, index) => (
              <article
                key={item.title}
                className="relative overflow-hidden rounded-[1.25rem] border border-[#e7d6c0] bg-white p-6 shadow-[0_10px_30px_rgba(84,51,28,.06)]"
              >
                <span className="absolute right-4 top-3 font-serif text-6xl font-bold text-[#f2e1c6]">
                  {index + 1}
                </span>
                <div className="relative">
                  <span className="inline-flex rounded-full bg-[#8f181c] px-3 py-1.5 text-xs font-bold text-white">
                    {item.year}
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-bold leading-8 text-[#7f171b]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#675b51]">{item.text}</p>
                </div>
              </article>
            ))}
          </div>

          {(media.photos.aboutJourneyOne.src || media.photos.aboutJourneyTwo.src) && (
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {media.photos.aboutJourneyOne.src && (
                <MediaSlot
                  asset={media.photos.aboutJourneyOne}
                  className="min-h-[300px] rounded-[1.35rem]"
                />
              )}
              {media.photos.aboutJourneyTwo.src && (
                <MediaSlot
                  asset={media.photos.aboutJourneyTwo}
                  className="min-h-[300px] rounded-[1.35rem]"
                />
              )}
            </div>
          )}
        </div>
      </section>

      <section className="section-block bg-[#fbf5eb]">
        <div className="site-shell grid items-center gap-8 lg:grid-cols-[1fr_.9fr]">
          <div>
            <div className="eyebrow">{t("about.writing.eyebrow")}</div>
            <h2 className="section-title mt-3">{t("about.writing.title")}</h2>
            <p className="mt-5 max-w-[760px] text-base leading-8 text-[#5d5148]">
              {t("about.writing.description")}
            </p>
            <Link to="/books" className="button-secondary mt-6">
              {t("about.writing.button")} <BookOpen size={18} /> <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {themes.map((title, index) => (
              <div
                key={title}
                className={
                  "grid min-h-[170px] place-items-center rounded-[1rem] border border-white/40 p-4 text-center text-white shadow-[0_12px_25px_rgba(62,39,24,.12)] " +
                  (index % 2 === 0
                    ? "bg-[linear-gradient(145deg,#8e1a20,#641014)]"
                    : "bg-[linear-gradient(145deg,#be7927,#8f5116)]")
                }
              >
                <div>
                  <BookOpen className="mx-auto" size={28} strokeWidth={1.6} />
                  <p className="mt-3 font-serif text-lg font-bold">{title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="site-shell">
          <div className="rounded-[1.6rem] border border-[#e4d1b6] bg-[linear-gradient(110deg,#fff7e8,#fffdf9_62%,#f5e3c4)] px-6 py-9 md:px-10">
            <div className="grid items-center gap-7 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="flex items-center gap-2 text-[#b06a24]">
                  <Heart size={20} />
                  <span className="text-xs font-bold tracking-[.13em]">{t("about.cta.eyebrow")}</span>
                </div>
                <h2 className="mt-3 font-serif text-2xl font-bold text-[#8f181c] md:text-3xl">
                  {t("about.cta.title")}
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[#675b51]">
                  {t("about.cta.description", { fee: siteConfig.consultationFee })}
                </p>
              </div>
              <Link to="/appointment" className="button-primary">
                {t("about.cta.button")} <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
