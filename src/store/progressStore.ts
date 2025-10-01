import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface LessonProgress {
  lessonId: string;
  completed: boolean;
  points: number;
  completedAt?: Date;
  timeSpent?: number;
  attempts?: number;
}

export interface ModuleProgress {
  moduleId: string;
  completed: boolean;
  locked: boolean;
  lessons: Record<string, LessonProgress>;
  totalPoints: number;
  completedAt?: Date;
}

export interface PathProgress {
  pathId: string;
  completed: boolean;
  locked: boolean;
  modules: Record<string, ModuleProgress>;
  totalPoints: number;
  completedAt?: Date;
}

export interface UserProgress {
  paths: Record<string, PathProgress>;
  totalPoints: number;
  completedLessons: number;
  achievements: string[];
  level: number;
}

interface ProgressState {
  progress: UserProgress;
  completeLesson: (pathId: string, moduleId: string, lessonId: string, points: number, timeSpent?: number) => void;
  completeQuiz: (pathId: string, moduleId: string, quizId: string, score: number) => void;
  unlockPath: (pathId: string) => void;
  unlockModule: (pathId: string, moduleId: string) => void;
  resetProgress: () => void;
  getPathProgress: (pathId: string) => PathProgress | undefined;
  getModuleProgress: (pathId: string, moduleId: string) => ModuleProgress | undefined;
  getLessonProgress: (pathId: string, moduleId: string, lessonId: string) => LessonProgress | undefined;
  isPathUnlocked: (pathId: string) => boolean;
  isModuleUnlocked: (pathId: string, moduleId: string) => boolean;
  isLessonCompleted: (pathId: string, moduleId: string, lessonId: string) => boolean;
  getNextUnlockedModule: (pathId: string) => string | null;
  initializeModulesForPath: (pathId: string, modules: Array<{id: string, lessons: Array<{id: string}>}>) => void;
}

