import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Dlaczego tak tania strona?',
      answer: 'Używamy nowoczesnych narzędzi AI i automatyzacji, co pozwala nam zredukować czas pracy z tygodni do godzin. Nie mamy kosztów dużych agencji - nie płacisz za biura, handlowców czy nadmiarowy personel. Po prostu uczciwa praca za uczciwą cenę.',
    },
    {
      // ZAKTUALIZOWANE PYTANIE I ODPOWIEDŹ
      question: 'Czy muszę płacić całość z góry?',
      answer: 'Nie! Aby rozpocząć pracę i zarezerwować termin, pobieramy jedynie symboliczną zaliczkę w wysokości 100 zł. Pozostałą kwotę (400 zł) wpłacasz dopiero, gdy strona będzie gotowa i w pełni Ci się spodoba. Zaliczka jest w 100% zwrotna – jeśli nie będziemy w stanie spełnić Twoich oczekiwań, oddajemy Ci pieniądze. Choć szczerze mówiąc, jeszcze nam się to nie zdarzyło – pracujemy nad stroną tak długo, aż będziesz zachwycony.',
    },
    {
      question: 'Czy naprawdę 24 godziny?',
      answer: 'Tak! Po zatwierdzeniu szczegółów projektu (logo, teksty, zdjęcia) Twoja strona jest gotowa w ciągu 24 godzin roboczych. W praktyce często dostarczamy jeszcze szybciej.',
    },
    {
      question: 'Co jeśli coś trzeba zmienić?',
      answer: 'Masz 7 dni na darmowe poprawki po dostawie strony. Jeśli coś nie pasuje - zmieniamy to bez dodatkowych kosztów. Po tym okresie oferujemy pakiety utrzymania z regularnymi aktualizacjami.',
    },
    {
      question: 'Czy dostaję kod źródłowy?',
      answer: 'Tak! Dostajesz pełen kod źródłowy swojej strony. To Twoja własność. Możesz w każdej chwili przenieść się do innego dostawcy lub modyfikować stronę samodzielnie.',
    },
    {
      question: 'Czy strona będzie responsywna?',
      answer: 'Absolutnie! Wszystkie nasze strony są w pełni responsywne i wyglądają perfekcyjnie na smartfonach, tabletach i komputerach. To standard, nie opcja.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-brand-navy">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Najczęściej Zadawane Pytania
          </h2>
          <p className="text-xl text-gray-400">
            Wszystko czego potrzebujesz wiedzieć
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl border border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-white text-lg pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-neon flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
