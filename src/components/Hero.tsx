import React from "react";
import { Phone, Mail, ShieldCheck, Banknote, Clock } from "lucide-react";

export default function Hero() {
  const bgImage = "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1920&auto=format&fit=crop";

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Image with Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Premium Dark Sports Car Background"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.35]"
        />
        {/* Modern dark radial and linear gradients to blend the design */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-zinc-950/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50"></div>
        {/* Sporty red neon-like background lighting block */}
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center space-y-8 flex flex-col items-center animate-fadeIn">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/35 px-4 py-1.5 rounded-full text-red-500 text-xs sm:text-sm font-bold uppercase tracking-wider font-display animate-pulse">
          <span className="w-2 h-2 rounded-full bg-red-500"></span>
          Infolinia czynna całodobowo 24h / 7 dni
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6.5xl font-black font-display tracking-tight text-white leading-[1.1] uppercase">
            Kupimy <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 text-glow">Twoje Auto!</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-300 font-sans font-light max-w-2xl mx-auto leading-relaxed">
            Skup samochodów za gotówkę od ręki na terenie województwa mazowieckiego.
            Gwarantujemy uczciwe ceny, bezpłatny dojazd oraz minimum formalności.
          </p>
        </div>

        {/* Highlighting prompt block */}
        <div className="bg-zinc-900/80 border-l-4 border-red-600 p-5 rounded-r-xl max-w-2xl backdrop-blur-sm shadow-xl text-left">
          <p className="text-white text-base sm:text-lg font-bold font-display tracking-wide uppercase">
            🏆 Za samochody w dobrym stanie płacimy więcej!
          </p>
          <p className="text-zinc-400 text-xs sm:text-sm font-sans mt-1">
            Skontaktuj się z nami telefonicznie. Kupujemy pojazdy sprawne, zadbane, a także powypadkowe i uszkodzone.
          </p>
        </div>

        {/* High-Impact CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center w-full max-w-md">
          <a
            href="tel:723718187"
            className="bg-red-600 hover:bg-red-700 text-white font-display font-extrabold text-base tracking-widest uppercase px-8 py-4.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group hover:scale-103 shadow-[0_0_30px_rgba(239,68,68,0.45)] w-full"
          >
            <Phone className="w-5 h-5 fill-white group-hover:rotate-12 transition-transform" />
            Zadzwoń Teraz
          </a>
          <a
            href="mailto:skup.aut24h@op.pl"
            className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 text-white font-display font-bold text-base tracking-widest uppercase px-8 py-4.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 w-full"
          >
            <Mail className="w-5 h-5 text-red-500" />
            Napisz E-mail
          </a>
        </div>

        {/* Quick Value trust badges */}
        <div className="grid grid-cols-3 gap-4 pt-6 max-w-xl w-full border-t border-zinc-900/80 text-zinc-400 justify-center">
          <div className="flex items-center gap-2 text-xs sm:text-sm justify-center">
            <Banknote className="w-5 h-5 text-red-500 flex-shrink-0" />
            <span>Gotówka do rąk</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm justify-center">
            <ShieldCheck className="w-5 h-5 text-red-500 flex-shrink-0" />
            <span>Pełne bezpieczeństwo</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm justify-center">
            <Clock className="w-5 h-5 text-red-500 flex-shrink-0" />
            <span>Dojazd w 1h</span>
          </div>
        </div>
      </div>
    </section>
  );
}
