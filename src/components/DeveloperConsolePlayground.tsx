import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Database,
  FileText,
  Settings,
  Terminal,
  CheckCircle,
  X,
  Trophy,
  Clock,
  Target,
  Lightbulb,
  Copy,
  Zap
} from 'lucide-react';

interface Mission {
  id: string;
  title: string;
  difficulty: string;
  description: string;
  steps: Array<{
    instruction: string;
    validation: any;
    hint: string;
    example?: string;
  }>;
  preloadedCode?: string;
  preloadedQuery?: string;
  sampleData?: any[];
  solution?: string;
  rewards: {
    points: number;
    badge?: string;
    message: string;
  };
}

interface DeveloperConsoleData {
  mode: string;
  missions: Mission[];
  consoleFeatures: {
    tabs: string[];
    enableSyntaxHighlighting: boolean;
    enableAutoComplete: boolean;
    enableErrorHighlighting: boolean;
    enableLineNumbers: boolean;
  };
  freePlay: {
    enabled: boolean;
    description: string;
    features: string[];
    safetyNet: {
      enabled: boolean;
      message: string;
    };
  };
  helpSystem: {
    enabled: boolean;
    quickReference: Record<string, string>;
    commonErrors: Array<{
      error: string;
      cause: string;
      fix: string;
    }>;
  };
  completionCriteria: {
    minimumMissions: number;
    minimumScore: number;
    allowRetries: boolean;
  };
  rewards: {
    totalPoints: number;
    badge: string;
    message: string;
  };
}

interface DeveloperConsolePlaygroundProps {
  title: string;
  description: string;
  data: DeveloperConsoleData;
  onComplete?: (results: any) => void;
}

