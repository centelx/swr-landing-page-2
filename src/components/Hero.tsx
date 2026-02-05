import { motion } from 'framer-motion';
import { Play, Check } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-brand-dark pt-20 pb-12 px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-brand-neon/10 rounded-full blur-3xl top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl bottom-20 -right-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Twoja strona internetowa<br />
            <span className="bg-gradient-to-r from-brand-neon to-brand-blue text-transparent bg-clip-text">
              za 500 zł w 24h
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Nowoczesne strony oparte na AI i czystym kodzie. 10x szybciej, 10x taniej.
            Idealne dla lokalnych firm i usług.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative max-w-4xl mx-auto mb-12 group"
          >
            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-brand-neon/20 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 md:w-24 md:h-24 bg-brand-neon rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer shadow-lg shadow-brand-neon/50"
                  >
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-black fill-black ml-1" />
                  </motion.div>
                  <p className="text-white font-semibold text-lg">ZOBACZ JAK TO DZIAŁA</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="bg-gradient-to-r from-brand-neon to-brand-blue text-black font-bold text-lg px-12 py-5 rounded-full hover:shadow-2xl hover:shadow-brand-neon/50 transition-all mb-12"
          >
            Zamów stronę teraz
          </motion.button>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-300">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-brand-neon" />
              <span>99+ zadowolonych klientów</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-brand-neon" />
              <span>Bez ukrytych kosztów. Płacisz raz.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
