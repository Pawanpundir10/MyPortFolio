import React from 'react';
import FileExplorer from './FileExplorer';

function Sidebar({ fileStructure, expandedFolders, onFileClick, onFolderToggle }) {
  return (
    <div className="w-64 bg-[#252526] py-2">
      <h2 className="text-xs text-gray-400 uppercase tracking-wider px-4 mb-2">Explorer</h2>
      <FileExplorer 
        items={fileStructure}
        expandedFolders={expandedFolders}
        onFileClick={onFileClick}
        onFolderToggle={onFolderToggle}
      />
    </div>
  );
}
export default Sidebar;