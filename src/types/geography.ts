export interface Question {
  id: string;
  topicId: number;
  question: string;
  options: [string, string, string, string];
  correctAnswer: string;
  explanation: string;
  sourcePage: number;
}

export interface Topic {
  id: number;
  chapter: string;
  chapterNumber: number;
  title: string;
  description: string;
  pageRange: string;
  iconName: string;
  badge: string;
}

export interface QuizAttempt {
  id: string;
  date: string;
  mode: 'topic' | 'all';
  topicId?: number;
  topicTitle?: string;
  totalQuestions: number;
  correctCount: number;
  scorePercentage: number;
  grade: 5 | 4 | 3 | 2;
  userAnswers: Record<string, string>; // questionId -> selectedOption
}

export interface UserStats {
  completedTopics: number[];
  bestScores: Record<number, number>; // topicId -> highest percentage
  lastAttemptDate: Record<number, string>;
  allAttempts: QuizAttempt[];
  marathonBestScore?: number;
}
