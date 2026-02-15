import { motion } from 'framer-motion';
import { ChevronRight, Star, Play } from 'lucide-react';

export default function Hero() {
  const scrollToPricing = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-brand-dark pt-28 pb-20 px-4 overflow-hidden">
      {/* Tło premium */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[120px] top-[-100px] -right-20"></div>
        <div className="absolute w-[600px] h-[600px] bg-brand-neon/5 rounded-full blur-[120px] bottom-[-100px] -left-20"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        
        {/* Badge "Premium" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm shadow-lg shadow-brand-neon/5"
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
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
        >
          Nie budujemy stron.<br />
          <span className="bg-gradient-to-r from-brand-neon to-brand-blue text-transparent bg-clip-text">
            Budujemy Twój Wizerunek.
          </span>
        </motion.h1>

        {/* Podtytuł */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Twoja konkurencja walczy ceną. Ty wygraj jakością.
          Tworzymy serwisy klasy premium, oparte o psychologię sprzedaży, które <span className="text-white font-semibold">zamieniają odwiedzających w płacących klientów.</span>
        </motion.p>

        {/* Przyciski CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={scrollToPricing}
            className="w-full md:w-auto bg-brand-neon text-black font-bold text-lg px-8 py-4 rounded-full hover:bg-white hover:shadow-lg hover:shadow-brand-neon/20 transition-all flex items-center justify-center gap-2 group"
          >
            Sprawdź Ceny
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full md:w-auto bg-transparent border border-gray-700 text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-white/5 hover:border-gray-500 transition-all"
          >
            Zobacz Realizacje
          </button>
        </motion.div>

        {/* --- VSL: VIDEO SALES LETTER (PRZYWRÓCONE) --- */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative max-w-4xl mx-auto group cursor-pointer"
          >
            {/* Ozdobna poświata pod wideo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-neon to-brand-blue rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition duration-500"></div>
            
            {/* Kontener Wideo */}
            <div className="relative aspect-video bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl">
              
              {/* Thumbnail / Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                 {/* Tutaj możesz wstawić <img> ze swoim zdjęciem/miniaturą */}
                 <div className="text-center p-8">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20 shadow-lg"
                    >
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </motion.div>
                    <p className="text-white font-bold text-lg tracking-wide">
                      ZOBACZ DLACZEGO WARTO
                    </p>
                    <p className="text-brand-neon text-sm font-medium mt-1">
                      Wideo od założyciela (2 min)
                    </p>
                 </div>
              </div>

              {/* Tutaj odkomentuj i wstaw iframe z YouTube/Vimeo gdy będziesz miał film */}
              {/* <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/TWOJE_ID" 
                title="SWR Media VSL"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe> */}

            </div>
        </motion.div>

        {/* Social Proof pod wideo */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 text-gray-400 text-sm">
            <p>Dołącz do firm, które postawiły na jakość:</p>
            <div className="flex gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Tu możesz wstawić logotypy klientów w przyszłości, teraz tekstowo */}
                <span className="font-bold text-white text-lg">NEXUS</span>
                <span className="font-bold text-white text-lg">SOLID BUD</span>
                <span className="font-bold text-white text-lg">MEDICA</span>
            </div>
        </div>

      </div>
    </section>
  );
}
