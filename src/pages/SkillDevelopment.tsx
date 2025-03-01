import React, { useState } from 'react';
import { LineChart, PieChart } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';
import Chart from '../components/Chart';

const SkillDevelopment: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Skill Development Department</h1>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6 transition-colors">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Department Overview</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              The Skill Development Department focuses on enhancing workforce capabilities through 
              vocational training, certification programs, and industry partnerships to meet evolving market demands.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h3 className="font-medium text-blue-700 dark:text-blue-300">Key Responsibilities</h3>
                <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Vocational training programs</li>
                  <li>• Skill certification</li>
                  <li>• Industry partnerships</li>
                  <li>• Training infrastructure</li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h3 className="font-medium text-green-700 dark:text-green-300">Sub-departments</h3>
                <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Technical Training</li>
                  <li>• Entrepreneurship Development</li>
                  <li>• Digital Skills</li>
                  <li>• Rural Skill Mission</li>
                </ul>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <h3 className="font-medium text-purple-700 dark:text-purple-300">Current Initiatives</h3>
                <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Youth Skill Enhancement</li>
                  <li>• Industry 4.0 Readiness</li>
                  <li>• Women Empowerment Skills</li>
                  <li>• Green Jobs Training</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Chart 
              title="Training Program Enrollment" 
              type="line" 
              icon={<LineChart className="h-5 w-5 text-gray-500 dark:text-gray-400" />} 
            />
            <Chart 
              title="Skill Certification Distribution" 
              type="pie" 
              icon={<PieChart className="h-5 w-5 text-gray-500 dark:text-gray-400" />} 
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default SkillDevelopment;