import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Dlaczego Wasze usługi kosztują więcej niż u "studenta"?',
      answer: 'Bo dostarczamy narzędzie biznesowe, a nie tylko kod. Student zrobi stronę, która "jest". My robimy stronę, która "sprzedaje". W cenie otrzymujesz analizę rynku, psychologię sprzedaży, copywriting i optymalizację techniczną, której amatorzy nie potrafią wykonać.',
    },
    {
      question: 'Jak długo trwa realizacja?',
      answer: 'Standardowy czas to 7-14 dni roboczych. Jakość wymaga czasu - musimy poznać Twój biznes, przygotować strategię, zaprojektować unikalny wygląd i przetestować wdrożenie. Nie wierzymy w "strony w 24h", bo one rzadko przynoszą zyski.',
    },
    {
      question: 'Czy wystawiacie fakturę VAT?',
      answer: 'Oczywiście. Działamy legalnie, płacimy podatki i wystawiamy pełną fakturę VAT 23%, którą możesz wrzucić w koszty firmy.',
    },
    {
      question: 'Czy po oddaniu strony zostaję sam?',
      answer: 'Absolutnie nie. Oferujemy pakiety opieki technicznej, dzięki którym Twoja strona będzie zawsze aktualna i bezpieczna. Możesz też zlecać nam dalszy rozwój serwisu.',
    },
    {
      question: 'Czy strona będzie widoczna w Google?',
      answer: 'Tak. Każdy nasz projekt jest optymalizowany pod kątem SEO technicznego (szybkość, struktura nagłówków, meta tagi). To fundament, dzięki któremu Google chętniej wyświetla Twoją stronę wyżej w wynikach wyszukiwania.',
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
