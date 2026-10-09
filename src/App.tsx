import { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Books = lazy(() => import("./pages/Books"));
const Ashram = lazy(() => import("./pages/Ashram"));
const Appointment = lazy(() => import("./pages/Appointment"));

const PageLoader = () => {
  const { t } = useTranslation();

  return (
    <div className="page-loader" role="status" aria-live="polite" aria-busy="true">
      <div className="page-loader-content">
        <div className="page-loader-symbol" aria-hidden="true">
          <svg viewBox="0 0 64 48" fill="none">
            <path d="M32 43C23 35 21 24 32 8c11 16 9 27 0 35Z" fill="#c9872a" />
            <path d="M30 43C18 39 11 31 12 18c13 3 20 10 18 25Z" fill="#d89a3f" />
            <path d="M34 43c12-4 19-12 18-25-13 3-20 10-18 25Z" fill="#d89a3f" />
            <path d="M27 43C15 44 7 39 4 29c11-1 19 3 23 14Z" fill="#be7423" />
            <path d="M37 43c12 1 20-4 23-14-11-1-19 3-23 14Z" fill="#be7423" />
          </svg>
        </div>
        <span className="page-loader-text">{t("common.loader")}</span>
        <div className="page-loader-track" aria-hidden="true">
          <span />
        </div>
      </div>
    </div>
  );
};

const RoutedContent = () => {
  const location = useLocation();

  return (
    <Suspense key={location.pathname} fallback={<PageLoader />}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/books" element={<Books />} />
        <Route path="/ashram" element={<Ashram />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact" element={<Navigate to="/appointment" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <div className="min-h-screen bg-[#fffdf9] text-[#3e342d]">
      <Navbar />
      <main className="pt-[76px]">
        <RoutedContent />
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
