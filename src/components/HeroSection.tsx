import React from 'react';
import { Globe3D } from './Globe3D.tsx';
import { Play, BookOpen, Compass, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { sound } from '../utils/soundEffects.ts';

interface HeroSectionProps {
  onExploreTopics: () => void;
  onStartFirstTopic: () => void;
  onStartMarathon: () => void;
  completedTopicsCount: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreTopics,
  onStartFirstTopic,
  onStartMarathon,
  completedTopicsCount
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-12">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main 2-column split: Text & Call to Action + 3D Globe */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading, Subtitle, Actions */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Quiet metadata kicker with presenter attribution */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-cyan-400">
              <div className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                <span>O‘ZBEKISTONNING IQTISODIY VA IJTIMOIY GEOGRAFIYASI</span>
                <span aria-hidden="true">·</span>
                <span>8-SINF</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>Presented by <strong className="text-white font-semibold">Muhammadjon</strong></span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-display text-balance">
              Geografiyani <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">zabt et!</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Bilimingni sinab ko‘r, xaritalarni o‘rgan va yangi marralarni zabt et! 8-sinf rasmiy darsligining 1-mavzusidan 17-mavzusigacha bo‘lgan barcha ma’lumotlar asosida tayyorlangan 85 ta ishonchli interaktiv test.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  sound.playSelect();
                  onStartFirstTopic();
                }}
                className="px-6 py-3 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 rounded-xl shadow-lg shadow-cyan-500/30 transition-all flex items-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <Play className="w-4 h-4 fill-slate-950" />
                <span>Testni boshlash (1-dars)</span>
              </button>

              <button
                onClick={() => {
                  sound.playNavigate();
                  onExploreTopics();
                }}
                className="px-5 py-3 text-sm font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 rounded-xl transition-all flex items-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>17 ta mavzu ro‘yxati</span>
              </button>
            </div>

            {/* Quiet status metadata without pills */}
            <div className="flex items-center gap-3 text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Darslik asosida tasdiqlangan</span>
              </span>
              <span aria-hidden="true">·</span>
              <span>Lotin yozuvida</span>
              <span aria-hidden="true">·</span>
              <span>Sahifa havolalari bilan</span>
            </div>
          </div>

          {/* Right Column: 3D Globe with interactive rotation */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <Globe3D />
          </div>
        </div>

        {/* 4-Column Metric Strip below Hero Split */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-slate-900/40 border border-slate-800/80 rounded-2xl backdrop-blur-sm">
          <div className="p-3 text-left">
            <div className="text-3xl font-extrabold text-white font-mono tracking-tight tabular-nums">
              17 ta
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Darslik mavzulari (1–17)
            </div>
          </div>

          <div className="p-3 text-left">
            <div className="text-3xl font-extrabold text-cyan-400 font-mono tracking-tight tabular-nums">
              85 ta
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Test savoli (5 tadan)
            </div>
          </div>

          <div className="p-3 text-left">
            <div className="text-3xl font-extrabold text-teal-400 font-mono tracking-tight tabular-nums">
              4 ta
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Variant (A, B, C, D)
            </div>
          </div>

          <div className="p-3 text-left">
            <div className="text-3xl font-extrabold text-amber-400 font-mono tracking-tight tabular-nums">
              {completedTopicsCount} / 17
            </div>
            <div className="text-xs text-slate-400 mt-1 flex items-center gap-1">
              <Award className="w-3 h-3 text-amber-400" />
              <span>Siz tugatgan mavzular</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
