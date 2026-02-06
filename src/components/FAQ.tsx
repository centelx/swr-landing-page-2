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
      question: 'Co jeżeli strona mi się nie spodoba?',
      answer: 'Nic nie ryzykujesz. Wpłacasz jedynie 100 zł zaliczki, która jest w 100% zwrotna. Pracujemy nad Twoją stroną i wprowadzamy poprawki tak długo, aż powiesz "To jest to!". Jeśli mimo naszych starań nie dojdziemy do porozumienia (co jeszcze nam się nie zdarzyło), po prostu oddajemy Ci pieniądze. Płacisz pełną kwotę (pozostałe 400 zł) tylko wtedy, gdy jesteś w pełni zadowolony z efektu.',
    },
    {
      question: 'Czy muszę płacić całość z góry?',
      answer: 'Nie! Aby rozpocząć pracę, pobieramy tylko symboliczną zaliczkę 100 zł. Resztę kwoty (400 zł) wpłacasz dopiero po zaakceptowaniu gotowej strony. To uczciwy układ, w którym obie strony czują się bezpiecznie.',
    },
    {
      question: 'Czy 500 zł to wszystko?',
      answer: 'Tak, 500 zł to pełna cena za projekt strony. Jedyne dodatkowe koszty to hosting (utrzymanie strony w sieci) i domena (adres www). Możesz skorzystać z naszych pakietów (hosting 1 miesiąc gratis, potem 29 zł/mc przy płatności rocznej) lub własnego dostawcy.',
    },
    {
      question: 'Czy naprawdę 24 godziny?',
      answer: 'Tak! Po zatwierdzeniu szczegółów projektu (logo, teksty, zdjęcia) Twoja strona jest gotowa w ciągu 24 godzin roboczych. Często działamy szybciej.',
    },
    {
      question: 'Co jeśli coś trzeba zmienić po odebraniu strony?',
      answer: 'Masz 7 dni na darmowe poprawki po dostawie strony. Jeśli coś nie pasuje - zmieniamy to bez dodatkowych kosztów. Po tym okresie oferujemy pakiety utrzymania, w ramach których również wprowadzamy aktualizacje.',
    },
    {
      question: 'Czy dostaję kod źródłowy?',
      answer: 'Tak! Dostajesz pełen kod źródłowy swojej strony. To Twoja własność. Możesz w każdej chwili przenieść się do innego dostawcy.',
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
