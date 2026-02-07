import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Sprawdź, czy jesteśmy na dole strony (przy sekcji kontakt)
      const contactSection = document.getElementById('contact');
      if (contactSection) {
         const rect = contactSection.getBoundingClientRect();
         // Jeśli góra sekcji kontakt jest widoczna w oknie (lub wyżej), ukryj przycisk
         // window.innerHeight to wysokość ekranu telefonu.
         if (rect.top < window.innerHeight) {
             setIsVisible(false);
             return; // Ważne, żeby nie nadpisać tego niżej
         }
      }

      // 2. Standardowe pokazywanie po scrollu
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
