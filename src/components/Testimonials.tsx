import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Marek Kowalczyk',
      role: 'Właściciel, MK Budownictwo',
      // ZMIANA: Nowa treść bez wzmianki o cenie
      content: 'Bałem się, że strona będzie tylko ładną wizytówką, a ona realnie pracuje. Klienci chwalą, że wszystko jest jasne i czytelne. Od pierwszego tygodnia mam więcej zapytań z formularza niż przez ostatni rok. Konkretna robota.',
      stars: 5,
      verified: true,
      image: '/avatar1.jpg' // Placeholder dla awatara
    },
    {
      name: 'Dr Anna Zalewska',
      role: 'Stomatologia Estetyczna',
      // USUNIĘTO fragment o cenie "4 tysie to przesada" itp.
      content: 'Nie znam się na komputerach i nie mam czasu na pisanie tekstów. Pan Albert zajął się wszystkim od A do Z. Ja tylko zaakceptowałam projekt. Strona wygląda nowocześnie, a pacjentki chwalą, że w końcu łatwo znaleźć cennik i numer telefonu.',
      stars: 5,
      verified: true,
      image: '/avatar2.jpg' // Placeholder dla awatara
    },
    {
      name: 'Piotr Wiśniewski',
      role: 'Producent Mebli',
      // USUNIĘTO fragment "Warto było dopłacić..."
      content: 'Wcześniej miałem sklep na Wordpressie i ciągle coś się sypało albo zamulało. Tutaj? Strona śmiga aż miło, na telefonie ładuje się momentalnie. Klienci przestali dzwonić z pytaniami "dlaczego zdjęcia się nie wczytują". Pełen profesjonalizm.',
      stars: 5,
      verified: true
      // Brak zdjęcia dla trzeciej osoby
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
            Opinie Klientów
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Bez owijania w bawełnę. Zobacz, co mówią firmy, które nam zaufały.
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
              className="bg-brand-dark border border-gray-800 p-8 rounded-2xl relative group hover:border-brand-neon/30 transition-all flex flex-col"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-800 group-hover:text-brand-neon/10 transition-colors" />

              <div className="flex gap-1 mb-6">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed italic flex-grow">
                "{review.content}"
              </p>

              <div className="flex items-center gap-4 mt-auto border-t border-gray-800 pt-6">
                {/* Logika Awatara */}
                {review.image ? (
                   <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-12 h-12 rounded-full object-cover border border-gray-600"
                    onError={(e) => {
                        // Fallback jeśli zdjęcie się nie załaduje
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement?.querySelector('.fallback-avatar')?.classList.remove('hidden');
                    }}
                   />
                ) : (
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center font-bold text-white text-lg border border-gray-600">
                        {review.name.charAt(0)}
                    </div>
                )}
                
                {/* Ukryty fallback dla zdjęć które nie wczytają się (np. brak pliku) */}
                {review.image && (
                     <div className="fallback-avatar hidden w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center font-bold text-white text-lg border border-gray-600">
                        {review.name.charAt(0)}
                    </div>
                )}

                <div>
                  <h4 className="text-white font-bold text-sm">{review.name}</h4>
                  <p className="text-gray-500 text-xs">{review.role}</p>
                  {review.verified && (
                      <div className="flex items-center gap-1 text-green-500 text-[10px] font-medium mt-1">
                          <CheckCircle className="w-3 h-3" />
                          Zweryfikowany zakup
                      </div>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
