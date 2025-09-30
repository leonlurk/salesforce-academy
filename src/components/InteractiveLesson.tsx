import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle,
  XCircle,
  RotateCcw,
  Target,
  Zap,
  ArrowRight,
  Clock,
  Star,
  Trophy,
  Maximize,
  X
} from 'lucide-react';
import type { InteractiveElement } from '../types';
import SalesforcePlayground from './SalesforcePlayground';

interface Step {
  instruction: string;
  target?: string;
  hint?: string;
  details?: string;
  validation?: string;
}


interface InteractiveLessonProps {
  exercises: InteractiveElement[];
  onComplete?: (results: any) => void;
}

const InteractiveLesson: React.FC<InteractiveLessonProps> = ({ exercises, onComplete }) => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [userSequence, setUserSequence] = useState<number[]>([]);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [isComplete, setIsComplete] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isPlaygroundModalOpen, setIsPlaygroundModalOpen] = useState(false);

  const exercise = exercises[currentExercise];

  useEffect(() => {
    if (exercise && !startTime) {
      setStartTime(new Date());
    }
  }, [exercise, startTime]);

  useEffect(() => {
    if (startTime && !isComplete) {
      const interval = setInterval(() => {
        setElapsedTime(Math.floor((new Date().getTime() - startTime.getTime()) / 1000));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [startTime, isComplete]);

  const handleStepClick = (stepIndex: number) => {
    if (exercise.type === 'click-sequence') {
      const newSequence = [...userSequence, stepIndex];
      setUserSequence(newSequence);
      setCompletedSteps(new Set([...completedSteps, stepIndex]));

      // Check if sequence matches expected
      const expectedSequence = exercise.validation?.correctSequence || [];
      if (newSequence.length === expectedSequence.length) {
        const isCorrect = newSequence.every((step, index) => step === expectedSequence[index]);
        setIsComplete(isCorrect);
        setShowFeedback(true);

        if (isCorrect && onComplete) {
          onComplete({
            exerciseIndex: currentExercise,
            timeToComplete: elapsedTime,
            attempts: 1,
            success: true
          });
        }
      }
    }
  };

  const resetExercise = () => {
    setUserSequence([]);
    setCompletedSteps(new Set());
    setIsComplete(false);
    setShowFeedback(false);
    setStartTime(new Date());
    setElapsedTime(0);
  };

  const nextExercise = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      resetExercise();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!exercise) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Exercise Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {exercise.data.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {exercise.data.description}
              </p>
            </div>
          </div>

          {/* Timer and Progress */}
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1 text-gray-500">
              <Clock className="w-4 h-4" />
              <span>{formatTime(elapsedTime)}</span>
            </div>
            <div className="text-gray-500">
              Exercise {currentExercise + 1} of {exercises.length}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-500"
            style={{
              width: `${(userSequence.length / (exercise.validation?.correctSequence?.length || 1)) * 100}%`
            }}
          />
        </div>
      </motion.div>

      {/* Interactive Exercise Area */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900 dark:to-green-900 rounded-xl p-8 mb-6"
      >
        {exercise.type === 'click-sequence' && (
          <div className="space-y-4">
            <div className="grid gap-4">
              {exercise.data.steps.map((step: Step, index: number) => {
                const isCompleted = completedSteps.has(index);
                const isNext = userSequence.length === index;
                const isClickable = !isComplete && (userSequence.length === index);

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                      isCompleted
                        ? 'bg-green-100 dark:bg-green-900 border-green-500 text-green-800 dark:text-green-200'
                        : isNext
                        ? 'bg-blue-100 dark:bg-blue-900 border-blue-500 border-dashed animate-pulse'
                        : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                    onClick={() => isClickable && handleStepClick(index)}
                    whileHover={isClickable ? { scale: 1.02 } : {}}
                    whileTap={isClickable ? { scale: 0.98 } : {}}
                  >
                    <div className="flex items-center space-x-4">
                      {/* Step Number/Status */}
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                        isCompleted
                          ? 'bg-green-500 text-white'
                          : isNext
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400'
                      }`}>
                        {isCompleted ? (
                          <CheckCircle className="w-6 h-6" />
                        ) : (
                          <span>{index + 1}</span>
                        )}
                      </div>

                      {/* Step Content */}
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 dark:text-white">
                          {step.instruction}
                        </p>
                        {step.hint && isNext && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="text-sm text-blue-600 dark:text-blue-400 mt-2"
                          >
                            💡 Hint: {step.hint}
                          </motion.p>
                        )}
                      </div>

                      {/* Action Indicator */}
                      {isNext && (
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1 }}
                          className="text-blue-500"
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {exercise.type === 'playground' && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {exercise.title || 'Salesforce Playground'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {exercise.description || 'Practice in a simulated Salesforce environment'}
              </p>
            </div>

            {/* Playground Launch Button */}
            <div className="text-center">
              <motion.button
                onClick={() => setIsPlaygroundModalOpen(true)}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Maximize className="w-6 h-6" />
                Launch Salesforce Playground
              </motion.button>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Opens in fullscreen for the best experience
              </p>
            </div>

            {exercise.data?.objectives && (
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Learning Objectives:</h4>
                <ul className="list-disc list-inside space-y-1 text-blue-800 dark:text-blue-200">
                  {exercise.data.objectives.map((objective: string, index: number) => (
                    <li key={index}>{objective}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </motion.div>

      {/* Feedback Section */}
      <AnimatePresence>
        {showFeedback && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`p-6 rounded-xl mb-6 ${
              isComplete
                ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
            }`}
          >
            <div className="flex items-center space-x-3">
              {isComplete ? (
                <Trophy className="w-8 h-8 text-green-600" />
              ) : (
                <XCircle className="w-8 h-8 text-red-600" />
              )}
              <div>
                <h4 className="text-lg font-bold">
                  {isComplete ? '🎉 Excellent Work!' : '🤔 Not quite right...'}
                </h4>
                <p className="mt-1">
                  {isComplete
                    ? `You completed the exercise in ${formatTime(elapsedTime)}! ${exercise.feedback}`
                    : 'The sequence wasn\'t correct. Try again following the steps in order.'
                  }
                </p>
                {isComplete && (
                  <div className="flex items-center space-x-4 mt-3 text-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>+{Math.max(100 - elapsedTime, 50)} points</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Zap className="w-4 h-4 text-blue-500" />
                      <span>Speed bonus: {elapsedTime < 30 ? '+25 points' : 'None'}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action Buttons */}
      <div className="flex justify-between items-center">
        <button
          onClick={resetExercise}
          className="flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset Exercise</span>
        </button>

        <div className="flex space-x-3">
          {!isComplete && userSequence.length > 0 && (
            <button
              onClick={resetExercise}
              className="btn-secondary"
            >
              Start Over
            </button>
          )}

          {isComplete && currentExercise < exercises.length - 1 && (
            <button
              onClick={nextExercise}
              className="btn-primary flex items-center space-x-2"
            >
              <span>Next Exercise</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          {isComplete && currentExercise === exercises.length - 1 && (
            <button
              onClick={() => onComplete?.({ allCompleted: true })}
              className="btn-primary flex items-center space-x-2"
            >
              <Trophy className="w-4 h-4" />
              <span>Complete All Exercises</span>
            </button>
          )}
        </div>
      </div>

      {/* Fullscreen Playground Modal */}
      <AnimatePresence>
        {isPlaygroundModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsPlaygroundModalOpen(false);
              }
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-[95vw] h-[95vh] bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {exercise.title || 'Salesforce Playground'}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {exercise.description || 'Practice in a simulated Salesforce environment'}
                  </p>
                </div>
                <button
                  onClick={() => setIsPlaygroundModalOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="h-[calc(95vh-80px)] overflow-hidden">
                <SalesforcePlayground
                  title={exercise.title}
                  description={exercise.description}
                  data={{
                    module: (exercise.module as 'objects' | 'fields' | 'workflows' | 'reports' | 'apex' | 'lwc' | 'integration') || 'objects',
                    objectives: exercise.objectives || [],
                    showNavigation: true,
                    showAppLauncher: true
                  }}
                  onComplete={(results) => {
                    console.log('Playground completed:', results);
                    setIsComplete(true);
                    setShowFeedback(true);
                    setIsPlaygroundModalOpen(false);
                    onComplete?.(results);
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveLesson;