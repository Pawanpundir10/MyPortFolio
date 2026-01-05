import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Github from '../pages/Github';
import Welcome from '../pages/Welcome'; 

function Editor({ activeTab, config, onOpenFile }) {
  const renderContent = () => {
    if (!activeTab) {
      return <Welcome profile={config.profile} onOpenFile={onOpenFile} />;
    }

    switch (activeTab) {
      case 'home':
        return <Home profile={config.profile} onOpenFile={onOpenFile} />;
      case 'about':
        return <About profile={config.profile} />;
      case 'projects':
        return <Projects projects={config.projects} />;
      case 'contact':
        return <Contact contact={config.contact} />;
      case 'github':
        return <Github githubUser={config.contact.github} />;
      default:
        return <Welcome profile={config.profile} onOpenFile={onOpenFile} />;
    }
  };

  return (
    <div className="flex-1 bg-[#1e1e1e] overflow-y-auto">
      {renderContent()}
    </div>
  );
}

export default Editor;

