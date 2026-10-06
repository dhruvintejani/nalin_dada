import { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Compass,
  Flame,
  Flower2,
  Hash,
  HeartPulse,
  Home,
  Leaf,
  LibraryBig,
  Search,
  Sparkles,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  "सभी",
  "ज्योतिष",
  "अंक ज्योतिष",
  "आयुर्वेद / स्वास्थ्य",
  "तंत्र-मंत्र",
  "वास्तु",
  "साधना",
  "जीवन मार्गदर्शन",
];

const books = [
  {
    title: "ज्योतिष विषयक पुस्तक",
    category: "ज्योतिष",
    alt: "Nalin Dada की ज्योतिष विषयक वास्तविक पुस्तक का कवर",
    tone: "book-cover-red",
  },
  {
    title: "अंक ज्योतिष विषयक पुस्तक",
    category: "अंक ज्योतिष",
    alt: "Nalin Dada की अंक ज्योतिष विषयक वास्तविक पुस्तक का कवर",
    tone: "book-cover-blue",
  },
  {
    title: "आयुर्वेद एवं प्राकृतिक स्वास्थ्य",
    category: "आयुर्वेद / स्वास्थ्य",
    alt: "Nalin Dada की आयुर्वेद और प्राकृतिक स्वास्थ्य विषयक वास्तविक पुस्तक का कवर",
    tone: "book-cover-green",
  },
  {
    title: "स्वास्थ्य एवं आहार विषयक पुस्तक",
    category: "आयुर्वेद / स्वास्थ्य",
    alt: "Nalin Dada की स्वास्थ्य और आहार विषयक वास्तविक पुस्तक का कवर",
    tone: "book-cover-gold",
  },
  {
    title: "तंत्र-साधना विषयक पुस्तक",
    category: "तंत्र-मंत्र",
    alt: "Nalin Dada की तंत्र और साधना विषयक वास्तविक पुस्तक का कवर",
    tone: "book-cover-maroon",
  },
  {
    title: "मंत्र एवं विशेष प्रयोग",
    category: "तंत्र-मंत्र",
    alt: "Nalin Dada की मंत्र और विशेष प्रयोग विषयक वास्तविक पुस्तक का कवर",
    tone: "book-cover-indigo",
  },
  {
    title: "वास्तु विषयक पुस्तक",
    category: "वास्तु",
    alt: "Nalin Dada की वास्तु विषयक वास्तविक पुस्तक का कवर",
    tone: "book-cover-teal",
  },
  {
    title: "आध्यात्मिक साधना",
    category: "साधना",
    alt: "Nalin Dada की आध्यात्मिक साधना विषयक वास्तविक पुस्तक का कवर",
    tone: "book-cover-saffron",
  },
  {
    title: "गायत्री एवं आध्यात्मिक अभ्यास",
    category: "साधना",
    alt: "Nalin Dada की गायत्री और आध्यात्मिक अभ्यास विषयक वास्तविक पुस्तक का कवर",
    tone: "book-cover-red",
  },
  {
    title: "जीवन मार्गदर्शन",
    category: "जीवन मार्गदर्शन",
    alt: "Nalin Dada की जीवन मार्गदर्शन विषयक वास्तविक पुस्तक का कवर",
    tone: "book-cover-green",
  },
  {
    title: "प्राकृतिक उपचार विषयक पुस्तक",
    category: "आयुर्वेद / स्वास्थ्य",
    alt: "Nalin Dada की प्राकृतिक उपचार विषयक वास्तविक पुस्तक का कवर",
    tone: "book-cover-teal",
  },
  {
    title: "भारतीय ज्ञान परंपरा",
    category: "जीवन मार्गदर्शन",
    alt: "Nalin Dada की भारतीय ज्ञान परंपरा विषयक वास्तविक पुस्तक का कवर",
    tone: "book-cover-gold",
  },
];

const subjects = [
  { name: "ज्योतिष", icon: Sparkles },
  { name: "अंक ज्योतिष", icon: Hash },
  { name: "आयुर्वेद", icon: Leaf },
  { name: "स्वास्थ्य", icon: HeartPulse },
  { name: "तंत्र-मंत्र", icon: Flame },
  { name: "वास्तु", icon: Home },
  { name: "साधना", icon: Flower2 },
  { name: "जीवन मार्गदर्शन", icon: Compass },
];

const BookCoverPlaceholder = ({
  title,
  category,
  alt,
  tone,
}: {
  title: string;
  category: string;
  alt: string;
  tone: string;
}) => (
  <div className="group" role="img" aria-label={alt}>
    <div className={"book-cover-placeholder " + tone}>
      <div className="book-cover-border" />
      <div className="relative z-10 flex h-full flex-col items-center justify-between py-5 text-center">
        <span className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white/70">
          {category}
        </span>
        <div>
          <BookOpen className="mx-auto text-white/90" size={30} strokeWidth={1.5} />
          <h3 className="mt-4 font-serif text-base font-bold leading-6 text-white">
            {title}
          </h3>
        </div>
        <div>
          <p className="text-[0.68rem] font-semibold text-white/75">Nalin Dada</p>
          <p className="mt-1 text-[0.6rem] text-white/55">वास्तविक कवर बाद में जोड़ा जाएगा</p>
        </div>
      </div>
    </div>
  </div>
);

