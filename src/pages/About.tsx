import {
  ArrowRight,
  BookOpen,
  Compass,
  Flame,
  Flower2,
  Hand,
  Hash,
  Heart,
  Leaf
} from "lucide-react";
import { Link } from "react-router-dom";
import MediaSlot from "../components/MediaSlot";
import { media } from "../config/media";
import { siteConfig } from "../config/site";

const areas = [
  { title: "आध्यात्मिक मार्गदर्शन", icon: Flower2 },
  { title: "ज्योतिष एवं हस्तरेखा", icon: Hand },
  { title: "अंक ज्योतिष", icon: Hash },
  { title: "आयुर्वेद एवं प्राकृतिक ज्ञान", icon: Leaf },
  { title: "मंत्र, तंत्र एवं साधना", icon: Flame },
  { title: "जीवन मार्गदर्शन", icon: Compass },
];

const journey = [
  {
    year: "1981",
    title: "करनाली में साधना का महत्वपूर्ण पड़ाव",
    text: "Nalin Dada ने बताया है कि 1981 में करनाली स्थित दक्षिणामूर्ति सिद्ध मंदिर से जुड़ी गायत्री संत शांतवनजी महाराज की साधना भूमि पर उन्हें बुलाया गया। वहाँ उनके सान्निध्य में उन्होंने अनेक गायत्री अनुष्ठान किए।",
  },
  {
    year: "आगे की यात्रा",
    title: "साधना भूमि का मिलना और पुनर्जीवन",
    text: "बाद में उन्हें एक ऐसी साधना भूमि मिली जहाँ पहले पीताम्बरा पीठ / बगलामुखी साधना से जुड़ा स्थान रहा था। उन्होंने उस स्थान का जीर्णोद्धार कराया और पीठ की साधना परंपरा को फिर से सक्रिय किया।",
  },
  {
    year: "लगभग 35 वर्ष",
    title: "निरंतर जप, तप और अनुष्ठान",
    text: "Nalin Dada के अनुसार पिछले लगभग 35 वर्षों से इस साधना भूमि पर उनके जप, तप और अनुष्ठान होते रहे हैं। यह स्थान सार्वजनिक पर्यटन स्थल नहीं, बल्कि निजी साधना भूमि के रूप में रखा गया है।",
  },
];

const About = () => (
  <div className="overflow-hidden bg-[#fffdf9]">
    <section className="hero-surface relative">
      <div className="hero-glow" />
      <div className="site-shell grid min-h-[500px] items-center gap-10 py-12 lg:grid-cols-[1.05fr_.95fr] lg:py-16">
        <div className="relative z-10">
          <div className="eyebrow">मुख्य पृष्ठ · हमारे बारे में</div>
          <h1 className="mt-4 font-serif text-[2.65rem] font-bold leading-[1.14] tracking-[-0.035em] text-[#8f181c] sm:text-[3.3rem] lg:text-[4rem]">
            Nalin Dada का परिचय
          </h1>
          <h2 className="mt-4 max-w-[720px] font-serif text-[1.35rem] font-semibold leading-[1.6] text-[#b06a24] md:text-[1.7rem]">
            ज्योतिष, आध्यात्मिक साधना, पारंपरिक ज्ञान और जीवन मार्गदर्शन से जुड़ी एक लंबी यात्रा
          </h2>
          <p className="mt-5 max-w-[720px] text-base leading-8 text-[#51463e] md:text-lg">
            Dr. Nalin Pandya, जिन्हें प्रेमपूर्वक Nalin Dada कहा जाता है, अपने अनुभव और अध्ययन के आधार पर लोगों से ज्योतिष, हस्तरेखा, अंक ज्योतिष, प्राकृतिक स्वास्थ्य, नाभि चिकित्सा, मंत्र-तंत्र और आध्यात्मिक जीवन से जुड़ी बातों पर संवाद करते हैं।
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#journey" className="button-primary">
              उनकी यात्रा देखें <ArrowRight size={18} />
            </a>
            <Link to="/books" className="button-secondary">
              पुस्तकें देखें
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[500px]">
          <div className="absolute -inset-4 rounded-[2rem] border border-[#e3b86f]/45" />
          <MediaSlot
            asset={media.photos.aboutHero}
            priority
            className="relative h-[440px] rounded-[1.7rem] border-[7px] border-white shadow-[0_24px_60px_rgba(78,44,22,.17)]"
          />
        </div>
      </div>
    </section>

    <section className="section-block">
      <div className="site-shell grid items-center gap-10 lg:grid-cols-[.92fr_1.08fr]">
        <MediaSlot
          asset={media.photos.aboutPortrait}
          className="min-h-[390px] rounded-[1.4rem]"
          label="Nalin Dada की व्यक्तिगत फोटो"
        />

        <div>
          <div className="eyebrow">About Nalin Dada</div>
          <h2 className="section-title mt-3">ज्ञान, साधना और जीवन अनुभव का समन्वय</h2>
          <p className="mt-5 text-base leading-8 text-[#5d5148]">
            Nalin Dada का कार्य किसी एक विषय तक सीमित नहीं है। उनके साथ जुड़ी जानकारी में ज्योतिष, हस्तरेखा, अंक ज्योतिष, आयुर्वेद एवं प्राकृतिक स्वास्थ्य, नाभि चिकित्सा, मंत्र-तंत्र, आध्यात्मिक अभ्यास और व्यक्तिगत जीवन मार्गदर्शन जैसे क्षेत्र शामिल हैं।
          </p>
          <p className="mt-4 text-base leading-8 text-[#5d5148]">
            इन सभी क्षेत्रों में उनका दृष्टिकोण सरल, संवादपूर्ण और अनुभव-आधारित है, ताकि व्यक्ति अपने प्रश्नों, साधना और जीवन की दिशा को अधिक स्पष्टता से समझ सके।
          </p>

          <div className="mt-7 rounded-[1.2rem] border-l-4 border-[#d7a04b] bg-[#fff7e9] px-5 py-4">
            <p className="font-serif text-lg leading-8 text-[#6d4931]">
              साधना, ज्ञान और जीवन अनुभव — About page की पूरी कहानी इन्हीं तीन आधारों के आसपास प्रस्तुत की गई है।
            </p>
            <p className="mt-2 text-sm font-bold text-[#8f181c]">Nalin Dada · परिचय</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section-block bg-[#fbf5eb]">
      <div className="site-shell">
        <div className="mx-auto max-w-3xl text-center">
          <div className="eyebrow justify-center">मुख्य क्षेत्र</div>
          <h2 className="section-title mx-auto mt-3">उनके कार्य और रुचि के प्रमुख विषय</h2>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map(({ title, icon: Icon }) => (
            <article
              key={title}
              className="flex items-center gap-4 rounded-[1rem] border border-[#eadbc7] bg-[#fffdf9] px-5 py-5 shadow-[0_6px_18px_rgba(91,55,28,.04)]"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[#e2bd82] bg-[#fff7e9] text-[#b56522]">
                <Icon size={23} strokeWidth={1.7} />
              </div>
              <h3 className="font-serif text-lg font-bold leading-7 text-[#7f171b]">{title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section id="journey" className="section-block scroll-mt-24">
      <div className="site-shell">
        <div className="max-w-3xl">
          <div className="eyebrow">आध्यात्मिक यात्रा</div>
          <h2 className="section-title mt-3">Nalin Dada द्वारा साझा किए गए महत्वपूर्ण पड़ाव</h2>
          <p className="mt-4 text-sm leading-7 text-[#716359]">
            उनकी आध्यात्मिक यात्रा के कुछ महत्वपूर्ण पड़ाव, जैसा उन्होंने स्वयं साझा किया है।
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

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <MediaSlot
            asset={media.photos.aboutJourneyOne}
            className="min-h-[300px] rounded-[1.35rem]"
            label="आध्यात्मिक यात्रा की वास्तविक फोटो"
          />
          <MediaSlot
            asset={media.photos.aboutJourneyTwo}
            className="min-h-[300px] rounded-[1.35rem]"
            label="साधना भूमि से जुड़ी वास्तविक फोटो"
          />
        </div>
      </div>
    </section>

    <section className="section-block bg-[#fbf5eb]">
      <div className="site-shell grid items-center gap-8 lg:grid-cols-[1fr_.9fr]">
        <div>
          <div className="eyebrow">पुस्तकें और लेखन</div>
          <h2 className="section-title mt-3">विभिन्न विषयों पर लिखित कार्य</h2>
          <p className="mt-5 max-w-[760px] text-base leading-8 text-[#5d5148]">
            Nalin Dada का लेखन ज्योतिष, अंक ज्योतिष, स्वास्थ्य, प्राकृतिक उपचार, आयुर्वेद, वास्तु, मंत्र-तंत्र, साधना और जीवनोपयोगी विषयों तक फैला हुआ है।
          </p>
          <Link to="/books" className="button-secondary mt-6">
            पुस्तकों का पेज देखें <BookOpen size={18} /> <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {["ज्योतिष", "स्वास्थ्य", "साधना", "जीवन ज्ञान"].map((title, index) => (
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
                <p className="mt-1 text-xs text-white/75">वास्तविक कवर बाद में जोड़ा जाएगा</p>
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
                <span className="text-xs font-bold tracking-[.13em]">व्यक्तिगत मार्गदर्शन</span>
              </div>
              <h2 className="mt-3 font-serif text-2xl font-bold text-[#8f181c] md:text-3xl">
                Nalin Dada से व्यक्तिगत परामर्श के लिए
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-[#675b51]">
                परामर्श केवल अपॉइंटमेंट से होता है। शुल्क {siteConfig.consultationFee} है और कार्यालय में भुगतान किया जाएगा। ऑनलाइन या वीडियो परामर्श उपलब्ध नहीं है।
              </p>
            </div>
            <Link to="/appointment" className="button-primary">
              अपॉइंटमेंट एवं संपर्क <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About;
