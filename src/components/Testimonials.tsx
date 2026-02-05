import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Marek K.',
      business: 'Warsztat samochodowy',
      text: 'Gość zrobił mi stronę w jeden dzień, normalnie nie wierzyłem. Telefon nie przestaje dzwonić, klienci mówią że łatwo znaleźli mnie w Google. Najlepsza inwestycja w biznes od lat.',
      rating: 5,
    },
    {
      name: 'Anna W.',
      business: 'Salon fryzjerski',
      text: 'Męczyłam się z Wordpress pół roku, nic nie działało jak trzeba. Tutaj od razu wiedziałam że to profesjonalna robota. Strona szybka, ładna i co najważniejsze - działa na telefonach bez problemu.',
      rating: 5,
    },
    {
      name: 'Tomasz S.',
      business: 'Firma remontowa',
      text: 'Za 500 zł dostałem lepszą stronę niż konkurencja za 3000 zł. Proste, przejrzyste, klient wie od razu co robię. Polecam każdemu kto nie chce przepłacać.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Co Mówią Nasi Klienci
          </h2>
          <p className="text-xl text-gray-400">
            Prawdziwe opinie od prawdziwych przedsiębiorców
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl p-8 border border-gray-700 hover:border-brand-neon/50 transition-all relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-brand-neon/20" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.business}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
