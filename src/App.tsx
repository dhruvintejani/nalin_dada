import { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
    <div className="page-loader" role="status" aria-live="polite">
      <div className="page-loader-mark" />
      <span>{t("common.loader")}</span>
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <div className="min-h-screen bg-[#fffdf9] text-[#3e342d]">
      <Navbar />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
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
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
