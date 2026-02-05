import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', '4343a106-203d-4279-9980-da05e02f360f');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setMessage('Dziękujemy! Odezwiemy się w ciągu 24 godzin.');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setMessage('Coś poszło nie tak. Spróbuj ponownie lub zadzwoń do nas.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Błąd połączenia. Spróbuj ponownie lub zadzwoń do nas.');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-brand-dark">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Gotowy na Swoją Stronę?
          </h2>
          <p className="text-xl text-gray-400">
            Wypełnij formularz, a skontaktujemy się z Tobą w ciągu kilku godzin
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-brand-neon/10 to-brand-blue/10 rounded-3xl p-8 md:p-12 border-2 border-brand-neon/30 shadow-2xl shadow-brand-neon/20"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white font-semibold mb-2">
                Imię i Nazwisko <span className="text-brand-accent">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-neon transition-colors"
                placeholder="Jan Kowalski"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-white font-semibold mb-2">
                Numer Telefonu <span className="text-brand-accent">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-neon transition-colors"
                placeholder="+48 123 456 789"
              />
            </div>

            <div>
              <label htmlFor="industry" className="block text-white font-semibold mb-2">
                Branża <span className="text-brand-accent">*</span>
              </label>
              <input
                type="text"
                id="industry"
                name="industry"
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-neon transition-colors"
                placeholder="np. Fryzjer, Budowlanka"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white font-semibold mb-2">
                Dodatkowe Informacje (opcjonalnie)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-neon transition-colors resize-none"
                placeholder="Powiedz nam więcej o swoim biznesie..."
              ></textarea>
            </div>

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 bg-green-500/20 border border-green-500 rounded-lg px-4 py-3"
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <p className="text-green-400">{message}</p>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 bg-red-500/20 border border-red-500 rounded-lg px-4 py-3"
              >
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-red-400">{message}</p>
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={status === 'loading'}
              whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
              whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
              className="w-full bg-gradient-to-r from-brand-neon to-brand-blue text-black font-bold text-lg px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-brand-neon/50 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <span>Wysyłanie...</span>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Wyślij Zapytanie</span>
                </>
              )}
            </motion.button>

            <p className="text-center text-gray-400 text-sm">
              Lub zadzwoń: <a href="tel:518550491" className="text-brand-neon hover:underline">518 550 491</a>
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
