import React from 'react';
import { ArrowUpRight } from 'lucide-react';

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
          {projects.map(project => (
            <div 
              key={project.id} 
              className="group bg-[#252526] rounded-lg border border-gray-700 overflow-hidden
                         transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-blue-500/30 flex flex-col"
            >
              {/* Image Section */}
              <div className="aspect-video bg-gray-800">
                <img 
                  src={project.imageUrl} 
                  alt={project.name} 
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* The h-full class was removed from this div to fix the layout */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                
                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300 text-xs rounded-full">
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
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
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

