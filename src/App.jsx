import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Brands from "./pages/Brands";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Order from "./pages/Order";

function App() {
  return (
    <div className="min-h-screen bg-[#f8f7f4] text-[#171717]">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;