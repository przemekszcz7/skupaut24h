import React from "react";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/[0.02] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center space-y-8 flex flex-col items-center mb-12 animate-fadeIn">
        <span className="text-xs font-bold text-red-500 uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-full inline-block border border-red-500/20">
          Skontaktuj się
        </span>
        <h2 className="text-3xl sm:text-4xl font-black font-display text-white uppercase tracking-tight">
          Jesteśmy dostępni <span className="text-red-500">24H / 7 dni</span>
        </h2>
        <p className="text-zinc-400 font-sans font-light text-base sm:text-lg leading-relaxed max-w-2xl">
          Nasz skup działa bez przerwy. Skontaktuj się z nami o dowolnej porze dnia i nocy, a my błyskawicznie przygotujemy dla Ciebie najkorzystniejszą ofertę odkupu auta za gotówkę.
        </p>
      </div>

      {/* Structured Contact Details Grid - 4 Columns */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
        {/* Phone 1 Card */}
        <a
          href="tel:723718187"
          className="bg-zinc-900 hover:bg-zinc-900/80 border border-zinc-800 p-6 rounded-xl flex flex-col items-center text-center gap-4 transition-all hover:border-red-600/40"
        >
          <div className="bg-red-600 p-3.5 rounded-lg text-white">
            <Phone className="w-6 h-6 fill-white" />
          </div>
          <div>
            <span className="text-[10px] text-zinc-500 uppercase font-sans tracking-wider block">Telefon (główny)</span>
            <span className="text-lg font-bold font-display text-white block mt-1">723 718 187</span>
          </div>
        </a>

        {/* Phone 2 Card */}
        <a
          href="tel:661797270"
          className="bg-zinc-900 hover:bg-zinc-900/80 border border-zinc-800 p-6 rounded-xl flex flex-col items-center text-center gap-4 transition-all hover:border-red-600/40"
        >
          <div className="bg-red-600 p-3.5 rounded-lg text-white">
            <Phone className="w-6 h-6 fill-white" />
          </div>
          <div>
            <span className="text-[10px] text-zinc-500 uppercase font-sans tracking-wider block">Telefon (dodatkowy)</span>
            <span className="text-lg font-bold font-display text-white block mt-1">661 797 270</span>
          </div>
        </a>

        {/* Email Card */}
        <a
          href="mailto:skup.aut24h@op.pl"
          className="bg-zinc-900 hover:bg-zinc-900/80 border border-zinc-800 p-6 rounded-xl flex flex-col items-center text-center gap-4 transition-all hover:border-red-600/40"
        >
          <div className="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 text-red-500">
            <Mail className="w-6 h-6" />
          </div>
          <div className="w-full">
            <span className="text-[10px] text-zinc-500 uppercase font-sans tracking-wider block">Napisz e-mail</span>
            <span className="text-sm font-bold font-display text-white block truncate mt-1">skup.aut24h@op.pl</span>
          </div>
        </a>

        {/* Location Card */}
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl flex flex-col items-center text-center gap-4">
          <div className="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 text-red-500">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] text-zinc-500 uppercase font-sans tracking-wider block">Baza operacyjna</span>
            <span className="text-sm font-bold font-display text-white block mt-1">Jabłonna – Legionowo</span>
          </div>
        </div>
      </div>

      {/* Direct High-Impact Action buttons centered */}
      <div className="flex flex-wrap gap-4 justify-center max-w-2xl mx-auto pt-4 border-t border-zinc-900">
        {/* Zadzwoń Button */}
        <a
          href="tel:723718187"
          className="bg-red-600 hover:bg-red-700 text-white font-display font-extrabold text-xs sm:text-sm uppercase tracking-widest py-4 px-8 rounded-lg transition-colors flex items-center gap-2 shadow-lg"
        >
          <Phone className="w-4 h-4 fill-white" />
          Zadzwoń teraz
        </a>

        {/* Wyślij e-mail button */}
        <a
          href="mailto:skup.aut24h@op.pl"
          className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-display font-bold text-xs sm:text-sm uppercase tracking-widest py-4 px-8 rounded-lg transition-colors flex items-center gap-2"
        >
          <Mail className="w-4 h-4" />
          Wyślij e-mail
        </a>

        {/* Facebook Button */}
        <a
          href="https://www.facebook.com/profile.php?id=61555012460527"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-display font-bold text-xs sm:text-sm uppercase tracking-widest py-4 px-8 rounded-lg transition-colors flex items-center gap-2"
        >
          <Facebook className="w-4 h-4 fill-white" />
          Facebook
        </a>
      </div>
    </section>
  );
}
