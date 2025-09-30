# Foundation Path - Detailed Playground Specifications

## Overview

This document contains comprehensive specifications for redesigning all 5 playgrounds in the Salesforce Foundation learning path. Each playground is designed to be completely unique with module-specific features, guided learning, and contextual help.

---

## Playground 1: What is Salesforce? - Introduction Explorer

### Lesson Context
- **Lesson ID**: what-is-salesforce
- **Current Playground ID**: playground-introduction
- **Learning Level**: Complete beginner
- **Duration**: 20 minutes
- **Primary Goal**: Understand Salesforce platform and feel comfortable with the interface

### Core Learning Objectives
1. Understand what Salesforce is beyond just CRM
2. Grasp cloud-first and multi-tenant architecture concepts
3. Learn declarative vs. programmatic development approaches
4. Recognize the Salesforce ecosystem and career opportunities

### Unique Playground Features

#### 1. Story-Based Interface Tour
- Welcome screen introducing the "journey" metaphor
- Guided tour mode with narrative explanations
- Swiss Army knife analogy visualization
- Apartment building analogy for multi-tenant architecture

#### 2. Interactive UI Hotspots
```javascript
hotspots: [
  {
    element: 'app-launcher',
    title: 'App Launcher - Your Gateway',
    description: 'This 9-dot grid opens everything in Salesforce',
    analogy: 'Think of it as the front door to the Salesforce building',
    tryIt: 'Click it now to see what apps are available'
  },
  {
    element: 'navigation-bar',
    title: 'Navigation Bar - Your Map',
    description: 'These tabs change based on which app you\'re in',
    tip: 'Right-click any tab to open it in a new browser tab!'
  },
  {
    element: 'setup-gear',
    title: 'Setup - The Control Room',
    description: 'Where administrators configure everything',
    note: 'You\'ll spend a lot of time here as you learn'
  },
  {
    element: 'global-search',
    title: 'Global Search - Your Superpower',
    description: 'Search across all objects and records',
    example: 'Try: "Account: Acme" to find Acme Corp records'
  }
]
```

#### 3. Career Path Visualizer
- Interactive overlay showing Salesforce roles and salary ranges
- Clickable career progression paths (Admin → Developer → Architect)
- Skills required for each level
- Market statistics (150K+ companies, 4.2M jobs, average salary increase)

#### 4. Ecosystem Explorer
- Visual diagram showing Salesforce product clouds
- Clickable clouds revealing specific features:
  - Sales Cloud: Lead, Opportunity, Quote management
  - Service Cloud: Case management, Knowledge base
  - Marketing Cloud: Email campaigns, Journey Builder
  - Commerce Cloud: E-commerce solutions
  - Platform: Custom apps, Lightning components

#### 5. "Did You Know?" Pop-ups
- Contextual facts appearing as user explores
- Examples:
  - "Did you know? Salesforce releases 3 major updates every year"
  - "Did you know? AppExchange has 5,000+ pre-built solutions"
  - "Did you know? Bank-level security with 99.9% uptime"

#### 6. Declarative vs. Programmatic Demo
- Split-screen comparison
- Left side: Point-and-click workflow builder
- Right side: Apex code achieving same result
- Interactive toggle between both approaches

### Guided Learning Path

**Step 1: Welcome & Orientation (2 min)**
- Welcome message with journey metaphor
- "What you'll learn" overview
- Choice: Guided tour or free exploration

**Step 2: Interface Introduction (3 min)**
- App Launcher exploration
- Navigation bar overview
- Setup area introduction
- Global search demonstration

**Step 3: Architecture Understanding (5 min)**
- Multi-tenant apartment building visualization
- Cloud-first benefits explanation
- Data security and backup demonstration

**Step 4: Development Approaches (5 min)**
- Declarative vs. Programmatic comparison
- When to use each approach
- Real examples of both

**Step 5: Ecosystem Overview (3 min)**
- Product clouds visualization
- AppExchange introduction
- Integration capabilities

**Step 6: Career Opportunities (2 min)**
- Career path visualizer
- Skills and certifications overview
- Salary ranges and job market

### Validation & Progress Tracking
```javascript
completionCriteria: {
  hotspot Explored: ['app-launcher', 'navigation-bar', 'setup-gear', 'global-search'],
  sectionsVisited: ['architecture', 'development-approaches', 'ecosystem', 'career-paths'],
  interactionsCompleted: ['clicked-app-launcher', 'viewed-setup', 'compared-dev-approaches'],
  minimumTimeSpent: 300 // 5 minutes minimum
}
```

