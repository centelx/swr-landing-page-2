import { motion } from 'framer-motion';
import { X, Check, AlertTriangle } from 'lucide-react';

export default function Comparison() {
  return (
    <section className="py-20 px-4 bg-brand-navy">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Brutalna Prawda
          </h2>
          <p className="text-xl text-gray-400">
            Porównaj i zdecyduj sam
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* TRADYCYJNE AGENCJE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-red-950/30 to-gray-900/30 rounded-2xl p-8 border-2 border-red-500/30"
          >
            <h3 className="text-2xl font-bold text-red-400 mb-6">Tradycyjne Agencje</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <span><strong className="text-white">Cena:</strong> 2000-8000 zł</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <span><strong className="text-white">Czas:</strong> 2-3 tygodnie</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <span><strong className="text-white">Technologia:</strong> Wolne, gotowe szablony (ciężkie wczytywanie)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <span><strong className="text-white">Zmiany:</strong> Płatne za każdą godzinę pracy</span>
              </li>
            </ul>
          </motion.div>

          {/* SWR MEDIA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-brand-neon/10 to-brand-blue/10 rounded-2xl p-8 border-2 border-brand-neon shadow-lg shadow-brand-neon/20"
          >
            <h3 className="text-2xl font-bold text-brand-neon mb-6">SWR Media</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <Check className="w-6 h-6 text-brand-neon flex-shrink-0 mt-1" />
                <span><strong className="text-white">Cena:</strong> 500 zł</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Check className="w-6 h-6 text-brand-neon flex-shrink-0 mt-1" />
                <span><strong className="text-white">Czas:</strong> 24h</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Check className="w-6 h-6 text-brand-neon flex-shrink-0 mt-1" />
                <span><strong className="text-white">Technologia:</strong> Strona lekka i szybka (Google to lubi)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Check className="w-6 h-6 text-brand-neon flex-shrink-0 mt-1" />
                <span><strong className="text-white">Zmiany:</strong> Poprawki w cenie pakietu</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* --- NOWOŚĆ: SEKCJA AWERSJI DO STRATY --- */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-4xl mx-auto bg-red-500/10 border border-red-500/40 rounded-xl p-6 md:p-8 text-center relative overflow-hidden"
        >
            {/* Ozdobny blask */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 relative z-10">
                <div className="bg-red-500/20 p-3 rounded-full flex-shrink-0">
                    <AlertTriangle className="w-8 h-8 text-red-500" />
                </div>
                <div className="text-left">
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                        Czy stać Cię na brak strony?
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                        Statystyki pokazują, że <strong className="text-white">70% klientów</strong> sprawdza firmę w Google przed zadzwonieniem. 
                        Jeśli Cię tam nie ma – idą do konkurencji. Nie oszczędzasz 500 zł – tracisz wielokrotność tej kwoty każdego miesiąca.
                    </p>
                </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
}
