import { motion } from 'framer-motion';
import { Sparkles, MapPin, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    { title: 'ज्योतिष', icon: <Sparkles className="w-8 h-8" />, desc: 'जीवन मार्ग एवं वैदिक ज्योतिष मार्गदर्शन' },
    { title: 'हस्तरेखा', icon: <div className="w-8 h-8 flex items-center justify-center font-bold text-xl">✋</div>, desc: 'आपके स्वाभाविक गुणों की पहचान' },
    { title: 'अंक ज्योतिष', icon: <div className="w-8 h-8 flex items-center justify-center font-bold text-xl">3 6 9</div>, desc: 'अंकों की शक्ति से अपना मार्ग जानें' },
    { title: 'आयुर्वेद एवं प्राकृतिक स्वास्थ्य', icon: <div className="w-8 h-8 flex items-center justify-center font-bold text-xl">🌿</div>, desc: 'सरल, प्राकृतिक उपायों से बेहतर स्वास्थ्य' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-[#fdf8f3] py-20 lg:py-32">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex items-center gap-2 text-amber-700 font-bold tracking-widest text-sm uppercase">
              <span className="w-8 h-[2px] bg-amber-700"></span>
              जीवन • ज्ञान • उपचार • उच्चतर चेतना की ओर
            </div>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-[#5c0a0a] leading-tight mb-6">
              अध्यात्मिक मार्गदर्शन, ज्योतिष एवं समग्र उपचार
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-xl">
              ज्योतिष | हस्तरेखा | अंक ज्योतिष | आयुर्वेद एवं प्राकृतिक स्वास्थ्य | समग्र उपचार | नाभि चिकित्सा | आध्यात्मिक मार्गदर्शन | तंत्र एवं मंत्र पारंपरिक उपाय | अधिक संतुलित एवं सार्थक जीवन की ओर
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/appointment" className="bg-[#5c0a0a] text-white px-8 py-4 rounded-md font-bold hover:bg-[#7a0d0d] transition-all transform hover:-translate-y-1 shadow-lg flex items-center gap-2">
                अपॉइंटमेंट बुक करें <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="bg-white border-2 border-amber-200 text-amber-900 px-8 py-4 rounded-md font-bold hover:bg-amber-50 transition-all flex items-center gap-2">
                हमारी सेवाएँ देखें
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border-8 border-white shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80&w=800" 
                alt="Dr. Nalin Pandya" 
                className="w-full h-auto"
              />
            </div>
            {/* Quote decoration */}
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-lg shadow-xl max-w-[240px] hidden md:block z-20 border-l-4 border-amber-600">
              <p className="text-amber-900 font-serif italic text-sm mb-2">
                "सफलता केवल बाहरी उपलब्धि में नहीं, बल्कि भीतर की शांति में है, और यही शांति हम सभी के अंदर पहले से मौजूद है।"
              </p>
              <p className="text-right text-xs font-bold text-gray-500">— डॉ. नलिन पण्ड्या</p>
            </div>
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-0 animate-pulse"></div>
          </motion.div>
        </div>
      </section>

      {/* About Nalin Pandya */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2 grid grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <img src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg mt-8" alt="Nalin Dada 1" />
              <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg" alt="Nalin Dada 2" />
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-amber-600 font-bold mb-2">हमारे बारे में</h2>
              <h3 className="text-3xl lg:text-4xl font-serif font-bold text-[#5c0a0a] mb-6">डॉ. नलिन पण्ड्या</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                डॉ. नलिन पण्ड्या, जिन्हें प्रेमपूर्वक नलिन सर कहा जाता है, एक आध्यात्मिक मार्गदर्शक, ज्योतिषी, उपचारकर्ता और लेखक हैं। दशकों के अनुभव के साथ, उन्होंने दुनिया भर के हजारों लोगों के जीवन को बेहतर बनाने में मदद की है।
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                उनकी शिक्षाएँ भारतीय आध्यात्मिक परंपराओं में गहराई से निहित हैं, जिसमें आधुनिक जीवन की चुनौतियों के लिए सरल और प्रभावी उपायों पर विशेष जोर है।
              </p>
              <Link to="/about" className="text-[#5c0a0a] font-bold border-b-2 border-[#5c0a0a] pb-1 hover:text-amber-700 hover:border-amber-700 transition-colors inline-flex items-center gap-2">
                डॉ. नलिन सर के बारे में और जानें <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#fdf8f3]">
        <div className="container mx-auto px-4 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-amber-600 font-bold mb-2">हमारी सेवाएँ</h2>
            <h3 className="text-3xl lg:text-4xl font-serif font-bold text-[#5c0a0a]">एक बेहतर, स्वस्थ और अधिक सार्थक जीवन के लिए मार्गदर्शन</h3>
          </motion.div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-amber-600 text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-amber-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ashram Preview */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-amber-600 font-bold mb-2">आश्रम एवं परामर्श केंद्र</h2>
            <h3 className="text-3xl lg:text-4xl font-serif font-bold text-[#5c0a0a] mb-6">दो स्थानों से, एक उदे दिशा में पहला कदम</h3>
            
            <div className="space-y-8 mt-10">
              <div className="flex gap-4">
                <div className="bg-amber-100 p-3 rounded-full self-start">
                  <MapPin className="text-amber-700" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">पीतांबरा पीठ आश्रम</h4>
                  <p className="text-gray-600 mb-2">अध्यात्मिक अध्ययन, सत्संग और समग्र जीवन के लिए एक शांत स्थान।</p>
                  <p className="text-amber-800 font-semibold flex items-center gap-1 text-sm">
                    <MapPin size={14} /> अहमदाबाद - गुजरात
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-amber-100 p-3 rounded-full self-start">
                  <Phone className="text-amber-700" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">परामर्श केंद्र</h4>
                  <p className="text-gray-600 mb-2">ज्योतिष, उपचार और मार्गदर्शन के लिए व्यक्तिगत परामर्श।</p>
                  <p className="text-amber-800 font-semibold flex items-center gap-1 text-sm">
                    <MapPin size={14} /> अहमदाबाद - गुजरात
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Link to="/ashram" className="bg-[#5c0a0a] text-white px-8 py-4 rounded-md font-bold hover:bg-[#7a0d0d] transition-all inline-block">
                आश्रम के बारे में और जानें
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 relative h-[400px] w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1603566592036-6e47b310e6e7?auto=format&fit=crop&q=80&w=800" 
              alt="Ashram" 
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-8 italic">"सच्ची सफलता केवल बाहरी उपलब्धि में नहीं, बल्कि सही दिशा में है।"</h2>
            <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">आज ही अपना व्यक्तिगत मार्गदर्शन सत्र शुरू करें और अपने जीवन में सकारात्मक परिवर्तन लाएं।</p>
            <Link to="/appointment" className="bg-white text-amber-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-amber-50 transition-all shadow-xl inline-flex items-center gap-2">
              व्हाट्सएप पर जानकारी प्राप्त करें <ArrowRight size={22} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
