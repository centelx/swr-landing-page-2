import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Czy muszę płacić całość z góry?',
      answer: 'Nie. Działamy w modelu "Bezpieczny Start". Pobieramy jedynie 20% zaliczki na rozpoczęcie prac (rezerwacja czasu zespołu). Pozostałe 80% płacisz dopiero wtedy, gdy zobaczysz gotową, działającą stronę na naszym serwerze testowym i zaakceptujesz efekt.', // ZMIANA NA 20% i 80%
    },
    {
      question: 'Czy jestem właścicielem strony?', // NOWE PYTANIE
      answer: 'Tak. W przeciwieństwie do abonamentowych kreatorów, po opłaceniu końcowej faktury stajesz się 100% właścicielem kodu źródłowego i praw autorskich. Możesz przenieść stronę na dowolny serwer i robić z nią co chcesz.',
    },
    {
      question: 'Co jeśli strona mi się nie spodoba?',
      answer: 'Pracujemy do skutku. W cenie projektu uwzględnione są rundy poprawek. Zanim zakodujemy stronę, przedstawiamy wstępną wizję. Jeśli finalny efekt drastycznie rozminie się z ustaleniami (co nam się nie zdarza), masz prawo do rezygnacji, a my nie pobieramy końcowej wpłaty.',
    },
    // USUNIĘTO PYTANIE O STRONĘ ZA 500 ZŁ
    {
      question: 'Jak długo trwa realizacja?',
      answer: 'Standardowy czas to 7-14 dni roboczych. Jakość wymaga czasu - musimy poznać Twój biznes, przygotować strategię, zaprojektować unikalny wygląd i przetestować wdrożenie. Nie wierzymy w "profesjonalne strony w 24h".',
    },
    // USUNIĘTO PYTANIE O VAT
    {
      question: 'Czy po oddaniu strony zostaję sam?',
      answer: 'Absolutnie nie. Oferujemy pakiety opieki technicznej, dzięki którym Twoja strona będzie zawsze aktualna i bezpieczna. Możesz też zlecać nam dalszy rozwój serwisu.',
    }
  ];

  return (
    <section className="py-20 px-4 bg-brand-navy">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pytania i Odpowiedzi
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * index }}
              className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden"
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
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-gray-400 leading-relaxed border-t border-gray-800 pt-4">
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
