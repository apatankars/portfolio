import React, { useEffect, useRef } from 'react';
import { useShell } from '../../hooks/useShell';
import TerminalInput from './TerminalInput';
import Taskbar from './Taskbar';

interface ShellInterfaceProps {
  isCollapsed?: boolean;
}

const ShellInterface: React.FC<ShellInterfaceProps> = ({ isCollapsed = false }) => {
  const { history, currentPath, executeCommand } = useShell();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  // Filter out banner in collapsed mode
  const displayHistory = isCollapsed 
    ? history.filter(item => item.id !== 'banner')
    : history;

  return (
    <div className="h-full w-full flex flex-col font-mono text-sm overflow-hidden">
      <div className="flex-1 p-2 md:p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-neon-green scrollbar-track-terminal-gray">
        {displayHistory.map((item) => (
          <div key={item.id} className="mb-1">
            {item.type === 'input' ? (
               <div className="flex flex-wrap">
                 <span className="mr-2 text-neon-pink opacity-80 shrink-0 text-xs">guest@armaan-port:{item.path}$</span>
                 <span className="text-neon-green text-xs">{item.content}</span>
               </div>
            ) : (
                <div className={`whitespace-pre-wrap text-xs ${item.type === 'error' ? 'text-red-500' : 'text-neon-cyan/90'}`}>
                    {item.content}
                </div>
            )}
          </div>
        ))}
        
        <div ref={bottomRef} className="pb-2">
            <TerminalInput currentPath={currentPath} onCommand={executeCommand} />
        </div>
      </div>
      
      {!isCollapsed && <Taskbar onExecute={executeCommand} />}
    </div>
  );
};

export default ShellInterface;
