import { motion } from 'framer-motion';
import { Shield, Server } from 'lucide-react';

export default function Maintenance() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const plans = [
    {
      name: 'TECHNICZNY',
      price: '27',
      monthlyPrice: '49',
      popular: true,
      features: [
        'Szybki hosting NVMe',
        'Regularne opłacanie domeny i hostingu',
        'Certyfikat bezpieczeństwa SSL',
        'Codzienne kopie zapasowe',
        'Monitoring dostępności 24/7',
      ],
      icon: Server
    },
    {
      name: 'ENTERPRISE',
      price: '249',
      popular: false,
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
            Wybór należy do Ciebie
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Jesteś właścicielem strony i kodu. Możesz utrzymywać ją samodzielnie, albo <span className="text-white font-bold">zrzucić ten obowiązek na nas</span> i mieć problem z głowy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-8 border ${plan.popular
                ? 'bg-gray-800 border-2 border-brand-neon'
                : 'bg-gray-900 border-gray-700'
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-neon text-black px-4 py-1 rounded-full text-sm font-bold shadow-lg shadow-brand-neon/20 whitespace-nowrap">
                  NAJCZĘŚCIEJ WYBIERANY
                </div>
              )}

              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{plan.name}</h3>

                  {plan.monthlyPrice ? (
                    <div className="flex flex-col">
                      <div className="flex items-end gap-1.5">
                        <span className="text-4xl font-bold text-white leading-none">{plan.price}</span>
                        <div className="flex flex-col justify-end">
                          <span className="text-gray-400 font-bold leading-none">zł / mc</span>
                          <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold leading-none mt-1">
                            netto
                          </span>
                        </div>
                      </div>
                      <p className="text-brand-neon text-xs font-bold uppercase tracking-wide mt-3 mb-1">
                        Przy płatności rocznej
                      </p>
                      <p className="text-gray-500 text-sm">
                        lub {plan.monthlyPrice} zł netto przy płatności co miesiąc
                      </p>
                    </div>
                  ) : (
                    <div className="flex items-end gap-1.5">
                      <span className="text-4xl font-bold text-white leading-none">{plan.price}</span>
                      <div className="flex flex-col justify-end">
                        <span className="text-gray-400 font-bold leading-none">zł / mc</span>
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold leading-none mt-1">
                          netto
                        </span>
                      </div>
                    </div>
                  )}

                </div>
                <div className={`p-3 rounded-lg ${plan.popular ? 'bg-brand-neon/10' : 'bg-white/5'}`}>
                  <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-brand-neon' : 'text-gray-400'}`} />
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className={`w-1.5 h-1.5 rounded-full ${plan.popular ? 'bg-brand-neon' : 'bg-gray-600'}`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-3 rounded-lg font-bold border transition-all ${plan.popular
                  ? 'bg-brand-neon text-black border-brand-neon hover:bg-white hover:border-white'
                  : 'bg-white/5 text-white border-gray-600 hover:bg-white/10'
                  }`}
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