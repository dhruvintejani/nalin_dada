import { motion } from 'framer-motion';
import { ArrowRight, Book, Users, Star, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { label: 'प्रकाशित पुस्तकें', value: '75+', icon: <Book size={24} /> },
    { label: 'विभिन्न विषय', value: '15+', icon: <Star size={24} /> },
    { label: 'वर्षों का अनुभव', value: '40+', icon: <Clock size={24} /> },
    { label: 'पाठकों का विश्वास', value: 'लाखों', icon: <Users size={24} /> },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#fdf8f3] py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-[#5c0a0a] mb-6">नलिन दादा का परिचय</h1>
              <h2 className="text-2xl font-serif text-amber-700 mb-6 italic">आध्यात्मिक मार्गदर्शक, ज्योतिषी, उपचारकर्ता और जीवन प्रेरक</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                ज्ञान, साधना, सेवा और मानव कल्याण के माध्यम से जीवन को सही दिशा देने का एक अनवरत प्रयास।
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-600 italic text-gray-700">
                "जीवन केवल जीने के लिए नहीं, बल्कि सही दिशा में जागृत होकर जीने के लिए है।"
                <span className="block mt-2 font-bold text-amber-900 not-italic text-sm">— नलिन दादा</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img src="https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80&w=800" alt="Dr. Nalin Pandya" className="rounded-2xl shadow-2xl border-4 border-white" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-amber-600 font-bold mb-2 text-center uppercase tracking-widest">About Nalin Dada</h3>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#5c0a0a] mb-8 text-center">एक जीवन समर्पित मानव कल्याण के लिए</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg text-center">
                <p>
                  नलिन दादा (डॉ. नलिन पांड्या) एक आध्यात्मिक मार्गदर्शक, ज्योतिषी, उपचारक, लेखक और मानव जीवन के समग्र विकास के लिए समर्पित साधक हैं। वैदिक ज्ञान, ज्योतिष, आयुर्वेद, मंत्र-तंत्र और प्राकृतिक उपचार पद्धतियों के माध्यम से वे लोगों को शारीरिक, मानसिक, आध्यात्मिक और सामाजिक जीवन में संतुलन और सही दिशा प्राप्त करने में मार्गदर्शन देते हैं।
                </p>
                <p>
                  उनकी यात्रा 1981 में शुरू हुई जब वे गायत्री संत शांतिलाल महाराज के सानिध्य में आए। वहाँ से शुरू हुई उनकी साधना आज लाखों लोगों के जीवन में प्रकाश फैला रही है। उन्होंने नर्मदा के तट पर पीतांबरा पीठ आश्रम की स्थापना की, जो आज शांति और अध्यात्म का केंद्र है।
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#5c0a0a] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm opacity-80 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-[#fdf8f3]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#5c0a0a] mb-16 text-center">आध्यात्मिक यात्रा</h2>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-amber-200 hidden lg:block"></div>
            
            <div className="space-y-24">
              {[
                { year: '1981', title: 'गायत्री संत शांतिलाल महाराज से जुड़ाव', text: 'वर्ष 1981 में गायत्री संत शांतिलाल महाराज के सानिध्य में आध्यात्मिक जीवन की प्रेरणा मिली।' },
                { year: '1995', title: 'पीतांबरा पीठ का पुनरुद्धार', text: 'नर्मदा तट पर गायत्री संत शांतिलाल महाराज के मार्गदर्शन में पीतांबरा पीठ के पुनरुद्धार का कार्य शुरू किया गया।' },
                { year: '2005', title: 'ज्ञान का प्रसार', text: 'देश-विदेश में प्रवचन, शिविर, आध्यात्मिक मार्गदर्शन और उपचार पद्धतियों के माध्यम से जीवन में सकारात्मक परिवर्तन।' },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="lg:w-1/2 text-center lg:text-left">
                    <div className="inline-block px-6 py-2 bg-amber-600 text-white font-bold rounded-full mb-4">{item.year}</div>
                    <h4 className="text-2xl font-bold text-[#5c0a0a] mb-4">{item.title}</h4>
                    <p className="text-gray-700">{item.text}</p>
                  </div>
                  <div className="lg:w-1/2">
                    <img src={`https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=600&h=400&sig=${index}`} alt={item.title} className="rounded-2xl shadow-xl w-full object-cover" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#5c0a0a] mb-8">ज्ञान, साधना और सेवा का समन्वय</h2>
            <Link to="/books" className="bg-[#5c0a0a] text-white px-10 py-4 rounded-md font-bold hover:bg-[#7a0d0d] transition-all inline-flex items-center gap-2 shadow-lg">
              नलिन दादा की पुस्तकें देखें <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
