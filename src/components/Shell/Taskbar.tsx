import React from 'react';

interface TaskbarProps {
  onExecute: (cmd: string) => void;
}

const Taskbar: React.FC<TaskbarProps> = ({ onExecute }) => {
  return (
    <div className="border-t-2 border-neon-green/30 p-2 flex gap-4 bg-terminal-black/90 backdrop-blur text-sm md:text-base">
      <button 
        onClick={() => onExecute('help')}
        className="px-4 py-1 border border-neon-green/50 hover:bg-neon-green hover:text-terminal-black transition-colors"
      >
        [ HELP ]
      </button>
      <button 
        onClick={() => onExecute('ls')}
        className="px-4 py-1 border border-neon-green/50 hover:bg-neon-green hover:text-terminal-black transition-colors"
      >
        [ FILES ]
      </button>
      <button 
        onClick={() => onExecute('whoami')}
        className="px-4 py-1 border border-neon-green/50 hover:bg-neon-green hover:text-terminal-black transition-colors"
      >
        [ USER ]
      </button>
      <div className="flex-1"></div>
      <div className="px-4 py-1 text-neon-cyan animate-pulse">
        ONLINE
      </div>
    </div>
  );
};

export default Taskbar;
