import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function CallToAction() {
    return (
        <section id="contact" className="py-24 px-4 bg-brand-dark border-t border-gray-800 text-center">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Zbudujmy Twój Wizerunek
                    </h2>
                    <p className="text-xl text-gray-400 mb-10">
                        Masz pytania? Chcesz omówić szczegóły projektu? Zadzwoń bezpośrednio do nas. Bierzemy całą czarną robotę na siebie.
                    </p>

                    <a
                        href="tel:518550491"
                        className="inline-flex items-center justify-center gap-3 bg-brand-neon text-black font-bold text-xl px-10 py-5 rounded-full shadow-2xl shadow-brand-neon/20 border-2 border-brand-neon hover:bg-white hover:border-white transition-all hover:scale-105"
                    >
                        <Phone className="w-6 h-6" />
                        <span>Zadzwoń: 518 550 491</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}