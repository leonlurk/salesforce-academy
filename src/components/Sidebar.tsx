import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Home,
  Trophy,
  User,
  Search,
  Settings,
  X,
  ChevronRight,
  Zap,
  Target
} from 'lucide-react';
import { learningPaths } from '../data/learningPaths';
import { useUser } from '../context/UserContext';

interface SidebarProps {
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const location = useLocation();
  const { user } = useUser();

  const mainNavItems = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Learning Paths', href: '/paths', icon: Target },
    { name: 'Search', href: '/search', icon: Search },
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      exit={{ x: -300 }}
      className="w-80 bg-white dark:bg-gray-800 shadow-xl border-r border-gray-200 dark:border-gray-700 h-screen overflow-y-auto"
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-salesforce-blue to-salesforce-lightblue rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Salesforce Academy
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Master the Force
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* User Progress Summary */}
        <div className="mt-4 p-4 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Overall Progress
            </span>
            <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
              {Math.round((user.completedLessons.length / 50) * 100)}%
            </span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${(user.completedLessons.length / 50) * 100}%` }}
            />
          </div>
          <div className="flex items-center justify-between mt-2 text-xs text-gray-600 dark:text-gray-400">
            <span>{user.completedLessons.length} lessons completed</span>
            <div className="flex items-center space-x-2">
              <Trophy size={12} className="text-yellow-500" />
              <span>{user.totalPoints} pts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="p-6">
        <nav className="space-y-2">
          {mainNavItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={onClose}
              className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300'
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              <item.icon size={18} className="mr-3" />
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Learning Paths */}
        <div className="mt-8">
          <h3 className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
            Learning Paths
          </h3>
          <div className="space-y-3">
            {learningPaths.map((path) => {
              const isUnlocked = path.prerequisites.every(prereq =>
                user.completedLessons.some(lesson => lesson.includes(prereq))
              ) || path.prerequisites.length === 0;

              const completedModules = path.modules.filter(module => module.completed).length;
              const progress = (completedModules / path.modules.length) * 100;

              return (
                <motion.div
                  key={path.id}
                  whileHover={{ x: 4 }}
                  className={`relative ${!isUnlocked ? 'opacity-50' : ''}`}
                >
                  <Link
                    to={`/path/${path.id}`}
                    onClick={onClose}
                    className="block p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{path.icon}</span>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                            {path.title}
                          </h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {path.level} • {path.duration}
                          </p>
                        </div>
                      </div>
                      <ChevronRight size={16} className="text-gray-400" />
                    </div>

                    {isUnlocked && (
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            Progress
                          </span>
                          <span className="text-xs font-medium text-primary-600 dark:text-primary-400">
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
                    )}

                    {!isUnlocked && (
                      <div className="flex items-center space-x-2 mt-2">
                        <Target size={12} className="text-gray-400" />
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          Complete prerequisites to unlock
                        </span>
                      </div>
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
            Your Stats
          </h3>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                {user.streak}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Day Streak
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {user.achievements.length}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Achievements
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;