// Profile Picture - Place your image in public/ folder
export const profileImage = '/assets/profile.png'; // Update this path to your actual image

export const aboutMe = `
## HI, IT'S ME, ARMAAN!

## WHAT I DO
I am a senior studying computer science and international affairs at Brown University. I am actively looking for opportunities and experiences to help grow in my role as a machine learning and software engineer.

## HOW I GOT HERE
Spent last summer at STR building multi-agent RL systems that tried convinced robots that teamwork actually works. Before that, I spent a year working the Brown Political Review's website because I thought "how hard could it be?" (Reality: it was hard, but it shipped). Somewhere along the way, I ended up finishing my degree. 

## WHAT DRIVES ME
Rabbit holes. Everything is a rabbit hole. I love diving headfirst into a problem and seeing where it takes me. I'm drawn to the problems that really make me question if they are even solvable :) 

## OUTSIDE THE CODE
Likely on a climbing wall hanging on for dear life or listenting to ear-screeching electronic hyperpop.
`;

export interface ContactItem {
  platform: string;
  value: string;
  href: string;
  isEmail?: boolean;
}

export const contactItems: ContactItem[] = [
  {
    platform: 'EMAIL',
    value: 'armaan_patankar@brown.edu',
    href: 'mailto:armaan_patankar@brown.edu',
    isEmail: true
  },
  {
    platform: 'GITHUB',
    value: 'github.com/apatankars',
    href: 'https://github.com/apatankars',
  },
  {
    platform: 'LINKEDIN',
    value: 'linkedin.com/in/armaan-patankar',
    href: 'https://linkedin.com/in/armaan-patankar',
  }
];

export const contactInfo = `
# CONTACT PROTOCOLS

${contactItems.map(item => `- ${item.platform}: ${item.value}`).join('\n')}
`;

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  title: string;
  skills?: Skill[];
  tools?: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'LANGUAGES',
    skills: [
      { name: 'Python', level: 98 },
      { name: 'JavaScript/TypeScript', level: 90 },
      { name: 'Java', level: 85 },
      { name: 'SQL', level: 80 },
      { name: 'C/C++', level: 78 },
      { name: 'GoLang', level: 70 },
      { name: 'bash', level: 75 },
      { name: 'Racket/Plait', level: 65 }
    ]
  },
  {
    title: 'LIBRARIES & FRAMEWORKS',
    skills: [
      { name: 'PyTorch', level: 95 },
      { name: 'TensorFlow', level: 95 },
      { name: 'React/Next.js', level: 90 },
      
      
      { name: 'Ray/RLLib', level: 88 },
      { name: 'Node.js', level: 85 },
      { name: 'Jax', level: 80 },
      { name: 'CUDA', level: 80 },
      { name: 'NumPy', level: 92 },
      { name: 'pandas', level: 88 },
      { name: 'Playwright', level: 75 }
    ]
  },
  {
    title: 'TOOLS & PLATFORMS',
    skills: [
      { name: 'Git', level: 92 },
      { name: 'Docker', level: 82 },
      { name: 'AWS', level: 80 },
      { name: 'Linux', level: 85 },
      { name: 'Redis', level: 75 },
      { name: 'CloudFlare', level: 72 },
      { name: 'Firebase', level: 78 },
      { name: 'MATLAB', level: 70 },
      { name: 'Figma', level: 68 },
      { name: 'Postman', level: 75 }
    ]
  }
];

export const skills = `
[LANGUAGES]
${skillCategories[0].skills?.map(s => `${s.name.padEnd(12)} [${'#'.repeat(Math.floor(s.level / 5))}${'-'.repeat(20 - Math.floor(s.level / 5))}] ${s.level}%`).join('\n')}

[FRAMEWORKS]
${skillCategories[1].skills?.map(s => `${s.name.padEnd(12)} [${'#'.repeat(Math.floor(s.level / 5))}${'-'.repeat(20 - Math.floor(s.level / 5))}] ${s.level}%`).join('\n')}

[TOOLS]
${skillCategories[2].tools?.join(', ')}
`;
