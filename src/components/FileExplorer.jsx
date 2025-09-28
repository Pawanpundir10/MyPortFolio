import React from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { getFileIcon } from '../utils/getFileIcon';

function FileExplorer({ items, expandedFolders, onFileClick, onFolderToggle, depth = 0 }) {
  return items.map((item) => (
    <div key={item.id}>
      <div
        className="flex items-center px-2 py-1 hover:bg-[#2a2d2e] cursor-pointer"
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
        onClick={() => (item.type === 'file' ? onFileClick(item) : onFolderToggle(item.id))}
      >
        {item.type === 'folder' && (
          expandedFolders.includes(item.id)
            ? <ChevronDown size={16} className="text-gray-400 mr-1" />
            : <ChevronRight size={16} className="text-gray-400 mr-1" />
        )}
        <span className="mr-2">{item.type === 'folder' ? '📁' : getFileIcon(item.name)}</span>
        <span className="text-gray-300 text-sm">{item.name}</span>
      </div>
      {item.type === 'folder' &&
        expandedFolders.includes(item.id) &&
        item.children &&
        <FileExplorer 
            items={item.children} 
            expandedFolders={expandedFolders}
            onFileClick={onFileClick}
            onFolderToggle={onFolderToggle}
            depth={depth + 1}
        />
      }
    </div>
  ));
};
export default FileExplorer;