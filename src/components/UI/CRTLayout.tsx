import React from 'react';

interface CRTLayoutProps {
  children: React.ReactNode;
}

const CRTLayout: React.FC<CRTLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full relative crt bg-terminal-black text-neon-green overflow-hidden font-mono selection:bg-neon-green selection:text-terminal-black">
      {/* Scanline Element */}
      <div className="scanline pointer-events-none"></div>
      
      {/* Main Content Area */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default CRTLayout;
