import React, { useState, useEffect } from 'react';

interface MockTerminalProps {
  currentSection?: string;
  lastAction?: string;
}

const MockTerminal: React.FC<MockTerminalProps> = ({ currentSection, lastAction }) => {
  const [commands, setCommands] = useState<string[]>([
    '> Initializing neural pathways...',
    '> Loading portfolio modules...',
    '> System ready.',
  ]);

  useEffect(() => {
    if (lastAction) {
      setCommands(prev => [...prev.slice(-2), `> ${lastAction}`]);
    }
  }, [lastAction]);

  useEffect(() => {
    if (currentSection) {
      setCommands(prev => [...prev.slice(-2), `> Navigating to ${currentSection.toUpperCase()} section...`]);
    }
  }, [currentSection]);

  return (
    <div className="bg-terminal-black/90 border-b border-neon-green/70 p-2 md:p-3 font-mono text-xs overflow-hidden h-16 md:h-20">
      <div className="flex flex-col gap-1">
        {commands.slice(-3).map((cmd, idx) => (
          <div key={idx} className="text-neon-green/60 flex items-center gap-2">
            <span className="text-neon-green animate-pulse">▸</span>
            {cmd}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MockTerminal;