### Contextual Tips & Hints
- **On hovering App Launcher**: "This is how you'll access everything - get familiar with it!"
- **On viewing Setup**: "Bookmark this area - you'll visit it often as you learn"
- **On comparing dev approaches**: "Most admins use declarative tools 90% of the time"
- **On career section**: "Many Salesforce professionals started where you are now"

### Visual Design Elements
- **Color Scheme**: Bright, welcoming blues and greens
- **Icons**: Friendly, approachable illustration style
- **Animations**: Smooth, gentle transitions
- **Callouts**: Rounded, non-intrusive boxes
- **Progress**: Visible completion indicator

---

## Playground 2: Navigation Mastery - Speed Navigation Trainer

### Lesson Context
- **Lesson ID**: navigation-mastery
- **Current Playground ID**: playground-navigation-mastery
- **Learning Level**: Beginner
- **Duration**: 25 minutes
- **Primary Goal**: Master Lightning navigation and become efficient

### Core Learning Objectives
1. Master App Launcher and quick search
2. Learn keyboard shortcuts for speed navigation
3. Practice efficient tab and list view switching
4. Build muscle memory for common navigation patterns

### Unique Playground Features

#### 1. Keyboard Shortcut Trainer
```javascript
shortcuts: {
  'ctrl+k': {
    name: 'Universal Search',
    description: 'Open quick search from anywhere',
    tutorial: 'Try it now: Press Ctrl/Cmd + K',
    practice: 'Use it to navigate to Accounts',
    mastery: 'Use 5 times to unlock Speed Demon badge'
  },
  'ctrl+shift+k': {
    name: 'Quick Create',
    description: 'Create new records instantly',
    tutorial: 'Press Ctrl/Cmd + Shift + K',
    practice: 'Create a new Account',
    mastery: 'Use 3 times'
  },
  'g+h': {
    name: 'Go Home',
    description: 'Jump to home page',
    tutorial: 'Press G then H (quickly)',
    practice: 'Navigate away, then return home',
    mastery: 'Use 2 times'
  },
  'g+a': {
    name: 'Go to Accounts',
    description: 'Jump directly to Accounts',
    tutorial: 'Press G then A',
    practice: 'Try it from any page',
    mastery: 'Use 2 times'
  },
  'g+c': {
    name: 'Go to Contacts',
    description: 'Jump directly to Contacts',
    tutorial: 'Press G then C',
    practice: 'Navigate to Contacts',
    mastery: 'Use 2 times'
  }
}
```

#### 2. Speed Navigation Challenges
- **Challenge 1**: Navigate from Home → Accounts → Specific record in <10 seconds
- **Challenge 2**: Switch between 3 different list views in <15 seconds
- **Challenge 3**: Use App Launcher to find and open Sales app in <5 seconds
- **Challenge 4**: Navigate to Setup → Object Manager in <30 seconds
- **Challenge 5**: Complete full navigation sequence using only keyboard shortcuts

#### 3. Navigation Heat Map
- Visual overlay showing most accessed areas
- Personal navigation pattern analysis
- Comparison to "expert user" patterns
- Suggestions for optimization

#### 4. Right-Click Discovery System
- Special detection for right-click on tabs
- Celebration animation when user discovers feature
- Badge: "Tab Master" for using right-click-new-tab 3 times

#### 5. Speed Demon Score
```javascript
scoreCalculation: {
  factors: [
    'keyboardShortcutsUsed',
    'navigationTime',
    'pathEfficiency',
    'rightClickDiscovered',
    'listViewSwitchSpeed',
    'searchUsage'
  ],
  ranks: [
    { score: 0-40, rank: 'Novice Navigator', icon: '🐢' },
    { score: 41-70, rank: 'Efficient Explorer', icon: '🚶' },
    { score: 71-90, rank: 'Speed Specialist', icon: '🏃' },
    { score: 91-100, rank: 'Navigation Ninja', icon: '🥷' }
  ]
}
```

#### 6. Muscle Memory Builder
- Repetitive practice sequences
- Timed repetitions with feedback
- Progressive difficulty increases
- "Unlock" system for advanced navigation tricks

### Guided Learning Path

**Step 1: App Launcher Mastery (4 min)**
- Introduction to App Launcher
- Search functionality practice
- Finding apps quickly
- Challenge: Find Sales app in <5 seconds

