import { motion } from 'framer-motion';
import { Check, Crown, AlertCircle, Sparkles } from 'lucide-react';

export default function Maintenance() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const plans = [
    {
      name: 'START',
      price: '29',
      subtext: 'przy płatności rocznej',
      monthlyOption: 'lub 49 zł miesięcznie',
      popular: false,
      // Wabik negatywny
      warning: 'Każda zmiana na stronie: 100 zł', 
      features: [
        'Hosting i domena techniczna',
        'Certyfikat SSL',
        'Monitoring dostępności 24/7',
        'Kopie zapasowe (raz na mc)',
      ],
    },
    {
      name: 'STANDARD',
      price: '99', 
      subtext: 'przy płatności rocznej',
      monthlyOption: 'lub 129 zł miesięcznie',
      popular: true,
      // Wabik pozytywny
      highlight: 'Oszczędzasz 100 zł na poprawkach',
      features: [
        'Wszystko z pakietu START',
        '1h prac programisty w cenie (wart. 100 zł)',
        'Priorytetowa pomoc w razie awarii',
        'Aktualizacje zabezpieczeń',
        'Drobne zmiany graficzne',
      ],
    },
    {
      name: 'PREMIUM',
      price: '299',
      // ZMIANA: Tylko płatność miesięczna
      subtext: 'płatność co miesiąc',
      monthlyOption: 'Możesz zrezygnować w każdej chwili', 
      popular: false,
      features: [
        'Wszystko z pakietu STANDARD',
        'Nielimitowane drobne zmiany',
        'Raporty SEO i analityka',
        'Dodawanie nowych podstron',
        'Opiekun klienta na WhatsApp',
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
            Święty spokój to najlepsza inwestycja
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
              className={`relative rounded-2xl p-8 flex flex-col h-full ${
                plan.popular
                  ? 'bg-gradient-to-br from-brand-neon/10 to-brand-blue/10 border-2 border-brand-neon shadow-lg shadow-brand-neon/20 transform md:-translate-y-4'
                  : 'bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-2 border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-full text-center">
                  <div className="bg-gradient-to-r from-brand-neon to-brand-blue text-black px-6 py-1.5 rounded-full text-sm font-bold inline-flex items-center gap-2 shadow-lg">
                    <Crown className="w-4 h-4" />
                    NAJCZĘŚCIEJ WYBIERANY
                  </div>
                </div>
              )}

              <div className="text-center mb-6 pt-4">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-brand-neon' : 'text-white'}`}>
                  {plan.name}
                </h3>
                
                <div className="flex flex-col items-center justify-center min-h-[100px]">
                  <div className="flex items-end gap-1">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-xl text-gray-400 mb-1">zł/mc</span>
                  </div>
                  <span className="text-xs text-brand-accent mt-1 font-medium tracking-wide uppercase">
                    {plan.subtext}
                  </span>
                  <span className="text-xs text-gray-500 mt-1">
                    {plan.monthlyOption}
                  </span>
                </div>

                {/* Sekcja Wabika */}
                <div className="mt-6 min-h-[40px] flex items-center justify-center">
                    {plan.warning && (
                        <div className="flex items-center gap-2 text-red-400 bg-red-900/20 px-3 py-2 rounded-lg text-sm font-medium border border-red-500/30">
                            <AlertCircle className="w-4 h-4 flex-shrink-0" />
                            {plan.warning}
                        </div>
                    )}
                    {plan.highlight && (
                        <div className="flex items-center gap-2 text-brand-neon bg-brand-neon/10 px-3 py-2 rounded-lg text-sm font-medium border border-brand-neon/30">
                            <Sparkles className="w-4 h-4 flex-shrink-0" />
                            {plan.highlight}
                        </div>
                    )}
                </div>
              </div>

              <div className="border-t border-gray-700 my-6"></div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-brand-neon' : 'text-gray-500'}`} />
                    <span className="text-sm leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className={`w-full font-bold py-4 rounded-xl transition-all mt-auto ${
                  plan.popular
                    ? 'bg-gradient-to-r from-brand-neon to-brand-blue text-black hover:shadow-xl hover:shadow-brand-neon/50'
                    : 'bg-white/5 text-white hover:bg-white/10 border border-gray-600 hover:border-gray-500'
                }`}
              >
                Wybieram {plan.name}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
