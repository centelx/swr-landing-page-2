import { motion } from 'framer-motion';
import { ChevronRight, Star, User, Hexagon } from 'lucide-react';

export default function Hero() {
  const scrollToPricing = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  const avatars = [
    { type: 'image', src: '/logo_avaps.jpg', alt: 'Avaps' },
    { type: 'image', src: '/logo_ninfea.png', alt: 'Ninfea' },
    { type: 'logo-icon', icon: Hexagon, colors: 'from-purple-600 to-pink-600 text-white' },
    { type: 'generated', label: 'MK', colors: 'from-brand-neon to-brand-blue text-black' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-brand-dark pt-20 pb-12 px-4">
      {/* Tło ozdobne */}
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
          {/* NAGŁÓWEK */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Nie budujemy stron.<br />
            <span className="bg-gradient-to-r from-brand-neon to-brand-blue text-transparent bg-clip-text">
              Budujemy Twój Wizerunek.
            </span>
          </h1>

          {/* PODTYTUŁ */}
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Twoja konkurencja przepłaca w powolnych agencjach. Ty wygraj sprytem. Wykorzystujemy najnowsze technologie AI, by tworzyć profesjonalne, sprzedażowe strony internetowe w ułamek standardowego czasu. <span className="text-white font-semibold">Pierwszy działający projekt zobaczysz już w 24 godziny.</span>
          </p>

          {/* PRZYCISKI CTA */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToPricing}
              className="bg-brand-neon text-black font-bold text-lg px-12 py-5 rounded-full hover:shadow-2xl hover:shadow-brand-neon/50 transition-all flex items-center gap-2"
            >
              Zobacz Ofertę
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

          {/* KONKRETNE LICZBY (SOCIAL PROOF) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <div className="flex -space-x-3">
              {avatars.map((avatar, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-dark bg-gray-800 flex items-center justify-center overflow-hidden relative">
                  {avatar.type === 'image' && (
                    <img src={avatar.src} alt={avatar.alt} className="w-full h-full object-cover" />
                  )}
                  {avatar.type === 'logo-icon' && avatar.icon && (
                    <div className={`w-full h-full bg-gradient-to-br ${avatar.colors} flex items-center justify-center`}>
                      <avatar.icon className="w-5 h-5 fill-white/20" />
                    </div>
                  )}
                  {avatar.type === 'generated' && (
                    <div className={`w-full h-full bg-gradient-to-br ${avatar.colors} flex items-center justify-center font-bold text-xs tracking-tighter`}>
                      {avatar.label}
                    </div>
                  )}
                  {avatar.type === 'icon' && (
                    <User className="w-6 h-6 text-gray-500" />
                  )}
                </div>
              ))}

              <div className="w-10 h-10 rounded-full border-2 border-brand-dark bg-gray-800 flex items-center justify-center text-xs text-white font-bold">
                +80
              </div>
            </div>

            <div className="text-left">
              <div className="flex gap-0.5 mb-0.5">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-gray-400 text-sm">
                <strong className="text-white">89</strong> Zadowolonych Firm
              </p>
            </div>
          </motion.div>

          {/* PASEK BRANŻOWY */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm mb-4 uppercase tracking-wider font-medium">
              Realizujemy projekty dla:
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-12 opacity-70">
              <span className="font-bold text-white text-lg">USŁUGI</span>
              <span className="text-gray-700 hidden md:inline">•</span>
              <span className="font-bold text-white text-lg">E-COMMERCE</span>
              <span className="text-gray-700 hidden md:inline">•</span>
              <span className="font-bold text-white text-lg">BUDOWNICTWO</span>
              <span className="text-gray-700 hidden md:inline">•</span>
              <span className="font-bold text-white text-lg">SPECJALIŚCI</span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}