**Step 2: Tab Navigation (4 min)**
- Clicking through tabs
- Right-click discovery
- Tab bookmarking
- Challenge: Open 3 tabs in new windows

**Step 3: List View Switching (3 min)**
- Understanding list views
- Dropdown navigation
- Creating custom views (demonstration)
- Challenge: Switch between 3 views in <15 seconds

**Step 4: Global Search Power (4 min)**
- Basic search functionality
- Search operators (Account:, Contact:)
- Search filters
- Challenge: Find specific record using search operators

**Step 5: Keyboard Shortcuts Introduction (5 min)**
- Ctrl/Cmd + K demonstration
- G+H, G+A, G+C shortcuts
- Practice sequences
- Challenge: Navigate using only keyboard

**Step 6: Speed Navigation Test (5 min)**
- Complete navigation sequence
- Timed challenge
- Score calculation
- Rank achievement

### Validation & Progress Tracking
```javascript
completionCriteria: {
  appLauncherUsed: true,
  tabsOpened: { minimum: 5 },
  listViewsSwitched: { minimum: 3 },
  searchUsed: true,
  keyboardShortcutsAttempted: { minimum: 3 },
  rightClickDiscovered: true,
  speedChallengesCompleted: { minimum: 3 },
  finalSpeedTest: { completed: true, score: 'any' }
}
```

### Contextual Tips & Hints
- **After first slow navigation**: "Try using Ctrl/Cmd + K for faster access"
- **On third tab click**: "Pro tip: Right-click this tab to open in new window"
- **On list view**: "Notice how you can filter large lists instantly"
- **During speed test**: "Remember your shortcuts! Ctrl+K is your friend"
- **After completing challenge**: "Practice makes perfect - try the challenge again to improve your time"

### Visual Design Elements
- **Timer Display**: Large, visible countdown
- **Score Board**: Real-time speed demon score
- **Keyboard Overlay**: Visual representation of shortcuts
- **Progress Bar**: Completion status
- **Achievement Badges**: Unlockable icons
- **Heat Map**: Color-coded navigation patterns

---

## Playground 3: Data Model Fundamentals - Interactive Schema Explorer

### Lesson Context
- **Lesson ID**: data-model-fundamentals
- **Current Playground ID**: playground-navigation
- **Learning Level**: Beginner
- **Duration**: 25 minutes
- **Primary Goal**: Understand objects, fields, and relationships conceptually

### Core Learning Objectives
1. Understand what a data model is and why it matters
2. Master object and field concepts
3. Learn all field types and when to use them
4. Grasp the three relationship types

### Unique Playground Features

#### 1. Interactive Schema Builder
- Visual representation of standard objects
- Clickable objects expanding to show fields
- Relationship lines with arrows
- Color coding: Standard (blue), Custom (green), Relationships (purple)
- Zoom and pan capabilities

#### 2. Field Type Explorer
```javascript
fieldTypes: {
  text: {
    types: ['Text', 'Text Area', 'Rich Text Area', 'Long Text Area'],
    limits: [255, 255, 131072, 131072],
    useCases: ['Names', 'Addresses', 'Formatted content', 'Notes'],
    interactive: true, // Type to see character limits
    demo: 'Try typing to see how many characters fit'
  },
  number: {
    types: ['Number', 'Currency', 'Percent', 'Auto Number'],
    examples: ['Quantity: 150', '$1,234.56', '75%', 'INV-00001'],
    useCases: ['Quantities', 'Money amounts', 'Rates', 'Sequential IDs'],
    interactive: true, // See formatting live
    demo: 'Enter a number to see currency formatting'
  },
  datetime: {
    types: ['Date', 'Date/Time', 'Time'],
    examples: ['12/25/2024', '12/25/2024 2:30 PM', '2:30 PM'],
    useCases: ['Birth dates', 'Meeting times', 'Work hours'],
    interactive: true, // Pick dates/times
    demo: 'Select a date to see the format'
  },
  selection: {
    types: ['Picklist', 'Multi-Select Picklist', 'Checkbox'],
    examples: ['Status: Active', 'Skills: Apex, LWC, Admin', 'true/false'],
    useCases: ['Status fields', 'Categories', 'Yes/No questions'],
    interactive: true, // Select from options
    demo: 'Choose options to see multi-select in action'
  },
  relationship: {
    types: ['Lookup', 'Master-Detail', 'Hierarchy'],
    analogies: ['Phone number', 'Family tree', 'Org chart'],
    useCases: ['Optional connections', 'Parent-child', 'Self-referencing'],
    interactive: true, // Click to create connections
    demo: 'Connect objects to see relationships form'
  },
  advanced: {
    types: ['Formula', 'Roll-Up Summary', 'Geolocation', 'External ID'],
    capabilities: ['Auto-calculate', 'Summarize children', 'Map coordinates', 'Integration key'],
    examples: ['Days_Until_Due__c', 'Total_Amount__c', 'Office_Location__c', 'SAP_Customer_ID__c'],
    interactive: true, // See calculations
    demo: 'Create a simple formula to see it calculate'
  }
}
```

