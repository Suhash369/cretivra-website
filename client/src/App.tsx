import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import Press from "./pages/Press";
import Blog from "./pages/Blog";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Global Root Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/press" element={<Press />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/admin" element={<Admin />} />

        {/* Multi-Region Subfolder Dynamic Routes */}
        <Route path="/:region" element={<Home />} />
        <Route path="/:region/services" element={<Services />} />
        <Route path="/:region/industries" element={<Industries />} />
        <Route path="/:region/pricing" element={<Pricing />} />
        <Route path="/:region/about" element={<About />} />
        <Route path="/:region/contact" element={<Contact />} />
        <Route path="/:region/case-studies" element={<CaseStudies />} />
        <Route path="/:region/press" element={<Press />} />
        <Route path="/:region/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}
