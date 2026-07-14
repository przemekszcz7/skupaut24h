import React from "react";
import { Navigation } from "lucide-react";

export default function Area() {
  const keyLocations = [
    "Jabłonna", "Legionowo", "Warszawa", "Nowy Dwór Mazowiecki", "Serock", 
    "Wieliszew", "Wołomin", "Marki", "Pruszków", "Piaseczno", "Otwock", "Radzymin"
  ];

  return (
    <section id="obszar" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      <div className="absolute top-10 right-10 w-96 h-96 bg-red-600/[0.03] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center space-y-8 flex flex-col items-center animate-fadeIn">
        <span className="text-xs font-bold text-red-500 uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-full inline-block border border-red-500/20">
          Gdzie dojeżdżamy
        </span>
        <h2 className="text-3xl sm:text-4xl font-black font-display text-white uppercase tracking-tight">
          Działamy na terenie całego <span className="text-red-500">województwa mazowieckiego</span>
        </h2>
        <p className="text-zinc-300 text-base sm:text-lg font-sans font-light leading-relaxed max-w-3xl">
          Zapewniamy szybki i w pełni bezpłatny dojazd do klienta w każdym zakątku województwa. 
          Dzięki naszej bazie logistycznej w rejonie <strong>Jabłonna – Legionowo</strong>, jesteśmy w stanie dotrzeć do pobliskich miejscowości nawet w kilkadziesiąt minut!
        </p>

        <div className="bg-zinc-900/50 border border-zinc-800 p-6 sm:p-8 rounded-xl space-y-4 w-full max-w-3xl text-left">
          <h4 className="text-sm font-bold font-display uppercase text-zinc-200 tracking-wider flex items-center gap-2">
            <Navigation className="w-4 h-4 text-red-500" />
            Nasza ekspresowa strefa dojazdu (do 1h):
          </h4>
          <div className="flex flex-wrap gap-2 pt-2">
            {keyLocations.map((loc) => (
              <span
                key={loc}
                className="text-xs font-semibold px-4 py-2 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-300 transition-colors"
              >
                📍 {loc}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