#### 3. Relationship Visualizer
- Animated data flow showing parent → child connections
- Three relationship type comparison tool
- Interactive "Build a Relationship" sandbox
- Lookup vs Master-Detail decision tree

#### 4. Analogy Integrations
- Filing Cabinet: Visual representation for objects
- Phone Number: Interactive lookup relationship demo
- Family Tree: Master-Detail hierarchy visualization
- Apartment Building: Multi-tenant architecture reminder

#### 5. "What Field Type?" Quiz Game
```javascript
quizScenarios: [
  {
    question: 'A company needs to store customer\'s full address',
    options: ['Text', 'Text Area', 'Rich Text Area', 'Long Text Area'],
    correct: 'Text Area',
    explanation: 'Text Area allows up to 255 characters, perfect for addresses'
  },
  {
    question: 'Tracking employee salaries with currency symbol',
    options: ['Number', 'Currency', 'Text', 'Percent'],
    correct: 'Currency',
    explanation: 'Currency fields automatically format as money with $ symbol'
  },
  {
    question: 'A Task must belong to a Project and inherit security',
    options: ['Lookup', 'Master-Detail', 'Hierarchy', 'Formula'],
    correct: 'Master-Detail',
    explanation: 'Master-Detail creates strong bond with security inheritance'
  }
  // ... 10+ scenarios
]
```

#### 6. Data Model Mindset Trainer
- Interactive scenarios requiring object/field/relationship decisions
- Four key questions framework:
  1. What object should store this?
  2. How does it connect to other objects?
  3. What reports will be needed?
  4. Who needs access?
- Guided decision making with feedback

### Guided Learning Path

**Step 1: Data Model Introduction (3 min)**
- What is a data model?
- Why it's the "DNA of Salesforce"
- Overview of objects, fields, relationships

**Step 2: Object Exploration (4 min)**
- Standard objects tour (Account, Contact, Opportunity, Case)
- Custom objects introduction
- Click objects to see their fields
- Filing cabinet analogy visualization

**Step 3: Field Type Discovery (8 min)**
- Text fields category
- Number fields category
- Date/Time fields category
- Selection fields category
- Relationship fields overview
- Advanced fields preview
- Interactive type testing

**Step 4: Relationship Deep Dive (6 min)**
- Lookup relationship (phone number analogy)
- Master-Detail relationship (family tree analogy)
- Many-to-Many preview (junction object teaser)
- Interactive relationship builder

**Step 5: Data Model Mindset (4 min)**
- Four key questions framework
- Practice scenarios
- Decision tree navigation
- Validation feedback

### Validation & Progress Tracking
```javascript
completionCriteria: {
  objectsExplored: { minimum: 3, mustInclude: ['Account', 'Contact', 'Opportunity'] },
  fieldTypesViewed: { minimum: 8 }, // At least 8 of the field types
  relationshipsUnderstood: ['lookup', 'master-detail'],
  quizScore: { minimum: 7, outOf: 10 },
  dataModelScenarios: { completed: 3 },
  schemaBuilderUsed: true
}
```

### Contextual Tips & Hints
- **On viewing Text field**: "Notice the 255 character limit - use Text Area for longer content"
- **On Currency field**: "Currency fields automatically format with $ and commas"
- **On Lookup relationship**: "Think of this like a phone number - flexible and optional"
- **On Master-Detail**: "Strong parent-child bond - child can't exist without parent"
- **On Formula field**: "These calculate automatically - no manual entry needed!"
- **In Schema Builder**: "This visual view makes relationships crystal clear"

