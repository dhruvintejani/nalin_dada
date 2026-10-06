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
import { Link } from "react-router-dom";
import { siteConfig } from "../config/site";

const services = [
  {
    title: "ज्योतिष",
    icon: Sparkles,
    text: "जीवन के विभिन्न पहलुओं को ज्योतिषीय दृष्टि से समझने के लिए व्यक्तिगत मार्गदर्शन।",
  },
  {
    title: "हस्तरेखा",
    icon: Hand,
    text: "हस्तरेखा के आधार पर व्यक्तित्व, प्रवृत्तियों और जीवन दिशा से जुड़ी समझ।",
  },
  {
    title: "अंक ज्योतिष",
    icon: Hash,
    text: "अंकों और जन्म-संबंधी विवरण के आधार पर जीवन के पैटर्न को समझने का पारंपरिक दृष्टिकोण।",
  },
  {
    title: "आयुर्वेद एवं प्राकृतिक स्वास्थ्य",
    icon: Leaf,
    text: "प्राकृतिक जीवनशैली, पारंपरिक स्वास्थ्य ज्ञान और दैनिक दिनचर्या से जुड़ी सामान्य जानकारी।",
  },
  {
    title: "समग्र जीवन मार्गदर्शन",
    icon: HeartPulse,
    text: "मन, जीवनशैली और व्यक्तिगत परिस्थितियों को संतुलित दृष्टि से समझने के लिए संवाद।",
  },
  {
    title: "नाभि चिकित्सा",
    icon: Activity,
    text: "नाभि चिकित्सा से जुड़ी पारंपरिक पद्धतियों और Nalin Dada के अनुभव पर आधारित जानकारी।",
  },
  {
    title: "आध्यात्मिक मार्गदर्शन",
    icon: Flower2,
    text: "साधना, शांति, आत्मचिंतन और जीवन के उद्देश्य से जुड़े प्रश्नों पर व्यक्तिगत दिशा।",
  },
  {
    title: "तंत्र एवं मंत्र साधना",
    icon: Flame,
    text: "परंपरागत मंत्र, जप और साधना पद्धतियों से जुड़ा मार्गदर्शन, परिस्थिति और पात्रता के अनुसार।",
  },
  {
    title: "पारंपरिक उपाय",
    icon: Compass,
    text: "जीवन की परिस्थितियों से जुड़े पारंपरिक और आध्यात्मिक उपायों पर सामान्य मार्गदर्शन।",
  },
];

const consultationPoints = [
  "व्यक्तिगत रूप से आपकी बात और प्रश्न समझना",
  "उपयुक्त विषय या सेवा की दिशा तय करना",
  "सरल भाषा में मार्गदर्शन और आवश्यक जानकारी देना",
  "जरूरत होने पर आगे की प्रक्रिया स्पष्ट करना",
];

const process = [
  {
    step: "01",
    title: "अपॉइंटमेंट अनुरोध",
    text: "Appointment & Contact page पर अपनी मूल जानकारी और प्रश्न भरें।",
    icon: CalendarDays,
  },
  {
    step: "02",
    title: "व्हाट्सऐप संदेश",
    text: "Submit करने पर तैयार संदेश WhatsApp में खुलेगा। अंतिम नंबर मिलने पर इसे सक्रिय किया जाएगा।",
    icon: MessageCircleMore,
  },
  {
    step: "03",
    title: "समय की पुष्टि",
    text: "उपलब्ध समय की पुष्टि के बाद कार्यालय में व्यक्तिगत परामर्श होगा।",
    icon: CheckCircle2,
  },
  {
    step: "04",
    title: "व्यक्तिगत मार्गदर्शन",
    text: "आपके प्रश्न और चुने गए विषय के अनुसार Nalin Dada से आमने-सामने बातचीत होगी।",
    icon: HeartHandshake,
  },
];

