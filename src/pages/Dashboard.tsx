import React, { useState } from 'react';
import { 
  BarChart3, 
  PieChart, 
  Users, 
  Briefcase, 
  GraduationCap, 
  Building2, 
  LineChart,
  ArrowUpRight,
  ArrowDownRight,
  Calendar
} from 'lucide-react';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';
import DepartmentCard from '../components/DepartmentCard';
import StatCard from '../components/StatCard';
import Chart from '../components/Chart';
import RecentActivities from '../components/RecentActivities';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleDepartmentClick = (department: string) => {
    navigate(`/${department.toLowerCase()}`);
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
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Department Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400">Welcome to the Labour, Skill Development and Employment Department Dashboard</p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatCard 
              title="Total Employees" 
              value="2,845" 
              change="+12.5%" 
              isPositive={true} 
              icon={<Users className="h-6 w-6 text-blue-500" />} 
            />
            <StatCard 
              title="Active Projects" 
              value="142" 
              change="+8.2%" 
              isPositive={true} 
              icon={<Briefcase className="h-6 w-6 text-green-500" />} 
            />
            <StatCard 
              title="Training Programs" 
              value="38" 
              change="-3.1%" 
              isPositive={false} 
              icon={<GraduationCap className="h-6 w-6 text-purple-500" />} 
            />
            <StatCard 
              title="Sub-departments" 
              value="12" 
              change="+0%" 
              isPositive={true} 
              icon={<Building2 className="h-6 w-6 text-orange-500" />} 
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Chart 
              title="Department Budget Allocation" 
              type="bar" 
              icon={<BarChart3 className="h-5 w-5 text-gray-500 dark:text-gray-400" />} 
            />
            <Chart 
              title="Employment Statistics" 
              type="line" 
              icon={<LineChart className="h-5 w-5 text-gray-500 dark:text-gray-400" />} 
            />
          </div>

          {/* Departments and Activities */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Departments</h2>
                  <button 
                    className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                    onClick={() => navigate('/analytics')}
                  >
                    View All
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <DepartmentCard 
                    title="Labour Department" 
                    description="Oversees labor regulations, worker welfare, and employment standards"
                    icon={<Briefcase className="h-8 w-8 text-blue-500" />}
                    stats={[
                      { label: "Employees", value: "845" },
                      { label: "Projects", value: "32" }
                    ]}
                    onClick={() => handleDepartmentClick('labour')}
                  />
                  <DepartmentCard 
                    title="Skill Development" 
                    description="Focuses on vocational training and skill enhancement programs"
                    icon={<GraduationCap className="h-8 w-8 text-green-500" />}
                    stats={[
                      { label: "Employees", value: "612" },
                      { label: "Programs", value: "28" }
                    ]}
                    onClick={() => handleDepartmentClick('skill')}
                  />
                  <DepartmentCard 
                    title="Employment" 
                    description="Manages job creation initiatives and employment services"
                    icon={<Users className="h-8 w-8 text-purple-500" />}
                    stats={[
                      { label: "Employees", value: "723" },
                      { label: "Initiatives", value: "45" }
                    ]}
                    onClick={() => handleDepartmentClick('employment')}
                  />
                  <DepartmentCard 
                    title="Administration" 
                    description="Handles administrative functions and interdepartmental coordination"
                    icon={<Building2 className="h-8 w-8 text-orange-500" />}
                    stats={[
                      { label: "Employees", value: "665" },
                      { label: "Processes", value: "37" }
                    ]}
                    onClick={() => navigate('/settings')}
                  />
                </div>
              </div>
            </div>
            <div>
              <RecentActivities />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;