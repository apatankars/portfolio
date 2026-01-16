import React, { useEffect, useState } from 'react';
import { skillCategories } from '../../data/content/profile';

const SkillsSection: React.FC = () => {
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkills(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const getSkillLabel = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 75) return 'Advanced';
    if (level >= 50) return 'Competent';
    return 'Novice';
  };

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'neon-cyan';
    if (level >= 80) return 'neon-green';
    return 'neon-pink';
  };

  const renderBar = (level: number, color: string) => {
    const totalBlocks = 20;
    const filledCount = Math.floor(level / 5);

    return (
      <span className="inline-flex">
        {Array.from({ length: totalBlocks }).map((_, i) => {
          const isFilled = i < filledCount;
          const isLastFilled = i === filledCount - 1;
          
          return (
            <span 
              key={i}
              className={`
                transition-opacity duration-300
                ${isFilled ? `text-${color}` : 'text-terminal-gray/30'}
                ${isLastFilled ? 'animate-pulse' : ''}
              `}
              style={{
                opacity: showSkills ? 1 : 0,
                transitionDelay: `${i * 30}ms`
              }}
            >
              {isFilled ? '█' : '░'}
            </span>
          );
        })}
      </span>
    );
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-neon-cyan mb-8 font-mono flex items-center gap-2 border-b border-terminal-gray/30 pb-2">
        <span className="animate-pulse">▶</span> SKILLS_MATRIX
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <div 
            key={idx} 
            className={`space-y-4 ${
              idx !== skillCategories.length - 1 ? 'md:border-r md:border-neon-green/30 md:pr-12' : ''
            }`}
          >
            <h3 className="text-neon-pink font-mono font-bold text-lg border-l-4 border-neon-pink pl-3">
              [{category.title}]
            </h3>
            
            {category.skills ? (
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => {
                  const color = getSkillColor(skill.level);
                  
                  return (
                    <div key={skillIdx} className="font-mono text-sm group">
                      <div className="flex justify-between items-end mb-1">
                        <span className="text-neon-green/90 font-bold">{skill.name}</span>
                        <span className={`text-${color} text-xs uppercase tracking-wider opacity-80`}>
                          {getSkillLabel(skill.level)}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {renderBar(skill.level, color)}
                        <span className={`text-${color} text-xs w-8 text-right`}>
                           {skill.level}%
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="font-mono text-sm space-y-2">
                {category.tools?.map((tool, tIdx) => (
                  <div key={tIdx} className="flex items-center gap-2 text-neon-green/80 hover:text-neon-green transition-colors">
                    <span className="text-neon-cyan">test {'>'}</span>
                    {tool}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
