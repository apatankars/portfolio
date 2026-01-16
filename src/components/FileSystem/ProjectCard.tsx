import React from 'react';

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  images?: string[];
  links?: {
    github?: string;
    demo?: string;
  };
}

interface ProjectCardProps {
  project: ProjectData;
  onExpand: (project: ProjectData) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onExpand }) => {
  return (
    <div 
        className="border border-neon-green/40 bg-terminal-black/80 p-0 overflow-hidden hover:border-neon-green transition-colors cursor-pointer group relative"
        onClick={() => onExpand(project)}
    >
      {/* Shimmer Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r from-transparent via-neon-green to-transparent bg-[length:200%_auto] animate-shimmer pointer-events-none z-0"></div>

      {/* Container Header */}
      <div className="bg-terminal-gray/50 p-2 flex items-center border-b border-neon-green/20 group-hover:bg-neon-green/10 transition-colors relative z-10">
        {/* Window controls */}
        <div className="flex gap-1.5 mr-3">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-neon-green/70"></div>
        </div>
        <div className="text-xs text-neon-green/80 font-mono flex-1 text-center truncate">
            {project.id}.sh
        </div>
      </div>

      {/* Thumbnail */}
      {project.images && project.images.length > 0 && (
        <div className="relative h-48 w-full overflow-hidden border-b border-neon-green/20 group-hover:opacity-90 transition-opacity">
          <img 
            src={project.images[0]} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              // Hide parent to avoid empty box issues if image fails, though layout space is preserved
              (e.target as HTMLImageElement).parentElement!.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-neon-green/10 mix-blend-overlay group-hover:bg-transparent transition-all"></div>
        </div>
      )}

      {/* Content */}
      <div className="p-4 relative z-10">
        <h3 className="text-neon-cyan font-bold text-lg mb-2 group-hover:underline decoration-neon-pink underline-offset-4">
            {project.title}
        </h3>
        
        <p className="text-sm text-neon-green/80 mb-4 font-light">
            {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-2">
            {project.technologies.map(tech => (
                <span key={tech} className="text-xs border border-neon-pink/50 text-neon-pink px-2 py-0.5 rounded-sm">
                    {tech}
                </span>
            ))}
        </div>
        
        <div className="mt-4 text-xs text-neon-green/60 font-mono">
          Click to expand ▶
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