const initialProgress: UserProgress = {
  paths: {
    foundation: {
      pathId: 'foundation',
      completed: false,
      locked: false, // Foundation path is always unlocked
      modules: {},
      totalPoints: 0
    },
    admin: {
      pathId: 'admin',
      completed: false,
      locked: false, // TEMPORARILY UNLOCKED FOR TESTING
      modules: {},
      totalPoints: 0
    },
    developer: {
      pathId: 'developer',
      completed: false,
      locked: false, // TEMPORARILY UNLOCKED FOR TESTING
      modules: {},
      totalPoints: 0
    },
    architect: {
      pathId: 'architect',
      completed: false,
      locked: false, // TEMPORARILY UNLOCKED FOR TESTING
      modules: {},
      totalPoints: 0
    }
  },
  totalPoints: 0,
  completedLessons: 0,
  achievements: [],
  level: 1
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      progress: initialProgress,

      completeLesson: (pathId: string, moduleId: string, lessonId: string, points: number, timeSpent?: number) => {
        console.log('progressStore.completeLesson called with:', { pathId, moduleId, lessonId, points, timeSpent });
        set((state) => {
          console.log('Current progress state:', state.progress);
          const newProgress = { ...state.progress };

          // Ensure path exists
          if (!newProgress.paths[pathId]) {
            newProgress.paths[pathId] = {
              pathId,
              completed: false,
              locked: true,
              modules: {},
              totalPoints: 0
            };
          }

          // Ensure module exists
          if (!newProgress.paths[pathId].modules[moduleId]) {
            newProgress.paths[pathId].modules[moduleId] = {
              moduleId,
              completed: false,
              locked: false,
              lessons: {},
              totalPoints: 0
            };
          }

          // Complete the lesson
          const wasCompleted = newProgress.paths[pathId].modules[moduleId].lessons[lessonId]?.completed || false;

          newProgress.paths[pathId].modules[moduleId].lessons[lessonId] = {
            lessonId,
            completed: true,
            points,
            completedAt: new Date(),
            timeSpent,
            attempts: (newProgress.paths[pathId].modules[moduleId].lessons[lessonId]?.attempts || 0) + 1
          };

          // Update points only if lesson wasn't completed before
          if (!wasCompleted) {
            newProgress.paths[pathId].modules[moduleId].totalPoints += points;
            newProgress.paths[pathId].totalPoints += points;
            newProgress.totalPoints += points;
            newProgress.completedLessons += 1;
          }

          // Check if module is complete
          const moduleProgress = newProgress.paths[pathId].modules[moduleId];
          const allLessonsCompleted = Object.values(moduleProgress.lessons).every(lesson => lesson.completed);

          if (allLessonsCompleted && !moduleProgress.completed) {
            moduleProgress.completed = true;
            moduleProgress.completedAt = new Date();

            // Award completion bonus
            const completionBonus = 50;
            moduleProgress.totalPoints += completionBonus;
            newProgress.paths[pathId].totalPoints += completionBonus;
            newProgress.totalPoints += completionBonus;

            // Unlock next module in the same path
            const allModules = Object.keys(newProgress.paths[pathId].modules).sort();
            const currentModuleIndex = allModules.indexOf(moduleId);
            const nextModuleId = allModules[currentModuleIndex + 1];

            if (nextModuleId && newProgress.paths[pathId].modules[nextModuleId]) {
              newProgress.paths[pathId].modules[nextModuleId].locked = false;
            }
          }

          // Check if path is complete
          const pathProgress = newProgress.paths[pathId];
          const allModulesCompleted = Object.values(pathProgress.modules).every(module => module.completed);

          if (allModulesCompleted && !pathProgress.completed) {
            pathProgress.completed = true;
            pathProgress.completedAt = new Date();

            // Award path completion bonus
            const pathCompletionBonus = 200;
            pathProgress.totalPoints += pathCompletionBonus;
            newProgress.totalPoints += pathCompletionBonus;

            // Unlock next paths
            if (pathId === 'foundation') {
              newProgress.paths.admin.locked = false;
            } else if (pathId === 'admin') {
              newProgress.paths.developer.locked = false;
            } else if (pathId === 'developer') {
              newProgress.paths.architect.locked = false;
            }

            // Add achievement
            newProgress.achievements.push(`${pathId}_completed`);
          }

          // Update user level based on total points
          newProgress.level = Math.floor(newProgress.totalPoints / 1000) + 1;

          console.log('New progress state after update:', newProgress);
          console.log('Saving to localStorage with key: salesforce-academy-progress');
          return { progress: newProgress };
        });
      },

      completeQuiz: (pathId: string, moduleId: string, quizId: string, score: number) => {
        // Quiz completion is handled similar to lessons
        const points = Math.floor(score * 10); // Convert percentage to points
        get().completeLesson(pathId, moduleId, quizId, points);
      },

      unlockPath: (pathId: string) => {
        set((state) => {
          const newProgress = { ...state.progress };
          if (newProgress.paths[pathId]) {
            newProgress.paths[pathId].locked = false;
          }
          return { progress: newProgress };
        });
      },

      unlockModule: (pathId: string, moduleId: string) => {
        set((state) => {
          const newProgress = { ...state.progress };
          if (newProgress.paths[pathId]?.modules[moduleId]) {
            newProgress.paths[pathId].modules[moduleId].locked = false;
          }
          return { progress: newProgress };
        });
      },

      resetProgress: () => {
        set({ progress: initialProgress });
      },

      getPathProgress: (pathId: string) => {
        return get().progress.paths[pathId];
      },

      getModuleProgress: (pathId: string, moduleId: string) => {
        return get().progress.paths[pathId]?.modules[moduleId];
      },

      getLessonProgress: (pathId: string, moduleId: string, lessonId: string) => {
        return get().progress.paths[pathId]?.modules[moduleId]?.lessons[lessonId];
      },

      isPathUnlocked: (pathId: string) => {
        return !get().progress.paths[pathId]?.locked;
      },

      isModuleUnlocked: (pathId: string, moduleId: string) => {
        const pathUnlocked = get().isPathUnlocked(pathId);
        const moduleProgress = get().getModuleProgress(pathId, moduleId);
        return pathUnlocked && (!moduleProgress || !moduleProgress.locked);
      },

      isLessonCompleted: (pathId: string, moduleId: string, lessonId: string) => {
        return get().getLessonProgress(pathId, moduleId, lessonId)?.completed || false;
      },

      getNextUnlockedModule: (pathId: string) => {
        const pathProgress = get().getPathProgress(pathId);
        if (!pathProgress || pathProgress.locked) return null;

        // Find first incomplete module
        for (const [moduleId, module] of Object.entries(pathProgress.modules)) {
          if (!module.completed && !module.locked) {
            return moduleId;
          }
        }

        return null;
      },

      initializeModulesForPath: (pathId: string, modules: Array<{id: string, lessons: Array<{id: string}>}>) => {
        set((state) => {
          const newProgress = { ...state.progress };

          // Ensure path exists
          if (!newProgress.paths[pathId]) {
            newProgress.paths[pathId] = {
              pathId,
              completed: false,
              locked: false, // TEMPORARILY UNLOCKED FOR TESTING - was: pathId !== 'foundation'
              modules: {},
              totalPoints: 0
            };
          }

          // Initialize modules if they don't exist
          modules.forEach((module) => {
            if (!newProgress.paths[pathId].modules[module.id]) {
              newProgress.paths[pathId].modules[module.id] = {
                moduleId: module.id,
                completed: false,
                locked: false, // TEMPORARILY UNLOCKED FOR TESTING - was: index > 0
                lessons: {},
                totalPoints: 0
              };
            }
          });

          return { progress: newProgress };
        });
      }
    }),
    {
      name: 'salesforce-academy-progress',
      version: 1,
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => {
        console.log('Starting to rehydrate progress from localStorage');
        return (state, error) => {
          if (error) {
            console.log('Error rehydrating storage:', error);
          } else {
            console.log('Successfully rehydrated progress:', state);
          }
        };
      },
    }
  )
);