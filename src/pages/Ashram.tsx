import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Calendar, ArrowRight, Sun, Heart, Sparkles, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Ashram = () => {
  const images = [
    'https://images.unsplash.com/photo-1603566592036-6e47b310e6e7?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400',
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1603566592036-6e47b310e6e7?auto=format&fit=crop&q=80&w=1600" 
            alt="Ashram Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4 text-amber-400 font-bold tracking-[0.2em] uppercase text-sm">साधना • शांति • सेवा • सनातन परंपरा का जीवंत केंद्र</div>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold mb-6">पीतांबरा पीठ आश्रम</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
              माँ नर्मदा की पावन तटभूमि पर स्थित, यह आश्रम साधना, प्रार्थना, आत्मचिंतन और आध्यात्मिक मार्गदर्शन का दिव्य केंद्र है। यहाँ प्रत्येक साधक को शांति, सकारात्मक ऊर्जा और ईश्वरीय कृपा का अनुभव होता है।
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-10">
              <Link to="/appointment" className="bg-amber-600 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-700 transition-all flex items-center gap-2">
                <Calendar size={20} /> आश्रम की जानकारी देखें
              </Link>
              <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
                आश्रम की झलकियां देखें
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-amber-600 font-bold mb-2 flex items-center gap-2 italic">
                <span className="w-8 h-[1px] bg-amber-600"></span> आश्रम परिचय
              </h2>
              <h3 className="text-3xl lg:text-4xl font-serif font-bold text-[#5c0a0a] mb-8">आश्रम की पावन भूमि पर आपका स्वागत है</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                पीतांबरा पीठ आश्रम माँ नर्मदा की पावन तटभूमि पर स्थित एक आध्यात्मिक साधना केंद्र है, जहाँ सनातन परंपरा, वैदिक साधना और देवी उपासना की सतत धारा प्रवाहमान है। यह आश्रम नलिन दादा के दीर्घ साधना अनुभव, गुरु परंपरा की कृपा और माँ नर्मदा की असीम अनुकंपा से विकसित एक पवित्र स्थान है।
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                यहाँ साधकों के लिए एक शांत और सात्विक वातावरण है, जहाँ वे मंत्र-जप, अनुष्ठान, पाठ, ध्यान और आध्यात्मिक चिंतन के माध्यम से अपने जीवन को दिव्यता की ओर ले जा सकते हैं।
              </p>
              <div className="bg-[#fdf8f3] p-8 rounded-2xl border-l-8 border-amber-600 shadow-sm italic text-gray-800 relative">
                <div className="text-6xl text-amber-200 absolute top-2 right-4 pointer-events-none">"</div>
                "माँ नर्मदा की पावन भूमि पर यह आश्रम साधकों के लिए एक दिव्य अवसर है, जहाँ साधना से जीवन परिवर्तन होता है।"
                <div className="mt-4 not-italic font-bold text-amber-900">— डॉ. नलिन पण्ड्या</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img src="https://images.unsplash.com/photo-1603566592036-6e47b310e6e7?auto=format&fit=crop&q=80&w=800" alt="Ashram Life" className="rounded-3xl shadow-2xl border-8 border-white" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ashram Features */}
      <section className="py-20 bg-[#fdf8f3]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#5c0a0a] mb-16 text-center italic">आश्रम क्यों विशेष हैं?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'शांत वातावरण', icon: <Sun size={30} />, desc: 'माँ नर्मदा के तट पर स्थित, प्राकृतिक और सात्विक परिवेश।' },
              { title: 'साधना का केंद्र', icon: <Heart size={30} />, desc: 'गहन साधना, जप और आध्यात्मिक अभ्यास के लिए आदर्श स्थान।' },
              { title: 'गुरु परंपरा', icon: <Sparkles size={30} />, desc: 'सनातन परंपरा और गायत्री संत परंपरा का आशीर्वाद।' },
              { title: 'मार्गदर्शन', icon: <Users size={30} />, desc: 'नलिन दादा का सानिध्य और जीवनोपयोगी आध्यात्मिक मार्गदर्शन।' },
              { title: 'प्राकृतिक सौंदर्य', icon: <MapPin size={30} />, desc: 'नर्मदा तट की अनुपम प्राकृतिक छटा और शांत वातावरण।' },
              { title: 'आध्यात्मिक ऊर्जा', icon: <Sun size={30} />, desc: 'साधना, अनुष्ठान और मंत्र शक्तियों से परिपूर्ण दिव्य ऊर्जा का केंद्र।' },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center border border-amber-50"
                whileHover={{ y: -5 }}
              >
                <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-600">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-[#5c0a0a] mb-4">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-[#5c0a0a]">आश्रम की झलकियां</h2>
            <button className="text-amber-700 font-bold border-b-2 border-amber-700 pb-1 hover:text-[#5c0a0a] hover:border-[#5c0a0a] transition-all flex items-center gap-2">
              और झलकियां देखें <ArrowRight size={16} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((img, i) => (
              <motion.div 
                key={i}
                className="overflow-hidden rounded-2xl aspect-square group shadow-lg"
                whileHover={{ scale: 0.98 }}
              >
                <img src={img} alt={`Ashram ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Info */}
      <section className="py-20 bg-[#fdf8f3]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-[#5c0a0a] mb-16 text-center italic">आने से पहले (भ्रमण जानकारी)</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-amber-600">
              <div className="flex items-center gap-3 mb-6 text-amber-700">
                <MapPin size={24} />
                <h4 className="text-xl font-bold">आश्रम का पता</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                पीतांबरा पीठ आश्रम<br />
                कर्नाली, जिला - अहमदाबाद, गुजरात<br />
                <span className="text-xs text-gray-500 mt-2 block">(अंतिम पता क्लाइंट से प्राप्त होने पर अपडेट किया जाएगा)</span>
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-amber-600">
              <div className="flex items-center gap-3 mb-6 text-amber-700">
                <Calendar size={24} />
                <h4 className="text-xl font-bold">भ्रमण के लिए सुझाव</h4>
              </div>
              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li>कृपया पहले से अपनी यात्रा की योजना बनाएं।</li>
                <li>आश्रम में वातावरण शांत और सात्विक है।</li>
                <li>आश्रम के नियमों का पालन करें।</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-amber-600">
              <div className="flex items-center gap-3 mb-6 text-amber-700">
                <Clock size={24} />
                <h4 className="text-xl font-bold">महत्वपूर्ण सूचना</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                आश्रम का अंतिम पता, पहुँचने का मार्ग, भ्रमण समय और अन्य विवरण क्लाइंट से प्राप्त होने पर यहाँ अपडेट किया जाएगा।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Link */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="bg-white p-12 rounded-3xl shadow-xl border border-amber-100 inline-block w-full max-w-4xl">
            <h2 className="text-3xl font-serif font-bold text-[#5c0a0a] mb-6">आश्रम के बारे में अधिक जानकारी के लिए</h2>
            <p className="text-gray-600 mb-10 text-lg">कृपया व्हाट्सएप के माध्यम से हमसे संपर्क करें।</p>
            <Link to="/appointment" className="bg-[#008a4e] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#00703e] transition-all shadow-xl inline-flex items-center gap-2">
              <Phone size={22} /> व्हाट्सएप पर जानकारी प्राप्त करें
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ashram;
