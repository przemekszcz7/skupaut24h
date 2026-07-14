import React from "react";
import { Banknote, FileText, Sparkles, FileCheck, Zap, Truck, ShieldCheck } from "lucide-react";

export default function WhyUs() {
  const benefits = [
    {
      title: "Gotówka Od Ręki",
      desc: "Płatność gotówką natychmiast przy podpisaniu umowy lub szybki przelew natychmiastowy na konto.",
      icon: Banknote,
    },
    {
      title: "Darmowa Wycena",
      desc: "Dojazd pod wskazany adres oraz rzetelna wycena są u nas całkowicie bezpłatne i niezobowiązujące.",
      icon: FileText,
    },
    {
      title: "Uczciwe Podejście",
      desc: "Wyceniamy samochody zgodnie z ich realnym stanem i wartością rynkową, bez ukrytych opłat i haczyków.",
      icon: ShieldCheck,
    },
    {
      title: "Minimum Formalności",
      desc: "Przygotowujemy kompletną dokumentację. Wszystko załatwiamy na miejscu w 15 minut – oszczędzasz czas.",
      icon: FileCheck,
    },
    {
      title: "Szybka Realizacja",
      desc: "Szanujemy Twój czas. Od Twojego zgłoszenia do sfinalizowania transakcji mija często mniej niż godzina.",
      icon: Zap,
    },
    {
      title: "Dojazd Do Klienta",
      desc: "Działamy na terenie całego województwa mazowieckiego. Dojeżdżamy darmową lawetą w dogodnym terminie.",
      icon: Truck,
    },
    {
      title: "Więcej Za Zadbane Auta",
      desc: "Bardzo cenimy pojazdy w dobrym stanie technicznym i wizualnym. Płacimy za nie wyraźnie najwyższe stawki!",
      icon: Sparkles,
    },
  ];

  return (
    <section id="dlaczego-my" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 relative border-t border-zinc-900">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-red-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Title Block */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-full inline-block mb-3 border border-red-500/20">
            Nasz Profesjonalizm
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-white uppercase">
            Dlaczego warto <span className="text-red-500">wybrać właśnie nas?</span>
          </h2>
          <p className="text-zinc-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base font-sans">
            Wyróżniamy się rzetelnością i szybkością działania. Klient jest dla nas najważniejszy, dlatego dbamy o maksymalną przejrzystość na każdym etapie sprzedaży.
          </p>
        </div>

        {/* Benefits Grid (Responsive Bento-like layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            // The last item can span 2 columns on large screens to keep the grid balanced!
            const isLast = index === benefits.length - 1;
            return (
              <div
                key={index}
                className={`p-6 sm:p-8 rounded-xl bg-zinc-900 border border-zinc-800/80 hover:border-red-600/40 transition-all duration-300 ${
                  isLast ? "lg:col-span-1 xl:col-span-2 bg-gradient-to-r from-zinc-900 to-red-950/20 border-red-900/30" : ""
                }`}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    {/* Icon container */}
                    <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-800 text-red-500 inline-block mb-4">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-lg font-bold font-display uppercase text-white mb-2 tracking-wide">
                      {benefit.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans font-light">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
