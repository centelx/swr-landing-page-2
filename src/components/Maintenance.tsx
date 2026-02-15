import { motion } from 'framer-motion';
import { Shield, Server, Clock } from 'lucide-react';

export default function Maintenance() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const plans = [
    {
      name: 'TECHNICZNY',
      price: '99',
      features: [
        'Szybki hosting NVMe',
        'Certyfikat bezpieczeństwa SSL',
        'Codzienne kopie zapasowe',
        'Monitoring dostępności 24/7',
      ],
      icon: Server
    },
    {
      name: 'OPIEKA VIP',
      price: '249',
      popular: true,
      features: [
        'Wszystko z pakietu Technicznego',
        '2h prac programistycznych w cenie',
        'Priorytetowe wsparcie (telefon)',
        'Aktualizacje treści na życzenie',
        'Raporty miesięczne',
      ],
      icon: Shield
    },
  ];

  return (
    <section className="py-20 px-4 bg-brand-navy">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Święty Spokój
          </h2>
          <p className="text-xl text-gray-400">
            Zajmij się biznesem, my zajmiemy się technologią.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-8 border ${
                plan.popular 
                  ? 'bg-gray-800 border-brand-neon' 
                  : 'bg-gray-900 border-gray-700'
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                   <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                   <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">zł / mc</span>
                   </div>
                </div>
                <div className="p-3 bg-white/5 rounded-lg">
                    <plan.icon className="w-8 h-8 text-brand-neon" />
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-neon" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className="w-full bg-white/5 hover:bg-white/10 text-white font-bold py-3 rounded-lg border border-gray-600 transition-all"
              >
                Wybieram {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
