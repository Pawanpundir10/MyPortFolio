import React from 'react';
import { Briefcase, User, Mail, Github } from 'lucide-react';

// Animation styles
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fadeIn 0.8s ease-out forwards;
  }
`;

function Welcome({ profile, onOpenFile }) {
  const welcomeCards = [
    {
      id: 'about',
      name: 'about.html',
      icon: User,
      title: 'About Me',
      description: 'Learn more about my background, skills, and passion for development.'
    },
    {
      id: 'projects',
      name: 'projects.jsx',
      icon: Briefcase,
      title: 'Explore Projects',
      description: 'View a curated selection of my recent work and personal projects.'
    },
    {
      id: 'contact',
      name: 'contact.css',
      icon: Mail,
      title: 'Get in Touch',
      description: 'Have a question or a project in mind? Let\'s connect.'
    },
     {
      id: 'github',
      name: 'github.md',
      icon: Github,
      title: 'View on GitHub',
      description: 'See all my public repositories and contributions on my GitHub profile.'
    }
  ];

  return (
    <>
      <style>{styles}</style>
      <div className="relative h-full flex flex-col items-center justify-center text-center p-4 overflow-hidden">
        {/* Static background shapes */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500 rounded-full opacity-20 filter blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-teal-400 rounded-full opacity-20 filter blur-3xl"></div>
        
        <div className="relative z-10">
          <h1 style={{ animationDelay: '0.2s' }} className="animate-fade-in text-5xl sm:text-6xl font-bold text-white opacity-0">
            Welcome to My Portfolio 
          </h1>
          <p style={{ animationDelay: '0.6s' }} className="animate-fade-in text-gray-400 mt-6 max-w-2xl mx-auto opacity-0">
            This is my interactive portfolio, built to look and feel like a code editor. Click on the cards below or use the file explorer on the left to navigate.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {welcomeCards.map((card, index) => (
              <div
                key={card.id}
                style={{ animationDelay: `${0.8 + index * 0.2}s` }}
                onClick={() => onOpenFile({ id: card.id, name: card.name })}
                className="animate-fade-in opacity-0 group bg-[#252526]/80 backdrop-blur-sm p-6 rounded-lg border border-gray-700 text-center cursor-pointer transform hover:-translate-y-2 transition-transform duration-300"
              >
                <card.icon className="w-12 h-12 text-blue-400 mx-auto mb-4 transition-colors group-hover:text-blue-300" />
                <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