### Visual Design Elements
- **Schema Builder**: Clean, professional diagram with zoom/pan
- **Field Type Cards**: Color-coded with icons
- **Relationship Lines**: Animated arrows showing data flow
- **Analogy Illustrations**: Custom graphics for filing cabinet, phone, family tree
- **Interactive Demos**: Live examples users can manipulate
- **Quiz Interface**: Game-like presentation
- **Decision Trees**: Flowchart-style navigation

---

## Playground 4: Hands-On Data Model - Complete Build Workshop

### Lesson Context
- **Lesson ID**: hands-on-data-model
- **Current Playground ID**: playground-build-data-model
- **Learning Level**: Intermediate
- **Duration**: 35 minutes
- **Primary Goal**: Build a complete three-object data model from scratch

### Core Learning Objectives
1. Create custom objects with proper configuration
2. Add fields of various types
3. Set up Master-Detail relationships correctly
4. Build formula and roll-up summary fields
5. Test complete data flow

### Unique Playground Features

#### 1. Step-by-Step Build Wizard
```javascript
buildSteps: [
  {
    step: 1,
    title: 'Create Project Object',
    tasks: [
      'Navigate to Object Manager',
      'Click Create → Custom Object',
      'Enter Label: Project',
      'Enter Plural: Projects',
      'Enter Record Name: Project Name (Text)',
      'Enable: Activities, Reports, Search',
      'Save'
    ],
    validation: 'Project__c object exists',
    help: 'This object will store consulting project information'
  },
  {
    step: 2,
    title: 'Add Project Fields',
    tasks: [
      'Client Name (Text, 80)',
      'Start Date (Date)',
      'End Date (Date)',
      'Budget Amount (Currency)',
      'Status (Picklist: Planning, Active, On Hold, Completed, Cancelled)',
      'Project Description (Long Text Area)'
    ],
    validation: 'All 6 fields created',
    help: 'These fields capture essential project information'
  }
  // ... continue for all 18 steps
]
```

#### 2. Interactive Object Creation Wizard
- Form-based object creator with validation
- Field type selector with descriptions
- Real-time API name preview (Project → Project__c)
- Settings checklist (Activities, Reports, Search)
- Inline help for each setting

#### 3. Field Configuration Helper
- Field type selector with use case hints
- Character/length validators
- Required field guidance
- Help text suggestions
- Field dependency checker

#### 4. Relationship Configuration Tool
- Visual parent-child selector
- Master-Detail vs Lookup decision helper
- Cascade delete warning
- Related list configuration
- Relationship name suggester

#### 5. Formula Field Builder
```javascript
formulaBuilder: {
  editor: {
    syntaxHighlighting: true,
    autoComplete: true,
    fieldSelector: true, // Click to insert field references
    functionLibrary: true, // Common functions with examples
    validation: 'realTime'
  },
  examples: [
    {
      name: 'Days Remaining',
      formula: 'End_Date__c - TODAY()',
      returnType: 'Number',
      description: 'Calculate days until project ends'
    },
    {
      name: 'Budget Utilization',
      formula: 'Hours_Actual__c / Hours_Estimated__c',
      returnType: 'Percent',
      description: 'Percentage of budget used'
    },
    {
      name: 'Project Health',
      formula: `IF(Days_Remaining__c < 0, "🔴 Overdue",
                 IF(Budget_Utilization__c > 1, "🟡 Over Budget", "🟢 On Track"))`,
      returnType: 'Text',
      description: 'Visual health indicator'
    }
  ],
  testData: {
    Project__c: {
      End_Date__c: '2024-12-31',
      Hours_Actual__c: 85,
      Hours_Estimated__c: 100
    }
  },
  livePreview: true // See formula results with test data
}
```

#### 6. Roll-Up Summary Builder
- Parent-child object selector
- Aggregate function selector (COUNT, SUM, MIN, MAX)
- Filter criteria builder
- Preview with sample data
- Validation for Master-Detail requirement

#### 7. Live Schema Builder Integration
- Split-screen view: Build form + Schema Builder
- Real-time diagram updates as objects/fields are created
- Zoomable, pannable diagram
- Export diagram feature

#### 8. Data Flow Tester
- Record creation wizard for all three objects
- Pre-filled sample data option
- Relationship verification
- Roll-up summary validation
- Success confirmation with visual feedback

### Guided Learning Path

**Phase 1: Project Object (8 min)**
- Create object with wizard
- Add 6 fields (Text, Date, Currency, Picklist, Long Text)
- Verify object appears in App Launcher
- View in Schema Builder

**Phase 2: Project Task Object (8 min)**
- Create second object
- Add Master-Detail relationship to Project
- Add 8 fields including Lookup to User
- Verify related list appears on Project

