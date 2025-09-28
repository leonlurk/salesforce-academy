import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Clock,
  Trophy,
  CheckCircle,
  Play,
  FileText,
  ExternalLink,
  Star,
  Target,
  Zap
} from 'lucide-react';
import { learningPaths } from '../data/learningPaths';
import { useUser } from '../context/UserContext';
import { useProgressStore } from '../store/progressStore';
import ReactMarkdown from 'react-markdown';
import InteractiveLesson from '../components/InteractiveLesson';
import AnimatedQuiz from '../components/AnimatedQuiz';

const Lesson: React.FC = () => {
  const { pathId, moduleId, lessonId } = useParams();
  const navigate = useNavigate();
  const { user, updateUser } = useUser();
  const { completeLesson, isLessonCompleted, completeQuiz } = useProgressStore();
  const [showQuiz, setShowQuiz] = useState(false);
  const [lessonStartTime] = useState(new Date());

  // Find the current lesson
  const path = learningPaths.find(p => p.id === pathId);
  const module = path?.modules.find(m => m.id === moduleId);
  const lesson = module?.lessons.find(l => l.id === lessonId);
  const currentLessonIndex = module?.lessons.findIndex(l => l.id === lessonId) || 0;
  const nextLesson = module?.lessons[currentLessonIndex + 1];
  const prevLesson = module?.lessons[currentLessonIndex - 1];

  useEffect(() => {
    if (!lesson) {
      navigate('/dashboard');
    }
  }, [lesson, navigate]);

  if (!lesson || !module || !path) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Lesson not found
        </h1>
        <Link to="/dashboard" className="text-primary-600 hover:underline">
          Return to Dashboard
        </Link>
      </div>
    );
  }

  const handleCompleteLesson = () => {
    if (!isCompleted && pathId && moduleId && lessonId) {
      const timeSpent = Math.floor((new Date().getTime() - lessonStartTime.getTime()) / 1000);
      completeLesson(pathId, moduleId, lessonId, lesson.points, timeSpent);

      // Keep the old user system updated for compatibility
      if (!user.completedLessons.includes(lesson.id)) {
        updateUser({
          completedLessons: [...user.completedLessons, lesson.id],
          totalPoints: user.totalPoints + lesson.points,
          experience: user.experience + lesson.points
        });
      }
    }
  };

  const isCompleted = pathId && moduleId && lessonId ?
    isLessonCompleted(pathId, moduleId, lessonId) || user.completedLessons.includes(lesson.id) :
    false;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <Link to="/dashboard" className="hover:text-primary-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/paths" className="hover:text-primary-600">Learning Paths</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to={`/path/${pathId}`} className="hover:text-primary-600">{path.title}</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 dark:text-white">{lesson.title}</span>
        </nav>

        {/* Lesson Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <div className={`p-2 rounded-lg ${
                lesson.type === 'content' ? 'bg-blue-100 dark:bg-blue-900' :
                lesson.type === 'interactive' ? 'bg-green-100 dark:bg-green-900' :
                lesson.type === 'hands-on' ? 'bg-purple-100 dark:bg-purple-900' :
                'bg-orange-100 dark:bg-orange-900'
              }`}>
                {lesson.type === 'content' ? <FileText className="w-5 h-5 text-blue-600" /> :
                 lesson.type === 'interactive' ? <Play className="w-5 h-5 text-green-600" /> :
                 lesson.type === 'hands-on' ? <Target className="w-5 h-5 text-purple-600" /> :
                 <BookOpen className="w-5 h-5 text-orange-600" />}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {lesson.title}
                </h1>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{lesson.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Trophy className="w-4 h-4" />
                    <span>{lesson.points} points</span>
                  </div>
                  {isCompleted && (
                    <div className="flex items-center space-x-1 text-green-600">
                      <CheckCircle className="w-4 h-4" />
                      <span>Completed</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="mt-4 lg:mt-0">
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <span>Lesson {currentLessonIndex + 1} of {module.lessons.length}</span>
              <div className="w-24 progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${((currentLessonIndex + 1) / module.lessons.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card"
          >
            {/* Lesson Content */}
            <div className="prose prose-lg max-w-none dark:prose-invert">
              {lesson.content.text && (
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => (
                      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-primary-200 pb-2">
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4 flex items-center">
                        <Zap className="w-6 h-6 text-primary-500 mr-2" />
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mt-6 mb-3">
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-none space-y-2 my-4">
                        {children}
                      </ul>
                    ),
                    li: ({ children }) => (
                      <li className="flex items-start space-x-2">
                        <Star className="w-4 h-4 text-primary-500 mt-1 flex-shrink-0" />
                        <span>{children}</span>
                      </li>
                    ),
                    code: ({ children }) => (
                      <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">
                        {children}
                      </code>
                    ),
                    pre: ({ children }) => (
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4">
                        {children}
                      </pre>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-primary-500 pl-4 my-4 bg-primary-50 dark:bg-primary-900 p-4 rounded-r-lg">
                        {children}
                      </blockquote>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-bold text-primary-700 dark:text-primary-300">
                        {children}
                      </strong>
                    )
                  }}
                >
                  {lesson.content.text}
                </ReactMarkdown>
              )}
            </div>

            {/* Interactive Elements */}
            {lesson.content.interactive && lesson.content.interactive.length > 0 && (
              <div className="mt-8">
                <InteractiveLesson
                  exercises={lesson.content.interactive}
                  onComplete={(results) => {
                    console.log('Interactive exercise completed:', results);
                    // Award bonus points for interactive completion
                    updateUser({
                      totalPoints: user.totalPoints + 50,
                      experience: user.experience + 50
                    });
                  }}
                />
              </div>
            )}

            {/* Quick Quiz */}
            {lesson.content.quiz && lesson.content.quiz.length > 0 && (
              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                    <Target className="w-5 h-5 text-purple-600 mr-2" />
                    Quick Knowledge Check
                  </h3>
                  {!showQuiz && (
                    <button
                      onClick={() => setShowQuiz(true)}
                      className="btn-primary"
                    >
                      Take Quiz
                    </button>
                  )}
                </div>

                {showQuiz && (
                  <AnimatedQuiz
                    questions={lesson.content.quiz}
                    passingScore={80}
                    onComplete={(results) => {
                      console.log('Quiz completed:', results);
                      if (results.passed && pathId && moduleId) {
                        // Complete the quiz using the progress store
                        completeQuiz(pathId, moduleId, `${lessonId}-quiz`, results.percentage);
                        handleCompleteLesson();

                        // Award additional points for quiz performance
                        const bonusPoints = results.percentage >= 90 ? 100 : results.percentage >= 80 ? 50 : 0;
                        updateUser({
                          totalPoints: user.totalPoints + bonusPoints,
                          experience: user.experience + bonusPoints
                        });
                      }
                    }}
                    allowRetry={true}
                  />
                )}
              </div>
            )}

            {/* Completion Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              {!isCompleted && (
                <button
                  onClick={handleCompleteLesson}
                  className="btn-primary flex items-center space-x-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Mark as Complete</span>
                </button>
              )}

              {nextLesson && (
                <Link
                  to={`/path/${pathId}/module/${moduleId}/lesson/${nextLesson.id}`}
                  className="btn-secondary flex items-center space-x-2"
                >
                  <span>Next Lesson</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Resources */}
          {lesson.content.resources && lesson.content.resources.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="card"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                Additional Resources
              </h3>
              <div className="space-y-3">
                {lesson.content.resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600">
                          {resource.title}
                        </h4>
                        {resource.description && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {resource.description}
                          </p>
                        )}
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-600" />
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          )}

          {/* Module Progress */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="card"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Module Progress
            </h3>
            <div className="space-y-2">
              {module.lessons.map((moduleLesson, index) => (
                <Link
                  key={moduleLesson.id}
                  to={`/path/${pathId}/module/${moduleId}/lesson/${moduleLesson.id}`}
                  className={`flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                    moduleLesson.id === lessonId
                      ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    (pathId && moduleId && isLessonCompleted(pathId, moduleId, moduleLesson.id)) || user.completedLessons.includes(moduleLesson.id)
                      ? 'bg-green-500 text-white'
                      : moduleLesson.id === lessonId
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400'
                  }`}>
                    {(pathId && moduleId && isLessonCompleted(pathId, moduleId, moduleLesson.id)) || user.completedLessons.includes(moduleLesson.id) ? '✓' : index + 1}
                  </div>
                  <span className="text-sm font-medium truncate">
                    {moduleLesson.title}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="card"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Navigation
            </h3>
            <div className="space-y-2">
              {prevLesson && (
                <Link
                  to={`/path/${pathId}/module/${moduleId}/lesson/${prevLesson.id}`}
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="text-sm">Previous Lesson</span>
                </Link>
              )}
              <Link
                to={`/path/${pathId}`}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                <span className="text-sm">Back to {path.title}</span>
              </Link>
              {nextLesson && (
                <Link
                  to={`/path/${pathId}/module/${moduleId}/lesson/${nextLesson.id}`}
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors"
                >
                  <span className="text-sm">Next Lesson</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Lesson;