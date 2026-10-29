import React from 'react';
import { Topic } from '../types/geography.ts';
import { 
  Play, 
  CheckCircle, 
  BookOpen, 
  Compass, 
  Globe, 
  Map, 
  Layers, 
  Sun, 
  Mountain, 
  Users, 
  Briefcase, 
  Building2, 
  TrendingUp, 
  Factory, 
  Flame, 
  Fuel, 
  Boxes, 
  Zap, 
  FlaskConical, 
  Hammer 
} from 'lucide-react';
import { sound } from '../utils/soundEffects.ts';

interface TopicCardProps {
  topic: Topic;
  bestScore?: number;
  isCompleted: boolean;
  onStartQuiz: (topicId: number) => void;
  onViewDetails?: (topic: Topic) => void;
}

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Compass,
  Globe,
  Map,
  Layers,
  Sun,
  Mountain,
  Users,
  Briefcase,
  Building2,
  TrendingUp,
  Factory,
  Flame,
  Fuel,
  Boxes,
  Zap,
  FlaskConical,
  Hammer
};

export const TopicCard: React.FC<TopicCardProps> = ({
  topic,
  bestScore,
  isCompleted,
  onStartQuiz,
  onViewDetails
}) => {
  const IconComponent = ICON_MAP[topic.iconName] || BookOpen;

  const handleStart = (e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playSelect();
    onStartQuiz(topic.id);
  };

  return (
    <div 
      onClick={() => {
        if (onViewDetails) {
          sound.playNavigate();
          onViewDetails(topic);
        }
      }}
      className={`group relative bg-slate-900/70 border rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between text-left cursor-pointer hover:-translate-y-1 ${
        isCompleted 
          ? 'border-emerald-500/30 hover:border-emerald-400/60 shadow-lg shadow-emerald-950/20' 
          : 'border-slate-800 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-950/20'
      }`}
    >
      <div>
        {/* Top Header: Topic Number & Page Range */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <div className="w-7 h-7 rounded-lg bg-cyan-950/80 border border-cyan-800/40 flex items-center justify-center text-cyan-300 font-bold">
              {topic.id}
            </div>
            <span>{topic.badge}</span>
          </div>

          <div className="text-[11px] font-mono text-slate-400">
            {topic.pageRange}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
          {topic.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
          {topic.description}
        </p>
      </div>

      {/* Footer Area: Stats & Action */}
      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
        {/* Score & Status */}
        <div className="text-left">
          {isCompleted && bestScore !== undefined ? (
            <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Natija: <span className="font-mono font-bold tabular-nums">{bestScore}%</span></span>
            </div>
          ) : (
            <div className="text-xs text-slate-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>5 ta savol</span>
            </div>
          )}
        </div>

        {/* Start Button */}
        <button
          onClick={handleStart}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
            isCompleted
              ? 'text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-800/50'
              : 'text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-md shadow-cyan-500/20'
          }`}
        >
          <Play className="w-3 h-3 fill-current" />
          <span>{isCompleted ? 'Qayta ishlash' : 'Testni boshlash'}</span>
        </button>
      </div>
    </div>
  );
};