const DeveloperConsolePlayground: React.FC<DeveloperConsolePlaygroundProps> = ({
  description,
  data,
  onComplete
}) => {
  // State
  const [activeTab, setActiveTab] = useState('execute-anonymous');
  const [currentMission, setCurrentMission] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [code, setCode] = useState('');
  const [query, setQuery] = useState('');
  const [logs, setLogs] = useState<string[]>([]);
  const [queryResults, setQueryResults] = useState<any[]>([]);
  const [score, setScore] = useState(0);
  const [completedMissions, setCompletedMissions] = useState<string[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [executionHistory, setExecutionHistory] = useState<string[]>([]);
  const [startTime] = useState(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);

  const mission = data.missions[currentMission];

  // Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime]);

  // Initialize mission code
  useEffect(() => {
    if (mission) {
      if (mission.preloadedCode) {
        setCode(mission.preloadedCode);
      }
      if (mission.preloadedQuery) {
        setQuery(mission.preloadedQuery);
      }
    }
  }, [mission]);

  // Execute code
  const executeCode = () => {
    if (!code.trim()) return;

    const newLogs = [...logs];
    
    // Simulate code execution
    if (code.includes('System.debug')) {
      const debugMatches = code.match(/System\.debug\(['"`]([^'"`]+)['"`]\)/g);
      debugMatches?.forEach(match => {
        const message = match.match(/['"`]([^'"`]+)['"`]/)?.[1];
        if (message) {
          newLogs.push(`DEBUG: ${message}`);
        }
      });
    }

    if (code.includes('Date.today()')) {
      newLogs.push(`DEBUG: Today is: ${new Date().toISOString().split('T')[0]}`);
    }

    if (code.includes('new Contact')) {
      newLogs.push('DEBUG: Contact created successfully');
      newLogs.push('DEBUG: Contact: {FirstName=John, LastName=Doe, Id=003xx000004TmiXXX}');
    }

    if (code.includes('new Task')) {
      newLogs.push('DEBUG: Task created successfully');
    }

    setLogs(newLogs);
    setExecutionHistory(prev => [...prev, code]);
    
    // Check mission validation
    validateStep();
  };

  // Execute query
  const executeQuery = () => {
    if (!query.trim()) return;

    // Simulate SOQL execution
    let results: any[] = [];
    
    if (query.toLowerCase().includes('account')) {
      results = [
        { Id: '001xxx', Name: 'Acme Corp', CreatedDate: '2024-01-15' },
        { Id: '001yyy', Name: 'Global Industries', CreatedDate: '2024-02-20' },
        { Id: '001zzz', Name: 'Tech Solutions', CreatedDate: '2024-03-10' }
      ];
    } else if (query.toLowerCase().includes('contact')) {
      results = [
        { Id: '003xxx', Name: 'John Smith', Email: 'john@example.com' },
        { Id: '003yyy', Name: 'Jane Doe', Email: 'jane@example.com' }
      ];
    }

    setQueryResults(results);
    setLogs(prev => [...prev, `QUERY: Executed successfully. ${results.length} rows returned.`]);
    
    validateStep();
  };

  // Validate current step
  const validateStep = () => {
    if (!mission || !mission.steps[currentStep]) return;

    const step = mission.steps[currentStep];
    const validation = step.validation;
    let isValid = false;

    // Check different validation types
    if (validation.checkTab && activeTab === validation.checkTab) {
      isValid = true;
    } else if (validation.checkCode && code.includes(validation.checkCode)) {
      isValid = true;
    } else if (validation.checkAction === 'execute' && executionHistory.length > 0) {
      isValid = true;
    } else if (validation.checkAction === 'query-execute' && queryResults.length > 0) {
      isValid = true;
    } else if (validation.checkLogs && logs.length > 0) {
      isValid = true;
    } else if (validation.checkLogContent && logs.some(log => log.includes(validation.checkLogContent))) {
      isValid = true;
    }

    if (isValid) {
      // Move to next step or complete mission
      if (currentStep < mission.steps.length - 1) {
        setCurrentStep(prev => prev + 1);
        setScore(prev => prev + 25);
      } else {
        completeMission();
      }
    }
  };

  // Complete current mission
  const completeMission = () => {
    const missionId = mission.id;
    if (!completedMissions.includes(missionId)) {
      setCompletedMissions(prev => [...prev, missionId]);
      setScore(prev => prev + mission.rewards.points);
      
      // Move to next mission or complete playground
      if (currentMission < data.missions.length - 1) {
        setCurrentMission(prev => prev + 1);
        setCurrentStep(0);
        setCode('');
        setQuery('');
        setLogs([]);
        setQueryResults([]);
      } else {
        // All missions completed
        if (onComplete) {
          onComplete({
            completed: true,
            score,
            time: elapsedTime,
            missionsCompleted: completedMissions.length,
            totalMissions: data.missions.length
          });
        }
      }
    }
  };

  // Format time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Render console tabs
  const renderTabs = () => (
    <div className="flex border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
      {data.consoleFeatures.tabs.map(tab => (
        <button
          key={tab}
          onClick={() => {
            setActiveTab(tab);
            validateStep();
          }}
          className={`px-4 py-2 text-sm font-medium border-b-2 ${
            activeTab === tab
              ? 'border-blue-500 text-blue-600 bg-white dark:bg-gray-900'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          {tab === 'execute-anonymous' && <><Terminal className="w-4 h-4 inline mr-2" />Execute Anonymous</>}
          {tab === 'query-editor' && <><Database className="w-4 h-4 inline mr-2" />Query Editor</>}
          {tab === 'logs' && <><FileText className="w-4 h-4 inline mr-2" />Logs</>}
          {tab === 'tests' && <><CheckCircle className="w-4 h-4 inline mr-2" />Tests</>}
          {tab === 'checkpoints' && <><Target className="w-4 h-4 inline mr-2" />Checkpoints</>}
        </button>
      ))}
    </div>
  );

  // Render execute anonymous tab
  const renderExecuteAnonymous = () => (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Apex Code
          </label>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-64 p-3 border border-gray-300 dark:border-gray-600 rounded-lg font-mono text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            placeholder="// Enter your Apex code here..."
            style={{ fontFamily: 'Monaco, Consolas, "Courier New", monospace' }}
          />
        </div>
        <div className="flex space-x-2">
          <button
            onClick={executeCode}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center space-x-2"
          >
            <Play className="w-4 h-4" />
            <span>Execute</span>
          </button>
          <button
            onClick={() => setCode('')}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Clear
          </button>
          {mission?.solution && (
            <button
              onClick={() => setCode(mission.solution || '')}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center space-x-2"
            >
              <Copy className="w-4 h-4" />
              <span>Show Solution</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );

  // Render query editor tab
  const renderQueryEditor = () => (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            SOQL Query
          </label>
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-32 p-3 border border-gray-300 dark:border-gray-600 rounded-lg font-mono text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            placeholder="-- Enter your SOQL query here..."
            style={{ fontFamily: 'Monaco, Consolas, "Courier New", monospace' }}
          />
        </div>
        <div className="flex space-x-2 mb-4">
          <button
            onClick={executeQuery}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center space-x-2"
          >
            <Play className="w-4 h-4" />
            <span>Execute</span>
          </button>
          <button
            onClick={() => setQuery('')}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Clear
          </button>
        </div>
        
        {/* Query Results */}
        {queryResults.length > 0 && (
          <div className="border border-gray-300 dark:border-gray-600 rounded-lg">
            <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2 border-b border-gray-300 dark:border-gray-600">
              <h3 className="font-medium text-gray-900 dark:text-white">
                Query Results ({queryResults.length} records)
              </h3>
            </div>
            <div className="overflow-auto max-h-64">
              <table className="w-full text-sm">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    {queryResults[0] && Object.keys(queryResults[0]).map(key => (
                      <th key={key} className="px-4 py-2 text-left font-medium text-gray-700 dark:text-gray-300">
                        {key}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {queryResults.map((row, index) => (
                    <tr key={index} className="border-t border-gray-200 dark:border-gray-600">
                      {Object.values(row).map((value: any, i) => (
                        <td key={i} className="px-4 py-2 text-gray-900 dark:text-white">
                          {String(value)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // Render logs tab
  const renderLogs = () => (
    <div className="p-4">
      <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm h-96 overflow-auto">
        {logs.length === 0 ? (
          <div className="text-gray-500">No logs yet. Execute some code to see output here.</div>
        ) : (
          logs.map((log, index) => (
            <div key={index} className="mb-1">
              <span className="text-gray-500">[{new Date().toLocaleTimeString()}]</span> {log}
            </div>
          ))
        )}
      </div>
    </div>
  );

  // Render mission panel
  const renderMissionPanel = () => (
    <div className="w-80 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 flex flex-col">
      {/* Mission Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {mission?.title}
          </h3>
          <span className={`px-2 py-1 rounded text-xs ${
            mission?.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
            mission?.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {mission?.difficulty}
          </span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {mission?.description}
        </p>
        
        {/* Progress Stats */}
        <div className="grid grid-cols-3 gap-2 mt-4">
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
            <div className="text-lg font-bold text-purple-600">{completedMissions.length}</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Missions</div>
          </div>
        </div>
      </div>

      {/* Current Step */}
      <div className="flex-1 p-4 overflow-auto">
        {mission && mission.steps[currentStep] && (
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                Step {currentStep + 1} of {mission.steps.length}
              </h4>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                {mission.steps[currentStep].instruction}
              </p>
              {mission.steps[currentStep].example && (
                <div className="mt-2 p-2 bg-blue-100 dark:bg-blue-800 rounded text-xs font-mono">
                  {mission.steps[currentStep].example}
                </div>
              )}
            </div>

            {/* Hint */}
            <div className="space-y-2">
              <button
                onClick={() => setShowHint(!showHint)}
                className="flex items-center space-x-2 text-yellow-600 hover:text-yellow-700"
              >
                <Lightbulb className="w-4 h-4" />
                <span className="text-sm">Need a hint?</span>
              </button>
              {showHint && (
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded p-3">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    {mission.steps[currentStep].hint}
                  </p>
                </div>
              )}
            </div>

            {/* Help System */}
            <button
              onClick={() => setShowHelp(!showHelp)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-700"
            >
              <Settings className="w-4 h-4" />
              <span className="text-sm">Quick Reference</span>
            </button>
          </div>
        )}
      </div>

      {/* Mission Navigation */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <button
            onClick={() => {
              if (currentMission > 0) {
                setCurrentMission(prev => prev - 1);
                setCurrentStep(0);
              }
            }}
            disabled={currentMission === 0}
            className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm text-gray-600">
            Mission {currentMission + 1} of {data.missions.length}
          </span>
          <button
            onClick={() => {
              if (currentMission < data.missions.length - 1) {
                setCurrentMission(prev => prev + 1);
                setCurrentStep(0);
              }
            }}
            disabled={currentMission === data.missions.length - 1}
            className="px-3 py-1 text-sm bg-blue-600 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );

  // Render help modal
  const renderHelpModal = () => (
    <AnimatePresence>
      {showHelp && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-2xl w-full mx-4 max-h-96 overflow-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Quick Reference
                </h3>
                <button
                  onClick={() => setShowHelp(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4">
                {Object.entries(data.helpSystem.quickReference).map(([key, value]) => (
                  <div key={key} className="border-b border-gray-200 dark:border-gray-700 pb-2">
                    <div className="font-medium text-gray-900 dark:text-white">{key}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-mono">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
              Developer Console Simulation
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              <span className="font-medium text-gray-900 dark:text-white">{score} points</span>
            </div>
            {data.freePlay.safetyNet.enabled && (
              <div className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                <Zap className="w-4 h-4 inline mr-1" />
                Safe Mode
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Main Console Area */}
        <div className="flex-1 flex flex-col">
          {renderTabs()}
          <div className="flex-1 overflow-auto">
            {activeTab === 'execute-anonymous' && renderExecuteAnonymous()}
            {activeTab === 'query-editor' && renderQueryEditor()}
            {activeTab === 'logs' && renderLogs()}
            {activeTab === 'tests' && (
              <div className="p-8 text-center text-gray-500">
                <CheckCircle className="w-16 h-16 mx-auto mb-4" />
                <p>Test functionality coming soon!</p>
              </div>
            )}
            {activeTab === 'checkpoints' && (
              <div className="p-8 text-center text-gray-500">
                <Target className="w-16 h-16 mx-auto mb-4" />
                <p>Checkpoints functionality coming soon!</p>
              </div>
            )}
          </div>
        </div>

        {/* Mission Panel */}
        {renderMissionPanel()}
      </div>

      {/* Help Modal */}
      {renderHelpModal()}
    </div>
  );
};

export default DeveloperConsolePlayground;
