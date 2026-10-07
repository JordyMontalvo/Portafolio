import React from 'react';
import { Terminal, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 dark:bg-[#05080e] text-white py-14 border-t border-slate-800 transition-colors">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div>
            <a href="#home" className="flex items-center gap-2.5 text-white group focus:outline-none">
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-display font-bold tracking-tight text-lg">
                Jordy Montalvo
              </span>
            </a>
            <p className="mt-2 text-sm text-slate-400 max-w-md leading-relaxed">
              Senior Software Engineer & E-Commerce Architect. High-converting Shopify Plus stores, custom Liquid themes, and full-stack web applications.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-8 text-sm">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-3">Navigation</div>
              <ul className="space-y-2">
                <li><a href="#about" className="text-slate-400 hover:text-teal-400 transition-colors">About</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-teal-400 transition-colors">Services</a></li>
                <li><a href="#skills" className="text-slate-400 hover:text-teal-400 transition-colors">Skills</a></li>
                <li><a href="#projects" className="text-slate-400 hover:text-teal-400 transition-colors">Projects</a></li>
                <li><a href="#experience" className="text-slate-400 hover:text-teal-400 transition-colors">Experience</a></li>
              </ul>
            </div>

            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-3">Channels</div>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:jordyjosephmontalvo@gmail.com" className="text-slate-400 hover:text-teal-400 transition-colors">
                    jordyjosephmontalvo@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/51978509234" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
                    +51 978 509 234
                  </a>
                </li>
                <li className="text-slate-500">Lima, Peru (GMT-5)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500">
          <div>
            © {currentYear} Jordy Montalvo. Crafted with React, TypeScript & Tailwind CSS.
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/JordyMontalvo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-teal-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/jordy-joseph-montalvo-/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-teal-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="mailto:jordyjosephmontalvo@gmail.com" 
              className="text-slate-400 hover:text-teal-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;