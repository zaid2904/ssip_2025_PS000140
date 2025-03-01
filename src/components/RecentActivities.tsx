import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

const RecentActivities: React.FC = () => {
  const [activities, setActivities] = useState([
    {
      id: 1,
      title: "Budget Allocation Updated",
      department: "Labour Department",
      time: "2 hours ago",
      type: "update"
    },
    {
      id: 2,
      title: "New Training Program Added",
      department: "Skill Development",
      time: "5 hours ago",
      type: "add"
    },
    {
      id: 3,
      title: "Employment Report Published",
      department: "Employment",
      time: "Yesterday",
      type: "publish"
    },
    {
      id: 4,
      title: "Quarterly Review Meeting",
      department: "Administration",
      time: "Yesterday",
      type: "meeting"
    },
    {
      id: 5,
      title: "New Policy Document",
      department: "Labour Department",
      time: "2 days ago",
      type: "document"
    }
  ]);

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'update': return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300';
      case 'add': return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300';
      case 'publish': return 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300';
      case 'meeting': return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300';
      case 'document': return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300';
      default: return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300';
    }
  };

  const handleActivityClick = (id: number) => {
    alert(`Viewing details for activity #${id}`);
  };

  const handleLoadMore = () => {
    // In a real app, this would fetch more activities from an API
    const newActivities = [
      {
        id: 6,
        title: "Employee Onboarding",
        department: "Employment",
        time: "3 days ago",
        type: "add"
      },
      {
        id: 7,
        title: "Safety Inspection Completed",
        department: "Labour Department",
        time: "4 days ago",
        type: "update"
      }
    ];
    
    setActivities([...activities, ...newActivities]);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Recent Activities</h2>
        <button 
          className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          onClick={() => alert("Viewing all activities")}
        >
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div 
            key={activity.id} 
            className="flex items-start cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded-md transition-colors"
            onClick={() => handleActivityClick(activity.id)}
          >
            <div className={`p-2 rounded-lg ${getActivityColor(activity.type)}`}>
              <Calendar className="h-5 w-5" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-800 dark:text-white">{activity.title}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{activity.department}</p>
               <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
        <button 
          className="w-full py-2 px-4 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-md transition-colors"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default RecentActivities;