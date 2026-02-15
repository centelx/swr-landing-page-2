import { motion } from 'framer-motion';
import { ChevronRight, Star, Play } from 'lucide-react';

export default function Hero() {
  const scrollToPricing = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-brand-dark pt-28 pb-20 px-4 overflow-hidden">
      {/* Tło premium - przesunięte dla nowego układu */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[120px] -top-20 -right-20"></div>
        <div className="absolute w-[600px] h-[600px] bg-brand-neon/5 rounded-full blur-[120px] bottom-0 -left-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* KOLUMNA LEWA: TEKST I PRZYCISKI */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm"
            >
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />)}
              </div>
              <span className="text-gray-300 text-xs font-bold uppercase tracking-wider">High-End Web Development</span>
            </motion.div>

            {/* Nagłówek */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Nie budujemy stron.<br />
              <span className="bg-gradient-to-r from-brand-neon to-brand-blue text-transparent bg-clip-text">
                Budujemy Twój Wizerunek.
              </span>
            </motion.h1>

            {/* Tekst */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Większość stron internetowych to tylko wizytówki, które nie sprzedają. 
              My tworzymy narzędzia biznesowe oparte o psychologię i technologię, 
              które <span className="text-white font-semibold">realnie zwiększają Twoje zyski.</span>
            </motion.p>

            {/* Przyciski */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <button
                onClick={scrollToPricing}
                className="w-full sm:w-auto bg-brand-neon text-black font-bold text-lg px-8 py-4 rounded-full hover:bg-white hover:shadow-lg hover:shadow-brand-neon/20 transition-all flex items-center justify-center gap-2 group"
              >
                Sprawdź Ceny
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto bg-transparent border border-gray-700 text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-white/5 hover:border-gray-500 transition-all"
              >
                Zobacz Realizacje
              </button>
            </motion.div>

            {/* Social Proof (tekstowy) */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.8 }}
               className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-gray-500"
            >
                <p>Zaufali nam liderzy branży:</p>
                <div className="flex gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
                    <span className="font-bold text-white">NEXUS</span>
                    <span className="font-bold text-white">SOLID BUD</span>
                    <span className="font-bold text-white">MEDICA</span>
                </div>
            </motion.div>
          </div>

          {/* KOLUMNA PRAWA: WIDEO (TERAZ OD RAZU WIDOCZNE) */}
          <div className="order-1 lg:order-2 w-full">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative w-full group"
            >
                {/* Poświata */}
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-neon to-brand-blue rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition duration-500"></div>
                
                {/* Ramka wideo */}
                <div className="relative aspect-video bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl">
                    <iframe 
                        className="absolute inset-0 w-full h-full"
                        src="https://www.youtube.com/embed/gkjSXBCVo8E?rel=0" 
                        title="Wideo sprzedażowe"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Etykieta pod wideo */}
                <div className="mt-4 flex items-center justify-center lg:justify-end gap-2 text-gray-400 text-xs md:text-sm">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <p>Zobacz wideo (0:33) - Poznaj naszą filozofię</p>
                </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