const Books = () => {
  const [activeCategory, setActiveCategory] = useState("सभी");
  const [query, setQuery] = useState("");

  const visibleBooks = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return books.filter((book) => {
      const categoryMatch =
        activeCategory === "सभी" || book.category === activeCategory;
      const searchMatch =
        !normalizedQuery ||
        book.title.toLowerCase().includes(normalizedQuery) ||
        book.category.toLowerCase().includes(normalizedQuery);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, query]);

  return (
    <div className="overflow-hidden bg-[#fffdf9]">
      <section className="hero-surface relative">
        <div className="hero-glow" />
        <div className="site-shell grid min-h-[510px] items-center gap-10 py-12 lg:grid-cols-[1.06fr_.94fr] lg:py-16">
          <div className="relative z-10">
            <div className="eyebrow">मुख्य पृष्ठ · पुस्तकें एवं प्रकाशन</div>
            <h1 className="mt-4 font-serif text-[2.65rem] font-bold leading-[1.14] tracking-[-0.035em] text-[#8f181c] sm:text-[3.3rem] lg:text-[4rem]">
              Nalin Dada की पुस्तकें एवं प्रकाशन
            </h1>
            <p className="mt-5 max-w-[720px] text-base leading-8 text-[#51463e] md:text-lg">
              Nalin Dada द्वारा लिखी गई पुस्तकों के उपलब्ध फोटो से ज्योतिष, अंक ज्योतिष, आयुर्वेद, स्वास्थ्य, वास्तु, तंत्र-मंत्र, साधना और जीवनोपयोगी विषयों पर उनका विस्तृत लेखन दिखाई देता है।
            </p>
            <p className="mt-3 max-w-[700px] text-sm leading-7 text-[#6c5e53]">
              अभी इस पेज में वास्तविक पुस्तक-कवर के लिए तैयार स्थान रखे गए हैं। अंतिम चरण में आपके पास मौजूद मूल पुस्तक-फोटो इन्हीं स्थानों पर जोड़े जाएंगे।
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#book-library" className="button-primary">
                <LibraryBig size={18} /> पुस्तक संग्रह देखें <ArrowRight size={18} />
              </a>
              <a href="#subjects" className="button-secondary">
                विषय देखें
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[510px]">
            <div className="absolute -inset-4 rounded-[2rem] border border-[#e3b86f]/45" />
            <div className="relative grid grid-cols-3 gap-3 rounded-[1.7rem] border-[7px] border-white bg-[#f7ead5] p-5 shadow-[0_24px_60px_rgba(78,44,22,.17)]">
              {books.slice(0, 6).map((book) => (
                <BookCoverPlaceholder key={book.title} {...book} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="site-shell grid items-center gap-10 lg:grid-cols-[.82fr_1.18fr]">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-[#ead8c1] bg-[#fff7e9] p-5">
            <img
              src="/images/nalin-speaking.jpg"
              alt="Nalin Dada speaking and sharing knowledge at an event"
              className="h-[380px] w-full rounded-[1.1rem] object-cover object-[center_24%]"
            />
            <div className="absolute inset-x-8 bottom-8 rounded-[1rem] border border-white/45 bg-[#fffdf9]/92 p-4 shadow-lg backdrop-blur">
              <p className="text-xs font-bold tracking-[0.12em] text-[#b06a24]">
                लेखक परिचय
              </p>
              <p className="mt-1 font-serif text-lg font-bold text-[#7f171b]">
                Nalin Dada · Dr. Nalin Pandya
              </p>
            </div>
          </div>

          <div>
            <div className="eyebrow">लेखन का विस्तार</div>
            <h2 className="section-title mt-3">
              विविध विषयों को सरल रूप में प्रस्तुत करने का प्रयास
            </h2>
            <p className="mt-5 text-base leading-8 text-[#5d5148]">
              आपके द्वारा दिए गए वास्तविक पुस्तक-फोटो में Nalin Dada के लेखन के कई अलग विषय दिखाई देते हैं। इनमें ज्योतिष और अंक ज्योतिष के साथ आयुर्वेद, स्वास्थ्य, प्राकृतिक उपाय, वास्तु, मंत्र-तंत्र और साधना जैसे विषय शामिल हैं।
            </p>
            <p className="mt-4 text-base leading-8 text-[#5d5148]">
              Books page का उद्देश्य इन पुस्तकों को साफ, सम्मानजनक और आसानी से देखने योग्य तरीके से प्रस्तुत करना है। फिलहाल हम पुस्तक संख्या, संस्करण, प्रकाशन वर्ष या बिक्री संबंधी कोई दावा नहीं दिखा रहे हैं क्योंकि वह जानकारी अभी पुष्टि नहीं हुई है।
            </p>
            <Link to="/about" className="text-link mt-6">
              Nalin Dada के बारे में जानें <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section id="book-library" className="section-block scroll-mt-24 bg-[#fbf5eb]">
        <div className="site-shell">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <div className="eyebrow">पुस्तक संग्रह</div>
              <h2 className="section-title mt-3">विषय के अनुसार पुस्तकें देखें</h2>
            </div>

            <div className="relative w-full xl:max-w-[360px]">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a06936]"
                size={18}
              />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="पुस्तक या विषय खोजें"
                className="w-full rounded-full border border-[#dfceb6] bg-white py-3 pl-11 pr-4 text-sm text-[#463b33] outline-none transition focus:border-[#c58b3d] focus:ring-4 focus:ring-[#eacb99]/30"
              />
            </div>
          </div>

          <div className="mt-7 flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={
                    "whitespace-nowrap rounded-full border px-4 py-2.5 text-xs font-bold transition " +
                    (isActive
                      ? "border-[#8f181c] bg-[#8f181c] text-white"
                      : "border-[#e1d1bc] bg-white text-[#65564b] hover:border-[#cf9b58] hover:bg-[#fff8ed]")
                  }
                >
                  {category}
                </button>
              );
            })}
          </div>

          {visibleBooks.length > 0 ? (
            <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {visibleBooks.map((book) => (
                <BookCoverPlaceholder key={book.title} {...book} />
              ))}
            </div>
          ) : (
            <div className="mt-9 rounded-[1.2rem] border border-dashed border-[#d9bd91] bg-white px-6 py-12 text-center">
              <LibraryBig className="mx-auto text-[#bb7a2e]" size={32} />
              <h3 className="mt-4 font-serif text-xl font-bold text-[#7f171b]">
                इस खोज के लिए कोई पुस्तक नहीं मिली
              </h3>
              <p className="mt-2 text-sm text-[#74665b]">
                दूसरा विषय चुनें या खोज शब्द बदलें।
              </p>
            </div>
          )}
        </div>
      </section>

      <section id="subjects" className="section-block scroll-mt-24">
        <div className="site-shell">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow justify-center">पुस्तकों के प्रमुख विषय</div>
            <h2 className="section-title mx-auto mt-3">
              अलग-अलग रुचियों और अध्ययन क्षेत्रों के लिए
            </h2>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-4 md:grid-cols-4">
            {subjects.map(({ name, icon: Icon }) => (
              <article
                key={name}
                className="rounded-[1rem] border border-[#eadbc7] bg-[#fffdf9] px-4 py-6 text-center shadow-[0_6px_18px_rgba(91,55,28,.04)]"
              >
                <div className="mx-auto grid h-13 w-13 place-items-center rounded-full border border-[#e2bd82] bg-[#fff7e9] text-[#b56522]">
                  <Icon size={23} strokeWidth={1.7} />
                </div>
                <h3 className="mt-4 font-serif text-base font-bold leading-6 text-[#7f171b]">
                  {name}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block bg-[#fbf5eb]">
        <div className="site-shell grid items-center gap-9 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="eyebrow">वास्तविक पुस्तक-फोटो</div>
            <h2 className="section-title mt-3">
              अंतिम चरण में केवल images replace करनी होंगी
            </h2>
            <p className="mt-5 text-base leading-8 text-[#5d5148]">
              इस layout में हर cover के लिए अलग card और descriptive alt text पहले से तैयार है। जब आप final images जोड़ेंगे, हमें page structure बदलने की जरूरत नहीं होगी—सिर्फ placeholder की जगह वास्तविक cover path लगाना होगा।
            </p>
            <div className="mt-6 rounded-[1rem] border border-[#e3cfb3] bg-[#fffdf9] p-5">
              <p className="text-sm font-bold text-[#7f171b]">अभी जानबूझकर नहीं दिखाया गया:</p>
              <ul className="mt-3 grid gap-2 text-sm leading-6 text-[#675b51]">
                <li>• कुल पुस्तकों की संख्या</li>
                <li>• प्रकाशन वर्ष / edition</li>
                <li>• कीमत या खरीद लिंक</li>
                <li>• उपलब्धता / stock</li>
              </ul>
              <p className="mt-3 text-xs leading-5 text-[#817268]">
                ये विवरण Nalin Dada से पुष्टि होने के बाद ही जोड़ना बेहतर रहेगा।
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {books.slice(6, 12).map((book) => (
              <BookCoverPlaceholder key={book.title} {...book} />
            ))}
          </div>
        </div>
      </section>

      <section className="appointment-band">
        <div className="site-shell grid items-center gap-7 py-10 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="flex items-center gap-3 text-[#e5ac53]">
              <BookOpen size={23} />
              <span className="text-sm font-bold tracking-[.14em]">
                पुस्तक संबंधी जानकारी
              </span>
            </div>
            <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
              किसी विशेष पुस्तक के बारे में पूछना है?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#dfe8e4] md:text-base">
              अभी ऑनलाइन खरीद या भुगतान सुविधा तय नहीं की गई है। संपर्क विवरण पूरा होने के बाद इच्छुक पाठक उपलब्ध जानकारी के लिए संपर्क कर सकेंगे।
            </p>
          </div>
          <Link to="/appointment" className="button-gold">
            संपर्क पेज देखें <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Books;
