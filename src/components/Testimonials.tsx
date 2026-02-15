import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Marek Kowalczyk',
      role: 'Właściciel, MK Budownictwo',
      content: 'Miałem obawy przed wydaniem 4 tysięcy na stronę, skoro na rynku są oferty za 500 zł. Teraz widzę różnicę. Poprzednia strona "wisiała" w sieci, ta nowa faktycznie generuje telefony od inwestorów. Zwróciła się przy pierwszym zleceniu.',
      stars: 5,
      verified: true
    },
    {
      name: 'Dr Anna Zalewska',
      role: 'Stomatologia Estetyczna',
      content: 'Szukałam kogoś, kto zrozumie, że w medycynie liczy się zaufanie, a nie tylko krzykliwe kolory. Albert zaprojektował serwis, który wygląda bardzo profesjonalnie i buduje mój autorytet. Pacjenci często chwalą, że strona jest przejrzysta.',
      stars: 5,
      verified: true
    },
    {
      name: 'Piotr Wiśniewski',
      role: 'E-commerce Meblowy',
      content: 'Przesiadka z WordPressa na Next.js to była najlepsza decyzja. Sklep działa błyskawicznie, nawet na telefonach. Wyniki w Google skoczyły do góry, bo strona ładuje się w ułamku sekundy. Pełen profesjonalizm techniczny.',
      stars: 5,
      verified: true
    }
  ];

  return (
    <section className="py-24 px-4 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Opinie Przedsiębiorców
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Nie wierz nam na słowo. Zobacz, co mówią firmy, które zainwestowały w wizerunek Premium.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-dark border border-gray-800 p-8 rounded-2xl relative group hover:border-brand-neon/30 transition-all"
            >
              {/* Ikona Cytatu w tle */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-gray-800 group-hover:text-brand-neon/10 transition-colors" />

              {/* Gwiazdki */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              {/* Treść Opinii */}
              <p className="text-gray-300 mb-8 leading-relaxed italic">
                "{review.content}"
              </p>

              {/* Autor */}
              <div className="flex items-center gap-4 mt-auto border-t border-gray-800 pt-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center font-bold text-white">
                    {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{review.name}</h4>
                  <p className="text-gray-500 text-xs">{review.role}</p>
                </div>
              </div>

              {/* Odznaka Zweryfikowany */}
              {review.verified && (
                  <div className="mt-4 flex items-center gap-2 text-green-500 text-xs font-medium bg-green-500/10 w-fit px-2 py-1 rounded-full">
                      <CheckCircle className="w-3 h-3" />
                      Zweryfikowany Klient
                  </div>
              )}

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
