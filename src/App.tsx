import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Appointment from "./pages/Appointment";
import Ashram from "./pages/Ashram";
import Books from "./pages/Books";
import Home from "./pages/Home";
import Services from "./pages/Services";

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <div className="min-h-screen bg-[#fffdf9] text-[#3e342d]">
      <Navbar />
      <main>
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
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
