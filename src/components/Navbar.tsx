import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import Brand from "./Brand";

const links = [
  { label: "मुख्य पृष्ठ", to: "/" },
  { label: "हमारे बारे में", to: "/about" },
  { label: "सेवाएँ", to: "/services" },
  { label: "पुस्तकें", to: "/books" },
  { label: "आश्रम", to: "/ashram" },
  { label: "अपॉइंटमेंट एवं संपर्क", to: "/appointment" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="premium-navbar sticky top-0 z-50 border-b border-[#eadfcd] bg-[#fffdf9]/95 backdrop-blur-md">
      <div className="site-shell flex h-[76px] items-center justify-between gap-5">
        <NavLink to="/" aria-label="Nalin Dada मुख्य पृष्ठ" className="shrink-0">
          <Brand />
        </NavLink>

        <nav className="hidden items-center gap-3 lg:flex xl:gap-5" aria-label="मुख्य नेविगेशन">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="language-switcher hidden items-center gap-2 xl:flex" aria-label="भाषा विकल्प">
          <span className="language-chip">English</span>
          <span className="language-divider">|</span>
          <span className="language-chip language-active">हिन्दी</span>
          <span className="language-divider">|</span>
          <span className="language-chip">ગુજરાતી</span>
        </div>

        <button
          type="button"
          className="nav-menu-button grid h-11 w-11 place-items-center rounded-full lg:hidden"
          aria-label={open ? "मेनू बंद करें" : "मेनू खोलें"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {open && (
        <div className="mobile-menu-surface fixed inset-x-0 top-[77px] z-50 h-[calc(100dvh-77px)] overflow-y-auto bg-[#fffdf9] lg:hidden">
          <div className="site-shell py-6">
            <nav className="grid gap-1" aria-label="मोबाइल नेविगेशन">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3.5 text-base font-semibold transition ${isActive ? "bg-[#8f181c] text-white" : "text-[#4d3b31] hover:bg-[#fbf2e5]"}`
                  }
                  end={link.to === "/"}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-6 flex items-center gap-3 border-t border-[#eadfcd] pt-5 text-sm">
              <span>English</span>
              <span className="text-[#b68a54]">|</span>
              <span className="font-bold text-[#9b151a]">हिन्दी</span>
              <span className="text-[#b68a54]">|</span>
              <span>ગુજરાતી</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
