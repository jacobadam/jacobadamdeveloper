import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./Nav";
import Footer from "./Footer";
import NotFound from "./NotFound";
import RedirectHandler from "./RedirectHandler.js";

const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));
const Services = React.lazy(() => import("./Services"));
const Portfolio = React.lazy(() => import("./Portfolio"));
const Contact = React.lazy(() => import("./Contact"));

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <RedirectHandler />
        <Nav />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}
