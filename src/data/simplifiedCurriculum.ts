import type { LearningPath } from '../types';

export const simplifiedLearningPaths: LearningPath[] = [
  {
    id: 'foundation',
    title: 'Salesforce Foundation',
    description: 'Master the fundamentals and become fluent in the Salesforce ecosystem. Your journey to expertise starts here!',
    level: 'Foundation',
    duration: '4-6 weeks',
    prerequisites: [],
    certification: 'Platform Foundations',
    color: 'bg-gradient-to-br from-green-400 to-green-600',
    icon: '🌱',
    modules: [
      {
        id: 'sf-fundamentals',
        title: 'Salesforce Fundamentals',
        description: 'Dive deep into what makes Salesforce the #1 CRM platform in the world',
        duration: '1 week',
        completed: false,
        locked: false,
        order: 1,
        lessons: [
          {
            id: 'what-is-salesforce',
            title: 'What is Salesforce? (And Why Should You Care?)',
            type: 'content',
            duration: '20 min',
            completed: false,
            points: 150,
            order: 1,
            content: {
              text: `# Welcome to Your Salesforce Journey! 🚀

Hey there, future Salesforce superstar! 👋

You're about to embark on one of the most exciting tech journeys possible. By the end of this course, you'll go from complete beginner to someone who can confidently build, customize, and manage enterprise-level Salesforce solutions. Ready? Let's dive in!

## So... What Exactly IS Salesforce? 🤔

Think of Salesforce as the **Swiss Army knife of business software**. It's a cloud-based platform that helps companies manage their relationships with customers, but that's just scratching the surface.

Here's the thing - Salesforce isn't just a CRM. It's actually:
- A **Customer Relationship Management (CRM)** system
- A **Platform-as-a-Service (PaaS)** for building custom applications
- A **Sales automation** powerhouse
- A **Marketing automation** engine
- A **Service and support** hub
- An **Analytics and reporting** beast
- And SO much more!

## The Magic Behind the Scenes ✨

### 1. Cloud-First Architecture
Remember when you had to install software on your computer? Yeah, Salesforce said "nope" to that 15+ years ago. Everything runs in the cloud, which means:
- **Access anywhere**: Got internet? You've got Salesforce
- **Always up-to-date**: No more "please update your software" notifications
- **Automatic backups**: Your data is safer than Fort Knox
- **Instant scalability**: Growing from 10 to 10,000 users? No problem!

### 2. Multi-Tenant Architecture (The Apartment Building Analogy)
Imagine Salesforce as a massive, luxury apartment building:
- **Everyone shares the building** (the infrastructure)
- **But your apartment is completely private** (your data)
- **Everyone gets the same amenities** (features and updates)
- **But you can decorate however you want** (customization)

This is why Salesforce can serve millions of companies while keeping costs low and security high.

### 3. The Two Faces of Development
Salesforce gives you TWO ways to build:

**🖱️ Declarative (Point-and-Click)**
- Build complex business logic without writing code
- Create custom objects, fields, and processes
- Design workflows and automation
- Perfect for business users and admins

**💻 Programmatic (Code)**
- Write Apex (Salesforce's Java-like language)
- Build Lightning Web Components
- Create complex integrations
- Handle enterprise-level customizations

## Why Salesforce is Taking Over the World 🌍

### The Numbers Don't Lie:
- **#1 CRM** for 8+ consecutive years
- **150,000+** companies use it
- **$26+ billion** in annual revenue
- **4.2 million** jobs will be created in the Salesforce ecosystem by 2024
- **Average salary boost** of 25-35% for certified professionals

### The Real Reasons Companies Choose Salesforce:

**🔧 Customization Without Limits**
- Want to track alien encounters? You can build that.
- Need to manage rocket launches? There's a way.
- Running a dog grooming business? Perfect fit.

**🔗 Integration Heaven**
- Connects with 99% of business applications
- AppExchange has 5,000+ pre-built solutions
- APIs for everything imaginable

**🚀 Innovation at Light Speed**
- 3 major releases per year (Spring, Summer, Winter)
- New features arrive automatically
- Cutting-edge AI with Einstein

**💼 Enterprise-Grade Everything**
- Bank-level security
- 99.9% uptime guarantee
- Compliance with every regulation you can think of

## Your Career Trajectory 📈

Here's what's waiting for you:

**Entry Level ($50K-$70K)**
- Salesforce Administrator
- Business Analyst
- Data Analyst

**Mid Level ($70K-$120K)**
- Senior Administrator
- Platform Developer
- Solution Architect

**Senior Level ($120K-$200K+)**
- Technical Architect
- Practice Lead
- Independent Consultant

**The Sky's the Limit ($200K+)**
- CTO at Salesforce partner
- Principal Architect
- Salesforce MVP

## The Salesforce Ecosystem 🌟

Think of Salesforce as the center of a massive universe:

- **Sales Cloud**: Manage your sales pipeline like a pro
- **Service Cloud**: Deliver world-class customer support
- **Marketing Cloud**: Create campaigns that convert
- **Commerce Cloud**: Build e-commerce experiences
- **Community Cloud**: Connect customers and partners
- **Analytics Cloud**: Turn data into insights
- **Platform**: Build anything you can imagine

## What Makes This Course Different? 🎯

We're not just teaching you Salesforce - we're building you into a **Salesforce thinking machine**. You'll learn:

- **The WHY behind every feature** (not just the how)
- **Real-world scenarios** you'll face in your job
- **Best practices** that separate pros from beginners
- **Common pitfalls** and how to avoid them
- **Industry secrets** that take years to discover

## Quick Reality Check ✅

By the time you finish this foundation path, you'll be able to:
- Navigate Salesforce like you've been using it for years
- Understand the data model and relationships
- Create custom objects and fields
- Build automation that saves hours of work
- Generate reports that wow your boss
- Speak Salesforce fluently in interviews

## Ready to Transform Your Career? 🎉

The next lesson will get you hands-on with the Salesforce interface. We'll start navigating around and I'll show you the insider tricks that make you look like a pro from day one.

Remember: **Every Salesforce expert started exactly where you are right now**. The only difference? They took the first step.

Let's go make some magic happen! ✨`,
              resources: [
                {
                  title: 'Official Salesforce Trailhead',
                  type: 'trailhead',
                  url: 'https://trailhead.salesforce.com',
                  description: 'The official learning platform - your new best friend'
                },
                {
                  title: 'Salesforce Developer Documentation',
                  type: 'documentation',
                  url: 'https://developer.salesforce.com/docs',
                  description: 'The technical bible for all things Salesforce'
                },
                {
                  title: 'State of Salesforce Report 2024',
                  type: 'article',
                  url: 'https://www.salesforce.com/news/stories/state-of-salesforce-report/',
                  description: 'Latest trends and insights in the Salesforce ecosystem'
                }
              ]
            }
          },
          {
            id: 'navigation-mastery',
            title: 'Navigation Mastery: Become a Salesforce Speed Demon',
            type: 'interactive',
            duration: '25 min',
            completed: false,
            points: 200,
            order: 2,
            content: {
              text: `# Master Salesforce Navigation Like a Pro! ⚡

Welcome back, future Salesforce ninja! Now that you know WHY Salesforce is amazing, let's learn HOW to navigate it like you've been doing it for years.

## The Lightning Experience: Your New Home 🏠

First things first - we're focusing on **Lightning Experience** (not Salesforce Classic). Why? Because Lightning is:
- The modern interface
- Where all new features land first
- What 95% of companies use
- What you'll see in interviews

## The Anatomy of Salesforce Lightning 🔍

Think of Salesforce like a well-organized house. Let me give you the tour:

### 🏠 The App Launcher (Your Front Door)
Click that 9-dot grid in the top-left corner. This is your gateway to EVERYTHING:
- **Standard Apps**: Sales, Service, Marketing
- **Custom Apps**: Built specifically for your company
- **Items**: Quick access to any object or feature

**Pro Tip**: Use the search box! Type "acc" to jump to Accounts instantly.

### 🧭 The Navigation Bar (Your Map)
Right below the header, you'll see tabs like "Home", "Accounts", "Contacts". This changes based on which app you're in.

**Speed Hack**: Right-click any tab to open it in a new tab. Mind = blown! 🤯

### ⚙️ Setup (The Control Room)
Click the gear icon in the top-right. This is where all the magic happens:
- **Setup**: The admin's playground
- **Developer Console**: Where code lives
- **Settings**: Personal preferences

### 🔍 Global Search (Your Superpower)
That search bar at the top? It's not just decoration. You can:
- Search across ALL objects
- Use operators like "Account: Acme"
- Find records, files, everything

## Essential Navigation Shortcuts ⌨️

Master these and you'll look like a wizard:

**Universal Shortcuts:**
- Ctrl/Cmd + K: Quick search and navigation
- Ctrl/Cmd + Shift + K: Create new records
- G then H: Go to Home
- G then A: Go to Accounts
- G then C: Go to Contacts

**List View Magic:**
- Ctrl/Cmd + Click: Open records in new tabs
- Shift + Click: Select multiple records
- Alt + Click: Edit inline

## Interactive Exercise: The Speed Navigation Challenge! 🏁

Let's practice! Here's your mission:

1. **Launch the Sales App**
   - Click App Launcher (9 dots)
   - Type "Sales" and select it

2. **Find All Accounts**
   - Click the Accounts tab
   - Notice the list view (probably "Recently Viewed")

3. **Switch to Different Views**
   - Click the view dropdown
   - Try "All Accounts" or "My Accounts"

4. **Open an Account Record**
   - Click any account name
   - Explore the different tabs

5. **Use Global Search**
   - Type a company name in the search bar
   - See how it finds related records

6. **Quick Create Magic**
   - Click the "+" icon in the top navigation
   - See all the records you can create instantly

## Pro Navigation Tips That'll Blow Your Mind 🤯

### 1. **Breadcrumb Navigation**
Those little links showing "Home > Accounts > Acme Corp"? Click any part to jump back!

### 2. **The Back Button Hack**
Use your browser's back button! Salesforce plays nice with it.

### 3. **Bookmarking Power**
Bookmark specific list views or record pages. They work perfectly!

### 4. **The Related Tab Goldmine**
On any record, the Related tab shows EVERYTHING connected to it. This is where relationships come alive.

### 5. **Quick Actions Everywhere**
Look for action buttons on records - they let you create related records instantly.

## What's Next? 🚀

In our next lesson, we'll dive into the **data model** - the foundation that makes everything else possible. You'll learn about:
- Objects and records
- Fields and relationships
- How data connects together

But first, take 10 minutes to explore! Click around, open tabs, try the shortcuts. The best way to learn navigation is to... navigate!

**Challenge**: Can you find your way to Setup > Object Manager in under 30 seconds? Give it a try!

Remember: **Every click makes you more confident**. There's nothing you can break by exploring!`,
              interactive: [
                {
                  type: 'click-sequence',
                  data: {
                    title: 'Navigation Speed Challenge',
                    description: 'Complete this navigation sequence as fast as possible!',
                    steps: [
                      {
                        instruction: 'Click the App Launcher (9 dots)',
                        target: 'app-launcher',
                        hint: 'Top-left corner of the screen'
                      },
                      {
                        instruction: 'Search for and select "Sales"',
                        target: 'sales-app',
                        hint: 'Type in the search box that appears'
                      },
                      {
                        instruction: 'Click on the Accounts tab',
                        target: 'accounts-tab',
                        hint: 'Should be in the main navigation bar'
                      },
                      {
                        instruction: 'Change the list view to "All Accounts"',
                        target: 'list-view-selector',
                        hint: 'Click the dropdown next to the current view name'
                      },
                      {
                        instruction: 'Open an account record',
                        target: 'account-record',
                        hint: 'Click on any account name in the list'
                      }
                    ]
                  },
                  validation: {
                    correctSequence: [1, 2, 3, 4, 5]
                  },
                  feedback: 'Excellent! You just navigated like a pro. In a real job, this sequence might be something you do dozens of times per day!'
                }
              ],
              quiz: [
                {
                  id: 'nav-q1',
                  type: 'multiple-choice',
                  question: 'What\'s the fastest way to find any app, object, or record in Salesforce?',
                  options: [
                    'Click through all the tabs',
                    'Use the App Launcher search',
                    'Go to Setup first',
                    'Use the browser search'
                  ],
                  correctAnswer: 'Use the App Launcher search',
                  explanation: 'The App Launcher search (9 dots) is your gateway to everything in Salesforce. It searches across apps, objects, records, and even setup pages!',
                  points: 10,
                  difficulty: 'easy',
                  category: 'navigation'
                },
                {
                  id: 'nav-q2',
                  type: 'multiple-choice',
                  question: 'Which keyboard shortcut opens the universal search and navigation?',
                  options: [
                    'Ctrl/Cmd + F',
                    'Ctrl/Cmd + K',
                    'Ctrl/Cmd + S',
                    'Ctrl/Cmd + N'
                  ],
                  correctAnswer: 'Ctrl/Cmd + K',
                  explanation: 'Ctrl/Cmd + K opens the universal search that lets you quickly navigate anywhere in Salesforce. This shortcut will save you hours over your career!',
                  points: 15,
                  difficulty: 'medium',
                  category: 'shortcuts'
                }
              ]
            }
          },
          {
            id: 'data-model-fundamentals',
            title: 'The Data Model: Where Everything Connects',
            type: 'content',
            duration: '30 min',
            completed: false,
            points: 250,
            order: 3,
            content: {
              text: `# The Salesforce Data Model: Your Foundation for Success! 🏗️

Welcome to the most important lesson in your entire Salesforce journey!

Understanding the data model is like learning the blueprint of a house before you start decorating. Get this right, and everything else becomes 10x easier. Miss this, and you'll spend years confused about why things work the way they do.

## What is a Data Model? 🤔

Think of the data model as the **DNA of your Salesforce org**. It defines:
- What information you can store (Objects)
- How that information is structured (Fields)
- How different pieces of information connect (Relationships)

Real talk: **This is where beginners struggle most**. But you're about to become one of the few who truly "gets it" from the start!

## The Building Blocks: Objects 🧱

### What's an Object?
An **Object** is like a filing cabinet for a specific type of information. Examples:
- **Account Object**: Stores company information
- **Contact Object**: Stores people information
- **Opportunity Object**: Stores sales deal information
- **Case Object**: Stores customer service issues

### Standard vs Custom Objects

**Standard Objects** (Built by Salesforce):
- Account, Contact, Lead, Opportunity, Case
- Come with pre-built fields and functionality
- Updated automatically with new releases
- Can't be deleted (but can be hidden)

**Custom Objects** (Built by you):
- Anything your business needs: Projects, Inventory, Events
- Completely customizable
- Appear with "__c" at the end (Project__c)
- Can be deleted if needed

## The Details: Fields 📝

### What's a Field?
A **Field** is a single piece of information on an object. Like cells in a spreadsheet:
- **Account Name**: "Acme Corporation"
- **Phone**: "(555) 123-4567"
- **Industry**: "Technology"

### Field Types (The Full Arsenal) ⚔️

**Text Fields:**
- **Text**: Short text up to 255 characters
- **Text Area**: Longer text with line breaks
- **Rich Text**: Formatted text with bold, italics, links
- **Long Text Area**: Up to 131,072 characters!

**Number Fields:**
- **Number**: Basic numbers with decimals
- **Currency**: Automatically formatted money
- **Percent**: Shows as percentage (0.25 = 25%)
- **Auto Number**: Automatically incremented (INV-001, INV-002)

**Date & Time:**
- **Date**: Just the date (12/25/2024)
- **Date/Time**: Date and time (12/25/2024 3:30 PM)
- **Time**: Just time (3:30 PM)

**Selection Fields:**
- **Picklist**: Dropdown with predefined options
- **Multi-Select Picklist**: Choose multiple options
- **Checkbox**: True/False, Yes/No

**Relationship Fields:**
- **Lookup**: Links to another record
- **Master-Detail**: Stronger link with inheritance
- **Hierarchy**: Links to same object (like Manager field on User)

**Advanced Fields:**
- **Formula**: Calculated fields (First Name + Last Name)
- **Roll-Up Summary**: Summarizes related records
- **Geolocation**: Latitude and longitude
- **External ID**: Links to external systems

## Relationships: Where the Magic Happens ✨

This is where Salesforce becomes incredibly powerful. Relationships connect your data together.

### 1. Lookup Relationships 🔍

**Think of it like**: A phone number in your contacts
- **Flexible connection** between objects
- **Child can exist without parent**
- **Example**: Contact can exist without Account

**When to use Lookups:**
- Connections that might change
- Optional relationships
- When child records have value on their own

### 2. Master-Detail Relationships 👨‍👩‍👧‍👦

**Think of it like**: Parent-child relationship
- **Strong connection** where child depends on parent
- **Child cannot exist without parent**
- **Example**: Opportunity Lines tied to Opportunity

**When to use Master-Detail:**
- When child records make no sense without parent
- When you want to roll up data to parent
- Strong ownership relationships

### 3. Many-to-Many Relationships 🔄

**Think of it like**: Students and Classes (students take multiple classes, classes have multiple students)

Created using a **Junction Object** with two master-detail relationships.

**Real-world examples:**
- Products and Categories
- Contacts and Skills
- Events and Attendees

## Your Data Model Mindset 🧠

As you learn Salesforce, always ask:
1. **What object would this information live on?**
2. **How does this connect to other objects?**
3. **What reports might people want from this data?**
4. **Who needs access to this information?**

## What's Next? 🚀

Congratulations! You now understand the foundation that everything else builds on. In our next lesson, we'll get hands-on with:

- Creating your first custom fields
- Setting up relationships
- Seeing the data model in action

**Pro tip**: Bookmark the Schema Builder in Setup. It's a visual representation of your entire data model - pure gold for understanding connections!

Remember: **Master the data model, and you master Salesforce**. Everything else is just user interface on top of these core concepts.

Ready to build something amazing? Let's go! 🎉`,
              resources: [
                {
                  title: 'Object Reference Guide',
                  type: 'documentation',
                  url: 'https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/',
                  description: 'Complete reference for all standard objects and fields'
                },
                {
                  title: 'Schema Builder Demo',
                  type: 'video',
                  url: 'https://trailhead.salesforce.com/content/learn/modules/data_modeling/objects_intro',
                  description: 'Visual tool for understanding your data model'
                },
                {
                  title: 'Relationship Types Explained',
                  type: 'article',
                  url: 'https://help.salesforce.com/articleView?id=overview_of_custom_object_relationships.htm',
                  description: 'Deep dive into when to use each relationship type'
                }
              ]
            }
          }
        ],
        quiz: {
          id: 'sf-fundamentals-quiz',
          title: 'Salesforce Fundamentals Mastery Quiz',
          questions: [
            {
              id: 'fund-q1',
              type: 'multiple-choice',
              question: 'What is the main advantage of Salesforce\'s multi-tenant architecture?',
              options: [
                'Each company gets their own server',
                'Shared infrastructure with isolated data',
                'Better customization options',
                'Faster internet speeds'
              ],
              correctAnswer: 'Shared infrastructure with isolated data',
              explanation: 'Multi-tenant architecture allows Salesforce to serve millions of customers cost-effectively while keeping each company\'s data completely separate and secure.',
              points: 15,
              difficulty: 'medium',
              category: 'architecture'
            },
            {
              id: 'fund-q2',
              type: 'multiple-choice',
              question: 'Which field type would you use to store a calculation like "Total = Price × Quantity"?',
              options: [
                'Number',
                'Currency',
                'Formula',
                'Roll-up Summary'
              ],
              correctAnswer: 'Formula',
              explanation: 'Formula fields automatically calculate values based on other fields in the same record. Perfect for calculations like totals, concatenations, or conditional logic.',
              points: 20,
              difficulty: 'medium',
              category: 'data-model'
            },
            {
              id: 'fund-q3',
              type: 'multiple-choice',
              question: 'When should you use a Master-Detail relationship instead of a Lookup?',
              options: [
                'When the relationship is optional',
                'When child records cannot exist without the parent',
                'When you want more flexibility',
                'When connecting to external systems'
              ],
              correctAnswer: 'When child records cannot exist without the parent',
              explanation: 'Master-Detail relationships create a strong parent-child bond where the child record depends on the parent. Perfect for Order → Order Lines or Account → Custom Project records.',
              points: 25,
              difficulty: 'hard',
              category: 'relationships'
            }
          ],
          passingScore: 80,
          attempts: 0,
          maxAttempts: 3
        }
      },
      {
        id: 'data-model-mastery',
        title: 'Data Model Mastery',
        description: 'Master objects, fields, relationships, and data architecture like a pro',
        duration: '1.5 weeks',
        completed: false,
        locked: true,
        order: 2,
        lessons: [
          {
            id: 'hands-on-data-model',
            title: 'Hands-On: Building Your First Data Model',
            type: 'interactive',
            duration: '35 min',
            completed: false,
            points: 300,
            order: 1,
            content: {
              text: `# Time to Build Something Real! 🛠️

Welcome back, data architect in training!

You've learned the theory - now let's get our hands dirty building an actual data model. By the end of this lesson, you'll have created your first custom objects, fields, and relationships. Ready to become dangerous? Let's go!

## Today's Mission: Build a Project Management System 🎯

We're going to build a simple project management system for a consulting company. This will teach you:
- Creating custom objects
- Adding different field types
- Setting up relationships
- Understanding data flow

### The Business Requirements 📋

**Scenario**: "Acme Consulting" needs to track:
- **Projects** they're working on
- **Tasks** within each project
- **Team Members** assigned to tasks
- **Time entries** for billing

This is PERFECT for learning because it uses all the relationship types!

## Step 1: Creating Your First Custom Object 🏗️

### Projects Object

**What it stores**: Information about each consulting project
- Project Name
- Client Name
- Start/End Dates
- Budget
- Status
- Description

**In Salesforce Setup**:
1. Go to Setup → Object Manager
2. Click "Create" → "Custom Object"
3. Object Label: "Project"
4. Plural Label: "Projects"
5. Record Name: "Project Name" (Text)

**Pro Tips**:
- Always use meaningful names
- The API Name will be "Project__c"
- Enable Activities (for tasks/events)
- Enable Reports
- Enable Search

### Key Fields to Add:

**Text Fields**:
- Client Name (Text, 80 characters)
- Project Manager (Text, 50 characters)
- Status (Picklist: Planning, Active, On Hold, Completed, Cancelled)

**Date Fields**:
- Start Date (Date)
- End Date (Date)
- Contract Signed Date (Date)

**Number/Currency Fields**:
- Budget Amount (Currency)
- Hours Estimated (Number)
- Hours Actual (Number, formula field later)

**Long Text**:
- Project Description (Long Text Area)
- Success Criteria (Rich Text Area)

## Step 2: Creating Related Objects 🔗

### Project Tasks Object

**Purpose**: Break projects into manageable tasks

**Key Fields**:
- Task Name (Text)
- Description (Long Text)
- Assigned To (Lookup to User)
- Due Date (Date)
- Status (Picklist: Not Started, In Progress, Completed, Blocked)
- Priority (Picklist: Low, Medium, High, Critical)
- Estimated Hours (Number)
- Actual Hours (Number)

**THE CRITICAL RELATIONSHIP**:
- **Project** (Master-Detail to Project__c)
- Why Master-Detail? Tasks don't exist without projects!

### Time Entry Object

**Purpose**: Track billable hours

**Key Fields**:
- Date (Date)
- Hours (Number, 2 decimals)
- Description (Text Area)
- Billable (Checkbox)
- Rate (Currency)

**RELATIONSHIPS**:
- **Project Task** (Master-Detail to Project_Task__c)
- **User** (Lookup to User object)

## Step 3: The Magic of Relationships ✨

### Relationship Hierarchy:
Project (Parent) → Project Tasks (Children) → Time Entries (Grand-children)

### Why This Structure Works:
1. **Projects can have many tasks** (One-to-Many)
2. **Tasks can have many time entries** (One-to-Many)
3. **Users can work on many tasks** (Many-to-Many via lookups)

### Data Flow Example:
- Project: "Website Redesign for ABC Corp"
  - Task: "Design Homepage Mockup"
    - Time Entry: "3 hours designing wireframes"
    - Time Entry: "2 hours client feedback review"
  - Task: "Develop Contact Form"
    - Time Entry: "4 hours coding"

## Step 4: Advanced Field Magic 🎩

### Formula Fields (Calculated automatically):

**On Project Object**:
- **Days Remaining**: \`End_Date__c - TODAY()\`
- **Budget Utilization**: \`Hours_Actual__c / Hours_Estimated__c\`
- **Project Health**:
\`\`\`
IF(Days_Remaining__c < 0, "🔴 Overdue",
IF(Budget_Utilization__c > 1, "🟡 Over Budget",
"🟢 On Track"))
\`\`\`

**On Task Object**:
- **Days Overdue**: \`IF(Due_Date__c < TODAY() && Status__c != "Completed", TODAY() - Due_Date__c, 0)\`

### Roll-Up Summary Fields:

**On Project Object** (rolling up from tasks):
- **Total Tasks**: COUNT of related tasks
- **Completed Tasks**: COUNT of completed tasks
- **Total Estimated Hours**: SUM of estimated hours
- **Total Actual Hours**: SUM of actual hours
- **Total Billable Amount**: SUM of billable time entries

## Step 5: Real-World Pro Tips 💡

### Naming Conventions:
- **Objects**: Singular, descriptive (Project, not Projects)
- **Fields**: Clear, consistent (Start_Date__c, not SD__c)
- **Picklist Values**: Standardized across objects

### Performance Considerations:
- **Master-Detail vs Lookup**: Use Master-Detail when child can't exist without parent
- **Required Fields**: Only make truly essential fields required
- **Field History Tracking**: Enable on critical fields for auditing

### Security Planning:
- **Object Permissions**: Who can create/edit projects?
- **Field-Level Security**: Hide budget from junior team members?
- **Sharing Rules**: Can users see all projects or just their own?

## Your Practice Challenge 🎯

Build this exact data model in a developer org:
1. Create the three custom objects
2. Add all the suggested fields
3. Set up the relationships
4. Create at least one record of each type
5. Test that the relationships work

**Success Criteria**:
- You can create a project
- Add tasks to the project
- Log time entries against tasks
- See roll-up totals on the project

## What's Next? 🚀

In our next lesson, we'll dive into:
- Reports and dashboards from this data
- Automation (workflow rules, process builder)
- Page layouts and user experience
- Data import/export strategies

**Remember**: Every Salesforce expert started by building their first custom object. You're now officially dangerous with data models!

Want to see something cool? Check out the Schema Builder (Setup → Schema Builder) and see your data model visually. It's like seeing the blueprints of what you just built! 🏗️`,
              interactive: [
                {
                  type: 'click-sequence',
                  data: {
                    title: 'Build Your Project Management Data Model',
                    description: 'Follow these steps to create your first complete data model',
                    steps: [
                      {
                        instruction: 'Create Project Custom Object',
                        details: 'Setup → Object Manager → Create → Custom Object',
                        validation: 'Object appears in App Launcher'
                      },
                      {
                        instruction: 'Add Project Fields',
                        details: 'Client Name, Start Date, End Date, Budget Amount, Status picklist',
                        validation: 'All fields visible on record page'
                      },
                      {
                        instruction: 'Create Project Task Object',
                        details: 'Custom object with Master-Detail to Project',
                        validation: 'Related list appears on Project records'
                      },
                      {
                        instruction: 'Add Task Fields',
                        details: 'Task Name, Due Date, Status, Assigned To lookup',
                        validation: 'Task records can be created'
                      },
                      {
                        instruction: 'Create Time Entry Object',
                        details: 'Master-Detail to Project Task, with Hours and Date fields',
                        validation: 'Time tracking works end-to-end'
                      },
                      {
                        instruction: 'Test the Complete Flow',
                        details: 'Create Project → Add Tasks → Log Time Entries',
                        validation: 'All relationships working properly'
                      }
                    ]
                  },
                  validation: 'Complete data model created successfully',
                  feedback: 'Great job! You have built a complete project management data model with proper relationships.'
                }
              ]
            }
          },
          {
            id: 'advanced-relationships',
            title: 'Advanced Relationships & Data Architecture',
            type: 'content',
            duration: '25 min',
            completed: false,
            points: 250,
            order: 2,
            content: {
              text: `# Mastering Advanced Relationships 🕸️

Time to level up! You've built basic relationships - now let's explore the advanced patterns that separate beginners from pros.

## Junction Objects: The Many-to-Many Secret 🔄

### The Problem:
- Students can take multiple courses
- Courses can have multiple students
- Standard relationships can't handle this!

### The Solution: Junction Objects

A junction object sits between two objects, creating a bridge:

**Student ← (Enrollment) → Course**

The Enrollment object has:
- Master-Detail to Student
- Master-Detail to Course
- Additional fields: Grade, Enrollment Date, Status

### Real Salesforce Examples:
- **OpportunityContactRole**: Links Opportunities ↔ Contacts
- **AccountContactRelation**: Links Accounts ↔ Contacts
- **CampaignMember**: Links Campaigns ↔ Leads/Contacts

## Hierarchical Relationships 🌳

### Self-Referencing Lookups

**User Object Example**:
- Manager field (Lookup to User)
- Creates org chart hierarchy
- Reports can show full management chain

**Account Object Example**:
- Parent Account field
- Track subsidiary companies
- Roll-up revenue across corporate family

### Building Hierarchies:

**Custom Example: Project Hierarchy**
- Enterprise Project
  - Phase 1: Discovery
    - Requirement Gathering
    - Stakeholder Interviews
  - Phase 2: Design
    - Architecture Design
    - UI/UX Design
  - Phase 3: Implementation

## Cross-Object Formula Fields 🧮

### Spanning Relationships in Formulas:

**On Opportunity**:
- Account.Industry (Account's industry)
- Account.Owner.Name (Account owner's name)
- Account.Parent.Name (Parent account name)

**On Contact**:
- Account.AnnualRevenue (Account's revenue)
- Account.Owner.Email (Account owner's email)

**On Custom Objects**:
- Project__r.Client_Name__c (Project's client)
- Project__r.Owner.Phone (Project owner's phone)

### Advanced Formula Examples:

**Task Priority Based on Project**:
IF(Project__r.Priority__c = "Critical", "High", IF(Project__r.Days_Remaining__c < 7, "Medium", "Low"))

**Dynamic Status Messages**:
"Project: " & Project__r.Name & " (" & TEXT(Project__r.Status__c) & ")" & " - Due: " & TEXT(Project__r.End_Date__c)

## External Relationships 🌐

### External Objects:
- Connect to external databases
- Real-time data from other systems
- No data storage in Salesforce

### External IDs:
- Unique identifiers for external systems
- Enable upsert operations
- Critical for integrations

**Example**: Customer ID from ERP system
- External ID field on Account
- Enables seamless data sync
- Prevents duplicate records

## Relationship Performance Optimization ⚡

### SOQL Query Optimization:

**Good**:
SELECT Name, Account.Name, Account.Industry FROM Contact

**Bad**:
SELECT Name, (SELECT Name FROM Opportunities) FROM Account

### Relationship Limits:
- **Maximum**: 25 relationships per object query
- **Governor Limits**: 50,000 records per transaction
- **Best Practice**: Query only needed fields

### Index Optimization:
- External ID fields are automatically indexed
- Custom indexes for frequently queried fields
- Improves report and list view performance

## Data Architecture Patterns 📐

### Master Data Management:

**Single Source of Truth**:
- Account as master for company data
- Contact linked to Account
- All related objects reference Account

**Data Consistency**:
- Validation rules enforce standards
- Duplicate rules prevent bad data
- Required fields ensure completeness

### Audit Trail Architecture:

**Track Changes**:
- Field History Tracking (20 fields max)
- Custom audit objects for detailed tracking
- Integration with external audit systems

**Example Audit Object**:
\`\`\`
Data_Change_Log__c
- Object_Type__c (Text)
- Record_ID__c (Text)
- Field_Name__c (Text)
- Old_Value__c (Text)
- New_Value__c (Text)
- Changed_By__c (Lookup to User)
- Change_Date__c (DateTime)
\`\`\`

## Common Anti-Patterns to Avoid ❌

### 1. Over-Normalization
**Problem**: Too many small objects
**Solution**: Consolidate related data

### 2. Under-Normalization
**Problem**: Repeating data across objects
**Solution**: Create proper relationships

### 3. Wrong Relationship Types
**Problem**: Using Lookup when Master-Detail needed
**Impact**: Lost roll-up summaries, orphaned records

### 4. Deep Relationship Chains
**Problem**: Object1 → Object2 → Object3 → Object4
**Solution**: Consider direct relationships

## Your Advanced Challenge 🎯

Design and build a **Library Management System**:

**Requirements**:
- Books can have multiple authors (Many-to-Many)
- Members can borrow multiple books
- Track loan history and due dates
- Handle renewals and late fees
- Support book reservations

**Objects Needed**:
1. **Book** (Title, ISBN, Genre, Publication Date)
2. **Author** (Name, Biography, Birth Date)
3. **Book_Author** (Junction: Book ↔ Author)
4. **Member** (Name, Email, Phone, Join Date)
5. **Loan** (Book, Member, Due Date, Return Date, Late Fee)
6. **Reservation** (Book, Member, Reserve Date, Status)

**Advanced Features**:
- Formula: Days Overdue
- Roll-up: Total Books by Author
- Hierarchy: Book Series relationships
- Validation: Can't borrow if late fees unpaid

## Pro Tips for Real Projects 💼

### 1. Start with Standard Objects
- Leverage existing functionality
- Extend rather than recreate
- Understand governor limits

### 2. Plan for Scale
- Consider data volumes
- Design for performance
- Plan archive strategies

### 3. Document Relationships
- Create entity relationship diagrams
- Document business rules
- Maintain data dictionary

### 4. Test Edge Cases
- What happens when parent is deleted?
- How do validation rules interact?
- Test with large data volumes

## What's Coming Next? 🚀

You now understand advanced data relationships! Next up:
- Security model (OWD, Roles, Profiles)
- Process automation (Workflow, Process Builder, Flow)
- Reporting and analytics
- Integration patterns

**Remember**: Great Salesforce architects think in relationships. You're now thinking like an architect! 🏗️`,
              resources: [
                {
                  title: 'Relationship Design Best Practices',
                  type: 'documentation',
                  url: 'https://developer.salesforce.com/docs/atlas.en-us.fundamentals.meta/fundamentals/adg_preface.htm',
                  description: 'Official guide to data modeling best practices'
                },
                {
                  title: 'Schema Builder Tutorial',
                  type: 'trailhead',
                  url: 'https://trailhead.salesforce.com/content/learn/modules/data_modeling',
                  description: 'Hands-on practice with visual data modeling'
                }
              ]
            }
          }
        ],
        quiz: {
          id: 'data-model-mastery-quiz',
          title: 'Data Model Mastery Quiz',
          questions: [
            {
              id: 'dm-q1',
              type: 'multiple-choice',
              question: 'You need to track which students are enrolled in which courses, including their grade and enrollment date. What\'s the best approach?',
              options: [
                'Lookup field from Student to Course',
                'Master-Detail from Course to Student',
                'Junction object with Master-Detail to both',
                'Many-to-Many relationship'
              ],
              correctAnswer: 'Junction object with Master-Detail to both',
              explanation: 'A junction object (like Student_Enrollment__c) with Master-Detail relationships to both Student and Course is perfect for Many-to-Many relationships with additional fields like grade and enrollment date.',
              points: 25,
              difficulty: 'hard',
              category: 'relationships'
            },
            {
              id: 'dm-q2',
              type: 'multiple-choice',
              question: 'What happens to child records when you delete a parent record in a Master-Detail relationship?',
              options: [
                'Child records remain but lose the relationship',
                'Child records are automatically deleted',
                'Child records prevent parent deletion',
                'Child records become orphaned'
              ],
              correctAnswer: 'Child records are automatically deleted',
              explanation: 'In Master-Detail relationships, deleting the parent record automatically deletes all related child records. This maintains data integrity but requires careful consideration.',
              points: 20,
              difficulty: 'medium',
              category: 'relationships'
            }
          ],
          passingScore: 85,
          attempts: 0,
          maxAttempts: 3
        }
      }
    ]
  },
  {
    id: 'admin',
    title: 'Salesforce Administrator',
    description: 'Master user management, security, automation, and become a certified Salesforce Administrator.',
    level: 'Administrator',
    duration: '8-12 weeks',
    prerequisites: ['foundation'],
    certification: 'Salesforce Certified Administrator',
    color: 'bg-gradient-to-br from-blue-400 to-blue-600',
    icon: '⚙️',
    modules: [
      {
        id: 'user-security-management',
        title: 'User Management & Security Mastery',
        description: 'Master users, profiles, permission sets, and security like a pro admin',
        duration: '2 weeks',
        completed: false,
        locked: false,
        order: 1,
        lessons: [
          {
            id: 'user-management-fundamentals',
            title: 'User Management: From Zero to Hero',
            type: 'content',
            duration: '40 min',
            completed: false,
            points: 350,
            order: 1,
            content: {
              text: `# Welcome to Admin Bootcamp! 👨‍💼

Hey there, future Salesforce Administrator superstar!

You've mastered the fundamentals, and now it's time to become the person everyone turns to when they need Salesforce magic to happen. User management and security is where you'll spend 40% of your admin time, so let's make you absolutely deadly at it!

## The Admin Mindset 🧠

Before we dive into the technical stuff, let's talk about the admin mindset:

**You are the Gatekeeper** 🗝️
- You control who gets in
- You decide what they can see and do
- You protect the organization's data
- You balance security with usability

**You are the Problem Solver** 🔧
- "Can you make it so sales reps only see their own accounts?"
- "How do we let managers approve expense reports?"
- "Why can't I edit this field anymore?"

**You are the Efficiency Expert** ⚡
- Automate repetitive tasks
- Streamline business processes
- Make users more productive
- Reduce data entry errors

## User Management Deep Dive 👥

### The User Lifecycle

**1. Planning Phase** 📋
- How many users do we need?
- What roles will they have?
- What access do they need?
- How will they be organized?

**2. Creation Phase** ➕
- Create user records
- Assign licenses
- Set up profiles and permission sets
- Configure role hierarchy

**3. Maintenance Phase** 🔄
- Role changes and promotions
- Department transfers
- Access adjustments
- License management

**4. Deactivation Phase** ⏸️
- Employee departures
- Temporary deactivations
- Data reassignment
- License reclaim

### User Fields That Matter Most:

**Identity Fields**:
- Username (must be unique across ALL Salesforce orgs!)
- Email (usually same as username)
- First Name, Last Name
- Alias (short identifier)

**Access Control Fields**:
- Profile (determines base permissions)
- Role (determines data visibility)
- Active (controls login ability)
- User License (determines feature access)

**Functional Fields**:
- Manager (for approval processes)
- Default Currency (for multi-currency orgs)
- Time Zone (critical for global teams)
- Language (user interface language)

### Pro Tips for User Setup:

**Username Strategy**:
- Use email format: john.smith@company.com
- Consider acquisitions: john.smith@subsidiary.company.com
- Never reuse usernames from deactivated users

**Password Policies**:
- Minimum 8 characters (set higher for security)
- Require complexity (upper, lower, numbers, symbols)
- Password expiration (90 days is common)
- Login IP restrictions for sensitive roles

## The Security Model: Your Foundation 🏛️

### Organization-Wide Defaults (OWD) - The Base Layer

Think of OWD as the default security level for your house:

**Private** 🔒
- Most restrictive
- Users see only records they own
- Perfect for sensitive data (HR, Finance)

**Public Read Only** 👀
- Users can see all records
- Can't edit records they don't own
- Good for reference data

**Public Read/Write** ✍️
- Users can see and edit all records
- Use sparingly (usually just for Activities)
- High collaboration, lower security

**Controlled by Parent** 👨‍👩‍👧‍👦
- Inherits security from master record
- Only available for detail objects
- Maintains consistency with master

### Role Hierarchy - The Org Chart That Controls Data

**Key Principles**:
- Higher roles can see lower roles' data
- Managers automatically see their team's records
- Don't mirror exact organizational structure
- Keep it simple (5-7 levels max)

**Example Hierarchy**:
\`\`\`
CEO
├── VP Sales
│   ├── Sales Director West
│   │   ├── Account Manager West 1
│   │   └── Account Manager West 2
│   └── Sales Director East
│       ├── Account Manager East 1
│       └── Account Manager East 2
└── VP Marketing
    ├── Marketing Manager
    └── Marketing Specialist
\`\`\`

### Profiles - The Job Descriptions 👔

**What Profiles Control**:
- Object permissions (Create, Read, Edit, Delete)
- Field-level security (which fields are visible/editable)
- Tab visibility (what appears in the app)
- App access (which Lightning apps they can use)
- System permissions (export data, manage users, etc.)

**Standard Profiles You Should Know**:
- **System Administrator**: Can do everything
- **Standard User**: Basic CRM access
- **Sales User**: Extended sales features
- **Marketing User**: Campaign and lead management
- **Contract Manager**: Contract lifecycle management
- **Read Only**: View-only access

**Custom Profile Strategy**:
- Start with a standard profile
- Clone and modify as needed
- Use descriptive names: "Sales Rep - Enterprise"
- Document what each profile is for

### Permission Sets - The Add-On Powers 🎯

**Why Permission Sets Rock**:
- Add permissions without changing profiles
- Assign to individual users
- Perfect for temporary access
- Easier to manage than multiple profiles

**Common Permission Set Examples**:
- "Data Export Access" (for analysts)
- "Mass Email Permissions" (for marketers)
- "API Access" (for integration users)
- "Advanced Report Builder" (for power users)

**Permission Set Groups** (Advanced):
- Bundle related permission sets
- Assign all at once
- Perfect for role-based access

## Real-World Security Scenarios 🎭

### Scenario 1: Sales Organization
**Requirements**:
- Sales reps see only their accounts/opportunities
- Managers see their team's records
- Directors see multiple teams
- VP sees everything in sales

**Solution**:
- OWD: Private for Accounts/Opportunities
- Role hierarchy mirrors sales structure
- Profile: "Sales User" for reps
- Permission sets for special access

### Scenario 2: Customer Support
**Requirements**:
- Support agents see all cases
- Cases are assigned via queues
- Managers can reassign cases
- Agents can't delete cases

**Solution**:
- OWD: Public Read/Write for Cases
- Queues for case assignment
- Profile restrictions on delete
- Sharing rules for escalated cases

### Scenario 3: Multi-Company Environment
**Requirements**:
- Each subsidiary sees only their data
- Corporate headquarters sees everything
- Some shared reference data
- Strict data isolation

**Solution**:
- OWD: Private for most objects
- Criteria-based sharing rules
- Record types for company identification
- Permission sets for cross-company access

## Advanced Security Features 🔐

### Field-Level Security
- Hide sensitive fields (SSN, salary)
- Make fields read-only for certain profiles
- Use in combination with page layouts

### IP Restrictions
- Limit login locations by profile
- Corporate network only for admins
- Public access for mobile users

### Login Hours
- Restrict access by time of day
- Business hours only for contractors
- 24/7 for critical support roles

### Two-Factor Authentication
- Required for admins and high-privilege users
- Salesforce Authenticator app
- SMS backup options

## Your Admin Challenge 🎯

Set up a complete security model for "Acme Corp":

**Requirements**:
- 3 divisions: Sales, Marketing, Support
- Each division head sees their data + summary of others
- Reps/specialists see only their records
- Shared product catalog (all can view, only marketing can edit)
- Executive team sees everything

**Deliverables**:
1. OWD settings for each object
2. Role hierarchy design
3. Profile/permission set strategy
4. Sharing rules documentation
5. Test plan with different user scenarios

## Pro Admin Secrets 🤫

### 1. Use Salesforce Optimizer
- Free tool in Setup
- Identifies unused permissions
- Suggests profile consolidation
- Must-use for large orgs

### 2. Regular Access Reviews
- Quarterly permission audits
- Document who has what access
- Remove unused permission sets
- Clean up inactive users

### 3. Delegate Administration
- Use delegated administration groups
- Let managers handle basic user tasks
- Reduces admin workload
- Improves user experience

### 4. Test Before You Deploy
- Use sandbox for security changes
- Test with different user permissions
- Validate with business users
- Document rollback procedures

## What's Next in Your Admin Journey? 🚀

Coming up in our next modules:
- **Process Automation**: Workflow rules, Process Builder, Flow
- **Data Management**: Import, export, data quality
- **Reports & Dashboards**: Business intelligence mastery
- **App Customization**: Page layouts, record types, custom apps

**Remember**: Great admins don't just manage users - they empower users to do their best work while keeping data secure. You're becoming that admin! 💪`,
              resources: [
                {
                  title: 'User Management Trailhead',
                  type: 'trailhead',
                  url: 'https://trailhead.salesforce.com/content/learn/modules/lex_migration_user_management',
                  description: 'Hands-on user management practice'
                },
                {
                  title: 'Security Implementation Guide',
                  type: 'documentation',
                  url: 'https://help.salesforce.com/articleView?id=security_overview.htm',
                  description: 'Complete security model documentation'
                }
              ]
            }
          }
        ],
        quiz: {
          id: 'user-security-quiz',
          title: 'User Management & Security Quiz',
          questions: [
            {
              id: 'us-q1',
              type: 'multiple-choice',
              question: 'What happens when you set Organization-Wide Default to Private for Accounts?',
              options: [
                'All users can see all accounts',
                'Users can only see accounts they own',
                'Managers can see their team\'s accounts via role hierarchy',
                'Both B and C are correct'
              ],
              correctAnswer: 'Both B and C are correct',
              explanation: 'Private OWD means users see only records they own, but role hierarchy allows managers to see their subordinates\' records automatically.',
              points: 20,
              difficulty: 'medium',
              category: 'security'
            }
          ],
          passingScore: 85,
          attempts: 0,
          maxAttempts: 3
        }
      },
      {
        id: 'process-automation',
        title: 'Process Automation Mastery',
        description: 'Master Workflow Rules, Process Builder, Flow, and advanced automation',
        duration: '2.5 weeks',
        completed: false,
        locked: true,
        order: 2,
        lessons: [
          {
            id: 'workflow-fundamentals',
            title: 'Workflow Rules: Your First Automation Tool',
            type: 'content',
            duration: '35 min',
            completed: false,
            points: 300,
            order: 1,
            content: {
              text: `# Welcome to Automation Heaven! ⚡

Ready to become a Salesforce automation wizard? You're about to learn the tools that will make you the hero of your organization!

## Why Automation Matters 🎯

**The Problem**: Manual processes are time-consuming, error-prone, inconsistent, and hard to scale.

**The Solution**: Salesforce automation tools save hundreds of hours per month, ensure consistency, and let humans focus on high-value work.

## Workflow Rules: Your Foundation 🏗️

**What are Workflow Rules?** Think of them as "If This, Then That" statements:
- **IF** an opportunity reaches "Closed Won"
- **THEN** send a congratulations email to the team

### When to Use Workflow Rules:
✅ Simple field updates
✅ Email alerts
✅ Task creation
✅ Outbound messages to external systems

## Real-World Examples 💼

### Lead Nurturing Workflow
**Trigger**: New lead created from website
**Actions**: Send welcome email, create follow-up task, update lead source

### Opportunity Escalation
**Trigger**: High-value opportunity in negotiation
**Actions**: Alert VP, create manager review task, mark as high-value deal

### Best Practices ⭐
- Use descriptive names
- Test thoroughly in sandbox
- Monitor performance impact
- Document business logic

**Remember**: Workflow rules are your automation foundation!`,
              resources: [
                {
                  title: 'Workflow Rules Documentation',
                  type: 'documentation',
                  url: 'https://help.salesforce.com/articleView?id=workflow_rules_new.htm',
                  description: 'Complete guide to workflow rules and actions'
                }
              ]
            }
          },
          {
            id: 'process-builder-advanced',
            title: 'Process Builder: Visual Automation Powerhouse',
            type: 'interactive',
            duration: '40 min',
            completed: false,
            points: 350,
            order: 2,
            content: {
              text: `# Process Builder: Where Automation Gets Visual! 🎨

If Workflow Rules are like riding a bicycle, Process Builder is like driving a sports car!

## Why Process Builder Rocks 🚀

**Everything Workflow Rules Do, Plus**:
✅ Create new records (any object!)
✅ Update multiple objects in one process
✅ Complex branching logic
✅ Visual flow chart interface
✅ Invoke other processes and flows

## Building Your First Process 🛠️

### Customer Onboarding Example
**Goal**: When account becomes customer, automatically:
1. Create onboarding case
2. Post to Chatter
3. Update account fields
4. Schedule follow-up task

### Advanced Patterns 💡

**Multi-Object Updates**: Update account, contact, and custom objects in one process
**Conditional Branching**: Different actions based on deal size or customer type
**Scheduled Actions**: Contract renewals, follow-ups, reminders

### Best Practices ⭐
- Minimize process executions with specific criteria
- Test with large data volumes
- Use clear, descriptive names
- Plan for governor limits

**Pro Tip**: Salesforce is moving to Flow Builder - start planning your migration strategy!`,
              interactive: [
                {
                  type: 'click-sequence',
                  data: {
                    title: 'Build Customer Onboarding Process',
                    description: 'Create an automated customer onboarding workflow',
                    steps: [
                      {
                        instruction: 'Navigate to Setup → Process Builder',
                        hint: 'Use Quick Find to search for Process Builder'
                      },
                      {
                        instruction: 'Click "New Process"',
                        hint: 'Start with a fresh process definition'
                      },
                      {
                        instruction: 'Select "A record changes" trigger',
                        hint: 'This covers both create and edit scenarios'
                      },
                      {
                        instruction: 'Add criteria: Account Type = Customer',
                        hint: 'Only trigger when account becomes customer'
                      },
                      {
                        instruction: 'Add Create Record action for Case',
                        hint: 'Automate onboarding case creation'
                      }
                    ]
                  },
                  validation: {
                    correctSequence: [1, 2, 3, 4, 5]
                  },
                  feedback: 'Excellent! You\'ve built your first automated process!'
                }
              ],
              resources: [
                {
                  title: 'Process Builder Guide',
                  type: 'documentation',
                  url: 'https://help.salesforce.com/articleView?id=process_overview.htm',
                  description: 'Complete Process Builder documentation'
                }
              ]
            }
          }
        ],
        quiz: {
          id: 'process-automation-quiz',
          title: 'Process Automation Mastery Quiz',
          questions: [
            {
              id: 'auto-q1',
              type: 'multiple-choice',
              question: 'Which automation tool can create new records when triggered?',
              options: ['Workflow Rules', 'Process Builder', 'Validation Rules', 'Formula Fields'],
              correctAnswer: 'Process Builder',
              explanation: 'Process Builder can create new records, while Workflow Rules are limited to field updates, email alerts, tasks, and outbound messages.',
              points: 20,
              difficulty: 'medium',
              category: 'automation'
            },
            {
              id: 'auto-q2',
              type: 'multiple-choice',
              question: 'When should you use time-dependent workflow actions?',
              options: [
                'For immediate processing',
                'To delay actions until specific times',
                'When updating multiple objects',
                'When creating new records'
              ],
              correctAnswer: 'To delay actions until specific times',
              explanation: 'Time-dependent workflow actions are perfect for scheduled reminders, follow-ups, and date-based automations.',
              points: 25,
              difficulty: 'hard',
              category: 'automation'
            }
          ],
          passingScore: 85,
          attempts: 0,
          maxAttempts: 3
        }
      },
      {
        id: 'data-management',
        title: 'Data Management & Quality',
        description: 'Master data import, export, cleaning, and quality management',
        duration: '2 weeks',
        completed: false,
        locked: true,
        order: 3,
        lessons: [
          {
            id: 'data-import-mastery',
            title: 'Data Import & Export: Gateway to Clean Data',
            type: 'content',
            duration: '40 min',
            completed: false,
            points: 350,
            order: 1,
            content: {
              text: `# Data Management: Your Gateway to Clean, Reliable Data! 📊

As a Salesforce Administrator, you're the guardian of data quality. Master data management and become the hero who keeps the business running smoothly!

## Why Data Management Matters 💎

**The Reality**:
- 90% of business decisions rely on Salesforce data
- Poor data quality costs companies $15M annually (average)
- Bad data multiplies exponentially over time

**Your Mission**: Ensure accuracy, maintain consistency, enable reliable reporting

## Data Import Tools Arsenal 🛠️

### 1. Data Import Wizard (The Beginner's Friend)
**Best For**: Simple imports, up to 50,000 records
**Supports**: Accounts, Contacts, Leads, Custom Objects
**Strengths**: User-friendly, built-in duplicate detection, field mapping

### 2. Data Loader (The Power User's Choice)
**Best For**: Large imports, complex relationships, automation
**Supports**: All objects, up to 5M records per operation
**Strengths**: Handles any object, bulk operations, command-line automation

### 3. Einstein Data Insights (The Smart Assistant)
**Best For**: Data quality monitoring and recommendations
**Features**: AI-powered recommendations, automated monitoring, data health scoring

## Data Quality Management 🎯

### Duplicate Management
**Duplicate Rules**: Prevent duplicates at creation with real-time blocking
**Duplicate Record Sets**: Identify and merge existing duplicates
**Matching Criteria**: Name, email, phone (exact or fuzzy matching)

### Validation Rules
**Purpose**: Ensure data quality at entry point

**Common Patterns**:
- Email format validation
- Phone number formatting
- Required field combinations
- Business logic enforcement

### Data Standardization
**Best Practices**:
- Standardize state/country codes
- Consistent phone formats: (555) 123-4567
- Proper case name capitalization
- Lowercase email domains

## Advanced Techniques 🚀

### External IDs
**Purpose**: Connect Salesforce with external systems
**Best Practice**: Use meaningful, stable identifiers (not Salesforce IDs)

### Data Archiving Strategy
**When to Archive**: Old inactive records, completed projects, performance optimization
**Methods**: Export and delete, Big Objects, external storage, record flagging

### Migration Projects
**Phases**: Discovery → Design → Preparation → Execution → Optimization
**Success Factors**: Data cleansing, test environment, validation strategy

## Your Challenge 🎯
Build a complete data management process for a company merger requiring 50,000 accounts and 200,000 contacts.

**Remember**: Great administrators ensure data empowers great decisions!`,
              resources: [
                {
                  title: 'Data Import Guide',
                  type: 'documentation',
                  url: 'https://help.salesforce.com/articleView?id=importing.htm',
                  description: 'Complete guide to data import tools and best practices'
                },
                {
                  title: 'Data Quality Trailhead',
                  type: 'trailhead',
                  url: 'https://trailhead.salesforce.com/content/learn/trails/data_quality',
                  description: 'Hands-on data quality management practice'
                }
              ]
            }
          }
        ],
        quiz: {
          id: 'data-management-quiz',
          title: 'Data Management & Quality Quiz',
          questions: [
            {
              id: 'data-q1',
              type: 'multiple-choice',
              question: 'Which tool should you use to import 100,000 records with complex relationships?',
              options: ['Data Import Wizard', 'Data Loader', 'Manual Entry', 'Excel Import'],
              correctAnswer: 'Data Loader',
              explanation: 'Data Loader is designed for large volume imports and can handle complex relationships through external IDs.',
              points: 20,
              difficulty: 'medium',
              category: 'data-management'
            },
            {
              id: 'data-q2',
              type: 'multiple-choice',
              question: 'What is the primary benefit of using External IDs?',
              options: [
                'Faster query performance',
                'Better security',
                'Integration with external systems',
                'Reduced storage usage'
              ],
              correctAnswer: 'Integration with external systems',
              explanation: 'External IDs enable upsert operations and provide stable references for integrating Salesforce with external systems.',
              points: 25,
              difficulty: 'hard',
              category: 'integration'
            }
          ],
          passingScore: 85,
          attempts: 0,
          maxAttempts: 3
        }
      },
      {
        id: 'reports-dashboards',
        title: 'Reports & Dashboards Mastery',
        description: 'Create powerful reports, dashboards, and analytics for business insights',
        duration: '2.5 weeks',
        completed: false,
        locked: true,
        order: 4,
        lessons: [
          {
            id: 'report-building-mastery',
            title: 'Report Building: From Data to Insights',
            type: 'content',
            duration: '45 min',
            completed: false,
            points: 400,
            order: 1,
            content: {
              text: `# Reports & Dashboards: Transform Data into Business Gold! 📈

Welcome to Salesforce analytics! As an admin, you turn raw data into actionable insights that drive million-dollar business decisions.

## Why Reports Matter to Business 💰

**The Business Reality**:
- CEOs make decisions based on your reports
- Sales teams live by pipeline reports
- Marketing measures ROI through campaign reports
- Support tracks performance with case reports

**Your Superpower**: Transform data into stories that drive action!

## Report Types Deep Dive 📊

### 1. Tabular Reports (The Foundation)
**Best For**: Simple lists and basic analysis
**Use Cases**: Contact lists, account directories, task reports
**Strengths**: Fast, simple, great for data export

### 2. Summary Reports (The Workhorse)
**Best For**: Grouping and subtotals
**Use Cases**: Sales by region, cases by priority, opportunities by stage
**Features**: Group data, show subtotals, chart integration

### 3. Matrix Reports (The Powerhouse)
**Best For**: Cross-tabulation and complex analysis
**Use Cases**: Sales by rep by month, cases by type by priority
**Advanced**: Row and column grouping, multiple summary fields

### 4. Joined Reports (The Integrator)
**Best For**: Multiple report types in one view
**Use Cases**: Account health (opportunities + cases + activities)
**Power**: Multiple report blocks, shared filtering

## Advanced Filtering & Logic 🎯

### Filter Types
**Standard Filters**: Field operator value comparisons
**Cross Filters**: Accounts WITH Opportunities, Contacts WITHOUT Activities
**Filter Logic**: Custom combinations with AND/OR operators

### Date Filters Mastery
**Relative Dates**: THIS_WEEK, LAST_MONTH, THIS_QUARTER (dynamic)
**Date Ranges**: LAST_N_DAYS:30, NEXT_N_WEEKS:12
**Fiscal Dates**: THIS_FISCAL_QUARTER, LAST_FISCAL_YEAR

## Chart Types & Visualization 📊

### Choosing the Right Chart
**Column Charts**: Compare values across categories
**Line Charts**: Show trends over time
**Pie Charts**: Parts of whole (limit 5-7 slices)
**Bar Charts**: Many categories or long labels
**Funnel Charts**: Process progression

### Chart Best Practices
- Clear, descriptive titles
- Meaningful axis labels
- Consistent color schemes
- Appropriate chart types for data
- Mobile-friendly design

## Dashboard Design Excellence 🎨

### The 5-Second Rule
Users should understand the key message in 5 seconds

### Layout Patterns
**Executive Dashboard**: High-level KPIs and gauges
**Operational Dashboard**: Detailed analysis with supporting charts
**Drill-Down Navigation**: Click charts to see underlying reports

### Interactive Features
**Dynamic Dashboards**: View data for different users
**Dashboard Filters**: Date range, region, product line selectors
**Real-Time Updates**: Refresh schedules and live data

## Your Challenge 🎯
Build a complete sales analytics solution with pipeline reports, performance dashboards, executive summaries, and forecast analysis.

**Remember**: Great reports don't just show data - they tell stories that drive business success!`,
              resources: [
                {
                  title: 'Reports and Dashboards Guide',
                  type: 'documentation',
                  url: 'https://help.salesforce.com/articleView?id=reports_dashboards.htm',
                  description: 'Complete guide to Salesforce reporting and analytics'
                },
                {
                  title: 'Analytics Trailhead',
                  type: 'trailhead',
                  url: 'https://trailhead.salesforce.com/content/learn/trails/wave_analytics_basics',
                  description: 'Hands-on analytics and dashboard building'
                }
              ]
            }
          }
        ],
        quiz: {
          id: 'reports-quiz',
          title: 'Reports & Dashboards Mastery Quiz',
          questions: [
            {
              id: 'report-q1',
              type: 'multiple-choice',
              question: 'Which report type shows data across two dimensions like region and month?',
              options: ['Tabular Report', 'Summary Report', 'Matrix Report', 'Joined Report'],
              correctAnswer: 'Matrix Report',
              explanation: 'Matrix reports allow cross-tabulation with row and column groupings, perfect for two-dimensional analysis.',
              points: 25,
              difficulty: 'medium',
              category: 'reporting'
            },
            {
              id: 'report-q2',
              type: 'multiple-choice',
              question: 'What is the maximum recommended number of slices for a pie chart?',
              options: ['3-4', '5-7', '8-10', 'No limit'],
              correctAnswer: '5-7',
              explanation: 'Pie charts become hard to read with too many slices. 5-7 slices is the sweet spot for clarity.',
              points: 15,
              difficulty: 'easy',
              category: 'visualization'
            }
          ],
          passingScore: 85,
          attempts: 0,
          maxAttempts: 3
        }
      },
      {
        id: 'custom-objects-fields',
        title: 'Custom Objects & Fields Mastery',
        description: 'Design and build custom data models, objects, and fields',
        duration: '2 weeks',
        completed: false,
        locked: true,
        order: 5,
        lessons: [
          {
            id: 'custom-object-architecture',
            title: 'Custom Objects: Building Your Data Universe',
            type: 'content',
            duration: '40 min',
            completed: false,
            points: 350,
            order: 1,
            content: {
              text: `# Custom Objects: Architect Your Business Data! 🏗️

When standard objects don't fit your business needs, you become the architect of your own data universe!

## When Standard Objects Aren't Enough 🤔

**Standard Objects Handle**: CRM basics (Accounts, Contacts, Opportunities), standard processes (Cases, Leads), universal needs (Activities, Tasks)

**Your Business Needs**:
- Project management tracking
- Inventory and asset management
- Event and venue management
- Training certification tracking
- Equipment maintenance logs

**Solution**: Custom Objects! 🎯

## Design Philosophy: The Three Pillars 🎨

### 1. Business Alignment
- Solve real business problems
- Model actual business processes
- Support user workflows
- Enable reporting and analytics

### 2. Scalability
- Plan for growth and data volumes
- Design for performance
- Allow for future enhancements

### 3. User Experience
- Intuitive field labels
- Logical page layouts
- Meaningful relationships
- Simplicity over complexity

## Field Types Master Guide 📝

### Text Fields
**Text (255 chars)**: Names, descriptions, IDs
**Text Area (255 chars, multi-line)**: Short descriptions
**Long Text Area (32K chars)**: Detailed descriptions
**Rich Text Area**: Formatted text with HTML

### Number Fields
**Number**: Decimal places 0-18
**Currency**: Respects user currency settings
**Percent**: Automatic % symbol
**Auto Number**: Automatically incremented sequences

### Date and Time
**Date**: Just the date
**Date/Time**: Date and time combined
**Time**: Hours and minutes only

### Selection Fields
**Picklist**: Single selection dropdown
**Multi-Select Picklist**: Multiple selections
**Checkbox**: True/False values

### Relationship Fields
**Lookup**: Optional link to another object
**Master-Detail**: Strong parent-child relationship
**Hierarchy**: Links to same object (like User to User)

## Real-World Example: Project Management System 🌟

### Objects Design
**Project__c** (Master)
- Project_Name__c, Description__c, Start_Date__c, End_Date__c
- Status__c (Planning/Active/On Hold/Completed)
- Project_Manager__c (Lookup to User)

**Project_Task__c** (Detail to Project)
- Task_Name__c, Due_Date__c, Assigned_To__c
- Status__c, Priority__c, Estimated_Hours__c

**Time_Entry__c** (Detail to Project_Task)
- Date__c, Hours__c, Description__c
- Billable__c (Checkbox)

### Calculated Fields
**Days_Remaining__c** (Formula): IF(End_Date__c > TODAY(), End_Date__c - TODAY(), 0)
**Total_Hours__c** (Roll-up Summary): SUM(Project_Tasks__r.Actual_Hours__c)

## Advanced Features 🚀

### Record Types
**When to Use**: Different page layouts, picklist values, or business processes for the same object
**Example**: Internal Projects vs Client Projects with different approval processes

### Page Layouts
**Design Principles**: Group related fields, required fields at top, logical sections
**Sections**: Project Information, Timeline, Budget & Resources

### Validation Rules
**Required Field Combinations**: End Date required for Active projects
**Date Logic**: End Date must be after Start Date
**Business Logic**: Completed projects must be 100% complete

## Performance Considerations ⚡

### Design for Scale
**Limits**: 800 custom fields per object, 500 custom objects per org
**Optimization**: Commonly filtered fields should be indexed
**Storage**: Consider archiving strategies for old data

### Governance Best Practices
**Naming Conventions**: Descriptive names, consistent capitalization
**Documentation**: Business purpose, key relationships, field definitions
**Change Management**: Impact analysis, sandbox testing, user training

## Your Challenge 🎯
Design a complete Event Management System with Events, Sessions, Speakers, Attendees, and Sponsors - including proper relationships, validation rules, and automation.

**Remember**: Custom objects transform Salesforce from CRM into a complete business platform!`,
              resources: [
                {
                  title: 'Custom Objects Guide',
                  type: 'documentation',
                  url: 'https://help.salesforce.com/articleView?id=dev_objectcreate.htm',
                  description: 'Complete guide to custom object creation and management'
                },
                {
                  title: 'Data Modeling Trailhead',
                  type: 'trailhead',
                  url: 'https://trailhead.salesforce.com/content/learn/modules/data_modeling',
                  description: 'Hands-on data modeling practice'
                }
              ]
            }
          }
        ],
        quiz: {
          id: 'custom-objects-quiz',
          title: 'Custom Objects & Fields Quiz',
          questions: [
            {
              id: 'custom-q1',
              type: 'multiple-choice',
              question: 'Which relationship type automatically deletes child records when parent is deleted?',
              options: ['Lookup Relationship', 'Master-Detail Relationship', 'Hierarchy Relationship', 'External Relationship'],
              correctAnswer: 'Master-Detail Relationship',
              explanation: 'Master-Detail relationships create strong parent-child bonds where deleting the parent automatically deletes all child records.',
              points: 25,
              difficulty: 'medium',
              category: 'data-model'
            },
            {
              id: 'custom-q2',
              type: 'multiple-choice',
              question: 'What is the maximum number of custom fields allowed per object?',
              options: ['500', '800', '1000', 'Unlimited'],
              correctAnswer: '800',
              explanation: 'Each Salesforce object can have up to 800 custom fields, though performance may degrade with too many fields.',
              points: 15,
              difficulty: 'easy',
              category: 'limits'
            }
          ],
          passingScore: 85,
          attempts: 0,
          maxAttempts: 3
        }
      },
      {
        id: 'app-builder-lightning',
        title: 'App Builder & Lightning Pages',
        description: 'Build custom Lightning applications and design modern user experiences',
        duration: '2 weeks',
        completed: false,
        locked: true,
        order: 6,
        lessons: [
          {
            id: 'lightning-experience-design',
            title: 'Lightning App Builder: Craft Amazing User Experiences',
            type: 'content',
            duration: '40 min',
            completed: false,
            points: 350,
            order: 1,
            content: {
              text: `# Lightning App Builder: Your UX Superpower! ⚡

Welcome to the future of Salesforce user experience! You're about to become a UX designer, crafting personalized experiences that make users love Salesforce.

## The Lightning Revolution 🚀

**Old Way (Classic)**:
- Fixed page layouts
- Limited customization
- Developer-dependent changes
- One layout for all users

**Lightning Way**:
- Drag-and-drop page building
- Component-based architecture
- Admin-driven customization
- Personalized user experiences
- Mobile-responsive design

## Lightning Page Types 📱

### 1. Record Pages
**Purpose**: Display and edit individual records
**Use Cases**: Account details, opportunity management, case resolution
**Features**: Related lists, custom components, dynamic actions, contextual sidebar

### 2. Home Pages
**Purpose**: Dashboard and navigation hub
**Use Cases**: Role-specific dashboards, KPI displays, quick access
**Features**: Dashboard components, rich content, navigation shortcuts

### 3. App Pages
**Purpose**: Custom application experiences
**Use Cases**: Specialized workflows, utility pages, custom tools
**Features**: Full custom layout, no standard chrome, tab integration

### 4. Email Application Panes
**Purpose**: Salesforce integration within email clients
**Use Cases**: Gmail/Outlook integration, email productivity
**Features**: Compact layout, context-aware content, quick actions

## Component Architecture 🧩

### Standard Components
**Display**: Record Detail, Related Lists, Rich Text, Related Record
**Interactive**: Quick Actions, Buttons, Tabs, Accordion
**Reporting**: Report Charts, Dashboards, Einstein Analytics, Metrics

### Design Best Practices 🎨

### User-Centered Design
**Know Your Users**: Role-specific needs, daily workflows, pain points, device preferences
**Design Principles**: Clarity (important info prominent), Efficiency (minimize clicks), Consistency (similar patterns)

### Information Hierarchy
**Primary Info**: Key fields, status, critical alerts
**Secondary Info**: Related records, additional details
**Tertiary Info**: History, audit, less frequent data

### Mobile-First Design
- Critical info in top sections
- Larger touch targets
- Simplified navigation
- Reduced content density

## Advanced Features ⚡

### Dynamic Forms
**Smart Field Display**: Show/hide fields based on values, required fields change by record type
**Example**: Opportunity form showing different fields based on stage

### Visibility Rules
**Component Visibility**: Based on record criteria, user profiles, custom permissions, device type
**Example**: Executive dashboard visible only to VP+ profiles

### Page Variations
**Audience Targeting**: Different layouts for different users, role-based experiences
**Example**: Account page with Sales Rep focus vs Support Agent emphasis

## Real-World Examples 🌟

### Sales Rep Home Page
**Objective**: Maximize sales productivity
**Components**: Performance metrics, pipeline health, open opportunities, team leaderboard
**Features**: Quick "Log a Call" action, "Hot opportunities" filter, mobile optimization

### Support Case Record Page
**Objective**: Efficient case resolution
**Components**: Case priority/status, customer satisfaction, SLA countdown, communication history
**Actions**: Quick status update, escalate to manager, send customer update

## Activation Strategy 🚀

### Assignment Priority
1. App + Record Type + Profile (Most Specific)
2. App + Record Type
3. App + Profile
4. Record Type + Profile
5. Single criteria assignments
6. Org Default (Least Specific)

### Rollout Phases
**Pilot**: Small group of power users
**Department**: One team or department
**Staged**: Gradual rollout by profile
**Full**: Organization-wide deployment

## Performance Optimization ⚡

### Page Load Speed
- Minimize components per page (< 15)
- Reduce related list record counts
- Optimize custom component performance
- Filter data at source

### Mobile Performance
- Prioritize above-fold content
- Minimize network requests
- Test on various devices and connections

## Your Challenge 🎯
Design a complete Sales Operations Hub with executive dashboard, rep performance pages, pipeline management, activity tracking, and team collaboration features.

**Success Metrics**: Reduced time to find information, increased adoption, improved data quality, higher productivity

**Remember**: Great Lightning pages create experiences that make users more productive, informed, and successful!

🎉 **Congratulations! You've completed the Salesforce Administrator path!**

You're now equipped to transform any Salesforce org into a user experience masterpiece! ✨`,
              resources: [
                {
                  title: 'Lightning App Builder Guide',
                  type: 'documentation',
                  url: 'https://help.salesforce.com/articleView?id=lightning_app_builder.htm',
                  description: 'Complete guide to Lightning App Builder'
                },
                {
                  title: 'Lightning Experience Trailhead',
                  type: 'trailhead',
                  url: 'https://trailhead.salesforce.com/content/learn/trails/lex_admin_implementation',
                  description: 'Hands-on Lightning Experience implementation'
                }
              ]
            }
          }
        ],
        quiz: {
          id: 'lightning-quiz',
          title: 'App Builder & Lightning Pages Quiz',
          questions: [
            {
              id: 'lightning-q1',
              type: 'multiple-choice',
              question: 'Which Lightning page type should you use for role-specific dashboards?',
              options: ['Record Page', 'Home Page', 'App Page', 'Email Application Pane'],
              correctAnswer: 'Home Page',
              explanation: 'Home pages are designed for dashboard and navigation hub purposes, perfect for role-specific dashboards.',
              points: 20,
              difficulty: 'medium',
              category: 'lightning'
            },
            {
              id: 'lightning-q2',
              type: 'multiple-choice',
              question: 'What is the recommended maximum number of components per Lightning page?',
              options: ['10', '15', '20', '25'],
              correctAnswer: '15',
              explanation: 'Keeping components under 15 per page helps maintain good performance and user experience.',
              points: 15,
              difficulty: 'easy',
              category: 'performance'
            }
          ],
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
    description: 'Master Apex programming, Lightning Web Components, and advanced development techniques.',
    level: 'Developer',
    duration: '12-16 weeks',
    prerequisites: ['foundation', 'admin'],
    certification: 'Platform Developer I & II',
    color: 'bg-gradient-to-br from-purple-400 to-purple-600',
    icon: '💻',
    modules: [
      {
        id: 'apex-programming-mastery',
        title: 'Apex Programming Mastery',
        description: 'Master Salesforce\'s powerful programming language from basics to advanced patterns',
        duration: '4 weeks',
        completed: false,
        locked: false,
        order: 1,
        lessons: [
          {
            id: 'apex-fundamentals',
            title: 'Apex Fundamentals: Your First Steps into Salesforce Development',
            type: 'content',
            duration: '45 min',
            completed: false,
            points: 400,
            order: 1,
            content: {
              text: `# Welcome to the Developer's Playground! 👨‍💻

Hey there, future Salesforce development rockstar!

Ready to transform from a Salesforce user into someone who can build custom functionality that makes businesses run better? You're about to learn Apex - Salesforce's proprietary programming language that gives you superpowers in the cloud!

## What is Apex? 🚀

Think of Apex as **Java's younger, cloud-native sibling** designed specifically for Salesforce:

- **Strongly typed** language (like Java/C#)
- **Object-oriented** with classes and methods
- **Runs entirely in the cloud** - no servers to manage
- **Built-in database integration** - no SQL injection worries
- **Automatic memory management** - garbage collection handled
- **Enterprise-grade security** built in

### Why Apex Exists 🤔

Salesforce's declarative tools (workflows, process builder) are powerful, but sometimes you need:
- Complex business logic
- Advanced data manipulation
- Custom integrations with external systems
- Bulk processing of large data sets
- Real-time calculations and validations

**That's where Apex shines!**

## Apex vs Other Languages 📊

| Feature | Apex | Java | JavaScript |
|---------|------|------|------------|
| Learning Curve | Moderate | Steep | Easy |
| Platform Integration | Perfect | None | Limited |
| Database Access | Built-in | Manual | Manual |
| Security | Automatic | Manual | Manual |
| Deployment | Salesforce | Servers | Browsers/Servers |

## Your First Apex Code 🎯

Let's start with something simple - a method that calculates compound interest:

\`\`\`apex
public class FinancialCalculator {
    public static Decimal calculateCompoundInterest(
        Decimal principal,
        Decimal rate,
        Integer years
    ) {
        Decimal result = principal * Math.pow(1 + rate, years);
        return result;
    }
}
\`\`\`

**Let's break this down**:
- \`public class\` - Creates a class anyone can use
- \`public static\` - Method can be called without creating an instance
- \`Decimal\` - Salesforce's precise number type (perfect for money)
- \`Math.pow()\` - Built-in mathematical function

## Apex Data Types Deep Dive 📝

### Primitive Types:

**Strings** - Text data
\`\`\`apex
String companyName = 'Acme Corporation';
String greeting = 'Hello, ' + companyName;
\`\`\`

**Numbers** - Various precision levels
\`\`\`apex
Integer count = 42;
Long bigNumber = 123456789L;
Decimal precise = 19.99; // Use for currency!
Double approximate = 3.14159;
\`\`\`

**Booleans** - True/False logic
\`\`\`apex
Boolean isActive = true;
Boolean hasPermission = false;
\`\`\`

**Dates and Times**
\`\`\`apex
Date today = Date.today();
DateTime now = DateTime.now();
Time workStart = Time.newInstance(9, 0, 0, 0); // 9:00 AM
\`\`\`

### Collections - Store Multiple Values:

**Lists** (like arrays)
\`\`\`apex
List<String> cities = new List<String>{'New York', 'London', 'Tokyo'};
List<Account> accounts = new List<Account>();
\`\`\`

**Sets** (unique values only)
\`\`\`apex
Set<String> uniqueIndustries = new Set<String>{'Tech', 'Finance', 'Healthcare'};
\`\`\`

**Maps** (key-value pairs)
\`\`\`apex
Map<String, String> countryCapitals = new Map<String, String>{
    'USA' => 'Washington DC',
    'UK' => 'London',
    'Japan' => 'Tokyo'
};
\`\`\`

## Object-Oriented Programming in Apex 🏗️

### Classes and Objects

\`\`\`apex
public class BankAccount {
    // Properties (instance variables)
    private Decimal balance;
    private String accountNumber;

    // Constructor
    public BankAccount(String accNum, Decimal initialBalance) {
        this.accountNumber = accNum;
        this.balance = initialBalance;
    }

    // Methods
    public void deposit(Decimal amount) {
        if (amount > 0) {
            balance += amount;
            System.debug('Deposited: ' + amount + '. New balance: ' + balance);
        }
    }

    public Boolean withdraw(Decimal amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            return true;
        }
        return false;
    }

    public Decimal getBalance() {
        return balance;
    }
}
\`\`\`

**Using the class**:
\`\`\`apex
BankAccount myAccount = new BankAccount('123456', 1000.00);
myAccount.deposit(500.00);
Boolean success = myAccount.withdraw(200.00);
Decimal currentBalance = myAccount.getBalance();
\`\`\`

## Working with Salesforce Data 🗃️

### SOQL - Your Database Query Language

**SOQL** (Salesforce Object Query Language) lets you retrieve data:

\`\`\`apex
// Get all active accounts
List<Account> activeAccounts = [
    SELECT Id, Name, Industry, AnnualRevenue
    FROM Account
    WHERE IsActive__c = true
    LIMIT 100
];

// Get contacts with their account information
List<Contact> contacts = [
    SELECT Id, Name, Email, Account.Name, Account.Industry
    FROM Contact
    WHERE Account.Industry = 'Technology'
];
\`\`\`

### DML - Modifying Data

**DML** (Data Manipulation Language) lets you change data:

\`\`\`apex
// Create new records
Account newAccount = new Account(Name = 'New Company', Industry = 'Technology');
insert newAccount;

// Update existing records
List<Account> accountsToUpdate = [SELECT Id, AnnualRevenue FROM Account WHERE AnnualRevenue = null];
for (Account acc : accountsToUpdate) {
    acc.AnnualRevenue = 0;
}
update accountsToUpdate;

// Delete records
List<Contact> inactiveContacts = [SELECT Id FROM Contact WHERE LastActivityDate < LAST_N_DAYS:365];
delete inactiveContacts;
\`\`\`

## Control Flow - Making Decisions 🔀

### If-Else Statements
\`\`\`apex
if (account.AnnualRevenue > 1000000) {
    account.Rating = 'Hot';
} else if (account.AnnualRevenue > 100000) {
    account.Rating = 'Warm';
} else {
    account.Rating = 'Cold';
}
\`\`\`

### Loops - Repeating Actions
\`\`\`apex
// For-each loop
for (Account acc : [SELECT Id, Name FROM Account]) {
    System.debug('Account: ' + acc.Name);
}

// Traditional for loop
for (Integer i = 0; i < 10; i++) {
    System.debug('Count: ' + i);
}

// While loop
Integer count = 0;
while (count < 5) {
    System.debug('While count: ' + count);
    count++;
}
\`\`\`

## Exception Handling - Dealing with Errors 🛡️

\`\`\`apex
try {
    Account acc = [SELECT Id FROM Account WHERE Name = 'Non-existent Company'];
} catch (QueryException e) {
    System.debug('No account found: ' + e.getMessage());
} catch (Exception e) {
    System.debug('Unexpected error: ' + e.getMessage());
} finally {
    System.debug('This always runs');
}
\`\`\`

## Your First Real-World Example 🌟

Let's build an **Opportunity Probability Calculator**:

\`\`\`apex
public class OpportunityCalculator {

    public static void updateOpportunityProbabilities() {
        // Get all open opportunities
        List<Opportunity> opportunities = [
            SELECT Id, StageName, Amount, CloseDate
            FROM Opportunity
            WHERE IsClosed = false
        ];

        for (Opportunity opp : opportunities) {
            opp.Probability = calculateProbability(opp);
        }

        try {
            update opportunities;
            System.debug('Updated ' + opportunities.size() + ' opportunities');
        } catch (DmlException e) {
            System.debug('Error updating opportunities: ' + e.getMessage());
        }
    }

    private static Decimal calculateProbability(Opportunity opp) {
        // Base probability on stage
        Decimal baseProbability = 0;

        switch on opp.StageName {
            when 'Prospecting' { baseProbability = 10; }
            when 'Qualification' { baseProbability = 25; }
            when 'Needs Analysis' { baseProbability = 40; }
            when 'Value Proposition' { baseProbability = 60; }
            when 'Proposal' { baseProbability = 75; }
            when 'Negotiation' { baseProbability = 90; }
        }

        // Adjust based on deal size
        if (opp.Amount > 100000) {
            baseProbability -= 10; // Large deals are harder
        } else if (opp.Amount < 10000) {
            baseProbability += 5; // Small deals close easier
        }

        // Adjust based on close date
        Integer daysToClose = Date.today().daysBetween(opp.CloseDate);
        if (daysToClose < 0) {
            baseProbability -= 20; // Past due date
        } else if (daysToClose > 90) {
            baseProbability -= 5; // Far in future
        }

        // Ensure probability stays in valid range
        return Math.max(0, Math.min(100, baseProbability));
    }
}
\`\`\`

## Best Practices for Apex Success 💡

### 1. **Governor Limits Awareness**
- SOQL queries: 100 per transaction
- DML statements: 150 per transaction
- Records in DML: 10,000 per transaction
- CPU time: 10 seconds synchronous, 60 seconds asynchronous

### 2. **Bulkification**
Never write queries inside loops:
\`\`\`apex
// BAD ❌
for (Account acc : accounts) {
    List<Contact> contacts = [SELECT Id FROM Contact WHERE AccountId = :acc.Id];
}

// GOOD ✅
Map<Id, List<Contact>> contactsByAccount = new Map<Id, List<Contact>>();
for (Contact con : [SELECT Id, AccountId FROM Contact WHERE AccountId IN :accountIds]) {
    if (!contactsByAccount.containsKey(con.AccountId)) {
        contactsByAccount.put(con.AccountId, new List<Contact>());
    }
    contactsByAccount.get(con.AccountId).add(con);
}
\`\`\`

### 3. **Security and Sharing**
- Always consider field-level security
- Use \`WITH SECURITY_ENFORCED\` in SOQL when needed
- Respect sharing rules in custom code

### 4. **Testing Everything**
Every line of Apex needs test coverage (75% minimum for deployment)

## Your Coding Challenge 🎯

Build a **Contact Dedupe Utility**:

**Requirements**:
1. Find contacts with the same email address
2. Merge data from duplicates into the oldest contact
3. Delete the duplicate contacts
4. Log the results

**Bonus Points**:
- Handle different email formats (case, spacing)
- Preserve the most complete contact information
- Send summary email to administrator

## What's Next? 🚀

In our upcoming lessons, you'll master:
- **Advanced Apex patterns** (Singleton, Factory, Observer)
- **Asynchronous Apex** (Future, Batch, Queueable, Scheduled)
- **Integration patterns** (REST/SOAP APIs, callouts)
- **Testing frameworks** (Unit tests, mock objects, test data)
- **Debugging techniques** (System.debug, Developer Console, Logs)

**Remember**: Every Salesforce developer started with their first "Hello World" - you're now writing real business logic! 🎉

The journey from admin to developer is one of the most rewarding in tech. You're gaining skills that companies desperately need! 💪`,
              resources: [
                {
                  title: 'Apex Developer Guide',
                  type: 'documentation',
                  url: 'https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/',
                  description: 'Complete official Apex documentation'
                },
                {
                  title: 'Apex Trailhead',
                  type: 'trailhead',
                  url: 'https://trailhead.salesforce.com/content/learn/trails/force_com_dev_beginner',
                  description: 'Hands-on Apex development practice'
                }
              ]
            }
          }
        ],
        quiz: {
          id: 'apex-fundamentals-quiz',
          title: 'Apex Fundamentals Quiz',
          questions: [
            {
              id: 'apex-q1',
              type: 'multiple-choice',
              question: 'Which data type should you use for currency calculations in Apex?',
              options: ['Double', 'Float', 'Decimal', 'Integer'],
              correctAnswer: 'Decimal',
              explanation: 'Decimal provides exact precision for currency calculations, avoiding floating-point rounding errors that can occur with Double or Float.',
              points: 15,
              difficulty: 'easy',
              category: 'data-types'
            }
          ],
          passingScore: 85,
          attempts: 0,
          maxAttempts: 3
        }
      },
      {
        id: 'advanced-apex',
        title: 'Advanced Apex Development',
        description: 'Master triggers, batch processing, async operations, and enterprise patterns',
        duration: '3 weeks',
        completed: false,
        locked: true,
        order: 2,
        lessons: [
          {
            id: 'apex-triggers-mastery',
            title: 'Apex Triggers: Handle Data Changes Like a Pro',
            type: 'content',
            duration: '50 min',
            completed: false,
            points: 450,
            order: 1,
            content: {
              text: `# Apex Triggers: Where the Real Magic Happens! ⚡

Welcome to the most powerful feature in Salesforce development!

Triggers are where you intercept data changes and implement complex business logic that runs automatically. Master triggers, and you become the developer who can solve any business requirement!

## What Are Triggers? 🎯

**Triggers are Apex code that executes automatically** when data changes occur:
- **BEFORE** events: Data validation and preparation
- **AFTER** events: Related record updates and external system calls

## Trigger Best Practices 🌟

### 1. One Trigger Per Object
**Do this:**
\`\`\`apex
trigger AccountTrigger on Account (before insert, before update, after insert, after update) {
    AccountTriggerHandler.handle();
}
\`\`\`

### 2. Handler Pattern
\`\`\`apex
public class AccountTriggerHandler {
    public static void handle() {
        if (Trigger.isBefore) {
            if (Trigger.isInsert) {
                validateRequiredFields(Trigger.new);
            }
        }
        if (Trigger.isAfter && Trigger.isUpdate) {
            updateRelatedRecords(Trigger.new, Trigger.oldMap);
        }
    }
}
\`\`\`

## Batch Apex: Process Large Data Volumes 🚀

### When to Use Batch Apex
- Processing more than 50,000 records
- Complex calculations on large datasets
- Data migration and cleanup
- Scheduled mass updates

### Batch Apex Template
\`\`\`apex
public class AccountUpdateBatch implements Database.Batchable<sObject> {
    public Database.QueryLocator start(Database.BatchableContext bc) {
        return Database.getQueryLocator('SELECT Id, Name FROM Account');
    }

    public void execute(Database.BatchableContext bc, List<Account> accounts) {
        // Process records
        update accounts;
    }

    public void finish(Database.BatchableContext bc) {
        // Send completion notification
    }
}
\`\`\`

## Async Processing Patterns ⚡

### Future Methods
\`\`\`apex
@future(callout=true)
public static void syncToExternalSystem(Set<Id> recordIds) {
    // Make external callouts
}
\`\`\`

### Queueable Apex (Recommended)
\`\`\`apex
public class DataProcessor implements Queueable, Database.AllowsCallouts {
    public void execute(QueueableContext context) {
        // Process data and make callouts
    }
}
\`\`\`

**Remember**: Advanced Apex is about building enterprise-grade solutions that scale, perform, and integrate seamlessly!`,
              resources: [
                {
                  title: 'Apex Triggers Guide',
                  type: 'documentation',
                  url: 'https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_triggers.htm',
                  description: 'Complete guide to Apex triggers and best practices'
                }
              ]
            }
          }
        ],
        quiz: {
          id: 'advanced-apex-quiz',
          title: 'Advanced Apex Development Quiz',
          questions: [
            {
              id: 'apex-adv-q1',
              type: 'multiple-choice',
              question: 'Which trigger context variable contains the new version of records being updated?',
              options: ['Trigger.old', 'Trigger.new', 'Trigger.newMap', 'Trigger.oldMap'],
              correctAnswer: 'Trigger.new',
              explanation: 'Trigger.new contains the new version of the records that are being inserted or updated.',
              points: 20,
              difficulty: 'medium',
              category: 'triggers'
            }
          ],
          passingScore: 85,
          attempts: 0,
          maxAttempts: 3
        }
      },
      {
        id: 'lightning-web-components',
        title: 'Lightning Web Components Fundamentals',
        description: 'Build modern, performant user interfaces with Lightning Web Components',
        duration: '3 weeks',
        completed: false,
        locked: true,
        order: 3,
        lessons: [
          {
            id: 'lwc-fundamentals',
            title: 'LWC Fundamentals: Modern JavaScript in Salesforce',
            type: 'interactive',
            duration: '45 min',
            completed: false,
            points: 400,
            order: 1,
            content: {
              text: `# Lightning Web Components: The Future is Here! ⚡

Welcome to modern Salesforce development!

Lightning Web Components (LWC) is built on modern web standards, making it faster, lighter, and more powerful than ever before!

## What Are Lightning Web Components? 🚀

**LWC is Salesforce's modern UI framework** built on:
- **Web Standards**: ES6+, Custom Elements, Shadow DOM
- **Lightning Platform**: Seamless Salesforce integration
- **Performance**: Faster loading and execution
- **Developer Experience**: Modern tooling and debugging

## Component Structure 🏗️
\`\`\`
myComponent/
├── myComponent.js        // JavaScript controller
├── myComponent.html      // HTML template
├── myComponent.css       // CSS styles
└── myComponent.js-meta.xml // Configuration
\`\`\`

## LWC Decorators 🎨

### @track (Reactive Properties)
\`\`\`javascript
import { LightningElement, track } from 'lwc';

export default class ContactList extends LightningElement {
    @track contacts = [];
    @track error;
}
\`\`\`

### @api (Public Properties)
\`\`\`javascript
export default class AccountCard extends LightningElement {
    @api recordId;      // Passed from parent
    @api showDetails = false;
}
\`\`\`

### @wire (Data Binding)
\`\`\`javascript
@wire(getRecord, { recordId: '$recordId', fields: [ACCOUNT_NAME_FIELD] })
account;
\`\`\`

## Component Communication 🔄

### Parent to Child
\`\`\`html
<c-child-component account-id={selectedAccountId}></c-child-component>
\`\`\`

### Child to Parent (Custom Events)
\`\`\`javascript
const event = new CustomEvent('accountselected', {
    detail: { accountId: this.accountId }
});
this.dispatchEvent(event);
\`\`\`

**Remember**: LWC is about building fast, maintainable, standards-based components!`,
              interactive: [
                {
                  type: 'click-sequence',
                  data: {
                    title: 'Create Your First LWC Component',
                    description: 'Build a simple "Hello World" Lightning Web Component',
                    steps: [
                      {
                        instruction: 'Open VS Code with Salesforce Extension Pack',
                        hint: 'Ensure you have the official Salesforce extensions installed'
                      },
                      {
                        instruction: 'Run "SFDX: Create Lightning Web Component"',
                        hint: 'This opens the component creation wizard'
                      },
                      {
                        instruction: 'Name your component "helloWorld"',
                        hint: 'Use camelCase for component names'
                      },
                      {
                        instruction: 'Add HTML template with lightning-card',
                        hint: 'Use SLDS components for consistent styling'
                      }
                    ]
                  },
                  validation: {
                    correctSequence: [1, 2, 3, 4]
                  },
                  feedback: 'Excellent! You\'ve created your first Lightning Web Component!'
                }
              ],
              resources: [
                {
                  title: 'Lightning Web Components Guide',
                  type: 'documentation',
                  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc',
                  description: 'Complete LWC documentation and examples'
                }
              ]
            }
          }
        ],
        quiz: {
          id: 'lwc-quiz',
          title: 'Lightning Web Components Quiz',
          questions: [
            {
              id: 'lwc-q1',
              type: 'multiple-choice',
              question: 'Which decorator is used to make a property reactive in LWC?',
              options: ['@api', '@track', '@wire', '@reactive'],
              correctAnswer: '@track',
              explanation: '@track makes properties reactive, automatically updating the UI when the property value changes.',
              points: 20,
              difficulty: 'medium',
              category: 'lwc-decorators'
            }
          ],
          passingScore: 85,
          attempts: 0,
          maxAttempts: 3
        }
      },
      {
        id: 'testing-debugging',
        title: 'Testing & Debugging Mastery',
        description: 'Master unit testing, integration testing, and debugging techniques',
        duration: '2 weeks',
        completed: false,
        locked: true,
        order: 4,
        lessons: [
          {
            id: 'apex-testing-fundamentals',
            title: 'Apex Testing: Build Bulletproof Code',
            type: 'content',
            duration: '40 min',
            completed: false,
            points: 400,
            order: 1,
            content: {
              text: `# Apex Testing: Your Code's Best Friend! 🧪

Welcome to the world of bulletproof development!

Testing isn't just a requirement in Salesforce - it's your superpower for building reliable, maintainable code that works under any condition.

## Why Testing Matters 🎯

**Salesforce Requires 75% Code Coverage** for production deployments, but great developers aim for:
- **90%+ coverage** with meaningful tests
- **Edge case validation**
- **Negative scenario testing**
- **Bulk operation testing**

## Test Class Fundamentals 🏗️

### Basic Test Structure
\`\`\`apex
@isTest
public class AccountTriggerTest {
    @TestSetup
    static void setupTestData() {
        List<Account> testAccounts = new List<Account>();
        for (Integer i = 0; i < 200; i++) {
            testAccounts.add(new Account(Name = 'Test Account ' + i));
        }
        insert testAccounts;
    }

    @isTest
    static void testAccountInsert() {
        Test.startTest();

        Account newAccount = new Account(Name = 'New Test Account');
        insert newAccount;

        Test.stopTest();

        Account insertedAccount = [SELECT Id, Name FROM Account WHERE Id = :newAccount.Id];
        System.assertEquals('New Test Account', insertedAccount.Name);
    }
}
\`\`\`

## Testing Best Practices 🌟

### 1. Create Your Own Test Data
\`\`\`apex
@isTest
static void goodTest() {
    Account acc = new Account(Name = 'Test Account');
    insert acc;
    // Test logic - guaranteed to work
}
\`\`\`

### 2. Test Bulk Operations
\`\`\`apex
@isTest
static void testBulkUpdate() {
    List<Account> accounts = createTestAccounts(200);

    Test.startTest();
    // Bulk operation
    Test.stopTest();

    // Assertions for all records
}
\`\`\`

### 3. Test Negative Scenarios
\`\`\`apex
@isTest
static void testInvalidData() {
    try {
        insert invalidRecord;
        System.assert(false, 'Expected validation error');
    } catch (DmlException e) {
        System.assert(e.getMessage().contains('validation'));
    }
}
\`\`\`

## Testing Async Operations 🚀

### Testing Batch Classes
\`\`\`apex
@isTest
static void testBatchExecution() {
    Test.startTest();

    Database.executeBatch(new MyBatch());

    Test.stopTest();  // Forces batch to complete

    // Assert batch results
}
\`\`\`

### Mock HTTP Callouts
\`\`\`apex
public class MockHttpResponse implements HttpCalloutMock {
    public HTTPResponse respond(HTTPRequest req) {
        HttpResponse res = new HttpResponse();
        res.setStatusCode(200);
        res.setBody('{"status": "success"}');
        return res;
    }
}

@isTest
static void testCallout() {
    Test.setMock(HttpCalloutMock.class, new MockHttpResponse());
    // Test your callout code
}
\`\`\`

**Remember**: Great tests are your insurance policy against production failures!`,
              resources: [
                {
                  title: 'Apex Testing Guide',
                  type: 'documentation',
                  url: 'https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_testing.htm',
                  description: 'Complete guide to Apex testing best practices'
                }
              ]
            }
          }
        ],
        quiz: {
          id: 'testing-quiz',
          title: 'Testing & Debugging Quiz',
          questions: [
            {
              id: 'test-q1',
              type: 'multiple-choice',
              question: 'What is the minimum code coverage required for production deployment?',
              options: ['50%', '65%', '75%', '90%'],
              correctAnswer: '75%',
              explanation: 'Salesforce requires a minimum of 75% code coverage for production deployments.',
              points: 15,
              difficulty: 'easy',
              category: 'testing-basics'
            }
          ],
          passingScore: 85,
          attempts: 0,
          maxAttempts: 3
        }
      },
      {
        id: 'rest-apis-integration',
        title: 'REST APIs & Integration Mastery',
        description: 'Master external integrations, callouts, and building scalable API solutions',
        duration: '3 weeks',
        completed: false,
        locked: true,
        order: 4,
        lessons: [
          {
            id: 'rest-api-fundamentals',
            title: 'REST API Fundamentals: Connecting Salesforce to the World',
            type: 'content',
            duration: '45 min',
            completed: false,
            points: 400,
            order: 1,
            content: {
              text: `# APIs: Your Gateway to Integration Excellence! 🌐

Welcome to the world of integrations, future API architect!

Ready to connect Salesforce with ANY external system? Today you'll learn how to make Salesforce talk to REST APIs, build your own API endpoints, and design integration patterns that scale to enterprise levels.

## What Are REST APIs? 🤔

**REST (Representational State Transfer)** is the most popular way systems communicate over the internet:

- **Stateless**: Each request contains all information needed
- **Resource-based**: URLs represent data objects
- **HTTP methods**: GET (read), POST (create), PUT (update), DELETE (remove)
- **JSON format**: Lightweight data exchange
- **Standard HTTP codes**: 200 (success), 404 (not found), 500 (error)

### REST vs SOAP 📊

| Feature | REST | SOAP |
|---------|------|------|
| Format | JSON/XML | XML only |
| Performance | Fast | Slower |
| Learning Curve | Easy | Complex |
| Standards | Flexible | Strict |
| Popular with | Modern APIs | Enterprise/Legacy |

## Salesforce API Landscape 🗺️

Salesforce offers multiple API options:

### 1. **REST API** - Most Popular
- Standard HTTP methods
- JSON responses
- Perfect for web/mobile apps
- Easy authentication with OAuth

### 2. **SOAP API** - Enterprise Power
- XML-based messaging
- Strong typing and contracts
- Better for .NET/Java integrations
- More reliable error handling

### 3. **Bulk API** - Big Data Processing
- Handles millions of records
- Asynchronous processing
- CSV/JSON formats
- Perfect for data migrations

### 4. **Streaming API** - Real-time Updates
- Push notifications
- Event-driven architecture
- Perfect for real-time dashboards
- Uses PushTopic or Platform Events

## Making HTTP Callouts from Apex 🚀

### Basic HTTP GET Request

\`\`\`apex
public class WeatherService {
    @future(callout=true)
    public static void getWeatherData(String city) {
        Http http = new Http();
        HttpRequest request = new HttpRequest();

        // Configure the request
        request.setEndpoint('https://api.weather.com/v1/current?key=' + getAPIKey() + '&q=' + city);
        request.setMethod('GET');
        request.setHeader('Content-Type', 'application/json');
        request.setTimeout(12000); // 12 seconds

        try {
            HttpResponse response = http.send(request);

            if (response.getStatusCode() == 200) {
                String jsonResponse = response.getBody();
                processWeatherData(jsonResponse, city);
            } else {
                System.debug('Error: ' + response.getStatusCode() + ' ' + response.getStatus());
            }
        } catch (Exception e) {
            System.debug('Callout error: ' + e.getMessage());
        }
    }

    private static void processWeatherData(String jsonData, String city) {
        Map<String, Object> weatherMap = (Map<String, Object>) JSON.deserializeUntyped(jsonData);

        // Extract temperature
        Map<String, Object> current = (Map<String, Object>) weatherMap.get('current');
        Decimal temperature = (Decimal) current.get('temp_c');

        // Update custom object
        Weather_Data__c weather = new Weather_Data__c(
            City__c = city,
            Temperature__c = temperature,
            Last_Updated__c = System.now()
        );
        insert weather;
    }

    private static String getAPIKey() {
        // Use Named Credentials or Custom Settings
        return 'your-api-key-here';
    }
}
\`\`\`

### HTTP POST with JSON Payload

\`\`\`apex
public class CustomerSyncService {
    public static void syncCustomerToERP(Account acc) {
        Http http = new Http();
        HttpRequest request = new HttpRequest();

        // Build JSON payload
        Map<String, Object> customer = new Map<String, Object>{
            'name' => acc.Name,
            'email' => acc.Email__c,
            'phone' => acc.Phone,
            'salesforceId' => acc.Id
        };

        String jsonBody = JSON.serialize(customer);

        request.setEndpoint('https://erp.company.com/api/customers');
        request.setMethod('POST');
        request.setHeader('Content-Type', 'application/json');
        request.setHeader('Authorization', 'Bearer ' + getERPToken());
        request.setBody(jsonBody);

        HttpResponse response = http.send(request);

        if (response.getStatusCode() == 201) {
            // Parse response to get ERP customer ID
            Map<String, Object> responseData =
                (Map<String, Object>) JSON.deserializeUntyped(response.getBody());

            acc.ERP_Customer_ID__c = (String) responseData.get('customerId');
            update acc;
        }
    }
}
\`\`\`

## Named Credentials: Security Best Practice 🔐

Never hardcode endpoints or credentials! Use Named Credentials:

### Setting Up Named Credentials
1. **Setup** → **Named Credentials**
2. **New Named Credential**
3. Configure:
   - **Label**: Weather API
   - **Name**: Weather_API
   - **URL**: https://api.weather.com
   - **Identity Type**: Named Principal
   - **Authentication Protocol**: OAuth 2.0 or API Key

### Using Named Credentials in Code

\`\`\`apex
// Instead of hardcoded URL
request.setEndpoint('https://api.weather.com/v1/current?q=' + city);

// Use Named Credential
request.setEndpoint('callout:Weather_API/v1/current?q=' + city);
\`\`\`

**Benefits**:
- No hardcoded credentials in code
- Easy environment management
- Automatic authentication handling
- Better security and governance

## Building Custom REST Services 🛠️

Create your own REST endpoints that external systems can call:

\`\`\`apex
@RestResource(urlMapping='/api/accounts/*')
global with sharing class AccountRestService {

    @HttpGet
    global static List<Account> getAccounts() {
        String accountId = RestContext.request.requestURI.substring(
            RestContext.request.requestURI.lastIndexOf('/') + 1
        );

        if (String.isNotBlank(accountId)) {
            return [SELECT Id, Name, Phone, BillingCity
                   FROM Account
                   WHERE Id = :accountId
                   LIMIT 1];
        } else {
            return [SELECT Id, Name, Phone, BillingCity
                   FROM Account
                   LIMIT 100];
        }
    }

    @HttpPost
    global static String createAccount(String name, String phone, String email) {
        try {
            Account acc = new Account(
                Name = name,
                Phone = phone,
                Email__c = email
            );
            insert acc;

            return JSON.serialize(new Map<String, Object>{
                'success' => true,
                'accountId' => acc.Id,
                'message' => 'Account created successfully'
            });
        } catch (Exception e) {
            return JSON.serialize(new Map<String, Object>{
                'success' => false,
                'error' => e.getMessage()
            });
        }
    }

    @HttpPut
    global static String updateAccount() {
        // Implementation for updating accounts
        String requestBody = RestContext.request.requestBody.toString();
        // Parse JSON and update account
        return 'Account updated';
    }

    @HttpDelete
    global static String deleteAccount() {
        // Implementation for deleting accounts
        return 'Account deleted';
    }
}
\`\`\`

## Integration Patterns 🏗️

### 1. **Request-Reply Pattern** (Synchronous)
- Real-time data exchange
- Immediate response required
- Good for: Address validation, payment processing
- Use: HTTP callouts

### 2. **Fire-and-Forget Pattern** (Asynchronous)
- No immediate response needed
- Better performance
- Good for: Logging, notifications
- Use: Platform Events, Queueable jobs

### 3. **Batch Integration Pattern**
- Process large data sets
- Scheduled intervals
- Good for: Data synchronization
- Use: Batch Apex, Bulk API

### 4. **Event-Driven Pattern**
- React to business events
- Loosely coupled systems
- Good for: Real-time updates
- Use: Platform Events, Change Data Capture

## Error Handling Best Practices ⚠️

\`\`\`apex
public class RobustIntegrationService {
    public static void syncDataWithRetry(String endpoint, String data) {
        Integer maxRetries = 3;
        Integer attempt = 1;

        while (attempt <= maxRetries) {
            try {
                HttpResponse response = makeCallout(endpoint, data);

                if (response.getStatusCode() == 200) {
                    // Success - break out of retry loop
                    break;
                } else if (response.getStatusCode() >= 500) {
                    // Server error - retry
                    if (attempt < maxRetries) {
                        System.debug('Server error, retrying... Attempt: ' + attempt);
                        attempt++;
                        continue;
                    } else {
                        // Max retries reached
                        logError('Max retries reached. Status: ' + response.getStatus());
                    }
                } else {
                    // Client error (4xx) - don't retry
                    logError('Client error: ' + response.getStatus());
                    break;
                }
            } catch (Exception e) {
                if (attempt < maxRetries) {
                    System.debug('Exception occurred, retrying... ' + e.getMessage());
                    attempt++;
                } else {
                    logError('Final attempt failed: ' + e.getMessage());
                }
            }
        }
    }

    private static HttpResponse makeCallout(String endpoint, String data) {
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(endpoint);
        request.setMethod('POST');
        request.setBody(data);
        request.setTimeout(30000);
        return http.send(request);
    }

    private static void logError(String errorMessage) {
        Integration_Log__c log = new Integration_Log__c(
            Error_Message__c = errorMessage,
            Timestamp__c = System.now(),
            Status__c = 'Failed'
        );
        insert log;
    }
}
\`\`\`

## Performance and Limits 📊

### Governor Limits for Callouts:
- **Maximum callouts per transaction**: 100
- **Maximum timeout**: 120 seconds
- **Maximum response size**: 6 MB
- **Concurrent callouts**: 20 per org

### Performance Tips:
1. **Use @future for long-running callouts**
2. **Implement timeout handling**
3. **Cache responses when appropriate**
4. **Use bulk patterns for multiple records**
5. **Consider asynchronous patterns**

## Next Steps 🎯

Coming up in our Integration journey:
- **Authentication patterns** (OAuth, JWT, API Keys)
- **Platform Events** for real-time integration
- **Change Data Capture** for data synchronization
- **MuleSoft integration** patterns
- **Error recovery** and monitoring strategies

**Remember**: Great integrations are invisible to end users but provide seamless data flow between systems. You're building the digital nervous system of the business! 🧠

Time to connect everything! 🚀`,
              resources: [
                {
                  title: 'Salesforce REST API Developer Guide',
                  type: 'documentation',
                  url: 'https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/',
                  description: 'Complete guide to Salesforce REST APIs'
                },
                {
                  title: 'Named Credentials Setup',
                  type: 'trailhead',
                  url: 'https://trailhead.salesforce.com/content/learn/modules/apex_integration_services',
                  description: 'Learn to set up secure external connections'
                }
              ]
            }
          }
        ],
        quiz: {
          id: 'rest-apis-quiz',
          title: 'REST APIs & Integration Quiz',
          questions: [
            {
              id: 'api-q1',
              type: 'multiple-choice',
              question: 'What is the main advantage of using Named Credentials for external callouts?',
              options: [
                'Faster response times',
                'Better error handling',
                'Secure credential management',
                'Unlimited callouts'
              ],
              correctAnswer: 'Secure credential management',
              explanation: 'Named Credentials securely store authentication details and endpoints, eliminating hardcoded credentials in code.',
              points: 20,
              difficulty: 'medium',
              category: 'integration-security'
            }
          ],
          passingScore: 80,
          attempts: 0,
          maxAttempts: 3
        }
      },
      {
        id: 'visualforce-classic-dev',
        title: 'Visualforce & Classic Development',
        description: 'Master legacy UI development and custom page creation with Visualforce',
        duration: '3 weeks',
        completed: false,
        locked: true,
        order: 5,
        lessons: [
          {
            id: 'visualforce-fundamentals',
            title: 'Visualforce Fundamentals: Building Custom UI Before Lightning',
            type: 'content',
            duration: '40 min',
            completed: false,
            points: 350,
            order: 1,
            content: {
              text: `# Visualforce: The Original Custom UI Platform! 🎨

Welcome to the world of Visualforce development!

While Lightning Web Components are the future, Visualforce still powers millions of custom pages across thousands of Salesforce orgs. As a developer, you need to understand both - many companies still rely heavily on Visualforce for complex custom interfaces.

## What is Visualforce? 🤔

**Visualforce** is Salesforce's original framework for building custom user interfaces:

- **Server-side rendering**: Pages are built on Salesforce servers
- **MVC Architecture**: Model (sObjects), View (Pages), Controller (Apex)
- **Tag-based markup**: Similar to HTML but with Salesforce-specific tags
- **Apex integration**: Direct binding to Apex controllers
- **Classic UI**: Inherits Salesforce Classic styling by default

### Visualforce vs Lightning Comparison 📊

| Feature | Visualforce | Lightning Web Components |
|---------|-------------|--------------------------|
| Performance | Server-side (slower) | Client-side (faster) |
| Learning Curve | Moderate | Steeper initially |
| Flexibility | High | Very High |
| Mobile Support | Limited | Excellent |
| Modern UI | Manual styling | Built-in Lightning Design |
| Development Model | Server-side MVC | Client-side Components |

## Basic Visualforce Page Structure 🏗️

### Simple Visualforce Page

\`\`\`html
<apex:page standardController="Account">
    <apex:sectionHeader title="Account Details" subtitle="{!Account.Name}"/>

    <apex:pageBlock title="Account Information">
        <apex:pageBlockSection>
            <apex:outputField value="{!Account.Name}"/>
            <apex:outputField value="{!Account.Phone}"/>
            <apex:outputField value="{!Account.Industry}"/>
            <apex:outputField value="{!Account.BillingCity}"/>
        </apex:pageBlockSection>
    </apex:pageBlock>
</apex:page>
\`\`\`

### Key Components Explained:

**\`<apex:page>\`** - Root element that defines the page
- **standardController**: Uses built-in CRUD operations
- **customController**: Uses your own Apex controller
- **extensions**: Adds custom methods to standard controller

**\`<apex:sectionHeader>\`** - Classic Salesforce page header
**\`<apex:pageBlock>\`** - Content container with styling
**\`<apex:outputField>\`** - Displays field values with proper formatting

## Custom Controllers: The Brain 🧠

### Standard Controller (Built-in CRUD)

\`\`\`html
<apex:page standardController="Contact">
    <apex:form>
        <apex:pageBlock title="Edit Contact">
            <apex:pageBlockButtons>
                <apex:commandButton value="Save" action="{!save}"/>
                <apex:commandButton value="Cancel" action="{!cancel}"/>
            </apex:pageBlockButtons>

            <apex:pageBlockSection>
                <apex:inputField value="{!Contact.FirstName}"/>
                <apex:inputField value="{!Contact.LastName}"/>
                <apex:inputField value="{!Contact.Email}"/>
                <apex:inputField value="{!Contact.Phone}"/>
            </apex:pageBlockSection>
        </apex:pageBlock>
    </apex:form>
</apex:page>
\`\`\`

### Custom Controller (Your Own Logic)

\`\`\`apex
public class AccountDashboardController {
    public Account account { get; set; }
    public List<Contact> contacts { get; set; }
    public List<Opportunity> opportunities { get; set; }

    public AccountDashboardController() {
        String accountId = ApexPages.currentPage().getParameters().get('id');
        loadAccountData(accountId);
    }

    private void loadAccountData(String accountId) {
        account = [SELECT Id, Name, Phone, Industry, AnnualRevenue
                  FROM Account
                  WHERE Id = :accountId];

        contacts = [SELECT Id, Name, Email, Phone
                   FROM Contact
                   WHERE AccountId = :accountId
                   ORDER BY LastName];

        opportunities = [SELECT Id, Name, StageName, Amount, CloseDate
                        FROM Opportunity
                        WHERE AccountId = :accountId
                        ORDER BY CloseDate];
    }

    public PageReference refreshData() {
        loadAccountData(account.Id);
        return null; // Stay on current page
    }

    public PageReference createOpportunity() {
        PageReference oppPage = new PageReference('/006/e');
        oppPage.getParameters().put('accid', account.Id);
        oppPage.setRedirect(true);
        return oppPage;
    }
}
\`\`\`

### Using the Custom Controller

\`\`\`html
<apex:page controller="AccountDashboardController">
    <apex:sectionHeader title="Account Dashboard" subtitle="{!account.Name}"/>

    <apex:pageBlock title="Account Overview">
        <apex:pageBlockButtons>
            <apex:commandButton value="Refresh" action="{!refreshData}"/>
            <apex:commandButton value="New Opportunity" action="{!createOpportunity}"/>
        </apex:pageBlockButtons>

        <apex:pageBlockSection title="Basic Information">
            <apex:outputText label="Account Name" value="{!account.Name}"/>
            <apex:outputText label="Industry" value="{!account.Industry}"/>
            <apex:outputText label="Annual Revenue" value="{!account.AnnualRevenue}">
                <apex:param value="{!account.AnnualRevenue}"/>
            </apex:outputText>
        </apex:pageBlockSection>
    </apex:pageBlock>

    <apex:pageBlock title="Related Contacts">
        <apex:dataTable value="{!contacts}" var="contact" styleClass="list">
            <apex:column headerValue="Name">
                <apex:outputLink value="/{!contact.Id}">
                    {!contact.Name}
                </apex:outputLink>
            </apex:column>
            <apex:column headerValue="Email" value="{!contact.Email}"/>
            <apex:column headerValue="Phone" value="{!contact.Phone}"/>
        </apex:dataTable>
    </apex:pageBlock>
</apex:page>
\`\`\`

## JavaScript and AJAX in Visualforce ⚡

### Action Functions for AJAX

\`\`\`html
<apex:page controller="ContactSearchController">
    <script>
        function searchContacts() {
            var searchTerm = document.getElementById('{!$Component.searchInput}').value;
            if (searchTerm.length >= 2) {
                performSearch(searchTerm);
            }
        }
    </script>

    <apex:form>
        <apex:actionFunction name="performSearch"
                           action="{!searchContacts}"
                           reRender="resultsPanel">
            <apex:param name="searchTerm" value=""/>
        </apex:actionFunction>

        <apex:inputText id="searchInput"
                       onkeyup="searchContacts()"
                       placeholder="Type to search contacts..."/>

        <apex:outputPanel id="resultsPanel">
            <apex:dataTable value="{!searchResults}" var="contact">
                <apex:column headerValue="Name" value="{!contact.Name}"/>
                <apex:column headerValue="Email" value="{!contact.Email}"/>
            </apex:dataTable>
        </apex:outputPanel>
    </apex:form>
</apex:page>
\`\`\`

### The Controller for AJAX Search

\`\`\`apex
public class ContactSearchController {
    public List<Contact> searchResults { get; set; }

    public ContactSearchController() {
        searchResults = new List<Contact>();
    }

    public void searchContacts() {
        String searchTerm = ApexPages.currentPage().getParameters().get('searchTerm');

        if (String.isNotBlank(searchTerm) && searchTerm.length() >= 2) {
            String likePattern = '%' + String.escapeSingleQuotes(searchTerm) + '%';

            searchResults = [SELECT Id, Name, Email, Phone
                           FROM Contact
                           WHERE Name LIKE :likePattern
                           ORDER BY Name
                           LIMIT 20];
        } else {
            searchResults.clear();
        }
    }
}
\`\`\`

## Advanced Visualforce Features 🚀

### Dynamic Components

\`\`\`apex
public class DynamicFormController {
    public List<FieldWrapper> formFields { get; set; }

    public class FieldWrapper {
        public String fieldName { get; set; }
        public String fieldLabel { get; set; }
        public String fieldType { get; set; }
        public Object fieldValue { get; set; }
        public Boolean isRequired { get; set; }
    }

    public DynamicFormController() {
        buildFormFields();
    }

    private void buildFormFields() {
        formFields = new List<FieldWrapper>();

        Map<String, Schema.SObjectField> fieldMap =
            Schema.SObjectType.Account.fields.getMap();

        for (String fieldName : fieldMap.keySet()) {
            Schema.DescribeFieldResult fieldDesc =
                fieldMap.get(fieldName).getDescribe();

            if (fieldDesc.isUpdateable()) {
                FieldWrapper wrapper = new FieldWrapper();
                wrapper.fieldName = fieldName;
                wrapper.fieldLabel = fieldDesc.getLabel();
                wrapper.fieldType = String.valueOf(fieldDesc.getType());
                wrapper.isRequired = !fieldDesc.isNillable();
                formFields.add(wrapper);
            }
        }
    }
}
\`\`\`

### File Upload Component

\`\`\`html
<apex:page controller="FileUploadController">
    <apex:form enctype="multipart/form-data">
        <apex:pageBlock title="File Upload">
            <apex:pageBlockSection>
                <apex:inputFile value="{!fileBody}"
                               filename="{!fileName}"
                               id="fileUpload"/>
                <apex:commandButton value="Upload" action="{!uploadFile}"/>
            </apex:pageBlockSection>

            <apex:pageBlockSection title="Uploaded Files">
                <apex:dataTable value="{!attachments}" var="att">
                    <apex:column headerValue="File Name" value="{!att.Name}"/>
                    <apex:column headerValue="Size" value="{!att.BodyLength}"/>
                    <apex:column headerValue="Download">
                        <apex:outputLink value="/servlet/servlet.FileDownload?file={!att.Id}">
                            Download
                        </apex:outputLink>
                    </apex:column>
                </apex:dataTable>
            </apex:pageBlockSection>
        </apex:pageBlock>
    </apex:form>
</apex:page>
\`\`\`

## Error Handling and Validation 🛡️

### Form Validation

\`\`\`apex
public class ContactFormController {
    public Contact contact { get; set; }
    public Boolean hasErrors { get; set; }

    public ContactFormController() {
        contact = new Contact();
        hasErrors = false;
    }

    public PageReference saveContact() {
        hasErrors = false;

        // Custom validation
        if (String.isBlank(contact.FirstName)) {
            ApexPages.addMessage(new ApexPages.Message(
                ApexPages.Severity.ERROR,
                'First Name is required.'
            ));
            hasErrors = true;
        }

        if (String.isBlank(contact.Email) || !isValidEmail(contact.Email)) {
            ApexPages.addMessage(new ApexPages.Message(
                ApexPages.Severity.ERROR,
                'A valid Email address is required.'
            ));
            hasErrors = true;
        }

        if (hasErrors) {
            return null; // Stay on current page
        }

        try {
            insert contact;
            ApexPages.addMessage(new ApexPages.Message(
                ApexPages.Severity.CONFIRM,
                'Contact saved successfully!'
            ));
            contact = new Contact(); // Reset form
        } catch (DmlException e) {
            ApexPages.addMessage(new ApexPages.Message(
                ApexPages.Severity.ERROR,
                'Error saving contact: ' + e.getMessage()
            ));
        }

        return null;
    }

    private Boolean isValidEmail(String email) {
        Pattern emailPattern = Pattern.compile('^[\\w\\.-]+@[\\w\\.-]+\\.[a-zA-Z]{2,}$');
        return emailPattern.matcher(email).matches();
    }
}
\`\`\`

## Mobile and Responsive Design 📱

### Making Visualforce Mobile-Friendly

\`\`\`html
<apex:page showHeader="false"
           sidebar="false"
           standardStylesheets="false"
           docType="html-5.0">

    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <style>
            .mobile-container {
                max-width: 100%;
                margin: 0 auto;
                padding: 10px;
            }

            .responsive-table {
                width: 100%;
                border-collapse: collapse;
            }

            @media (max-width: 768px) {
                .responsive-table td {
                    display: block;
                    width: 100%;
                    text-align: left;
                }

                .responsive-table th {
                    display: none;
                }
            }
        </style>
    </head>

    <body>
        <div class="mobile-container">
            <!-- Your mobile-optimized content -->
        </div>
    </body>
</apex:page>
\`\`\`

## Performance Best Practices ⚡

### Optimize View State
- Use **transient** keyword for temporary variables
- Minimize controller state
- Use **@ReadOnly** for display-only pages

\`\`\`apex
public class OptimizedController {
    public transient List<Contact> searchResults { get; set; }
    public String searchTerm { get; set; }

    // This won't be included in view state
    private transient Map<Id, Account> accountMap;
}
\`\`\`

### Pagination for Large Data Sets

\`\`\`apex
public class PaginatedController {
    public ApexPages.StandardSetController standardController { get; set; }

    public PaginatedController() {
        standardController = new ApexPages.StandardSetController(
            [SELECT Id, Name, Email FROM Contact ORDER BY Name]
        );
        standardController.setPageSize(25);
    }

    public List<Contact> getContacts() {
        return (List<Contact>) standardController.getRecords();
    }

    public Boolean getHasPrevious() {
        return standardController.getHasPrevious();
    }

    public Boolean getHasNext() {
        return standardController.getHasNext();
    }

    public PageReference previous() {
        standardController.previous();
        return null;
    }

    public PageReference next() {
        standardController.next();
        return null;
    }
}
\`\`\`

## When to Use Visualforce Today 🤔

### Still Valuable For:
- **Legacy system maintenance**
- **Complex PDF generation** (with renderAs="PDF")
- **Email templates** with dynamic content
- **Integration with external JavaScript libraries**
- **Highly customized interfaces** that don't fit Lightning
- **Orgs not yet migrated to Lightning**

### Consider Lightning For:
- **New development projects**
- **Mobile-first applications**
- **Better performance requirements**
- **Modern UI/UX standards**
- **Component reusability**

## Migration Strategy 🔄

When migrating from Visualforce to Lightning:

1. **Assess complexity** of existing pages
2. **Identify reusable components**
3. **Plan data layer migration**
4. **Design new user experience**
5. **Implement progressive migration**
6. **Train users on new interface**

**Remember**: Master both platforms! Many enterprises have hybrid environments where you'll work with Visualforce legacy systems while building new Lightning components. 💪

Time to build some custom interfaces! 🎨`,
              resources: [
                {
                  title: 'Visualforce Developer Guide',
                  type: 'documentation',
                  url: 'https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/',
                  description: 'Complete Visualforce development guide'
                },
                {
                  title: 'Visualforce to Lightning Migration',
                  type: 'trailhead',
                  url: 'https://trailhead.salesforce.com/content/learn/trails/lex_migrate_vf',
                  description: 'Learn to migrate Visualforce to Lightning'
                }
              ]
            }
          }
        ],
        quiz: {
          id: 'visualforce-quiz',
          title: 'Visualforce Development Quiz',
          questions: [
            {
              id: 'vf-q1',
              type: 'multiple-choice',
              question: 'Which attribute makes a variable NOT included in the view state?',
              options: [
                'private',
                'transient',
                'static',
                'readonly'
              ],
              correctAnswer: 'transient',
              explanation: 'The transient keyword excludes variables from view state, improving page performance.',
              points: 20,
              difficulty: 'medium',
              category: 'visualforce-performance'
            }
          ],
          passingScore: 75,
          attempts: 0,
          maxAttempts: 3
        }
      },
      {
        id: 'devops-deployment',
        title: 'DevOps & Deployment Mastery',
        description: 'Master CI/CD, version control, and enterprise deployment strategies',
        duration: '4 weeks',
        completed: false,
        locked: true,
        order: 6,
        lessons: [
          {
            id: 'salesforce-devops-fundamentals',
            title: 'Salesforce DevOps: Building Reliable Deployment Pipelines',
            type: 'content',
            duration: '50 min',
            completed: false,
            points: 450,
            order: 1,
            content: {
              text: `# DevOps for Salesforce: Release with Confidence! 🚀

Welcome to the world of Salesforce DevOps, future deployment master!

Ready to move from "hope and pray" deployments to automated, reliable releases? Today you'll learn how to build bulletproof CI/CD pipelines that make deployments boring (in the best way possible).

## What is Salesforce DevOps? 🔄

**DevOps** brings development and operations together to deliver software faster and more reliably:

- **Continuous Integration (CI)**: Automatically test every code change
- **Continuous Deployment (CD)**: Automatically deploy tested changes
- **Version Control**: Track every change with Git
- **Environment Management**: Consistent sandbox strategies
- **Monitoring**: Know when things break before users do
- **Collaboration**: Developers and admins working together

### Traditional vs DevOps Deployment 📊

| Traditional | DevOps |
|-------------|---------|
| Manual deployments | Automated pipelines |
| Weekend deployment windows | Deploy anytime |
| "Works on my machine" | Consistent environments |
| Manual testing | Automated test suites |
| Fear of deployment | Confidence in releases |
| Rollback is painful | Quick, automated rollbacks |

## Salesforce Development Lifecycle 🔄

### 1. **Source-Driven Development**
Everything starts in version control, not in an org:

\`\`\`bash
# Initialize Salesforce DX project
sfdx force:project:create --projectname my-salesforce-app

# Authenticate to Dev Hub
sfdx force:auth:web:login --setdefaultdevhubusername --setalias DevHub

# Create scratch org
sfdx force:org:create --targetdevhubusername DevHub --setdefaultusername --definitionfile config/project-scratch-def.json --setalias MyScratchOrg --durationdays 30

# Push source to scratch org
sfdx force:source:push --targetusername MyScratchOrg

# Pull changes from scratch org
sfdx force:source:pull --targetusername MyScratchOrg
\`\`\`

### 2. **Git Branching Strategy**

\`\`\`bash
# Feature branch workflow
git checkout -b feature/new-validation-rule
# Make your changes
git add .
git commit -m "Add opportunity validation rule"
git push origin feature/new-validation-rule

# Create pull request for code review
# After approval, merge to main branch
git checkout main
git merge feature/new-validation-rule
git push origin main
\`\`\`

### 3. **Environment Strategy** 🏗️

**Development Flow**:
Scratch Orgs → Developer Sandbox → QA Sandbox → UAT Sandbox → Production

\`\`\`yaml
# project-scratch-def.json
{
  "orgName": "My Company Scratch Org",
  "edition": "Developer",
  "features": ["EnableSetPasswordInApi", "MultiCurrency"],
  "settings": {
    "lightningExperienceSettings": {
      "enableS1DesktopEnabled": true
    },
    "pathAssistantSettings": {
      "pathAssistantEnabled": true
    },
    "mobileSettings": {
      "enableS1EncryptedStoragePref2": false
    }
  }
}
\`\`\`

## CI/CD Pipeline with GitHub Actions 🤖

### Complete GitHub Actions Workflow

\`\`\`yaml
# .github/workflows/ci-cd.yml
name: Salesforce CI/CD

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  validate-and-test:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Install Salesforce CLI
      run: |
        wget https://developer.salesforce.com/media/salesforce-cli/sfdx/channels/stable/sfdx-linux-x64.tar.xz
        mkdir ~/sfdx
        tar xJf sfdx-linux-x64.tar.xz -C ~/sfdx --strip-components 1
        echo "$HOME/sfdx/bin" >> $GITHUB_PATH
        ~/sfdx/bin/sfdx version

    - name: Authenticate to Dev Hub
      run: |
        echo "${{ secrets.DEVHUB_SFDX_URL }}" > ./DEVHUB_SFDX_URL.txt
        sfdx force:auth:sfdxurl:store --sfdxurlfile ./DEVHUB_SFDX_URL.txt --setdefaultdevhubusername --setalias devhub

    - name: Create scratch org
      run: |
        sfdx force:org:create --targetdevhubusername devhub --setdefaultusername --definitionfile config/project-scratch-def.json --setalias ciorg --wait 10 --durationdays 1

    - name: Push source to scratch org
      run: sfdx force:source:push --targetusername ciorg

    - name: Run Apex tests
      run: |
        sfdx force:apex:test:run --targetusername ciorg --wait 10 --resultformat junit --codecoverage --testlevel RunLocalTests --outputdir test-results

    - name: Upload test results
      uses: actions/upload-artifact@v3
      if: always()
      with:
        name: test-results
        path: test-results/

    - name: Delete scratch org
      if: always()
      run: sfdx force:org:delete --targetusername ciorg --noprompt

  deploy-to-sandbox:
    needs: validate-and-test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Install Salesforce CLI
      run: |
        # Same as above

    - name: Authenticate to sandbox
      run: |
        echo "${{ secrets.SANDBOX_SFDX_URL }}" > ./SANDBOX_SFDX_URL.txt
        sfdx force:auth:sfdxurl:store --sfdxurlfile ./SANDBOX_SFDX_URL.txt --setdefaultusername --setalias sandbox

    - name: Deploy to sandbox
      run: |
        sfdx force:source:deploy --targetusername sandbox --manifest manifest/package.xml --wait 10 --testlevel RunLocalTests

  validate-production:
    needs: deploy-to-sandbox
    runs-on: ubuntu-latest
    if: github.event_name == 'push' && github.ref == 'refs/heads/main'

    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Validate production deployment
      run: |
        echo "${{ secrets.PRODUCTION_SFDX_URL }}" > ./PRODUCTION_SFDX_URL.txt
        sfdx force:auth:sfdxurl:store --sfdxurlfile ./PRODUCTION_SFDX_URL.txt --setdefaultusername --setalias production
        sfdx force:source:deploy --targetusername production --manifest manifest/package.xml --wait 30 --testlevel RunLocalTests --checkonly
\`\`\`

## Package Development Strategy 📦

### Unlocked Packages for Modular Development

\`\`\`bash
# Create package
sfdx force:package:create --name "Core Business Logic" --packagetype Unlocked --path force-app --targetdevhubusername DevHub

# Create package version
sfdx force:package:version:create --package "Core Business Logic" --installationkeybypass --wait 10 --targetdevhubusername DevHub

# Install package in target org
sfdx force:package:install --package 04t... --targetusername sandbox --wait 10
\`\`\`

### Package Dependencies

\`\`\`json
{
  "packageDirectories": [
    {
      "path": "force-app/main/default",
      "package": "Core Business Logic",
      "versionName": "ver 1.0",
      "versionNumber": "1.0.0.NEXT",
      "default": true,
      "dependencies": [
        {
          "package": "Base Configuration",
          "versionNumber": "1.0.0.LATEST"
        }
      ]
    }
  ],
  "namespace": "",
  "sfdcLoginUrl": "https://login.salesforce.com",
  "sourceApiVersion": "57.0"
}
\`\`\`

## Testing Strategy 🧪

### Automated Test Pyramid

\`\`\`apex
// Unit Tests (Base of pyramid - fast, isolated)
@isTest
public class AccountServiceTest {
    @isTest
    static void testCreateAccount_ValidData_Success() {
        // Arrange
        Account testAccount = new Account(Name = 'Test Corp');

        // Act
        Test.startTest();
        Id accountId = AccountService.createAccount(testAccount);
        Test.stopTest();

        // Assert
        Account createdAccount = [SELECT Id, Name FROM Account WHERE Id = :accountId];
        System.assertEquals('Test Corp', createdAccount.Name);
    }

    @isTest
    static void testCreateAccount_InvalidData_ThrowsException() {
        // Arrange
        Account invalidAccount = new Account(); // Missing required Name

        // Act & Assert
        Test.startTest();
        try {
            AccountService.createAccount(invalidAccount);
            System.assert(false, 'Expected exception was not thrown');
        } catch (AccountService.AccountException e) {
            System.assert(e.getMessage().contains('Name is required'));
        }
        Test.stopTest();
    }
}

// Integration Tests (Middle of pyramid - test component interactions)
@isTest
public class OpportunityIntegrationTest {
    @isTest
    static void testOpportunityCreation_WithAccountAndContact_CreatesActivities() {
        // Test multiple components working together
        Account acc = TestDataFactory.createAccount();
        Contact con = TestDataFactory.createContact(acc.Id);

        Test.startTest();
        Opportunity opp = OpportunityService.createOpportunity(acc.Id, con.Id, 'New Business');
        Test.stopTest();

        // Verify all related records were created correctly
        List<Task> tasks = [SELECT Id FROM Task WHERE WhatId = :opp.Id];
        System.assertEquals(2, tasks.size(), 'Should create welcome and follow-up tasks');
    }
}

// End-to-End Tests (Top of pyramid - test complete user journeys)
@isTest
public class LeadConversionE2ETest {
    @isTest
    static void testLeadConversion_CompleteJourney_Success() {
        // Test entire lead-to-opportunity conversion process
        Lead testLead = TestDataFactory.createQualifiedLead();

        Test.startTest();
        Database.LeadConvert lc = new Database.LeadConvert();
        lc.setLeadId(testLead.Id);
        lc.setConvertedStatus('Closed - Converted');
        Database.LeadConvertResult lcr = Database.convertLead(lc);
        Test.stopTest();

        // Verify complete conversion
        System.assert(lcr.isSuccess());
        Account convertedAccount = [SELECT Id, Name FROM Account WHERE Id = :lcr.getAccountId()];
        Contact convertedContact = [SELECT Id, LastName FROM Contact WHERE Id = :lcr.getContactId()];
        Opportunity convertedOpp = [SELECT Id, Name FROM Opportunity WHERE Id = :lcr.getOpportunityId()];

        System.assertNotEquals(null, convertedAccount);
        System.assertNotEquals(null, convertedContact);
        System.assertNotEquals(null, convertedOpp);
    }
}
\`\`\`

## Environment Management 🏗️

### Sandbox Refresh Strategy

\`\`\`bash
#!/bin/bash
# sandbox-refresh.sh

echo "Starting sandbox refresh process..."

# 1. Backup current sandbox data
sfdx force:data:tree:export --targetusername QA --plan data/sample-data-plan.json --outputdir data/backup

# 2. Refresh sandbox (manual step in Salesforce Setup)
echo "Please refresh the sandbox in Salesforce Setup, then press any key to continue..."
read -n 1

# 3. Wait for refresh to complete
echo "Waiting for sandbox refresh to complete..."
sleep 300  # Wait 5 minutes

# 4. Re-authenticate to refreshed sandbox
sfdx force:auth:web:login --setalias QA-refreshed

# 5. Deploy latest code
sfdx force:source:deploy --targetusername QA-refreshed --sourcepath force-app --wait 15

# 6. Import test data
sfdx force:data:tree:import --targetusername QA-refreshed --plan data/sample-data-plan.json

echo "Sandbox refresh complete!"
\`\`\`

### Data Management

\`\`\`json
// data/sample-data-plan.json
{
  "sobjects": [
    {
      "sobject": "Account",
      "saveRefs": true,
      "resolveRefs": false,
      "files": ["Account.json"]
    },
    {
      "sobject": "Contact",
      "saveRefs": true,
      "resolveRefs": true,
      "files": ["Contact.json"]
    },
    {
      "sobject": "Opportunity",
      "saveRefs": false,
      "resolveRefs": true,
      "files": ["Opportunity.json"]
    }
  ]
}
\`\`\`

## Monitoring and Alerting 📊

### Custom Monitoring Dashboard

\`\`\`apex
public class DeploymentMonitor {
    @AuraEnabled
    public static Map<String, Object> getDeploymentHealth() {
        Map<String, Object> healthData = new Map<String, Object>();

        // Check recent deployments
        List<DeployRequest> recentDeployments = [
            SELECT Id, Status, StartDate, CompletedDate
            FROM DeployRequest
            WHERE StartDate > :System.now().addDays(-7)
            ORDER BY StartDate DESC
        ];

        healthData.put('recentDeployments', recentDeployments);

        // Check test coverage
        List<ApexCodeCoverage> coverage = [
            SELECT ApexClassOrTrigger.Name, NumLinesCovered, NumLinesUncovered
            FROM ApexCodeCoverage
        ];

        Decimal totalCoverage = calculateOverallCoverage(coverage);
        healthData.put('testCoverage', totalCoverage);

        // Check governor limit usage
        healthData.put('governorLimits', Limits.getMap());

        return healthData;
    }

    private static Decimal calculateOverallCoverage(List<ApexCodeCoverage> coverage) {
        Integer totalLines = 0;
        Integer coveredLines = 0;

        for (ApexCodeCoverage acc : coverage) {
            totalLines += acc.NumLinesCovered + acc.NumLinesUncovered;
            coveredLines += acc.NumLinesCovered;
        }

        return totalLines > 0 ? (Decimal.valueOf(coveredLines) / Decimal.valueOf(totalLines)) * 100 : 0;
    }
}
\`\`\`

## Rollback Strategy 🔄

### Automated Rollback Script

\`\`\`bash
#!/bin/bash
# rollback.sh

BACKUP_COMMIT=$1

if [ -z "$BACKUP_COMMIT" ]; then
    echo "Please provide the commit hash to rollback to"
    echo "Usage: ./rollback.sh <commit-hash>"
    exit 1
fi

echo "Rolling back to commit: $BACKUP_COMMIT"

# 1. Create rollback branch
git checkout -b rollback-$(date +%Y%m%d-%H%M%S)

# 2. Reset to backup commit
git reset --hard $BACKUP_COMMIT

# 3. Validate against production (check-only)
echo "Validating rollback deployment..."
sfdx force:source:deploy --targetusername production --sourcepath force-app --checkonly --wait 30

if [ $? -eq 0 ]; then
    echo "Validation successful. Deploying rollback..."
    sfdx force:source:deploy --targetusername production --sourcepath force-app --wait 30
    echo "Rollback complete!"
else
    echo "Validation failed. Please check the errors and try again."
    exit 1
fi
\`\`\`

## Best Practices Summary 💡

### 1. **Source Control**
- ✅ Everything in Git
- ✅ Feature branch workflow
- ✅ Meaningful commit messages
- ✅ Code reviews via pull requests

### 2. **Testing**
- ✅ Maintain 85%+ test coverage
- ✅ Unit, integration, and E2E tests
- ✅ Test data factories
- ✅ Automated test execution

### 3. **Deployment**
- ✅ Validate before deploy
- ✅ Automate repetitive tasks
- ✅ Monitor deployment health
- ✅ Have rollback plan ready

### 4. **Environment Management**
- ✅ Consistent sandbox strategy
- ✅ Regular sandbox refreshes
- ✅ Environment-specific configurations
- ✅ Data migration scripts

## Next Steps 🎯

Master these DevOps practices:
- **Advanced CI/CD patterns** with complex deployments
- **Blue-green deployment** strategies
- **Feature toggles** for safer releases
- **Automated security scanning**
- **Performance monitoring**
- **Multi-org deployment** coordination

**Remember**: Great DevOps isn't just about tools - it's about culture, collaboration, and continuous improvement. You're building the foundation for reliable, scalable Salesforce development! 🚀

Time to automate everything! ⚙️`,
              resources: [
                {
                  title: 'Salesforce DX Developer Guide',
                  type: 'documentation',
                  url: 'https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/',
                  description: 'Complete guide to Salesforce DX and modern development'
                },
                {
                  title: 'DevOps Center',
                  type: 'trailhead',
                  url: 'https://trailhead.salesforce.com/content/learn/trails/devops-center',
                  description: 'Learn Salesforce native DevOps tools'
                }
              ]
            }
          }
        ],
        quiz: {
          id: 'devops-quiz',
          title: 'DevOps & Deployment Quiz',
          questions: [
            {
              id: 'devops-q1',
              type: 'multiple-choice',
              question: 'What is the main benefit of using scratch orgs in development?',
              options: [
                'They are faster than sandboxes',
                'They provide consistent, source-driven environments',
                'They cost less than sandboxes',
                'They have more storage space'
              ],
              correctAnswer: 'They provide consistent, source-driven environments',
              explanation: 'Scratch orgs are created from source control, ensuring every developer works in a consistent environment based on the same configuration.',
              points: 20,
              difficulty: 'medium',
              category: 'salesforce-dx'
            }
          ],
          passingScore: 80,
          attempts: 0,
          maxAttempts: 3
        }
      }
    ]
  },
  {
    id: 'architect',
    title: 'Salesforce Architect',
    description: 'Design and architect enterprise Salesforce solutions with advanced patterns and governance.',
    level: 'Architect',
    duration: '16-20 weeks',
    prerequisites: ['foundation', 'admin', 'developer'],
    certification: 'Technical Architect',
    color: 'bg-gradient-to-br from-red-400 to-red-600',
    icon: '🏗️',
    modules: [
      {
        id: 'solution-architecture',
        title: 'Solution Architecture & Design Patterns',
        description: 'Master enterprise solution design, architecture patterns, and scalability',
        duration: '4 weeks',
        completed: false,
        locked: false,
        order: 1,
        lessons: [
          {
            id: 'enterprise-architecture-principles',
            title: 'Enterprise Architecture Principles: Thinking Like a Technical Architect',
            type: 'content',
            duration: '50 min',
            completed: false,
            points: 500,
            order: 1,
            content: {
              text: `# Welcome to the Architect's Mind! 🏗️

Hey there, future Technical Architect legend!

You've mastered development, conquered administration, and now you're ready for the ultimate challenge: designing enterprise-scale Salesforce solutions that serve thousands of users, process millions of records, and integrate with complex technology ecosystems.

This is where the real magic happens. Where you stop building features and start architecting entire business platforms! 🚀

## The Architect's Mindset 🧠

### You Think in Systems, Not Features
- **Developers** build: "How do I make this work?"
- **Architects** design: "How do I make this work at scale, securely, maintainably, and performantly?"

### You Balance Competing Priorities
- **Performance** vs **Functionality**
- **Security** vs **Usability**
- **Flexibility** vs **Simplicity**
- **Speed to Market** vs **Technical Debt**

### You Plan for the Unknown
- What happens when we have 10x more users?
- How do we handle new business acquisitions?
- What if regulations change?
- How do we future-proof this investment?

## Architecture Principles That Guide Everything 📐

### 1. **Scalability First** 📈
Design for growth from day one:
- Plan for 10x data volume
- Design for global user base
- Anticipate integration complexity
- Build for peak load, not average

### 2. **Security by Design** 🔒
Security isn't added later - it's architected in:
- Zero trust architecture
- Data classification and protection
- Identity and access management
- Audit trails and compliance

### 3. **Maintainability Over Cleverness** 🔧
Simple solutions that teams can maintain:
- Prefer configuration over customization
- Document architectural decisions
- Use standard patterns over custom solutions
- Plan for team transitions

### 4. **Integration-Ready Architecture** 🔗
No system is an island:
- API-first design
- Event-driven architecture
- Loose coupling between systems
- Data synchronization strategies

## Enterprise Architecture Patterns 🏛️

### 1. **Multi-Org Strategy**
When to use multiple Salesforce orgs:

**Single Org Approach** (Preferred)
- One source of truth
- Easier data sharing
- Simpler user management
- Lower complexity

**Multi-Org Approach** (When necessary)
- Different security requirements
- Separate business units
- Regulatory compliance needs
- Different release cycles

**Hybrid Approach**
- Core production org
- Sandbox orgs for development
- Dedicated integration org
- Analytics/reporting org

### 2. **Data Architecture Patterns**

**Master Data Management (MDM)**
\`\`\`
Golden Record System
├── Customer Master (Salesforce)
├── Product Master (ERP)
├── Employee Master (HRIS)
└── Synchronization Layer
\`\`\`

**Data Lake Architecture**
\`\`\`
Salesforce → Data Lake → Analytics Platform
    ↓            ↓              ↓
Real-time → Historical → Business Intelligence
\`\`\`

**Event-Driven Data Flow**
\`\`\`
Source System → Event Bus → Multiple Consumers
    ↓              ↓              ↓
Salesforce → Platform Events → External Systems
\`\`\`

### 3. **Integration Architecture Patterns**

**API Gateway Pattern**
- Central entry point for all integrations
- Rate limiting and security
- Monitoring and analytics
- Version management

**Microservices Integration**
- Small, focused services
- Independent deployment
- Technology diversity
- Resilient failure handling

**Event Sourcing**
- All changes as events
- Complete audit trail
- Time-travel debugging
- Eventual consistency

## Solution Architecture Framework 📋

### 1. **Requirements Gathering** (The Foundation)

**Functional Requirements**
- What the system must do
- Business processes to support
- User stories and use cases
- Success criteria

**Non-Functional Requirements**
- Performance expectations
- Security requirements
- Scalability needs
- Compliance requirements

**Technical Requirements**
- Integration points
- Data volumes
- User loads
- Availability needs

### 2. **Architecture Design Process**

**Step 1: Context Diagram**
\`\`\`
External Systems ← → Salesforce ← → Users
       ↓                ↓            ↓
   Integrations    Business Logic  Interface
\`\`\`

**Step 2: Logical Architecture**
- Business capabilities
- Data flow diagrams
- Process workflows
- Security boundaries

**Step 3: Physical Architecture**
- Technology stack
- Deployment topology
- Network architecture
- Infrastructure requirements

### 3. **Design Decisions Framework**

For every major decision, document:
- **Context**: What situation led to this decision?
- **Options**: What alternatives were considered?
- **Decision**: What was chosen and why?
- **Consequences**: What are the trade-offs?

## Real-World Enterprise Scenarios 🌍

### Scenario 1: Global Manufacturing Company
**Challenge**: 50 countries, 100,000 employees, complex supply chain

**Architecture Solution**:
- Regional data centers with global synchronization
- Multi-currency, multi-language support
- Integration with SAP, Oracle, and local ERPs
- Role-based access with country-specific security

**Key Decisions**:
- Single global org vs regional orgs
- Real-time vs batch integration
- Master data management strategy
- Compliance with local regulations (GDPR, etc.)

### Scenario 2: Financial Services Merger
**Challenge**: Two companies merging, different Salesforce orgs

**Architecture Solution**:
- Data migration and consolidation strategy
- Unified security model
- Process harmonization
- Phased migration approach

**Key Challenges**:
- Data quality and deduplication
- User training and change management
- Regulatory compliance during transition
- Minimal business disruption

### Scenario 3: High-Volume B2C Platform
**Challenge**: Millions of customers, real-time interactions

**Architecture Solution**:
- Salesforce for customer service
- External platform for transactions
- Real-time data synchronization
- Performance optimization strategies

**Key Patterns**:
- API rate limiting and caching
- Asynchronous processing
- Data archiving strategies
- Monitoring and alerting

## Performance Architecture 🚀

### 1. **Query Optimization**
- Selective SOQL queries
- Proper indexing strategy
- Query plan analysis
- Bulk operations

### 2. **Governor Limit Management**
- Asynchronous processing
- Batch operations
- Queueable chaining
- Platform event optimization

### 3. **User Experience Optimization**
- Lightning component lazy loading
- Progressive data loading
- Caching strategies
- Mobile performance

### 4. **Data Volume Management**
- Data archiving strategies
- Historical data handling
- Big object utilization
- External object integration

## Security Architecture 🛡️

### 1. **Defense in Depth**
- Network security
- Application security
- Data security
- Identity security

### 2. **Zero Trust Model**
- Never trust, always verify
- Principle of least privilege
- Continuous monitoring
- Dynamic risk assessment

### 3. **Compliance Architecture**
- GDPR, CCPA, HIPAA compliance
- Audit trails and logging
- Data classification
- Privacy by design

## Monitoring and Observability 📊

### 1. **Application Performance Monitoring**
- Response time tracking
- Error rate monitoring
- User experience metrics
- Business KPI tracking

### 2. **Infrastructure Monitoring**
- Resource utilization
- Capacity planning
- Failure detection
- Performance trending

### 3. **Business Intelligence**
- Usage analytics
- Adoption metrics
- ROI measurement
- Predictive insights

## Your Architect Challenge 🎯

Design a complete solution for **Global Retail Chain**:

**Business Context**:
- 500 stores across 25 countries
- 50,000 employees
- 10 million customers
- Multiple brands and channels

**Requirements**:
- Unified customer view
- Real-time inventory management
- Multi-channel sales tracking
- Regional compliance requirements
- Integration with existing systems

**Deliverables**:
1. Solution architecture diagram
2. Data model design
3. Integration architecture
4. Security model
5. Performance strategy
6. Implementation roadmap

## What Makes a Great Architect? 🌟

### Technical Excellence
- Deep platform knowledge
- Pattern recognition
- Technology trends awareness
- Hands-on coding ability

### Business Acumen
- Understanding business value
- ROI calculation
- Risk assessment
- Strategic thinking

### Communication Skills
- Explaining complex concepts simply
- Stakeholder management
- Documentation skills
- Presentation abilities

### Leadership Qualities
- Decision making under uncertainty
- Team mentoring
- Change management
- Vision communication

## Your Architect Journey Ahead 🚀

You're now thinking like a Technical Architect! Next we'll dive into:
- **Integration Architecture**: APIs, messaging, event-driven design
- **Data Governance**: MDM, data quality, privacy compliance
- **DevOps and Deployment**: CI/CD, environment management, release planning
- **Enterprise Patterns**: Microservices, event sourcing, CQRS

**Remember**: Great architects don't just design systems - they shape the future of how businesses operate. You're becoming that architect! 🏗️

The path to Technical Architect certification is challenging but incredibly rewarding. You're solving problems that affect entire organizations! 💪`,
              resources: [
                {
                  title: 'Salesforce Architecture Center',
                  type: 'documentation',
                  url: 'https://architect.salesforce.com/',
                  description: 'Official architecture guidance and patterns'
                },
                {
                  title: 'Technical Architect Journey',
                  type: 'trailhead',
                  url: 'https://trailhead.salesforce.com/career-path/technical-architect',
                  description: 'Complete certification path for Technical Architects'
                }
              ]
            }
          }
        ],
        quiz: {
          id: 'solution-architecture-quiz',
          title: 'Solution Architecture Quiz',
          questions: [
            {
              id: 'arch-q1',
              type: 'multiple-choice',
              question: 'When designing for enterprise scale, what is the most important consideration?',
              options: [
                'Using the latest features',
                'Minimizing development time',
                'Planning for future growth and change',
                'Reducing initial costs'
              ],
              correctAnswer: 'Planning for future growth and change',
              explanation: 'Enterprise architecture must anticipate future needs, scale requirements, and business changes. Short-term optimizations often create long-term technical debt.',
              points: 25,
              difficulty: 'hard',
              category: 'architecture'
            }
          ],
          passingScore: 90,
          attempts: 0,
          maxAttempts: 3
        }
      }
    ]
  }
];