**Phase 3: Time Entry Object (6 min)**
- Create third object
- Add Master-Detail to Project Task
- Add 5 fields for time tracking
- Verify complete hierarchy

**Phase 4: Formula Fields (6 min)**
- Create Days Remaining formula
- Create Budget Utilization formula
- Create Project Health formula
- Test with sample data

**Phase 5: Roll-Up Summaries (4 min)**
- Total Tasks (COUNT)
- Completed Tasks (COUNT with filter)
- Total Estimated Hours (SUM)
- Total Actual Hours (SUM)

**Phase 6: Testing & Validation (3 min)**
- Create sample Project
- Add sample Tasks
- Log sample Time Entries
- Verify roll-ups calculate correctly
- Export Schema Builder diagram

### Validation & Progress Tracking
```javascript
completionCriteria: {
  objectsCreated: {
    required: ['Project__c', 'Project_Task__c', 'Time_Entry__c'],
    validated: true
  },
  fieldsCreated: {
    Project__c: { minimum: 6 },
    Project_Task__c: { minimum: 8 },
    Time_Entry__c: { minimum: 5 }
  },
  relationshipsConfigured: {
    masterDetail: 2, // Task→Project, TimeEntry→Task
    lookup: 1 // Task→User
  },
  formulaFields: { minimum: 1 },
  rollUpSummaries: { minimum: 1 },
  dataFlowTested: true,
  schemaExported: true
}
```

### Contextual Tips & Hints
- **On object creation**: "Remember to enable Activities, Reports, and Search"
- **On field creation**: "Use clear, descriptive names - future you will thank you"
- **On picklist**: "These values will appear in the dropdown - choose wisely"
- **On Master-Detail**: "This makes Tasks dependent on Projects - if Project deletes, Tasks delete too"
- **On Lookup to User**: "This lets you assign tasks to specific team members"
- **On formula syntax error**: "Check your field references - they're case-sensitive"
- **On roll-up requirement**: "Roll-ups only work with Master-Detail relationships"
- **On testing**: "Creating real data is the best way to verify your model works"

### Visual Design Elements
- **Progress Tracker**: 18-step visual progress bar
- **Step Indicators**: Checkmarks for completed steps
- **Split Screen**: Build wizard + Schema Builder side-by-side
- **Field Type Icons**: Visual identification of field types
- **Relationship Arrows**: Animated connections in Schema Builder
- **Formula Editor**: Syntax-highlighted code editor
- **Success Animations**: Celebration when each phase completes
- **Export Button**: Download schema diagram

---

## Playground 5: Advanced Relationships - Architecture Lab

### Lesson Context
- **Lesson ID**: advanced-relationships
- **Current Playground ID**: playground-data-model
- **Learning Level**: Advanced
- **Duration**: 30 minutes
- **Primary Goal**: Master junction objects, hierarchies, and complex relationship patterns

### Core Learning Objectives
1. Create Many-to-Many relationships with junction objects
2. Build hierarchical (self-referencing) relationships
3. Write cross-object formula fields
4. Configure External IDs for integration
5. Recognize and avoid anti-patterns

### Unique Playground Features

#### 1. Junction Object Wizard
```javascript
junctionWizard: {
  step1: {
    title: 'Identify Many-to-Many Need',
    questions: [
      'Can one [Object A] relate to multiple [Object B]?',
      'Can one [Object B] relate to multiple [Object A]?'
    ],
    examples: [
      'Students ↔ Courses',
      'Books ↔ Authors',
      'Members ↔ Committees'
    ]
  },
  step2: {
    title: 'Create Junction Object',
    guidance: 'Name pattern: [ObjectA]_[ObjectB] (e.g., Student_Course__c)',
    fields: [
      'Record Name: Auto Number for tracking',
      'Master-Detail to [Object A]',
      'Master-Detail to [Object B]',
      'Additional fields for junction data'
    ]
  },
  step3: {
    title: 'Configure Relationships',
    masterDetail1: {
      parent: '[Select Object A]',
      relatedList: '[ObjectA] on [Junction]',
      childName: '[Junction plural]'
    },
    masterDetail2: {
      parent: '[Select Object B]',
      relatedList: '[ObjectB] on [Junction]',
      childName: '[Junction plural]'
    }
  },
  step4: {
    title: 'Test Many-to-Many',
    validation: [
      'Create [Object A] record',
      'Create [Object B] record',
      'Create junction record linking both',
      'Verify related lists on both parents'
    ]
  }
}
```

