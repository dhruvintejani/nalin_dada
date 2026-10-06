import {
  ArrowRight,
  BookHeart,
  CalendarCheck2,
  Flame,
  Flower2,
  HandHeart,
  LockKeyhole,
  MessageCircleMore,
  MoonStar,
  ShieldCheck,
  Sparkles,
  Waves,
} from "lucide-react";
import { Link } from "react-router-dom";
import MediaSlot from "../components/MediaSlot";
import { media } from "../config/media";

const journey = [
  {
    number: "01",
    title: "1981 · करनाली में साधना",
    text: "Nalin Dada ने बताया है कि 1981 में करनाली स्थित दक्षिणामूर्ति सिद्ध मंदिर से जुड़ी गायत्री संत शांतवनजी महाराज की साधना भूमि पर उन्हें बुलाया गया। वहाँ उन्होंने अनेक गायत्री अनुष्ठान किए।",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "सिद्ध स्थान का मिलना",
    text: "बाद में उन्हें एक प्राचीन साधना-स्थल मिला, जिसके बारे में उन्होंने बताया कि यहाँ वर्षों पहले पीताम्बरा पीठ / बगलामुखी साधना से जुड़ा स्थान था।",
    icon: Flower2,
  },
  {
    number: "03",
    title: "जीर्णोद्धार और पुनर्जागरण",
    text: "Nalin Dada ने उस स्थान का जीर्णोद्धार कराया और पीताम्बरा पीठ की साधना परंपरा को फिर से सक्रिय किया।",
    icon: HandHeart,
  },
  {
    number: "04",
    title: "लगभग 35 वर्षों की साधना",
    text: "उनके अनुसार पिछले लगभग 35 वर्षों से इस साधना भूमि पर उनके जप, तप और अनुष्ठान होते रहे हैं।",
    icon: Flame,
  },
];

const practices = [
  {
    title: "बगलामुखी जप एवं अनुष्ठान",
    text: "यह स्थान सामान्य भ्रमण के लिए नहीं है। Nalin Dada के अनुसार बगलामुखी जप या अनुष्ठान के लिए उपयुक्त साधकों को ही आवश्यकता और अनुमति के अनुसार वहाँ ले जाया जाता है।",
    icon: Flame,
  },
  {
    title: "गायत्री अनुष्ठान",
    text: "उनकी साधना यात्रा में गायत्री संत शांतवनजी महाराज के सान्निध्य और गायत्री अनुष्ठानों का विशेष स्थान रहा है।",
    icon: Sparkles,
  },
  {
    title: "पितृ दोष निवारण से जुड़े अनुष्ठान",
    text: "Nalin Dada ने नारायणबली और पंचबली जैसे पारंपरिक अनुष्ठानों का भी उल्लेख किया है। इनकी प्रक्रिया और उपयुक्तता व्यक्तिगत चर्चा के बाद तय की जाती है।",
    icon: BookHeart,
  },
  {
    title: "जप, तप और साधना",
    text: "साधक की आवश्यकता, परंपरा और उचित मार्गदर्शन के अनुसार जप, तप और अन्य आध्यात्मिक अभ्यासों पर चर्चा की जाती है।",
    icon: MoonStar,
  },
];

