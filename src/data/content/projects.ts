import type { ProjectData } from '../../components/FileSystem/ProjectCard';

export const projects: ProjectData[] = [
  {
    id: 'neural-shell',
    title: 'Neural Shell',
    description: 'A cyberpunk-themed portfolio terminal.',
    fullDescription: 'Authentication-free, browser-based terminal emulator built with React and Tailwind CSS. Features a custom filesystem, command parsing, and retro CRT aesthetics.',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    links: {
        github: 'https://github.com/armaanpatankar/neural-shell',
        demo: '#'
    }
  },
  {
     id: 'ai-ta',
     title: 'AI Teaching Assistant',
     description: 'LLM-powered grading and feedback system.',
     fullDescription: 'Automated grading pipeline integrating GPT-4 to provide semantic feedback on student code submissions. Reduced grading time by 60%.',
     technologies: ['Python', 'FastAPI', 'OpenAI API', 'Docker'],
     links: {
        github: '#',
        demo: '#'
     }
  },
  {
     id: 'ray-tracer',
     title: 'Rust Ray Tracer',
     description: 'High-performance real-time ray tracer.',
     fullDescription: 'Parallelized ray tracer supporting global illumination, soft shadows, and Monte Carlo integration. Benchmarked 2x faster than C++ reference.',
     technologies: ['Rust', 'WGPU', 'Linear Algebra'],
     links: {
        github: '#'
     }
  }
];
