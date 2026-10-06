import { Phone, Mail, MapPin, Share2, Globe, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1a0f0a] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=100" alt="Logo" className="w-10 h-10 rounded-full border border-amber-500" />
              <div>
                <h2 className="text-xl font-serif font-bold">Nalin Sir</h2>
                <p className="text-[#a67c00] text-xs font-semibold">Dr. Nalin Pandya</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              अध्यात्मिक मार्गदर्शन, ज्योतिष, उपचार और आध्यात्मिक जीवन के माध्यम से लोगों के जीवन को नई दिशा देने का एक अनवरत प्रयास।
            </p>
            <div className="flex gap-4">
              <Share2 className="text-gray-400 hover:text-white cursor-pointer" size={20} />
              <Globe className="text-gray-400 hover:text-white cursor-pointer" size={20} />
              <Video className="text-gray-400 hover:text-white cursor-pointer" size={20} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-amber-600/30 pb-2 inline-block">त्वरित लिंक</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-amber-500 transition-colors">मुख्य पृष्ठ</Link></li>
              <li><Link to="/about" className="hover:text-amber-500 transition-colors">हमारे बारे में</Link></li>
              <li><Link to="/services" className="hover:text-amber-500 transition-colors">सेवाएं</Link></li>
              <li><Link to="/books" className="hover:text-amber-500 transition-colors">पुस्तकें</Link></li>
              <li><Link to="/ashram" className="hover:text-amber-500 transition-colors">आश्रम</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-amber-600/30 pb-2 inline-block">संपर्क विवरण</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-amber-500 shrink-0" size={18} />
                <span>आश्रम परिसर, नर्मदा तट के पास, अहमदाबाद - गुजरात</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-amber-500 shrink-0" size={18} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-amber-500 shrink-0" size={18} />
                <span>info@nalinsir.in</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-amber-600/30 pb-2 inline-block">अपॉइंटमेंट</h3>
            <p className="text-gray-400 text-sm mb-4">
              व्यक्तिगत परामर्श के लिए आज ही अपना अपॉइंटमेंट बुक करें।
            </p>
            <Link to="/appointment" className="inline-block bg-[#5c0a0a] text-white px-6 py-2 rounded font-bold text-sm hover:bg-[#7a0d0d] transition-colors">
              बुक करें
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-8 text-center text-xs text-gray-500">
          <p>© 2024 Dr. Nalin Pandya. सभी अधिकार सुरक्षित। एक स्वस्थ, अधिक सार्थक और आनंदमय जीवन की ओर मार्गदर्शन।</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
