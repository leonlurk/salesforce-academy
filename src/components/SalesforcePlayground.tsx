import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Bell,
  Settings,
  User,
  Home,
  Building2,
  Users,
  Target,
  Briefcase,
  Plus,
  Edit,
  Save,
  Grid3X3,
  List,
  Filter,
  Download,
  MoreHorizontal,
  ChevronDown,
  CheckCircle,
  Lightbulb,
  Trophy,
  Clock,
  X,
  Zap
} from 'lucide-react';

// Types
interface PlaygroundObjective {
  id: string;
  description: string;
  completed: boolean;
}

interface PlaygroundTip {
  element: string;
  message: string;
  trigger?: string;
}

interface PlaygroundData {
  module?: string;
  showNavigation?: boolean;
  showAppLauncher?: boolean;
  allowedActions?: string[];
  initialView?: string;
  objectives?: string[];
  tips?: PlaygroundTip[];
  guidedSteps?: any[];
  keyboardShortcuts?: boolean;
  navigationHints?: boolean;
  showObjectManager?: boolean;
  showSchemaBuilder?: boolean;
  enableDataModel?: boolean;
  enableRelationships?: boolean;
  customObjects?: string[];
}

interface PlaygroundProps {
  title?: string;
  description?: string;
  data?: PlaygroundData;
  onComplete?: (results: any) => void;
}

// Mock data
const mockData = {
  accounts: [
    {
      id: '001xx000003DHOqAAO',
      name: 'Acme Corporation',
      type: 'Customer - Direct',
      industry: 'Technology',
      phone: '(555) 123-4567',
      website: 'www.acme.com',
      employees: 1000,
      annualRevenue: 5000000,
      billingCity: 'San Francisco',
      billingState: 'CA',
      owner: 'John Smith',
      createdDate: '2024-01-15',
      lastModified: '2024-01-20'
    },
    {
      id: '001xx000003DHOrAAO',
      name: 'Global Industries',
      type: 'Prospect',
      industry: 'Manufacturing',
      phone: '(555) 987-6543',
      website: 'www.globalind.com',
      employees: 5000,
      annualRevenue: 15000000,
      billingCity: 'Chicago',
      billingState: 'IL',
      owner: 'Sarah Johnson',
      createdDate: '2024-01-10',
      lastModified: '2024-01-18'
    },
    {
      id: '001xx000003DHOsAAO',
      name: 'Tech Solutions Inc',
      type: 'Customer - Channel',
      industry: 'Technology',
      phone: '(555) 456-7890',
      website: 'www.techsolutions.com',
      employees: 2500,
      annualRevenue: 8500000,
      billingCity: 'Austin',
      billingState: 'TX',
      owner: 'Mike Davis',
      createdDate: '2024-01-12',
      lastModified: '2024-01-22'
    }
  ],
  contacts: [
    {
      id: '003xx000004TmiQAAS',
      firstName: 'Jane',
      lastName: 'Wilson',
      email: 'jane.wilson@acme.com',
      phone: '(555) 123-4568',
      title: 'VP of Sales',
      account: 'Acme Corporation',
      department: 'Sales',
      owner: 'John Smith',
      createdDate: '2024-01-16'
    },
    {
      id: '003xx000004TmiRAAS',
      firstName: 'Michael',
      lastName: 'Brown',
      email: 'michael.brown@globalind.com',
      phone: '(555) 987-6544',
      title: 'CTO',
      account: 'Global Industries',
      department: 'Technology',
      owner: 'Sarah Johnson',
      createdDate: '2024-01-12'
    },
    {
      id: '003xx000004TmiSAAS',
      firstName: 'Emily',
      lastName: 'Chen',
      email: 'emily.chen@techsolutions.com',
      phone: '(555) 456-7891',
      title: 'Director of Operations',
      account: 'Tech Solutions Inc',
      department: 'Operations',
      owner: 'Mike Davis',
      createdDate: '2024-01-13'
    }
  ],
  opportunities: [
    {
      id: '006xx000006DAMEAA4',
      name: 'Acme - Q1 Expansion',
      stage: 'Proposal/Price Quote',
      amount: 125000,
      probability: 75,
      closeDate: '2024-03-31',
      account: 'Acme Corporation',
      owner: 'John Smith',
      type: 'Existing Customer - Upgrade',
      createdDate: '2024-01-20'
    },
    {
      id: '006xx000006DAMFAA4',
      name: 'Global - New Implementation',
      stage: 'Prospecting',
      amount: 250000,
      probability: 25,
      closeDate: '2024-06-30',
      account: 'Global Industries',
      owner: 'Sarah Johnson',
      type: 'New Customer',
      createdDate: '2024-01-18'
    }
  ]
};

