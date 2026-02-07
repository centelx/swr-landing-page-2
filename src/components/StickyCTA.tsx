import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Pokaż przycisk dopiero jak użytkownik przewinie trochę w dół (np. 300px)
      // Żeby nie zasłaniał treści w Hero na samym początku
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        // md:hidden sprawia, że na komputerze ten element znika całkowicie!
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 z-40 md:hidden"
        >
          <button
            onClick={scrollToContact}
            className="w-full bg-yellow-400 text-black font-bold text-lg py-4 rounded-full shadow-2xl shadow-yellow-400/30 flex items-center justify-center gap-2 border-2 border-yellow-300"
          >
            <span>Zamów stronę (500 zł)</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
