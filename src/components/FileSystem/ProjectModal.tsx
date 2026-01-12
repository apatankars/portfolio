import React from 'react';
import type { ProjectData } from './ProjectCard';
import { useTypewriter } from '../../hooks/useTypewriter';

interface ProjectModalProps {
  project: ProjectData;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { displayedText } = useTypewriter(project.fullDescription, 20);

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-terminal-black border-4 border-neon-green max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-terminal-gray/50 p-4 flex items-center justify-between border-b-2 border-neon-green/30">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-neon-green animate-pulse"></div>
            </div>
            <span className="text-neon-cyan font-mono text-sm">{project.id}.sh - EXPANDED VIEW</span>
          </div>
          <button 
            onClick={onClose}
            className="text-neon-green hover:text-neon-pink transition-colors font-mono text-xl font-bold"
          >
            ✕
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8">
          {/* Project Image Placeholder */}
          <div className="mb-6 border-2 border-neon-green/30 p-4 bg-terminal-gray/20">
            <div className="aspect-video bg-gradient-to-br from-neon-green/10 to-neon-cyan/10 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4 animate-pulse">🖼️</div>
                <p className="text-neon-green/60 font-mono text-sm">
                  [Project Screenshot Placeholder]
                </p>
                <p className="text-neon-green/40 font-mono text-xs mt-2">
                  Add images to public/projects/{project.id}/
                </p>
              </div>
            </div>
          </div>

          {/* Project Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-neon-cyan mb-4 font-mono">
            {project.title}
          </h2>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map(tech => (
              <span 
                key={tech} 
                className="text-xs border-2 border-neon-pink/70 text-neon-pink px-3 py-1 font-mono bg-neon-pink/5"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Full Description with Typewriter */}
          <div className="mb-6">
            <h3 className="text-neon-green font-mono text-sm mb-2 opacity-80">/// DESCRIPTION</h3>
            <p className="text-neon-green/90 font-mono text-sm md:text-base leading-relaxed">
              {displayedText}
              <span className="animate-pulse">_</span>
            </p>
          </div>

          {/* Links */}
          {project.links && (
            <div className="flex gap-4 pt-6 border-t-2 border-neon-green/20">
              {project.links.github && project.links.github !== '#' && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-terminal-black transition-all font-mono text-sm"
                >
                  [ VIEW ON GITHUB ]
                </a>
              )}
              {project.links.demo && project.links.demo !== '#' && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-terminal-black transition-all font-mono text-sm"
                >
                  [ LIVE DEMO ]
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
