import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Share2, Globe, Video, MessageCircle } from 'lucide-react';
import { cn } from '../utils/cn';

const Navbar = () => {
  const location = useLocation();
  
  const navLinks = [
    { name: 'मुख्य पृष्ठ', path: '/' },
    { name: 'हमारे बारे में', path: '/about' },
    { name: 'सेवाएं', path: '/services' },
    { name: 'पुस्तकें', path: '/books' },
    { name: 'आश्रम', path: '/ashram' },
    { name: 'अपॉइंटमेंट', path: '/appointment' },
    { name: 'संपर्क', path: '/contact' },
  ];

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[#5c0a0a] text-white py-1 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><Phone size={14} /> +91 98765 43210</span>
            <span className="flex items-center gap-1"><Mail size={14} /> info@nalinsir.in</span>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex gap-2">
              <Share2 size={14} />
              <Globe size={14} />
              <Video size={14} />
            </div>
            <div className="border-l border-white/30 pl-4 flex gap-3">
              <button className="hover:text-gold-400">English</button>
              <button className="text-gold-400 font-bold underline">हिन्दी</button>
              <button className="hover:text-gold-400">ગુજરાતી</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=100" alt="Logo" className="w-12 h-12 rounded-full border-2 border-amber-600" />
          <div>
            <h1 className="text-[#5c0a0a] text-2xl font-serif font-bold leading-tight">Nalin Sir</h1>
            <p className="text-[#a67c00] text-xs font-semibold tracking-widest">Dr. Nalin Pandya</p>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-bold transition-colors hover:text-amber-700",
                location.pathname === link.path ? "text-[#5c0a0a] border-b-2 border-[#5c0a0a]" : "text-gray-700"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link to="/appointment" className="hidden md:flex items-center gap-2 bg-[#008a4e] text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-[#00703e] transition-colors">
          <MessageCircle size={18} />
          व्हाट्सएप करें
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
