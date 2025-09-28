import React from 'react';

function ActivityBar({ topItems, bottomItems, onItemClick }) {
  return (
    <div className="w-12 bg-[#333333] flex flex-col items-center py-2">
      <div className="space-y-4">
        {topItems.map(item => (
          <button key={item.id} onClick={() => onItemClick(item.fileId)} title={item.id}>
            <item.icon className="text-gray-400 hover:text-white" />
          </button>
        ))}
      </div>
      <div className="flex-grow"></div>
      <div className="space-y-4">
        {bottomItems.map(item => (
          <button key={item.id} title={item.id}>
            <item.icon className="text-gray-400 hover:text-white" />
          </button>
        ))}
      </div>
    </div>
  );
}
export default ActivityBar;