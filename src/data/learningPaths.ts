import type { LearningPath } from '../types';
import { simplifiedLearningPaths } from './simplifiedCurriculum';

export const learningPaths: LearningPath[] = simplifiedLearningPaths.length > 0 ? simplifiedLearningPaths : [
  {
    id: 'foundation',
    title: 'Salesforce Foundation',
    description: 'Master the fundamentals of Salesforce platform. Perfect for complete beginners.',
    level: 'Foundation',
    duration: '4-6 weeks',
    prerequisites: [],
    certification: 'Platform Foundations',
    color: 'bg-gradient-to-br from-green-400 to-green-600',
    icon: '🌱',
    modules: [
      {
        id: 'sf-basics',
        title: 'Salesforce Basics',
        description: 'Introduction to Salesforce ecosystem, navigation, and core concepts',
        duration: '1 week',
        completed: false,
        locked: false,
        order: 1,
        lessons: [
          {
            id: 'what-is-salesforce',
            title: 'What is Salesforce?',
            type: 'content',
            duration: '15 min',
            completed: false,
            points: 100,
            order: 1,
            content: {
              text: `Salesforce is the world's #1 customer relationship management (CRM) platform.

              ## Key Concepts:
              - **Cloud Computing**: Everything runs in the cloud
              - **Multi-tenant Architecture**: Shared infrastructure, isolated data
              - **Declarative Development**: Build without code using clicks
              - **Programmatic Development**: Extend with Apex and Lightning

              ## Why Salesforce?
              - Industry leader in CRM
              - Highly customizable and scalable
              - Strong ecosystem and community
              - Excellent career opportunities`,
              resources: [
                {
                  title: 'Official Salesforce Trailhead',
                  type: 'trailhead',
                  url: 'https://trailhead.salesforce.com',
                  description: 'Free learning platform by Salesforce'
                }
              ]
            }
          },
          {
            id: 'navigation',
            title: 'Navigating Salesforce',
            type: 'interactive',
            duration: '20 min',
            completed: false,
            points: 150,
            order: 2,
            content: {
              text: 'Learn to navigate the Salesforce interface efficiently',
              interactive: [
                {
                  type: 'click-sequence',
                  data: {
                    steps: [
                      'Click the App Launcher',
                      'Search for Sales',
                      'Click on Accounts tab',
                      'Create New Account'
                    ]
                  },
                  validation: {
                    correctSequence: [1, 2, 3, 4]
                  },
                  feedback: 'Great! You\'ve learned the basic navigation flow.'
                }
              ]
            }
          }
        ],
        quiz: {
          id: 'sf-basics-quiz',
          title: 'Salesforce Basics Quiz',
          questions: [
            {
              id: 'q1',
              type: 'multiple-choice',
              question: 'What type of architecture does Salesforce use?',
              options: ['Single-tenant', 'Multi-tenant', 'Hybrid', 'On-premise'],
              correctAnswer: 'Multi-tenant',
              explanation: 'Salesforce uses multi-tenant architecture where multiple customers share the same infrastructure but data is isolated.',
              points: 10,
              difficulty: 'easy',
              category: 'fundamentals'
            }
          ],
          passingScore: 80,
          attempts: 0,
          maxAttempts: 3
        }
      },
      {
        id: 'data-model',
        title: 'Understanding Data Model',
        description: 'Objects, fields, and relationships in Salesforce',
        duration: '1 week',
        completed: false,
        locked: true,
        order: 2,
        lessons: [],
        quiz: {
          id: 'data-model-quiz',
          title: 'Data Model Quiz',
          questions: [],
          passingScore: 80,
          attempts: 0,
          maxAttempts: 3
        }
      }
    ]
  },
  {
    id: 'admin',
    title: 'Salesforce Administrator',
    description: 'Become a certified Salesforce Administrator with comprehensive training.',
    level: 'Administrator',
    duration: '8-12 weeks',
    prerequisites: ['foundation'],
    certification: 'Salesforce Certified Administrator',
    color: 'bg-gradient-to-br from-blue-400 to-blue-600',
    icon: '⚙️',
    modules: [
      {
        id: 'user-management',
        title: 'User Management & Security',
        description: 'Managing users, profiles, permission sets, and security',
        duration: '2 weeks',
        completed: false,
        locked: false,
        order: 1,
        lessons: [],
        quiz: {
          id: 'user-mgmt-quiz',
          title: 'User Management Quiz',
          questions: [],
          passingScore: 85,
          attempts: 0,
          maxAttempts: 3
        }
      },
      {
        id: 'automation',
        title: 'Process Automation',
        description: 'Workflow rules, Process Builder, and Flow',
        duration: '3 weeks',
        completed: false,
        locked: true,
        order: 2,
        lessons: [],
        quiz: {
          id: 'automation-quiz',
          title: 'Automation Quiz',
          questions: [],
          passingScore: 85,
          attempts: 0,
          maxAttempts: 3
        }
      }
    ]
  },
  {
    id: 'developer',
    title: 'Salesforce Developer',
    description: 'Master Apex, Lightning Web Components, and advanced development.',
    level: 'Developer',
    duration: '12-16 weeks',
    prerequisites: ['foundation', 'admin'],
    certification: 'Platform Developer I & II',
    color: 'bg-gradient-to-br from-purple-400 to-purple-600',
    icon: '💻',
    modules: [
      {
        id: 'apex-basics',
        title: 'Apex Programming',
        description: 'Master Salesforce\'s programming language',
        duration: '4 weeks',
        completed: false,
        locked: false,
        order: 1,
        lessons: [],
        quiz: {
          id: 'apex-quiz',
          title: 'Apex Programming Quiz',
          questions: [],
          passingScore: 85,
          attempts: 0,
          maxAttempts: 3
        }
      },
      {
        id: 'lwc',
        title: 'Lightning Web Components',
        description: 'Build modern user interfaces with LWC',
        duration: '4 weeks',
        completed: false,
        locked: true,
        order: 2,
        lessons: [],
        quiz: {
          id: 'lwc-quiz',
          title: 'Lightning Web Components Quiz',
          questions: [],
          passingScore: 85,
          attempts: 0,
          maxAttempts: 3
        }
      }
    ]
  },
  {
    id: 'architect',
    title: 'Salesforce Architect',
    description: 'Design and architect enterprise Salesforce solutions.',
    level: 'Architect',
    duration: '16-20 weeks',
    prerequisites: ['foundation', 'admin', 'developer'],
    certification: 'Technical Architect',
    color: 'bg-gradient-to-br from-red-400 to-red-600',
    icon: '🏗️',
    modules: [
      {
        id: 'solution-design',
        title: 'Solution Design',
        description: 'Designing scalable Salesforce solutions',
        duration: '4 weeks',
        completed: false,
        locked: false,
        order: 1,
        lessons: [],
        quiz: {
          id: 'solution-design-quiz',
          title: 'Solution Design Quiz',
          questions: [],
          passingScore: 90,
          attempts: 0,
          maxAttempts: 3
        }
      },
      {
        id: 'integration',
        title: 'Integration Patterns',
        description: 'Integrate Salesforce with external systems',
        duration: '4 weeks',
        completed: false,
        locked: true,
        order: 2,
        lessons: [],
        quiz: {
          id: 'integration-quiz',
          title: 'Integration Quiz',
          questions: [],
          passingScore: 90,
          attempts: 0,
          maxAttempts: 3
        }
      }
    ]
  }
];