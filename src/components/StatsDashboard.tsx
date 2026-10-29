import React, { useState } from 'react';
import { UserStats, Topic } from '../types/geography.ts';
import { TOPICS } from '../data/topics.ts';
import { 
  BarChart3, 
  Trash2, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Award, 
  Sparkles,
  BookOpen,
  Compass
} from 'lucide-react';
import { sound } from '../utils/soundEffects.ts';

interface StatsDashboardProps {
  stats: UserStats;
  onStartQuiz: (topicId: number) => void;
  onStartMarathon: () => void;
  onResetStats: () => void;
  onGoToTopics: () => void;
}

export const StatsDashboard: React.FC<StatsDashboardProps> = ({
  stats,
  onStartQuiz,
  onStartMarathon,
  onResetStats,
  onGoToTopics
}) => {
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const completedCount = stats.completedTopics.length;
  const totalAttempts = stats.allAttempts.length;

  // Average score calculation
  const averageScore = totalAttempts > 0
    ? Math.round(
        stats.allAttempts.reduce((acc, a) => acc + a.scorePercentage, 0) / totalAttempts
      )
    : 0;

  // Find strongest and weakest topics
  const scoredTopics = TOPICS.map((t) => ({
    topic: t,
    score: stats.bestScores[t.id] ?? null
  })).filter((item) => item.score !== null) as { topic: Topic; score: number }[];

  scoredTopics.sort((a, b) => b.score - a.score);
  const strongest = scoredTopics.slice(0, 3);
  const weakest = scoredTopics.slice(-3).reverse();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 text-left space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>BILIMLAR KESIMI VA STATISTIKA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
            Natijalar paneli
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              sound.playSelect();
              onStartMarathon();
            }}
            className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all cursor-pointer shadow-md shadow-cyan-500/20"
          >
            Mega Test (85 ta)
          </button>

          <button
            onClick={() => setShowResetConfirm(true)}
            className="px-3 py-2 text-xs font-medium text-rose-300 hover:text-rose-200 bg-rose-950/40 hover:bg-rose-900/40 border border-rose-800/40 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
            title="Barcha natijalarni tozalash"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Natijalarni tozalash</span>
          </button>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-2xl">
          <div className="text-xs text-slate-400 mb-1">O‘zlashtirilgan mavzular</div>
          <div className="text-3xl font-extrabold text-cyan-400 font-mono tabular-nums">
            {completedCount} / 17
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full mt-3 overflow-hidden">
            <div 
              className="h-full bg-cyan-400 rounded-full"
              style={{ width: `${Math.round((completedCount / 17) * 100)}%` }}
            />
          </div>
        </div>

        <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-2xl">
          <div className="text-xs text-slate-400 mb-1">Umumiy urinishlar</div>
          <div className="text-3xl font-extrabold text-white font-mono tabular-nums">
            {totalAttempts}
          </div>
          <div className="text-[11px] text-slate-500 mt-2">Test sessiyalari soni</div>
        </div>

        <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-2xl">
          <div className="text-xs text-slate-400 mb-1">O‘rtacha ko‘rsatkich</div>
          <div className="text-3xl font-extrabold text-teal-400 font-mono tabular-nums">
            {averageScore}%
          </div>
          <div className="text-[11px] text-slate-500 mt-2">Barcha testlar bo‘yicha</div>
        </div>

        <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-2xl">
          <div className="text-xs text-slate-400 mb-1">Marafon rekordi</div>
          <div className="text-3xl font-extrabold text-amber-400 font-mono tabular-nums">
            {stats.marathonBestScore ? `${stats.marathonBestScore}%` : '—'}
          </div>
          <div className="text-[11px] text-slate-500 mt-2">85 ta savollik test</div>
        </div>
      </div>

      {/* Strongest vs Weakest Topics */}
      {scoredTopics.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Strongest */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>ENG YUQORI O‘ZLASHTIRILGAN MAVZULAR</span>
            </div>
            <div className="space-y-2">
              {strongest.map(({ topic, score }) => (
                <div 
                  key={topic.id}
                  className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 flex items-center justify-between gap-3"
                >
                  <div>
                    <span className="text-xs font-semibold text-white block">
                      {topic.title}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {topic.badge} · {topic.pageRange}
                    </span>
                  </div>
                  <div className="text-sm font-mono font-bold text-emerald-400 tabular-nums">
                    {score}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weakest / Needs revision */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
              <AlertTriangle className="w-4 h-4" />
              <span>MUSTAHKAMLASH TAVSIYA ETILADIGAN MAVZULAR</span>
            </div>
            <div className="space-y-2">
              {weakest.map(({ topic, score }) => (
                <div 
                  key={topic.id}
                  className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 flex items-center justify-between gap-3"
                >
                  <div>
                    <span className="text-xs font-semibold text-white block">
                      {topic.title}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {topic.badge} · {topic.pageRange}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono font-bold text-amber-400 tabular-nums">
                      {score}%
                    </span>
                    <button
                      onClick={() => onStartQuiz(topic.id)}
                      className="px-2.5 py-1 text-[11px] font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg cursor-pointer"
                    >
                      Sinov
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 17 Topics Progress List */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <h3 className="text-lg font-bold text-white">
              Barcha 17 ta mavzu monitoringi
            </h3>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            Darslik: 1–50 betlar
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {TOPICS.map((topic) => {
            const isCompleted = stats.completedTopics.includes(topic.id);
            const score = stats.bestScores[topic.id];
            return (
              <div 
                key={topic.id}
                className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span className="font-mono text-cyan-400">{topic.id}-dars</span>
                    <span className="text-[11px]">{topic.pageRange}</span>
                  </div>
                  <h4 className="text-xs font-semibold text-slate-200 line-clamp-1 mb-2">
                    {topic.title.replace(`${topic.id}-dars. `, "")}
                  </h4>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                  {isCompleted && score !== undefined ? (
                    <span className="font-mono font-bold text-emerald-400 tabular-nums">
                      {score}% o‘zlashtirildi
                    </span>
                  ) : (
                    <span className="text-slate-500">Boshlanmagan</span>
                  )}

                  <button
                    onClick={() => {
                      sound.playSelect();
                      onStartQuiz(topic.id);
                    }}
                    className="text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 cursor-pointer flex items-center gap-1"
                  >
                    <span>{isCompleted ? 'Qayta' : 'Boshlash'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Confirmation Modal for Reset */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-sm w-full space-y-4">
            <h4 className="text-lg font-bold text-white">Natijalarni tozalaysizmi?</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Bu amal barcha saqlangan test natijalari, ballar va urinishlar tarixini butkul o‘chirib yuboradi. Ushbu amalni ortga qaytarib bo‘lmaydi.
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-4 py-2 text-xs font-medium text-slate-300 hover:bg-slate-800 rounded-lg cursor-pointer"
              >
                Bekor qilish
              </button>
              <button
                onClick={() => {
                  sound.playComplete();
                  onResetStats();
                  setShowResetConfirm(false);
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 rounded-lg cursor-pointer shadow-md shadow-rose-600/30"
              >
                Ha, barchasini tozalash
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
