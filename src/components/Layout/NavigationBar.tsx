import React from 'react';

type Section = 'about' | 'projects' | 'skills' | 'experience' | 'education' | 'contact';

interface NavigationBarProps {
  currentSection: Section;
  onSectionChange: (section: Section) => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ currentSection, onSectionChange }) => {
  const sections: { id: Section; label: string; icon: string }[] = [
    { id: 'about', label: 'ABOUT', icon: '[i]' },
    { id: 'projects', label: 'PROJECTS', icon: '</>' },
    { id: 'skills', label: 'SKILLS', icon: '[*]' },
    { id: 'experience', label: 'EXPERIENCE', icon: '[#]' },
    { id: 'education', label: 'EDUCATION', icon: '[^]' },
    { id: 'contact', label: 'CONTACT', icon: '[@]' },
  ];

  return (
    <nav className="w-full flex flex-wrap justify-between px-6 py-4 border-b-2 border-neon-green/40">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onSectionChange(section.id)}
          className={`
            px-4 py-2.5 text-sm font-mono transition-all duration-300 flex items-center gap-3 relative font-bold overflow-hidden group
            ${currentSection === section.id 
              ? 'bg-neon-purple text-white border-2 border-neon-purple shadow-lg shadow-neon-purple/70 scale-105' 
              : 'border-2 border-neon-purple/80 text-neon-purple bg-terminal-black hover:bg-neon-purple/30 hover:text-white hover:border-neon-purple hover:shadow-md hover:shadow-neon-purple/50 hover:scale-105'
            }
          `}
        >
          {/* Shimmer Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white to-transparent bg-[length:200%_auto] animate-shimmer pointer-events-none"></div>

          <span className={`text-base ${currentSection === section.id ? 'animate-pulse' : ''} relative z-10`}>
            {section.icon}
          </span>
          <span className="relative z-10">{section.label}</span>
          {currentSection === section.id && (
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-neon-green rounded-full animate-pulse border border-terminal-black z-10"></span>
          )}
        </button>
      ))}
    </nav>
  );
};

export default NavigationBar;
export type { Section };