#### 2. Hierarchical Relationship Builder
- Org chart visualizer (User.Manager example)
- Account hierarchy builder (Parent Account)
- Drag-and-drop hierarchy creator
- Cascading relationship demonstrator
- Self-referencing lookup configurator

#### 3. Cross-Object Formula Path Builder
```javascript
formulaPathBuilder: {
  interface: 'visual',
  clickToSelect: true,
  example: {
    object: 'Opportunity',
    goal: 'Display Account Industry and Owner Name',
    paths: [
      {
        click: 'Account',
        then: 'Industry',
        formula: 'Account.Industry',
        type: 'Text'
      },
      {
        click: 'Account',
        then: 'Owner',
        then: 'Name',
        formula: 'Account.Owner.Name',
        type: 'Text'
      }
    ]
  },
  customObjectExample: {
    object: 'Time_Entry__c',
    path: 'Project_Task__r.Project__r.Client_Name__c',
    visualization: 'Time Entry → Task → Project → Client Name',
    note: 'Use __r for custom object relationships'
  }
}
```

#### 4. SOQL Query Optimizer
- Side-by-side query comparison
- Performance metrics display
- Good vs Bad query examples
- Governor limit tracker
- Query execution visualizer

#### 5. Architecture Pattern Library
```javascript
patterns: {
  masterDataManagement: {
    diagram: 'Account as central hub',
    connections: ['Contacts', 'Opportunities', 'Cases', 'Custom Objects'],
    benefits: ['Single source of truth', 'Consistent data', 'Easy reporting'],
    implementation: 'All custom objects lookup/master-detail to Account'
  },
  auditTrail: {
    approaches: [
      {
        name: 'Field History Tracking',
        limit: '20 fields maximum',
        storage: '18 months',
        useCases: 'Standard audit needs'
      },
      {
        name: 'Custom Audit Object',
        schema: {
          fields: ['Parent_Record__c', 'Field_Name__c', 'Old_Value__c', 'New_Value__c',
                   'Changed_By__c', 'Change_Date__c', 'Change_Reason__c'],
          relationships: 'Lookup to audited objects'
        },
        benefits: 'Unlimited fields, custom retention, detailed tracking'
      }
    ]
  },
  hierarchicalRollups: {
    example: 'Account hierarchy with revenue roll-ups',
    levels: ['Corporate Parent', 'Regional Office', 'Local Branch'],
    rollups: 'Sum revenue from all levels',
    implementation: 'Parent Account field + roll-up summaries'
  }
}
```

#### 6. Anti-Pattern Detector Game
```javascript
antiPatterns: [
  {
    pattern: 'Over-Normalization',
    example: {
      bad: 'Separate objects for FirstName, LastName, Street, City, State, Zip',
      good: 'Single Contact object with all name/address fields',
      why: 'Too many small objects creates complexity without benefit'
    },
    quiz: 'Identify the over-normalized design',
    fix: 'Consolidate into logical objects'
  },
  {
    pattern: 'Under-Normalization',
    example: {
      bad: 'Storing Order Line Items in concatenated text field',
      good: 'Order_Line_Item__c object with Master-Detail to Order',
      why: 'Can\'t report on, search, or relate to individual line items'
    },
    quiz: 'Spot the under-normalized field',
    fix: 'Create proper child object'
  },
  {
    pattern: 'Wrong Relationship Type',
    example: {
      bad: 'Lookup from Opportunity Line Items to Opportunity',
      good: 'Master-Detail from Opportunity Line Items to Opportunity',
      why: 'Line items can\'t exist without Opportunity, need roll-ups'
    },
    quiz: 'Choose correct relationship type',
    fix: 'Convert to Master-Detail'
  },
  {
    pattern: 'Deep Relationship Chains',
    example: {
      bad: 'Object1 → Object2 → Object3 → Object4 → Object5',
      good: 'Object1 → Object2 (consider flattening or direct relationships)',
      why: 'Performance issues, query complexity, maintenance problems'
    },
    quiz: 'Identify problematic depth',
    fix: 'Simplify relationship paths'
  }
]
```

#### 7. Library Management System Challenge
- Complete 6-object build project
- Objects: Book, Author, Book_Author (junction), Member, Loan, Reservation
- All relationship types included
- Validation rules required
- Formula fields for calculations
- Roll-up summaries for counts
- Edge case testing included

