import { motion } from 'framer-motion';

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-950 text-gray-300 text-center py-3 px-4 border-b border-gray-800">
      <motion.p
        className="text-xs md:text-sm font-medium tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span className="text-brand-neon mr-2">●</span>
        Status: Przyjmujemy zlecenia na marzec. Ostatnie 2 wolne terminy.
      </motion.p>
    </div>
  );
}
