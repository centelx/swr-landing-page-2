import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

export default function Comparison() {
  return (
    <section className="py-20 px-4 bg-brand-navy">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Dlaczego 90% stron nie sprzedaje?
          </h2>
          <p className="text-xl text-gray-400">
            Bo są robione "żeby były", a nie "żeby zarabiały".
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* TANI WYKONAWCY */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-red-950/20 rounded-2xl p-8 border border-red-900/50"
          >
            <h3 className="text-2xl font-bold text-red-400 mb-6">Tani Wykonawcy / Szablony</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-400">
                <X className="w-6 h-6 text-red-500 flex-shrink-0" />
                <div>
                  <strong className="text-white block mb-1">Gotowe szablony</strong>
                  Twoja strona wygląda tak samo jak 1000 innych firm. Brak wyróżnienia.
                </div>
              </li>
              <li className="flex items-start gap-4 text-gray-400">
                <X className="w-6 h-6 text-red-500 flex-shrink-0" />
                <div>
                  <strong className="text-white block mb-1">Brak strategii</strong>
                  Ładne obrazki, które nie mają sensu marketingowego. Klient wchodzi i wychodzi.
                </div>
              </li>
              <li className="flex items-start gap-4 text-gray-400">
                <X className="w-6 h-6 text-red-500 flex-shrink-0" />
                <div>
                  <strong className="text-white block mb-1">Wolne działanie</strong>
                  Przeładowany kod (WordPress) odstrasza klientów i Google'a.
                </div>
              </li>
            </ul>
          </motion.div>

          {/* SWR MEDIA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-neon/5 rounded-2xl p-8 border border-brand-neon/30"
          >
            <h3 className="text-2xl font-bold text-brand-neon mb-6">SWR Media (Podejście Premium)</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-300">
                <Check className="w-6 h-6 text-brand-neon flex-shrink-0" />
                <div>
                  <strong className="text-white block mb-1">Indywidualny Projekt UX</strong>
                  Projektujemy ścieżkę klienta, która prowadzi prosto do zakupu.
                </div>
              </li>
              <li className="flex items-start gap-4 text-gray-300">
                <Check className="w-6 h-6 text-brand-neon flex-shrink-0" />
                <div>
                  <strong className="text-white block mb-1">Copywriting Sprzedażowy</strong>
                  Piszemy teksty językiem korzyści. Rozumiemy bóle Twoich klientów.
                </div>
              </li>
              <li className="flex items-start gap-4 text-gray-300">
                <Check className="w-6 h-6 text-brand-neon flex-shrink-0" />
                <div>
                  <strong className="text-white block mb-1">Technologia React/Next.js</strong>
                  Strona ładuje się w ułamku sekundy. Google promuje szybkie serwisy.
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
