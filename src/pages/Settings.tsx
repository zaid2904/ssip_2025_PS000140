import React, { useState } from 'react';
import { User, Lock, Bell, Globe, Moon, Sun, Save } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';
import { useTheme } from '../context/ThemeContext';

const Settings: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const { theme, toggleTheme } = useTheme();
  
  // Form states
  const [notifyEmail, setNotifyEmail] = useState(true);
  const [notifySystem, setNotifySystem] = useState(true);
  const [language, setLanguage] = useState('english');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Settings saved successfully!');
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Settings</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage your account and application preferences</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden transition-colors">
            <div className="md:flex">
              {/* Settings Sidebar */}
              <div className="md:w-64 bg-gray-50 dark:bg-gray-700 p-4 md:p-6 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-600">
                <nav className="space-y-1">
                  <button
                    className={`flex items-center px-3 py-2 w-full text-sm font-medium rounded-md ${
                      activeTab === 'profile'
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                    onClick={() => setActiveTab('profile')}
                  >
                    <User className="mr-3 h-5 w-5" />
                    Profile
                  </button>
                  <button
                    className={`flex items-center px-3 py-2 w-full text-sm font-medium rounded-md ${
                      activeTab === 'security'
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                    onClick={() => setActiveTab('security')}
                  >
                    <Lock className="mr-3 h-5 w-5" />
                    Security
                  </button>
                  <button
                    className={`flex items-center px-3 py-2 w-full text-sm font-medium rounded-m d ${
                      activeTab === 'notifications'
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                    onClick={() => setActiveTab('notifications')}
                  >
                    <Bell className="mr-3 h-5 w-5" />
                    Notifications
                  </button>
                  <button
                    className={`flex items-center px-3 py-2 w-full text-sm font-medium rounded-md ${
                      activeTab === 'appearance'
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                    onClick={() => setActiveTab('appearance')}
                  >
                    {theme === 'dark' ? (
                      <Moon className="mr-3 h-5 w-5" />
                    ) : (
                      <Sun className="mr-3 h-5 w-5" />
                    )}
                    Appearance
                  </button>
                  <button
                    className={`flex items-center px-3 py-2 w-full text-sm font-medium rounded-md ${
                      activeTab === 'language'
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                    onClick={() => setActiveTab('language')}
                  >
                    <Globe className="mr-3 h-5 w-5" />
                    Language
                  </button>
                </nav>
              </div>

              {/* Settings Content */}
              <div className="flex-1 p-4 md:p-6">
                {/* Profile Settings */}
                {activeTab === 'profile' && (
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Profile Settings</h2>
                    <form onSubmit={handleSaveSettings}>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            defaultValue="Admin User"
                            className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            defaultValue="admin@example.com"
                            className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          />
                        </div>
                        <div>
                          <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Role
                          </label>
                          <input
                            type="text"
                            name="role"
                            id="role"
                            defaultValue="Department Head"
                            className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            disabled
                          />
                        </div>
                        <div>
                          <label htmlFor="department" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Department
                          </label>
                          <select
                            id="department"
                            name="department"
                            defaultValue="administration"
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          >
                            <option value="administration">Administration</option>
                            <option value="labour">Labour</option>
                            <option value="skill">Skill Development</option>
                            <option value="employment">Employment</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="bio" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Bio
                          </label>
                          <textarea
                            id="bio"
                            name="bio"
                            rows={3}
                            defaultValue="Department head overseeing administrative functions and interdepartmental coordination."
                            className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          />
                        </div>
                        <div className="flex justify-end">
                          <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            <Save className="mr-2 h-4 w-4" />
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}

                {/* Security Settings */}
                {activeTab === 'security' && (
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Security Settings</h2>
                    <form onSubmit={handleSaveSettings}>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Current Password
                          </label>
                          <input
                            type="password"
                            name="current-password"
                            id="current-password"
                            className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          />
                        </div>
                        <div>
                          <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            New Password
                          </label>
                          <input
                            type="password"
                            name="new-password"
                            id="new-password"
                            className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          />
                        </div>
                        <div>
                          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            name="confirm-password"
                            id="confirm-password"
                            className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          />
                        </div>
                        <div className="flex justify-end">
                          <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            <Save className="mr-2 h-4 w-4" />
                            Update Password
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}

                {/* Notification Settings */}
                {activeTab === 'notifications' && (
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Notification Settings</h2>
                    <form onSubmit={handleSaveSettings}>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="email-notifications"
                              name="email-notifications"
                              type="checkbox"
                              checked={notifyEmail}
                              onChange={() => setNotifyEmail(!notifyEmail)}
                              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="email-notifications" className="font-medium text-gray-700 dark:text-gray-300">
                              Email Notifications
                            </label>
                            <p className="text-gray-500 dark:text-gray-400">Receive notifications via email for important updates.</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="system-notifications"
                              name="system-notifications"
                              type="checkbox"
                              checked={notifySystem}
                              onChange={() => setNotifySystem(!notifySystem)}
                              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="system-notifications" className="font-medium text-gray-700 dark:text-gray-300">
                              System Notifications
                            </label>
                            <p className="text-gray-500 dark:text-gray-400">Receive in-app notifications for system events.</p>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            <Save className="mr-2 h-4 w-4" />
                            Save Preferences
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}

                {/* Appearance Settings */}
                {activeTab === 'appearance' && (
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Appearance Settings</h2>
                    <div className="space-y-4">
                      <div>
                        <span className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Theme
                        </span>
                        <div className="flex space-x-4">
                          <button
                            type="button"
                            onClick={() => theme === 'dark' && toggleTheme()}
                            className={`relative rounded-lg border p-4 flex flex-col items-center space-y-2 ${
                              theme === 'light'
                                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                : 'border-gray-300 dark:border-gray-600'
                            }`}
                          >
                            <Sun className={`h-6 w-6 ${theme === 'light' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`} />
                            <span className={`text-sm font-medium ${theme === 'light' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white'}`}>
                              Light
                            </span>
                            {theme === 'light' && (
                              <span className="absolute -top-1 -right-1 bg-blue-600 rounded-full p-1">
                                <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 12 12">
                                  <path d="M3.707 5.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L5 6.586 3.707 5.293z" />
                                </svg>
                              </span>
                            )}
                          </button>
                          <button
                            type="button"
                            onClick={() => theme === 'light' && toggleTheme()}
                            className={`relative rounded-lg border p-4 flex flex-col items-center space-y-2 ${
                              theme === 'dark'
                                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                : 'border-gray-300 dark:border-gray-600'
                            }`}
                          >
                            <Moon className={`h-6 w-6 ${theme === 'dark' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`} />
                            <span className={`text-sm font-medium ${theme === 'dark' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white'}`}>
                              Dark
                            </span>
                            {theme === 'dark' && (
                              <span className="absolute -top-1 -right-1 bg-blue-600 rounded-full p-1">
                                <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 12 12">
                                  <path d="M3.707 5.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L5 6.586 3.707 5.293z" />
                                </svg>
                              </span>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Language Settings */}
                {activeTab === 'language' && (
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Language Settings</h2>
                    <form onSubmit={handleSaveSettings}>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="language" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Display Language
                          </label>
                          <select
                            id="language"
                            name="language"
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          >
                            <option value="english">English</option>
                            <option value="hindi">Hindi</option>
                            <option value="marathi">Marathi</option>
                            <option value="gujarati">Gujarati</option>
                            <option value="tamil">Tamil</option>
                            <option value="telugu">Telugu</option>
                          </select>
                        </div>
                        <div className="flex justify-end">
                          <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            <Save className="mr-2 h-4 w-4" />
                            Save Preferences
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;