const Services = () => (
  <div className="overflow-hidden bg-[#fffdf9]">
    <section className="hero-surface relative">
      <div className="hero-glow" />
      <div className="site-shell grid min-h-[510px] items-center gap-10 py-12 lg:grid-cols-[1.08fr_.92fr] lg:py-16">
        <div className="relative z-10">
          <div className="eyebrow">मुख्य पृष्ठ · सेवाएँ</div>
          <h1 className="mt-4 font-serif text-[2.65rem] font-bold leading-[1.14] tracking-[-0.035em] text-[#8f181c] sm:text-[3.3rem] lg:text-[4rem]">
            Nalin Dada की सेवाएँ
          </h1>
          <p className="mt-5 max-w-[720px] text-base leading-8 text-[#51463e] md:text-lg">
            ज्योतिष, हस्तरेखा, अंक ज्योतिष, प्राकृतिक स्वास्थ्य ज्ञान, नाभि चिकित्सा, आध्यात्मिक मार्गदर्शन तथा मंत्र-साधना से जुड़े विषयों को एक ही स्थान पर सरल और व्यवस्थित रूप में प्रस्तुत किया गया है।
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/appointment" className="button-primary">
              <CalendarDays size={18} /> अपॉइंटमेंट बुक करें <ArrowRight size={18} />
            </Link>
            <a href="#all-services" className="button-secondary">
              सभी सेवाएँ देखें
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[500px]">
          <div className="absolute -inset-4 rounded-[2rem] border border-[#e3b86f]/45" />
          <img
            src="/images/nalin-speaking.jpg"
            alt="Nalin Dada speaking during a spiritual and astrology gathering"
            className="relative h-[445px] w-full rounded-[1.7rem] border-[7px] border-white object-cover object-[center_27%] shadow-[0_24px_60px_rgba(78,44,22,.17)]"
          />
        </div>
      </div>
    </section>

    <section id="all-services" className="section-block scroll-mt-24 bg-[#fbf5eb]">
      <div className="site-shell">
        <div className="mx-auto max-w-3xl text-center">
          <div className="eyebrow justify-center">हमारी प्रमुख सेवाएँ</div>
          <h2 className="section-title mx-auto mt-3">
            अलग-अलग जरूरतों के लिए अलग मार्गदर्शन
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#706158]">
            हर व्यक्ति की परिस्थिति अलग होती है। इसलिए सेवा का चयन भी प्रश्न, उद्देश्य और आवश्यकता के अनुसार किया जाता है।
          </p>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map(({ title, icon: Icon, text }) => (
            <article key={title} className="service-card">
              <div className="service-icon">
                <Icon size={26} strokeWidth={1.75} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="section-block">
      <div className="site-shell grid items-center gap-10 lg:grid-cols-[.92fr_1.08fr]">
        <div className="relative grid min-h-[410px] place-items-center overflow-hidden rounded-[1.5rem] border border-[#e4d4bf] bg-[linear-gradient(145deg,#f8ead3,#fffaf2_58%,#f2dfbf)]">
          <div className="absolute -right-12 -top-14 h-44 w-44 rounded-full border border-[#d6a354]/40" />
          <div className="absolute -bottom-16 -left-12 h-48 w-48 rounded-full border border-[#d6a354]/30" />
          <div className="relative z-10 max-w-[260px] text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-[#ddb675] bg-white/75 text-[#a45f23]">
              <UserRound size={29} strokeWidth={1.5} />
            </div>
            <p className="mt-4 text-sm font-bold text-[#7f171b]">
              वास्तविक Consultation Photo
            </p>
            <p className="mt-2 text-xs leading-5 text-[#766457]">
              यहाँ Nalin Dada की किसी व्यक्ति से आमने-सामने चर्चा या परामर्श करते हुए वास्तविक फोटो जोड़ी जाएगी।
            </p>
          </div>
        </div>

        <div>
          <div className="eyebrow">व्यक्तिगत परामर्श</div>
          <h2 className="section-title mt-3">
            पहले प्रश्न समझना, फिर सही दिशा पर बात करना
          </h2>
          <p className="mt-5 text-base leading-8 text-[#5d5148]">
            व्यक्तिगत परामर्श का उद्देश्य आगंतुक के प्रश्न और परिस्थिति को समझना है। उसके बाद ज्योतिष, हस्तरेखा, अंक ज्योतिष, आध्यात्मिक मार्गदर्शन या अन्य संबंधित विषय के आधार पर बातचीत आगे बढ़ती है।
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
            व्यक्तिगत परामर्श के लिए अपॉइंटमेंट लें <ArrowRight size={18} />
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
              व्यक्तिगत और निजी संवाद
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#675b51]">
              परामर्श व्यक्तिगत रूप से होता है। वेबसाइट पर आपकी निजी जानकारी सार्वजनिक रूप से प्रदर्शित नहीं की जाएगी।
            </p>
          </article>

          <article className="rounded-[1.25rem] border border-[#ead9c1] bg-[#fffdf9] p-6">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-[#fff2dd] text-[#b56522]">
              <WalletCards size={24} />
            </div>
            <h3 className="mt-4 font-serif text-xl font-bold text-[#7f171b]">
              परामर्श शुल्क {siteConfig.consultationFee}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#675b51]">
              शुल्क ({siteConfig.consultationFee}) कार्यालय में भुगतान किया जाएगा। वेबसाइट पर ऑनलाइन भुगतान की सुविधा नहीं होगी।
            </p>
          </article>

          <article className="rounded-[1.25rem] border border-[#ead9c1] bg-[#fffdf9] p-6">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-[#fff2dd] text-[#b56522]">
              <UserRound size={24} />
            </div>
            <h3 className="mt-4 font-serif text-xl font-bold text-[#7f171b]">
              केवल Offline Consultation
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#675b51]">
              ऑनलाइन या वीडियो परामर्श उपलब्ध नहीं है। अपॉइंटमेंट के बाद मुलाकात परामर्श कार्यालय में होगी।
            </p>
          </article>
        </div>
      </div>
    </section>

    <section className="section-block">
      <div className="site-shell">
        <div className="mx-auto max-w-3xl text-center">
          <div className="eyebrow justify-center">परामर्श की प्रक्रिया</div>
          <h2 className="section-title mx-auto mt-3">
            अपॉइंटमेंट से व्यक्तिगत मार्गदर्शन तक
          </h2>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {process.map(({ step, title, text, icon: Icon }) => (
            <article
              key={step}
              className="relative overflow-hidden rounded-[1.2rem] border border-[#e6d6c1] bg-white p-6 shadow-[0_8px_24px_rgba(84,51,28,.05)]"
            >
              <span className="absolute right-4 top-2 font-serif text-6xl font-bold text-[#f2e1c6]">
                {step}
              </span>
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[#8f181c] text-white">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-[#7f171b]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#675b51]">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="border-y border-[#eadbc7] bg-[#fff8ec] py-8">
      <div className="site-shell">
        <p className="mx-auto max-w-4xl text-center text-xs leading-6 text-[#76675c]">
          प्राकृतिक स्वास्थ्य, आयुर्वेद, नाभि चिकित्सा या अन्य स्वास्थ्य-संबंधी सामग्री सामान्य पारंपरिक जानकारी और व्यक्तिगत अनुभव के संदर्भ में प्रस्तुत की जाएगी। यह आपातकालीन या चिकित्सकीय निदान/उपचार का विकल्प नहीं है।
        </p>
      </div>
    </section>

    <section className="appointment-band">
      <div className="site-shell grid items-center gap-7 py-10 lg:grid-cols-[1fr_auto]">
        <div>
          <div className="flex items-center gap-3 text-[#e5ac53]">
            <WalletCards size={23} />
            <span className="text-sm font-bold tracking-[.14em]">
              अपॉइंटमेंट केवल पूर्व पुष्टि से
            </span>
          </div>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            {siteConfig.appointmentDays} · {siteConfig.morningSlot} और {siteConfig.eveningSlot}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#dfe8e4] md:text-base">
            {siteConfig.sundayStatus}। अंतिम WhatsApp नंबर मिलने के बाद form-to-WhatsApp flow सक्रिय किया जाएगा।
          </p>
        </div>
        <Link to="/appointment" className="button-gold">
          Appointment & Contact <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  </div>
);

export default Services;
