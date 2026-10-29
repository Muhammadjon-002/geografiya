import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { sound } from '../utils/soundEffects.ts';

interface NavbarProps {
  activeTab: 'home' | 'topics' | 'quiz' | 'results' | 'stats';
  onNavigate: (tab: 'home' | 'topics' | 'stats') => void;
  onStartMarathon: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onNavigate, onStartMarathon }) => {
  const [muted, setMuted] = useState(sound.getMuted());

  const handleToggleSound = () => {
    const next = sound.toggleMute();
    setMuted(next);
  };

  const navItem = (tab: 'home' | 'topics' | 'stats', label: string) => {
    const isActive = activeTab === tab;
    return (
      <button
        onClick={() => {
          sound.playNavigate();
          onNavigate(tab);
        }}
        className={`text-sm font-medium transition-colors whitespace-nowrap shrink-0 relative py-1 cursor-pointer ${
          isActive ? 'text-cyan-400 font-semibold' : 'text-slate-300 hover:text-white'
        }`}
      >
        {label}
        {isActive && (
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full" />
        )}
      </button>
    );
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#060e1a]/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Brand title, one line */}
        <div 
          onClick={() => {
            sound.playNavigate();
            onNavigate('home');
          }}
          className="flex items-center gap-2.5 cursor-pointer group shrink-0"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-600 to-teal-400 flex items-center justify-center shadow-lg shadow-cyan-500/20 text-white font-black text-sm tracking-tighter">
            GM
          </div>
          <div className="flex flex-col text-left">
            <span className="text-lg font-bold tracking-tight text-white font-display leading-tight group-hover:text-cyan-400 transition-colors">
              GeoMaster
            </span>
            <span className="text-[10px] font-mono tracking-tight text-cyan-400/90 leading-tight">
              Presented by <span className="text-slate-200 font-semibold">Muhammadjon</span>
            </span>
          </div>
        </div>

        {/* Zone 2: 4-5 concise nav links */}
        <nav className="hidden md:flex items-center gap-6">
          {navItem('home', 'Bosh sahifa')}
          {navItem('topics', '17 ta mavzu')}
          {navItem('stats', 'Natijalar va statistika')}
        </nav>

        {/* Zone 3: 1 primary action + sound toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleToggleSound}
            aria-label={muted ? "Ovozni yoqish" : "Ovozni o‘chirish"}
            title={muted ? "Ovozni yoqish" : "Ovozni o‘chirish"}
            className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 transition-colors cursor-pointer"
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          <button
            onClick={() => {
              sound.playSelect();
              onStartMarathon();
            }}
            className="px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 rounded-lg shadow-md shadow-cyan-500/25 transition-all cursor-pointer whitespace-nowrap shrink-0 hover:scale-[1.02] active:scale-[0.98]"
          >
            Barcha mavzulardan test (85 ta)
          </button>
        </div>
      </div>
    </header>
  );
};
