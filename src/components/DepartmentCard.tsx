import React, { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';

interface Stat {
  label: string;
  value: string;
}

interface DepartmentCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  stats: Stat[];
  onClick?: () => void;
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({ title, description, icon, stats, onClick }) => {
  return (
    <div 
      className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow duration-200 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start">
        <div className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
          {icon}
        </div>
        <div className="ml-3 flex-1">
          <h3 className="text-md font-semibold text-gray-800 dark:text-white">{title}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{description}</p>
        </div>
      </div>
      
      <div className="mt-4 flex justify-between items-center">
        <div className="flex space-x-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-sm font-semibold text-gray-800 dark:text-white">{stat.value}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
        <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600">
          <ChevronRight className="h-5 w-5 text-gray-400 dark:text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default DepartmentCard;