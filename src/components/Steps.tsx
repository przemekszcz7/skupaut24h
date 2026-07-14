import React from "react";
import { Phone, FileSearch, Handshake, ShieldCheck } from "lucide-react";

export default function Steps() {
  const stepItems = [
    {
      num: "01",
      title: "Kontakt Telefoniczny",
      desc: "Zadzwoń do nas na 723 718 187 lub wypełnij kalkulator wyceny online. Przedstawimy wstępną propozycję cenową.",
      icon: Phone,
    },
    {
      num: "02",
      title: "Bezpłatna Wycena",
      desc: "Umawiamy się na dogodny termin. Nasz rzeczoznawca przyjeżdża pod wskazany adres i dokonuje bezpłatnych oględzin.",
      icon: FileSearch,
    },
    {
      num: "03",
      title: "Ustalenie Warunków",
      desc: "Oferujemy ostateczną, korzystną kwotę odkupu. Po Twojej akceptacji przechodzimy do formalności – przygotowujemy bezpieczną umowę.",
      icon: Handshake,
    },
    {
      num: "04",
      title: "Gotówka I Odbiór",
      desc: "Podpisujemy dokumenty, wypłacamy gotówkę od ręki lub robimy natychmiastowy przelew i odbieramy auto własną lawetą.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="jak-dzialamy" className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-96 bg-red-600/[0.02] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Title Block */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-full inline-block mb-3 border border-red-500/20">
            Szybki Proces
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-white uppercase">
            Jak wygląda <span className="text-red-500">sprzedaż auta?</span>
          </h2>
          <p className="text-zinc-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base font-sans">
            Całą transakcję zamykamy zazwyczaj w 4 prostych krokach, bez zbędnej biurokracji i straty cennego czasu. Zobacz, jakie to proste:
          </p>
        </div>

        {/* Steps Flex/Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Decorative connector line on desktop */}
          <div className="absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-zinc-900 hidden lg:block -z-10"></div>

          {stepItems.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="group relative text-center flex flex-col items-center">
                {/* Step Number Badge */}
                <div className="absolute -top-4 -right-1 font-display font-black text-6xl text-zinc-900/30 group-hover:text-red-500/10 select-none transition-colors">
                  {step.num}
                </div>

                {/* Circle Icon Indicator */}
                <div className="w-16 h-16 rounded-full bg-zinc-950 border-2 border-zinc-800 group-hover:border-red-600 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 flex items-center justify-center relative z-10 shadow-lg">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="mt-6 space-y-2">
                  <h3 className="text-base sm:text-lg font-bold font-display uppercase text-white group-hover:text-red-500 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto font-sans font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
