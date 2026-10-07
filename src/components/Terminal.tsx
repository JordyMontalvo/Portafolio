import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Terminal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ command: string; output: React.ReactNode }[]>([
    {
      command: '',
      output: (
        <div className="text-teal-400">
          <p>JordyOS v2.0.0 (x86_64)</p>
          <p>Type 'help' to see available commands.</p>
        </div>
      ),
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle terminal with backtick ` or ctrl+j
      if (e.key === '`' || (e.ctrlKey && e.key === 'j')) {
        e.preventDefault();
        setIsOpen((prev) => {
          if (!prev) setTimeout(() => inputRef.current?.focus(), 100);
          return !prev;
        });
        setIsMinimized(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen, isMinimized]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    let output: React.ReactNode = '';

    switch (cmd) {
      case 'help':
        output = (
          <div className="text-slate-300">
            <p>Available commands:</p>
            <ul className="list-disc list-inside ml-2 mt-1">
              <li><span className="text-teal-400">whoami</span> - Display current user info</li>
              <li><span className="text-teal-400">skills</span> - List technical capabilities</li>
              <li><span className="text-teal-400">projects</span> - View flagship projects</li>
              <li><span className="text-teal-400">clear</span> - Clear terminal output</li>
              <li><span className="text-teal-400">sudo</span> - Run with elevated privileges</li>
              <li><span className="text-teal-400">contact</span> - Get contact info</li>
            </ul>
          </div>
        );
        break;
      case 'whoami':
        output = 'Jordy Montalvo - Senior E-Commerce Architect & Frontend Engineer';
        break;
      case 'skills':
        output = 'React, TypeScript, Shopify Plus, Liquid, Node.js, Next.js, Framer Motion, TailwindCSS, AWS, GCP, Python.';
        break;
      case 'projects':
        output = '1. Enterprise Shopify Plus Migration (+40% CVR)\n2. Sifrah MLM Platform\n3. CV Tailor AI Agent';
        break;
      case 'sudo':
        output = 'Nice try. This incident will be reported.';
        break;
      case 'contact':
        output = <a href="mailto:jordyjosephmontalvo@gmail.com" className="text-teal-400 hover:underline">jordyjosephmontalvo@gmail.com</a>;
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case '':
        output = '';
        break;
      default:
        output = <span className="text-red-400">Command not found: {cmd}</span>;
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput('');
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => {
          setIsOpen(true);
          setIsMinimized(false);
          setTimeout(() => inputRef.current?.focus(), 100);
        }}
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xl hover:shadow-teal-500/20 transition-all border border-slate-700 dark:border-slate-200 focus:outline-none"
        aria-label="Open Terminal"
      >
        <TerminalIcon className="w-6 h-6" />
      </motion.button>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: isMinimized ? 'calc(100vh - 100px)' : 0, 
              scale: 1,
              width: isMinimized ? '300px' : '100%',
              right: isMinimized ? '24px' : 'auto'
            }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed z-50 overflow-hidden bg-[#0d1117] border border-slate-700 shadow-2xl rounded-t-xl sm:rounded-xl font-mono text-sm
              ${isMinimized ? 'bottom-0 h-12 cursor-pointer' : 'bottom-0 sm:bottom-6 sm:right-6 left-0 sm:left-auto w-full sm:w-[500px] h-[400px]'}`}
            onClick={() => {
              if (isMinimized) {
                setIsMinimized(false);
                setTimeout(() => inputRef.current?.focus(), 100);
              }
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22] border-b border-slate-700 select-none">
              <div className="flex items-center gap-2">
                <TerminalIcon className="w-4 h-4 text-slate-400" />
                <span className="text-slate-300 text-xs font-semibold">guest@jordy-montalvo: ~</span>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }} className="text-slate-400 hover:text-white transition-colors focus:outline-none">
                  {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minus className="w-3.5 h-3.5" />}
                </button>
                <button onClick={(e) => { e.stopPropagation(); setIsOpen(false); }} className="text-slate-400 hover:text-red-400 transition-colors focus:outline-none">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Body */}
            {!isMinimized && (
              <div 
                className="p-4 h-[calc(100%-45px)] overflow-y-auto text-slate-300"
                onClick={() => inputRef.current?.focus()}
              >
                {history.map((item, idx) => (
                  <div key={idx} className="mb-2">
                    {item.command && (
                      <div className="flex items-center gap-2">
                        <span className="text-emerald-400">➜</span>
                        <span className="text-teal-300">~</span>
                        <span>{item.command}</span>
                      </div>
                    )}
                    <div className="mt-1 whitespace-pre-wrap">{item.output}</div>
                  </div>
                ))}
                
                <form onSubmit={handleCommand} className="flex items-center gap-2 mt-2">
                  <span className="text-emerald-400">➜</span>
                  <span className="text-teal-300">~</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-slate-100 placeholder-slate-600 focus:ring-0 p-0"
                    autoFocus
                    spellCheck="false"
                    autoComplete="off"
                  />
                </form>
                <div ref={endOfMessagesRef} />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Terminal;
