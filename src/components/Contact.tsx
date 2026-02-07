import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, ArrowRight, ChevronLeft, CreditCard, PhoneCall, Check } from 'lucide-react';

export default function Contact() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  
  // Stan formularza - zbieramy dane krok po kroku
  const [formData, setFormData] = useState({
    domainStatus: '', // Krok 1
    industry: '',     // Krok 2
    timeline: '',     // Krok 3
    name: '',         // Krok 4
    phone: '',        // Krok 4
    email: '',        // Krok 4
    info: '',         // Krok 4
    paymentPreference: '' // Krok 5 (Finał)
  });

  // Funkcja do aktualizacji danych i przejścia dalej
  const handleSelection = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setStep(prev => prev + 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Finałowa wysyłka do Web3Forms
  const submitForm = async (preference: 'Online (100zł)' | 'Rozmowa/Faktura') => {
    setStatus('loading');
    
    // Aktualizujemy preferencję płatności w locie przed wysyłką
    const finalData = { ...formData, paymentPreference: preference };

    const formBody = new FormData();
    formBody.append('access_key', '4343a106-203d-4279-9980-da05e02f360f'); // Twój klucz
    formBody.append('subject', `Nowe Zgłoszenie: ${finalData.name} (${preference})`);
    
    // Ładne formatowanie wiadomości dla Ciebie w mailu
    const messageBody = `
      KLIENT: ${finalData.name}
      TELEFON: ${finalData.phone}
      EMAIL: ${finalData.email}
      ---
      DOMENA: ${finalData.domainStatus}
      BRANŻA: ${finalData.industry}
      TERMIN: ${finalData.timeline}
      ---
      PREFERENCJA PŁATNOŚCI: ${preference}
      DODATKOWE INFO: ${finalData.info}
    `;
    formBody.append('message', messageBody);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formBody,
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        if (preference === 'Online (100zł)') {
          setMessage('Dziękujemy! Za chwilę otrzymasz SMS/Email z linkiem do bezpiecznej płatności 100 zł.');
        } else {
          setMessage('Dziękujemy! Zadzwonimy do Ciebie w ciągu 24h, aby ustalić szczegóły.');
        }
      } else {
        setStatus('error');
        setMessage('Błąd wysyłania. Zadzwoń do nas: 518 550 491');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Błąd połączenia. Spróbuj ponownie.');
    }
  };

  // Obliczanie postępu (1-5) -> 20% - 100%
  const progress = (step / 5) * 100;

  return (
    <section id="contact" className="py-20 px-4 bg-brand-dark min-h-[800px] flex items-center justify-center">
      <div className="max-w-3xl w-full mx-auto">
        
        {/* NAGŁÓWEK SEKCYJNY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Zarezerwuj Termin
          </h2>
          <p className="text-xl text-gray-400">
            Wypełnij krótki formularz, aby sprawdzić dostępność na jutro.
          </p>
        </motion.div>

        {/* GŁÓWNA KARTA FORMULARZA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl relative"
        >
          {/* PASEK POSTĘPU (ZEIGARNIK EFFECT) */}
          <div className="h-2 bg-gray-800 w-full">
            <motion.div 
              className="h-full bg-gradient-to-r from-brand-neon to-brand-blue"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="p-8 md:p-12">
            
            {/* POWRÓT (Jeśli nie jesteśmy w kroku 1 i nie ma sukcesu) */}
            {step > 1 && status !== 'success' && (
              <button 
                onClick={() => setStep(prev => prev - 1)}
                className="flex items-center gap-2 text-gray-500 hover:text-white mb-6 text-sm transition-colors"
              >
                <ChevronLeft className="w-4 h-4" /> Wróć
              </button>
            )}

            {/* STAN SUKCESU */}
            {status === 'success' ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Zgłoszenie Przyjęte!</h3>
                <p className="text-gray-300 text-lg mb-8">{message}</p>
                <div className="p-4 bg-brand-navy/50 rounded-xl border border-gray-700 inline-block">
                  <p className="text-sm text-gray-400">Potwierdzenie wysłaliśmy też na Twój email.</p>
                </div>
              </motion.div>
            ) : (
              /* LOGIKA KROKÓW */
              <AnimatePresence mode='wait'>
                
                {/* KROK 1: DOMENA */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-8">Czy posiadasz już domenę lub starą stronę?</h3>
                    <div className="grid gap-4">
                      {['Tak, mam już coś', 'Nie, startuję od zera'].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSelection('domainStatus', opt)}
                          className="w-full text-left p-6 rounded-xl border border-gray-700 bg-gray-800/50 hover:bg-brand-navy hover:border-brand-neon/50 hover:text-brand-neon transition-all flex justify-between items-center group"
                        >
                          <span className="text-lg font-medium text-gray-200 group-hover:text-white">{opt}</span>
                          <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-brand-neon opacity-0 group-hover:opacity-100 transition-all" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* KROK 2: BRANŻA */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-8">W jakiej branży działasz?</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {['Usługi / Budowlanka', 'Beauty / Zdrowie', 'Mechanika / Transport', 'Handel / Sklep', 'Edukacja / Szkolenia', 'Inne'].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSelection('industry', opt)}
                          className="w-full text-left p-5 rounded-xl border border-gray-700 bg-gray-800/50 hover:bg-brand-navy hover:border-brand-neon/50 hover:text-brand-neon transition-all"
                        >
                          <span className="text-lg font-medium text-gray-200">{opt}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* KROK 3: CZAS (PILNOŚĆ) */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-8">Na kiedy potrzebujesz gotowej strony?</h3>
                    <div className="grid gap-4">
                      <button
                        onClick={() => handleSelection('timeline', 'Na wczoraj (Priorytet)')}
                        className="w-full text-left p-6 rounded-xl border border-yellow-500/30 bg-yellow-500/10 hover:bg-yellow-500/20 hover:border-yellow-500 transition-all flex justify-between items-center group"
                      >
                        <span className="text-lg font-bold text-yellow-500">Na wczoraj (Priorytet 24h)</span>
                        <ArrowRight className="w-5 h-5 text-yellow-500" />
                      </button>
                      
                      <button
                        onClick={() => handleSelection('timeline', 'W tym tygodniu')}
                        className="w-full text-left p-6 rounded-xl border border-gray-700 bg-gray-800/50 hover:bg-brand-navy hover:border-brand-neon transition-all"
                      >
                        <span className="text-lg font-medium text-gray-200">W tym tygodniu</span>
                      </button>

                      <button
                        onClick={() => handleSelection('timeline', 'Spokojnie, tylko się rozglądam')}
                        className="w-full text-left p-6 rounded-xl border border-gray-700 bg-gray-800/50 hover:bg-brand-navy hover:border-brand-neon transition-all"
                      >
                        <span className="text-lg font-medium text-gray-200">Spokojnie, tylko się rozglądam</span>
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* KROK 4: DANE KONTAKTOWE */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">Świetnie! Mamy wolny termin.</h3>
                    <p className="text-gray-400 mb-8">Gdzie mamy wysłać podgląd gotowego projektu?</p>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Imię i Nazwisko *</label>
                        <input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          type="text"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-brand-neon"
                          placeholder="Jan Kowalski"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Numer Telefonu *</label>
                        <input
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          type="tel"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-brand-neon"
                          placeholder="500 600 700"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Email (opcjonalnie)</label>
                        <input
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          type="email"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-brand-neon"
                          placeholder="jan@firma.pl"
                        />
                      </div>
                       <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Dodatkowe uwagi</label>
                        <textarea
                          name="info"
                          value={formData.info}
                          onChange={handleInputChange}
                          rows={2}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-brand-neon resize-none"
                          placeholder="Np. nazwa firmy, kolory..."
                        />
                      </div>

                      <button
                        onClick={() => {
                          if(formData.name && formData.phone) setStep(5);
                          else alert("Proszę podać Imię i Telefon");
                        }}
                        className="w-full mt-4 bg-brand-neon text-black font-bold text-lg py-4 rounded-full hover:shadow-lg hover:shadow-brand-neon/50 transition-all flex items-center justify-center gap-2"
                      >
                        Przejdź do podsumowania <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* KROK 5: WYBÓR PŁATNOŚCI (FINAŁ) */}
                {step === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-4">Ostatni krok: Startujemy?</h3>
                    <div className="bg-brand-navy/30 p-4 rounded-xl border border-brand-neon/20 mb-8">
                       <p className="text-gray-300 text-sm">
                         <span className="text-brand-neon font-bold">Twoje dane:</span> {formData.name}, {formData.phone}
                       </p>
                    </div>

                    <div className="space-y-4">
                      {/* OPCJA A: ONLINE (Szybka) */}
                      <button
                        onClick={() => submitForm('Online (100zł)')}
                        disabled={status === 'loading'}
                        className="w-full p-1 rounded-2xl bg-gradient-to-r from-brand-neon to-brand-blue hover:scale-[1.02] transition-transform"
                      >
                        <div className="bg-gray-900 rounded-xl p-6 flex items-center justify-between">
                            <div className="text-left">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="bg-green-500 text-black text-[10px] font-bold px-2 py-0.5 rounded">POLECANE</span>
                                </div>
                                <h4 className="text-white font-bold text-lg flex items-center gap-2">
                                   <CreditCard className="w-5 h-5 text-brand-neon" />
                                   Wpłacam zaliczkę 100 zł
                                </h4>
                                <p className="text-gray-400 text-sm mt-1">Start prac natychmiast. Płatność online.</p>
                            </div>
                            <ArrowRight className="w-6 h-6 text-brand-neon" />
                        </div>
                      </button>

                      {/* OPCJA B: PROFORMA / ROZMOWA */}
                      <button
                        onClick={() => submitForm('Rozmowa/Faktura')}
                        disabled={status === 'loading'}
                        className="w-full p-6 rounded-2xl border border-gray-700 bg-gray-800/50 hover:bg-gray-800 transition-colors flex items-center justify-between"
                      >
                         <div className="text-left">
                             <h4 className="text-white font-bold text-lg flex items-center gap-2">
                                <PhoneCall className="w-5 h-5 text-gray-400" />
                                Proszę o Fakturę / Kontakt
                             </h4>
                             <p className="text-gray-400 text-sm mt-1">Opłać tradycyjnym przelewem.</p>
                         </div>
                         <ArrowRight className="w-6 h-6 text-gray-500" />
                      </button>
                    </div>

                    {status === 'loading' && (
                        <p className="text-center text-brand-neon mt-4 animate-pulse">Przetwarzanie zgłoszenia...</p>
                    )}
                    {status === 'error' && (
                        <p className="text-center text-red-500 mt-4 flex items-center justify-center gap-2">
                            <AlertCircle className="w-4 h-4" /> {message}
                        </p>
                    )}

                  </motion.div>
                )}

              </AnimatePresence>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
