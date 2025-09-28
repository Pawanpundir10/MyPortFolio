import React, { useState, useEffect } from 'react';

// Data Imports
import portfolioConfig from './data/portfolioConfig';
import { fileStructure } from './data/fileStructure';
import { menuItems } from './data/menuItems';
import { activityItems, bottomActivityItems } from './data/activityItems';

// Component Imports
import Layout from './components/Layout';

const findFileById = (id, files = fileStructure) => {
  for (const file of files) {
    if (file.id === id) return file;
    if (file.children) {
      const found = findFileById(id, file.children);
      if (found) return found;
    }
  }
  return null;
}

function App() {
  // --- UPDATED INITIAL STATE ---
  // Start with no tabs open and no active tab
  const [openTabs, setOpenTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  
  // The portfolio folder will now be collapsed by default
  const [expandedFolders, setExpandedFolders] = useState([]);
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuClick = (label, e) => {
    e.stopPropagation();
    setOpenMenu(prev => (prev === label ? null : label));
  };
  
  // Close menu if clicking outside
  useEffect(() => {
    const close = () => setOpenMenu(null);
    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, []);


  const openNewTab = (file) => {
    if (!file || !file.id) return;
    if (!openTabs.find(tab => tab.id === file.id)) {
      setOpenTabs(prevTabs => [...prevTabs, file]);
    }
    setActiveTab(file.id);
  };
  
  const handleActivityItemClick = (fileId) => {
    const fileToOpen = findFileById(fileId);
    if (fileToOpen) {
      openNewTab(fileToOpen);
    }
  }

  const closeTab = (tabId) => {
    const newTabs = openTabs.filter(tab => tab.id !== tabId);
    setOpenTabs(newTabs);
    if (activeTab === tabId) {
      setActiveTab(newTabs.length > 0 ? newTabs[newTabs.length - 1].id : null);
    }
  };

  const toggleFolder = (folderId) => {
    setExpandedFolders(prev =>
      prev.includes(folderId)
        ? prev.filter(id => id !== folderId)
        : [...prev, folderId]
    );
  };

  return (
    <Layout
      // State
      activeTab={activeTab}
      openTabs={openTabs}
      expandedFolders={expandedFolders}
      openMenu={openMenu}
      // Data
      menuItems={menuItems}
      activityItems={activityItems}
      bottomActivityItems={bottomActivityItems}
      fileStructure={fileStructure}
      config={portfolioConfig}
      // Handlers
      onTabClick={setActiveTab}
      onTabClose={closeTab}
      onFileClick={openNewTab}
      onFolderToggle={toggleFolder}
      onActivityItemClick={handleActivityItemClick}
      onOpenFile={openNewTab}
      onMenuClick={handleMenuClick}
    />
  );
}

export default App;

