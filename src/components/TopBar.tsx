import { motion } from 'framer-motion';

export default function TopBar() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      onClick={scrollToContact}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-950 text-gray-300 text-center py-3 px-4 border-b border-gray-800 cursor-pointer hover:bg-gray-900 transition-colors"
    >
      <motion.p
        className="text-xs md:text-sm font-medium tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span className="text-brand-neon mr-2">●</span>
        Status: Przyjmujemy zlecenia na luty. Ostatnie 2 wolne terminy.
      </motion.p>
    </div>
  );
}
