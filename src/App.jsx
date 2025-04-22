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
import WebDesign from "./WebDesign.jsx";
import Contact from "./Contact.jsx";
import { Background } from "./Background.jsx";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Background />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/webdesign" element={<WebDesign />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
