import React from 'react';
import DeveloperConsolePlayground from './DeveloperConsolePlayground';
import SalesforcePlayground from './SalesforcePlayground';

interface PlaygroundData {
  mode?: string;
  // Developer Console specific
  missions?: any[];
  consoleFeatures?: any;
  freePlay?: any;
  helpSystem?: any;
  completionCriteria?: any;
  rewards?: any;
  // Generic playground data
  module?: string;
  showNavigation?: boolean;
  showAppLauncher?: boolean;
  allowedActions?: string[];
  initialView?: string;
  objectives?: string[];
  tips?: any[];
  guidedSteps?: any[];
}

interface EnhancedPlaygroundProps {
  title: string;
  description: string;
  data: PlaygroundData;
  onComplete?: (results: any) => void;
}

const EnhancedPlayground: React.FC<EnhancedPlaygroundProps> = ({
  title,
  description,
  data,
  onComplete
}) => {
  // Determine which playground component to render based on data.mode
  if (data.mode === 'developer-console-full' && data.missions) {
    return (
      <DeveloperConsolePlayground
        title={title}
        description={description}
        data={data as any}
        onComplete={onComplete}
      />
    );
  }

  // For other playground types, use the generic SalesforcePlayground
  return (
    <SalesforcePlayground
      title={title}
      description={description}
      data={data}
      onComplete={onComplete}
    />
  );
};

export default EnhancedPlayground;
