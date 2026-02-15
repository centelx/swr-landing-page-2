import { motion } from 'framer-motion';
import { X, Check, Coffee, Brain } from 'lucide-react';

export default function Comparison() {
  return (
    <section className="py-24 px-4 bg-brand-navy relative overflow-hidden text-white">
      <div className="max-w-5xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            Zaoszczędź swój czas, nie tylko pieniądze
          </h2>
          <p className="text-gray-400 text-lg">
            Różnica między "tanią stroną" a naszą usługą to dziesiątki godzin Twojej pracy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          {/* TANIA STRONA - ROZJAŚNIONA DLA CZYTELNOŚCI */}
          <div className="bg-gray-800/40 border border-gray-700 p-8 rounded-2xl shadow-inner">
            <h3 className="text-xl font-bold text-gray-300 mb-6 flex items-center gap-2">
              Tania strona (500 - 1500 zł)
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span>**Musisz sam napisać wszystkie teksty** i wymyślić ofertę.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span>Dostajesz pusty szablon, który musisz sam uzupełnić.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span>Ty szukasz zdjęć, ikon i logotypów.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span>Brak analizy rynku – strona ma tylko "ładnie wyglądać".</span>
              </li>
            </ul>
          </div>

          {/* TWOJA OFERTA PREMIUM */}
          <div className="bg-gray-800 border-2 border-brand-neon p-8 rounded-2xl shadow-2xl shadow-brand-neon/5 relative">
            <div className="absolute -top-4 right-6 bg-brand-neon text-black text-xs font-black px-3 py-1 rounded shadow-lg">
                MODEL PREMIUM
            </div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              Nasza realizacja (3000 zł+)
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-100">
                <Check className="w-5 h-5 text-brand-neon flex-shrink-0 mt-1" />
                <span>**Bierzemy wszystko na siebie.** My tworzymy teksty sprzedażowe za Ciebie.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-100">
                <Check className="w-5 h-5 text-brand-neon flex-shrink-0 mt-1" />
                <span>Dobieramy profesjonalne zdjęcia i grafiki z naszych baz.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-100">
                <Check className="w-5 h-5 text-brand-neon flex-shrink-0 mt-1" />
                <span>Projektujemy strukturę, która **sama sprzedaje** Twoje usługi.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-100">
                <Check className="w-5 h-5 text-brand-neon flex-shrink-0 mt-1" />
                <span>Ty tylko akceptujesz gotowe etapy. **Oszczędzasz ok. 20h pracy.**</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Banner "Święty Spokój" z nowym opisem */}
        <motion.div 
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            className="mt-12 bg-gradient-to-r from-gray-900 to-brand-dark border border-brand-neon/20 p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8"
        >
            <div className="flex items-center gap-4 text-left flex-1">
                <div className="bg-brand-neon/10 p-3 rounded-full">
                    <Coffee className="w-6 h-6 text-brand-neon" />
                </div>
                <div>
                    <h4 className="text-white font-bold text-lg">Gwarancja Świętego Spokoju</h4>
                    <p className="text-gray-400 text-sm">Zajmij się prowadzeniem biznesu. My zajmiemy się całą resztą.</p>
                </div>
            </div>
            
            <div className="flex items-center gap-4 text-left flex-1">
                <div className="bg-brand-blue/10 p-3 rounded-full">
                    <Brain className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                    <h4 className="text-white font-bold text-lg">Zero Twojej Pracy</h4>
                    <p className="text-gray-400 text-sm">
                      Na podstawie **szczątkowych informacji** i krótkiego wywiadu tworzymy pełnowartościowe, dopasowane do Twojego klienta teksty marketingowe.
                    </p>
                </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
}
