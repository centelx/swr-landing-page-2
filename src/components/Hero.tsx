import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  const scrollToPricing = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-brand-dark pt-20 pb-12 px-4">
      {/* Tło ozdobne (z oryginału) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
          {/* NOWY NAGŁÓWEK (Premium) */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Nie budujemy stron.<br />
            <span className="bg-gradient-to-r from-brand-neon to-brand-blue text-transparent bg-clip-text">
              Budujemy Twój Wizerunek.
            </span>
          </h1>

          {/* NOWY PODTYTUŁ */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Twoja konkurencja walczy ceną. Ty wygraj jakością. 
            Tworzymy serwisy klasy premium, które <span className="text-white font-semibold">zamieniają odwiedzających w płacących klientów.</span>
          </p>

          {/* WIDEO (W miejscu dawnego placeholdera) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative max-w-4xl mx-auto mb-12 group"
          >
            {/* Ozdobna ramka/poświata */}
            <div className="relative aspect-video bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl shadow-brand-neon/10">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/gkjSXBCVo8E?rel=0" 
                title="Wideo sprzedażowe"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-gray-500 text-xs mt-4 uppercase tracking-widest">
                Wideo: Zobacz dlaczego warto (0:33)
            </p>
          </motion.div>

          {/* PRZYCISKI CTA */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToPricing}
                className="bg-brand-neon text-black font-bold text-lg px-12 py-5 rounded-full hover:shadow-2xl hover:shadow-brand-neon/50 transition-all flex items-center gap-2"
            >
                Sprawdź Ceny
                <ChevronRight className="w-5 h-5" />
            </motion.button>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-transparent border border-gray-700 text-white font-bold text-lg px-12 py-5 rounded-full hover:bg-white/5 transition-all"
            >
                Nasze Realizacje
            </motion.button>
          </div>

          {/* SOCIAL PROOF (Dolna sekcja) */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-400 text-sm">
            <p>Zaufali nam liderzy rynku:</p>
            <div className="flex items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
               <span className="font-bold text-white text-lg">NEXUS</span>
               <span className="font-bold text-white text-lg">SOLID BUD</span>
               <span className="font-bold text-white text-lg">MEDICA</span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
