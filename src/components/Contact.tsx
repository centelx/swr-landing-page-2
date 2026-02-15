import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { CheckCircle, AlertCircle, ArrowRight, ChevronLeft } from 'lucide-react';

export default function Contact() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    budget: '',     
    industry: '',     
    name: '',         
    phone: '',        
    email: '',        
    info: '',         
  });

  const handleSelection = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setStep(prev => prev + 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const submitForm = async () => {
    setStatus('loading');
    
    // Klucz API Web3Forms (ten sam co miałeś)
    const formBody = new FormData();
    formBody.append('access_key', '4343a106-203d-4279-9980-da05e02f360f'); 
    formBody.append('subject', `LEAD PREMIUM: ${formData.name} (${formData.budget})`);
    
    const messageBody = `
      KLIENT: ${formData.name}
      TELEFON: ${formData.phone}
      EMAIL: ${formData.email}
      ---
      BUDŻET: ${formData.budget}
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
            Bezpłatna Konsultacja
          </h2>
          <p className="text-gray-400">
            Porozmawiajmy o Twoim projekcie. Wypełnij krótki formularz.
          </p>
        </motion.div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl relative">
            
            {status === 'success' ? (
              <div className="text-center py-10">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Dziękujemy za zgłoszenie!</h3>
                <p className="text-gray-400">Skontaktujemy się z Tobą w ciągu 24h, aby omówić szczegóły strategii.</p>
              </div>
            ) : (
              <AnimatePresence mode='wait'>
                {/* KROK 1: BUDŻET */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                  >
                    <h3 className="text-xl font-bold text-white mb-6">Jaki budżet planujesz przeznaczyć na projekt?</h3>
                    <div className="space-y-3">
                      {['2500 - 4000 zł (Wizytówka / Start)', '4000 - 7000 zł (Strona Firmowa)', 'Powyżej 7000 zł (Sklep / Custom)'].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSelection('budget', opt)}
                          className="w-full text-left p-4 rounded-lg border border-gray-700 bg-gray-800 hover:bg-brand-navy hover:border-brand-neon hover:text-brand-neon transition-all"
                        >
                          <span className="font-medium text-gray-200">{opt}</span>
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
                     <div className="flex items-center gap-2 mb-6 cursor-pointer text-gray-500 hover:text-white" onClick={() => setStep(1)}>
                        <ChevronLeft className="w-4 h-4" /> Wstecz
                     </div>
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

                {/* KROK 3: DANE */}
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
                    <h3 className="text-xl font-bold text-white mb-6">Gdzie mamy wysłać wycenę?</h3>
                    
                    <div className="space-y-4">
                      <input
                        name="name"
                        placeholder="Imię i Nazwisko"
                        onChange={handleInputChange}
                        className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-brand-neon outline-none"
                      />
                      <input
                        name="email"
                        type="email"
                        placeholder="Adres Email"
                        onChange={handleInputChange}
                        className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-brand-neon outline-none"
                      />
                      <input
                        name="phone"
                        type="tel"
                        placeholder="Numer Telefonu"
                        onChange={handleInputChange}
                        className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-brand-neon outline-none"
                      />
                      <textarea
                        name="info"
                        placeholder="Krótki opis, na czym Ci zależy (opcjonalnie)"
                        rows={3}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-brand-neon outline-none resize-none"
                      />

                      <button
                        onClick={submitForm}
                        disabled={status === 'loading'}
                        className="w-full bg-brand-neon text-black font-bold py-4 rounded-lg hover:bg-white transition-all flex items-center justify-center gap-2"
                      >
                        {status === 'loading' ? 'Wysyłanie...' : 'Wyślij zapytanie'}
                        {!status && <ArrowRight className="w-5 h-5" />}
                      </button>
                      
                      {status === 'error' && <p className="text-red-500 text-center">Błąd wysyłania. Spróbuj ponownie.</p>}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
        </div>
      </div>
    </section>
  );
}
