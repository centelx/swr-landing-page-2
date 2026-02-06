import { motion } from 'framer-motion';

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-brand-neon to-brand-blue text-black font-bold text-center py-3 px-4">
      <motion.p
        className="text-sm md:text-base"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Możemy wykonać tylko 3 takie projekty dziennie. Dostępne sloty na jutro: 1.
      </motion.p>
    </div>
  );
}
