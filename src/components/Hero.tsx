import { motion } from 'framer-motion';
import { ChevronRight, Star } from 'lucide-react';

export default function Hero() {
  const scrollToPricing = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-brand-dark pt-20 pb-12 px-4 overflow-hidden">
      {/* Tło premium - subtelniejsze */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[100px] top-0 -right-20"></div>
        <div className="absolute w-[500px] h-[500px] bg-brand-neon/5 rounded-full blur-[100px] bottom-0 -left-20"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm"
        >
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />)}
          </div>
          <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Premium Web Design</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight"
        >
          Nie budujemy stron.<br />
          <span className="bg-gradient-to-r from-brand-neon to-brand-blue text-transparent bg-clip-text">
            Budujemy Twój Wizerunek.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Twoja strona to Twój najlepszy handlowiec. Jeśli nie sprzedaje – zwalniasz go.
          Tworzymy serwisy internetowe klasy premium, oparte o psychologię sprzedaży i najnowsze technologie, które <span className="text-white font-semibold">zamieniają odwiedzających w płacących klientów.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToPricing}
            className="w-full md:w-auto bg-brand-neon text-black font-bold text-lg px-8 py-4 rounded-full hover:bg-white transition-all flex items-center justify-center gap-2 group"
          >
            Sprawdź Ofertę
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full md:w-auto bg-transparent border border-gray-700 text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-white/5 transition-all"
          >
            Zobacz Realizacje
          </button>
        </motion.div>

      </div>
    </section>
  );
}
