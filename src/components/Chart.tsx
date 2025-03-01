import React, { ReactNode, useState } from 'react';

interface ChartProps {
  title: string;
  type: 'bar' | 'line' | 'pie';
  icon: ReactNode;
}

const Chart: React.FC<ChartProps> = ({ title, type, icon }) => {
  const [timeRange, setTimeRange] = useState('month');
  
  const handleExport = () => {
    alert(`Exporting ${title} chart data as CSV`);
  };
  
  const handleTimeRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeRange(e.target.value);
    // In a real app, this would trigger data refresh
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h2>
        <div className="flex items-center">
          {icon}
          <select 
            className="ml-2 text-sm text-gray-500 dark:text-gray-400 bg-transparent border-none focus:ring-0"
            value={timeRange}
            onChange={handleTimeRangeChange}
          >
            <option value="month">This Month</option>
            <option value="lastMonth">Last Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
          </select>
        </div>
      </div>
      
      <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded-lg transition-colors">
        {type === 'bar' && (
          <div className="w-full h-full p-4 flex items-end justify-around">
            {[65, 40, 85, 30, 55, 60, 75].map((height, index) => (
              <div key={index} className="relative group">
                <div 
                  className="w-8 bg-blue-500 dark:bg-blue-400 rounded-t-sm transition-all duration-300 hover:bg-blue-600 dark:hover:bg-blue-500"
                  style={{ height: `${height}%` }}
                ></div>
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-900 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {height}%
                </div>
              </div>
            ))}
          </div>
        )}
        
        {type === 'line' && (
          <div className="w-full h-full p-4 relative">
            <svg className="w-full h-full" viewBox="0 0 300 200">
              <polyline
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3"
                points="
                  0,150
                  50,120
                  100,140
                  150,80
                  200,90
                  250,60
                  300,70
                "
              />
              <polyline
                fill="none"
                stroke="#10b981"
                strokeWidth="3"
                strokeDasharray="5,5"
                points="
                  0,180
                  50,160
                  100,170
                  150,130
                  200,140
                  250,110
                  300,120
                "
              />
              {[0, 50, 100, 150, 200, 250, 300].map((x, i) => (
                <circle key={i} cx={x} cy={[150, 120, 140, 80, 90, 60, 70][i]} r="4" fill="#3b82f6" />
              ))}
            </svg>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 dark:text-gray-400 px-4">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
            </div>
          </div>
        )}
        
        {type === 'pie' && (
          <div className="relative w-48 h-48">
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3b82f6" strokeWidth="20" strokeDasharray="75 25" />
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="#10b981" strokeWidth="20" strokeDasharray="25 75" strokeDashoffset="-75" />
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="#8b5cf6" strokeWidth="20" strokeDasharray="15 85" strokeDashoffset="-50" />
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f59e0b" strokeWidth="20" strokeDasharray="10 90" strokeDashoffset="-35" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm font-medium text-gray-800 dark:text-gray-200">Total</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">100%</div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {type !== 'pie' ? (
        <div className="mt-4 flex justify-between text-xs text-gray-500 dark:text-gray-400">
          <div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
              <span>Current Period</span>
            </div>
            {type === 'line' && (
              <div className="flex items-center mt-1">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                <span>Previous Period</span>
              </div>
            )}
          </div>
          <button 
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm"
            onClick={handleExport}
          >
            Export Data
          </button>
        </div>
      ) : (
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
            <span className="text-gray-600 dark:text-gray-400">Category A (30%)</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
            <span className="text-gray-600 dark:text-gray-400">Category B (25%)</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-purple-500 mr-1"></div>
            <span className="text-gray-600 dark:text-gray-400">Category C (15%)</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
            <span className="text-gray-600 dark:text-gray-400">Category D (10%)</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chart;