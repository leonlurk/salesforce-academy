import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle,
  XCircle,
  Clock,
  Trophy,
  RotateCcw,
  ArrowRight,
  Brain,
  Star,
  AlertCircle
} from 'lucide-react';
import type { QuizQuestion } from '../types';

interface AnimatedQuizProps {
  questions: QuizQuestion[];
  passingScore?: number;
  onComplete?: (results: QuizResults) => void;
  allowRetry?: boolean;
}

interface QuizResults {
  score: number;
  percentage: number;
  timeSpent: number;
  questionsCorrect: number;
  totalQuestions: number;
  passed: boolean;
  answers: Record<string, string>;
  questionResults: Record<string, boolean>;
}

const AnimatedQuiz: React.FC<AnimatedQuizProps> = ({
  questions,
  passingScore = 80,
  onComplete,
  allowRetry = true
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [questionResults, setQuestionResults] = useState<Record<string, boolean>>({});
  const [startTime] = useState(new Date());
  const [timeSpent, setTimeSpent] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSpent(Math.floor((new Date().getTime() - startTime.getTime()) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime]);

  const handleAnswer = (answer: string) => {
    const newAnswers = { ...answers, [question.id]: answer };
    setAnswers(newAnswers);

    const isCorrect = Array.isArray(question.correctAnswer)
      ? question.correctAnswer.includes(answer)
      : answer === question.correctAnswer;
    setQuestionResults(prev => ({ ...prev, [question.id]: isCorrect }));
    setShowExplanation(true);

    // Auto-advance after showing explanation
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setShowExplanation(false);
      } else {
        finishQuiz(newAnswers);
      }
    }, 3000);
  };

  const finishQuiz = (finalAnswers: Record<string, string>) => {
    const correctCount = questions.filter(q => {
      const userAnswer = finalAnswers[q.id];
      return Array.isArray(q.correctAnswer)
        ? q.correctAnswer.includes(userAnswer)
        : userAnswer === q.correctAnswer;
    }).length;

    const totalPoints = questions.reduce((sum, q) => {
      const userAnswer = finalAnswers[q.id];
      const isCorrect = Array.isArray(q.correctAnswer)
        ? q.correctAnswer.includes(userAnswer)
        : userAnswer === q.correctAnswer;
      return isCorrect ? sum + q.points : sum;
    }, 0);

    const percentage = (correctCount / questions.length) * 100;
    const passed = percentage >= passingScore;

    const results: QuizResults = {
      score: totalPoints,
      percentage,
      timeSpent,
      questionsCorrect: correctCount,
      totalQuestions: questions.length,
      passed,
      answers: finalAnswers,
      questionResults
    };

    setShowResults(true);
    onComplete?.(results);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setQuestionResults({});
    setShowResults(false);
    setShowExplanation(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600';
      case 'medium': return 'text-yellow-600';
      case 'hard': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '🟢';
      case 'medium': return '🟡';
      case 'hard': return '🔴';
      default: return '⚪';
    }
  };

  if (showResults) {
    const correctCount = Object.values(questionResults).filter(Boolean).length;
    const percentage = (correctCount / questions.length) * 100;
    const passed = percentage >= passingScore;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto"
      >
        <div className={`p-8 rounded-xl ${
          passed
            ? 'bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900'
            : 'bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900 dark:to-red-900'
        }`}>
          {/* Results Header */}
          <div className="text-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 ${
                passed ? 'bg-green-500' : 'bg-orange-500'
              }`}
            >
              {passed ? (
                <Trophy className="w-10 h-10 text-white" />
              ) : (
                <AlertCircle className="w-10 h-10 text-white" />
              )}
            </motion.div>

            <h2 className={`text-3xl font-bold mb-2 ${
              passed ? 'text-green-800 dark:text-green-200' : 'text-orange-800 dark:text-orange-200'
            }`}>
              {passed ? '🎉 Congratulations!' : '📚 Keep Learning!'}
            </h2>

            <p className={`text-lg ${
              passed ? 'text-green-700 dark:text-green-300' : 'text-orange-700 dark:text-orange-300'
            }`}>
              {passed
                ? 'You passed the quiz with flying colors!'
                : `You need ${passingScore}% to pass. You got ${percentage.toFixed(1)}%.`
              }
            </p>
          </div>

          {/* Score Details */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">{percentage.toFixed(1)}%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Score</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{correctCount}/{questions.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Correct</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{formatTime(timeSpent)}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Time</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">
                {questions.reduce((sum, q) => answers[q.id] === q.correctAnswer ? sum + q.points : sum, 0)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Points</div>
            </div>
          </div>

          {/* Question Breakdown */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
              Question Breakdown
            </h3>
            <div className="space-y-2">
              {questions.map((q, index) => (
                <div key={q.id} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      questionResults[q.id] ? 'bg-green-500' : 'bg-red-500'
                    }`}>
                      {questionResults[q.id] ? (
                        <CheckCircle className="w-4 h-4 text-white" />
                      ) : (
                        <XCircle className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      Question {index + 1}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${getDifficultyColor(q.difficulty)} bg-opacity-20`}>
                      {getDifficultyIcon(q.difficulty)} {q.difficulty}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {q.points} pts
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {allowRetry && !passed && (
              <button
                onClick={resetQuiz}
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Try Again</span>
              </button>
            )}
            <button
              onClick={() => onComplete?.({
                score: questions.reduce((sum, q) => answers[q.id] === q.correctAnswer ? sum + q.points : sum, 0),
                percentage,
                timeSpent,
                questionsCorrect: correctCount,
                totalQuestions: questions.length,
                passed,
                answers,
                questionResults
              })}
              className="btn-primary flex items-center justify-center space-x-2"
            >
              <Trophy className="w-4 h-4" />
              <span>Continue Learning</span>
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Quiz Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Knowledge Check
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Question {currentQuestion + 1} of {questions.length}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1 text-gray-500">
              <Clock className="w-4 h-4" />
              <span>{formatTime(timeSpent)}</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
          <motion.div
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="card mb-6"
        >
          {/* Question Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(question.difficulty)}`}>
                {getDifficultyIcon(question.difficulty)} {question.difficulty.toUpperCase()}
              </span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
                {question.category}
              </span>
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <Star className="w-4 h-4" />
              <span>{question.points} pts</span>
            </div>
          </div>

          {/* Question */}
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            {question.question}
          </h3>

          {/* Answer Options */}
          {question.type === 'multiple-choice' && question.options && (
            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = answers[question.id] === option;
                const isCorrect = Array.isArray(question.correctAnswer)
                  ? question.correctAnswer.includes(option)
                  : option === question.correctAnswer;
                const showResult = showExplanation;

                return (
                  <motion.button
                    key={index}
                    onClick={() => !showExplanation && handleAnswer(option)}
                    disabled={showExplanation}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-300 ${
                      showResult
                        ? isCorrect
                          ? 'bg-green-100 dark:bg-green-900 border-green-500 text-green-800 dark:text-green-200'
                          : isSelected
                          ? 'bg-red-100 dark:bg-red-900 border-red-500 text-red-800 dark:text-red-200'
                          : 'bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600'
                        : isSelected
                        ? 'bg-blue-100 dark:bg-blue-900 border-blue-500 text-blue-800 dark:text-blue-200'
                        : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                    whileHover={!showExplanation ? { scale: 1.02 } : {}}
                    whileTap={!showExplanation ? { scale: 0.98 } : {}}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        showResult
                          ? isCorrect
                            ? 'border-green-500 bg-green-500'
                            : isSelected
                            ? 'border-red-500 bg-red-500'
                            : 'border-gray-400'
                          : isSelected
                          ? 'border-blue-500 bg-blue-500'
                          : 'border-gray-400'
                      }`}>
                        {showResult && isCorrect && <CheckCircle className="w-4 h-4 text-white" />}
                        {showResult && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-white" />}
                        {!showResult && isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                      </div>
                      <span className="font-medium">{option}</span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          )}

          {/* Explanation */}
          <AnimatePresence>
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className={`mt-6 p-4 rounded-lg ${
                  questionResults[question.id]
                    ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                    : 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200'
                }`}
              >
                <div className="flex items-start space-x-3">
                  {questionResults[question.id] ? (
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
                  ) : (
                    <XCircle className="w-6 h-6 text-orange-600 mt-0.5" />
                  )}
                  <div>
                    <h4 className="font-semibold mb-2">
                      {questionResults[question.id] ? 'Correct! 🎉' : 'Not quite right 🤔'}
                    </h4>
                    <p>{question.explanation}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      {!showExplanation && (
        <div className="flex justify-between">
          <button
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
            className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>

          {currentQuestion < questions.length - 1 ? (
            <button
              onClick={() => setCurrentQuestion(currentQuestion + 1)}
              disabled={!answers[question.id]}
              className="btn-primary flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>Next</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => finishQuiz(answers)}
              disabled={!answers[question.id]}
              className="btn-primary flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Trophy className="w-4 h-4" />
              <span>Finish Quiz</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default AnimatedQuiz;