const SalesforcePlayground: React.FC<PlaygroundProps> = ({
  title,
  description,
  data = {},
  onComplete
}) => {
  // State
  const [currentApp, setCurrentApp] = useState('Sales');
  const [currentObject, setCurrentObject] = useState('Account');
  const [currentView, setCurrentView] = useState('All Accounts');
  const [isCreating, setIsCreating] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'detail'>('list');
  const [showGlobalActions, setShowGlobalActions] = useState(false);
  const [showAppLauncher, setShowAppLauncher] = useState(false);

  // Guided learning state
  const [objectives, setObjectives] = useState<PlaygroundObjective[]>([]);
  const [showObjectives, setShowObjectives] = useState(true);
  const [activeTip, setActiveTip] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [startTime] = useState(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);
  const [actionCount, setActionCount] = useState(0);
  const [achievements, setAchievements] = useState<string[]>([]);

  // Initialize objectives from data
  useEffect(() => {
    if (data.objectives && data.objectives.length > 0) {
      const initialObjectives = data.objectives.map((obj, index) => ({
        id: `obj-${index}`,
        description: obj,
        completed: false
      }));
      setObjectives(initialObjectives);
    }
  }, [data.objectives]);

  // Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime]);

  // Track actions and award points
  const trackAction = (_action: string, points: number = 10) => {
    setActionCount(prev => prev + 1);
    setScore(prev => prev + points);

    // Check for achievements
    if (actionCount === 5 && !achievements.includes('explorer')) {
      setAchievements(prev => [...prev, 'explorer']);
    }
    if (actionCount === 10 && !achievements.includes('navigator')) {
      setAchievements(prev => [...prev, 'navigator']);
    }
  };

  // Complete objective
  const completeObjective = (objectiveId: string) => {
    setObjectives(prev => prev.map(obj =>
      obj.id === objectiveId ? { ...obj, completed: true } : obj
    ));
    trackAction('objective_completed', 50);
  };

  // Check if all objectives completed
  useEffect(() => {
    if (objectives.length > 0 && objectives.every(obj => obj.completed)) {
      if (onComplete) {
        onComplete({
          completed: true,
          score,
          time: elapsedTime,
          actions: actionCount,
          achievements
        });
      }
    }
  }, [objectives, onComplete, score, elapsedTime, actionCount, achievements]);

  // Get current data based on object
  const getCurrentData = () => {
    switch (currentObject) {
      case 'Account':
        return mockData.accounts;
      case 'Contact':
        return mockData.contacts;
      case 'Opportunity':
        return mockData.opportunities;
      default:
        return [];
    }
  };

  const currentData = getCurrentData();
  const filteredData = currentData.filter((item: any) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handlers
  const handleTabClick = (object: string) => {
    setCurrentObject(object);
    setViewMode('list');
    setSelectedRecord(null);
    setCurrentView(`All ${object}s`);
    trackAction('tab_click', 5);

    // Check objectives
    if (object === 'Account') {
      const accountObj = objectives.find(o => o.description.toLowerCase().includes('account'));
      if (accountObj && !accountObj.completed) {
        completeObjective(accountObj.id);
      }
    }
  };

  const handleCreateRecord = () => {
    setIsCreating(true);
    setSelectedRecord(null);
    setViewMode('detail');
    trackAction('create_record', 20);
  };

  const handleEditRecord = (record: any) => {
    setSelectedRecord(record);
    setViewMode('detail');
    trackAction('view_record', 10);
  };

  const handleSaveRecord = () => {
    setIsCreating(false);
    setSelectedRecord(null);
    setViewMode('list');
    trackAction('save_record', 30);

    // Check for "create" objectives
    const createObj = objectives.find(o =>
      o.description.toLowerCase().includes('create') &&
      !o.completed
    );
    if (createObj) {
      completeObjective(createObj.id);
    }
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.length > 0) {
      trackAction('search', 15);

      // Check for search objectives
      const searchObj = objectives.find(o =>
        o.description.toLowerCase().includes('search') &&
        !o.completed
      );
      if (searchObj) {
        completeObjective(searchObj.id);
      }
    }
  };

  const handleViewChange = (view: string) => {
    setCurrentView(view);
    trackAction('change_view', 5);

    // Check for view objectives
    const viewObj = objectives.find(o =>
      o.description.toLowerCase().includes('view') &&
      !o.completed
    );
    if (viewObj) {
      completeObjective(viewObj.id);
    }
  };

  // Format time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Render progress panel
  const renderProgressPanel = () => (
    <AnimatePresence>
      {showObjectives && objectives.length > 0 && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          className="fixed right-4 top-20 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 z-50"
        >
          <div className="p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {title || 'Objectives'}
                </h3>
              </div>
              <button
                onClick={() => setShowObjectives(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {description && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {description}
              </p>
            )}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded p-2 text-center">
                <div className="text-lg font-bold text-blue-600">{score}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Points</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded p-2 text-center">
                <div className="text-lg font-bold text-green-600">
                  <Clock className="w-4 h-4 inline" /> {formatTime(elapsedTime)}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Time</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded p-2 text-center">
                <div className="text-lg font-bold text-purple-600">{actionCount}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Actions</div>
              </div>
            </div>

            {/* Objectives list */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                <Trophy className="w-4 h-4 mr-1" />
                Progress ({objectives.filter(o => o.completed).length}/{objectives.length})
              </h4>
              {objectives.map((obj) => (
                <div
                  key={obj.id}
                  className={`flex items-start space-x-2 p-2 rounded ${
                    obj.completed
                      ? 'bg-green-50 dark:bg-green-900/20'
                      : 'bg-gray-50 dark:bg-gray-700'
                  }`}
                >
                  <CheckCircle
                    className={`w-5 h-5 flex-shrink-0 ${
                      obj.completed
                        ? 'text-green-600'
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                  />
                  <span className={`text-sm ${
                    obj.completed
                      ? 'text-gray-600 dark:text-gray-400 line-through'
                      : 'text-gray-900 dark:text-white'
                  }`}>
                    {obj.description}
                  </span>
                </div>
              ))}
            </div>

            {/* Achievements */}
            {achievements.length > 0 && (
              <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                <h4 className="text-sm font-medium text-yellow-800 dark:text-yellow-200 mb-2">
                  🏆 Achievements Unlocked
                </h4>
                <div className="flex flex-wrap gap-2">
                  {achievements.map(achievement => (
                    <span
                      key={achievement}
                      className="px-2 py-1 bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-100 text-xs rounded"
                    >
                      {achievement === 'explorer' && '🔍 Explorer'}
                      {achievement === 'navigator' && '🧭 Navigator'}
                      {achievement === 'speedster' && '⚡ Speedster'}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Render tip
  const renderTip = () => (
    <AnimatePresence>
      {activeTip && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 max-w-md bg-blue-600 text-white rounded-lg shadow-2xl p-4 z-50"
        >
          <div className="flex items-start space-x-3">
            <Lightbulb className="w-6 h-6 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm">{activeTip}</p>
            </div>
            <button
              onClick={() => setActiveTip(null)}
              className="text-white hover:text-blue-100"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Render toggle button when panel is hidden
  const renderToggleButton = () => (
    <AnimatePresence>
      {!showObjectives && objectives.length > 0 && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={() => setShowObjectives(true)}
          className="fixed right-4 top-20 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 z-50"
        >
          <Target className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );

  // Render header
  const renderHeader = () => (
    <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 py-2">
      {/* Global Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">SF</span>
          </div>
          {data.showAppLauncher !== false && (
            <button
              onClick={() => {
                setShowAppLauncher(!showAppLauncher);
                if (!showAppLauncher) {
                  trackAction('app_launcher_click', 10);
                  setActiveTip('The App Launcher is your gateway to all Salesforce apps!');

                  // Check for app launcher objectives
                  const appObj = objectives.find(o =>
                    o.description.toLowerCase().includes('app launcher') &&
                    !o.completed
                  );
                  if (appObj) {
                    completeObjective(appObj.id);
                  }
                }
              }}
              className="flex items-center space-x-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded px-2 py-1"
            >
              <Grid3X3 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <span className="text-sm text-gray-600 dark:text-gray-400">App Launcher</span>
            </button>
          )}
        </div>

        {/* Global Search */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search Salesforce..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              onFocus={() => setActiveTip('Use global search to find anything in Salesforce instantly!')}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400 cursor-pointer hover:text-gray-800" />
          <Settings className="w-5 h-5 text-gray-600 dark:text-gray-400 cursor-pointer hover:text-gray-800" />
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      {/* App Launcher Modal */}
      <AnimatePresence>
        {showAppLauncher && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-12 left-4 w-96 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 z-50 p-4"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">App Launcher</h3>
              <button onClick={() => setShowAppLauncher(false)}>
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>
            <input
              type="text"
              placeholder="Search apps..."
              className="w-full mb-4 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded"
            />
            <div className="grid grid-cols-2 gap-2">
              {['Sales', 'Service', 'Marketing', 'Custom App'].map(app => (
                <button
                  key={app}
                  onClick={() => {
                    setCurrentApp(app);
                    setShowAppLauncher(false);
                    trackAction('switch_app', 15);
                  }}
                  className={`p-3 text-left rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    currentApp === app ? 'bg-blue-50 dark:bg-blue-900' : ''
                  }`}
                >
                  <div className="font-medium text-gray-900 dark:text-white">{app}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Application</div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* App Navigation */}
      {data.showNavigation !== false && (
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <select
              value={currentApp}
              onChange={(e) => {
                setCurrentApp(e.target.value);
                trackAction('change_app', 10);
              }}
              className="bg-transparent text-lg font-semibold text-gray-900 dark:text-white border-none focus:ring-0 cursor-pointer"
            >
              <option value="Sales">Sales</option>
              <option value="Service">Service</option>
              <option value="Marketing">Marketing</option>
              <option value="Custom">Custom App</option>
            </select>

            <nav className="flex items-center space-x-4">
              <button
                onClick={() => handleTabClick('Home')}
                className={`flex items-center space-x-1 pb-1 ${
                  currentObject === 'Home'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-600'
                }`}
              >
                <Home className="w-4 h-4" />
                <span className="font-medium">Home</span>
              </button>
              <button
                onClick={() => handleTabClick('Account')}
                onMouseEnter={() => setActiveTip('Navigate to Accounts to see all your company records')}
                className={`flex items-center space-x-1 pb-1 ${
                  currentObject === 'Account'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-600'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Accounts</span>
              </button>
              <button
                onClick={() => handleTabClick('Contact')}
                className={`flex items-center space-x-1 pb-1 ${
                  currentObject === 'Contact'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-600'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Contacts</span>
              </button>
              <button
                onClick={() => handleTabClick('Opportunity')}
                className={`flex items-center space-x-1 pb-1 ${
                  currentObject === 'Opportunity'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-600'
                }`}
              >
                <Target className="w-4 h-4" />
                <span>Opportunities</span>
              </button>
              <button
                onClick={() => handleTabClick('Case')}
                className={`flex items-center space-x-1 pb-1 ${
                  currentObject === 'Case'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-600'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>Cases</span>
              </button>
            </nav>
          </div>

          <div className="relative">
            <button
              onClick={() => setShowGlobalActions(!showGlobalActions)}
              className="flex items-center space-x-1 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
            >
              <Plus className="w-4 h-4" />
              <span>New</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {showGlobalActions && (
              <div className="absolute right-0 top-full mt-1 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10">
                <div className="py-1">
                  <div className="px-3 py-2 text-xs text-gray-500 dark:text-gray-400 uppercase">Quick Actions</div>
                  <button
                    onClick={() => {
                      handleTabClick('Account');
                      handleCreateRecord();
                      setShowGlobalActions(false);
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2"
                  >
                    <Building2 className="w-4 h-4" />
                    <span>Account</span>
                  </button>
                  <button
                    onClick={() => {
                      handleTabClick('Contact');
                      handleCreateRecord();
                      setShowGlobalActions(false);
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2"
                  >
                    <Users className="w-4 h-4" />
                    <span>Contact</span>
                  </button>
                  <button
                    onClick={() => {
                      handleTabClick('Opportunity');
                      handleCreateRecord();
                      setShowGlobalActions(false);
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2"
                  >
                    <Target className="w-4 h-4" />
                    <span>Opportunity</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );

  // Render object header
  const renderObjectHeader = () => {
    if (currentObject === 'Home') return null;

    return (
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {currentObject === 'Account' && <Building2 className="w-6 h-6 text-gray-600 dark:text-gray-400" />}
              {currentObject === 'Contact' && <Users className="w-6 h-6 text-gray-600 dark:text-gray-400" />}
              {currentObject === 'Opportunity' && <Target className="w-6 h-6 text-gray-600 dark:text-gray-400" />}
              {currentObject === 'Case' && <Briefcase className="w-6 h-6 text-gray-600 dark:text-gray-400" />}
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {currentObject}s
              </h1>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {filteredData.length} items
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <select
              value={currentView}
              onChange={(e) => handleViewChange(e.target.value)}
              onFocus={() => setActiveTip('List views help you filter and organize your data')}
              className="border border-gray-300 dark:border-gray-600 rounded px-3 py-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            >
              <option value={`All ${currentObject}s`}>All {currentObject}s</option>
              <option value={`My ${currentObject}s`}>My {currentObject}s</option>
              <option value="Recently Viewed">Recently Viewed</option>
            </select>

            <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded">
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
              >
                <List className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('detail')}
                className={`p-2 ${viewMode === 'detail' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'} border-l border-gray-300 dark:border-gray-600`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => {
                handleCreateRecord();
                setActiveTip('Create a new record by filling out the form');
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>New</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Render list view
  const renderListView = () => {
    if (currentObject === 'Home') {
      return (
        <div className="bg-white dark:bg-gray-900 p-8">
          <div className="max-w-4xl mx-auto text-center">
            <Zap className="w-16 h-16 mx-auto mb-4 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome to Salesforce Playground
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Start exploring by clicking on a tab above to view Accounts, Contacts, or Opportunities
            </p>
            <div className="grid grid-cols-3 gap-6">
              <button
                onClick={() => handleTabClick('Account')}
                className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                <Building2 className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <div className="font-semibold text-gray-900 dark:text-white">Accounts</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{mockData.accounts.length} records</div>
              </button>
              <button
                onClick={() => handleTabClick('Contact')}
                className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                <Users className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <div className="font-semibold text-gray-900 dark:text-white">Contacts</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{mockData.contacts.length} records</div>
              </button>
              <button
                onClick={() => handleTabClick('Opportunity')}
                className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                <Target className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <div className="font-semibold text-gray-900 dark:text-white">Opportunities</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{mockData.opportunities.length} records</div>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-white dark:bg-gray-900">
        {/* Table Actions */}
        <div className="px-6 py-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Filter className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Filter</span>
            <span className="text-sm text-gray-400">|</span>
            <Download className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Export</span>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {filteredData.length} items • Updated a few seconds ago
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  <input type="checkbox" className="rounded" />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {currentObject} Name
                </th>
                {currentObject === 'Account' && (
                  <>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Industry</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Owner</th>
                  </>
                )}
                {currentObject === 'Contact' && (
                  <>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Account</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Owner</th>
                  </>
                )}
                {currentObject === 'Opportunity' && (
                  <>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Stage</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Close Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Account</th>
                  </>
                )}
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredData.map((item: any) => (
                <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" className="rounded" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleEditRecord(item)}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      {currentObject === 'Account' ? item.name :
                       currentObject === 'Contact' ? `${item.firstName} ${item.lastName}` :
                       item.name}
                    </button>
                  </td>
                  {currentObject === 'Account' && (
                    <>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">{item.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">{item.industry}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">{item.phone}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">{item.owner}</td>
                    </>
                  )}
                  {currentObject === 'Contact' && (
                    <>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">{item.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">{item.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">{item.account}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">{item.owner}</td>
                    </>
                  )}
                  {currentObject === 'Opportunity' && (
                    <>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">{item.stage}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">${item.amount.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">{item.closeDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">{item.account}</td>
                    </>
                  )}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                    <button
                      onClick={() => handleEditRecord(item)}
                      className="text-blue-600 hover:text-blue-800 mr-3"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-800">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  // Render detail view (continued in next part due to length)
  const renderDetailView = () => (
    <div className="bg-white dark:bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Detail Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => {
                setViewMode('list');
                setSelectedRecord(null);
                setIsCreating(false);
              }}
              className="text-blue-600 hover:text-blue-800"
            >
              ← Back to List
            </button>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {isCreating ? `New ${currentObject}` :
               selectedRecord ?
                 (currentObject === 'Account' ? selectedRecord.name :
                  currentObject === 'Contact' ? `${selectedRecord.firstName} ${selectedRecord.lastName}` :
                  selectedRecord.name) :
               `${currentObject} Details`}
            </h2>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleSaveRecord}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center space-x-2"
            >
              <Save className="w-4 h-4" />
              <span>Save</span>
            </button>
            <button
              onClick={() => {
                setViewMode('list');
                setSelectedRecord(null);
                setIsCreating(false);
              }}
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentObject === 'Account' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Account Name *
                </label>
                <input
                  type="text"
                  defaultValue={selectedRecord?.name || ''}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="Enter account name..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Account Type
                </label>
                <select
                  defaultValue={selectedRecord?.type || ''}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <option value="">--None--</option>
                  <option value="Prospect">Prospect</option>
                  <option value="Customer - Direct">Customer - Direct</option>
                  <option value="Customer - Channel">Customer - Channel</option>
                  <option value="Channel Partner / Reseller">Channel Partner / Reseller</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Industry
                </label>
                <select
                  defaultValue={selectedRecord?.industry || ''}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <option value="">--None--</option>
                  <option value="Technology">Technology</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Financial Services">Financial Services</option>
                  <option value="Retail">Retail</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  defaultValue={selectedRecord?.phone || ''}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Website
                </label>
                <input
                  type="url"
                  defaultValue={selectedRecord?.website || ''}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="www.example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Employees
                </label>
                <input
                  type="number"
                  defaultValue={selectedRecord?.employees || ''}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="1000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Annual Revenue
                </label>
                <input
                  type="number"
                  defaultValue={selectedRecord?.annualRevenue || ''}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="5000000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Billing City
                </label>
                <input
                  type="text"
                  defaultValue={selectedRecord?.billingCity || ''}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="San Francisco"
                />
              </div>
            </>
          )}

          {currentObject === 'Contact' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  defaultValue={selectedRecord?.firstName || ''}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  defaultValue={selectedRecord?.lastName || ''}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue={selectedRecord?.email || ''}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="john.smith@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  defaultValue={selectedRecord?.phone || ''}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  defaultValue={selectedRecord?.title || ''}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="VP of Sales"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Account Name
                </label>
                <select
                  defaultValue={selectedRecord?.account || ''}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <option value="">--None--</option>
                  {mockData.accounts.map(account => (
                    <option key={account.id} value={account.name}>{account.name}</option>
                  ))}
                </select>
              </div>
            </>
          )}

          {currentObject === 'Opportunity' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Opportunity Name *
                </label>
                <input
                  type="text"
                  defaultValue={selectedRecord?.name || ''}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="Enter opportunity name..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Account Name
                </label>
                <select
                  defaultValue={selectedRecord?.account || ''}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <option value="">--None--</option>
                  {mockData.accounts.map(account => (
                    <option key={account.id} value={account.name}>{account.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Amount
                </label>
                <input
                  type="number"
                  defaultValue={selectedRecord?.amount || ''}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="125000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Close Date *
                </label>
                <input
                  type="date"
                  defaultValue={selectedRecord?.closeDate || ''}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Stage *
                </label>
                <select
                  defaultValue={selectedRecord?.stage || ''}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <option value="">--None--</option>
                  <option value="Prospecting">Prospecting</option>
                  <option value="Qualification">Qualification</option>
                  <option value="Needs Analysis">Needs Analysis</option>
                  <option value="Value Proposition">Value Proposition</option>
                  <option value="Proposal/Price Quote">Proposal/Price Quote</option>
                  <option value="Negotiation/Review">Negotiation/Review</option>
                  <option value="Closed Won">Closed Won</option>
                  <option value="Closed Lost">Closed Lost</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Probability (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  defaultValue={selectedRecord?.probability || ''}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="75"
                />
              </div>
            </>
          )}
        </div>

        {/* Related Lists */}
        {selectedRecord && !isCreating && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Related
            </h3>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {currentObject === 'Account' ? 'Contacts (2)' : 'Activities (0)'}
                  </span>
                  <button className="text-blue-600 hover:text-blue-800 text-sm">
                    View All
                  </button>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {currentObject === 'Account' ?
                    'Related contacts will appear here.' :
                    'No recent activities to show.'}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // Main render
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-screen flex flex-col"
      >
        {renderHeader()}
        {renderObjectHeader()}

        <div className="flex-1 overflow-auto">
          <AnimatePresence mode="wait">
            {viewMode === 'list' ? (
              <motion.div
                key="list"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                {renderListView()}
              </motion.div>
            ) : (
              <motion.div
                key="detail"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                {renderDetailView()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Floating UI Elements */}
      {renderProgressPanel()}
      {renderToggleButton()}
      {renderTip()}
    </div>
  );
};

export default SalesforcePlayground;