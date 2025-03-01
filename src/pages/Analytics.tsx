import React, { useState } from 'react';
import { BarChart3, LineChart, PieChart } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';
import Chart from '../components/Chart';

const Analytics: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
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
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Analytics Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400">Comprehensive data analysis across all departments</p>
          </div>

          {/* Tabs */}
          <div className="mb-6 border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex space-x-8">
              {['overview', 'labour', 'skill', 'employment'].map((tab) => (
                <button
                  key={tab}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <Chart 
                  title="Department Budget Allocation" 
                  type="pie" 
                  icon={<PieChart className="h-5 w-5 text-gray-500 dark:text-gray-400" />} 
                />
                <Chart 
                  title="Cross-Department Performance" 
                  type="bar" 
                  icon={<BarChart3 className="h-5 w-5 text-gray-500 dark:text-gray-400" />} 
                />
              </div>
              <div className="grid grid-cols-1 gap-6">
                <Chart 
                  title="Annual Trends Across Departments" 
                  type="line" 
                  icon={<LineChart className="h-5 w-5 text-gray-500 dark:text-gray-400" />} 
                />
              </div>
            </>
          )}

          {/* Labour Tab */}
          {activeTab === 'labour' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Chart 
                title="Labour Law Compliance" 
                type="bar" 
                icon={<BarChart3 className="h-5 w-5 text-gray-500 dark:text-gray-400" />} 
              />
              <Chart 
                title="Workplace Safety Incidents" 
                type="line" 
                icon={<LineChart className="h-5 w-5 text-gray-500 dark:text-gray-400" />} 
              />
              <Chart 
                title="Dispute Resolution Outcomes" 
                type="pie" 
                icon={<PieChart className="h-5 w-5 text-gray-500 dark:text-gray-400" />} 
              />
              <Chart 
                title="Labour Department Budget Utilization" 
                type="bar" 
                icon={<BarChart3 className="h-5 w-5 text-gray-500 dark:text-gray-400" />} 
              />
            </div>
          )}

          {/* Skill Tab */}
          {activeTab === 'skill' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Chart 
                title="Training Program Enrollment" 
                type="line" 
                icon={<LineChart className="h-5 w-5 text-gray-500 dark:text-gray-400" />} 
              />
              <Chart 
                title="Certification Success Rate" 
                type="bar" 
                icon={<BarChart3 className="h-5 w-5 text-gray-500 dark:text-gray-400" />} 
              />
              <Chart 
                title="Skill Distribution by Sector" 
                type="pie" 
                icon={<PieChart className="h-5 w-5 text-gray-500 dark:text-gray-400" />} 
              />
              <Chart 
                title="Training Infrastructure Utilization" 
                type="bar" 
                icon={<BarChart3 className="h-5 w-5 text-gray-500 dark:text-gray-400" />} 
              />
            </div>
          )}

          {/* Employment Tab */}
          {activeTab === 'employment' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Chart 
                title="Job Placement Success Rate" 
                type="line" 
                icon={<LineChart className="h-5 w-5 text-gray-500 dark:text-gray-400" />} 
              />
              <Chart 
                title="Employment by Sector" 
                type="pie" 
                icon={<PieChart className="h-5 w-5 text-gray-500 dark:text-gray-400" />} 
              />
              <Chart 
                title="Job Fair Attendance" 
                type="bar" 
                icon={<BarChart3 className="h-5 w-5 text-gray-500 dark:text-gray-400" />} 
              />
              <Chart 
                title="Unemployment Rate Trends" 
                type="line" 
                icon={<LineChart className="h-5 w-5 text-gray-500 dark:text-gray-400" />} 
              />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Analytics;