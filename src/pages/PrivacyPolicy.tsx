import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-brand-dark pt-20 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-brand-neon hover:text-brand-blue transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Powrót do strony głównej</span>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Polityka Prywatności
          </h1>

          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl p-8 md:p-12 border border-gray-700 text-gray-300 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Administrator Danych</h2>
              <p className="leading-relaxed">
                Administratorem danych osobowych jest:
              </p>
              <div className="mt-3 pl-4 border-l-2 border-brand-neon">
                <p><strong className="text-white">SWR Albert Świerczewski</strong></p>
                <p>Adres: Świercze 15a, 21-404 Trzebieszów</p>
                <p>NIP: 8252208750</p>
                <p>Email: swr.albert.swierczewski@gmail.com</p>
                <p>Telefon: 518 550 491</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Zakres Przetwarzanych Danych</h2>
              <p className="leading-relaxed">
                W ramach świadczonych usług przetwarzamy następujące dane osobowe:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 pl-4">
                <li>Imię i nazwisko</li>
                <li>Numer telefonu</li>
                <li>Informacje o branży działalności</li>
                <li>Adres email (jeśli zostanie podany)</li>
                <li>Treść wiadomości przekazanej przez formularz kontaktowy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Cel Przetwarzania Danych</h2>
              <p className="leading-relaxed">
                Twoje dane osobowe przetwarzamy w następujących celach:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 pl-4">
                <li>Kontakt w celu przedstawienia oferty usług</li>
                <li>Realizacja zamówionej usługi (tworzenie strony internetowej)</li>
                <li>Obsługa reklamacji i zapytań</li>
                <li>Archiwizacja korespondencji (zgodnie z wymogami prawnymi)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Podstawa Prawna</h2>
              <p className="leading-relaxed">
                Przetwarzanie danych osobowych odbywa się na podstawie:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 pl-4">
                <li>Art. 6 ust. 1 lit. b) RODO - realizacja umowy lub działania podejmowane na żądanie osoby przed zawarciem umowy</li>
                <li>Art. 6 ust. 1 lit. f) RODO - prawnie uzasadniony interes administratora (kontakt handlowy)</li>
                <li>Art. 6 ust. 1 lit. c) RODO - wypełnienie obowiązku prawnego (archiwizacja dokumentów)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Okres Przechowywania Danych</h2>
              <p className="leading-relaxed">
                Dane osobowe przechowujemy przez okres:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 pl-4">
                <li>Niezbędny do realizacji umowy</li>
                <li>Wymagany przepisami prawa (w szczególności przepisami o rachunkowości - 5 lat)</li>
                <li>Do momentu wycofania zgody (jeśli przetwarzanie opiera się na zgodzie)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Twoje Prawa</h2>
              <p className="leading-relaxed">
                Masz prawo do:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 pl-4">
                <li>Dostępu do swoich danych osobowych</li>
                <li>Sprostowania (poprawiania) danych</li>
                <li>Usunięcia danych</li>
                <li>Ograniczenia przetwarzania</li>
                <li>Przenoszenia danych</li>
                <li>Wniesienia sprzeciwu wobec przetwarzania</li>
                <li>Wniesienia skargi do organu nadzorczego (UODO)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Odbiorcy Danych</h2>
              <p className="leading-relaxed">
                Twoje dane mogą być przekazywane następującym kategoriom odbiorców:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 pl-4">
                <li>Dostawcy usług IT i hostingowych (przetwarzający dane w naszym imieniu)</li>
                <li>Organy publiczne w zakresie wymaganym przepisami prawa</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Bezpieczeństwo Danych</h2>
              <p className="leading-relaxed">
                Stosujemy odpowiednie środki techniczne i organizacyjne zapewniające bezpieczeństwo
                przetwarzanych danych osobowych, w tym zabezpieczenia przed ich nieuprawnionym
                udostępnieniem, utratą czy uszkodzeniem.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Pliki Cookie</h2>
              <p className="leading-relaxed">
                Nasza strona internetowa może wykorzystywać pliki cookie w celach:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 pl-4">
                <li>Analitycznych (badanie ruchu na stronie)</li>
                <li>Funkcjonalnych (zapewnienie prawidłowego działania strony)</li>
              </ul>
              <p className="mt-3 leading-relaxed">
                Możesz w każdej chwili zmienić ustawienia swojej przeglądarki, aby blokować pliki cookie.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Kontakt</h2>
              <p className="leading-relaxed">
                W sprawach związanych z ochroną danych osobowych możesz skontaktować się z nami:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 pl-4">
                <li>Email: swr.albert.swierczewski@gmail.com</li>
                <li>Telefon: 518 550 491</li>
              </ul>
            </section>

            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-sm text-gray-500">
                Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
