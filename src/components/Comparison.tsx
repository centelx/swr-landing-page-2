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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nie przepłacaj za agencje, które zatrzymały się w czasie
          </h2>
          <p className="text-gray-400 text-lg">
            Zobacz, dlaczego nasz proces jest szybszy, tańszy i skuteczniejszy niż tradycyjne podejście.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          {/* TRADYCYJNA AGENCJA */}
          <div className="bg-gray-800/40 border border-gray-700 p-8 rounded-2xl shadow-inner">
            <h3 className="text-xl font-bold text-gray-300 mb-6 flex items-center gap-2">
              Tradycyjna Agencja
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span>Czekasz tygodniami na pierwszy projekt.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span>Budżet startuje od 3000-5000 zł netto za podstawową stronę.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span>Strona na ciężkim szablonie (np. WP), który po czasie sam się psuje.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span>Tracisz czas na spotkania i wypełnianie skomplikowanych briefów.</span>
              </li>
            </ul>
          </div>

          {/* TWOJA OFERTA */}
          <div className="bg-gray-800 border-2 border-brand-neon p-8 rounded-2xl shadow-2xl shadow-brand-neon/5 relative">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              Nasza Realizacja (Zwinne podejście)
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-100">
                <Check className="w-5 h-5 text-brand-neon flex-shrink-0 mt-1" />
                <span>Pierwszy projekt w 24 godziny (dzięki wsparciu AI).</span>
              </li>
              <li className="flex items-start gap-3 text-gray-100">
                <Check className="w-5 h-5 text-brand-neon flex-shrink-0 mt-1" />
                <span>Nowoczesna strona już od 800 zł netto.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-100">
                <Check className="w-5 h-5 text-brand-neon flex-shrink-0 mt-1" />
                <span>Szybki kod (React/Next.js) – bezawaryjność i wydajność.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-100">
                <Check className="w-5 h-5 text-brand-neon flex-shrink-0 mt-1" />
                <span><strong>Bierzemy wszystko na siebie.</strong> Nie wiesz, czego chcesz? <strong>My zaproponujemy design, dobierzemy zdjęcia i napiszemy teksty sprzedażowe za Ciebie.</strong> Ty tylko akceptujesz.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bannery korzyści */}
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
              <h4 className="text-white font-bold text-lg">Płacisz za efekt, nie za biurowiec</h4>
              <p className="text-gray-400 text-sm">Zoptymalizowaliśmy proces do granic możliwości. Brak drogich biur i handlowców oznacza jakość premium w ułamek rynkowej ceny.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-left flex-1">
            <div className="bg-brand-blue/10 p-3 rounded-full">
              <Brain className="w-6 h-6 text-brand-blue" />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg">Gotowa Strona, Zero Twojej Pracy</h4>
              <p className="text-gray-400 text-sm">
                Wystarczą nam szczątkowe informacje o Twoim biznesie. <strong>Na ich podstawie tworzymy pełnowartościowe, dopasowane teksty marketingowe i oprawę graficzną. Nie musisz nam podawać wszystkiego na tacy.</strong>
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}