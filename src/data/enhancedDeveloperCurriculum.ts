import type { LearningPath } from '../types';

export const enhancedDeveloperPath: LearningPath = {
  id: 'developer',
  title: 'Salesforce Developer: Zero to Hero',
  description: 'Transform from complete beginner to Salesforce development expert with our revolutionary step-by-step approach. No prior coding experience required!',
  level: 'Developer',
  duration: '12-16 weeks',
  prerequisites: ['foundation', 'admin'],
  certification: 'Platform Developer I & II',
  color: 'bg-gradient-to-br from-purple-400 to-purple-600',
  icon: '💻',
  modules: [
    {
      id: 'pre-coding-fundamentals',
      title: 'Pre-Coding Fundamentals: Think Like a Developer',
      description: 'Learn programming concepts without writing code - build confidence and understanding first',
      duration: '1 week',
      completed: false,
      locked: false,
      order: 1,
      lessons: [
        {
          id: 'what-is-programming',
          title: 'What is Programming? (No Code Required!)',
          type: 'interactive',
          duration: '30 min',
          completed: false,
          points: 200,
          order: 1,
          content: {
            text: `# Welcome to Your Programming Journey! 🚀

## Don't Worry - We Start BEFORE Code! 

Hey there, future developer! 👋 

**Feeling nervous about coding?** That's completely normal! Every expert developer started exactly where you are right now. The secret? We're going to learn to THINK like a programmer before we write a single line of code.

## What is Programming, Really? 🤔

Programming is just **giving detailed instructions to a computer**. Think of it like:

### 🍳 **Cooking Recipe Analogy**
When you follow a recipe, you:
1. **Read ingredients** (inputs)
2. **Follow steps in order** (logic)
3. **Get a dish** (output)

Programming works the same way!

### 🎯 **Real-Life Programming Example**
**Making Coffee:**
- **IF** coffee beans are empty → **THEN** buy more beans
- **WHILE** water is not boiling → **WAIT**
- **REPEAT** stirring **FOR** 10 seconds
- **IF** coffee tastes good → **THEN** enjoy!

**You already think like a programmer!** ☕

## The Three Building Blocks 🧱

Every program (including Salesforce code) uses just **3 concepts**:

### 1. **Sequence** (Do things in order)
\`\`\`
Step 1: Open Salesforce
Step 2: Click on Accounts
Step 3: Create new Account
\`\`\`

### 2. **Selection** (Make decisions)
\`\`\`
IF customer is VIP
  THEN give 20% discount
ELSE
  give 5% discount
\`\`\`

### 3. **Iteration** (Repeat things)
\`\`\`
FOR each customer in the list
  send welcome email
\`\`\`

**That's it!** Every complex program is just combinations of these three patterns.

## Your First "Program" (No Code!) 📝

Let's write instructions for **"Getting Ready for Work"**:

**Try this exercise:**
1. List every step you take to get ready
2. Add IF-THEN decisions (if raining, take umbrella)
3. Add loops (repeat brushing teeth for 2 minutes)

**Example:**
- IF alarm rings THEN wake up
- WHILE not fully awake, drink coffee
- FOR each piece of clothing, put it on
- IF weather is rainy THEN take umbrella
- Leave house

**Congratulations!** You just wrote your first algorithm! 🎉

## Why This Matters for Salesforce 💡

In Salesforce, you'll write instructions like:
- **"When someone creates an Account, automatically create a Welcome Task"**
- **"If an Opportunity is over $100,000, notify the Sales Manager"**
- **"For each new Contact, check if they need a follow-up email"**

**See?** It's just detailed instructions - exactly what you already do every day!

## Programming Mindset Shifts 🧠

### ❌ **Old Thinking:** "I'm not technical"
### ✅ **New Thinking:** "I give detailed instructions every day"

### ❌ **Old Thinking:** "Coding is too hard"
### ✅ **New Thinking:** "It's just breaking big problems into small steps"

### ❌ **Old Thinking:** "I'll never understand this"
### ✅ **New Thinking:** "Every expert was once a beginner"

## Your Programming Superpowers 🦸‍♀️

You already have these skills:
- **Problem-solving** (you do this daily)
- **Logical thinking** (you make decisions)
- **Following processes** (you follow procedures)
- **Breaking down tasks** (you plan your day)

**We're just going to apply these skills to Salesforce!**

## What's Next? 🎯

In the next lesson, we'll:
1. **Explore Salesforce like a detective** 🔍
2. **See real code in action** (but not write any yet!)
3. **Play with visual programming tools**
4. **Build confidence with interactive exercises**

**Remember:** Every Salesforce developer started as a complete beginner. You're not behind - you're right on track! 💪

**Ready to continue your journey?** Let's go! 🚀`,
            interactive: [
              {
                type: 'playground',
                title: 'Programming Concepts Interactive Lab',
                description: 'Master programming thinking through hands-on exercises with real-time feedback',
                data: {
                  mode: 'guided-learning',
                  enableHints: true,
                  enableProgressTracking: true,
                  exercises: [
                    {
                      id: 'algorithm-builder',
                      type: 'drag-drop',
                      title: 'Build Your First Algorithm',
                      difficulty: 'beginner',
                      description: 'Drag the steps to create a logical sequence for "Ordering Pizza Online"',
                      instructions: [
                        'Think about the order you would follow in real life',
                        'Each step should logically follow the previous one',
                        'No step should be skipped or repeated'
                      ],
                      items: [
                        'Open pizza website',
                        'Choose pizza size',
                        'Add toppings',
                        'Enter delivery address',
                        'Choose payment method',
                        'Place order',
                        'Wait for delivery',
                        'Enjoy pizza!'
                      ],
                      correctOrder: [0, 1, 2, 3, 4, 5, 6, 7],
                      hints: [
                        'Start with how you access the website',
                        'You need to configure your pizza before checking out',
                        'Payment comes after you know the total cost'
                      ],
                      validation: {
                        checkOrder: true,
                        allowPartialCredit: true,
                        showProgress: true
                      },
                      feedback: {
                        success: '🎉 Perfect! You just created your first algorithm - a step-by-step solution to a problem. This is exactly what programming is!',
                        partial: 'Good start! You have {correct} out of {total} steps in the right order. Try moving the highlighted steps.',
                        incorrect: 'Not quite! Think about what must happen before you can place an order. Need a hint?'
                      }
                    },
                    {
                      id: 'pattern-recognition',
                      type: 'multiple-choice-interactive',
                      title: 'Identify Programming Patterns',
                      difficulty: 'beginner',
                      description: 'Match each scenario with its programming pattern',
                      instructions: [
                        'Sequence: Steps that must happen in order',
                        'Selection: Making decisions (IF-THEN)',
                        'Iteration: Repeating actions (FOR-EACH, WHILE)'
                      ],
                      scenarios: [
                        {
                          id: 'scenario-1',
                          text: 'Check each email in inbox and mark as read',
                          correctPattern: 'iteration',
                          explanation: 'This repeats an action (mark as read) for each item (email)',
                          hint: 'This involves doing the same thing multiple times'
                        },
                        {
                          id: 'scenario-2',
                          text: 'If temperature > 80°F, turn on air conditioning',
                          correctPattern: 'selection',
                          explanation: 'This makes a decision based on a condition',
                          hint: 'Notice the IF statement - this is making a choice'
                        },
                        {
                          id: 'scenario-3',
                          text: 'Open app, login, navigate to dashboard',
                          correctPattern: 'sequence',
                          explanation: 'These steps must happen in order',
                          hint: 'Each step must follow the previous one'
                        },
                        {
                          id: 'scenario-4',
                          text: 'For every customer with overdue payment, send reminder email',
                          correctPattern: 'iteration',
                          explanation: 'This repeats the same action (send email) for multiple customers',
                          hint: 'The word "every" suggests repetition'
                        },
                        {
                          id: 'scenario-5',
                          text: 'If order total > $100, apply free shipping, otherwise charge $10',
                          correctPattern: 'selection',
                          explanation: 'This makes a decision with an alternative action',
                          hint: 'Look for IF...THEN...OTHERWISE structure'
                        }
                      ],
                      feedback: {
                        allCorrect: '🌟 Excellent! You can recognize all three fundamental programming patterns!',
                        mostCorrect: 'Great job! You got {correct} out of {total}. Review the explanations for the ones you missed.',
                        needsPractice: 'Keep practicing! Remember: Sequence=order, Selection=decisions, Iteration=repetition'
                      }
                    },
                    {
                      id: 'real-world-algorithm',
                      type: 'text-builder',
                      title: 'Write Your Own Algorithm',
                      difficulty: 'intermediate',
                      description: 'Create a step-by-step algorithm for "Making Coffee"',
                      instructions: [
                        'Break down the task into clear, specific steps',
                        'Include decision points (IF statements)',
                        'Include repetition (WHILE/FOR loops)',
                        'Make it detailed enough that anyone could follow'
                      ],
                      template: [
                        '1. Check IF coffee beans are available',
                        '2. THEN...',
                        '3. WHILE water is not boiling...',
                        '4. FOR each scoop of coffee...'
                      ],
                      sampleSolution: [
                        'IF coffee beans are empty THEN buy more beans',
                        'Fill water reservoir',
                        'WHILE water is not boiling WAIT',
                        'FOR each scoop needed ADD coffee grounds',
                        'IF using filter THEN place filter in basket',
                        'Start brewing',
                        'WHILE coffee is brewing WAIT',
                        'IF coffee tastes good THEN enjoy, ELSE adjust next time'
                      ],
                      hints: [
                        'What do you need to check before starting?',
                        'What steps might need to wait for something?',
                        'What actions repeat multiple times?'
                      ],
                      validation: {
                        checkForPatterns: ['IF', 'THEN', 'WHILE', 'FOR'],
                        minimumSteps: 5,
                        requiresDecision: true,
                        requiresLoop: true
                      },
                      feedback: {
                        success: '☕ Amazing! You wrote a complete algorithm with decisions and loops!',
                        missingDecision: 'Good start! Try adding an IF-THEN decision point.',
                        missingLoop: 'Almost there! Add a WHILE or FOR loop for repetitive actions.',
                        tooShort: 'Add more detail! Break it down into smaller steps.'
                      }
                    },
                    {
                      id: 'salesforce-thinking',
                      type: 'scenario-matching',
                      title: 'Think Like a Salesforce Developer',
                      difficulty: 'intermediate',
                      description: 'Match business requirements to programming patterns',
                      instructions: [
                        'Read each business requirement',
                        'Think about which programming pattern solves it',
                        'Consider real Salesforce scenarios'
                      ],
                      scenarios: [
                        {
                          requirement: 'When an Opportunity is marked as Won, automatically create a welcome email task',
                          correctPattern: 'sequence',
                          explanation: 'This is a sequence of actions: detect change → create task → assign details',
                          salesforceContext: 'This would be a trigger or workflow'
                        },
                        {
                          requirement: 'If an Account has revenue > $1M, assign to Enterprise Sales team, otherwise assign to SMB team',
                          correctPattern: 'selection',
                          explanation: 'This uses IF-THEN logic to make a decision based on a condition',
                          salesforceContext: 'This would be an assignment rule or process builder'
                        },
                        {
                          requirement: 'For every Contact in California, update their time zone field to PST',
                          correctPattern: 'iteration',
                          explanation: 'This loops through multiple records and performs the same action',
                          salesforceContext: 'This would be a batch Apex or Flow'
                        }
                      ],
                      feedback: {
                        allCorrect: '🚀 You\'re thinking like a Salesforce developer! You can translate business needs into code patterns!',
                        mostCorrect: 'Great progress! {correct}/{total} correct. Review the Salesforce context for each.',
                        needsReview: 'Review the three patterns and try again. Each business requirement maps to one pattern.'
                      }
                    }
                  ],
                  completionCriteria: {
                    minimumScore: 80,
                    mustCompleteAll: true,
                    allowRetries: true
                  },
                  rewards: {
                    points: 200,
                    badge: 'Programming Thinker',
                    message: 'You\'ve mastered programming thinking! You\'re ready to start reading code.'
                  }
                },
                validation: {
                  trackProgress: true,
                  saveProgress: true,
                  allowReplay: true
                },
                feedback: 'Congratulations! You now think like a programmer. Every line of code you write will use these three patterns!'
              }
            ],
            resources: [
              {
                title: 'Programming Concepts Explained Simply',
                type: 'article',
                url: 'https://www.khanacademy.org/computing/computer-programming/programming/intro-to-programming/a/programming-intro',
                description: 'Khan Academy\'s gentle introduction to programming concepts'
              },
              {
                title: 'Computational Thinking for Everyone',
                type: 'video',
                url: 'https://www.youtube.com/watch?v=qbnTZCj0ugI',
                description: 'Learn how to break down problems like a computer scientist'
              }
            ]
          }
        },
        {
          id: 'salesforce-as-platform',
          title: 'Salesforce as a Development Platform (The Big Picture)',
          type: 'content',
          duration: '25 min',
          completed: false,
          points: 250,
          order: 2,
          content: {
            text: `# Salesforce: Your Development Playground! 🎮

## From User to Builder: The Transformation 🦋

Right now, you probably use Salesforce to:
- Create records
- Run reports
- Update data
- Follow processes

**But here's the secret:** Salesforce is actually a **massive development platform** disguised as a CRM!

## The Two Faces of Salesforce 🎭

### 👤 **User Face** (What You See)
- Clean interfaces
- Simple forms
- Easy navigation
- Point-and-click actions

### 🛠️ **Developer Face** (What's Underneath)
- Custom business logic
- Automated processes
- Data integrations
- Complex calculations

**Think of it like a car:** You see the steering wheel and pedals, but underneath there's an engine, transmission, and hundreds of components working together!

## The Salesforce Development Stack 📚

### **Layer 1: Database** 🗃️
- **What it stores:** All your data (Accounts, Contacts, Opportunities)
- **Your power:** Create custom objects and fields
- **Real example:** A custom "Project" object with budget tracking

### **Layer 2: Business Logic** ⚙️
- **What it does:** Automates decisions and processes
- **Your power:** Write rules that run automatically
- **Real example:** "When deal > $50K, create approval request"

### **Layer 3: User Interface** 🎨
- **What it shows:** Forms, pages, and apps users interact with
- **Your power:** Build custom pages and components
- **Real example:** A custom dashboard for project managers

### **Layer 4: Integration** 🔗
- **What it connects:** External systems and APIs
- **Your power:** Connect Salesforce to anything
- **Real example:** Sync with accounting system automatically

## Why Salesforce Development is Different (And Better!) 🌟

### **Traditional Programming:**
\`\`\`
❌ Set up servers
❌ Install databases  
❌ Configure security
❌ Handle backups
❌ Manage updates
❌ Scale infrastructure
\`\`\`

### **Salesforce Development:**
\`\`\`
✅ Platform handles servers
✅ Database built-in
✅ Enterprise security included
✅ Automatic backups
✅ Updates happen automatically  
✅ Scales infinitely
\`\`\`

**You focus on solving business problems, not technical infrastructure!**

## The Development Tools You'll Master 🧰

### **1. Developer Console** 💻
Your coding environment - like Microsoft Word for code
- Write Apex code
- Test your logic
- Debug problems
- View logs

### **2. Setup Menu** ⚙️
Your configuration headquarters
- Create custom objects
- Set up automation
- Manage security
- Deploy changes

### **3. VS Code + Salesforce Extensions** 🚀
Professional development environment
- Advanced code editing
- Version control integration
- Team collaboration
- Modern development workflow

### **4. Trailhead Playground** 🏗️
Your safe practice environment
- Free development org
- No risk of breaking anything
- Unlimited experimentation
- Reset anytime

## Real-World Development Examples 🌍

### **Scenario 1: E-commerce Company**
**Challenge:** "When someone places an order over $500, automatically create a VIP customer record and send a thank-you gift"

**Solution:** 
- **Trigger** (Apex code) watches for new orders
- **Logic** checks order amount
- **Action** creates VIP record and sends email

### **Scenario 2: Healthcare Practice**
**Challenge:** "Automatically schedule follow-up appointments based on treatment type"

**Solution:**
- **Custom object** for treatment plans
- **Process automation** creates appointments
- **Integration** with calendar system

### **Scenario 3: Real Estate Agency**
**Challenge:** "Show property recommendations based on client preferences"

**Solution:**
- **Lightning Web Component** for property search
- **Apex classes** for matching logic
- **Custom fields** for preferences

## Your Development Journey Map 🗺️

### **Weeks 1-2: Foundation Building**
- Understand platform concepts
- Explore development tools
- Practice logical thinking
- Build confidence

### **Weeks 3-4: First Code**
- Write simple Apex methods
- Understand syntax basics
- Practice with guided exercises
- See immediate results

### **Weeks 5-8: Real Projects**
- Build complete solutions
- Handle complex scenarios
- Learn best practices
- Create portfolio pieces

### **Weeks 9-12: Advanced Mastery**
- Integration patterns
- Performance optimization
- Testing strategies
- Certification preparation

## The "Aha!" Moment Coming Soon 💡

**Right now** this might feel overwhelming, but here's what will happen:

**Week 1:** "This is interesting but confusing"
**Week 3:** "I'm starting to see patterns"
**Week 5:** "Wait, I actually understand this!"
**Week 8:** "I can build real solutions!"
**Week 12:** "I'm a Salesforce developer!"

**Every single successful developer went through this exact progression.**

## Why This Matters for Your Career 📈

### **Immediate Benefits:**
- **Solve problems** others can't
- **Automate repetitive tasks**
- **Become the "go-to person"**
- **Increase your value dramatically**

### **Long-term Career Impact:**
- **Average salary increase:** 40-60%
- **Job security:** High demand, low supply
- **Career flexibility:** Work anywhere, any industry
- **Continuous learning:** Platform evolves constantly

## Your Mindset Shift 🧠

### **Before:** "I use Salesforce"
### **After:** "I build solutions on Salesforce"

### **Before:** "I follow processes"
### **After:** "I create processes"

### **Before:** "I request features"
### **After:** "I build features"

**You're not just learning to code - you're learning to solve business problems with technology!**

## What's Next? 🎯

In our next lesson, we'll:
1. **Take a guided tour** of the Developer Console
2. **See real Apex code** in action (no writing yet!)
3. **Understand how code connects** to what users see
4. **Practice reading code** like a detective

**Remember:** You don't need to understand everything right now. We're building your foundation step by step!

**Ready to peek under the hood?** Let's explore the developer tools! 🔧`,
            resources: [
              {
                title: 'Salesforce Platform Basics',
                type: 'trailhead',
                url: 'https://trailhead.salesforce.com/content/learn/modules/platform_dev_basics',
                description: 'Official introduction to Salesforce as a development platform'
              },
              {
                title: 'Developer Beginner Trail',
                type: 'trailhead',
                url: 'https://trailhead.salesforce.com/content/learn/trails/force_com_dev_beginner',
                description: 'Complete beginner trail for aspiring developers'
              }
            ]
          }
        }
      ],
      quiz: {
        id: 'pre-coding-quiz',
        title: 'Programming Concepts Quiz',
        questions: [
          {
            id: 'prog-q1',
            type: 'multiple-choice',
            question: 'Which programming concept involves making decisions based on conditions?',
            options: ['Sequence', 'Selection', 'Iteration', 'Variables'],
            correctAnswer: 'Selection',
            explanation: 'Selection (IF-THEN statements) allows programs to make decisions based on conditions, like "IF customer is VIP THEN give discount".',
            points: 15,
            difficulty: 'easy',
            category: 'fundamentals'
          },
          {
            id: 'prog-q2',
            type: 'multiple-choice',
            question: 'What makes Salesforce development different from traditional programming?',
            options: [
              'You need to set up your own servers',
              'The platform handles infrastructure automatically',
              'You must install databases manually',
              'Security is not included'
            ],
            correctAnswer: 'The platform handles infrastructure automatically',
            explanation: 'Salesforce is a Platform-as-a-Service (PaaS) that handles servers, databases, security, and scaling automatically, letting you focus on business logic.',
            points: 20,
            difficulty: 'medium',
            category: 'platform'
          }
        ],
        passingScore: 80,
        attempts: 0,
        maxAttempts: 3
      }
    },
    {
      id: 'gentle-code-introduction',
      title: 'Your First Look at Code (Reading Before Writing)',
      description: 'Explore real Salesforce code like a detective - understand before you create',
      duration: '1 week',
      completed: false,
      locked: false,
      order: 2,
      lessons: [
        {
          id: 'code-detective',
          title: 'Be a Code Detective: Reading Code Like a Story',
          type: 'interactive',
          duration: '35 min',
          completed: false,
          points: 300,
          order: 1,
          content: {
            text: `# Welcome, Code Detective! 🕵️‍♀️

## Reading Code is Like Reading a Recipe 📖

Before you learn to write code, let's learn to READ it! Think of code as a detailed recipe that tells the computer exactly what to do.

## Your First Apex Code (Don't Panic!) 

Let's look at some real Salesforce code and break it down together:

\`\`\`apex
public class WelcomeHelper {
    public static void sendWelcomeEmail(String customerName) {
        String message = 'Welcome to our company, ' + customerName + '!';
        System.debug('Sending welcome email: ' + message);
    }
}
\`\`\`

**Let's decode this like detectives:**

### 🔍 **Line-by-Line Investigation**

**Line 1:** \`public class WelcomeHelper {\`
- **"public"** = Anyone can use this
- **"class"** = A container for related code
- **"WelcomeHelper"** = The name we gave it
- **"{"** = Starting bracket (like opening a folder)

**Line 2:** \`public static void sendWelcomeEmail(String customerName) {\`
- **"public static"** = Anyone can use this method
- **"void"** = This method doesn't return anything
- **"sendWelcomeEmail"** = What this method does
- **"String customerName"** = It needs a customer name to work

**Line 3:** \`String message = 'Welcome to our company, ' + customerName + '!';\`
- **"String message"** = Create a text variable called "message"
- **"="** = Store this value in the variable
- **"+"** = Combine text pieces together

**Line 4:** \`System.debug('Sending welcome email: ' + message);\`
- **"System.debug"** = Print a message to the log
- Helps developers see what's happening

**Lines 5-6:** The closing brackets **"}"** = End of method and class

## Code Patterns You'll Recognize 🧩

### **Pattern 1: Variables (Storage Boxes)**
\`\`\`apex
String name = 'John Smith';        // Text storage
Integer age = 25;                  // Number storage
Boolean isActive = true;           // True/False storage
\`\`\`
**Think of variables as labeled boxes where you store information!**

### **Pattern 2: Methods (Action Instructions)**
\`\`\`apex
public void calculateDiscount() {
    // Instructions for calculating discount go here
}
\`\`\`
**Methods are like recipes - they contain step-by-step instructions!**

### **Pattern 3: Conditions (Decision Making)**
\`\`\`apex
if (customer.isVIP == true) {
    discount = 20;
} else {
    discount = 5;
}
\`\`\`
**This is like saying: "IF customer is VIP, THEN give 20% discount, OTHERWISE give 5%"**

### **Pattern 4: Loops (Repetition)**
\`\`\`apex
for (Contact contact : contacts) {
    sendEmail(contact);
}
\`\`\`
**This means: "FOR each contact in the list, send them an email"**

## Real Salesforce Example: Account Creation 🏢

Let's examine code that runs when someone creates a new Account:

\`\`\`apex
public class AccountHelper {
    public static void processNewAccount(Account newAccount) {
        // Step 1: Check if account name is provided
        if (newAccount.Name != null) {
            
            // Step 2: Set default values
            if (newAccount.Industry == null) {
                newAccount.Industry = 'Other';
            }
            
            // Step 3: Create welcome task
            Task welcomeTask = new Task();
            welcomeTask.Subject = 'Welcome new account: ' + newAccount.Name;
            welcomeTask.WhatId = newAccount.Id;
            welcomeTask.ActivityDate = Date.today().addDays(1);
            
            // Step 4: Save the task
            insert welcomeTask;
            
            // Step 5: Log what happened
            System.debug('Created welcome task for: ' + newAccount.Name);
        }
    }
}
\`\`\`

### 🔍 **Detective Analysis:**

**What this code does in plain English:**
1. **Receives** a new Account record
2. **Checks** if the account has a name
3. **Sets** default industry if missing
4. **Creates** a welcome task for tomorrow
5. **Saves** the task to Salesforce
6. **Logs** what happened for tracking

**Business Value:** Every new account automatically gets a follow-up task!

## Code Vocabulary Building 📚

### **Common Apex Words You'll See:**

| Code Word | Plain English | Example |
|-----------|---------------|---------|
| \`String\` | Text | \`String name = 'John';\` |
| \`Integer\` | Whole number | \`Integer count = 5;\` |
| \`Boolean\` | True/False | \`Boolean isActive = true;\` |
| \`List\` | Collection of items | \`List<String> names;\` |
| \`if\` | Make a decision | \`if (age > 18)\` |
| \`for\` | Repeat action | \`for (Account acc : accounts)\` |
| \`new\` | Create something | \`new Task();\` |
| \`insert\` | Save to database | \`insert newTask;\` |

## Your Code Reading Challenge 🎯

**Look at this code and answer: What does it do?**

\`\`\`apex
public class OpportunityHelper {
    public static void checkLargeDeals(List<Opportunity> opportunities) {
        for (Opportunity opp : opportunities) {
            if (opp.Amount > 100000) {
                opp.Priority__c = 'High';
                System.debug('Large deal found: ' + opp.Name);
            }
        }
    }
}
\`\`\`

**Detective Questions:**
1. What type of records does this work with?
2. What condition is being checked?
3. What happens when the condition is true?
4. What gets logged?

**Answers:**
1. Opportunity records (sales deals)
2. If the deal amount is over $100,000
3. Sets the priority to 'High'
4. Logs "Large deal found" with the opportunity name

## Why This Reading Skill Matters 💡

**When you can read code, you can:**
- **Understand** existing solutions
- **Debug** problems more easily
- **Learn** from other developers
- **Modify** existing code confidently
- **Communicate** with technical teams

## Common Code Patterns in Salesforce 🔄

### **Pattern: Data Validation**
\`\`\`apex
if (account.AnnualRevenue == null || account.AnnualRevenue < 0) {
    // Handle invalid data
}
\`\`\`

### **Pattern: Bulk Processing**
\`\`\`apex
List<Contact> contactsToUpdate = new List<Contact>();
for (Contact con : contacts) {
    con.LastModifiedDate = DateTime.now();
    contactsToUpdate.add(con);
}
update contactsToUpdate;
\`\`\`

### **Pattern: Error Handling**
\`\`\`apex
try {
    insert newRecords;
} catch (Exception e) {
    System.debug('Error occurred: ' + e.getMessage());
}
\`\`\`

## Your Next Steps 🚀

**Now that you can read code:**
1. **Practice** identifying patterns in more examples
2. **Predict** what code will do before seeing results
3. **Trace** through code line by line
4. **Ask questions** about unfamiliar syntax

**Remember:** Every expert developer started by reading code before writing it. You're building the foundation for success!

**Ready to see code in action?** Let's explore the Developer Console! 🔧`,
            interactive: [
              {
                type: 'playground',
                title: 'Code Detective: Interactive Analysis Lab',
                description: 'Learn to read and understand Apex code through hands-on detective work',
                data: {
                  mode: 'code-analysis',
                  enableSyntaxHighlighting: true,
                  enableLineByLine: true,
                  enableHints: true,
                  exercises: [
                    {
                      id: 'basic-code-reading',
                      type: 'annotated-code',
                      title: 'Code Pattern Detective',
                      difficulty: 'beginner',
                      description: 'Click on code elements to learn what they do',
                      code: `String greeting = 'Hello, ' + userName + '!';
System.debug(greeting);`,
                      annotations: [
                        {
                          line: 1,
                          element: 'String',
                          explanation: 'Data type for text values',
                          category: 'data-type'
                        },
                        {
                          line: 1,
                          element: 'greeting',
                          explanation: 'Variable name - stores the greeting text',
                          category: 'variable'
                        },
                        {
                          line: 1,
                          element: '+',
                          explanation: 'Concatenation operator - combines text',
                          category: 'operator'
                        },
                        {
                          line: 2,
                          element: 'System.debug',
                          explanation: 'Logs a message to help developers see what\'s happening',
                          category: 'method'
                        }
                      ],
                      questions: [
                        {
                          question: 'What does this code do?',
                          options: [
                            'Creates a personalized greeting and logs it',
                            'Deletes user data',
                            'Sends an email',
                            'Creates a new user'
                          ],
                          correct: 0,
                          explanation: 'This code combines text with a username to create a greeting, then logs it for debugging.'
                        }
                      ],
                      hints: [
                        'Look at the + operator - it\'s joining text together',
                        'System.debug shows information in the logs',
                        'This creates but doesn\'t send any data'
                      ]
                    },
                    {
                      id: 'condition-analysis',
                      type: 'code-trace',
                      title: 'Decision Logic Detective',
                      difficulty: 'beginner',
                      description: 'Trace how the code makes decisions',
                      code: `if (opportunity.StageName == 'Closed Won') {
    opportunity.Probability = 100;
    System.debug('Opportunity won!');
} else {
    System.debug('Opportunity still in progress');
}`,
                      traceSteps: [
                        {
                          step: 1,
                          description: 'Check the condition: Is StageName equal to "Closed Won"?',
                          highlight: 'line-1'
                        },
                        {
                          step: 2,
                          description: 'IF true: Set Probability to 100',
                          highlight: 'line-2',
                          condition: 'true'
                        },
                        {
                          step: 3,
                          description: 'IF true: Log success message',
                          highlight: 'line-3',
                          condition: 'true'
                        },
                        {
                          step: 4,
                          description: 'IF false: Log in-progress message',
                          highlight: 'line-5',
                          condition: 'false'
                        }
                      ],
                      scenarios: [
                        {
                          name: 'Scenario 1: Won Opportunity',
                          input: { StageName: 'Closed Won', Probability: 90 },
                          expected: { Probability: 100, debugMessage: 'Opportunity won!' },
                          explanation: 'Condition is TRUE, so probability is updated to 100'
                        },
                        {
                          name: 'Scenario 2: Open Opportunity',
                          input: { StageName: 'Prospecting', Probability: 10 },
                          expected: { Probability: 10, debugMessage: 'Opportunity still in progress' },
                          explanation: 'Condition is FALSE, so probability stays the same'
                        }
                      ],
                      questions: [
                        {
                          question: 'When does this code set probability to 100?',
                          options: [
                            'Always',
                            'Only when an opportunity is won',
                            'Only when probability is already 100',
                            'Never'
                          ],
                          correct: 1,
                          explanation: 'The IF condition checks if the stage is "Closed Won", and only then sets probability to 100%.'
                        }
                      ]
                    },
                    {
                      id: 'loop-analysis',
                      type: 'execution-simulator',
                      title: 'Loop Pattern Detective',
                      difficulty: 'intermediate',
                      description: 'Watch how loops process multiple records',
                      code: `List<Contact> contacts = [SELECT Id, Name FROM Contact LIMIT 3];
for (Contact con : contacts) {
    System.debug('Processing: ' + con.Name);
    con.Status__c = 'Active';
}`,
                      execution: {
                        sampleData: [
                          { Id: '001', Name: 'John Smith' },
                          { Id: '002', Name: 'Jane Doe' },
                          { Id: '003', Name: 'Bob Johnson' }
                        ],
                        steps: [
                          {
                            iteration: 1,
                            currentRecord: { Name: 'John Smith' },
                            action: 'Processing: John Smith',
                            result: 'Status__c set to Active'
                          },
                          {
                            iteration: 2,
                            currentRecord: { Name: 'Jane Doe' },
                            action: 'Processing: Jane Doe',
                            result: 'Status__c set to Active'
                          },
                          {
                            iteration: 3,
                            currentRecord: { Name: 'Bob Johnson' },
                            action: 'Processing: Bob Johnson',
                            result: 'Status__c set to Active'
                          }
                        ]
                      },
                      questions: [
                        {
                          question: 'How many times will the code inside the loop run?',
                          options: ['Once', 'Twice', 'Three times', 'Until manually stopped'],
                          correct: 2,
                          explanation: 'The loop runs once for each contact in the list (3 contacts = 3 iterations)'
                        },
                        {
                          question: 'What happens to each contact?',
                          options: [
                            'Gets deleted',
                            'Gets their Status field set to Active',
                            'Gets sent an email',
                            'Nothing changes'
                          ],
                          correct: 1,
                          explanation: 'Each contact has their Status__c field updated to "Active"'
                        }
                      ]
                    },
                    {
                      id: 'real-world-analysis',
                      type: 'code-comprehension',
                      title: 'Real Business Logic Detective',
                      difficulty: 'intermediate',
                      description: 'Analyze code that solves actual business problems',
                      code: `public class OpportunityHelper {
    public static void checkLargeDeals(List<Opportunity> opportunities) {
        for (Opportunity opp : opportunities) {
            if (opp.Amount > 100000) {
                opp.Priority__c = 'High';
                System.debug('Large deal found: ' + opp.Name);
            }
        }
    }
}`,
                      analysis: {
                        breakdown: [
                          {
                            section: 'Class Declaration',
                            lines: '1',
                            explanation: 'Creates a helper class to organize related code',
                            businessValue: 'Keeps code organized and reusable'
                          },
                          {
                            section: 'Method Signature',
                            lines: '2',
                            explanation: 'Defines a method that accepts a list of opportunities',
                            businessValue: 'Can process multiple opportunities at once (bulk processing)'
                          },
                          {
                            section: 'Loop Through Records',
                            lines: '3',
                            explanation: 'Examines each opportunity one by one',
                            businessValue: 'Ensures no opportunity is missed'
                          },
                          {
                            section: 'Business Rule Check',
                            lines: '4',
                            explanation: 'Checks if deal size exceeds $100,000',
                            businessValue: 'Identifies high-value opportunities for special attention'
                          },
                          {
                            section: 'Update Priority',
                            lines: '5',
                            explanation: 'Marks large deals as high priority',
                            businessValue: 'Ensures sales team focuses on biggest opportunities'
                          },
                          {
                            section: 'Logging',
                            lines: '6',
                            explanation: 'Records which large deals were found',
                            businessValue: 'Creates audit trail for review'
                          }
                        ]
                      },
                      questions: [
                        {
                          question: 'What type of records does this code work with?',
                          answer: 'Opportunity records (sales deals)',
                          type: 'short-answer'
                        },
                        {
                          question: 'What condition triggers the priority update?',
                          answer: 'Deal amount over $100,000',
                          type: 'short-answer'
                        },
                        {
                          question: 'What business problem does this solve?',
                          options: [
                            'Automatically identifies and prioritizes large sales deals',
                            'Deletes small opportunities',
                            'Sends emails to customers',
                            'Creates new accounts'
                          ],
                          correct: 0,
                          explanation: 'This code automatically flags high-value deals so sales teams can focus on them'
                        }
                      ],
                      hints: [
                        'Look for the number 100000 - that\'s the threshold',
                        'Priority__c is being set to "High"',
                        'This helps sales managers identify important deals'
                      ]
                    },
                    {
                      id: 'sequence-ordering',
                      type: 'drag-drop',
                      title: 'Code Execution Sequence',
                      difficulty: 'beginner',
                      description: 'Arrange these code steps in correct execution order',
                      scenario: 'Creating and saving a Task record',
                      items: [
                        'Create new Task object',
                        'Set task subject',
                        'Set task due date',
                        'Link task to Account',
                        'Save task to database',
                        'Log success message'
                      ],
                      correctOrder: [0, 1, 2, 3, 4, 5],
                      codeExample: `Task newTask = new Task();
newTask.Subject = 'Follow up';
newTask.ActivityDate = Date.today().addDays(7);
newTask.WhatId = accountId;
insert newTask;
System.debug('Task created: ' + newTask.Id);`,
                      explanation: 'You must create the object, set its properties, then save it. Logging happens after save to capture the new ID.',
                      hints: [
                        'Start by creating the object',
                        'Set all properties before saving',
                        'Save before you can log the ID'
                      ]
                    },
                    {
                      id: 'variable-tracing',
                      type: 'value-tracker',
                      title: 'Track Variable Values',
                      difficulty: 'intermediate',
                      description: 'Follow how variables change as code executes',
                      code: `Integer count = 0;
String message = 'Processing';

for (Integer i = 0; i < 3; i++) {
    count = count + 1;
    message = message + ' item ' + i;
    System.debug(message);
}`,
                      trace: [
                        { line: 1, variables: { count: 0 }, explanation: 'Initialize count to 0' },
                        { line: 2, variables: { count: 0, message: 'Processing' }, explanation: 'Initialize message' },
                        { line: 4, variables: { count: 0, message: 'Processing', i: 0 }, explanation: 'Loop iteration 1 starts' },
                        { line: 5, variables: { count: 1, message: 'Processing', i: 0 }, explanation: 'Increment count' },
                        { line: 6, variables: { count: 1, message: 'Processing item 0', i: 0 }, explanation: 'Append to message' },
                        { line: 4, variables: { count: 1, message: 'Processing item 0', i: 1 }, explanation: 'Loop iteration 2 starts' },
                        { line: 5, variables: { count: 2, message: 'Processing item 0', i: 1 }, explanation: 'Increment count' },
                        { line: 6, variables: { count: 2, message: 'Processing item 0 item 1', i: 1 }, explanation: 'Append to message' }
                      ],
                      questions: [
                        {
                          question: 'What is the final value of count?',
                          options: ['0', '1', '2', '3'],
                          correct: 3,
                          explanation: 'Count increments each loop iteration: 0 → 1 → 2 → 3'
                        },
                        {
                          question: 'How many times does System.debug run?',
                          options: ['Once', 'Twice', 'Three times', 'Never'],
                          correct: 2,
                          explanation: 'System.debug runs once per loop iteration (3 times total)'
                        }
                      ]
                    }
                  ],
                  completionCriteria: {
                    minimumScore: 85,
                    mustCompleteAll: true,
                    allowRetries: true
                  },
                  rewards: {
                    points: 300,
                    badge: 'Code Detective',
                    message: 'You can now read and understand Apex code! Time to learn the Developer Console.'
                  }
                },
                validation: {
                  trackProgress: true,
                  saveProgress: true,
                  showStepByStep: true
                },
                feedback: 'Outstanding detective work! You can now read code like a pro and understand how it solves business problems!'
              }
            ],
            resources: [
              {
                title: 'Apex Code Basics',
                type: 'trailhead',
                url: 'https://trailhead.salesforce.com/content/learn/modules/apex_basics_dotnet',
                description: 'Official introduction to reading and understanding Apex code'
              },
              {
                title: 'Code Reading Strategies',
                type: 'article',
                url: 'https://www.freecodecamp.org/news/how-to-read-code/',
                description: 'Proven techniques for understanding unfamiliar code'
              }
            ]
          }
        },
        {
          id: 'developer-console-tour',
          title: 'Developer Console: Your Coding Headquarters',
          type: 'interactive',
          duration: '30 min',
          completed: false,
          points: 250,
          order: 2,
          content: {
            text: `# Welcome to Your Developer Headquarters! 🏢

## The Developer Console: Your New Best Friend 

The Developer Console is where Salesforce developers spend most of their time. Think of it as your **coding headquarters** - like Microsoft Word for code, but much more powerful!

## Getting There: The Secret Developer Entrance 🚪

**Step 1:** Click the **gear icon** ⚙️ in the top-right corner
**Step 2:** Select **"Developer Console"** from the menu
**Step 3:** A new window opens - **this is your coding workspace!**

**Pro Tip:** Keep the Developer Console open in a separate browser tab. You'll use it constantly!

## Your Developer Console Tour 🗺️

### **The File Tab** 📁
**What it does:** Shows all your code files
**Think of it as:** Your project folder in Windows Explorer

**You'll see:**
- **Classes** (your Apex code files)
- **Triggers** (code that runs automatically)
- **Lightning Components** (user interface code)
- **Static Resources** (images, CSS, JavaScript files)

### **The Logs Tab** 📋
**What it does:** Shows what happened when your code ran
**Think of it as:** A detailed diary of code execution

**You'll see:**
- Debug messages you wrote
- Error messages if something went wrong
- Performance information
- Step-by-step execution details

### **The Query Editor** 🔍
**What it does:** Lets you ask Salesforce for data
**Think of it as:** A search engine for your Salesforce data

**You can:**
- Find all accounts in California
- List contacts created this week
- Count opportunities by stage
- Export data to Excel

### **The Execute Anonymous Window** ⚡
**What it does:** Runs small pieces of code instantly
**Think of it as:** A calculator for code

**Perfect for:**
- Testing small code snippets
- Running one-time data updates
- Debugging problems
- Learning and experimenting

## Your First Developer Console Adventure 🎮

### **Mission 1: Execute Your First Code**

**Step 1:** Open Developer Console
**Step 2:** Click **Debug** → **Open Execute Anonymous Window**
**Step 3:** Type this code:

\`\`\`apex
System.debug('Hello, Salesforce Developer World!');
String myName = 'Your Name Here';
System.debug('My name is: ' + myName);
\`\`\`

**Step 4:** Click **Execute**
**Step 5:** Check the **Logs tab** to see your message!

**🎉 Congratulations! You just ran your first Salesforce code!**

### **Mission 2: Query Some Data**

**Step 1:** Click the **Query Editor tab**
**Step 2:** Type this query:

\`\`\`sql
SELECT Id, Name, Industry 
FROM Account 
LIMIT 5
\`\`\`

**Step 3:** Click **Execute**
**Step 4:** See your organization's account data!

**What this query does:**
- **SELECT** = "Show me these fields"
- **FROM Account** = "From the Account object"
- **LIMIT 5** = "Only show 5 records"

## Developer Console Superpowers 💪

### **1. Real-Time Code Testing**
Write code → Test immediately → See results instantly
**No waiting, no deployment hassles!**

### **2. Detailed Debugging**
When code doesn't work, the console shows you:
- **Exactly where** the problem occurred
- **What values** variables had
- **How long** each step took
- **What errors** happened

### **3. Data Exploration**
Query any data in your org:
- Find patterns in your data
- Verify code results
- Export for analysis
- Test data scenarios

### **4. Code Organization**
- **Save** your code files
- **Version control** with comments
- **Organize** into logical groups
- **Share** with team members

## Common Developer Console Workflows 🔄

### **Workflow 1: Building New Functionality**
1. **Plan** your solution (what should it do?)
2. **Write** code in a new class
3. **Test** with Execute Anonymous
4. **Debug** any issues in the logs
5. **Refine** until it works perfectly

### **Workflow 2: Investigating Problems**
1. **Reproduce** the issue
2. **Enable** debug logs
3. **Check** logs for error messages
4. **Trace** through code execution
5. **Fix** the root cause

### **Workflow 3: Data Analysis**
1. **Write** SOQL queries
2. **Explore** data patterns
3. **Export** results if needed
4. **Validate** assumptions

## Developer Console Best Practices 🌟

### **✅ DO:**
- **Save your work frequently** (Ctrl+S)
- **Use meaningful names** for classes and methods
- **Add comments** to explain complex logic
- **Test thoroughly** before deploying
- **Keep logs clean** with relevant debug messages

### **❌ DON'T:**
- **Don't test in production** (use sandbox!)
- **Don't ignore error messages**
- **Don't write code without comments**
- **Don't skip testing edge cases**

## Your Developer Console Cheat Sheet 📝

### **Essential Keyboard Shortcuts:**
- **Ctrl+S** = Save current file
- **Ctrl+Shift+O** = Open Execute Anonymous
- **Ctrl+E** = Execute current selection
- **Ctrl+/** = Comment/uncomment lines
- **Ctrl+F** = Find in current file

### **Quick Actions:**
- **Double-click** a class name to open it
- **Right-click** for context menu options
- **Drag tabs** to rearrange windows
- **Ctrl+click** links to open in new tab

## What Makes You a Developer Now 🎯

**Before:** You used Salesforce interfaces
**Now:** You can peek behind the scenes and see how it all works!

**Before:** You requested features from IT
**Now:** You can build features yourself!

**Before:** You wondered "how does this work?"
**Now:** You can investigate and find out!

## Your Next Adventure 🚀

In the next lesson, we'll:
1. **Write your first real Apex class**
2. **Create a simple business solution**
3. **Test it thoroughly**
4. **See it work in the Salesforce interface**

**You're no longer just a Salesforce user - you're becoming a Salesforce developer!** 💻

**Ready to write some code?** Let's build something amazing! ✨`,
            interactive: [
              {
                type: 'playground',
                title: 'Developer Console: Full Interactive Simulation',
                description: 'Master the Developer Console through hands-on practice with realistic simulation',
                data: {
                  mode: 'developer-console-full',
                  enableRealisticUI: true,
                  enableAllFeatures: true,
                  enableGuidedTutorials: true,
                  consoleFeatures: {
                    tabs: ['execute-anonymous', 'query-editor', 'logs', 'tests', 'checkpoints'],
                    enableSyntaxHighlighting: true,
                    enableAutoComplete: true,
                    enableErrorHighlighting: true,
                    enableLineNumbers: true
                  },
                  missions: [
                    {
                      id: 'first-execution',
                      title: 'Mission 1: Execute Your First Code',
                      difficulty: 'beginner',
                      description: 'Learn to run code in the Execute Anonymous window',
                      steps: [
                        {
                          instruction: 'Click on the "Execute Anonymous" tab',
                          validation: { checkTab: 'execute-anonymous' },
                          hint: 'Look for the tab at the top of the console'
                        },
                        {
                          instruction: 'Type or paste this code: System.debug(\'Hello, Developer!\');',
                          validation: { checkCode: 'System.debug' },
                          hint: 'Make sure to include the semicolon at the end'
                        },
                        {
                          instruction: 'Click the "Execute" button',
                          validation: { checkAction: 'execute' },
                          hint: 'The Execute button is usually at the bottom'
                        },
                        {
                          instruction: 'Open the Logs tab to see your message',
                          validation: { checkTab: 'logs', checkLogContent: 'Hello, Developer!' },
                          hint: 'Logs show what happened when your code ran'
                        }
                      ],
                      preloadedCode: `// Your first code - try executing this!
System.debug('Hello from the Developer Console!');
String todayDate = String.valueOf(Date.today());
System.debug('Today is: ' + todayDate);`,
                      rewards: {
                        points: 50,
                        message: '🎉 You just ran your first Salesforce code!'
                      }
                    },
                    {
                      id: 'variable-exploration',
                      title: 'Mission 2: Work with Variables',
                      difficulty: 'beginner',
                      description: 'Create variables and see their values in logs',
                      steps: [
                        {
                          instruction: 'Create a String variable with your name',
                          example: 'String myName = \'Your Name\';',
                          validation: { checkCode: 'String', checkCode2: '=' },
                          hint: 'Use String datatype and assign your name in quotes'
                        },
                        {
                          instruction: 'Create an Integer variable with your age',
                          example: 'Integer myAge = 25;',
                          validation: { checkCode: 'Integer' },
                          hint: 'Integers don\'t need quotes'
                        },
                        {
                          instruction: 'Use System.debug to print both variables',
                          example: 'System.debug(\'Name: \' + myName + \', Age: \' + myAge);',
                          validation: { checkCode: 'System.debug', checkExecution: true },
                          hint: 'You can combine text and variables with +'
                        },
                        {
                          instruction: 'Execute and check the logs',
                          validation: { checkLogs: true },
                          hint: 'Your debug messages should appear in the Logs tab'
                        }
                      ],
                      starterTemplate: `// Create your variables here

// Debug them here
`,
                      rewards: {
                        points: 75,
                        message: '💪 You can now work with variables!'
                      }
                    },
                    {
                      id: 'query-master',
                      title: 'Mission 3: Query Salesforce Data',
                      difficulty: 'beginner',
                      description: 'Use the Query Editor to retrieve data from Salesforce',
                      steps: [
                        {
                          instruction: 'Click on the "Query Editor" tab',
                          validation: { checkTab: 'query-editor' },
                          hint: 'This tab lets you search for data in Salesforce'
                        },
                        {
                          instruction: 'Write a query to get Account names',
                          example: 'SELECT Id, Name FROM Account LIMIT 5',
                          validation: { checkQuery: ['SELECT', 'FROM', 'Account'] },
                          hint: 'Start with SELECT, then field names, then FROM object name'
                        },
                        {
                          instruction: 'Click "Execute" to run the query',
                          validation: { checkAction: 'query-execute' },
                          hint: 'The Execute button runs your query'
                        },
                        {
                          instruction: 'Review the results returned',
                          validation: { checkResults: true },
                          hint: 'Results show in a table below the query'
                        }
                      ],
                      preloadedQuery: `-- Your first query - try running this!
SELECT Id, Name, CreatedDate 
FROM Account 
LIMIT 3`,
                      sampleData: [
                        { Id: '001xxx', Name: 'Acme Corp', CreatedDate: '2024-01-15' },
                        { Id: '001yyy', Name: 'Global Industries', CreatedDate: '2024-02-20' },
                        { Id: '001zzz', Name: 'Tech Solutions', CreatedDate: '2024-03-10' }
                      ],
                      rewards: {
                        points: 100,
                        message: '🔍 You can now query Salesforce data!'
                      }
                    },
                    {
                      id: 'debugging-master',
                      title: 'Mission 4: Debug Like a Pro',
                      difficulty: 'intermediate',
                      description: 'Learn to use debug logs to troubleshoot code',
                      steps: [
                        {
                          instruction: 'Write code that creates a Contact',
                          example: 'Contact con = new Contact(FirstName=\'John\', LastName=\'Doe\');',
                          validation: { checkCode: 'Contact' },
                          hint: 'Use the Contact object with FirstName and LastName'
                        },
                        {
                          instruction: 'Add debug statements before and after creation',
                          example: 'System.debug(\'Before: \' + con);',
                          validation: { checkCode: 'System.debug', checkMultiple: true },
                          hint: 'Debug statements help you see what\'s happening'
                        },
                        {
                          instruction: 'Execute and analyze the logs',
                          validation: { checkLogs: true, checkLogDetail: true },
                          hint: 'Logs show the step-by-step execution of your code'
                        },
                        {
                          instruction: 'Identify the Contact object in the logs',
                          validation: { checkLogContent: 'Contact' },
                          hint: 'Look for Contact: followed by field values'
                        }
                      ],
                      starterTemplate: `// Create a Contact

// Add debug statements

// What do the logs tell you?
`,
                      rewards: {
                        points: 125,
                        message: '🐛 You\'re now a debugging pro!'
                      }
                    },
                    {
                      id: 'real-world-scenario',
                      title: 'Mission 5: Real Business Logic',
                      difficulty: 'intermediate',
                      description: 'Solve a real business problem using the Developer Console',
                      scenario: {
                        problem: 'Update all Contacts in California to have "PST" timezone',
                        requirements: [
                          'Query Contacts where MailingState = \'CA\'',
                          'Update their TimeZone__c field to \'PST\'',
                          'Use a loop to process multiple records',
                          'Debug the count of updated records'
                        ]
                      },
                      steps: [
                        {
                          instruction: 'Query California contacts',
                          example: 'List<Contact> contacts = [SELECT Id FROM Contact WHERE MailingState = \'CA\'];',
                          validation: { checkCode: ['SELECT', 'WHERE', 'MailingState'] },
                          hint: 'Use SOQL to query contacts with a WHERE clause'
                        },
                        {
                          instruction: 'Loop through the contacts',
                          example: 'for (Contact con : contacts) { }',
                          validation: { checkCode: 'for' },
                          hint: 'Use a for-each loop to process each contact'
                        },
                        {
                          instruction: 'Update the timezone field',
                          example: 'con.TimeZone__c = \'PST\';',
                          validation: { checkCode: 'TimeZone__c' },
                          hint: 'Set the field value inside the loop'
                        },
                        {
                          instruction: 'Save the changes',
                          example: 'update contacts;',
                          validation: { checkCode: 'update' },
                          hint: 'Use the update DML statement after the loop'
                        },
                        {
                          instruction: 'Debug the count of updated records',
                          example: 'System.debug(\'Updated \' + contacts.size() + \' contacts\');',
                          validation: { checkCode: 'size()' },
                          hint: 'Use .size() to get the count of records in a list'
                        }
                      ],
                      starterTemplate: `// Query California contacts

// Loop and update timezone

// Save changes

// Debug results
`,
                      solution: `List<Contact> contacts = [SELECT Id FROM Contact WHERE MailingState = 'CA'];
for (Contact con : contacts) {
    con.TimeZone__c = 'PST';
}
update contacts;
System.debug('Updated ' + contacts.size() + ' contacts');`,
                      rewards: {
                        points: 200,
                        badge: 'Developer Console Master',
                        message: '🏆 You solved a real business problem! You\'re ready for production coding!'
                      }
                    }
                  ],
                  freePlay: {
                    enabled: true,
                    description: 'Experiment freely with the Developer Console',
                    features: [
                      'Write any Apex code',
                      'Run any SOQL query',
                      'View detailed logs',
                      'Test different scenarios'
                    ],
                    safetyNet: {
                      enabled: true,
                      message: 'This is a safe simulation - you can\'t break anything!'
                    }
                  },
                  helpSystem: {
                    enabled: true,
                    quickReference: {
                      'System.debug': 'Logs a message to the debug logs',
                      'SOQL': 'SELECT fields FROM object WHERE condition',
                      'DML': 'insert, update, delete, upsert operations',
                      'Variables': 'String, Integer, Boolean, Decimal, Date, etc.',
                      'Loops': 'for (Type var : collection) { }'
                    },
                    commonErrors: [
                      {
                        error: 'Unexpected token',
                        cause: 'Missing semicolon or quote',
                        fix: 'Check that each statement ends with ;'
                      },
                      {
                        error: 'Variable does not exist',
                        cause: 'Typo in variable name',
                        fix: 'Check spelling and capitalization'
                      },
                      {
                        error: 'DML requires SObject',
                        cause: 'Trying to save without an object',
                        fix: 'Create an object before using insert/update'
                      }
                    ]
                  },
                  completionCriteria: {
                    minimumMissions: 4,
                    minimumScore: 450,
                    allowRetries: true
                  },
                  rewards: {
                    totalPoints: 550,
                    badge: 'Developer Console Expert',
                    message: 'You\'ve mastered the Developer Console! You\'re ready to write real Apex code.'
                  }
                },
                validation: {
                  trackProgress: true,
                  saveProgress: true,
                  allowExperimentation: true
                },
                feedback: 'Outstanding work! The Developer Console is now your coding headquarters. Time to build something amazing!'
              }
            ],
            resources: [
              {
                title: 'Developer Console Basics',
                type: 'trailhead',
                url: 'https://trailhead.salesforce.com/content/learn/modules/developer_console',
                description: 'Complete guide to using the Developer Console effectively'
              },
              {
                title: 'SOQL Query Reference',
                type: 'documentation',
                url: 'https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/',
                description: 'Complete reference for querying Salesforce data'
              }
            ]
          }
        }
      ],
      quiz: {
        id: 'code-reading-quiz',
        title: 'Code Reading & Developer Console Quiz',
        questions: [
          {
            id: 'read-q1',
            type: 'multiple-choice',
            question: 'What does this code do? `String message = "Hello " + userName;`',
            options: [
              'Deletes the userName',
              'Creates a greeting by combining text with userName',
              'Sends an email to userName',
              'Validates the userName format'
            ],
            correctAnswer: 'Creates a greeting by combining text with userName',
            explanation: 'The + operator concatenates (joins) strings together, creating a personalized greeting.',
            points: 15,
            difficulty: 'easy',
            category: 'code-reading'
          },
          {
            id: 'read-q2',
            type: 'multiple-choice',
            question: 'Where in the Developer Console would you go to see what happened when your code ran?',
            options: ['File Tab', 'Query Editor', 'Logs Tab', 'Execute Anonymous'],
            correctAnswer: 'Logs Tab',
            explanation: 'The Logs tab shows detailed information about code execution, including debug messages and errors.',
            points: 20,
            difficulty: 'medium',
            category: 'developer-console'
          },
          {
            id: 'read-q3',
            type: 'multiple-choice',
            question: 'What is the purpose of `System.debug()` in Apex code?',
            options: [
              'To delete system files',
              'To print messages to the debug log for troubleshooting',
              'To debug user permissions',
              'To create system backups'
            ],
            correctAnswer: 'To print messages to the debug log for troubleshooting',
            explanation: 'System.debug() outputs messages to the debug log, helping developers track code execution and troubleshoot issues.',
            points: 25,
            difficulty: 'medium',
            category: 'debugging'
          }
        ],
        passingScore: 85,
        attempts: 0,
        maxAttempts: 3
      }
    }
  ]
};
