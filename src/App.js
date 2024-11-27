import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import Footer from "./Footer";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
