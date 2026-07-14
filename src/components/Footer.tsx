import React from "react";
import { Facebook, MapPin, Phone, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-zinc-900 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Brand details */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center space-x-3">
            <span className="text-xl font-black font-display tracking-wider text-white">
              SKUP AUT <span className="text-red-600">24H</span>
            </span>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed font-light">
            Profesjonalny i legalny skup samochodów za gotówkę od ręki. Działamy na terenie Jabłonny, Legionowa oraz całego województwa mazowieckiego. Darmowy dojazd lawetą i rzetelna wycena w 15 minut!
          </p>
          {/* Facebook Link */}
          <div className="flex space-x-3 pt-2">
            <a
              href="https://www.facebook.com/profile.php?id=61555012460527"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-red-600 border border-zinc-800 text-white flex items-center justify-center transition-all hover:scale-105"
              title="Obserwuj nas na Facebooku"
            >
              <Facebook className="w-4 h-4 fill-white text-blue-600 border-none" />
            </a>
          </div>
        </div>

        {/* Quicklinks */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-white font-bold font-display uppercase tracking-wider text-xs">Szybkie Linki</h4>
          <ul className="space-y-2.5 text-xs font-semibold uppercase tracking-wide">
            <li><a href="#hero" className="hover:text-red-500 transition-colors">Strona Główna</a></li>
            <li><a href="#o-nas" className="hover:text-red-500 transition-colors">O firmie</a></li>
            <li><a href="#oferta" className="hover:text-red-500 transition-colors">Co skupujemy</a></li>
            <li><a href="#dlaczego-my" className="hover:text-red-500 transition-colors">Dlaczego warto</a></li>
            <li><a href="#jak-dzialamy" className="hover:text-red-500 transition-colors">Jak sprzedać auto</a></li>
            <li><a href="#obszar" className="hover:text-red-500 transition-colors">Gdzie skupujemy</a></li>
            <li><a href="#kontakt" className="hover:text-red-500 transition-colors">Kontakt</a></li>
          </ul>
        </div>

        {/* Location list */}
        <div className="md:col-span-5 space-y-4">
          <h4 className="text-white font-bold font-display uppercase tracking-wider text-xs">Główny Obszar Działania</h4>
          <p className="text-xs text-zinc-400 leading-relaxed font-light">
            Nasi przedstawiciele z gotówką są stale obecni w powiatach: legionowskim, warszawskim, piaseczyńskim, wołomińskim, pruszkowskim, nowodworskim i okolicznych miastach Mazowsza.
          </p>
          <div className="flex flex-col space-y-2 text-xs font-semibold text-zinc-300">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
              Siedziba: Jabłonna – Legionowo (Mazowieckie)
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
              Infolinia 24h: 723 718 187 | 661 797 270
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
              E-mail: skup.aut24h@op.pl
            </span>
          </div>
        </div>
      </div>

      {/* Sub-footer copyright */}
      <div className="max-w-7xl mx-auto border-t border-zinc-900 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
        <div>
          © {currentYear} <strong>SKUP AUT 24h</strong> (Jabłonna - Legionowo). Wszelkie prawa zastrzeżone.
        </div>
        <div className="flex items-center gap-6">
          <a href="#hero" className="flex items-center gap-1 hover:text-white transition-colors uppercase font-bold text-[10px] tracking-wider">
            Do góry
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
