import React from 'react';
import { contactInfo } from '../../data/content/profile';

const ContactSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-neon-cyan mb-6 font-mono flex items-center gap-2">
        <span className="animate-pulse">▶</span> CONTACT
      </h2>
      <pre className="text-neon-green font-mono text-sm md:text-base whitespace-pre-wrap leading-relaxed">
        {contactInfo}
      </pre>
    </div>
  );
};

export default ContactSection;
