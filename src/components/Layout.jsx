
import React from 'react';
import MenuBar from './MenuBar';
import ActivityBar from './ActivityBar';
import Sidebar from './Sidebar';
import Editor from './Editor';
import StatusBar from './StatusBar';
import TabBar from './TabBar';

function Layout({
  // State
  activeTab,
  openTabs,
  expandedFolders,
  openMenu,
  // Data
  menuItems,
  activityItems,
  bottomActivityItems,
  fileStructure,
  config,
  // Handlers
  onTabClick,
  onTabClose,
  onFileClick,
  onFolderToggle,
  onActivityItemClick,
  onOpenFile,
  onMenuClick,
}) {
  return (
    <div className="h-screen bg-[#1e1e1e] text-white font-mono flex flex-col">
      <MenuBar menuItems={menuItems} openMenu={openMenu} onMenuClick={onMenuClick} />
      <div className="flex flex-1 overflow-hidden">
        <ActivityBar 
          topItems={activityItems} 
          bottomItems={bottomActivityItems} 
          onItemClick={onActivityItemClick}
        />
        <Sidebar 
          fileStructure={fileStructure}
          expandedFolders={expandedFolders}
          onFileClick={onFileClick}
          onFolderToggle={onFolderToggle}
        />
        <div className="flex-1 flex flex-col">
          <TabBar 
            tabs={openTabs}
            activeTab={activeTab}
            onTabClick={onTabClick}
            onTabClose={onTabClose}
          />
          <Editor 
            activeTab={activeTab} 
            config={config}
            onOpenFile={onOpenFile}
          />
          <StatusBar />
        </div>
      </div>
    </div>
  );
}

export default Layout;
