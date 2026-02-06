import { motion } from 'framer-motion';
import { ExternalLink, Smartphone, Monitor } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Auto-Serwis "Błysk"',
      category: 'Motoryzacja',
      image: 'from-orange-500/20 to-red-500/20', // Tu docelowo ścieżka do zdjęcia
      description: 'Strona wizytówka z szybkim umawianiem wizyt. Czas realizacji: 22h.',
      link: '#',
      type: 'mobile' // lub 'desktop'
    },
    {
      title: 'Salon Urody "Elegance"',
      category: 'Beauty & Wellness',
      image: 'from-pink-500/20 to-purple-500/20',
      description: 'Elegancki design z cennikiem i galerią prac. Czas realizacji: 24h.',
      link: '#',
      type: 'mobile'
    },
    {
      title: 'Remonty Kowalski',
      category: 'Budownictwo',
      image: 'from-blue-500/20 to-cyan-500/20',
      description: 'Prosta strona ofertowa nastawiona na pozyskiwanie telefonów.',
      link: '#',
      type: 'desktop'
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nasze Realizacje
          </h2>
          <p className="text-xl text-gray-400">
            Zobacz, co stworzyliśmy w zaledwie 24 godziny
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative bg-brand-navy/50 border border-gray-700 rounded-2xl overflow-hidden hover:border-brand-neon/50 transition-all duration-300"
            >
              {/* Podgląd Strony (Mockup) */}
              <div className="relative h-64 overflow-hidden bg-gray-900">
                {/* Gradient jako placeholder - podmień to na <img> */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.image} group-hover:scale-105 transition-transform duration-500`}></div>
                
                {/* Nakładka przy hoverze */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 bg-brand-neon text-black font-bold px-6 py-3 rounded-full hover:shadow-lg hover:shadow-brand-neon/50 transition-all transform translate-y-4 group-hover:translate-y-0"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Zobacz na żywo
                  </a>
                </div>

                {/* Ikona typu urządzenia */}
                <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-lg backdrop-blur-md">
                  {project.type === 'mobile' ? (
                    <Smartphone className="w-4 h-4 text-white" />
                  ) : (
                    <Monitor className="w-4 h-4 text-white" />
                  )}
                </div>
              </div>

              {/* Treść */}
              <div className="p-6">
                <div className="text-xs font-bold text-brand-neon mb-2 uppercase tracking-wider">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Przycisk CTA pod portfolio */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">Podoba Ci się ten styl?</p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-brand-neon border-b border-brand-neon hover:text-white hover:border-white transition-colors pb-1 font-semibold"
          >
            Chcę taką samą stronę
          </button>
        </motion.div>
      </div>
    </section>
  );
}
