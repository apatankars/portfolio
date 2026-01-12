import React, { useState, useEffect } from 'react';
import NavigationBar, { type Section } from './NavigationBar';
import AboutSection from '../Sections/AboutSection';
import ProjectsSection from '../Sections/ProjectsSection';
import SkillsSection from '../Sections/SkillsSection';
import ExperienceSection from '../Sections/ExperienceSection';
import EducationSection from '../Sections/EducationSection';
import ContactSection from '../Sections/ContactSection';
import ShellInterface from '../Shell/ShellInterface';
import { NAME_BANNER } from '../../data/ascii';

const MainLayout: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<Section>('about');
  const [terminalOpen, setTerminalOpen] = useState(true);
  const [terminalHeight, setTerminalHeight] = useState(135); // Default reduced height for About
  const [isDragging, setIsDragging] = useState(false);

  const handleSectionChange = (section: Section) => {
    setCurrentSection(section);
    if (section === 'about') {
      setTerminalOpen(true);
      setTerminalHeight(135);
    } else {
      setTerminalOpen(false);
    }
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'skills':
        return <SkillsSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'education':
        return <EducationSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const newHeight = window.innerHeight - e.clientY;
      const minHeight = 48; // Height of the toggle bar (h-12)
      const folderHeaderHeight = 100; // Approx height for safety
      const maxHeight = window.innerHeight - folderHeaderHeight; 
      
      const clampedHeight = Math.max(minHeight, Math.min(newHeight, maxHeight));
      
      if (clampedHeight <= minHeight + 10) {
        setTerminalOpen(false);
      } else {
        setTerminalOpen(true);
        setTerminalHeight(clampedHeight);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      // Reset cursor and text selection
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'row-resize';
      document.body.style.userSelect = 'none';
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isDragging]);

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden bg-terminal-black">
      {/* Name Banner - Persistent Header */}
      <div className="bg-terminal-black border-b border-transparent py-2 flex-shrink-0 z-10">
        <pre className="text-neon-purple font-mono text-[6px] md:text-[10px] leading-none text-center overflow-x-auto px-2">
          {NAME_BANNER}
        </pre>
      </div>

      {/* Navigation */}
      <div className="flex-shrink-0 z-10">
        <NavigationBar currentSection={currentSection} onSectionChange={handleSectionChange} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto p-4 md:p-8 scrollbar-thin scrollbar-thumb-neon-green scrollbar-track-terminal-gray">
        {renderSection()}
      </div>

      {/* Collapsible Terminal Footer */}
      <div 
        className="flex-shrink-0 border-t-2 border-neon-green/40 bg-terminal-black/95 relative transition-[height] duration-75 ease-linear"
        style={{ height: terminalOpen ? terminalHeight : 48 }}
      >
        {/* Resize Handle */}
        <div 
          className="absolute -top-1.5 left-0 w-full h-3 cursor-row-resize z-50 hover:bg-neon-green/20 transition-colors bg-transparent"
          onMouseDown={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
        />

        {/* Terminal Toggle Button */}
        <button
          onClick={() => setTerminalOpen(!terminalOpen)}
          className="w-full p-2 h-12 text-neon-green hover:bg-neon-green/10 transition-colors font-mono text-sm flex items-center justify-between absolute top-0 left-0 z-20"
        >
          <span className="flex items-center gap-2">
            <span className="animate-pulse">▶</span>
            INTERACTIVE TERMINAL
          </span>
          <span className="text-neon-green text-xs opacity-70">
            {terminalOpen ? '[ DRAG EDGE OR CLICK TO MINIMIZE ▼ ]' : '[ CLICK OR DRAG UP TO EXPAND ▲ ]'}
          </span>
        </button>

        {/* Terminal Content */}
        {terminalOpen && (
          <div className="h-full pt-12 pb-1 overflow-hidden">
             <ShellInterface isCollapsed={false} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainLayout;
