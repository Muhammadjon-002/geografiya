import React from 'react';
import { Topic } from '../types/geography.ts';
import { X, Play, BookOpen, Compass, Layers, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/soundEffects.ts';

interface TopicDetailsModalProps {
  topic: Topic | null;
  onClose: () => void;
  onStartQuiz: (topicId: number) => void;
}

export const TopicDetailsModal: React.FC<TopicDetailsModalProps> = ({
  topic,
  onClose,
  onStartQuiz
}) => {
  if (!topic) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-xl w-full text-left space-y-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
            <Compass className="w-3.5 h-3.5" />
            <span>{topic.chapter}</span>
          </div>
          <h3 className="text-2xl font-extrabold text-white font-display">
            {topic.title}
          </h3>
          <p className="text-xs text-slate-400 font-mono mt-1">
            Darslik sahifalari: <span className="text-cyan-300">{topic.pageRange}</span>
          </p>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs leading-relaxed text-slate-200">
            <span className="block font-mono text-[11px] text-cyan-400 mb-1 font-bold">
              MAVZU QISQACHA MAZMUNI:
            </span>
            {topic.description}
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Savollar soni:</span>
              <span className="text-white font-bold font-mono">5 ta test</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Variantlar:</span>
              <span className="text-white font-bold font-mono">A, B, C, D</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-medium text-slate-300 hover:bg-slate-800 rounded-xl cursor-pointer"
          >
            Yopish
          </button>
          <button
            onClick={() => {
              sound.playSelect();
              onStartQuiz(topic.id);
              onClose();
            }}
            className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 rounded-xl shadow-lg shadow-cyan-500/25 flex items-center gap-2 cursor-pointer"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Ushbu mavzudan testni boshlash</span>
          </button>
        </div>
      </div>
    </div>
  );
};
