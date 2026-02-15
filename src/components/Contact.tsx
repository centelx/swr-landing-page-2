import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { CheckCircle, ArrowRight, ChevronLeft, Phone, Mail } from 'lucide-react';

export default function Contact() {
  // Mamy teraz 3 kroki, więc postęp liczymy dla 3
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const [formData, setFormData] = useState({
    industry: '',     
    contactMethod: '', // 'Telefon' lub 'Email'
    budget: '',
    name: '',         
    phone: '',        
    email: '',        
    info: '',         
  });

  const handleSelection = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setStep(prev => prev + 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const submitForm = async () => {
    setStatus('loading');
    
    const formBody = new FormData();
    formBody.append('access_key', '4343a106-203d-4279-9980-da05e02f360f'); 
    formBody.append('subject', `LEAD (${formData.contactMethod}): ${formData.name}`);
    
    const messageBody = `
      KLIENT: ${formData.name}
      PREFEROWANY KONTAKT: ${formData.contactMethod}
      ---
      TELEFON: ${formData.phone}
      EMAIL: ${formData.email}
      ---
      BRANŻA: ${formData.industry}
      BUDŻET: ${formData.budget}
      DODATKOWE INFO: ${formData.info}
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
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  // Obliczenie postępu dla 3 kroków
  const progress = (step / 3) * 100;

  return (
    <section id="contact" className="py-20 px-4 bg-brand-dark min-h-[700px] flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Rozpocznijmy Współpracę
          </h2>
          <p className="text-gray-400">
            Odpowiemy w ciągu 24h. Wybierz, jak wolisz się skontaktować.
          </p>
        </motion.div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl relative overflow-hidden">
            
            {/* --- PRZYWRÓCONY ZIELONY PASEK POSTĘPU --- */}
            <div className="h-2 bg-gray-800 w-full absolute top-0 left-0 z-10">
                <motion.div 
                  className="h-full bg-gradient-to-r from-green-400 to-green-600"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                />
            </div>

            <div className="p-8 md:p-12 pt-10"> {/* Dodatkowy padding u góry, żeby nie zasłonić paska */}
                {status === 'success' ? (
                <div className="text-center py-10">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-4">Dziękujemy za zgłoszenie!</h3>
                    <p className="text-gray-400 text-lg">
                    {formData.contactMethod === 'Telefon' 
                        ? 'Zadzwonimy do Ciebie w najbliższym dniu roboczym.'
                        : 'Sprawdź swoją skrzynkę email - wyślemy tam ankietę projektową.'}
                    </p>
                </div>
                ) : (
                <AnimatePresence mode='wait'>
                    
                    {/* KROK 1: BRANŻA */}
                    {step === 1 && (
                    <motion.div
                        key="step1"
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -20, opacity: 0 }}
                    >
                        <h3 className="text-xl font-bold text-white mb-6">W jakiej branży działasz?</h3>
                        <div className="grid grid-cols-2 gap-3">
                        {['Budownictwo / Usługi', 'Medycyna / Beauty', 'Transport / Auto', 'Prawo / Finanse', 'E-commerce', 'Inne'].map((opt) => (
                            <button
                            key={opt}
                            onClick={() => handleSelection('industry', opt)}
                            className="w-full text-left p-4 rounded-lg border border-gray-700 bg-gray-800 hover:bg-brand-navy hover:border-brand-neon hover:text-brand-neon transition-all"
                            >
                            <span className="font-medium text-gray-200 text-sm">{opt}</span>
                            </button>
                        ))}
                        </div>
                    </motion.div>
                    )}

                    {/* KROK 2: METODA KONTAKTU */}
                    {step === 2 && (
                    <motion.div
                        key="step2"
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -20, opacity: 0 }}
                    >
                        <div className="flex items-center gap-2 mb-6 cursor-pointer text-gray-500 hover:text-white" onClick={() => setStep(1)}>
                            <ChevronLeft className="w-4 h-4" /> Wstecz
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Jak chcesz omówić projekt?</h3>
                        <p className="text-gray-400 text-sm mb-6">Szanujemy Twój czas. Wybierz wygodniejszą formę.</p>
                        
                        <div className="space-y-4">
                        <button
                            onClick={() => handleSelection('contactMethod', 'Telefon')}
                            className="w-full text-left p-6 rounded-xl border border-gray-700 bg-gray-800/50 hover:bg-brand-navy hover:border-brand-neon transition-all flex items-center justify-between group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-brand-neon/10 p-3 rounded-full text-brand-neon">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-lg font-bold text-white block">Krótka Rozmowa</span>
                                    <span className="text-gray-400 text-sm">Zadzwońcie do mnie (5-10 min)</span>
                                </div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-brand-neon" />
                        </button>
                        
                        <button
                            onClick={() => handleSelection('contactMethod', 'Email')}
                            className="w-full text-left p-6 rounded-xl border border-gray-700 bg-gray-800/50 hover:bg-brand-navy hover:border-brand-neon transition-all flex items-center justify-between group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-brand-blue/10 p-3 rounded-full text-brand-blue">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-lg font-bold text-white block">Ankieta Email</span>
                                    <span className="text-gray-400 text-sm">Wolę wszystko opisać w mailu</span>
                                </div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-brand-neon" />
                        </button>
                        </div>
                    </motion.div>
                    )}

                    {/* KROK 3: DANE KONTAKTOWE */}
                    {step === 3 && (
                    <motion.div
                        key="step3"
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -20, opacity: 0 }}
                    >
                        <div className="flex items-center gap-2 mb-6 cursor-pointer text-gray-500 hover:text-white" onClick={() => setStep(2)}>
                            <ChevronLeft className="w-4 h-4" /> Wstecz
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-6">
                            {formData.contactMethod === 'Telefon' 
                                ? "Na jaki numer mamy zadzwonić?" 
                                : "Gdzie wysłać ankietę?"}
                        </h3>
                        
                        <div className="space-y-4">
                        <input
                            name="name"
                            placeholder="Imię i Nazwisko"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-brand-neon outline-none"
                        />
                        
                        <input
                            name="phone"
                            type="tel"
                            placeholder="Numer Telefonu (Wymagane)"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`w-full p-4 bg-gray-800 border rounded-lg text-white focus:border-brand-neon outline-none ${
                                formData.contactMethod === 'Telefon' ? 'border-brand-neon/50' : 'border-gray-700'
                            }`}
                        />

                        <input
                            name="email"
                            type="email"
                            placeholder={formData.contactMethod === 'Email' ? "Adres Email (Wymagane)" : "Adres Email (Opcjonalnie)"}
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full p-4 bg-gray-800 border rounded-lg text-white focus:border-brand-neon outline-none ${
                                formData.contactMethod === 'Email' ? 'border-brand-neon/50' : 'border-gray-700'
                            }`}
                        />

                        <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-brand-neon outline-none appearance-none cursor-pointer"
                        >
                            <option value="" disabled>Planowany budżet (Orientacyjnie)</option>
                            <option value="2500-4000">2,500 - 4,000 zł</option>
                            <option value="4000-7000">4,000 - 7,000 zł</option>
                            <option value="7000+">Powyżej 7,000 zł</option>
                        </select>

                        <textarea
                            name="info"
                            placeholder="Krótki opis, na czym Ci zależy (opcjonalnie)"
                            rows={3}
                            value={formData.info}
                            onChange={handleInputChange}
                            className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-brand-neon outline-none resize-none"
                        />

                        <button
                            onClick={submitForm}
                            disabled={status === 'loading'}
                            className="w-full bg-brand-neon text-black font-bold py-4 rounded-lg hover:bg-white transition-all flex items-center justify-center gap-2"
                        >
                            {status === 'loading' ? 'Wysyłanie...' : 'Wyślij zgłoszenie'}
                            {!status && <ArrowRight className="w-5 h-5" />}
                        </button>
                        
                        {status === 'error' && <p className="text-red-500 text-center">Wystąpił błąd. Spróbuj ponownie.</p>}
                        </div>
                    </motion.div>
                    )}
                </AnimatePresence>
                )}
            </div>
        </div>
      </div>
    </section>
  );
}
