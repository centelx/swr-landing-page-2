import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { MessageSquare } from 'lucide-react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
         const rect = contactSection.getBoundingClientRect();
         if (rect.top < window.innerHeight) {
             setIsVisible(false);
             return;
         }
      }
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
          className="fixed bottom-4 left-4 right-4 z-40 md:hidden"
        >
          <button
            onClick={scrollToContact}
            className="w-full bg-brand-neon text-black font-bold text-lg py-4 rounded-full shadow-2xl flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Zapytaj o Darmową Wycenę</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
