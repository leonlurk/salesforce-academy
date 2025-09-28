import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Clock,
  BookOpen,
  CheckCircle,
  Lock,
  Play,
  Trophy,
  Target,
  ChevronRight
} from 'lucide-react';
import { learningPaths } from '../data/learningPaths';
import { useUser } from '../context/UserContext';
import { useProgressStore } from '../store/progressStore';

const LearningPath: React.FC = () => {
  const { pathId } = useParams<{ pathId: string }>();
  const { user } = useUser();
  const { getPathProgress, isPathUnlocked, isModuleUnlocked, isLessonCompleted, initializeModulesForPath } = useProgressStore();

  const path = learningPaths.find(p => p.id === pathId);
  const pathProgress = pathId ? getPathProgress(pathId) : undefined;

  // Initialize modules for this path when component loads
  React.useEffect(() => {
    if (pathId && path) {
      const modules = path.modules.map(m => ({
        id: m.id,
        lessons: m.lessons.map(l => ({ id: l.id }))
      }));
      initializeModulesForPath(pathId, modules);
    }
  }, [pathId, path, initializeModulesForPath]);

  if (!path) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Learning path not found
        </h1>
      </div>
    );
  }

  const completedModules = path.modules.filter(m =>
    pathId ? (pathProgress?.modules[m.id]?.completed || m.completed) : m.completed
  ).length;
  const totalModules = path.modules.length;
  const overallProgress = (completedModules / totalModules) * 100;

  const isUnlocked = pathId ? isPathUnlocked(pathId) : (
    path.prerequisites.every(prereq =>
      user.completedLessons.some(lesson => lesson.includes(prereq))
    ) || path.prerequisites.length === 0
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`${path.color} rounded-2xl p-8 text-white relative overflow-hidden`}
      >
        <div className="relative z-10">
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-6xl">{path.icon}</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">{path.title}</h1>
              <p className="text-lg opacity-90">{path.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5" />
              <div>
                <p className="text-sm opacity-80">Duration</p>
                <p className="font-medium">{path.duration}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <BookOpen className="w-5 h-5" />
              <div>
                <p className="text-sm opacity-80">Modules</p>
                <p className="font-medium">{totalModules} modules</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Trophy className="w-5 h-5" />
              <div>
                <p className="text-sm opacity-80">Certification</p>
                <p className="font-medium">{path.certification}</p>
              </div>
            </div>
          </div>

          {isUnlocked && (
            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm opacity-80">Overall Progress</span>
                <span className="font-medium">{Math.round(overallProgress)}%</span>
              </div>
              <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                <div
                  className="bg-white h-2 rounded-full transition-all duration-500"
                  style={{ width: `${overallProgress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        <div className="absolute top-0 right-0 text-9xl opacity-10 -mr-4 -mt-4">
          {path.icon}
        </div>
      </motion.section>

      {!isUnlocked && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card bg-yellow-50 dark:bg-yellow-900 border-yellow-200 dark:border-yellow-700"
        >
          <div className="flex items-center space-x-4">
            <Lock className="w-8 h-8 text-yellow-600" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200">
                Prerequisites Required
              </h3>
              <p className="text-yellow-700 dark:text-yellow-300">
                Complete the following learning paths to unlock this content:
              </p>
              <ul className="mt-2 space-y-1">
                {path.prerequisites.map((prereq) => {
                  const prereqPath = learningPaths.find(p => p.id === prereq);
                  return (
                    <li key={prereq} className="flex items-center space-x-2">
                      <Target className="w-4 h-4 text-yellow-600" />
                      <Link
                        to={`/path/${prereq}`}
                        className="text-yellow-800 dark:text-yellow-200 hover:underline"
                      >
                        {prereqPath?.title || prereq}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </motion.div>
      )}

      {/* Modules */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Modules
        </h2>

        <div className="space-y-6">
          {path.modules.map((module, index) => {
            const completedLessons = module.lessons.filter(l =>
              pathId ? isLessonCompleted(pathId, module.id, l.id) || l.completed : l.completed
            ).length;
            const totalLessons = module.lessons.length;
            const moduleProgress = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;
            const moduleCompleted = pathId ? (pathProgress?.modules[module.id]?.completed || module.completed) : module.completed;
            const isModuleUnlockedNew = pathId ? isModuleUnlocked(pathId, module.id) : false;
            const isModuleUnlockedLegacy = isUnlocked && (!module.locked || index === 0 || path.modules[index - 1].completed);
            const isModuleUnlockedFinal = isModuleUnlockedNew || isModuleUnlockedLegacy;

            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`card ${!isModuleUnlockedFinal ? 'opacity-60' : ''}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${
                      moduleCompleted
                        ? 'bg-green-100 dark:bg-green-900'
                        : isModuleUnlockedFinal
                        ? 'bg-primary-100 dark:bg-primary-900'
                        : 'bg-gray-100 dark:bg-gray-700'
                    }`}>
                      {moduleCompleted ? (
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      ) : isModuleUnlockedFinal ? (
                        <BookOpen className="w-6 h-6 text-primary-600" />
                      ) : (
                        <Lock className="w-6 h-6 text-gray-400" />
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {module.title}
                        </h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {module.duration}
                        </span>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {module.description}
                      </p>

                      {isModuleUnlockedFinal && (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {completedLessons}/{totalLessons} lessons completed
                            </span>
                            <span className="text-sm font-medium text-primary-600">
                              {Math.round(moduleProgress)}%
                            </span>
                          </div>
                          <div className="progress-bar">
                            <div
                              className="progress-fill"
                              style={{ width: `${moduleProgress}%` }}
                            />
                          </div>

                          {/* Lessons Preview */}
                          <div className="mt-4 space-y-2">
                            {module.lessons.slice(0, 3).map((lesson) => (
                              <Link
                                key={lesson.id}
                                to={`/path/${pathId}/module/${module.id}/lesson/${lesson.id}`}
                                className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                              >
                                <div className="flex items-center space-x-3">
                                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                    (pathId && isLessonCompleted(pathId, module.id, lesson.id)) || lesson.completed
                                      ? 'bg-green-100 dark:bg-green-900'
                                      : 'bg-gray-100 dark:bg-gray-700'
                                  }`}>
                                    {(pathId && isLessonCompleted(pathId, module.id, lesson.id)) || lesson.completed ? (
                                      <CheckCircle className="w-3 h-3 text-green-600" />
                                    ) : (
                                      <Play className="w-3 h-3 text-gray-500" />
                                    )}
                                  </div>
                                  <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-primary-600">
                                    {lesson.title}
                                  </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <span className="text-xs text-gray-500">
                                    {lesson.duration}
                                  </span>
                                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary-600" />
                                </div>
                              </Link>
                            ))}
                            {module.lessons.length > 3 && (
                              <p className="text-xs text-gray-500 dark:text-gray-400 text-center py-2">
                                +{module.lessons.length - 3} more lessons
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {isModuleUnlockedFinal && (
                    <div className="flex flex-col space-y-2">
                      <Link
                        to={`/path/${pathId}/module/${module.id}/lesson/${module.lessons[0]?.id}`}
                        className="btn-primary"
                      >
                        {moduleCompleted ? 'Review' : completedLessons > 0 ? 'Continue' : 'Start'}
                      </Link>
                      {module.quiz && (
                        <Link
                          to={`/quiz/${module.quiz.id}`}
                          className="btn-secondary text-center"
                        >
                          Quiz
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Certification Info */}
      {path.certification && isUnlocked && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900 border-yellow-200 dark:border-yellow-700"
        >
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 dark:bg-yellow-800 rounded-xl">
              <Trophy className="w-8 h-8 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Earn Your {path.certification} Certification
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Complete this learning path to prepare for the official Salesforce certification exam.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <span>• Industry-recognized credential</span>
                <span>• Career advancement</span>
                <span>• Salary increase potential</span>
              </div>
            </div>
          </div>
        </motion.section>
      )}
    </div>
  );
};

export default LearningPath;