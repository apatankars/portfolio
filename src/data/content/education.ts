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
  degree: "Sc.B. Computer Science - AI/ML & Systems",
  gpa: "4.0",
  period: "2022 - 2026",
  location: "Providence, RI",
  courses: [
  { "id": "1", "code": "CS0150", "title": "Object-Oriented Programming", "category": "CS" },
  { "id": "2", "code": "CS0200", "title": "Data Structures and Algorithms", "category": "CS" },
  { "id": "3", "code": "CS0220", "title": "Discrete Structures", "category": "CS" },
  { "id": "4", "code": "CS0300", "title": "Computer Systems", "category": "CS" },
  { "id": "5", "code": "CS0320", "title": "Software Engineering", "category": "CS" },
  { "id": "6", "code": "CS1270", "title": "Database Management Systems", "category": "CS" },
  { "id": "7", "code": "CS1380", "title": "Distributed Systems", "category": "CS" },
  { "id": "8", "code": "CS1390", "title": "Systems for Machine Learning", "category": "CS" },
  { "id": "9", "code": "CS1420", "title": "Machine Learning", "category": "CS" },
  { "id": "10", "code": "CS1460", "title": "Computational Lingustics", "category": "CS" },
  { "id": "11", "code": "CS1470", "title": "Deep Learning", "category": "CS" },
  { "id": "12", "code": "CS1650", "title": "Software Security and Exploitations", "category": "CS" },
  { "id": "13", "code": "CS1730", "title": "Design of Programming Languages", "category": "CS" },
  { "id": "14", "code": "CS2951F", "title": "Reinforcement Learning", "category": "CS" }
] as Course[],
  extracurriculars: [
    {
      id: '1',
      role: 'Head Teaching Assistant',
      organization: 'CS1470 Deep Learning',
      period: 'Jan 2025 - Present',
      description: 'Leading a team of 10+ TAs and collaborating with faculty to develop lectures and assignments for 200+ students.'
    },
    {
      id: '2',
      role: 'Web Director',
      organization: 'Brown Political Review',
      period: 'Sep 2023 - Present',
      description: 'Led website overhaul using Next.js and WordPress REST API, serving 1,500+ monthly visitors.'
    },
    {
      id: '3',
      role: 'Academic Director',
      organization: 'Brown Economics Department Undergraduate Group',
      period: 'Sep 2023 - May 2025',
      description: 'Led website overhaul using Next.js and WordPress REST API, serving 1,500+ monthly visitors.'
    }
  ] as Extracurricular[]
};