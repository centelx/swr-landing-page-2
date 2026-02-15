import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: Search,
      title: '1. Strategia i Analiza',
      description: 'Zanim napiszemy pierwszą linię kodu, analizujemy Twoją branżę i konkurencję. Ustalamy, kto jest Twoim klientem i jak do niego trafić.',
    },
    {
      icon: PenTool,
      title: '2. Design i Makieta',
      description: 'Projektujemy warstwę wizualną i układ treści. Nie używamy gotowców. Każdy element ma swoje uzasadnienie psychologiczne.',
    },
    {
      icon: Code2,
      title: '3. Programowanie (Development)',
      description: 'Nasi programiści wdrażają projekt używając nowoczesnych technologii. Dbamy o szybkość, bezpieczeństwo i optymalizację pod Google.',
    },
    {
      icon: Rocket,
      title: '4. Wdrożenie i Szkolenie',
      description: 'Uruchamiamy stronę pod Twoją domeną. Konfigurujemy analitykę i pokazujemy Ci, jak zarządzać treścią. Jesteśmy gotowi do startu.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Jak Wygląda Współpraca?
          </h2>
          <p className="text-xl text-gray-400">
            Profesjonalny proces, który gwarantuje rezultaty. Czas realizacji: 7-14 dni.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-800 -z-10"></div>
              )}

              <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl h-full hover:border-brand-neon/30 transition-colors">
                <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center mb-6 mx-auto border border-brand-neon/20 shadow-lg shadow-brand-neon/10">
                  <step.icon className="w-8 h-8 text-brand-neon" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 text-center text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
