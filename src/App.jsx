import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import NotFound from "./NotFound.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Portfolio from "./Portfolio.jsx";
import Contact from "./Contact.jsx";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
