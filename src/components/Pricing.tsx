import { motion } from 'framer-motion';
import { Check, ShieldCheck, Zap, BarChart } from 'lucide-react';

export default function Pricing() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const plans = [
    {
      name: 'Wizytówka',
      price: '2900',
      oldPrice: '3500', // DODANO PROMOCJĘ
      desc: 'Idealna na start dla specjalistów i małych firm.',
      features: [
        'Projekt One-Page (Wszystko na 1 stronie)',
        'Działa idealnie na telefonach (RWD)',
        'Integracja z Mapami / Facebookiem',
        'Przyjazna dla Google (Podstawy SEO)',
        'Formularz kontaktowy na email',
        'Szybki serwer i domena (rok w cenie)',
      ]
    },
    {
      name: 'Strona Firmowa',
      price: '3900',
      oldPrice: '4900', // DODANO PROMOCJĘ
      popular: false, // USUNIĘTO WYRÓŻNIENIE
      desc: 'Kompletne rozwiązanie budujące przewagę rynkową.',
      features: [
        'Rozbudowana struktura (do 6 podstron)',
        'Panel CMS (Edytujesz treści sam)',
        'Teksty sprzedażowe (Pisze Copywriter)',
        'Podpięcie statystyk odwiedzin',
        'Konfiguracja wizytówki Google',
        'Błyskawiczne wczytywanie (Lepsze SEO)',
      ]
    },
    {
      name: 'E-Commerce / Custom',
      price: 'Wycena',
      desc: 'Dla wymagających biznesów i sklepów.',
      features: [
        'Sklep internetowy / Płatności',
        'Niestandardowe funkcjonalności',
        'Integracje z hurtowniami / CRM',
        'Strategia marketingowa',
        'Wersje wielojęzyczne',
        'Analiza konkurencji'
      ]
    }
  ];

  return (
    <section id="offer" className="py-24 px-4 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Inwestycja w Twój Biznes
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Nie oferujemy "tanich stron", które trzeba poprawiać po miesiącu. 
            Dostarczamy kompletne rozwiązania, które zarabiają na siebie od pierwszego dnia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.popular 
                  ? 'bg-gray-800 border-2 border-brand-neon' 
                  : 'bg-gray-900 border border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-neon text-black px-4 py-1 rounded-full text-sm font-bold">
                  NAJCZĘŚCIEJ WYBIERANY
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm h-10">{plan.desc}</p>
              </div>

              <div className="mb-8">
                {/* Wyświetlanie starej ceny, jeśli istnieje */}
                {plan.oldPrice && (
                    <div className="text-gray-500 line-through text-lg font-medium decoration-red-500/50 mb-1">
                        {plan.oldPrice} zł
                    </div>
                )}
                <div className="flex items-baseline gap-1">
                  {plan.price !== 'Wycena' && <span className="text-gray-400 text-lg">od</span>}
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.price !== 'Wycena' && <span className="text-xl text-gray-400">zł</span>}
                </div>
                {plan.price !== 'Wycena' && <p className="text-gray-500 text-sm mt-2">+ VAT 23%</p>}
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-brand-neon/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-brand-neon" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  plan.popular
                    ? 'bg-brand-neon text-black hover:bg-white'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Zapytaj o ten pakiet
              </button>
            </motion.div>
          ))}
        </div>

        {/* Sekcja "Black Magic" - Uzasadnienie ceny */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 border-t border-gray-800 pt-12">
            <div className="text-center">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4 text-brand-neon">
                    <Zap className="w-6 h-6" />
                </div>
                <h4 className="text-white font-bold mb-2">Technologia React/Next.js</h4>
                <p className="text-gray-400 text-sm">Nie używamy powolnych kreatorów. Twoja strona będzie działać błyskawicznie, co Google nagradza wyższą pozycją.</p>
            </div>
            <div className="text-center">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4 text-brand-neon">
                    <BarChart className="w-6 h-6" />
                </div>
                <h4 className="text-white font-bold mb-2">Psychologia Sprzedaży</h4>
                <p className="text-gray-400 text-sm">Układ strony projektujemy tak, aby prowadził klienta za rękę prosto do przycisku "Kup" lub "Zadzwoń".</p>
            </div>
             <div className="text-center">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4 text-brand-neon">
                    <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-white font-bold mb-2">Bezpieczeństwo i RODO</h4>
                <p className="text-gray-400 text-sm">Zadba o certyfikaty SSL, politykę prywatności i zgodność z prawem, abyś mógł spać spokojnie.</p>
            </div>
        </div>

      </div>
    </section>
  );
}
