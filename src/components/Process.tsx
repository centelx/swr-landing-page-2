import { motion } from 'framer-motion';
import { FileText, MessageSquare, MonitorPlay, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: FileText,
      title: '1. Rezerwacja Terminu',
      description: 'Wypełniasz formularz i wpłacasz 100 zł zwrotnej zaliczki. To rezerwuje Twój slot na jutro i daje nam zielone światło.',
    },
    {
      icon: MessageSquare,
      title: '2. Krótki Wywiad (Ty decydujesz)',
      description: 'Zadamy Ci kilka prostych pytań o Twój biznes. Wolisz 5 minut rozmowy telefonicznej czy szybki e-mail? Wybór należy do Ciebie.',
    },
    {
      icon: MonitorPlay,
      title: '3. Realizacja w 24h',
      description: 'Nasz zespół i AI tworzą Twoją stronę. Następnego dnia otrzymujesz prywatny link do podglądu gotowego projektu.',
    },
    {
      icon: Rocket,
      title: '4. Akceptacja i Start',
      description: 'Wnosimy ewentualne poprawki do skutku. Dopiero gdy jesteś zachwycony, dopłacasz resztę, a my podpinamy domenę!',
    },
  ];

  return (
    <section className="py-20 px-4 bg-brand-dark relative overflow-hidden">
      {/* Tło ozdobne */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-neon/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Jak Wygląda Współpraca?
          </h2>
          <p className="text-xl text-gray-400">
            Prosty proces, minimum formalności, szybki efekt
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="relative"
            >
              {/* Linia łącząca na desktopie (oprócz ostatniego elementu) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-brand-neon/30 to-transparent -z-10"></div>
              )}

              <div className="bg-brand-navy/50 border border-gray-700 p-6 rounded-2xl h-full hover:border-brand-neon/30 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-neon/20 to-brand-blue/20 rounded-full flex items-center justify-center mb-6 mx-auto border border-brand-neon/20">
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
