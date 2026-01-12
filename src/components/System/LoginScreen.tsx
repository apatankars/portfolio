```javascript
import React, { useState, useEffect, useRef } from 'react';
import { NAME_BANNER, BANNER } from '../../data/ascii';

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [step, setStep] = useState<'user' | 'pass' | 'success'>('user');
  const [password, setPassword] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (step === 'user') {
        if (username.trim()) {
            setStep('pass');
        }
      } else if (step === 'pass') {
        setStep('success');
        setTimeout(onLogin, 800); // Simulate login verification delay
      }
    }
  };

  return (
    <div className="h-full w-full flex flex-col font-mono text-neon-green p-4 pt-[10vh] md:pt-[20vh]">
      <pre className="text-xs md:text-sm text-neon-pink mb-8 font-bold leading-none select-none opacity-80 animate-pulse hidden md:block">
        {BANNER}
      </pre>
      {/* Mobile Banner Fallback (smaller) */}
      <div className="md:hidden text-xl font-bold text-neon-pink mb-8 animate-pulse">
          NEURAL SHELL v1.0
      </div>

      <div className="mb-4">
        ArmaanOS v1.0 (tty1)
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex">
            <span className="mr-2">login:</span>
            {step === 'user' ? (
                <input 
                    type="text" 
                    value={username} 
                    onChange={e => setUsername(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="bg-transparent border-none outline-none text-neon-green w-full animate-blink-cursor"
                    autoFocus
                    spellCheck={false}
                    autoComplete="off"
                />
            ) : (
                <span>{username}</span>
            )}
        </div>

        {step !== 'user' && (
            <div className="flex">
                <span className="mr-2">password:</span>
                {step === 'pass' ? (
                    <input 
                        type="password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="bg-transparent border-none outline-none text-neon-green w-full"
                        autoFocus
                    />
                ) : (
                    <span>********</span>
                )}
            </div>
        )}

        {step === 'success' && (
             <div className="mt-2 text-neon-cyan">
                Last login: {new Date().toLocaleString()} on tty1
                <br/>
                access granted...
             </div>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
