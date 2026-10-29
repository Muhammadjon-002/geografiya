import React from 'react';
import { BookOpen, MapPin, Compass } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: 'home' | 'topics' | 'stats') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#040912] border-t border-slate-800/80 py-10 mt-16 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800/60">
          {/* Col 1: Brand & Textbook Citation */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-600 to-teal-400 flex items-center justify-center text-white font-black text-xs">
                GM
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white font-display leading-tight">
                  GeoMaster
                </span>
                <span className="text-[10px] font-mono text-cyan-400">
                  Presented by Muhammadjon
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Umumiy o‘rta ta’lim maktablarining 8-sinfi uchun «O‘zbekistonning iqtisodiy va ijtimoiy geografiyasi» darsligi (Mualliflar: P.Musayev, J.Musayev, «Sharq», Toshkent – 2019) asosida yaratilgan interaktiv test platformasi.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              Bo‘limlar
            </div>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Bosh sahifa
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('topics')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  17 ta mavzu ro‘yxati
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('stats')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Natijalar va monitoring
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Didactic Structure */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              Darslik qismlari
            </div>
            <div className="text-xs text-slate-400 space-y-1">
              <div>I Bob: Geografik o‘rni va ma’muriy-hududiy tuzilishi (1–4 mavzular)</div>
              <div>II Bob: Tabiiy boyliklari, aholisi va mehnat resurslari (5–9 mavzular)</div>
              <div>III Bob: Milliy iqtisodiyotning tarkibiy tuzilishi (10–17 mavzular)</div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 GeoMaster. 8-sinf O‘zbekiston geografiyasi bo‘yicha interaktiv ta’lim platformasi. <span className="text-cyan-400 font-medium">Presented by Muhammadjon</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px]">
            <span>17 ta mavzu</span>
            <span>·</span>
            <span>85 ta test</span>
            <span>·</span>
            <span>Lotin yozuvida</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
