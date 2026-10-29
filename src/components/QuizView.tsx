import React, { useState } from 'react';
import { Question, Topic } from '../types/geography.ts';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Compass, 
  X, 
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { sound } from '../utils/soundEffects.ts';

interface QuizViewProps {
  questions: Question[];
  topic?: Topic;
  mode: 'topic' | 'all';
  onFinishQuiz: (userAnswers: Record<string, string>) => void;
  onExit: () => void;
}

const OPTION_LABELS = ['A', 'B', 'C', 'D'];

export const QuizView: React.FC<QuizViewProps> = ({
  questions,
  topic,
  mode,
  onFinishQuiz,
  onExit
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [warningMsg, setWarningMsg] = useState<string | null>(null);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  const currentQ = questions[currentIndex];
  const total = questions.length;
  const answeredCount = Object.keys(userAnswers).length;
  const progressPercent = Math.round(((currentIndex + 1) / total) * 100);

  const handleSelectOption = (option: string) => {
    sound.playSelect();
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: option
    }));
    setWarningMsg(null);
  };

  const handleNext = () => {
    if (!userAnswers[currentQ.id]) {
      setWarningMsg("Iltimos, keyingi savolga o‘tishdan oldin javob variantini tanlang.");
      return;
    }
    setWarningMsg(null);
    sound.playNavigate();
    if (currentIndex < total - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setWarningMsg(null);
    sound.playNavigate();
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleComplete = () => {
    if (!userAnswers[currentQ.id]) {
      setWarningMsg("Iltimos, testni yakunlashdan oldin joriy savolga javob belgilang.");
      return;
    }
    if (answeredCount < total) {
      const confirmIncomplete = window.confirm(
        `Siz ${total} ta savoldan ${answeredCount} tasiga javob berdingiz. Baribir testni yakunlamoqchimisiz?`
      );
      if (!confirmIncomplete) return;
    }
    sound.playComplete();
    onFinishQuiz(userAnswers);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 text-left">
      {/* Top Bar with Mode, Topic Title and Exit */}
      <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
            <Compass className="w-3.5 h-3.5" />
            <span>
              {mode === 'all' 
                ? 'BARCHA MAVZULARDAN MEGA TEST (85 TA SAVOL)' 
                : `${topic?.title.toUpperCase() || 'MAVZU TESTI'}`}
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            {mode === 'all' ? 'O‘zbekiston iqtisodiy va ijtimoiy geografiyasi' : topic?.chapter}
          </h2>
        </div>

        <button
          onClick={() => setShowExitConfirm(true)}
          className="p-2 text-slate-400 hover:text-rose-400 hover:bg-slate-800/80 rounded-xl transition-colors cursor-pointer flex items-center gap-1 text-xs"
          title="Testdan chiqish"
        >
          <X className="w-4 h-4" />
          <span className="hidden sm:inline">Chiqish</span>
        </button>
      </div>

      {/* Progress & Question Counter */}
      <div className="mb-6 space-y-2">
        <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
          <span className="text-cyan-300 font-bold">
            Savol {currentIndex + 1} / {total}
          </span>
          <span className="tabular-nums">
            Javob berildi: {answeredCount} / {total} ({Math.round((answeredCount / total) * 100)}%)
          </span>
        </div>

        {/* Progress bar container */}
        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyan-500 to-teal-400 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative">
        {/* Question Header & Darslik Page Reference hint */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>8-sinf darsligi</span>
          </div>
          <div className="font-mono text-cyan-400 text-[11px]">
            Darslik sahifasi: ~{currentQ.sourcePage}-bet
          </div>
        </div>

        {/* Question Text */}
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-6 leading-relaxed">
          {currentQ.question}
        </h3>

        {/* Warning Alert if user clicks next without selecting */}
        {warningMsg && (
          <div className="mb-5 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-center gap-2 animate-shake">
            <AlertCircle className="w-4 h-4 shrink-0 text-amber-400" />
            <span>{warningMsg}</span>
          </div>
        )}

        {/* 4 Options (A, B, C, D) */}
        <div className="space-y-3">
          {currentQ.options.map((option, idx) => {
            const isSelected = userAnswers[currentQ.id] === option;
            const letter = OPTION_LABELS[idx];

            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(option)}
                className={`w-full p-4 rounded-xl text-left text-sm transition-all duration-150 flex items-start gap-3.5 cursor-pointer border ${
                  isSelected
                    ? 'bg-cyan-950/60 border-cyan-400 text-cyan-100 shadow-md shadow-cyan-950/40 ring-1 ring-cyan-400/50'
                    : 'bg-slate-800/40 border-slate-700/60 hover:bg-slate-800 hover:border-slate-600 text-slate-200'
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-md flex items-center justify-center font-bold font-mono text-xs shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-cyan-400 text-slate-950'
                      : 'bg-slate-800 text-slate-400 border border-slate-700'
                  }`}
                >
                  {letter}
                </span>
                <span className="leading-snug pt-0.5">{option}</span>
              </button>
            );
          })}
        </div>

        {/* Controls footer: Prev, Next, Complete */}
        <div className="mt-8 pt-5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 border transition-all cursor-pointer ${
              currentIndex === 0
                ? 'opacity-40 border-slate-800 text-slate-600 cursor-not-allowed'
                : 'border-slate-700 hover:bg-slate-800 text-slate-200 hover:border-slate-600'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Oldingi savol</span>
          </button>

          <div className="flex items-center gap-3">
            {currentIndex < total - 1 ? (
              <button
                onClick={handleNext}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-md shadow-cyan-500/20 transition-all flex items-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Keyingi savol</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={handleComplete}
                className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 shadow-lg shadow-emerald-500/30 transition-all flex items-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Testni yakunlash</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Quick Question Jump Navigator */}
      <div className="mt-6 bg-slate-900/50 border border-slate-800/80 rounded-xl p-4">
        <div className="text-xs text-slate-400 mb-3 flex items-center justify-between">
          <span>Savollar xaritasi:</span>
          <span className="text-[11px] font-mono text-cyan-400">
            {answeredCount} ta belgilangan
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto p-1">
          {questions.map((q, idx) => {
            const isAnswered = !!userAnswers[q.id];
            const isCurrent = idx === currentIndex;
            return (
              <button
                key={q.id}
                onClick={() => {
                  sound.playNavigate();
                  setCurrentIndex(idx);
                  setWarningMsg(null);
                }}
                className={`w-7 h-7 text-xs font-mono font-medium rounded-md transition-all cursor-pointer ${
                  isCurrent
                    ? 'ring-2 ring-cyan-400 bg-cyan-500 text-slate-950 font-bold'
                    : isAnswered
                    ? 'bg-emerald-950/80 border border-emerald-500/40 text-emerald-300'
                    : 'bg-slate-800/60 border border-slate-700/60 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Exit Confirmation Modal */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-sm w-full space-y-4">
            <h4 className="text-lg font-bold text-white">Testni to‘xtatmoqchimisiz?</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Agar hozir chiqsangiz, joriy testdagi javoblaringiz saqlanmaydi va natija hisoblanmaydi.
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setShowExitConfirm(false)}
                className="px-4 py-2 text-xs font-medium text-slate-300 hover:bg-slate-800 rounded-lg cursor-pointer"
              >
                Davom etish
              </button>
              <button
                onClick={onExit}
                className="px-4 py-2 text-xs font-semibold text-rose-300 bg-rose-950/80 hover:bg-rose-900 border border-rose-800/50 rounded-lg cursor-pointer"
              >
                Testdan chiqish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
