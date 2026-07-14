import React from "react";
import { Car, Truck, CheckCircle2, Wrench, ShieldAlert, CalendarRange, Star } from "lucide-react";

export default function Categories() {
  const categoriesList = [
    {
      title: "Samochody Osobowe",
      desc: "Wszystkie marki, modele i wersje nadwozia. Auta miejskie, kombi, sedany, SUV-y oraz auta premium.",
      icon: Car,
    },
    {
      title: "Samochody Dostawcze",
      desc: "Auta dostawcze, busy, furgony i vany. Szybki odkup pojazdów firmowych i komercyjnych.",
      icon: Truck,
    },
    {
      title: "Auta Sprawne",
      desc: "Samochody w bardzo dobrym stanie technicznym. Za zadbane i bezwypadkowe auta płacimy najwyższe stawki!",
      icon: CheckCircle2,
    },
    {
      title: "Auta Uszkodzone",
      desc: "Pojazdy wymagające drobnych lub poważnych napraw mechanicznych, blacharskich oraz z uszkodzonym silnikiem.",
      icon: Wrench,
    },
    {
      title: "Samochody Powypadkowe",
      desc: "Auta po kolizjach, wypadkach, bez ważnych badań technicznych lub ubezpieczenia OC. Odbieramy własną lawetą.",
      icon: ShieldAlert,
    },
    {
      title: "Z Każdego Rocznika",
      desc: "Skupujemy auta starsze oraz nowsze modele. Każdy rocznik produkcji posiada dla nas realną wartość.",
      icon: CalendarRange,
    },
  ];

  return (
    <section id="oferta" className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative">
      <div className="max-w-7xl mx-auto">
        {/* Title Block */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-full inline-block mb-3 border border-red-500/20">
            Nasza Oferta
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-white uppercase">
            Co dokładnie <span className="text-red-500">skupujemy?</span>
          </h2>
          <p className="text-zinc-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base font-sans">
            Kupujemy praktycznie każdy pojazd na terenie Mazowsza. Nie musisz martwić się o wiek czy stan techniczny – skontaktuj się z nami i odbierz gotówkę.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoriesList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-red-600 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
              >
                {/* Red spotlight hover effect */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 blur-2xl rounded-full group-hover:bg-red-600/10 transition-all"></div>

                <div className="space-y-4">
                  {/* Icon */}
                  <div className="inline-flex p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  {/* Text */}
                  <h3 className="text-xl font-bold font-display text-white uppercase group-hover:text-red-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                {/* Micro line decoration */}
                <div className="w-8 h-[2px] bg-red-600/30 group-hover:w-full transition-all duration-300 mt-6"></div>
              </div>
            );
          })}
        </div>

        {/* Wyróżniony baner na dole */}
        <div className="mt-16 bg-gradient-to-r from-red-950/40 via-zinc-900 to-red-950/40 border border-red-600/30 rounded-2xl p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 shadow-2xl">
          <div className="bg-red-600 p-4 rounded-xl text-white shadow-lg flex-shrink-0 animate-bounce">
            <Star className="w-8 h-8 fill-white" />
          </div>
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-black font-display text-white uppercase tracking-wide">
              Skupujemy każde auto bez wyjątków!
            </h4>
            <p className="text-zinc-300 text-sm sm:text-base font-sans">
              Również nowsze, całkowicie sprawne samochody z roczników <strong className="text-red-500 font-bold">1990–2025</strong>. Płacimy rzetelnie i uczciwie, wyceniając auto zgodnie z jego rzeczywistą wartością rynkową.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
