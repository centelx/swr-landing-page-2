import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        // Ukryj przycisk, gdy użytkownik dojedzie do sekcji kontakt
        if (rect.top < window.innerHeight) {
          setIsVisible(false);
          return;
        }
      }
      // Pokaż przycisk po przewinięciu 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 z-40 md:hidden"
        >
          <a
            href="tel:518550491"
            className="w-full bg-brand-neon text-black font-bold text-lg py-4 rounded-full shadow-2xl shadow-brand-neon/30 border-2 border-brand-neon flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            <span>Zadzwoń teraz</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}