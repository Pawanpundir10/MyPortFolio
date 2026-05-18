import React from 'react';
import { Briefcase, User, Mail, Github, Sparkles } from 'lucide-react';

const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  @keyframes pulseGlow {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50% { opacity: 0.7; transform: scale(1.1); }
  }
  @keyframes gradientText {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  .animate-fade-in { animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  .animate-float { animation: float 6s ease-in-out infinite; }
  .animate-pulse-glow { animation: pulseGlow 8s ease-in-out infinite; }
  .animate-gradient-text { 
    background-size: 200% auto;
    animation: gradientText 4s linear infinite; 
  }

  /* Grid Background */
  .bg-grid-pattern {
    background-size: 40px 40px;
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
    -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
  }
`;

function Welcome({ profile, onOpenFile }) {
  const welcomeCards = [
    {
      id: 'about',
      name: 'about.html',
      icon: User,
      title: 'About Me',
      description: 'Discover my journey, tech stack, and what drives my passion.',
      bg: 'from-blue-500/20 to-cyan-400/20',
      text: 'text-cyan-400',
      shadow: 'hover:shadow-cyan-500/20'
    },
    {
      id: 'projects',
      name: 'projects.jsx',
      icon: Briefcase,
      title: 'Explore Projects',
      description: 'Dive into my latest full-stack applications and side projects.',
      bg: 'from-purple-500/20 to-pink-400/20',
      text: 'text-pink-400',
      shadow: 'hover:shadow-pink-500/20'
    },
    {
      id: 'contact',
      name: 'contact.css',
      icon: Mail,
      title: 'Get in Touch',
      description: 'Ready to collaborate? Send me a message and let\'s talk.',
      bg: 'from-emerald-500/20 to-teal-400/20',
      text: 'text-emerald-400',
      shadow: 'hover:shadow-emerald-500/20'
    },
    {
      id: 'github',
      name: 'github.md',
      icon: Github,
      title: 'GitHub Profile',
      description: 'Check out my open-source contributions and code quality.',
      bg: 'from-orange-500/20 to-amber-400/20',
      text: 'text-amber-400',
      shadow: 'hover:shadow-amber-500/20'
    }
  ];

  return (
    <>
      <style>{styles}</style>
      <div className="relative min-h-full w-full flex flex-col items-center justify-center py-12 px-4 overflow-x-hidden overflow-y-auto bg-[#1a1a1c]">
        
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-600/20 blur-[100px] animate-pulse-glow z-0 pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/20 blur-[120px] animate-pulse-glow z-0 pointer-events-none" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] left-[40%] w-[20vw] h-[20vw] rounded-full bg-teal-500/10 blur-[80px] animate-pulse-glow z-0 pointer-events-none" style={{ animationDelay: '4s' }}></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
          
          {/* Badge */}
          <div style={{ animationDelay: '0.1s' }} className="animate-fade-in opacity-0 mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-gray-300">Welcome to my Digital Workspace</span>
          </div>

          {/* Title */}
          <h1 style={{ animationDelay: '0.3s' }} className="animate-fade-in opacity-0 text-5xl md:text-7xl font-black tracking-tight text-center mb-6">
            <span className="text-white">Hello, I'm </span>
            <span className="animate-gradient-text bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400">
               {profile?.name || 'Pawan Singh'}
            </span>
          </h1>

          {/* Subtitle */}
          <p style={{ animationDelay: '0.5s' }} className="animate-fade-in opacity-0 text-gray-400 text-lg md:text-xl max-w-2xl text-center mb-16 leading-relaxed">
            I craft modern, scalable, and beautifully designed web applications. 
            Navigate through my interactive portfolio using the cards below or the sidebar explorer.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4 sm:px-8">
            {welcomeCards.map((card, index) => (
              <div
                key={card.id}
                style={{ animationDelay: `${0.7 + index * 0.15}s` }}
                onClick={() => onOpenFile({ id: card.id, name: card.name })}
                className={`animate-fade-in opacity-0 group relative p-[1px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 ${card.shadow} hover:shadow-2xl z-10`}
              >
                {/* Animated Gradient Border Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Inner Card Content */}
                <div className="relative h-full bg-[#222225]/80 backdrop-blur-xl border border-white/10 group-hover:border-white/20 p-8 rounded-2xl flex flex-col items-center text-center transition-all duration-500">
                  
                  {/* Icon Container */}
                  <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${card.bg} shadow-inner group-hover:scale-110 transition-transform duration-500 ease-out`}>
                     <card.icon className={`w-8 h-8 ${card.text} drop-shadow-lg`} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">{card.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}

export default Welcome;
