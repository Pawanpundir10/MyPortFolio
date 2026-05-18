import React from 'react';
import { ArrowUpRight, Zap } from 'lucide-react';

function Projects({ projects }) {
  return (
    <div className="p-4 sm:p-8 text-gray-300 overflow-y-auto h-full">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">// My Projects</h1>
          <p className="text-gray-400">A selection of my recent work and personal projects.</p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#252526] rounded-xl border border-gray-700 overflow-hidden
                         transform hover:-translate-y-2 transition-all duration-300 ease-in-out
                         shadow-lg hover:shadow-blue-500/20 hover:border-blue-500/40 flex flex-col"
            >
              {/* Logo / Image area — white bg to show logos properly */}
              <div className="relative flex items-center justify-center bg-white" style={{ height: '180px' }}>
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />

                {/* Live Badge */}
                {project.liveLabel && (
                  <span className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-md">
                    <Zap className="w-3 h-3" />
                    {project.liveLabel}
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>

                <p className="text-gray-400 mb-4 flex-grow text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-5">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800 border border-gray-700 text-gray-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-blue-400 font-semibold
                             group-hover:text-blue-300 transition-colors duration-300"
                >
                  View Project
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
