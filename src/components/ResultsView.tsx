import React, { useEffect } from 'react';
import { Question, Topic, QuizAttempt } from '../types/geography.ts';
import { TOPICS } from '../data/topics.ts';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ArrowRight, 
  BookOpen, 
  Award, 
  Compass, 
  FileText,
  BarChart3,
  Check,
  X
} from 'lucide-react';
import { sound } from '../utils/soundEffects.ts';

interface ResultsViewProps {
  attempt: QuizAttempt;
  questions: Question[];
  currentTopic?: Topic;
  onRetake: () => void;
  onGoToTopics: () => void;
  onGoToNextTopic?: (nextTopicId: number) => void;
  onViewStats: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  attempt,
  questions,
  currentTopic,
  onRetake,
  onGoToTopics,
  onGoToNextTopic,
  onViewStats
}) => {
  const { scorePercentage, correctCount, totalQuestions, userAnswers, grade, mode, topicId } = attempt;
  const incorrectCount = totalQuestions - correctCount;

  useEffect(() => {
    // Launch celebratory confetti if score >= 70%
    if (scorePercentage >= 70) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#10b981', '#38bdf8', '#f59e0b']
      });
    }
  }, [scorePercentage]);

  // Motivational message based on criteria
  let motivationalMessage = "";
  if (scorePercentage >= 90) {
    motivationalMessage = "Ajoyib! Sen haqiqiy geografiya bilimdonisan!";
  } else if (scorePercentage >= 70) {
    motivationalMessage = "Zo‘r natija! Yana biroz mashq qil!";
  } else if (scorePercentage >= 50) {
    motivationalMessage = "Yaxshi urinish! Bilimingni mustahkamla!";
  } else {
    motivationalMessage = "Taslim bo‘lma! Mavzuni qayta o‘rganib, yana urinib ko‘r!";
  }

  // Next topic calculation
  const nextTopicId = topicId && topicId < 17 ? topicId + 1 : null;
  const nextTopic = nextTopicId ? TOPICS.find((t) => t.id === nextTopicId) : null;

  // Breakdown by topic if Marathon mode
  const topicBreakdown = React.useMemo(() => {
    if (mode !== 'all') return null;
    const map: Record<number, { correct: number; total: number; title: string }> = {};
    TOPICS.forEach((t) => {
      map[t.id] = { correct: 0, total: 0, title: t.title };
    });
    questions.forEach((q) => {
      if (map[q.topicId]) {
        map[q.topicId].total += 1;
        if (userAnswers[q.id] === q.correctAnswer) {
          map[q.topicId].correct += 1;
        }
      }
    });
    return map;
  }, [mode, questions, userAnswers]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 text-left space-y-8">
      {/* Top Banner / Grade Card */}
      <div className="relative overflow-hidden bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-400">
              <Compass className="w-3.5 h-3.5" />
              <span>TEST NATIJALARI</span>
              <span aria-hidden="true">·</span>
              <span>{currentTopic ? currentTopic.title : 'Barcha 17 ta mavzu testi'}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-300 font-medium">Presented by <strong className="text-white font-semibold">Muhammadjon</strong></span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              {motivationalMessage}
            </h2>

            <p className="text-xs sm:text-sm text-slate-300">
              {mode === 'all' 
                ? '85 ta test savolidan iborat umumiy marafon yakunlandi.'
                : `${currentTopic?.title} bo‘yicha bilimingiz sinovdan o‘tdi.`}
            </p>
          </div>

          {/* Grade Badge */}
          <div className="flex items-center gap-4 bg-slate-950/80 border border-slate-800 p-4 rounded-2xl shrink-0">
            <div className="text-center">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                Baho
              </div>
              <div className={`text-4xl font-black font-display ${
                grade === 5 ? 'text-emerald-400' :
                grade === 4 ? 'text-cyan-400' :
                grade === 3 ? 'text-amber-400' : 'text-rose-400'
              }`}>
                {grade}
              </div>
            </div>

            <div className="w-[1px] h-10 bg-slate-800" />

            <div className="text-center">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                Ko‘rsatkich
              </div>
              <div className="text-3xl font-bold font-mono text-white tabular-nums">
                {scorePercentage}%
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Quantitative Score Indicators */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-800/80">
          <div className="p-3 bg-slate-950/40 rounded-xl border border-slate-800">
            <div className="text-[11px] text-slate-400">Jami savollar</div>
            <div className="text-xl font-bold text-white font-mono tabular-nums">{totalQuestions} ta</div>
          </div>

          <div className="p-3 bg-emerald-950/30 rounded-xl border border-emerald-900/40">
            <div className="text-[11px] text-emerald-400 flex items-center gap-1">
              <Check className="w-3 h-3" />
              <span>To‘g‘ri javoblar</span>
            </div>
            <div className="text-xl font-bold text-emerald-400 font-mono tabular-nums">{correctCount} ta</div>
          </div>

          <div className="p-3 bg-rose-950/30 rounded-xl border border-rose-900/40">
            <div className="text-[11px] text-rose-400 flex items-center gap-1">
              <X className="w-3 h-3" />
              <span>Noto‘g‘ri javoblar</span>
            </div>
            <div className="text-xl font-bold text-rose-400 font-mono tabular-nums">{incorrectCount} ta</div>
          </div>

          <div className="p-3 bg-cyan-950/30 rounded-xl border border-cyan-900/40">
            <div className="text-[11px] text-cyan-400">O‘zlashtirish</div>
            <div className="text-xl font-bold text-cyan-300 font-mono tabular-nums">{scorePercentage}%</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-slate-800/80">
          <button
            onClick={() => {
              sound.playSelect();
              onRetake();
            }}
            className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all flex items-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Qayta ishlash</span>
          </button>

          <button
            onClick={() => {
              sound.playNavigate();
              onGoToTopics();
            }}
            className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all flex items-center gap-2 cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Mavzularga qaytish</span>
          </button>

          {nextTopicId && nextTopic && onGoToNextTopic && (
            <button
              onClick={() => {
                sound.playSelect();
                onGoToNextTopic(nextTopicId);
              }}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-md shadow-cyan-500/20 transition-all flex items-center gap-2 cursor-pointer ml-auto"
            >
              <span>Keyingi mavzu ({nextTopic.id}-dars)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}

          <button
            onClick={() => {
              sound.playNavigate();
              onViewStats();
            }}
            className="px-4 py-2.5 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-800/50 transition-all flex items-center gap-2 cursor-pointer"
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Umumiy statistika</span>
          </button>
        </div>
      </div>

      {/* If Marathon mode: Topic Breakdown Chart */}
      {topicBreakdown && (
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <BarChart3 className="w-4 h-4" />
            <span>17 TA MAVZU BO‘YICHA O‘ZLASHTIRISH TAHLILI</span>
          </div>
          <h3 className="text-lg font-bold text-white mb-4">
            Mavzular kesimidagi bilim darajasi
          </h3>

          <div className="space-y-2.5">
            {Object.entries(topicBreakdown).map(([tidStr, data]) => {
              const tid = Number(tidStr);
              const percent = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
              const isStrong = percent >= 80;
              const isMedium = percent >= 60 && percent < 80;
              return (
                <div key={tid} className="p-3 bg-slate-950/50 rounded-xl border border-slate-800/80">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-medium text-slate-200">
                      {data.title}
                    </span>
                    <span className="font-mono tabular-nums text-slate-400">
                      {data.correct} / {data.total} ({percent}%)
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        isStrong ? 'bg-emerald-400' : isMedium ? 'bg-cyan-400' : 'bg-rose-400'
                      }`}
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Detailed Question Review List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-cyan-400" />
            <h3 className="text-lg font-bold text-white">
              Savollar va tushuntirishlar tahlili
            </h3>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            Darslik sahifalari ko‘rsatilgan
          </span>
        </div>

        {questions.map((q, idx) => {
          const userAns = userAnswers[q.id];
          const isCorrect = userAns === q.correctAnswer;

          return (
            <div
              key={q.id}
              className={`p-5 rounded-2xl border transition-all text-left ${
                isCorrect
                  ? 'bg-emerald-950/15 border-emerald-900/50'
                  : 'bg-rose-950/15 border-rose-900/50'
              }`}
            >
              {/* Question title and result icon */}
              <div className="flex items-start gap-3 mb-3">
                <div className="mt-0.5">
                  {isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
                    <span>{idx + 1}-savol</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-cyan-400">Darslik: {q.sourcePage}-bet</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white leading-snug">
                    {q.question}
                  </h4>
                </div>
              </div>

              {/* Answers comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs my-3 pl-8">
                <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                  <span className="block text-slate-400 text-[11px] mb-0.5">Siz tanlagan javob:</span>
                  <span className={`font-medium ${isCorrect ? 'text-emerald-300' : 'text-rose-300'}`}>
                    {userAns || "Tanlanmagan"}
                  </span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                  <span className="block text-emerald-400 text-[11px] mb-0.5">To‘g‘ri javob (Darslik bo‘yicha):</span>
                  <span className="font-medium text-emerald-300">
                    {q.correctAnswer}
                  </span>
                </div>
              </div>

              {/* Darslik explanation */}
              <div className="ml-8 mt-2 p-3 rounded-lg bg-slate-900/50 border border-slate-800/80 text-xs text-slate-300 leading-relaxed">
                <span className="text-cyan-400 font-semibold mr-1">Tushuntirish:</span>
                {q.explanation}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
