import { Clock3, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Brand from "./Brand";

const footerLinks = [
  { label: "मुख्य पृष्ठ", to: "/" },
  { label: "हमारे बारे में", to: "/about" },
  { label: "सेवाएँ", to: "/services" },
  { label: "पुस्तकें", to: "/books" },
  { label: "आश्रम", to: "/ashram" },
  { label: "अपॉइंटमेंट एवं संपर्क", to: "/appointment" },
];

const Footer = () => (
  <footer className="bg-[#123f37] text-[#f7efe1]">
    <div className="site-shell py-9">
      <div className="grid gap-8 border-b border-white/15 pb-8 lg:grid-cols-[1.1fr_1.35fr_1fr]">
        <div>
          <Brand inverse />
          <p className="mt-4 max-w-sm text-sm leading-7 text-[#d7dfd6]">
            ज्योतिष, आध्यात्मिक मार्गदर्शन, पारंपरिक ज्ञान और जीवनोपयोगी विचारों के माध्यम से संतुलित और सार्थक जीवन की दिशा।
          </p>
        </div>

        <div>
          <h2 className="footer-title">त्वरित लिंक</h2>
          <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3 text-sm">
            {footerLinks.map((link) => (
              <Link key={link.to} to={link.to} className="footer-link">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="footer-title">परामर्श कार्यालय</h2>
          <div className="mt-4 space-y-4 text-sm leading-6 text-[#d7dfd6]">
            <p className="flex gap-3">
              <MapPin className="mt-1 shrink-0 text-[#e2aa51]" size={18} />
              <span>
                18 Ushadeep Society, 1st Floor, next to H2 Seven Unisex Salon, near Regional Passport Office, Gulbai Tekra, Ahmedabad.
              </span>
            </p>
            <p className="flex gap-3">
              <Clock3 className="mt-1 shrink-0 text-[#e2aa51]" size={18} />
              <span>
                सोमवार–शनिवार: 11:00 AM–1:00 PM और 6:00 PM–8:00 PM · केवल अपॉइंटमेंट · रविवार बंद
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-6 text-xs text-[#c4d1ca] md:flex-row md:items-center md:justify-between">
        <p>© 2026 Nalin Dada. Dr. Nalin Pandya.</p>
        <p>आश्रम की लोकेशन सार्वजनिक नहीं है; विवरण आवश्यकता अनुसार व्यक्तिगत रूप से साझा किया जाता है।</p>
      </div>
    </div>
  </footer>
);

export default Footer;
