import { motion } from 'framer-motion';
import { Heart, Sun, MapPin, ArrowRight, MessageCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const allServices = [
    { title: 'ज्योतिष', icon: '✨', desc: 'जीवन मार्ग एवं वैदिक ज्योतिष मार्गदर्शन के माध्यम से भविष्य की संभावनाओं को जानें।' },
    { title: 'हस्तरेखा', icon: '✋', desc: 'आपके स्वाभाविक गुणों की पहचान और आपके हाथों की लकीरों में छिपे संकेतों का विश्लेषण।' },
    { title: 'अंक ज्योतिष', icon: '🔢', desc: 'अंकों की शक्ति और आपके जीवन पर उनके प्रभाव को जानकर सही मार्ग का चयन करें।' },
    { title: 'आयुर्वेद एवं प्राकृतिक स्वास्थ्य', icon: '🌿', desc: 'सरल, प्राकृतिक और प्रभावी आयुर्वेदिक उपायों से अपने स्वास्थ्य को बेहतर बनाएं।' },
    { title: 'समग्र उपचार', icon: '🧘', desc: 'मन, शरीर और आत्मा का संतुलन और संपूर्ण कल्याण के लिए आध्यात्मिक उपचार।' },
    { title: 'नाभि चिकित्सा', icon: '🌀', desc: 'पारंपरिक चिकित्सा पद्धति द्वारा पाचन और ऊर्जा का संतुलन बनाए रखें।' },
    { title: 'आध्यात्मिक मार्गदर्शन', icon: '🕉️', desc: 'आंतरिक शांति, स्पष्टता और उच्चतर जागरूकता के लिए व्यक्तिगत मार्गदर्शन।' },
    { title: 'तंत्र एवं मंत्र साधना', icon: '🔱', desc: 'पारंपरिक पद्धतियों द्वारा आध्यात्मिक विकास और सुरक्षा के लिए साधना।' },
    { title: 'पारंपरिक उपाय', icon: '📿', desc: 'व्यावहारिक और पारंपरिक उपचार दैनिक जीवन की चुनौतियों के समाधान के लिए।' },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#5c0a0a] text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">नलिन दादा की सेवाएँ</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              आध्यात्मिक मार्गदर्शन, ज्योतिष परामर्श, प्राकृतिक उपचार और भारतीय परंपरा के गहन ज्ञान के माध्यम से नलिन दादा संतुलित, स्वस्थ और सार्थक जीवन की दिशा प्रदान करते हैं।
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#5c0a0a] mb-16 text-center italic flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-amber-600"></span>
            हमारी प्रमुख सेवाएँ
            <span className="w-12 h-px bg-amber-600"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white border border-amber-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="text-4xl mb-6 bg-amber-50 w-16 h-16 flex items-center justify-center rounded-xl group-hover:bg-amber-600 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#5c0a0a] mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                <Link to="/appointment" className="text-amber-700 font-bold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  इसके बारे में और जानें <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Highlight */}
      <section className="py-20 bg-[#fdf8f3]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?auto=format&fit=crop&q=80&w=800" alt="Consultation" className="rounded-2xl shadow-2xl" />
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center">
                  <Sun size={24} />
                </div>
                <h3 className="text-3xl font-serif font-bold text-[#5c0a0a]">व्यक्तिगत परामर्श</h3>
              </div>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                नलिन दादा व्यक्तिगत रूप से आपकी परिस्थितियों को समझकर, ज्योतिष, हस्तरेखा, अंक ज्योतिष और जीवन के विभिन्न पहलुओं पर मार्गदर्शन प्रदान करते हैं। यह परामर्श आपके प्रश्नों के व्यावहारिक और सार्थक समाधान देने में सहायक होता है।
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'जटिल समस्याओं का सरल समाधान',
                  'जीवन के प्रति सकारात्मक दृष्टिकोण',
                  'आंतरिक शांति और मानसिक संतुलन',
                  'व्यक्तिगत मार्गदर्शन और ध्यान'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/appointment" className="bg-[#5c0a0a] text-white px-8 py-4 rounded-md font-bold hover:bg-[#7a0d0d] transition-all inline-flex items-center gap-2">
                परामर्श के लिए अपॉइंटमेंट लें <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#5c0a0a] mb-16 text-center">नलिन दादा की सेवाएँ क्यों चुनें?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'अनुभव आधारित मार्गदर्शन', desc: 'वर्षों के अध्ययन और अनुभव पर आधारित सटीक और विश्वसनीय सलाह।', icon: <Star className="text-amber-600" /> },
              { title: 'सरल और व्यावहारिक दृष्टिकोण', desc: 'जटिल विषयों को सरल भाषा में समझाकर व्यावहारिक समाधान।', icon: <Heart className="text-amber-600" /> },
              { title: 'आध्यात्मिक एवं समग्र सोच', desc: 'जीवन के भौतिक, मानसिक और आध्यात्मिक पहलुओं का संतुलित दृष्टिकोण।', icon: <Sun className="text-amber-600" /> },
              { title: 'भारतीय परंपरा से जुड़ा ज्ञान', desc: 'वेद, ज्योतिष, आयुर्वेद और सनातन परंपरा के गहन ज्ञान पर आधारित सेवाएँ।', icon: <MapPin className="text-amber-600" /> },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-[#5c0a0a] mb-3">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#fdf8f3] text-center border-t border-amber-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-[#5c0a0a] mb-8 italic">"सही मार्गदर्शन जीवन की दिशा बदल सकता है, और संतुलन से भरा जीवन ही सच्ची सफलता है।"</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointment" className="bg-[#008a4e] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#00703e] transition-all shadow-xl inline-flex items-center gap-2">
              <MessageCircle size={22} /> व्हाट्सएप पर अपॉइंटमेंट बुक करें
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
