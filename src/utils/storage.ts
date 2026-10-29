import { QuizAttempt, UserStats } from '../types/geography.ts';

const STATS_KEY = 'geomaster_user_stats';

export function loadUserStats(): UserStats {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (!raw) {
      return {
        completedTopics: [],
        bestScores: {},
        lastAttemptDate: {},
        allAttempts: []
      };
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to parse user stats:", e);
    return {
      completedTopics: [],
      bestScores: {},
      lastAttemptDate: {},
      allAttempts: []
    };
  }
}

export function saveQuizResult(attempt: QuizAttempt): UserStats {
  const current = loadUserStats();

  const newAttempts = [attempt, ...current.allAttempts].slice(0, 50); // keep last 50
  const completedTopics = [...current.completedTopics];
  const bestScores = { ...current.bestScores };
  const lastAttemptDate = { ...current.lastAttemptDate };

  if (attempt.mode === 'topic' && attempt.topicId !== undefined) {
    const tid = attempt.topicId;
    if (!completedTopics.includes(tid)) {
      completedTopics.push(tid);
    }
    const oldBest = bestScores[tid] || 0;
    if (attempt.scorePercentage > oldBest) {
      bestScores[tid] = attempt.scorePercentage;
    }
    lastAttemptDate[tid] = attempt.date;
  } else if (attempt.mode === 'all') {
    const oldMarathonBest = current.marathonBestScore || 0;
    if (attempt.scorePercentage > oldMarathonBest) {
      current.marathonBestScore = attempt.scorePercentage;
    }
  }

  const updated: UserStats = {
    ...current,
    completedTopics,
    bestScores,
    lastAttemptDate,
    allAttempts: newAttempts
  };

  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error("Failed to save user stats:", e);
  }

  return updated;
}

export function resetAllUserStats(): UserStats {
  const empty: UserStats = {
    completedTopics: [],
    bestScores: {},
    lastAttemptDate: {},
    allAttempts: []
  };
  try {
    localStorage.removeItem(STATS_KEY);
  } catch (e) {
    console.error("Failed to clear stats:", e);
  }
  return empty;
}
