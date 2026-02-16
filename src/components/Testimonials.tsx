import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle, DraftingCompass } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Marek Kowalczyk',
      role: 'Właściciel, MK Budownictwo',
      content: 'Bałem się, że strona będzie tylko ładną wizytówką, a ona realnie pracuje. Klienci chwalą, że wszystko jest jasne i czytelne. Od pierwszego tygodnia mam więcej zapytań z formularza niż przez ostatni rok. Konkretna robota.',
      stars: 5,
      verified: true,
      // TYP 1: Wygenerowane inicjały (neonowe)
      type: 'generated-initials',
      initials: 'MK',
      colors: 'from-brand-neon to-brand-blue text-black'
    },
    {
      name: 'Dr Anna Zalewska',
      role: 'Stomatologia Estetyczna',
      content: 'Nie znam się na komputerach i nie mam czasu na pisanie tekstów. Pan Albert zajął się wszystkim od A do Z. Ja tylko zaakceptowałam projekt. Strona wygląda nowocześnie, a pacjentki chwalą, że w końcu łatwo znaleźć cennik i numer telefonu.',
      stars: 5,
      verified: true,
      // TYP 2: Zdjęcie (placeholder)
      type: 'image',
      image: '/avatar2.jpg'
    },
    {
      name: 'Piotr Wiśniewski',
      role: 'Producent Mebli',
      content: 'Wcześniej miałem sklep na Wordpressie i ciągle coś się sypało albo zamulało. Tutaj? Strona śmiga aż miło, na telefonie ładuje się momentalnie. Klienci przestali dzwonić z pytaniami "dlaczego zdjęcia się nie wczytują". Pełen profesjonalizm.',
      stars: 5,
      verified: true,
      // TYP 3: NOWOŚĆ - Abstrakcyjna ikona branżowa (niebieska)
      type: 'abstract-icon',
      icon: DraftingCompass, // Ikona kojarząca się z projektowaniem/meblami
      colors: 'from-blue-600 to-indigo-900 text-blue-100'
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
                
                {/* LOGIKA WYŚWIETLANIA AWATARA */}
                <div className="w-12 h-12 rounded-full border border-gray-600 overflow-hidden flex-shrink-0 shadow-sm">
                    
                    {/* 1. Wygenerowane INICJAŁY (Marek) */}
                    {review.type === 'generated-initials' && (
                        <div className={`w-full h-full bg-gradient-to-br ${review.colors} flex items-center justify-center font-bold text-sm tracking-tighter`}>
                            {review.initials}
                        </div>
                    )}

                    {/* 2. ABSTRAKCYJNA IKONA (Piotr) - NOWOŚĆ */}
                    {review.type === 'abstract-icon' && review.icon && (
                        <div className={`w-full h-full bg-gradient-to-br ${review.colors} flex items-center justify-center`}>
                            <review.icon className="w-6 h-6 opacity-80" />
                        </div>
                    )}

                    {/* 3. ZDJĘCIE (Anna) */}
                    {review.type === 'image' && review.image && (
                       <img 
                        src={review.image} 
                        alt={review.name} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement?.querySelector('.fallback-text')?.classList.remove('hidden');
                        }}
                       />
                    )}

                    {/* 4. Fallback (Domyślny szary z literą) */}
                    {review.type === 'default' && (
                        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center font-bold text-white text-lg">
                            {review.name.charAt(0)}
                        </div>
                    )}
                    
                    {/* Ukryty fallback dla błędów ładowania zdjęć */}
                    <div className="fallback-text hidden w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 items-center justify-center font-bold text-white text-lg flex">
                         {review.name.charAt(0)}
                    </div>
                </div>

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
