/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Categories from "./components/Categories";
import WhyUs from "./components/WhyUs";
import Steps from "./components/Steps";
import Area from "./components/Area";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Phone } from "lucide-react";

export default function App() {
  const [showFloatingCall, setShowFloatingCall] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowFloatingCall(true);
      } else {
        setShowFloatingCall(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen selection:bg-red-600 selection:text-white">
      {/* Navigation Header */}
      <Header />

      {/* Hero Banner Area */}
      <Hero />

      {/* About Section ("O nas") */}
      <AboutUs />

      {/* What We Buy ("Co skupujemy") */}
      <Categories />

      {/* Why Choose Us ("Dlaczego warto nas wybrać") */}
      <WhyUs />

      {/* Stepper process ("Jak wygląda sprzedaż") */}
      <Steps />

      {/* Service Area Map Pinpoint check ("Obszar działania") */}
      <Area />

      {/* Contact Section ("Kontakt") */}
      <Contact />

      {/* Standard Footing details */}
      <Footer />

      {/* Sticky Floating Call CTA for conversions on mobile */}
      {showFloatingCall && (
        <a
          href="tel:723718187"
          className="fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-700 text-white p-4 sm:px-5 sm:py-3.5 rounded-full sm:rounded-xl shadow-[0_0_25px_rgba(239,68,68,0.5)] flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all duration-300 animate-bounce cursor-pointer font-display font-black uppercase text-sm"
          title="Zadzwoń i sprzedaj auto od ręki"
        >
          <Phone className="w-5 h-5 fill-white" />
          <span className="hidden sm:inline tracking-wider">723 718 187</span>
        </a>
      )}
    </div>
  );
}

