export interface Course {
  id: string;
  code: string;
  title: string;
  category: 'CS' | 'Math' | 'Other';
}

export interface Extracurricular {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
}

export const educationData = {
  university: "Brown University",
  degree: "Sc.B. Computer Science",
  gpa: "4.0",
  period: "2022 - 2026",
  location: "Providence, RI",
  courses: [
    { id: '1', code: 'CS1470', title: 'Deep Learning', category: 'CS' },
    { id: '2', code: 'CS1420', title: 'Machine Learning', category: 'CS' },
    { id: '3', code: 'CS1380', title: 'Distributed Systems', category: 'CS' },
    { id: '4', code: 'CS1670', title: 'Operating Systems', category: 'CS' },
    { id: '5', code: 'CS0330', title: 'Computer Systems', category: 'CS' },
    { id: '6', code: 'CS0220', title: 'Discrete Structures', category: 'CS' },
  ] as Course[],
  extracurriculars: [
    {
      id: '1',
      role: 'Full Stack Developer',
      organization: 'Hack@Brown',
      period: 'Jan 2023 - Present',
      description: 'Building tools for the organizing team.'
    },
    {
      id: '2',
      role: 'Teaching Assistant',
      organization: 'CS0320',
      period: 'Aug 2023 - Dec 2023',
      description: 'Mentored 10+ student groups on software engineering projects.'
    }
  ] as Extracurricular[]
};
