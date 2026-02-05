import { motion } from 'framer-motion';
import { Check, Crown } from 'lucide-react';

export default function Maintenance() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const plans = [
    {
      name: 'START',
      price: '49',
      popular: false,
      features: [
        'Hosting i utrzymanie',
        'Monitoring dostępności',
        '1 kopia zapasowa miesięcznie',
        'Wsparcie mailowe',
      ],
    },
    {
      name: 'STANDARD',
      price: '149',
      popular: true,
      features: [
        'Wszystko z pakietu START',
        '1 aktualizacja treści miesięcznie',
        'Priorytetowa odpowiedź 24-48h',
        'Drobne poprawki graficzne',
        'Optymalizacja CTA',
      ],
    },
    {
      name: 'PREMIUM',
      price: '299',
      popular: false,
      features: [
        'Wszystko z pakietu STANDARD',
        'Nielimitowane aktualizacje treści',
        'Nowe podstrony (2-3/rok)',
        'Raporty i analityka',
        'Testy A/B',
        'Wsparcie SEO lokalne',
        'WhatsApp 24/7',
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-brand-navy">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pakiety Utrzymania
          </h2>
          <p className="text-xl text-gray-400">
            Dbamy o Twoją stronę, abyś mógł skupić się na biznesie
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-br from-brand-neon/10 to-brand-blue/10 border-2 border-brand-neon shadow-lg shadow-brand-neon/20'
                  : 'bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-2 border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-brand-neon to-brand-blue text-black px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Crown className="w-4 h-4" />
                    NAJPOPULARNIEJSZY
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-brand-neon' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-end justify-center gap-2">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 mb-2">zł/mc</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-brand-neon' : 'text-gray-500'}`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className={`w-full font-bold py-3 rounded-full transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-brand-neon to-brand-blue text-black hover:shadow-xl hover:shadow-brand-neon/50'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-gray-600'
                }`}
              >
                Wybierz Pakiet
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
