import { ArrowRight, BookOpen, LibraryBig } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import BookCollectionImage from "../components/BookCollectionImage";
import MediaSlot from "../components/MediaSlot";
import { media } from "../config/media";

const Books = () => {
  const { t } = useTranslation();
  const availableBooks = media.books.filter((book) => Boolean(book.src));
  const heroBooks = availableBooks.slice(0, 3);

  return (
    <div className="overflow-hidden bg-[#fffdf9]">
      <section className="hero-surface relative">
        <div className="hero-glow" />
        <div className={`site-shell grid min-h-[510px] items-center gap-10 py-12 ${heroBooks.length > 0 ? "lg:grid-cols-[1.04fr_.96fr]" : ""} lg:py-16`}>
          <div className="relative z-10">
            <div className="eyebrow">{t("books.eyebrow")}</div>
            <h1 className="mt-4 font-serif text-[2.65rem] font-bold leading-[1.14] tracking-[-0.035em] text-[#8f181c] sm:text-[3.3rem] lg:text-[4rem]">
              {t("books.title")}
            </h1>
            <p className="mt-5 max-w-[720px] text-base leading-8 text-[#51463e] md:text-lg">
              {t("books.description")}
            </p>
            <p className="mt-3 max-w-[700px] text-sm leading-7 text-[#6c5e53]">
              {t("books.subtext")}
            </p>
            <div className="mt-7">
              <a href="#all-books" className="button-primary">
                <LibraryBig size={18} /> {t("books.collectionButton")} <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {heroBooks.length > 0 && (
            <div className="book-hero-collage mx-auto w-full max-w-[520px]">
              {heroBooks.map((book, index) => (
                <BookCollectionImage
                  key={book.recommendedFile}
                  book={book}
                  alt={`${t("books.title")} ${index + 1}`}
                  eager
                  className={`book-hero-card book-hero-card-${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section-block">
        <div className={`site-shell grid items-center gap-10 ${media.photos.booksAuthor.src ? "lg:grid-cols-[.82fr_1.18fr]" : ""}`}>
          {media.photos.booksAuthor.src && (
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#ead8c1] bg-[#fff7e9] p-5 shadow-[0_16px_38px_rgba(76,46,26,.08)]">
              <MediaSlot
                asset={media.photos.booksAuthor}
                className="h-[390px] rounded-[1.1rem]"
              />
              <div className="absolute inset-x-8 bottom-8 rounded-[1rem] border border-white/45 bg-[#fffdf9]/92 p-4 shadow-lg backdrop-blur">
                <p className="text-xs font-bold tracking-[0.12em] text-[#b06a24]">
                  {t("books.author.eyebrow")}
                </p>
                <p className="mt-1 font-serif text-lg font-bold text-[#7f171b]">
                  Nalin Dada · Dr. Nalin Pandya
                </p>
              </div>
            </div>
          )}

          <div>
            <div className="eyebrow">{t("books.author.eyebrow")}</div>
            <h2 className="section-title mt-3">{t("books.author.title")}</h2>
            <p className="mt-5 text-base leading-8 text-[#5d5148]">{t("books.author.p1")}</p>
            <p className="mt-4 text-base leading-8 text-[#5d5148]">{t("books.author.p2")}</p>
            <Link to="/about" className="text-link mt-6">
              {t("books.author.link")} <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {availableBooks.length > 0 && (
        <section id="all-books" className="section-block scroll-mt-24 bg-[#fbf5eb]">
          <div className="site-shell">
            <div className="book-gallery-grid">
              {availableBooks.map((book, index) => (
                <article
                  key={book.recommendedFile}
                  className="book-gallery-card rounded-[1.25rem] border border-[#ead9c1] bg-white p-3 shadow-[0_10px_30px_rgba(78,48,28,.06)]"
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
      )}

      <section className="appointment-band">
        <div className="site-shell grid items-center gap-7 py-10 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="flex items-center gap-3 text-[#e5ac53]">
              <BookOpen size={23} />
              <span className="text-sm font-bold tracking-[.14em]">
                {t("books.cta.eyebrow")}
              </span>
            </div>
            <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
              {t("books.cta.title")}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#ead8cf] md:text-base">
              {t("books.cta.description")}
            </p>
          </div>
          <Link to="/appointment" className="button-gold">
            {t("books.cta.button")} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Books;
