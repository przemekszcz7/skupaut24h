import React from "react";
import { Award, FileText } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="o-nas" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      <div className="absolute top-0 right-0 w-72 h-72 bg-red-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-3xl mx-auto text-center space-y-8 flex flex-col items-center animate-fadeIn">
        <span className="text-xs font-bold text-red-500 uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-full inline-block border border-red-500/20">
          Kim jesteśmy
        </span>
        <h2 className="text-3xl sm:text-4xl font-black font-display text-white uppercase tracking-tight">
          Profesjonalny <span className="text-red-500">skup samochodów</span>
        </h2>

        <div className="space-y-4 text-zinc-300 font-sans text-base sm:text-lg leading-relaxed font-light">
          <p className="font-semibold text-white">Szanowni Państwo,</p>
          <p>
            Oferujemy profesjonalny <strong>skup samochodów za gotówkę od ręki</strong> na terenie całego województwa mazowieckiego.
          </p>
          <p>
            Zapewniamy <strong>uczciwą i całkowicie darmową wycenę</strong>, szybki kontakt oraz minimum formalności. Naszym nadrzędnym celem jest sprawna i bezpieczna sprzedaż Twojego samochodu, dzięki czemu cały proces przebiega szybko i w pełni komfortowo.
          </p>
        </div>

        {/* Core Guarantees Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-zinc-900 w-full max-w-2xl">
          <div className="flex items-center gap-4 text-left">
            <div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800 text-red-500 flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-sm font-bold text-white block">Szybki kontakt</span>
              <span className="text-xs text-zinc-400 block">Odpowiadamy telefonicznie w kilka chwil</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-left">
            <div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800 text-red-500 flex-shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <span className="text-sm font-bold text-white block">Minimum formalności</span>
              <span className="text-xs text-zinc-400 block">My zajmujemy się wszystkimi dokumentami</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
