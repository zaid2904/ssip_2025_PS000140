import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Home, 
  Briefcase, 
  GraduationCap, 
  Users, 
  Settings, 
  HelpCircle, 
  LogOut,
  X,
  Building2,
  FileText,
  BarChart3
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signOut } = useAuth();

  const handleNavigation = (path: string) => {
    navigate(path);
    setSidebarOpen(false);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden" 
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <Building2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="ml-2 text-lg font-semibold text-gray-800 dark:text-white">LSDE Dashboard</span>
          </div>
          <button 
            className="p-1 rounded-md lg:hidden hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="px-3 py-4">
          <div className="space-y-1">
            <button
              className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/') 
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={() => handleNavigation('/')}
            >
              <Home className="mr-3 h-5 w-5" />
              Dashboard
            </button>

            <p className="px-3 pt-5 pb-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Departments
            </p>

            <button
              className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/labour') 
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={() => handleNavigation('/labour')}
            >
              <Briefcase className="mr-3 h-5 w-5" />
              Labour
            </button>

            <button
              className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/skill') 
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={() => handleNavigation('/skill')}
            >
              <GraduationCap className="mr-3 h-5 w-5" />
              Skill Development
            </button>

            <button
              className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/employment') 
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={() => handleNavigation('/employment')}
            >
              <Users className="mr-3 h-5 w-5" />
              Employment
            </button>

            <p className="px-3 pt-5 pb-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Reports
            </p>

            <button
              className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/documents') 
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={() => handleNavigation('/documents')}
            >
              <FileText className="mr-3 h-5 w-5" />
              Documents
            </button>

            <button
              className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/analytics') 
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={() => handleNavigation('/analytics')}
            >
              <BarChart3 className="mr-3 h-5 w-5" />
              Analytics
            </button>
          </div>

          <div className="pt-8 mt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="space-y-1">
              <button
                className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/settings') 
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                onClick={() => handleNavigation('/settings')}
              >
                <Settings className="mr-3 h-5 w-5" />
                Settings
              </button>

              <button
                className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/help') 
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                onClick={() => handleNavigation('/help')}
              >
                <HelpCircle className="mr-3 h-5 w-5" />
                Help & Support
              </button>

              <button
                className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                onClick={handleSignOut}
              >
                <LogOut className="mr-3 h-5 w-5" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;