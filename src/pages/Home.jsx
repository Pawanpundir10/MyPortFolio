import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

// This is a custom blinking cursor for the typing animation
const BlinkingCursor = () => (
  <span className="ml-1 w-1 h-6 sm:h-8 bg-gray-300 animate-blink" />
);

// Keyframes for the blinking animation
const styles = `
  @keyframes blink {
    50% { opacity: 0; }
  }
  .animate-blink {
    animation: blink 1s step-end infinite;
  }
`;

function Home({ profile, onOpenFile }) {
  const [typedTitle, setTypedTitle] = useState('');

  useEffect(() => {
    // Use optional chaining and trim to ensure we have a clean string
    const titleToAnimate = (profile?.title || '').trim();
    if (!titleToAnimate) return; // Exit if there's no title to animate

    setTypedTitle(''); // Reset before starting animation
    
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < titleToAnimate.length) {
        // Use substring for a more reliable animation update
        setTypedTitle(titleToAnimate.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 150); // Adjust typing speed here (in ms)

    // Cleanup function to clear the interval when the component unmounts or title changes
    return () => clearInterval(intervalId);
  }, [profile?.title]); // Depend on profile.title to re-run the effect if it changes

  return (
    <>
      <style>{styles}</style>
      <div className="h-full flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
        
        {/* Static background shapes (non-animated) */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500 rounded-full opacity-20 filter blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-teal-400 rounded-full opacity-20 filter blur-3xl"></div>

        <div className="relative z-10">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-300 to-green-300 py-2">
            {profile?.name || 'Your Name'}
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mt-4 h-8 flex items-center justify-center">
            {typedTitle}
            {/* Show cursor only when typing is complete */}
            {typedTitle.length === (profile?.title || '').trim().length && <BlinkingCursor />}
          </p>

          <p className="max-w-xl mx-auto text-gray-400 mt-8 text-lg">
            Final-year CS student building full-stack SaaS apps with React, Node.js, and AI-powered systems. Welcome to my digital workspace.
          </p>

          <div className="mt-12 flex justify-center gap-4">
            <button
              onClick={() => onOpenFile({ id: 'projects', name: 'projects.js' })}
              className="group flex items-center gap-2 px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 transition-all duration-300 shadow-lg"
            >
              <span className="font-semibold">View Work</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => onOpenFile({ id: 'contact', name: 'contact.css' })}
              className="group flex items-center gap-2 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-blue-500/30 shadow-lg"
            >
               <Mail className="w-5 h-5" />
              <span className="font-semibold">Contact Me</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

