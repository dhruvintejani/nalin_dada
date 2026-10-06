import {
  Activity,
  ArrowRight,
  BookOpen,
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
import { Link } from "react-router-dom";
import { siteConfig } from "../config/site";

const services = [
  { title: "ज्योतिष", text: "जीवन के विभिन्न पहलुओं पर ज्योतिषीय मार्गदर्शन।", icon: Sparkles },
  { title: "हस्तरेखा", text: "हस्तरेखा के माध्यम से व्यक्तित्व और जीवन दिशा की समझ।", icon: Hand },
  { title: "अंक ज्योतिष", text: "अंकों के आधार पर जीवन के पैटर्न और संभावनाओं की व्याख्या।", icon: Hash },
  { title: "आयुर्वेद एवं प्राकृतिक स्वास्थ्य", text: "पारंपरिक ज्ञान और प्राकृतिक जीवनशैली से जुड़ी जानकारी।", icon: Leaf },
  { title: "समग्र उपचार", text: "मन, शरीर और जीवनशैली को संतुलित दृष्टि से देखने का मार्गदर्शन।", icon: HeartPulse },
  { title: "नाभि चिकित्सा", text: "नाभि चिकित्सा से जुड़ी पारंपरिक पद्धतियों की जानकारी।", icon: Activity },
  { title: "आध्यात्मिक मार्गदर्शन", text: "शांति, साधना और जीवन के उद्देश्य के लिए व्यक्तिगत दिशा।", icon: Flower2 },
  { title: "तंत्र एवं मंत्र", text: "परंपरागत साधना, मंत्र और आध्यात्मिक अभ्यास से जुड़ा मार्गदर्शन।", icon: Flame },
  { title: "जीवन मार्गदर्शन", text: "व्यक्तिगत चुनौतियों को शांत और व्यावहारिक दृष्टि से समझना।", icon: Compass },
];

const bookThemes = [
  "ज्योतिष",
  "अंक ज्योतिष",
  "आयुर्वेद",
  "वास्तु शास्त्र",
  "तंत्र-मंत्र",
  "स्वास्थ्य",
  "आध्यात्मिक साधना",
  "जीवन मार्गदर्शन",
];

const Home = () => (
  <div className="overflow-hidden bg-[#fffdf9]">
    <section className="hero-surface relative">
      <div className="hero-glow" />
      <div className="site-shell grid min-h-[560px] items-center gap-10 py-12 lg:grid-cols-[1.08fr_.92fr] lg:py-16">
        <div className="relative z-10 max-w-[720px]">
          <div className="eyebrow">जीवन · ज्ञान · उपचार · उच्चतर चेतना की ओर</div>
          <h1 className="mt-4 max-w-[760px] font-serif text-[2.5rem] font-bold leading-[1.17] tracking-[-0.03em] text-[#8f181c] sm:text-[3.2rem] lg:text-[4.15rem]">
            आध्यात्मिक मार्गदर्शन, ज्योतिष एवं समग्र जीवन दृष्टि
          </h1>
          <p className="mt-5 max-w-[680px] text-base leading-8 text-[#4f443b] md:text-lg">
            ज्योतिष, हस्तरेखा, अंक ज्योतिष, आयुर्वेद एवं प्राकृतिक स्वास्थ्य, नाभि चिकित्सा, आध्यात्मिक मार्गदर्शन तथा पारंपरिक साधना से जुड़ी जानकारी और व्यक्तिगत दिशा।
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/appointment" className="button-primary">
              <CalendarDays size={18} /> अपॉइंटमेंट बुक करें <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="button-secondary">
              हमारी सेवाएँ देखें
            </Link>
          </div>

          <div className="mt-8 grid max-w-[680px] gap-3 sm:grid-cols-3">
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

        <div className="relative mx-auto w-full max-w-[520px] lg:justify-self-end">
          <div className="absolute -inset-5 rounded-[2.5rem] border border-[#e6bd7d]/50" />
          <div className="relative overflow-hidden rounded-[2.15rem] border-[7px] border-white bg-white shadow-[0_25px_65px_rgba(81,43,21,.18)]">
            <img
              src="/images/nalin-speaking.jpg"
              alt="Nalin Dada speaking at an astrology and spiritual event"
              className="h-[470px] w-full object-cover object-[center_30%] sm:h-[560px]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2e160f]/85 via-[#2e160f]/30 to-transparent px-6 pb-6 pt-20 text-white">
              <p className="font-serif text-xl font-semibold">Nalin Dada</p>
              <p className="mt-1 text-sm text-white/80">Dr. Nalin Pandya</p>
            </div>
          </div>
          <div className="quote-card absolute -bottom-6 -left-7 hidden max-w-[280px] md:block">
            <p>ज्योतिष · साधना · आध्यात्मिक मार्गदर्शन</p>
            <span>Nalin Dada · Dr. Nalin Pandya</span>
          </div>
        </div>
      </div>
    </section>

    <section className="section-block">
      <div className="site-shell grid items-center gap-10 lg:grid-cols-[.92fr_1.08fr]">
        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute -left-4 -top-4 h-24 w-24 rounded-3xl bg-[#f3dfbd]" />
          <img
            src="/images/nalin-speaking.jpg"
            alt="Nalin Dada sharing guidance"
            className="relative h-[420px] w-full rounded-[1.6rem] object-cover object-[center_22%] shadow-[0_18px_45px_rgba(74,44,24,.14)]"
          />
        </div>

        <div>
          <div className="eyebrow">हमारे बारे में</div>
          <h2 className="section-title mt-3">Nalin Dada · Dr. Nalin Pandya</h2>
          <p className="mt-5 text-base leading-8 text-[#5c5147]">
            Nalin Dada ज्योतिष, हस्तरेखा, अंक ज्योतिष, प्राकृतिक स्वास्थ्य, नाभि चिकित्सा, आध्यात्मिक मार्गदर्शन और पारंपरिक साधना से जुड़े अपने दीर्घ अनुभव को सरल, संवादपूर्ण और जीवनोपयोगी रूप में साझा करते हैं।
          </p>
          <p className="mt-4 text-base leading-8 text-[#5c5147]">
            उनकी आध्यात्मिक यात्रा में 1981 में करनाली में गायत्री संत शांतवनजी महाराज की साधना भूमि से जुड़ा अनुभव, गायत्री अनुष्ठान और बाद के वर्षों में अपनी साधना भूमि का पुनर्जीवन शामिल है।
          </p>
          <Link to="/about" className="text-link mt-6">
            Nalin Dada के बारे में और जानें <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>

    <section className="section-block bg-[#fbf5eb]">
      <div className="site-shell">
        <div className="max-w-3xl">
          <div className="eyebrow">हमारी सेवाएँ</div>
          <h2 className="section-title mt-3">एक बेहतर, शांत और अधिक सार्थक जीवन के लिए मार्गदर्शन</h2>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map(({ title, text, icon: Icon }) => (
            <article key={title} className="service-card">
              <div className="service-icon">
                <Icon size={26} strokeWidth={1.8} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/services" className="button-secondary">
            सभी सेवाएँ देखें <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>

    <section className="section-block">
      <div className="site-shell">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="eyebrow">पुस्तकें एवं प्रकाशन</div>
            <h2 className="section-title mt-3">ज्ञान, साधना और जीवन से जुड़े विषय</h2>
          </div>
          <Link to="/books" className="text-link">
            पुस्तक संग्रह देखें <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {bookThemes.map((theme, index) => (
            <article key={theme} className="book-preview-card">
              <div className={`book-spine book-tone-${(index % 4) + 1}`}>
                <BookOpen size={24} />
                <span>{theme}</span>
              </div>
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
              <span className="card-kicker">साधना भूमि</span>
              <h2>आश्रम</h2>
              <p>
                आश्रम एक निजी साधना भूमि है। इसका पता सार्वजनिक नहीं किया जाता। आवश्यकता होने पर विवरण Nalin Dada से व्यक्तिगत चर्चा के बाद साझा किया जाता है।
              </p>
              <Link to="/ashram" className="text-link mt-4">
                आश्रम के बारे में जानें <ArrowRight size={16} />
              </Link>
            </div>
          </article>

          <article className="location-card">
            <div className="location-icon"><MapPin size={28} /></div>
            <div>
              <span className="card-kicker">व्यक्तिगत परामर्श</span>
              <h2>परामर्श कार्यालय</h2>
              <p>
                {siteConfig.officeAddress}
              </p>
              <p className="mt-3 font-semibold text-[#7e201f]">
                {siteConfig.appointmentDays} · {siteConfig.morningSlot} · {siteConfig.eveningSlot} · केवल अपॉइंटमेंट
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
            <span className="text-sm font-bold tracking-[.14em]">व्यक्तिगत परामर्श</span>
          </div>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            अपॉइंटमेंट शुल्क {siteConfig.consultationFee}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#dfe8e4] md:text-base">
            शुल्क कार्यालय में भुगतान किया जाएगा। ऑनलाइन भुगतान तथा ऑनलाइन/वीडियो परामर्श उपलब्ध नहीं है।
          </p>
        </div>
        <Link to="/appointment" className="button-gold">
          अपॉइंटमेंट एवं संपर्क <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  </div>
);

export default Home;
