import React, { useState, useMemo } from 'react';
import { Topic, UserStats } from '../types/geography.ts';
import { TOPICS } from '../data/topics.ts';
import { TopicCard } from './TopicCard.tsx';
import { Search, Sparkles, Filter } from 'lucide-react';
import { sound } from '../utils/soundEffects.ts';

interface TopicGridProps {
  stats: UserStats;
  onStartQuiz: (topicId: number) => void;
  onViewDetails?: (topic: Topic) => void;
}

export const TopicGrid: React.FC<TopicGridProps> = ({ stats, onStartQuiz, onViewDetails }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChapter, setSelectedChapter] = useState<number | 'all'>('all');

  const filteredTopics = useMemo(() => {
    return TOPICS.filter((topic) => {
      const matchesSearch = 
        topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        topic.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        topic.badge.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesChapter = 
        selectedChapter === 'all' || topic.chapterNumber === selectedChapter;

      return matchesSearch && matchesChapter;
    });
  }, [searchTerm, selectedChapter]);

  const handleFilterClick = (chapter: number | 'all') => {
    sound.playSelect();
    setSelectedChapter(chapter);
  };

  return (
    <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header and Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div className="text-left">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
            <span>DARSLIKNING 1-DAN 17-MAVZUSIGACHA</span>
            <span>·</span>
            <span>JAMI 85 TA TEST</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
            17 ta geografiya mavzulari
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Har bir mavzuni tanlab, 5 tadan test savollarini ishlang va darslik bo‘yicha bilimlaringizni mustahkamlang.
          </p>
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Mavzuni qidirish..."
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-900 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 outline-none transition-all"
          />
        </div>
      </div>

      {/* Chapter Tabs / Filter Controls (Functional segmented buttons) */}
      <div className="flex items-center gap-1.5 p-1 bg-slate-900/80 border border-slate-800 rounded-xl mb-6 overflow-x-auto">
        <button
          onClick={() => handleFilterClick('all')}
          className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
            selectedChapter === 'all'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Barchasi (17 ta mavzu)
        </button>

        <button
          onClick={() => handleFilterClick(1)}
          className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
            selectedChapter === 1
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          I Bob (1–4 mavzular)
        </button>

        <button
          onClick={() => handleFilterClick(2)}
          className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
            selectedChapter === 2
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          II Bob (5–9 mavzular)
        </button>

        <button
          onClick={() => handleFilterClick(3)}
          className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
            selectedChapter === 3
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          III Bob (10–17 mavzular)
        </button>
      </div>

      {/* Grid of Topics */}
      {filteredTopics.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTopics.map((topic) => {
            const isCompleted = stats.completedTopics.includes(topic.id);
            const bestScore = stats.bestScores[topic.id];
            return (
              <TopicCard
                key={topic.id}
                topic={topic}
                isCompleted={isCompleted}
                bestScore={bestScore}
                onStartQuiz={onStartQuiz}
                onViewDetails={onViewDetails}
              />
            );
          })}
        </div>
      ) : (
        <div className="py-16 text-center bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
          <p className="text-sm text-slate-400">
            "{searchTerm}" so‘rovi bo‘yicha hech qanday mavzu topilmadi.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedChapter('all');
            }}
            className="mt-3 text-xs text-cyan-400 hover:underline cursor-pointer"
          >
            Filtrni tozalash
          </button>
        </div>
      )}
    </section>
  );
};
