import React from 'react';
import { Code, Database, Server, PenTool } from 'lucide-react';

// Example skills - you can customize these in your portfolioConfig.js if you want
const skills = [
  { name: 'Frontend', icon: Code, description: 'HTML, CSS, JS, ReactJS, Tailwind CSS' },
  { name: 'Databases', icon: Database, description: 'MongoDB, MySQL'},
  { name: 'UI/UX Design', icon: PenTool, description: 'Figma, Wireframing' },
];

function About({ profile }) {
  return (
    <div className="h-full overflow-y-auto bg-[#1e1e1e] p-4 text-gray-300 sm:p-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-2 text-4xl font-bold text-white sm:text-5xl">About Me</h1>
          <div className="mx-auto h-1 w-24 rounded-full bg-blue-500"></div>
        </div>

        {/* Profile Section */}
        <div className="mb-12 flex cursor-pointer flex-col items-center gap-8 rounded-lg border border-gray-700 bg-[#252526] p-8 transition-transform duration-300 ease-in-out hover:-translate-y-2 md:flex-row md:gap-12">
          
          {/* This container div creates the circular frame */}
          <div className="h-48 w-48 flex-shrink-0 overflow-hidden rounded-full border-4 border-gray-700 shadow-lg md:h-60 md:w-60">
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              className="h-full w-full object-cover" // object-cover tells the image to fill the circle
            />
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-white">
              Hi, I'm <span className="text-blue-400">{profile.name}</span>
            </h2>
            <p className="mt-2 text-xl text-gray-400">{profile.title}</p>
            <p className="mt-4 max-w-lg text-gray-400">
              I specialize in building modern, responsive web applications. I am passionate about turning complex problems into beautiful, intuitive digital experiences.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold text-white">My Skillset</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="rounded-lg border border-gray-700 bg-[#252526] p-6 text-center shadow-md transition-transform duration-300 hover:-translate-y-2"
              >
                <skill.icon className="mx-auto mb-4 h-12 w-12 text-blue-400" />
                <h3 className="mb-2 text-xl font-semibold text-white">{skill.name}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

