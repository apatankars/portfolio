import React, { useState } from 'react';
import ProjectCard, { type ProjectData } from './ProjectCard';
import ProjectModal from './ProjectModal';

interface ProjectGridProps {
  projects: ProjectData[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
        {projects.map(project => (
          <ProjectCard 
            key={project.id} 
            project={project}
            onExpand={setSelectedProject}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default ProjectGrid;
