import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { CheckCircle, AlertCircle, ArrowRight, ChevronLeft, CreditCard, PhoneCall, Mail, Phone } from 'lucide-react';

export default function Contact() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  
  // Stan formularza
  const [formData, setFormData] = useState({
    domainStatus: '', 
    industry: '',     
    timeline: '',     
    contactMethod: '',
    name: '',         
    phone: '',        
    email: '',        
    info: '',         
    paymentPreference: '' 
  });

  const handleSelection = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setStep(prev => prev + 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const submitForm = async (preference: 'Online (100zł)' | 'Rozmowa/Faktura') => {
    setStatus('loading');
    
    const finalData = { ...formData, paymentPreference: preference };

    const formBody = new FormData();
    formBody.append('access_key', '4343a106-203d-4279-9980-da05e02f360f'); 
    formBody.append('subject', `Nowe Zgłoszenie: ${finalData.name} (${preference})`);
    
    const messageBody = `
      KLIENT: ${finalData.name}
      TELEFON: ${finalData.phone}
      EMAIL: ${finalData.email}
      ---
      PREFEROWANY KONTAKT (WYWIAD): ${finalData.contactMethod}
      ---
      DOMENA: ${finalData.domainStatus}
      BRANŻA: ${finalData.industry}
      TERMIN: ${finalData.timeline}
      ---
      PŁATNOŚĆ: ${preference}
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
          setMessage('Dziękujemy! Skontaktujemy się wybraną metodą w ciągu 24h.');
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

  const progress = (step / 6) * 100;

  return (
    <section id="contact" className="py-20 px-4 bg-brand-dark min-h-[850px] flex items-center justify-center">
      <div className="max-w-3xl w-full mx-auto">
        
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
            Sprawdź dostępność na jutro i wybierz formę współpracy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl relative"
        >
          {/* PASEK POSTĘPU - ZMIANA NA ZIELONY */}
          <div className="h-2 bg-gray-800 w-full">
            <motion.div 
              className="h-full bg-gradient-to-r from-green-400 to-green-600"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="p-8 md:p-12">
            
            {step > 1 && status !== 'success' && (
              <button 
                onClick={() => setStep(prev => prev - 1)}
                className="flex items-center gap-2 text-gray-500 hover:text-white mb-6 text-sm transition-colors"
              >
                <ChevronLeft className="w-4 h-4" /> Wróć
              </button>
            )}

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
              <AnimatePresence mode='wait'>
                
                {/* KROK 1 */}
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

                {/* KROK 2 */}
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

                {/* KROK 3 */}
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

                {/* KROK 4 */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">Jak chcesz omówić szczegóły?</h3>
                    <p className="text-gray-400 mb-8">Nie robimy stron "w ciemno". Chcemy poznać Twój biznes, aby strona sprzedawała.</p>
                    
                    <div className="grid gap-4">
                      <button
                        onClick={() => handleSelection('contactMethod', 'Telefonicznie (5-10 min)')}
                        className="w-full text-left p-6 rounded-xl border border-gray-700 bg-gray-800/50 hover:bg-brand-navy hover:border-brand-neon transition-all flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-4">
                            <div className="bg-brand-neon/20 p-3 rounded-full text-brand-neon">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <span className="text-lg font-bold text-white block">Krótka Rozmowa (5-10 min)</span>
                                <span className="text-gray-400 text-sm">Zadzwońcie do mnie i zapytajcie o to, co ważne.</span>
                            </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-brand-neon" />
                      </button>
                      
                      <button
                        onClick={() => handleSelection('contactMethod', 'Email (Ankieta)')}
                        className="w-full text-left p-6 rounded-xl border border-gray-700 bg-gray-800/50 hover:bg-brand-navy hover:border-brand-neon transition-all flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-4">
                            <div className="bg-brand-blue/20 p-3 rounded-full text-brand-blue">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <span className="text-lg font-bold text-white block">Formularz Email</span>
                                <span className="text-gray-400 text-sm">Wolę odpisać na pytania w wolnej chwili.</span>
                            </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-brand-neon" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* KROK 5 */}
                {step === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">Świetnie! Mamy wolny termin.</h3>
                    <p className="text-gray-400 mb-8">
                        {formData.contactMethod.includes('Email') 
                            ? "Gdzie mamy wysłać ankietę projektową?" 
                            : "Na jaki numer mamy zadzwonić?"}
                    </p>
                    
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
                        <label className="block text-sm font-medium text-gray-400 mb-1">Email (do wysyłki podglądu) *</label>
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
                        <label className="block text-sm font-medium text-gray-400 mb-1">Dodatkowe uwagi (opcjonalnie)</label>
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
                          if(formData.name && formData.phone && formData.email) setStep(6);
                          else alert("Proszę uzupełnić wymagane dane");
                        }}
                        className="w-full mt-4 bg-brand-neon text-black font-bold text-lg py-4 rounded-full hover:shadow-lg hover:shadow-brand-neon/50 transition-all flex items-center justify-center gap-2"
                      >
                        Przejdź do podsumowania <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* KROK 6 */}
                {step === 6 && (
                  <motion.div
                    key="step6"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-4">Ostatni krok: Potwierdź rezerwację</h3>
                    <div className="bg-brand-navy/30 p-4 rounded-xl border border-brand-neon/20 mb-8">
                       <p className="text-gray-300 text-sm mb-1">
                         <span className="text-brand-neon font-bold">Twoje dane:</span> {formData.name}, {formData.phone}
                       </p>
                       <p className="text-gray-300 text-sm">
                         <span className="text-brand-neon font-bold">Wybrany kontakt:</span> {formData.contactMethod}
                       </p>
                    </div>

                    <div className="space-y-4">
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
                                <p className="text-gray-400 text-sm mt-1">Rezerwacja terminu + Start od zaraz.</p>
                            </div>
                            <ArrowRight className="w-6 h-6 text-brand-neon" />
                        </div>
                      </button>

                      <button
                        onClick={() => submitForm('Rozmowa/Faktura')}
                        disabled={status === 'loading'}
                        className="w-full p-6 rounded-2xl border border-gray-700 bg-gray-800/50 hover:bg-gray-800 transition-colors flex items-center justify-between"
                      >
                         <div className="text-left">
                             <h4 className="text-white font-bold text-lg flex items-center gap-2">
                                <PhoneCall className="w-5 h-5 text-gray-400" />
                                Zapłać później (Faktura)
                             </h4>
                             <p className="text-gray-400 text-sm mt-1">Najpierw ustalmy szczegóły.</p>
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
