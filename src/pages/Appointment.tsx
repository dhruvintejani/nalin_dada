import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Clock, MapPin, MessageCircle, Info, Calendar, ArrowRight, CheckCircle } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'नाम कम से कम 2 अक्षरों का होना चाहिए' }),
  mobile: z.string().regex(/^[0-9]{10}$/, { message: 'कृपया एक वैध 10-अंकीय मोबाइल नंबर दर्ज करें' }),
  city: z.string().min(2, { message: 'शहर का नाम आवश्यक है' }),
  service: z.string().min(1, { message: 'कृपया एक सेवा चुनें' }),
  date: z.string().min(1, { message: 'कृपया तिथि चुनें' }),
  timeSlot: z.string().min(1, { message: 'कृपया समय स्लॉट चुनें' }),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const Appointment = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert('आपका अनुरोध प्राप्त हो गया है। हम जल्द ही आपसे संपर्क करेंगे।');
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#fdf8f3] py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <span>ज्योतिष</span>
                <span>•</span>
                <span>आध्यात्मिक मार्गदर्शन</span>
                <span>•</span>
                <span>जीवन के लिए सकारात्मक उपाय</span>
              </nav>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-[#5c0a0a] mb-6">अपॉइंटमेंट एवं संपर्क</h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                नलिन दादा से व्यक्तिगत परामर्श के लिए अपॉइंटमेंट बुक करें या व्हाट्सएप के माध्यम से हमसे संपर्क करें। आपके प्रश्न, जीवन की चुनौतियां और मार्गदर्शन के लिए हम सदैव उपलब्ध हैं।
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#5c0a0a] text-white px-8 py-3 rounded-md font-bold hover:bg-[#7a0d0d] transition-all flex items-center gap-2 shadow-md">
                  <Calendar size={18} /> अपॉइंटमेंट बुक करें <ArrowRight size={18} />
                </button>
                <button className="bg-white border-2 border-amber-200 text-amber-900 px-8 py-3 rounded-md font-bold hover:bg-amber-50 transition-all flex items-center gap-2">
                  संपर्क विवरण देखें
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <img src="https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80&w=800" alt="Contact Hero" className="rounded-2xl shadow-2xl border-4 border-white" />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl border-l-4 border-amber-600 max-w-[280px]">
                <p className="text-amber-900 font-serif italic text-sm mb-2">
                  "सही दिशा में उठाया गया एक छोटा सा कदम भी जीवन में बड़ा परिवर्तन ला सकता है।"
                </p>
                <p className="text-right text-xs font-bold text-gray-500">— डॉ. नलिन पण्ड्या</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing and Quick Info */}
      <section className="py-12 bg-white -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-amber-600 flex items-center gap-4">
              <div className="bg-amber-100 text-amber-700 p-3 rounded-full text-2xl font-serif">₹</div>
              <div>
                <h4 className="text-gray-500 text-xs uppercase font-bold">परामर्श शुल्क</h4>
                <div className="text-2xl font-bold text-[#5c0a0a]">₹ 1100</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-amber-600 flex items-center gap-4">
              <div className="bg-amber-100 text-amber-700 p-3 rounded-full"><MessageCircle size={24} /></div>
              <div>
                <h4 className="text-gray-500 text-xs uppercase font-bold">केवल व्हाट्सएप</h4>
                <div className="text-sm font-bold text-[#5c0a0a]">त्वरित जानकारी प्राप्त करें</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-amber-600 flex items-center gap-4">
              <div className="bg-amber-100 text-amber-700 p-3 rounded-full"><Info size={24} /></div>
              <div>
                <h4 className="text-gray-500 text-xs uppercase font-bold">गोपनीयता</h4>
                <div className="text-sm font-bold text-[#5c0a0a]">100% सुरक्षित और निजी</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-amber-600 flex items-center gap-4">
              <div className="bg-amber-100 text-amber-700 p-3 rounded-full"><CheckCircle size={24} /></div>
              <div>
                <h4 className="text-gray-500 text-xs uppercase font-bold">व्यक्तिगत परामर्श</h4>
                <div className="text-sm font-bold text-[#5c0a0a]">विशेष और विस्तृत सत्र</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form and Side Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Form */}
            <motion.div 
              className="lg:w-2/3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-10">
                <h2 className="text-3xl font-serif font-bold text-[#5c0a0a] mb-2 italic">अपॉइंटमेंट बुक करें</h2>
                <p className="text-gray-600">कृपया नीचे दिए गए विवरण भरें और व्हाट्सएप के माध्यम से अपना अपॉइंटमेंट अनुरोध भेजें।</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-[#fdf8f3] p-8 lg:p-12 rounded-3xl border border-amber-100 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">आपका नाम <span className="text-red-500">*</span></label>
                    <input 
                      {...register('name')}
                      placeholder="अपना नाम दर्ज करें"
                      className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-amber-500 outline-none transition-all ${errors.name ? 'border-red-500' : 'border-amber-200'}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">मोबाइल नंबर <span className="text-red-500">*</span></label>
                    <input 
                      {...register('mobile')}
                      placeholder="अपना मोबाइल नंबर दर्ज करें"
                      className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-amber-500 outline-none transition-all ${errors.mobile ? 'border-red-500' : 'border-amber-200'}`}
                    />
                    {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">शहर <span className="text-red-500">*</span></label>
                    <input 
                      {...register('city')}
                      placeholder="अपना शहर दर्ज करें"
                      className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-amber-500 outline-none transition-all ${errors.city ? 'border-red-500' : 'border-amber-200'}`}
                    />
                    {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">सेवा का चयन करें <span className="text-red-500">*</span></label>
                    <select 
                      {...register('service')}
                      className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-amber-500 outline-none transition-all ${errors.service ? 'border-red-500' : 'border-amber-200'}`}
                    >
                      <option value="">सेवा चुनें</option>
                      <option value="ज्योतिष">ज्योतिष परामर्श</option>
                      <option value="हस्तरेखा">हस्तरेखा विश्लेषण</option>
                      <option value="अंक ज्योतिष">अंक ज्योतिष</option>
                      <option value="समग्र उपचार">समग्र उपचार</option>
                    </select>
                    {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">पसंदीदा तिथि <span className="text-red-500">*</span></label>
                    <input 
                      type="date"
                      {...register('date')}
                      className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-amber-500 outline-none transition-all ${errors.date ? 'border-red-500' : 'border-amber-200'}`}
                    />
                    {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">पसंदीदा समय <span className="text-red-500">*</span></label>
                    <select 
                      {...register('timeSlot')}
                      className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-amber-500 outline-none transition-all ${errors.timeSlot ? 'border-red-500' : 'border-amber-200'}`}
                    >
                      <option value="">समय चुनें</option>
                      <option value="10-12">सुबह 10:00 - 12:00</option>
                      <option value="12-2">दोपहर 12:00 - 02:00</option>
                      <option value="4-6">शाम 04:00 - 06:00</option>
                    </select>
                    {errors.timeSlot && <p className="text-red-500 text-xs mt-1">{errors.timeSlot.message}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">अपना संदेश / समस्या लिखें</label>
                  <textarea 
                    {...register('message')}
                    rows={4}
                    placeholder="कृपया अपने प्रश्न, समस्या या परामर्श का उद्देश्य यहाँ लिखें..."
                    className="w-full p-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button 
                    type="submit"
                    disabled={!isValid}
                    className={`bg-[#008a4e] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#00703e] transition-all shadow-xl inline-flex items-center gap-2 ${!isValid ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <MessageCircle size={22} /> व्हाट्सएप पर अपॉइंटमेंट भेजें <ArrowRight size={22} />
                  </button>
                  <p className="text-xs text-gray-500 mt-4">इस बटन पर क्लिक करते ही आपके द्वारा भरे गए विवरण के साथ व्हाट्सएप खुलेगा, जहाँ आप हमें संदेश भेज सकते हैं।</p>
                </div>
              </form>
            </motion.div>

            {/* Contact Side Info */}
            <motion.div 
              className="lg:w-1/3 space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Consultation Office */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-amber-50">
                <div className="bg-amber-600 text-white p-6 flex justify-between items-center">
                  <h4 className="text-xl font-bold">परामर्श कार्यालय</h4>
                  <MapPin size={24} />
                </div>
                <div className="p-6">
                  <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=400" alt="Office" className="rounded-xl mb-6 h-48 w-full object-cover" />
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <MapPin className="text-amber-600 shrink-0" size={20} />
                      <p className="text-sm text-gray-700">123, शांतिनगर, एस.जी. हाईवे के पास, अहमदाबाद - 380015, गुजरात</p>
                    </div>
                    <div className="flex gap-3 text-sm">
                      <Clock className="text-amber-600 shrink-0" size={20} />
                      <div>
                        <p className="font-bold">भेंट का समय</p>
                        <p>सोमवार से शनिवार</p>
                        <p>सुबह 10:00 बजे - शाम 6:00 बजे तक</p>
                      </div>
                    </div>
                  </div>
                  <button className="w-full mt-6 bg-[#5c0a0a] text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2">
                    <MapPin size={18} /> मैप में देखें
                  </button>
                </div>
              </div>

              {/* Ashram Info */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-amber-50">
                <div className="bg-amber-800 text-white p-6 flex justify-between items-center">
                  <h4 className="text-xl font-bold">आश्रम</h4>
                  <MapPin size={24} />
                </div>
                <div className="p-6">
                  <img src="https://images.unsplash.com/photo-1603566592036-6e47b310e6e7?auto=format&fit=crop&q=80&w=400" alt="Ashram" className="rounded-xl mb-6 h-48 w-full object-cover" />
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <MapPin className="text-amber-600 shrink-0" size={20} />
                      <p className="text-sm text-gray-700">नर्मदा तट, ग्राम सेवाश्रम, अहमदाबाद जिला, गुजरात</p>
                    </div>
                    <div className="flex gap-3 text-sm">
                      <Clock className="text-amber-600 shrink-0" size={20} />
                      <div>
                        <p className="font-bold">भेंट का समय</p>
                        <p>प्रत्येक रविवार</p>
                        <p>सुबह 9:00 बजे - शाम 5:00 बजे तक</p>
                      </div>
                    </div>
                  </div>
                  <button className="w-full mt-6 bg-[#5c0a0a] text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2">
                    <MapPin size={18} /> मैप में देखें
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Appointment Process */}
      <section className="py-20 bg-[#fdf8f3]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-[#5c0a0a] mb-16 text-center italic">अपॉइंटमेंट बुकिंग प्रक्रिया</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'फॉर्म भरें', desc: 'ऊपर दिया गया फॉर्म ध्यानपूर्वक भरें और आवश्यक विवरण दर्ज करें।' },
              { step: '2', title: 'व्हाट्सएप खुलेगा', desc: 'बटन पर क्लिक करते ही आपके विवरण के साथ व्हाट्सएप खुलेगा।' },
              { step: '3', title: 'संदेश भेजें', desc: 'अपना संदेश भेज दें। यदि आवश्यक हो तो अतिरिक्त जानकारी भी साझा करें।' },
              { step: '4', title: 'पुष्टि प्राप्त करें', desc: 'हम आपके संदेश की समीक्षा करके आपको अपॉइंटमेंट की पुष्टि करेंगे।' },
            ].map((step, i) => (
              <div key={i} className="relative text-center p-8 bg-white rounded-2xl shadow-sm border border-amber-100">
                <div className="bg-[#5c0a0a] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h4 className="text-xl font-bold text-[#5c0a0a] mb-4">{step.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                {i < 3 && <div className="hidden lg:block absolute top-12 -right-4 text-amber-300"><ArrowRight size={24} /></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Tips */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-serif font-bold text-[#5c0a0a] mb-12 text-center italic">महत्वपूर्ण जानकारी एवं सुझाव</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-amber-50 flex gap-4">
              <Calendar className="text-amber-600 shrink-0" size={24} />
              <div>
                <h4 className="font-bold mb-2">अपॉइंटमेंट पुष्टि</h4>
                <p className="text-sm text-gray-600 leading-relaxed">आपका अपॉइंटमेंट व्हाट्सएप के माध्यम से पुष्टि किया जाएगा। कृपया पुष्टि मिलने तक अपनी तिथि निश्चित न मानें।</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-amber-50 flex gap-4">
              <Info className="text-amber-600 shrink-0" size={24} />
              <div>
                <h4 className="font-bold mb-2">परामर्श की प्रकृति</h4>
                <p className="text-sm text-gray-600 leading-relaxed">यह व्यक्तिगत परामर्श है और ज्योतिष, आध्यात्मिक मार्गदर्शन एवं जीवन से संबंधित प्रश्नों के लिए है।</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-amber-50 flex gap-4">
              <Clock className="text-amber-600 shrink-0" size={24} />
              <div>
                <h4 className="font-bold mb-2">समय पर पहुँचें</h4>
                <p className="text-sm text-gray-600 leading-relaxed">कृपया निर्धारित समय से 10-15 मिनट पहले पहुँचें ताकि आपका समय सुव्यवस्थित रूप से उपयोग हो सके।</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-amber-50 flex gap-4">
              <CheckCircle className="text-amber-600 shrink-0" size={24} />
              <div>
                <h4 className="font-bold mb-2">साथ में लाएं</h4>
                <p className="text-sm text-gray-600 leading-relaxed">यदि आपके पास जन्म विवरण, प्रश्नों की सूची या संबंधित जानकारी हो तो कृपया साथ लाएं, इससे परामर्श अधिक सार्थक होगा।</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#5c0a0a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6 italic">आज ही अपना अपॉइंटमेंट बुक करें</h2>
          <p className="text-lg opacity-80 mb-10 max-w-2xl mx-auto">नलिन दादा से व्यक्तिगत मार्गदर्शन प्राप्त करें और अपने जीवन में सकारात्मक परिवर्तन की दिशा में कदम बढ़ाएं।</p>
          <a href="#" className="bg-[#008a4e] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#00703e] transition-all shadow-xl inline-flex items-center gap-2">
            <MessageCircle size={22} /> व्हाट्सएप पर अपॉइंटमेंट भेजें
          </a>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
