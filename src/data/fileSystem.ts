import type { ProjectData } from '../components/FileSystem/ProjectCard';
import { aboutMe, contactInfo, skills } from './content/profile';
import { projects } from './content/projects';
import { experienceLog, educationData } from './content/experience';

export interface SystemFile {
  name: string;
  type: 'file' | 'directory';
  content?: string | SystemNode[] | ProjectData[] | SystemNode;
  description?: string;
  metadata?: {
    view?: 'grid' | 'list';
  };
}

export interface SystemNode {
    [key: string]: SystemFile;
}

export const fileSystem: SystemNode = {
  'about.md': {
    name: 'about.md',
    type: 'file',
    content: aboutMe,
  },
  'skills.txt': {
    name: 'skills.txt',
    type: 'file',
    content: skills,
  },
  'experience.log': {
    name: 'experience.log',
    type: 'file',
    content: experienceLog,
  },
  'contact.md': {
    name: 'contact.md',
    type: 'file',
    content: contactInfo,
  },
  'projects': {
    name: 'projects',
    type: 'directory',
    description: 'Project containers',
    metadata: { view: 'grid' },
    content: projects
  },
  'education': {
      name: 'education',
      type: 'directory',
      description: 'Academic records',
      content: educationData as any
  }
};
