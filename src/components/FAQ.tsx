import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Czy to prawda, że zobaczę stronę w 24 godziny?',
      answer: 'Tak! Wykorzystujemy sztuczną inteligencję do automatyzacji powtarzalnego kodowania. Dzięki temu w 24 godziny od startu prac pokazujemy Ci pierwszy, działający szkielet i design na naszym serwerze testowym. Kolejne dni to dopieszczanie tekstów i wprowadzanie Twoich poprawek.',
    },
    {
      question: 'Czy moją stronę robi od zera automat (AI)?',
      answer: 'Absolutnie nie. AI to dla nas tylko narzędzie – jak zaawansowany kalkulator dla księgowego. Automat pisze żmudny kod, ale to nasz zespół projektuje strategię, wymyśla teksty sprzedażowe i dba o to, żeby strona realnie zdobywała klientów. Płacisz za naszą wiedzę marketingową, a nie za ręczne wklepywanie kodu.',
    },
    {
      question: 'Czy muszę płacić całość z góry?',
      answer: 'Nie. Działamy w modelu "Bezpieczny Start". Pobieramy jedynie 20% zaliczki na rozpoczęcie prac (rezerwacja czasu zespołu). Pozostałe 80% płacisz dopiero wtedy, gdy zobaczysz gotową, działającą stronę na naszym serwerze testowym i zaakceptujesz efekt.',
    },
    {
      question: 'Czy jestem właścicielem strony?',
      answer: 'Tak. W przeciwieństwie do abonamentowych kreatorów, po opłaceniu końcowej faktury stajesz się 100% właścicielem kodu źródłowego i praw autorskich. Możesz przenieść stronę na dowolny serwer i robić z nią co chcesz.',
    },
    {
      question: 'Co jeśli strona mi się nie spodoba?',
      answer: 'Pracujemy do skutku. W cenie projektu uwzględnione są rundy poprawek. Zanim zakodujemy stronę, przedstawiamy wstępną wizję. Jeśli finalny efekt drastycznie rozminie się z ustaleniami (co nam się nie zdarza), masz prawo do rezygnacji, a my nie pobieramy końcowej wpłaty.',
    },
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
                  className={`w-5 h-5 text-brand-neon flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''
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