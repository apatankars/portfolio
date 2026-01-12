import React from 'react';
import { experienceLog } from '../../data/content/experience';

const ExperienceSection: React.FC = () => {
  // Parse experience log to extract structured data
  const parseExperience = (log: string) => {
    const entries = log.trim().split('\n\n').filter(e => e.trim());
    return entries.map(entry => {
      const lines = entry.split('\n');
      const headerMatch = lines[0].match(/\[(.*?)\]\s*\[(.*?)\]\s*(.*)/);
      const details = lines.slice(1).join('\n');
      
      if (headerMatch) {
        return {
          date: headerMatch[1],
          level: headerMatch[2],
          title: headerMatch[3],
          details
        };
      }
      return null;
    }).filter(Boolean);
  };

  const experiences = parseExperience(experienceLog);

  return (
    <div>
      <h2 className="text-2xl font-bold text-neon-cyan mb-6 font-mono flex items-center gap-2">
        <span className="animate-pulse">▶</span> EXPERIENCE
      </h2>
      
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div 
            key={idx} 
            className="group relative p-6 border border-neon-green/30 bg-black/40 overflow-hidden transition-all duration-300 hover:border-neon-green/80"
          >
            {/* Dynamic Background Gradient on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r from-transparent via-neon-green to-transparent bg-[length:200%_auto] animate-shimmer pointer-events-none"></div>

            {/* Decorative Corners */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neon-green/50 transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:border-neon-green"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neon-green/50 transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:border-neon-green"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-neon-green/50 transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:border-neon-green"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neon-green/50 transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:border-neon-green"></div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              {/* Left Column: Title & Details */}
              <div className="flex-1">
                 <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-neon-green font-mono group-hover:text-neon-cyan transition-colors">
                      {exp!.title}
                    </h3>
                    <span className={`text-xs px-2 py-0.5 font-mono border rounded ${
                        exp!.level === 'INFO' ? 'border-neon-cyan/50 text-neon-cyan' :
                        exp!.level === 'INIT' ? 'border-neon-pink/50 text-neon-pink' :
                        'border-neon-green/50 text-neon-green'
                      }`}>
                        {exp!.level}
                    </span>
                 </div>
                 
                 <pre className="text-sm text-neon-green/80 font-mono whitespace-pre-wrap pl-4 border-l-2 border-neon-green/20 group-hover:border-neon-green/50 transition-colors">
                    {exp!.details}
                 </pre>
              </div>

               {/* Right Column: Date & Meta */}
              <div className="md:text-right shrink-0">
                 <div className="text-neon-cyan/70 font-mono text-xs mb-1 bg-neon-cyan/5 px-2 py-1 inline-block rounded">
                   [{exp!.date}]
                 </div>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
