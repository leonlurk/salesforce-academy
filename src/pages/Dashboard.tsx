import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Target,
  Zap,
  Trophy,
  BookOpen,
  ChevronRight,
  Play,
  CheckCircle,
  Star
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import { learningPaths } from '../data/learningPaths';

const Dashboard: React.FC = () => {
  const { user } = useUser();

  const recentLessons = [
    {
      id: 'what-is-salesforce',
      title: 'What is Salesforce?',
      path: 'Salesforce Foundation',
      progress: 100,
      timeSpent: '15 min'
    },
    {
      id: 'navigation',
      title: 'Navigating Salesforce',
      path: 'Salesforce Foundation',
      progress: 75,
      timeSpent: '12 min'
    }
  ];

  const upcomingGoals = [
    {
      title: 'Complete Foundation Path',
      progress: 30,
      deadline: '2 weeks',
      type: 'milestone'
    },
    {
      title: 'Take 5 Quizzes',
      progress: 60,
      deadline: '1 week',
      type: 'practice'
    },
    {
      title: 'Maintain 7-day streak',
      progress: 85,
      deadline: '3 days',
      type: 'habit'
    }
  ];

  const achievements = [
    {
      title: 'First Steps',
      description: 'Completed your first lesson',
      icon: '🎯',
      earned: true
    },
    {
      title: 'Quick Learner',
      description: 'Completed 3 lessons in one day',
      icon: '⚡',
      earned: false
    },
    {
      title: 'Foundation Master',
      description: 'Completed the Foundation learning path',
      icon: '🏆',
      earned: false
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-salesforce-blue to-salesforce-lightblue rounded-2xl p-8 text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Welcome back, {user.name}! 👋
            </h1>
            <p className="text-blue-100 text-lg">
              Ready to continue your Salesforce journey?
            </p>
            <div className="flex items-center space-x-6 mt-4">
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>{user.streak} day streak</span>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5" />
                <span>{user.totalPoints} total points</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5" />
                <span>{user.level} level</span>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-8xl opacity-20"
            >
              ⚡
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Quick Stats */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: 'Lessons Completed',
            value: user.completedLessons.length,
            icon: BookOpen,
            color: 'text-green-600',
            bgColor: 'bg-green-100 dark:bg-green-900'
          },
          {
            title: 'Current Streak',
            value: `${user.streak} days`,
            icon: Zap,
            color: 'text-orange-600',
            bgColor: 'bg-orange-100 dark:bg-orange-900'
          },
          {
            title: 'Total Points',
            value: user.totalPoints,
            icon: Trophy,
            color: 'text-yellow-600',
            bgColor: 'bg-yellow-100 dark:bg-yellow-900'
          },
          {
            title: 'Level',
            value: user.level,
            icon: TrendingUp,
            color: 'text-purple-600',
            bgColor: 'bg-purple-100 dark:bg-purple-900'
          }
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card"
          >
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Continue Learning */}
        <div className="lg:col-span-2 space-y-6">
          {/* Learning Paths */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Learning Paths
              </h2>
              <Link
                to="/paths"
                className="text-primary-600 hover:text-primary-700 text-sm font-medium"
              >
                View All
              </Link>
            </div>

            <div className="grid gap-4">
              {learningPaths.slice(0, 2).map((path) => {
                const completedModules = path.modules.filter(m => m.completed).length;
                const progress = (completedModules / path.modules.length) * 100;

                return (
                  <Link
                    key={path.id}
                    to={`/path/${path.id}`}
                    className="block p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-lg ${path.color} flex items-center justify-center text-2xl`}>
                          {path.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600">
                            {path.title}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {path.level} • {path.duration}
                          </p>
                          <div className="mt-2">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs text-gray-600 dark:text-gray-400">
                                {completedModules}/{path.modules.length} modules
                              </span>
                              <span className="text-xs font-medium text-primary-600">
                                {Math.round(progress)}%
                              </span>
                            </div>
                            <div className="progress-bar h-1">
                              <div
                                className="progress-fill h-1"
                                style={{ width: `${progress}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.section>

          {/* Recent Activity */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Recent Activity
            </h2>

            <div className="space-y-4">
              {recentLessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg">
                      {lesson.progress === 100 ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : (
                        <Play className="w-5 h-5 text-primary-600" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {lesson.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {lesson.path} • {lesson.timeSpent}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {lesson.progress}%
                    </p>
                    <div className="w-20 progress-bar mt-1">
                      <div
                        className="progress-fill"
                        style={{ width: `${lesson.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Goals */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="card"
          >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Your Goals
            </h2>
            <div className="space-y-4">
              {upcomingGoals.map((goal, index) => (
                <div key={index} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                      {goal.title}
                    </h3>
                    <Target className="w-4 h-4 text-primary-600" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {goal.deadline} remaining
                    </span>
                    <span className="text-xs font-medium text-primary-600">
                      {goal.progress}%
                    </span>
                  </div>
                  <div className="progress-bar h-1">
                    <div
                      className="progress-fill h-1"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Achievements */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="card"
          >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Achievements
            </h2>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 p-3 rounded-lg ${
                    achievement.earned
                      ? 'bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700'
                      : 'bg-gray-50 dark:bg-gray-700 opacity-60'
                  }`}
                >
                  <span className="text-2xl">{achievement.icon}</span>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                      {achievement.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;