// src/components/StatusBar.js
import React from 'react';
import { GitBranch } from 'lucide-react';

function StatusBar() {
  return (
    <div className="h-6 bg-[#3c3c3c] border-t border-[#2d2d30] flex items-center justify-between px-4 text-xs text-gray-400">
      <div className="flex items-center space-x-2 hover:bg-gray-600 px-2 rounded-sm cursor-pointer">
        <span></span>
      </div>
      <div className="flex items-center space-x-4">
        <span className="hover:bg-gray-600 px-2 rounded-sm cursor-pointer">Powered by React</span>
        <span className="hover:bg-gray-600 px-2 rounded-sm cursor-pointer">Spaces: 2</span>
        <span className="hover:bg-gray-600 px-2 rounded-sm cursor-pointer">UTF-8</span>
      </div>
    </div>
  );
}

export default StatusBar;
