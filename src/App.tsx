import React, { useState, useEffect } from 'react';
import { Topic, Question, QuizAttempt, UserStats } from './types/geography.ts';
import { TOPICS } from './data/topics.ts';
import { QUESTIONS } from './data/questions.ts';
import { loadUserStats, saveQuizResult, resetAllUserStats } from './utils/storage.ts';
import { sound } from './utils/soundEffects.ts';

import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { UzbekistanMap } from './components/UzbekistanMap.tsx';
import { TopicGrid } from './components/TopicGrid.tsx';
import { QuizView } from './components/QuizView.tsx';
import { ResultsView } from './components/ResultsView.tsx';
import { StatsDashboard } from './components/StatsDashboard.tsx';
import { TopicDetailsModal } from './components/TopicDetailsModal.tsx';
import { Footer } from './components/Footer.tsx';

import { 
  Compass, 
  BookOpen, 
  Award, 
  MapPin, 
  Play, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'topics' | 'quiz' | 'results' | 'stats'>('home');
  const [stats, setStats] = useState<UserStats>(loadUserStats());
  const [activeTopicId, setActiveTopicId] = useState<number | null>(1);
  const [quizMode, setQuizMode] = useState<'topic' | 'all'>('topic');
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentAttempt, setCurrentAttempt] = useState<QuizAttempt | null>(null);
  const [selectedTopicForModal, setSelectedTopicForModal] = useState<Topic | null>(null);

  useEffect(() => {
    // Scroll to top when view changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  // Start quiz for a specific topic (5 questions)
  const handleStartTopicQuiz = (topicId: number) => {
    const topicQs = QUESTIONS.filter((q) => q.topicId === topicId);
    setActiveTopicId(topicId);
    setQuizMode('topic');
    setActiveQuestions(topicQs);
    setActiveTab('quiz');
  };

  // Start marathon quiz (all 85 questions from topics 1-17)
  const handleStartMarathon = () => {
    // We shuffle questions for the full test mode
    const shuffled = [...QUESTIONS].sort(() => Math.random() - 0.5);
    setActiveTopicId(null);
    setQuizMode('all');
    setActiveQuestions(shuffled);
    setActiveTab('quiz');
  };

  // Finish quiz handler
  const handleFinishQuiz = (userAnswers: Record<string, string>) => {
    let correctCount = 0;
    activeQuestions.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correctCount += 1;
      }
    });

    const totalQuestions = activeQuestions.length;
    const scorePercentage = Math.round((correctCount / totalQuestions) * 100);

    let grade: 5 | 4 | 3 | 2 = 2;
    if (scorePercentage >= 86) {
      grade = 5;
    } else if (scorePercentage >= 70) {
      grade = 4;
    } else if (scorePercentage >= 50) {
      grade = 3;
    } else {
      grade = 2;
    }

    const currentTopicObj = activeTopicId ? TOPICS.find((t) => t.id === activeTopicId) : undefined;

    const attempt: QuizAttempt = {
      id: `attempt_${Date.now()}`,
      date: new Date().toISOString(),
      mode: quizMode,
      topicId: activeTopicId || undefined,
      topicTitle: currentTopicObj ? currentTopicObj.title : 'Barcha mavzulardan test',
      totalQuestions,
      correctCount,
      scorePercentage,
      grade,
      userAnswers
    };

    const updatedStats = saveQuizResult(attempt);
    setStats(updatedStats);
    setCurrentAttempt(attempt);
    setActiveTab('results');
  };

  const handleRetake = () => {
    if (quizMode === 'topic' && activeTopicId) {
      handleStartTopicQuiz(activeTopicId);
    } else {
      handleStartMarathon();
    }
  };

  const handleGoToNextTopic = (nextId: number) => {
    handleStartTopicQuiz(nextId);
  };

  const handleResetStats = () => {
    const cleared = resetAllUserStats();
    setStats(cleared);
  };

  const currentTopic = activeTopicId ? TOPICS.find((t) => t.id === activeTopicId) : undefined;

  return (
    <div className="min-h-screen flex flex-col bg-[#060e1a] text-slate-100 topo-pattern selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Bar navigation */}
      <Navbar
        activeTab={activeTab}
        onNavigate={(tab) => setActiveTab(tab)}
        onStartMarathon={handleStartMarathon}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {activeTab === 'home' && (
          <div className="space-y-16">
            {/* Hero Section with 3D Globe and statistics */}
            <HeroSection
              onExploreTopics={() => setActiveTab('topics')}
              onStartFirstTopic={() => handleStartTopicQuiz(1)}
              onStartMarathon={handleStartMarathon}
              completedTopicsCount={stats.completedTopics.length}
            />

            {/* Interactive Uzbekistan Map */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <UzbekistanMap />
            </div>

            {/* Quick Section: 17 ta mavzu vitrinasi */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-3 border-b border-slate-800">
                <div className="text-left">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>DARSLIKNING DASTLABKI MAVZULARI</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Mavzular bo‘yicha testlar
                  </h3>
                </div>

                <button
                  onClick={() => {
                    sound.playNavigate();
                    setActiveTab('topics');
                  }}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Barcha 17 ta mavzuni ko‘rish</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <TopicGrid
                stats={stats}
                onStartQuiz={handleStartTopicQuiz}
                onViewDetails={(topic) => setSelectedTopicForModal(topic)}
              />
            </div>
          </div>
        )}

        {activeTab === 'topics' && (
          <TopicGrid
            stats={stats}
            onStartQuiz={handleStartTopicQuiz}
            onViewDetails={(topic) => setSelectedTopicForModal(topic)}
          />
        )}

        {activeTab === 'quiz' && (
          <QuizView
            questions={activeQuestions}
            topic={currentTopic}
            mode={quizMode}
            onFinishQuiz={handleFinishQuiz}
            onExit={() => setActiveTab('topics')}
          />
        )}

        {activeTab === 'results' && currentAttempt && (
          <ResultsView
            attempt={currentAttempt}
            questions={activeQuestions}
            currentTopic={currentTopic}
            onRetake={handleRetake}
            onGoToTopics={() => setActiveTab('topics')}
            onGoToNextTopic={handleGoToNextTopic}
            onViewStats={() => setActiveTab('stats')}
          />
        )}

        {activeTab === 'stats' && (
          <StatsDashboard
            stats={stats}
            onStartQuiz={handleStartTopicQuiz}
            onStartMarathon={handleStartMarathon}
            onResetStats={handleResetStats}
            onGoToTopics={() => setActiveTab('topics')}
          />
        )}
      </main>

      {/* Topic Details Modal */}
      <TopicDetailsModal
        topic={selectedTopicForModal}
        onClose={() => setSelectedTopicForModal(null)}
        onStartQuiz={handleStartTopicQuiz}
      />

      {/* Footer */}
      <Footer onNavigate={(tab) => setActiveTab(tab)} />
    </div>
  );
}
