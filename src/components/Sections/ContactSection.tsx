import React from 'react';
import { contactItems } from '../../data/content/profile';

const ContactSection: React.FC = () => {
  return (
    <div className="w-full max-w-4xl">
      <h2 className="text-2xl font-bold text-neon-cyan mb-8 font-mono flex items-center gap-2">
        <span className="animate-pulse">▶</span> CONTACT PROTOCOLS
      </h2>
      
      <div className="grid gap-4">
        {contactItems.map((item, index) => (
          <a
            key={item.platform}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="relative overflow-hidden border border-neon-cyan/20 bg-black/40 p-4 transition-all duration-300 hover:border-neon-green hover:bg-neon-green/5 hover:translate-x-1">
              
              {/* Hover highlight bar */}
              <div className="absolute left-0 top-0 h-full w-1 bg-neon-green opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="flex items-center justify-between font-mono">
                <div className="flex items-center gap-4">
                  <span className="text-neon-cyan/70 transition-colors group-hover:text-neon-green">
                    [{item.platform}]
                  </span>
                  <span className="text-gray-300 transition-colors group-hover:text-white">
                    {item.value}
                  </span>
                </div>
                
                <span className="text-neon-cyan opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-2">
                  &lt;&lt; CONNECT
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 text-xs text-gray-500 font-mono">
        * Secure connection established. End-to-end encryption not guaranteed outside this terminal.
      </div>
    </div>
  );
};

export default ContactSection;
