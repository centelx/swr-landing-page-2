import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { CheckCircle, ArrowRight, ChevronLeft, Phone, Mail, Wallet } from 'lucide-react';

export default function Contact() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  // Stan do obsługi niestandardowej branży
  const [showCustomIndustryInput, setShowCustomIndustryInput] = useState(false);
  
  const [formData, setFormData] = useState({
    industry: '',     
    contactMethod: '', 
    budget: '',
    name: '',         
    phone: '',        
    email: '',        
    info: '',         
  });

  const handleSelection = (field: string, value: string) => {
    // Specjalna obsługa dla "Inne" w branży
    if (field === 'industry' && value === 'Inne') {
        setShowCustomIndustryInput(true);
        setFormData(prev => ({ ...prev, [field]: '' })); // Czyścimy, żeby user wpisał
        return;
    }

    setFormData(prev => ({ ...prev, [field]: value }));
    setStep(prev => prev + 1);
  };

  const handleCustomIndustrySubmit = () => {
      if (formData.industry.trim() !== '') {
          setStep(prev => prev + 1);
      }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const submitForm = async () => {
    setStatus('loading');
    
    const formBody = new FormData();
    formBody.append('access_key', '4343a106-203d-4279-9980-da05e02f360f'); 
    formBody.append('subject', `LEAD PREMIUM (${formData.budget}): ${formData.name}`);
    
    const messageBody = `
      KLIENT: ${formData.name}
      BUDŻET: ${formData.budget}
      KONTAKT: ${formData.contactMethod}
      ---
      TELEFON: ${formData.phone}
      EMAIL: ${formData.email}
      ---
      BRANŻA: ${formData.industry}
      INFO: ${formData.info}
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

  const progress = (step / 4) * 100;

  return (
    <section id="contact" className="py-20 px-4 bg-brand-dark min-h-[750px] flex items-center justify-center">
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
            Wypełnij formularz, abyśmy mogli przygotować wstępną strategię.
          </p>
        </motion.div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl relative overflow-hidden">
            
            {/* PASEK POSTĘPU - DOPAMINOWY (ANIMOWANY) */}
            <div className="h-2 bg-gray-800 w-full absolute top-0 left-0 z-10 overflow-hidden">
                <motion.div 
                  className="h-full relative"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                >
                    {/* Animowany gradient w tle */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-neon via-green-400 to-brand-neon animate-progress-stripes bg-[length:200%_100%]"></div>
                </motion.div>
                {/* Styl inline dla animacji (jeśli nie ma w tailwind configu) */}
                <style>{`
                    @keyframes progress-stripes {
                        0% { background-position: 100% 0; }
                        100% { background-position: 0 0; }
                    }
                    .animate-progress-stripes {
                        animation: progress-stripes 2s linear infinite;
                    }
                `}</style>
            </div>

            <div className="p-8 md:p-12 pt-10">
                {status === 'success' ? (
                <div className="text-center py-10">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-4">Dziękujemy za zgłoszenie!</h3>
                    <p className="text-gray-400 text-lg">
                    {formData.contactMethod === 'Telefon' 
                        ? 'Twój opiekun klienta zadzwoni w najbliższym dniu roboczym.'
                        : 'Sprawdź email - wysłaliśmy potwierdzenie przyjęcia zgłoszenia.'}
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
                        
                        {!showCustomIndustryInput ? (
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
                        ) : (
                            // INPUT DLA OPCJI "INNE"
                            <div className="space-y-4">
                                <input
                                    name="industry"
                                    placeholder="Wpisz swoją branżę..."
                                    value={formData.industry}
                                    onChange={handleInputChange}
                                    autoFocus
                                    className="w-full p-4 bg-gray-800 border border-brand-neon rounded-lg text-white focus:outline-none"
                                />
                                <div className="flex gap-4">
                                    <button 
                                        onClick={() => setShowCustomIndustryInput(false)}
                                        className="px-6 py-3 rounded-lg border border-gray-700 text-gray-400 hover:text-white"
                                    >
                                        Wróć
                                    </button>
                                    <button
                                        onClick={handleCustomIndustrySubmit}
                                        disabled={!formData.industry}
                                        className="flex-1 bg-brand-neon text-black font-bold py-3 rounded-lg hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Dalej
                                    </button>
                                </div>
                            </div>
                        )}
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
                        <div className="flex items-center gap-2 mb-6 cursor-pointer text-gray-500 hover:text-white" onClick={() => { setStep(1); setShowCustomIndustryInput(false); }}>
                            <ChevronLeft className="w-4 h-4" /> Wstecz
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Jak chcesz omówić szczegóły?</h3>
                        <p className="text-gray-400 text-sm mb-6">Wybierz wygodniejszą formę komunikacji.</p>
                        
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
                                    <span className="text-gray-400 text-sm">Wolę opisać wszystko w mailu</span>
                                </div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-brand-neon" />
                        </button>
                        </div>
                    </motion.div>
                    )}

                    {/* KROK 3: BUDŻET */}
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
                        <h3 className="text-xl font-bold text-white mb-2">W jakim przedziale inwestycyjnym chcemy się poruszać?</h3>
                        <p className="text-gray-400 text-sm mb-6">Pozwoli nam to dobrać odpowiednie rozwiązania.</p>
                        
                        <div className="space-y-3">
                          {['2,400 - 4,000 zł (Wizytówka / Start)', '4,000 - 7,000 zł (Strona Firmowa)', 'Powyżej 7,000 zł (Sklep / Custom)'].map((opt) => (
                            <button
                              key={opt}
                              onClick={() => handleSelection('budget', opt)}
                              className="w-full text-left p-5 rounded-xl border border-gray-700 bg-gray-800/50 hover:bg-brand-navy hover:border-brand-neon transition-all flex items-center justify-between group"
                            >
                              <span className="font-medium text-white">{opt}</span>
                              <Wallet className="w-5 h-5 text-gray-600 group-hover:text-brand-neon" />
                            </button>
                          ))}
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
                        <div className="flex items-center gap-2 mb-6 cursor-pointer text-gray-500 hover:text-white" onClick={() => setStep(3)}>
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
