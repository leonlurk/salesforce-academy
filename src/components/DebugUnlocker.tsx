import { useProgressStore } from '../store/progressStore';

export default function DebugUnlocker() {
  const { unlockAllForTesting, resetProgress } = useProgressStore();

  const handleUnlockAll = () => {
    // Clear localStorage first to remove any cached locked state
    localStorage.removeItem('salesforce-academy-progress');
    
    // Reset progress to initial state (which now has everything unlocked)
    resetProgress();
    
    // Then explicitly unlock everything
    unlockAllForTesting();
    
    // Force page reload to ensure fresh state
    window.location.reload();
  };

  const handleClearStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-red-500 text-white p-4 rounded-lg shadow-lg">
      <h3 className="font-bold mb-2">Debug Tools</h3>
      <div className="space-y-2">
        <button
          onClick={handleUnlockAll}
          className="block w-full bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
        >
          🔓 Unlock All Modules
        </button>
        <button
          onClick={handleClearStorage}
          className="block w-full bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
        >
          🗑️ Clear All Storage
        </button>
      </div>
    </div>
  );
}
