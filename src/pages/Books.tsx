import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Search, Filter, Sparkles, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Books = () => {
  const categories = ['सभी', 'ज्योतिष', 'अध्यात्म', 'आयुर्वेद', 'जीवन दर्शन', 'तंत्र-मंत्र'];

  const books = [
    { title: 'अध्यात्मिक मार्गदर्शन', category: 'अध्यात्म', color: 'bg-red-800' },
    { title: 'सिद्धि साधना प्रयोग', category: 'तंत्र-मंत्र', color: 'bg-blue-800' },
    { title: 'अध्यात्म और सत्य', category: 'अध्यात्म', color: 'bg-indigo-900' },
    { title: 'वास्तु सरल सूत्र', category: 'जीवन दर्शन', color: 'bg-green-700' },
    { title: 'आयुर्वेद और स्वास्थ्य', category: 'आयुर्वेद', color: 'bg-teal-700' },
    { title: 'अंक ज्योतिष सरल परिचय', category: 'ज्योतिष', color: 'bg-blue-600' },
    { title: 'गायत्री आयुर्वेद', category: 'आयुर्वेद', color: 'bg-orange-600' },
    { title: 'तंत्र साधना एवं प्रयोग', category: 'तंत्र-मंत्र', color: 'bg-purple-900' },
    { title: 'श्री सूक्त का रहस्य', category: 'अध्यात्म', color: 'bg-pink-800' },
    { title: 'स्वास्थ्य आहार-2', category: 'आयुर्वेद', color: 'bg-orange-700' },
    { title: 'जीवन दिशा', category: 'जीवन दर्शन', color: 'bg-yellow-600' },
    { title: 'प्राकृतिक उपचार', category: 'आयुर्वेद', color: 'bg-green-600' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#fdf8f3] py-20 border-b border-amber-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <Link to="/" className="hover:text-amber-700">घर</Link>
                <span>›</span>
                <span className="text-amber-700 font-bold">पुस्तकें एवं प्रकाशन</span>
              </nav>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-[#5c0a0a] mb-6">नलिन दादा की पुस्तकें एवं प्रकाशन</h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                आध्यात्मिक ज्ञान, ज्योतिष, उपचार, तंत्र-मंत्र, आयुर्वेद, वास्तु और जीवन दर्शन पर आधारित पुस्तकें - जो जीवन को सही दिशा, संतुलन और सकारात्मक ऊर्जा प्रदान करती हैं।
              </p>
              <div className="flex gap-4">
                <button className="bg-[#5c0a0a] text-white px-8 py-3 rounded-md font-bold hover:bg-[#7a0d0d] transition-all flex items-center gap-2 shadow-md">
                  हमारी पुस्तकों को देखें <ArrowRight size={20} />
                </button>
                <button className="bg-white border-2 border-amber-200 text-amber-900 px-8 py-3 rounded-md font-bold hover:bg-amber-50 transition-all">
                  सभी विषयों की जानकारी
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800" alt="Books Collection" className="rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl border-l-4 border-amber-600 max-w-[280px]">
                <p className="text-amber-900 font-serif italic text-sm mb-2">
                  "पुस्तकें केवल ज्ञान का संग्रह नहीं, बल्कि जीवन को बदलने वाली साधना हैं।"
                </p>
                <p className="text-right text-xs font-bold text-gray-500">— डॉ. नलिन पण्ड्या</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Author Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-[#fdf8f3] rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-12 border border-amber-100 shadow-sm">
            <div className="lg:w-1/3">
              <img src="https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80&w=600" alt="Author" className="rounded-2xl shadow-lg border-4 border-white" />
            </div>
            <div className="lg:w-2/3">
              <h3 className="text-amber-600 font-bold mb-2 flex items-center gap-2 italic">
                <span className="w-8 h-[1px] bg-amber-600"></span> लेखक परिचय
              </h3>
              <h2 className="text-3xl font-serif font-bold text-[#5c0a0a] mb-6">डॉ. नलिन पंड्या - ज्ञान को समाज तक पहुँचाने का संकल्प</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                डॉ. नलिन पंड्या ने अपने वर्षों के अध्ययन, साधना, अनुसंधान और अनुभवों के आधार पर विभिन्न विषयों पर अनेक पुस्तकें लिखी हैं। इन पुस्तकों में ज्योतिष, अध्यात्म, आयुर्वेद, तंत्र-मंत्र, वास्तु, अंक ज्योतिष, जीवन प्रबंधन और भारतीय संस्कृति जैसे विषयों पर सरल भाषा में गहन मार्गदर्शन उपलब्ध है। उनका उद्देश्य प्राचीन ज्ञान को आधुनिक जीवन में उपयोगी बनाना और अधिक से अधिक लोगों तक सकारात्मक, व्यावहारिक और जीवनदायी ज्ञान पहुँचाना है।
              </p>
              <Link to="/about" className="bg-amber-100 text-amber-900 px-6 py-2 rounded font-bold text-sm hover:bg-amber-200 transition-colors inline-flex items-center gap-2">
                डॉ. नलिन पंड्या के बारे में और जानें <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Book Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <h2 className="text-3xl font-serif font-bold text-[#5c0a0a]">हमारी प्रमुख पुस्तकें</h2>
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2">
              {categories.map((cat, i) => (
                <button 
                  key={i} 
                  className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${i === 0 ? 'bg-[#5c0a0a] text-white' : 'bg-gray-100 text-gray-700 hover:bg-amber-100'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {books.map((book, index) => (
              <motion.div 
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className={`${book.color} aspect-[2/3] rounded-lg shadow-md mb-4 flex flex-col items-center justify-center p-4 text-center text-white relative overflow-hidden group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 border-2 border-white/20`}>
                  {/* Decorative elements */}
                  <div className="absolute top-2 left-2 w-full h-full border border-white/10 rounded-lg pointer-events-none"></div>
                  <div className="text-xs uppercase tracking-widest opacity-60 mb-2">{book.category}</div>
                  <h4 className="text-sm md:text-base font-serif font-bold leading-tight mb-2">{book.title}</h4>
                  <div className="text-[10px] italic opacity-70 mt-4">डॉ. नलिन पंड्या</div>
                  <div className="absolute bottom-4 right-4 bg-white/20 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight size={12} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <button className="bg-amber-100 text-amber-900 px-10 py-4 rounded-full font-bold hover:bg-amber-200 transition-all shadow-sm">
              सभी पुस्तकें देखें
            </button>
          </div>
        </div>
      </section>

      {/* Book Subjects Section */}
      <section className="py-20 bg-[#fdf8f3]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-[#5c0a0a] mb-16 text-center">पुस्तकों के विषय</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { name: 'ज्योतिष', icon: '✨' },
              { name: 'अध्यात्म', icon: '🧘' },
              { name: 'उपचार', icon: '🌿' },
              { name: 'तंत्र-मंत्र', icon: '🔱' },
              { name: 'वास्तु', icon: '🏡' },
              { name: 'आयुर्वेद', icon: '🍃' },
              { name: 'जीवन मार्गदर्शन', icon: '🧭' },
              { name: 'विशेष प्रयोग', icon: '📜' },
            ].map((subject, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow border border-amber-50">
                <div className="text-3xl mb-4">{subject.icon}</div>
                <h4 className="text-sm font-bold text-[#5c0a0a]">{subject.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Writing Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h3 className="text-amber-600 font-bold mb-2 flex items-center gap-2 italic">
                <span className="w-8 h-[1px] bg-amber-600"></span> हमारी लेखन दृष्टि
              </h3>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#5c0a0a] mb-6">ज्ञान, अनुभव और समाजहित का संगम</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                नलिन दादा की पुस्तकें केवल सैद्धांतिक ज्ञान नहीं, बल्कि वर्षों के अनुभव, साधना और शोध पर आधारित व्यावहारिक अंतर्दृष्टि प्रदान करती हैं। इनका उद्देश्य प्राचीन भारतीय ज्ञान परंपरा को एक सरल भाषा में प्रस्तुत करना है, ताकि हर व्यक्ति इसे अपने दैनिक जीवन में अपनाकर लाभान्वित हो सके।
              </p>
              <p className="text-gray-700 leading-relaxed">
                इन पुस्तकों में आध्यात्मिक उन्नति के साथ-साथ मानसिक, शारीरिक और पारिवारिक जीवन में संतुलन, सकारात्मक ऊर्जा और समाधान के व्यावहारिक उपाय दिए गए हैं।
              </p>
            </div>
            <div className="lg:w-1/2 relative">
              <img src="https://images.unsplash.com/photo-1491843331657-f050bc0552d0?auto=format&fit=crop&q=80&w=800" alt="Books and Vision" className="rounded-2xl shadow-xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 p-8 rounded-2xl shadow-2xl border border-amber-200 max-w-[320px]">
                <p className="text-amber-900 font-serif italic text-base">
                  "हमारी पुस्तकें शास्त्र और विज्ञान, परंपरा और प्रयोग, तथा आध्यात्म और व्यवहार - इन सभी का संतुलित संगम हैं।"
                </p>
                <p className="text-right text-xs font-bold text-gray-500 mt-4">— डॉ. नलिन पण्ड्या</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why these books are important */}
      <section className="py-20 bg-[#5c0a0a] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-16 text-center">ये पुस्तकें आपके लिए क्यों महत्वपूर्ण हैं?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { title: 'सरल भाषा में ज्ञान', desc: 'कठिन विषयों को भी आसान और सरल शब्दों में समझाया गया है।', icon: <BookOpen size={30} /> },
              { title: 'प्राचीन ज्ञान की आधुनिक प्रस्तुति', desc: 'भारतीय परंपरा के सिद्धांतों को आज के जीवन में उपयोगी रूप में प्रस्तुत किया गया है।', icon: <Filter size={30} /> },
              { title: 'व्यावहारिक समाधान', desc: 'जीवन की वास्तविक समस्याओं के लिए सरल और प्रभावी उपाय उपलब्ध हैं।', icon: <Search size={30} /> },
              { title: 'आध्यात्मिक उन्नति', desc: 'आंतरिक शांति, सकारात्मकता और आत्मविश्वास की दिशा में मार्गदर्शन।', icon: <Sparkles size={30} /> },
              { title: 'हर आयु के लिए उपयोगी', desc: 'गृहस्थ जीवन, करियर, स्वास्थ्य और पारिवारिक जीवन - सभी के लिए प्रेरणादायक।', icon: <Users size={30} /> },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                <p className="text-sm opacity-80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Books;
