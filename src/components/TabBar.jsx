import React from 'react';
import { X } from 'lucide-react';
import { getFileIcon } from '../utils/getFileIcon';

function TabBar({ tabs, activeTab, onTabClick, onTabClose }) {
  return (
    <div className="flex bg-[#2d2d2d]">
      {tabs.map(tab => (
        <div
          key={tab.id}
          className={`flex items-center px-4 py-2 cursor-pointer border-r border-[#1e1e1e] ${
            activeTab === tab.id ? 'bg-[#1e1e1e] border-t-2 border-t-blue-500' : 'bg-[#2d2d2d]'
          }`}
          onClick={() => onTabClick(tab.id)}
        >
          <span className="mr-2">{getFileIcon(tab.name)}</span>
          <span className={`text-sm ${activeTab === tab.id ? 'text-white' : 'text-gray-400'}`}>
            {tab.name}
          </span>
          <button onClick={(e) => { e.stopPropagation(); onTabClose(tab.id); }} className="ml-4 p-1 rounded-full hover:bg-gray-700">
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  );
}
export default TabBar;