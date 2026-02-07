import { X, ArrowRight, Smartphone, Monitor } from 'lucide-react';
import { useState } from 'react';

export default function DemoViewer({ projectUrl, onClose }: { projectUrl: string, onClose: () => void }) {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <div className="fixed inset-0 z-[100] bg-gray-950 flex flex-col h-screen w-screen">
      
      {/* 1. TOP BAR (PASEK SPRZEDAŻOWY) */}
      <div className="h-16 bg-brand-navy border-b border-gray-700 flex items-center justify-between px-4 md:px-8 shadow-xl relative z-10 flex-shrink-0">
        
        {/* Lewa: Powrót */}
        <button 
          onClick={onClose}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
        >
          <X className="w-5 h-5" />
          <span className="hidden md:inline">Zamknij podgląd</span>
        </button>

        {/* Środek: Przełącznik urządzeń */}
        <div className="hidden md:flex bg-gray-800 rounded-lg p-1 border border-gray-700">
          <button 
            onClick={() => setDevice('desktop')}
            className={`p-2 rounded-md transition-all flex items-center gap-2 ${device === 'desktop' ? 'bg-brand-neon text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
          >
            <Monitor className="w-4 h-4" />
            <span className="text-xs font-bold">Desktop</span>
          </button>
          <button 
            onClick={() => setDevice('mobile')}
            className={`p-2 rounded-md transition-all flex items-center gap-2 ${device === 'mobile' ? 'bg-brand-neon text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
          >
            <Smartphone className="w-4 h-4" />
            <span className="text-xs font-bold">Mobile</span>
          </button>
        </div>

        {/* Prawa: CTA */}
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

      {/* 2. OBSZAR PODGLĄDU (IFRAME CONTAINER) */}
      {/* Dodano padding i centrowanie, żeby telefon nie przyklejał się do krawędzi */}
      <div className="flex-1 bg-gray-900 w-full flex items-center justify-center overflow-auto p-4 md:p-8 relative">
        
        {/* KONTENER SYMULUJĄCY URZĄDZENIE */}
        <div className={`transition-all duration-500 ease-in-out relative shadow-2xl mx-auto ${
            device === 'mobile' 
                /* STYL IPHONE'A (CSS only) */
                ? 'w-[375px] h-[812px] bg-black rounded-[3rem] border-[14px] border-gray-800 overflow-hidden ring-4 ring-black/50'
                /* STYL DESKTOP */
                : 'w-full h-full bg-white rounded-lg border border-gray-700'
        }`}>
            
            {/* "Notch" (wcięcie) - tylko na mobile */}
            {device === 'mobile' && (
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[30px] w-[120px] bg-gray-800 rounded-b-2xl z-20 pointer-events-none border-b border-x border-gray-900/50"></div>
            )}

            {/* IFRAME WŁAŚCIWY */}
            <iframe 
              src={projectUrl} 
              title="Podgląd strony"
              className="w-full h-full bg-white"
              // Ważne dla bezpieczeństwa i funkcjonalności wewnątrz iframe
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
            
            {/* Odbicie światła na ekranie (dodatkowy realizm) */}
            {device === 'mobile' && (
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-10 rounded-[2.5rem]"></div>
            )}
        </div>
      </div>
    </div>
  );
}
