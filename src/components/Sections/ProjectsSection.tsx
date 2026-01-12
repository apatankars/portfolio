import React from 'react';
import ProjectGrid from '../FileSystem/ProjectGrid';
import { projects } from '../../data/content/projects';

const ProjectsSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-neon-cyan mb-6 font-mono flex items-center gap-2">
        <span className="animate-pulse">▶</span> PROJECTS
      </h2>
      <ProjectGrid projects={projects} />
    </div>
  );
};

export default ProjectsSection;
