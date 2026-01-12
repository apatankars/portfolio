import React, { useState, useCallback } from 'react';
import { fileSystem } from '../data/fileSystem';
import type { SystemFile, SystemNode } from '../data/fileSystem';
import ProjectGrid from '../components/FileSystem/ProjectGrid';
import type { ProjectData } from '../components/FileSystem/ProjectCard';
import { BANNER } from '../data/ascii';

export interface HistoryItem {
  id: string;
  type: 'input' | 'output' | 'error';
  content: React.ReactNode | string;
  path: string;
}

export const useShell = () => {
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 'banner',
      type: 'output',
      content: <pre className="text-xs text-neon-pink leading-none mb-4 hidden md:block">{BANNER}</pre>,
      path: '~'
    },
    {
      id: 'boot-1',
      type: 'output',
      content: '> Welcome User! Let me figure out how this works...',
      path: '~'
    },
    {
      id: 'boot-2',
      type: 'output',
      content: '> Figuring out who Armaan is...',
      path: '~'
    },
    {
      id: 'boot-3',
      type: 'output',
      content: '> Hmm he is a little weirder than I thought...',
      path: '~'
    },
    {
      id: 'boot-4',
      type: 'output', 
      content: '> OVERRIDE REQUESTED. System ready. Type or press "help" for a list of commands.',
      path: '~'
    }
  ]);
  const [currentPath, setCurrentPath] = useState('~');

  const executeCommand = useCallback((cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    // Add input to history
    const inputId = Date.now().toString();
    setHistory(prev => [
      ...prev,
      { id: inputId, type: 'input', content: trimmedCmd, path: currentPath }
    ]);

    const [command, ...args] = trimmedCmd.split(' ');

    // Process command
    let output: string | React.ReactNode = '';
    let type: 'output' | 'error' = 'output';

    switch (command.toLowerCase()) {
      case 'help':
        output = 'Available commands: help, clear, ls, cd <dir>, cat <file>, ask <question>, whoami';
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'ls':
        {
           let effectiveNode: SystemFile | undefined;
           
           if (currentPath === '~') {
               if (args.length > 0) {
                   const dirName = args[0] === '/' ? '~' : args[0];
                   if (dirName === '~') {
                       effectiveNode = { name: 'root', type: 'directory', content: fileSystem as any, metadata: { view: 'list' } };
                   } else {
                        const dir = fileSystem[dirName];
                        if (dir && dir.type === 'directory') {
                            effectiveNode = dir;
                        } else {
                            output = `ls: ${dirName}: No such file or directory`;
                            type = 'error';
                        }
                   }
               } else {
                   // List root
                   effectiveNode = { name: 'root', type: 'directory', content: fileSystem as any, metadata: { view: 'list' } };
               }
           } else {
               // We are inside a subdirectory
               const node = fileSystem[currentPath];
               if (node && node.type === 'directory') {
                   effectiveNode = node;
               } else {
                   output = `Error: Current path ${currentPath} is invalid`;
                   type = 'error';
               }
           }

           if (type !== 'error' && effectiveNode) {
               if (effectiveNode.metadata?.view === 'grid') {
                   if (Array.isArray(effectiveNode.content)) {
                       output = <ProjectGrid projects={effectiveNode.content as ProjectData[]} />;
                   } else {
                       output = 'Error: Invalid project data format';
                       type = 'error';
                   }
               } else {
                   // Default list view
                   // If content is object (SystemNode), map values
                   const content = effectiveNode.content;
                   if (effectiveNode.type === 'directory' && typeof content === 'object' && !Array.isArray(content) && content !== null) {
                        const children = content as SystemNode;
                        output = Object.values(children)
                            .map(node => (node.type === 'directory' ? `${node.name}/` : node.name))
                            .join('  ');
                   } else if (Array.isArray(content)) {
                        output = 'Items: ' + content.length; // Fallback for arrays without grid view
                   } else {
                        output = 'Empty directory';
                   }
               }
           }
        }
        break;
      case 'ask':
        const query = args.join(' ').toLowerCase();
        if (!query) {
            output = 'Usage: ask <question>';
            type = 'error';
        } else if (query.includes('stack') || query.includes('tech') || query.includes('technologies')) {
            output = 'I specialize in Python, TypeScript, React, and PyTorch. I love building scalable backend systems and interactive frontends.';
        } else if (query.includes('contact') || query.includes('email') || query.includes('reach')) {
            output = 'You can reach me at armaan_patankar@brown.edu. Check out "cat contact.md" for more.';
        } else if (query.includes('experience') || query.includes('work') || query.includes('job')) {
            output = 'I have interned at TechCorp and worked as a Research Assistant. Run "cat experience.log" to see my full history.';
        } else if (query.includes('project') || query.includes('built')) {
            output = 'I have built several projects including this portfolio! Type "cd projects" then "ls" to explore them.';
        } else if (query.includes('hello') || query.includes('hi')) {
            output = 'Hello! I am the automated assistant for this portfolio. Ask me anything about Armaan.';
        } else {
            output = `I'm not sure about "${query}". Try asking about my skills, experience, or projects.`;
        }
        break;
      case 'cd':
        if (!args[0] || args[0] === '~') {
            setCurrentPath('~');
        } else if (args[0] === '..') {
            setCurrentPath('~');
        } else {
            const dirName = args[0];
            const dir = fileSystem[dirName];
            if (dir && dir.type === 'directory') {
                setCurrentPath(dirName);
            } else {
                output = `cd: ${dirName}: No such file or directory`;
                type = 'error';
            }
        }
        break;
      case 'cat':
        if (args.length === 0) {
            output = 'Usage: cat <filename>';
            type = 'error';
        } else {
            const fileName = args[0];
            let file: SystemFile | undefined;
            
            if (currentPath === '~') {
                file = fileSystem[fileName];
            } else {
                 // Try finding key in subdirectory content
                 const dir = fileSystem[currentPath];
                 if (dir && typeof dir.content === 'object' && !Array.isArray(dir.content)) {
                     const children = dir.content as SystemNode;
                     file = children[fileName];
                 }
            }

            if (!output) {
                if (file && file.type === 'file' && typeof file.content === 'string') {
                    output = file.content;
                } else if (file && file.type === 'directory') {
                    output = `cat: ${fileName}: Is a directory`;
                    type = 'error';
                } else if (file) {
                    output = `cat: ${fileName}: Invalid format`;
                    type = 'error';
                } else {
                    output = `cat: ${fileName}: No such file or directory`;
                    type = 'error';
                }
            }
        }
        break;
      case 'whoami':
        output = 'guest@armaan-neural-portfolio';
        break;
      default:
        output = `Command not found: ${command}. Type "help" for available commands.`;
        type = 'error';
    }

    setHistory(prev => [
      ...prev,
      { id: Date.now().toString() + '_out', type, content: output, path: currentPath }
    ]);

  }, [currentPath]);

  return {
    history,
    currentPath,
    executeCommand,
  };
};
