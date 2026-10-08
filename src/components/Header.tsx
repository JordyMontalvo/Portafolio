import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('header.about'), href: '#about' },
    { name: t('header.services'), href: '#services' },
    { name: t('header.skills'), href: '#skills' },
    { name: t('header.projects'), href: '#projects' },
    { name: t('header.experience'), href: '#experience' },
    { name: t('header.contact'), href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-obsidian-950/85 backdrop-blur-md border-b border-slate-200/70 dark:border-slate-800/80 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 max-w-6xl flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2.5 text-slate-900 dark:text-white group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-md"
        >
          <div className="w-8 h-8 rounded-lg bg-teal-500/10 dark:bg-teal-400/10 border border-teal-500/20 flex items-center justify-center text-teal-600 dark:text-teal-400 group-hover:scale-105 transition-transform">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-tight text-base sm:text-lg leading-none">
              Jordy Montalvo
            </span>
            <span className="text-[10px] font-mono tracking-wider uppercase text-slate-500 dark:text-slate-400">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(link.href)?.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              {link.name}
            </a>
          ))}

          <div className="flex items-center gap-3 pl-2 border-l border-slate-200 dark:border-slate-800">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800/60 hover:bg-teal-100 dark:hover:bg-teal-900/40 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              Available for hire
            </a>
            <button
              onClick={toggleLanguage}
              className="p-1.5 rounded-md text-xs font-bold uppercase text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors w-8 text-center"
            >
              {(i18n.language || 'en').substring(0, 2)}
            </button>
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-1.5">
          <button
            onClick={toggleLanguage}
            className="p-1.5 rounded-md text-xs font-bold uppercase text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors w-8 text-center"
          >
            {(i18n.language || 'en').substring(0, 2)}
          </button>
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-white/95 dark:bg-obsidian-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900/60 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({
                      behavior: 'smooth',
                    });
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg text-xs font-semibold bg-teal-600 text-white hover:bg-teal-700 transition-colors"
                >
                  Get In Touch <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;