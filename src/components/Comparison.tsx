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

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                <span><strong className="text-white">Technologia:</strong> Stare szablony Wordpress</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <span><strong className="text-white">Zmiany:</strong> Drogie poprawki</span>
              </li>
            </ul>
          </motion.div>

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
                <span><strong className="text-white">Technologia:</strong> Czysty Kod + AI</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Check className="w-6 h-6 text-brand-neon flex-shrink-0 mt-1" />
                <span><strong className="text-white">Zmiany:</strong> Poprawki w cenie (7 dni)</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
