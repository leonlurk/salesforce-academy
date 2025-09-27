export interface User {
  id: string;
  name: string;
  email: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  experience: number;
  completedLessons: string[];
  achievements: Achievement[];
  streak: number;
  totalPoints: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: Date;
  points: number;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  level: 'Foundation' | 'Administrator' | 'Developer' | 'Architect';
  duration: string;
  modules: Module[];
  prerequisites: string[];
  certification?: string;
  color: string;
  icon: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  duration: string;
  lessons: Lesson[];
  quiz: Quiz;
  completed: boolean;
  locked: boolean;
  order: number;
}

export interface Lesson {
  id: string;
  title: string;
  type: 'content' | 'interactive' | 'hands-on' | 'video';
  content: LessonContent;
  duration: string;
  completed: boolean;
  points: number;
  order: number;
}

export interface LessonContent {
  text?: string;
  code?: CodeExample[];
  interactive?: InteractiveElement[];
  quiz?: QuizQuestion[];
  resources?: Resource[];
}

export interface CodeExample {
  language: 'apex' | 'javascript' | 'html' | 'css' | 'soql';
  code: string;
  explanation?: string;
  editable?: boolean;
  output?: string;
}

export interface InteractiveElement {
  type: 'drag-drop' | 'click-sequence' | 'form-builder' | 'code-editor';
  data: any;
  validation: any;
  feedback: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: QuizQuestion[];
  passingScore: number;
  timeLimit?: number;
  attempts: number;
  maxAttempts: number;
}

export interface QuizQuestion {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'fill-in-blank' | 'code-completion' | 'drag-drop';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  points: number;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

export interface Resource {
  title: string;
  type: 'documentation' | 'video' | 'article' | 'trailhead' | 'github';
  url: string;
  description?: string;
}

export interface Progress {
  userId: string;
  pathId: string;
  moduleId: string;
  lessonId?: string;
  progress: number;
  completed: boolean;
  lastAccessed: Date;
  timeSpent: number;
}

export interface Theme {
  mode: 'light' | 'dark';
  primaryColor: string;
  accentColor: string;
}