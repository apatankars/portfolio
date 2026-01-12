import React, { useState, useEffect, useRef } from 'react';

interface BootSequenceProps {
  onComplete: () => void;
}

const BOOT_LOGS = [
  "BIOS Date 01/11/26 15:01:00 Ver: 1.0.0",
  "CPU: Neural Quantum Processor (4 Cores)",
  "Memory Test: 64512K OK",
  "Detected Primary Master: ARMAAN_DEV_DRIVE",
  "Booting from hard disk...",
  "Loading kernel modules...",
  "Mounting root filesystem...",
  "[OK] Mounted /dev/sda1 on /",
  "[OK] Started Network Manager",
  "[OK] Started Neural Interface Service",
  "Loading portfolio assets...",
  "Initializing graphics subsystem...",
  "Checking for updates...",
  "System ready."
];

const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [currentLog, setCurrentLog] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Typewriter effect for current log
  useEffect(() => {
    if (currentIndex >= BOOT_LOGS.length) {
      setTimeout(onComplete, 1000);
      return;
    }

    const currentText = BOOT_LOGS[currentIndex];
    
    if (charIndex < currentText.length) {
      const timer = setTimeout(() => {
        setCurrentLog(prev => prev + currentText[charIndex]);
        setCharIndex(prev => prev + 1);
      }, 10); // Fast typing speed
      return () => clearTimeout(timer);
    } else {
      // Move to next log
      setTimeout(() => {
        setLogs(prev => [...prev, currentLog]);
        setCurrentLog('');
        setCharIndex(0);
        setCurrentIndex(prev => prev + 1);
      }, 100);
    }
  }, [currentIndex, charIndex, currentLog, onComplete]);

  // Auto-scroll
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [logs, currentLog]);

  return (
    <div ref={containerRef} className="h-full w-full overflow-hidden flex flex-col justify-end pb-4 font-mono text-sm md:text-base">
        {logs.map((log, i) => (
            <div key={i} className="text-neon-green/80">
                <span className="text-neon-cyan mr-2">[{new Date().toLocaleTimeString()}]</span>
                {log}
            </div>
        ))}
        {currentLog && (
          <div className="text-neon-green/80">
              <span className="text-neon-cyan mr-2">[{new Date().toLocaleTimeString()}]</span>
              {currentLog}
              <span className="animate-pulse">_</span>
          </div>
        )}
    </div>
  );
};

export default BootSequence;
