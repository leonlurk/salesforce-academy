import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import type { User, Theme } from './types';

// Components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import LearningPaths from './pages/LearningPaths';
import LearningPath from './pages/LearningPath';
import Lesson from './pages/Lesson';
import Quiz from './pages/Quiz';
import Profile from './pages/Profile';
import Search from './pages/Search';

// Context
import { ThemeContext } from './context/ThemeContext';
import { UserContext } from './context/UserContext';

function App() {
  const [user, setUser] = useState<User>({
    id: '1',
    name: 'Salesforce Learner',
    email: 'learner@example.com',
    level: 'Beginner',
    experience: 0,
    completedLessons: [],
    achievements: [],
    streak: 0,
    totalPoints: 0
  });

  const [theme, setTheme] = useState<Theme>({
    mode: 'light',
    primaryColor: '#0ea5e9',
    accentColor: '#1B5F99'
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Load user data from localStorage
    const savedUser = localStorage.getItem('salesforce-academy-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    // Load theme from localStorage
    const savedTheme = localStorage.getItem('salesforce-academy-theme');
    if (savedTheme) {
      const parsedTheme = JSON.parse(savedTheme);
      setTheme(parsedTheme);
      document.documentElement.classList.toggle('dark', parsedTheme.mode === 'dark');
    }
  }, []);

  useEffect(() => {
    // Save user data to localStorage
    localStorage.setItem('salesforce-academy-user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    // Save theme to localStorage
    localStorage.setItem('salesforce-academy-theme', JSON.stringify(theme));
    document.documentElement.classList.toggle('dark', theme.mode === 'dark');
  }, [theme]);

  const updateUser = (updatedUser: Partial<User>) => {
    setUser(prev => ({ ...prev, ...updatedUser }));
  };

  const updateTheme = (updatedTheme: Partial<Theme>) => {
    setTheme(prev => ({ ...prev, ...updatedTheme }));
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <UserContext.Provider value={{ user, updateUser }}>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

            <div className="flex">
              <AnimatePresence>
                {sidebarOpen && (
                  <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-y-0 left-0 z-50 lg:relative lg:translate-x-0"
                  >
                    <Sidebar onClose={() => setSidebarOpen(false)} />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex-1 lg:ml-0">
                <main className="container mx-auto px-4 py-6">
                  <Routes>
                    <Route path="/" element={<Navigate to="/dashboard" replace />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/paths" element={<LearningPaths />} />
                    <Route path="/path/:pathId" element={<LearningPath />} />
                    <Route path="/path/:pathId/module/:moduleId/lesson/:lessonId" element={<Lesson />} />
                    <Route path="/quiz/:quizId" element={<Quiz />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/search" element={<Search />} />
                  </Routes>
                </main>
              </div>
            </div>

            {/* Overlay for mobile */}
            {sidebarOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSidebarOpen(false)}
                className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              />
            )}
          </div>
        </Router>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
