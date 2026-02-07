import { motion } from 'framer-motion';
import { Check, Zap, ShieldCheck, Gift } from 'lucide-react';

export default function Pricing() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="offer" className="py-20 px-4 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-brand-accent/20 border border-brand-accent px-4 py-2 rounded-full mb-4">
            <Zap className="w-4 h-4 text-brand-accent" />
            <span className="text-brand-accent font-semibold text-sm">OFERTA SPECJALNA</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Twoja Strona za 500 zł
          </h2>
          <p className="text-xl text-gray-400">
            Wszystko czego potrzebujesz w jednej cenie
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-br from-brand-neon/10 to-brand-blue/10 rounded-3xl p-8 md:p-12 border-2 border-brand-neon shadow-2xl shadow-brand-neon/30">
            <div className="text-center mb-8">
              <p className="text-gray-400 text-lg mb-2 line-through">2999 zł</p>
              <div className="flex items-end justify-center gap-2">
                <span className="text-6xl md:text-7xl font-bold text-white">500</span>
                <span className="text-3xl text-gray-300 mb-2">zł</span>
              </div>
              
              <div className="mt-4 bg-brand-navy/50 rounded-xl p-4 border border-brand-neon/30 inline-block">
                <p className="text-brand-neon font-bold text-lg">
                  Startujesz za jedyne 100 zł zaliczki!
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  Pozostałe 400 zł płacisz dopiero po odebraniu gotowej strony.
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {/* Standardowe funkcje */}
              {[
                'Multi-Page setup (strona główna, o nas, oferta, kontakt)',
                'Formularz kontaktowy z integracją',
                'Konfiguracja domeny',
                'Responsywny design mobilny',
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-neon/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-brand-neon" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}

              {/* ZMIANA: Framing BONUSÓW (Wartość dodana) */}
              <div className="border-t border-gray-700 my-4 pt-4 space-y-4">
                <div className="flex items-start gap-3 bg-brand-neon/5 p-3 rounded-lg border border-brand-neon/20">
                    <div className="w-6 h-6 rounded-full bg-brand-neon/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Gift className="w-4 h-4 text-brand-neon" />
                    </div>
                    <div>
                        <span className="text-white font-bold block">BONUS: Wstępne pozycjonowanie Google</span>
                        <span className="text-brand-neon text-sm font-bold">WARTOŚĆ 300 ZŁ - GRATIS</span>
                    </div>
                </div>

                <div className="flex items-start gap-3 bg-brand-neon/5 p-3 rounded-lg border border-brand-neon/20">
                    <div className="w-6 h-6 rounded-full bg-brand-neon/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Gift className="w-4 h-4 text-brand-neon" />
                    </div>
                    <div>
                        <span className="text-white font-bold block">BONUS: Hosting i SSL (1 miesiąc)</span>
                        <span className="text-brand-neon text-sm font-bold">WARTOŚĆ 49 ZŁ - GRATIS</span>
                    </div>
                </div>
              </div>
              
              {/* Punkt o bezpieczeństwie */}
              <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="flex items-start gap-3 pt-2"
                >
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-white font-medium">Gwarancja Satysfakcji: Jeśli projekt Ci się nie spodoba – zwracamy 100% zaliczki.</span>
                </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="w-full bg-gradient-to-r from-brand-neon to-brand-blue text-black font-bold text-xl px-8 py-5 rounded-full hover:shadow-2xl hover:shadow-brand-neon/50 transition-all"
            >
              Odbieram bonusy i zamawiam
            </motion.button>

            <p className="text-center text-gray-400 text-sm mt-6">
              Realizacja w 24 godziny od zatwierdzenia projektu
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
