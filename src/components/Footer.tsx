import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy border-t border-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* KOLUMNA 1: O NAS */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">SWR Media</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Agencja interaktywna skupiona na wynikach. Tworzymy narzędzia sprzedażowe, łącząc psychologię klienta z technologią High-End.
            </p>
          </div>

          {/* KOLUMNA 2: KONTAKT */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <a href="tel:518550491" className="flex items-center gap-3 text-gray-400 hover:text-brand-neon transition-colors">
                <Phone className="w-4 h-4" />
                <span>518 550 491</span>
              </a>
              <a href="mailto:swr.albert.swierczewski@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-brand-neon transition-colors break-all">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>swr.albert.swierczewski@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                <span>Świercze 15a<br />21-404 Trzebieszów</span>
              </div>
            </div>
          </div>

          {/* KOLUMNA 3: DANE */}
          <div>
            <h4 className="text-white font-semibold mb-4">Dane Rejestrowe</h4>
            <div className="text-gray-400 space-y-2 text-sm">
              <p>SWR Albert Świerczewski</p>
              <p>NIP: 8252208750</p>
            </div>
          </div>
        </div>

        {/* DOLNY PASEK */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} SWR Media. Wszystkie prawa zastrzeżone.
          </p>
          <div>
            <Link
                to="/privacy-policy"
                className="text-gray-500 hover:text-brand-neon text-sm transition-colors"
            >
                Polityka Prywatności
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
