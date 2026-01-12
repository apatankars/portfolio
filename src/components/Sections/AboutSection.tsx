import React from 'react';
import { aboutMe, profileImage } from '../../data/content/profile';
import { useTypewriter } from '../../hooks/useTypewriter';

const AboutSection: React.FC = () => {
  const { displayedText } = useTypewriter(aboutMe, 10);

  const lines = displayedText.split('\n');

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
      {/* Profile Picture */}
      <div className="flex-shrink-0">
        <div className="w-48 h-48 md:w-64 md:h-64 border-4 border-neon-green/50 p-2 relative group">
          <div className="absolute inset-0 bg-neon-green/5 group-hover:bg-neon-green/10 transition-colors"></div>
          <img 
            src={profileImage} 
            alt="Profile" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
            onError={(e) => {
              // Fallback to ASCII art if image not found
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.innerHTML = `<pre class="text-neon-green text-xs leading-none flex items-center justify-center h-full">
    ___
   /   \\
  | o o |
   \\   /
    ---
  PROFILE
   PHOTO
    HERE
</pre>`;
            }}
          />
        </div>
      </div>

      {/* About Content */}
      <div className="flex-1">
        <div className="font-mono text-xs md:text-sm whitespace-pre-wrap leading-relaxed">
          {lines.map((line, i) => {
            const isLast = i === lines.length - 1;
            const isHeader = line.trim().startsWith('##');
            const className = isHeader 
              ? "text-neon-purple text-base md:text-lg font-bold mt-6 mb-2" 
              : "text-neon-green/90";
            
            // Handle empty lines
            if (!line && !isLast) return;
            
            return (
              <div key={i} className={`${className} min-h-[1.5em]`}>
                {line}
                {isLast && <span className="animate-pulse text-neon-green/90">_</span>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
    
  );
};

export default AboutSection;
