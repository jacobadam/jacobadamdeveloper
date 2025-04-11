import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./Nav.js";
import Footer from "./Footer.js";
import NotFound from "./NotFound.js";
import Home from "./Home.js";
import About from "./About.js";
import Services from "./Services.js";
import Portfolio from "./Portfolio.js";
import Contact from "./Contact.js";

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
