import React, { useState, useEffect } from "react";
import { Phone, Menu, X, Facebook, MapPin, Clock } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoUrl = "https://i.ibb.co/ds93DgM1/490019167-122209522196167082-5260784584305499690-n.jpg";

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-zinc-950 text-zinc-400 text-xs py-2 px-4 border-b border-zinc-900 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-sans">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-red-600" />
              Lokalizacja: <strong className="text-zinc-200">Jabłonna – Legionowo (Mazowieckie)</strong>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-red-600" />
              Dostępność: <strong className="text-zinc-200">Skup Aut 24h / 7 dni w tygodniu</strong>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61555012460527"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors flex items-center gap-1"
            >
              <Facebook className="w-3.5 h-3.5 text-blue-500 fill-blue-500" />
              Nasza społeczność
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        id="navbar"
        className={`sticky top-0 z-50 transition-all duration-300 font-display ${
          isScrolled
            ? "bg-zinc-950/95 backdrop-blur-md shadow-lg border-b border-zinc-900 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with backup layout */}
          <a href="#hero" className="flex items-center space-x-3 group">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-red-600 bg-zinc-900 flex-shrink-0 transition-transform group-hover:scale-105 duration-300">
              <img
                src={logoUrl}
                alt="SKUP AUT 24h Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-wider text-white group-hover:text-red-500 transition-colors flex items-center gap-1">
                SKUP AUT <span className="text-red-600">24H</span>
              </span>
              <p className="text-[10px] text-zinc-400 font-sans tracking-widest uppercase -mt-1 font-semibold">
                Jabłonna - Legionowo
              </p>
            </div>
          </a>

          {/* Desktop Nav links */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold tracking-wide uppercase text-zinc-300">
            <a href="#hero" className="hover:text-red-500 transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-red-600 hover:after:w-full after:transition-all">Start</a>
            <a href="#o-nas" className="hover:text-red-500 transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-red-600 hover:after:w-full after:transition-all">O nas</a>
            <a href="#oferta" className="hover:text-red-500 transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-red-600 hover:after:w-full after:transition-all">Co skupujemy</a>
            <a href="#dlaczego-my" className="hover:text-red-500 transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-red-600 hover:after:w-full after:transition-all">Dlaczego my</a>
            <a href="#jak-dzialamy" className="hover:text-red-500 transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-red-600 hover:after:w-full after:transition-all">Jak to działa</a>
            <a href="#obszar" className="hover:text-red-500 transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-red-600 hover:after:w-full after:transition-all">Działanie</a>
            <a href="#kontakt" className="hover:text-red-500 transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-red-600 hover:after:w-full after:transition-all">Kontakt</a>
          </nav>

          {/* Desktop quick call CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="tel:723718187"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-lg font-bold text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 hover:scale-102 border border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]"
            >
              <Phone className="w-4 h-4 fill-white" />
              723 718 187
            </a>
          </div>

          {/* Mobile menu trigger button */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href="tel:723718187"
              className="bg-red-600 text-white p-2.5 rounded-lg block sm:hidden"
              title="Zadzwoń teraz"
            >
              <Phone className="w-5 h-5 fill-white" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-red-500 p-2 rounded-lg bg-zinc-900 border border-zinc-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {isOpen && (
          <div className="lg:hidden bg-zinc-950/98 backdrop-blur-lg border-b border-zinc-900 text-center py-6 px-4 absolute top-full left-0 w-full shadow-2xl transition-all font-display animate-fadeIn">
            <nav className="flex flex-col space-y-4 text-sm font-semibold tracking-wide uppercase text-zinc-300">
              <a
                href="#hero"
                onClick={() => setIsOpen(false)}
                className="hover:text-red-500 py-2 border-b border-zinc-900/40"
              >
                Start
              </a>
              <a
                href="#o-nas"
                onClick={() => setIsOpen(false)}
                className="hover:text-red-500 py-2 border-b border-zinc-900/40"
              >
                O nas
              </a>
              <a
                href="#oferta"
                onClick={() => setIsOpen(false)}
                className="hover:text-red-500 py-2 border-b border-zinc-900/40"
              >
                Co skupujemy
              </a>
              <a
                href="#dlaczego-my"
                onClick={() => setIsOpen(false)}
                className="hover:text-red-500 py-2 border-b border-zinc-900/40"
              >
                Dlaczego my
              </a>
              <a
                href="#jak-dzialamy"
                onClick={() => setIsOpen(false)}
                className="hover:text-red-500 py-2 border-b border-zinc-900/40"
              >
                Jak to działa
              </a>
              <a
                href="#obszar"
                onClick={() => setIsOpen(false)}
                className="hover:text-red-500 py-2 border-b border-zinc-900/40"
              >
                Obszar działania
              </a>
              <a
                href="#kontakt"
                onClick={() => setIsOpen(false)}
                className="hover:text-red-500 py-2"
              >
                Kontakt
              </a>
            </nav>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto">
              <a
                href="tel:723718187"
                className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(239,68,68,0.3)]"
              >
                <Phone className="w-4 h-4 fill-white" />
                723 718 187
              </a>
              <a
                href="tel:661797270"
                className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white py-3 rounded-lg font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 fill-white" />
                661 797 270
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