### Guided Learning Path

**Part 1: Junction Objects (10 min)**
- Many-to-Many problem introduction
- Student-Course example walkthrough
- Build junction object step-by-step
- Test Many-to-Many functionality
- Verify bidirectional relationships

**Part 2: Hierarchical Relationships (6 min)**
- Self-referencing lookup concept
- User.Manager org chart example
- Account.Parent hierarchy example
- Build hierarchical relationship
- Visualize hierarchy tree

**Part 3: Cross-Object Formulas (5 min)**
- Relationship path building
- Account.Industry example
- Account.Owner.Name example
- Custom object path (__r notation)
- Test formulas with data

**Part 4: Architecture Patterns (5 min)**
- Master Data Management pattern
- Audit Trail implementations
- Hierarchical rollups pattern
- When to use each pattern

**Part 5: Anti-Pattern Recognition (4 min)**
- Review 4 common anti-patterns
- Interactive detection game
- Best practice recommendations
- Pattern vs anti-pattern comparison

### Validation & Progress Tracking
```javascript
completionCriteria: {
  junctionObjectCreated: true,
  manyToManyTested: true,
  hierarchicalRelationshipBuilt: true,
  crossObjectFormulaCreated: true,
  antiPatternsIdentified: { minimum: 3, outOf: 4 },
  architecturePatternUnderstood: { minimum: 2, outOf: 3 },
  librarySystemCompleted: {
    objectsCreated: 6,
    relationshipsCorrect: true,
    validationRulesAdded: true,
    dataFlowTested: true
  }
}
```

### Contextual Tips & Hints
- **On junction objects**: "You need TWO Master-Detail relationships for Many-to-Many"
- **On hierarchical**: "Self-referencing lookups let records connect to themselves"
- **On formulas**: "Use __r for custom relationships, dot notation for standard"
- **On External ID**: "Automatically indexed for better query performance"
- **On SOQL**: "Query only fields you need - performance matters at scale"
- **On patterns**: "Master Data Management = Account as your single source of truth"
- **On anti-patterns**: "Deep chains hurt performance - keep it simple"
- **On testing**: "Always test parent deletion - see what happens to children"

### Visual Design Elements
- **Junction Diagram**: Visual showing two Master-Details
- **Org Chart**: Tree visualization of hierarchies
- **Formula Path**: Clickable relationship navigator
- **SOQL Comparison**: Side-by-side with performance metrics
- **Pattern Diagrams**: Architecture pattern visualizations
- **Anti-Pattern Warnings**: Red flags with explanations
- **Library System Schema**: Complete ERD diagram
- **Performance Graphs**: Scale impact visualizations

---

## Implementation Priority

### Phase 3A: Foundation Playgrounds 1-2 (Week 1)
- Playground 1: Introduction Explorer
- Playground 2: Speed Navigation Trainer

### Phase 3B: Foundation Playgrounds 3-4 (Week 2)
- Playground 3: Interactive Schema Explorer
- Playground 4: Complete Build Workshop

### Phase 3C: Foundation Playground 5 (Week 3)
- Playground 5: Architecture Lab

---

## Technical Requirements

### Common Components Needed
1. **Guided Tour Engine**: Overlay system with steps, validation, progress tracking
2. **Interactive Hotspot System**: Clickable areas with tooltips and explanations
3. **Keyboard Shortcut Detector**: Captures and responds to keyboard input
4. **Schema Builder Component**: Visual object/relationship diagram
5. **Formula Editor**: Syntax highlighting, auto-complete, validation
6. **Timer/Scoring System**: Performance tracking and gamification
7. **Badge/Achievement System**: Unlockable rewards
8. **Validation Engine**: Checks completion criteria
9. **Data Simulator**: Sample Salesforce data for practice
10. **Export/Save System**: Progress persistence

### Unique Components by Playground
**Playground 1**: Career path visualizer, ecosystem explorer, analogy animations
**Playground 2**: Keyboard trainer, speed challenges, heat map, navigation scorer
**Playground 3**: Field type explorer, relationship visualizer, quiz game engine
**Playground 4**: Build wizard, formula builder, roll-up configurator, split-screen view
**Playground 5**: Junction wizard, hierarchy builder, SOQL optimizer, anti-pattern detector

---

*Generated: 2025-09-30*
*Status: Foundation Path Analysis Complete*
*Next: Phase 4 - Admin Path Analysis*