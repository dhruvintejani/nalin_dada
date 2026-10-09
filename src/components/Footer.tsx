import { Clock3, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { siteConfig } from "../config/site";
import Brand from "./Brand";

const footerLinks = [
  { key: "home", to: "/" },
  { key: "about", to: "/about" },
  { key: "services", to: "/services" },
  { key: "books", to: "/books" },
  { key: "ashram", to: "/ashram" },
  { key: "appointment", to: "/appointment" },
] as const;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#5A1115] text-[#f7efe1]">
      <div className="site-shell py-9">
        <div className="grid gap-8 border-b border-white/15 pb-8 lg:grid-cols-[1.1fr_1.35fr_1fr]">
          <div>
            <Brand inverse />
            <p className="mt-3 text-sm font-bold text-[#f0c275]">
              {t("common.institution.name")}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-[#ead8cf]">
              {t("common.footer.tagline")}
            </p>
          </div>

          <div>
            <h2 className="footer-title">{t("common.footer.quickLinks")}</h2>
            <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3 text-sm">
              {footerLinks.map((link) => (
                <Link key={link.to} to={link.to} className="footer-link">
                  {t(`common.nav.${link.key}`)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="footer-title">{t("common.footer.office")}</h2>
            <div className="mt-4 space-y-4 text-sm leading-6 text-[#ead8cf]">
              <p className="flex gap-3">
                <MapPin className="mt-1 shrink-0 text-[#e2aa51]" size={18} />
                <span>{siteConfig.officeAddress}</span>
              </p>
              <p className="flex gap-3">
                <Clock3 className="mt-1 shrink-0 text-[#e2aa51]" size={18} />
                <span>
                  {t("common.footer.appointmentText", {
                    days: t("common.appointment.days"),
                    morning: siteConfig.morningSlot,
                    evening: siteConfig.eveningSlot,
                  })}
                </span>
              </p>
              <div className="flex gap-3">
                <Phone className="mt-1 shrink-0 text-[#e2aa51]" size={18} />
                <div>
                  <p className="font-semibold text-[#f0c275]">
                    {t("common.footer.contactNumbers")}
                  </p>
                  <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                    {siteConfig.contactNumbers.map((number) => (
                      <a
                        key={number}
                        href={`tel:+91${number}`}
                        className="footer-link"
                      >
                        {number}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 text-xs text-[#d9c0b9]">
          <p>{t("common.footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
