import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Clock,
  BookOpen,
  Trophy,
  ChevronRight,
  Target,
  Lock,
  CheckCircle
} from 'lucide-react';
import { learningPaths } from '../data/learningPaths';
import { useUser } from '../context/UserContext';

const LearningPaths: React.FC = () => {
  const { user } = useUser();

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Learning Paths
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Master Salesforce from foundation to expert level with our comprehensive,
          hands-on learning paths designed to prepare you for real-world success.
        </p>
      </motion.section>

      {/* Learning Paths Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {learningPaths.map((path, index) => {
          const isUnlocked = path.prerequisites.every(prereq =>
            user.completedLessons.some(lesson => lesson.includes(prereq))
          ) || path.prerequisites.length === 0;

          const completedModules = path.modules.filter(module => module.completed).length;
          const totalModules = path.modules.length;
          const progress = (completedModules / totalModules) * 100;

          const totalLessons = path.modules.reduce((acc, module) => acc + module.lessons.length, 0);
          const completedLessons = path.modules.reduce((acc, module) =>
            acc + module.lessons.filter(lesson => lesson.completed).length, 0
          );

          return (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden ${!isUnlocked ? 'opacity-75' : ''}`}
            >
              <Link
                to={`/path/${path.id}`}
                className="block h-full"
              >
                <div className={`card hover:shadow-lg transition-all duration-300 h-full ${
                  !isUnlocked ? 'cursor-not-allowed' : 'hover:scale-105'
                }`}>
                  {/* Header with gradient background */}
                  <div className={`${path.color} -m-6 mb-6 p-6 text-white relative overflow-hidden`}>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-4xl">{path.icon}</span>
                        <div className="text-right">
                          <div className="text-sm opacity-90">{path.level}</div>
                          <div className="text-xs opacity-75">{path.duration}</div>
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold mb-2">{path.title}</h2>
                      <p className="text-sm opacity-90">{path.description}</p>
                    </div>
                    <div className="absolute top-0 right-0 text-8xl opacity-10 -mr-4 -mt-4">
                      {path.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          {totalModules}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          Modules
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          {totalLessons}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          Lessons
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary-600">
                          {Math.round(progress)}%
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          Complete
                        </div>
                      </div>
                    </div>

                    {/* Progress */}
                    {isUnlocked && (
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            Progress
                          </span>
                          <span className="text-sm font-medium text-primary-600">
                            {completedLessons}/{totalLessons} lessons
                          </span>
                        </div>
                        <div className="progress-bar">
                          <div
                            className="progress-fill"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Prerequisites */}
                    {!isUnlocked && (
                      <div className="p-4 bg-yellow-50 dark:bg-yellow-900 rounded-lg border border-yellow-200 dark:border-yellow-700">
                        <div className="flex items-center space-x-2 mb-2">
                          <Lock className="w-4 h-4 text-yellow-600" />
                          <span className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                            Prerequisites Required
                          </span>
                        </div>
                        <div className="text-xs text-yellow-700 dark:text-yellow-300">
                          Complete: {path.prerequisites.map(prereq => {
                            const prereqPath = learningPaths.find(p => p.id === prereq);
                            return prereqPath?.title || prereq;
                          }).join(', ')}
                        </div>
                      </div>
                    )}

                    {/* Features */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Estimated completion: {path.duration}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <BookOpen className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Interactive lessons and hands-on exercises
                        </span>
                      </div>
                      {path.certification && (
                        <div className="flex items-center space-x-3">
                          <Trophy className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            Prepares for {path.certification}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Action */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-2">
                        {isUnlocked ? (
                          <>
                            {progress > 0 ? (
                              <>
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                                  In Progress
                                </span>
                              </>
                            ) : (
                              <>
                                <Target className="w-4 h-4 text-primary-500" />
                                <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                                  Ready to Start
                                </span>
                              </>
                            )}
                          </>
                        ) : (
                          <>
                            <Lock className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              Locked
                            </span>
                          </>
                        )}
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center py-12"
      >
        <div className="card bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900 dark:to-blue-900 border-primary-200 dark:border-primary-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Begin Your Salesforce Journey?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Start with our Foundation path and work your way up to become a Salesforce expert.
            Each path builds upon the previous one, ensuring you have a solid understanding
            of the platform.
          </p>
          <Link
            to="/path/foundation"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Start with Foundation</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default LearningPaths;