const Ashram = () => (
  <div className="overflow-hidden bg-[#fffdf9]">
    <section className="hero-surface relative">
      <div className="hero-glow" />
      <div className="site-shell grid min-h-[520px] items-center gap-10 py-12 lg:grid-cols-[1.06fr_.94fr] lg:py-16">
        <div className="relative z-10">
          <div className="eyebrow">साधना · परंपरा · पीताम्बरा पीठ</div>
          <h1 className="mt-4 font-serif text-[2.7rem] font-bold leading-[1.12] tracking-[-0.035em] text-[#8f181c] sm:text-[3.35rem] lg:text-[4.1rem]">
            पीताम्बरा पीठ साधना भूमि
          </h1>
          <p className="mt-5 max-w-[720px] text-base leading-8 text-[#51463e] md:text-lg">
            Nalin Dada द्वारा साझा की गई जानकारी के अनुसार यह एक निजी साधना भूमि है, जहाँ वर्षों से जप, तप और अनुष्ठान होते रहे हैं। इसका स्थान और पता सार्वजनिक नहीं किया जाता।
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#history" className="button-primary">
              साधना भूमि की यात्रा देखें <ArrowRight size={18} />
            </a>
            <Link to="/appointment" className="button-secondary">
              जानकारी के लिए संपर्क करें
            </Link>
          </div>

          <div className="mt-8 grid max-w-[720px] gap-3 sm:grid-cols-3">
            <div className="hero-stat">
              <span className="hero-stat-label">प्रकृति</span>
              <strong>निजी साधना भूमि</strong>
              <small>सार्वजनिक पर्यटन स्थल नहीं</small>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-label">साधना</span>
              <strong>लगभग 35 वर्ष</strong>
              <small>Nalin Dada द्वारा साझा जानकारी</small>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-label">प्रवेश</span>
              <strong>पूर्व अनुमति</strong>
              <small>आवश्यकता के अनुसार</small>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[500px]">
          <div className="absolute -inset-4 rounded-[2rem] border border-[#e3b86f]/45" />
          <MediaSlot
            asset={media.photos.ashramHero}
            className="min-h-[440px] rounded-[1.35rem]"
            label="पीताम्बरा पीठ / साधना भूमि की मुख्य फोटो"
          />
          <div className="absolute -bottom-5 left-5 right-5 rounded-[1rem] border border-[#ead4b6] bg-[#fffdf9]/95 px-5 py-4 shadow-[0_16px_34px_rgba(77,45,25,.13)] backdrop-blur">
            <div className="flex items-start gap-3">
              <LockKeyhole className="mt-0.5 shrink-0 text-[#b56b24]" size={20} />
              <p className="text-xs leading-6 text-[#675a50]">
                आश्रम का पता, map और exact location सार्वजनिक रूप से साझा नहीं किए जाते।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-block">
      <div className="site-shell grid items-center gap-10 lg:grid-cols-[.92fr_1.08fr]">
        <MediaSlot
          asset={media.photos.ashramMain}
          className="min-h-[440px] rounded-[1.35rem]"
          label="साधना भूमि से जुड़ी वास्तविक फोटो"
        />

        <div>
          <div className="eyebrow">आश्रम परिचय</div>
          <h2 className="section-title mt-3">
            सार्वजनिक स्थल नहीं, एक निजी साधना भूमि
          </h2>
          <p className="mt-5 text-base leading-8 text-[#5d5148]">
            Nalin Dada ने स्पष्ट रूप से कहा है कि आश्रम की exact location सार्वजनिक नहीं करनी है। यह उनकी साधना भूमि है और वहाँ जाने की जानकारी हर व्यक्ति को सामान्य रूप से नहीं दी जाएगी।
          </p>
          <p className="mt-4 text-base leading-8 text-[#5d5148]">
            जो साधक किसी विशिष्ट जप, अनुष्ठान या आध्यात्मिक कार्य के लिए उपयुक्त हों, उन्हें पहले व्यक्तिगत रूप से मिलने और चर्चा के बाद आवश्यक जानकारी दी जा सकती है।
          </p>

          <div className="mt-7 rounded-[1.15rem] border border-[#e4d0b1] bg-[#fff7e8] p-5">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 shrink-0 text-[#b56825]" size={23} />
              <div>
                <h3 className="font-serif text-lg font-bold text-[#7f171b]">
                  गोपनीयता का सम्मान
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#675b51]">
                  Ashram address, Google Map, route, landmark और public visiting hours सार्वजनिक रूप से उपलब्ध नहीं कराए जाते।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="history" className="section-block scroll-mt-24 bg-[#fbf5eb]">
      <div className="site-shell">
        <div className="mx-auto max-w-3xl text-center">
          <div className="eyebrow justify-center">साधना भूमि की यात्रा</div>
          <h2 className="section-title mx-auto mt-3">
            Nalin Dada द्वारा साझा किए गए प्रमुख पड़ाव
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#706158]">
            यह यात्रा Nalin Dada द्वारा साझा किए गए प्रमुख अनुभवों और साधना के पड़ावों पर आधारित है।
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {journey.map(({ number, title, text, icon: Icon }) => (
            <article
              key={number}
              className="relative overflow-hidden rounded-[1.2rem] border border-[#e5d4bc] bg-white p-6 shadow-[0_8px_24px_rgba(84,51,28,.05)]"
            >
              <span className="absolute right-4 top-2 font-serif text-6xl font-bold text-[#f3e4cb]">
                {number}
              </span>
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[#8f181c] text-white">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold leading-8 text-[#7f171b]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#675b51]">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="section-block">
      <div className="site-shell">
        <div className="max-w-3xl">
          <div className="eyebrow">साधना एवं अनुष्ठान</div>
          <h2 className="section-title mt-3">
            इस साधना भूमि से जुड़े आध्यात्मिक कार्य
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#706158]">
            नीचे दिए गए विषय सामान्य service menu नहीं हैं। इनकी उपयुक्तता, प्रक्रिया और अनुमति व्यक्तिगत चर्चा के बाद तय की जाती है।
          </p>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {practices.map(({ title, text, icon: Icon }) => (
            <article
              key={title}
              className="flex gap-5 rounded-[1.25rem] border border-[#ead9c1] bg-[#fffdf9] p-6 shadow-[0_8px_22px_rgba(84,51,28,.04)]"
            >
              <div className="grid h-13 w-13 shrink-0 place-items-center rounded-full border border-[#e0b77c] bg-[#fff3df] text-[#b56522]">
                <Icon size={24} strokeWidth={1.7} />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#7f171b]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#675b51]">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="section-block bg-[#fbf5eb]">
      <div className="site-shell">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="eyebrow">आश्रम की झलकियाँ</div>
            <h2 className="section-title mt-3">
              साधना भूमि की शांत और आध्यात्मिक झलकियाँ
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#716359]">
            तस्वीरें केवल साधना-स्थल की गरिमा और गोपनीयता का सम्मान करते हुए प्रस्तुत की जाएँगी।
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MediaSlot asset={media.photos.ashramGalleryOne} className="min-h-[245px] rounded-[1.35rem]" label="साधना भूमि का बाहरी दृश्य" />
          <MediaSlot asset={media.photos.ashramGalleryTwo} className="min-h-[245px] rounded-[1.35rem]" label="अनुष्ठान या पूजा की झलक" />
          <MediaSlot asset={media.photos.ashramGalleryThree} className="min-h-[245px] rounded-[1.35rem]" label="Nalin Dada की साधना भूमि से जुड़ी तस्वीर" />
          <MediaSlot asset={media.photos.ashramGalleryFour} className="min-h-[245px] rounded-[1.35rem]" label="माँ नर्मदा / आध्यात्मिक यात्रा की झलक" />
        </div>
      </div>
    </section>

    <section className="section-block">
      <div className="site-shell">
        <div className="grid gap-5 lg:grid-cols-3">
          <article className="rounded-[1.25rem] border border-[#ead9c1] bg-white p-6">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-[#fff2dd] text-[#b56522]">
              <LockKeyhole size={23} />
            </div>
            <h3 className="mt-4 font-serif text-xl font-bold text-[#7f171b]">
              पता सार्वजनिक नहीं
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#675b51]">
              Ashram address, route और location सार्वजनिक रूप से साझा नहीं किए जाते।
            </p>
          </article>

          <article className="rounded-[1.25rem] border border-[#ead9c1] bg-white p-6">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-[#fff2dd] text-[#b56522]">
              <CalendarCheck2 size={23} />
            </div>
            <h3 className="mt-4 font-serif text-xl font-bold text-[#7f171b]">
              पूर्व चर्चा आवश्यक
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#675b51]">
              आश्रम जाने का निर्णय Nalin Dada से व्यक्तिगत चर्चा और अनुमति के बाद ही होगा।
            </p>
          </article>

          <article className="rounded-[1.25rem] border border-[#ead9c1] bg-white p-6">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-[#fff2dd] text-[#b56522]">
              <Waves size={23} />
            </div>
            <h3 className="mt-4 font-serif text-xl font-bold text-[#7f171b]">
              साधना-केंद्रित स्थान
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#675b51]">
              यह सामान्य sightseeing या public visit के लिए प्रस्तुत नहीं किया जाएगा।
            </p>
          </article>
        </div>
      </div>
    </section>

    <section className="appointment-band">
      <div className="site-shell grid items-center gap-7 py-10 lg:grid-cols-[1fr_auto]">
        <div>
          <div className="flex items-center gap-3 text-[#e5ac53]">
            <MessageCircleMore size={23} />
            <span className="text-sm font-bold tracking-[.14em]">
              आश्रम संबंधी जानकारी
            </span>
          </div>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            पहले Nalin Dada से व्यक्तिगत रूप से चर्चा करें
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#dfe8e4] md:text-base">
            उपयुक्त होने पर आश्रम और साधना से जुड़ी आवश्यक जानकारी व्यक्तिगत रूप से साझा की जाएगी। कोई public address या map उपलब्ध नहीं कराया जाता।
          </p>
        </div>
        <Link to="/appointment" className="button-gold">
          अपॉइंटमेंट एवं संपर्क <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  </div>
);

export default Ashram;
