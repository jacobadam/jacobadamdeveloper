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

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        <div className="fixed top-0 left-0 w-full overflow-hidden z-0">
          <video
            autoPlay
            loop
            muted
            className="object-cover w-full h-screen dark:hidden"
          >
            <source src="/whiteabstract.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            autoPlay
            loop
            muted
            className="object-cover w-full h-screen hidden dark:block"
          >
            <source src="/stars.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <Nav />

        <div className="relative z-1">
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
      </div>
    </Router>
  );
}
