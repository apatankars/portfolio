import React, { useState, useEffect, useRef } from 'react';

interface TerminalInputProps {
  currentPath: string;
  onCommand: (cmd: string) => void;
}

const TerminalInput: React.FC<TerminalInputProps> = ({ currentPath, onCommand }) => {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Auto-focus logic
    const handleClick = () => inputRef.current?.focus();
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onCommand(input);
      setInput('');
    }
  };

  return (
    <div className="flex w-full text-neon-green font-mono">
      <span className="mr-2 text-neon-pink">guest@armaan-port:{currentPath}$</span>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 bg-transparent border-none outline-none text-neon-green p-0 m-0"
        autoFocus
        spellCheck={false}
        autoComplete="off"
      />
    </div>
  );
};

export default TerminalInput;
