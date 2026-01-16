import React from 'react';
import { educationData } from '../../data/content/education';

const EducationSection: React.FC = () => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-neon-cyan mb-6 font-mono flex items-center gap-2">
        <span className="animate-pulse">▶</span> EDUCATION_DASHBOARD
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 font-mono text-sm w-full">
        {/* System Info */}
        <div className="border border-neon-green/30 p-4 relative group overflow-hidden col-span-1">
           {/* Decorative corners */}
           <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-neon-cyan"></div>
           <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-neon-cyan"></div>
           <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-neon-cyan"></div>
           <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-neon-cyan"></div>

           {/* Scanning line animation */}
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-full w-full -translate-y-full group-hover:animate-scan pointer-events-none"></div>

          <h3 className="text-neon-cyan font-bold border-b border-neon-green/30 pb-2 mb-4 flex justify-between items-center">
            <span>[ SYSTEM_INFO ]</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-ping"></span>
              <span className="text-xs text-neon-green font-bold animate-pulse">LIVE</span>
            </span>
          </h3>

          <div className="space-y-4">
            <div className="grid grid-cols-[100px_1fr] gap-2 items-baseline">
              <span className="text-neon-pink">INSTITUTE:</span>
              <span className="text-neon-green">{educationData.university}</span>
            </div>
            <div className="grid grid-cols-[100px_1fr] gap-2 items-baseline">
              <span className="text-neon-pink">DEGREE:</span>
              <span className="text-neon-green">{educationData.degree}</span>
            </div>
             <div className="grid grid-cols-[100px_1fr] gap-2 items-baseline">
              <span className="text-neon-pink">GPA:</span>
              <span className="text-neon-green">{educationData.gpa} / 4.0</span>
            </div>
            <div className="grid grid-cols-[100px_1fr] gap-2 items-baseline">
              <span className="text-neon-pink">STATUS:</span>
              <div className="w-full bg-neon-green/10 h-4 mt-1 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-neon-green/40 w-[75%]"></div>
                <span className="absolute inset-0 flex items-center justify-center text-xs text-neon-green font-bold">75% COMPLETE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Loaded Modules (Courses) */}
        <div className="border border-neon-green/30 p-4 relative group overflow-hidden col-span-1">
           {/* Scanning line animation */}
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-full w-full -translate-y-full group-hover:animate-scan pointer-events-none"></div>

           <h3 className="text-neon-cyan font-bold border-b border-neon-green/30 pb-2 mb-4">
            [ LOADED_MODULES ]
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {educationData.courses.map((course) => (
              <div key={course.id} className="flex items-center gap-2 text-xs hover:bg-neon-green/10 p-1 transition-colors cursor-crosshair">
                <span className="text-neon-pink">[{course.code}]</span>
                <span className="text-neon-green/80 truncate">{course.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Background Processes (Extracurriculars) */}
        <div className="border border-neon-green/30 p-4 relative group overflow-hidden col-span-1 lg:col-span-2">
           {/* Scanning line animation */}
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-full w-full -translate-y-full group-hover:animate-scan pointer-events-none"></div>

           <h3 className="text-neon-cyan font-bold border-b border-neon-green/30 pb-2 mb-4">
            [ BG_PROCESSES ]
          </h3>
          <div className="space-y-4">
            {educationData.extracurriculars.map((ec) => (
              <div key={ec.id} className="flex flex-col gap-1">
                 <div className="flex justify-between items-baseline text-xs">
                    <span className="text-neon-green font-bold ">{ec.organization}</span>
                    <span className="text-neon-green/50">{ec.period}</span>
                 </div>
                 <div className="text-neon-pink text-xs">&gt; {ec.role}</div>
                 <div className="text-neon-green/60 text-xs pl-2 border-l border-neon-green/30">
                  {ec.description}
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
