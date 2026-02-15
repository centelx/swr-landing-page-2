import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export default function StickyCTA() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 left-0 right-0 z-[100] px-4 md:hidden">
      <motion.button
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToContact}
        className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-black font-black py-4 rounded-2xl shadow-[0_10px_30px_rgba(212,175,55,0.3)] flex items-center justify-center gap-3 relative overflow-hidden"
      >
        {/* Efekt pulsowania w tle przycisku */}
        <span className="absolute inset-0 bg-white/20 animate-pulse opacity-0 hover:opacity-100 transition-opacity"></span>
        
        <div className="bg-black/10 p-2 rounded-lg">
          <MessageSquare className="w-5 h-5" />
        </div>
        
        <span className="uppercase tracking-wider text-sm">
          Darmowa Konsultacja
        </span>

        {/* Mała kropka sygnalizująca "aktywność" */}
        <span className="absolute top-3 right-4 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-20"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-black/40"></span>
        </span>
      </motion.button>
    </div>
  );
}
