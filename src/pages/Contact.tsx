import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Share2, Globe, Video } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#5c0a0a] text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">हमसे संपर्क करें</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              किसी भी प्रश्न या जानकारी के लिए आप निम्न माध्यमों से हमसे संपर्क कर सकते हैं। हम आपकी सहायता के लिए सदैव तत्पर हैं।
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-[#fdf8f3] p-8 rounded-2xl border border-amber-100 text-center shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#008a4e] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MessageCircle size={30} />
              </div>
              <h4 className="text-lg font-bold text-[#5c0a0a] mb-2">व्हाट्सएप (प्राथमिक)</h4>
              <p className="text-xl font-bold text-gray-800 mb-4">+91 98765 43210</p>
              <a href="#" className="bg-[#008a4e] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#00703e] transition-colors inline-block">
                व्हाट्सएप पर संदेश भेजें
              </a>
            </motion.div>

            <motion.div 
              className="bg-[#fdf8f3] p-8 rounded-2xl border border-amber-100 text-center shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Phone size={30} />
              </div>
              <h4 className="text-lg font-bold text-[#5c0a0a] mb-2">फोन (केवल जानकारी के लिए)</h4>
              <p className="text-xl font-bold text-gray-800 mb-4">+91 98765 43210</p>
              <p className="text-xs text-gray-500">(सुबह 10 बजे - शाम 6 बजे)</p>
            </motion.div>

            <motion.div 
              className="bg-[#fdf8f3] p-8 rounded-2xl border border-amber-100 text-center shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-[#5c0a0a] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Mail size={30} />
              </div>
              <h4 className="text-lg font-bold text-[#5c0a0a] mb-2">ईमेल</h4>
              <p className="text-gray-800 mb-4 font-bold">info@nalindada.in</p>
              <p className="text-xs text-gray-500">हम आपको जवाब देने का प्रयास करेंगे।</p>
            </motion.div>

            <motion.div 
              className="bg-[#fdf8f3] p-8 rounded-2xl border border-amber-100 text-center shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-amber-800 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Clock size={30} />
              </div>
              <h4 className="text-lg font-bold text-[#5c0a0a] mb-2">संपर्क करने का समय</h4>
              <p className="text-gray-800 font-bold mb-4">सोमवार - शनिवार</p>
              <p className="text-xs text-gray-500">सुबह 10:00 बजे - शाम 6:00 बजे</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#fdf8f3]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-serif font-bold text-[#5c0a0a] mb-8">हमारे कार्यालय का पता</h2>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-amber-100 space-y-6">
                <div className="flex gap-4">
                  <div className="bg-amber-100 p-3 rounded-full self-start">
                    <MapPin className="text-amber-700" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">मुख्य कार्यालय</h4>
                    <p className="text-gray-700 leading-relaxed">
                      123, शांतिनगर, एस.जी. हाईवे के पास,<br />
                      अहमदाबाद - 380015, गुजरात
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 pt-6 border-t border-gray-100">
                  <div className="bg-amber-100 p-3 rounded-full self-start">
                    <Share2 className="text-amber-700" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4">सोशल मीडिया पर जुड़ें</h4>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-amber-600 hover:text-white transition-colors cursor-pointer">
                        <Share2 size={20} />
                      </div>
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-amber-600 hover:text-white transition-colors cursor-pointer">
                        <Globe size={20} />
                      </div>
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-amber-600 hover:text-white transition-colors cursor-pointer">
                        <Video size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl h-[400px] border-8 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117506.3905021286!2d72.5076255140625!3d23.022505000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fccd76111ac4828!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1709564287413!5m2!1sen!2sin" 
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-bold text-[#5c0a0a] mb-6">क्या आपके मन में कोई प्रश्न है?</h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
              हमें आपकी सहायता करने में खुशी होगी। कृपया व्हाट्सएप के माध्यम से हमसे बेझिझक संपर्क करें।
            </p>
            <a href="#" className="bg-[#008a4e] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#00703e] transition-all shadow-xl inline-flex items-center gap-2">
              <MessageCircle size={22} /> व्हाट्सएप पर संपर्क करें
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
