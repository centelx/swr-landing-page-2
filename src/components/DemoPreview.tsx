import { X, ArrowRight, Smartphone, Monitor } from 'lucide-react';
import { useState } from 'react';

// Ten komponent powinien być osobną stroną, np. dostępną pod /demo/:projectId
export default function DemoViewer({ projectUrl, onClose }: { projectUrl: string, onClose: () => void }) {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <div className="fixed inset-0 z-[100] bg-gray-900 flex flex-col h-screen w-screen">
      
      {/* 1. TWÓJ PASEK SPRZEDAŻOWY (Top Bar) */}
      <div className="h-16 bg-brand-navy border-b border-gray-700 flex items-center justify-between px-4 md:px-8 shadow-xl relative z-10">
        
        {/* Lewa: Powrót */}
        <button 
          onClick={onClose}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
        >
          <X className="w-5 h-5" />
          <span className="hidden md:inline">Zamknij podgląd</span>
        </button>

        {/* Środek: Przełącznik urządzeń (Bajer UX) */}
        <div className="hidden md:flex bg-gray-800 rounded-lg p-1 border border-gray-700">
          <button 
            onClick={() => setDevice('desktop')}
            className={`p-2 rounded-md transition-all ${device === 'desktop' ? 'bg-brand-neon text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
          >
            <Monitor className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setDevice('mobile')}
            className={`p-2 rounded-md transition-all ${device === 'mobile' ? 'bg-brand-neon text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
          >
            <Smartphone className="w-4 h-4" />
          </button>
        </div>

        {/* Prawa: Call To Action - To jest klucz! */}
        <div className="flex items-center gap-4">
          <span className="hidden md:inline text-gray-300 text-sm">Podoba Ci się ten projekt?</span>
          <button 
            onClick={() => {
              onClose();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-brand-neon to-brand-blue text-black font-bold text-sm px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-brand-neon/50 transition-all flex items-center gap-2"
          >
            Chcę taką stronę
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. STRONA KLIENTA (iFrame) */}
      <div className="flex-1 bg-gray-900 w-full flex justify-center overflow-hidden relative">
        <iframe 
          src={projectUrl} 
          title="Podgląd strony"
          className={`h-full transition-all duration-500 bg-white shadow-2xl ${
            device === 'mobile' ? 'w-[375px] border-x-8 border-gray-800' : 'w-full'
          }`}
          // Ważne: permission policy
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>
  );
}
