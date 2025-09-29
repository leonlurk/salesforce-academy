import React, { useState } from 'react';
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
  ChevronDown
} from 'lucide-react';

interface PlaygroundProps {
  module: 'objects' | 'fields' | 'workflows' | 'reports' | 'apex' | 'lwc' | 'integration';
  initialData?: any;
  onComplete?: (results: any) => void;
}

// Mock data for different objects
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
    }
  ]
};

const SalesforcePlayground: React.FC<PlaygroundProps> = ({ onComplete }) => {
  const [currentApp, setCurrentApp] = useState('Sales');
  const [currentObject] = useState('Account');
  const [currentView, setCurrentView] = useState('All Accounts');
  const [isCreating, setIsCreating] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'detail'>('list');
  const [showGlobalActions, setShowGlobalActions] = useState(false);

  const currentData = currentObject === 'Account' ? mockData.accounts :
                     currentObject === 'Contact' ? mockData.contacts :
                     currentObject === 'Opportunity' ? mockData.opportunities : [];

  const filteredData = currentData.filter((item: any) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateRecord = () => {
    setIsCreating(true);
    setSelectedRecord(null);
    setViewMode('detail');
  };

  const handleEditRecord = (record: any) => {
    setSelectedRecord(record);
    setViewMode('detail');
  };

  const handleSaveRecord = () => {
    setIsCreating(false);
    setSelectedRecord(null);
    setViewMode('list');
    if (onComplete) {
      onComplete({ action: 'record_saved', object: currentObject });
    }
  };

  const renderHeader = () => (
    <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 py-2">
      {/* Global Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">SF</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-gray-600 dark:text-gray-400">App Launcher</span>
            <Grid3X3 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          </div>
        </div>

        {/* Global Search */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search Salesforce..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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

      {/* App Navigation */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <select
            value={currentApp}
            onChange={(e) => setCurrentApp(e.target.value)}
            className="bg-transparent text-lg font-semibold text-gray-900 dark:text-white border-none focus:ring-0 cursor-pointer"
          >
            <option value="Sales">Sales</option>
            <option value="Service">Service</option>
            <option value="Marketing">Marketing</option>
            <option value="Custom">Custom App</option>
          </select>

          <nav className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-blue-600 border-b-2 border-blue-600 pb-1">
              <Home className="w-4 h-4" />
              <span className="font-medium">Home</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 cursor-pointer">
              <Building2 className="w-4 h-4" />
              <span>Accounts</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 cursor-pointer">
              <Users className="w-4 h-4" />
              <span>Contacts</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 cursor-pointer">
              <Target className="w-4 h-4" />
              <span>Opportunities</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 cursor-pointer">
              <Briefcase className="w-4 h-4" />
              <span>Cases</span>
            </div>
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
                <button className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2">
                  <Building2 className="w-4 h-4" />
                  <span>Account</span>
                </button>
                <button className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Contact</span>
                </button>
                <button className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2">
                  <Target className="w-4 h-4" />
                  <span>Opportunity</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderObjectHeader = () => (
    <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Building2 className="w-6 h-6 text-gray-600 dark:text-gray-400" />
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
            onChange={(e) => setCurrentView(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 rounded px-3 py-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            <option value="All Accounts">All {currentObject}s</option>
            <option value="My Accounts">My {currentObject}s</option>
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
            onClick={handleCreateRecord}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>New</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderListView = () => (
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
        </div>

        {/* Related Lists */}
        {selectedRecord && viewMode === 'detail' && (
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

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
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
    </div>
  );
};

export default SalesforcePlayground;