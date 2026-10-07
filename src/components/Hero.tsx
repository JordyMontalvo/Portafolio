import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    'Senior E-Commerce Architect',
    'Shopify Plus & Liquid Specialist',
    'High-Performance Web Engineer',
    'AI Solutions & Automation Dev'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 bg-[#fafafa] dark:bg-[#05080e] bg-gradient-to-b from-slate-50 via-white to-slate-100/60 dark:from-[#05080e] dark:via-[#090d16] dark:to-[#05080e] overflow-hidden transition-colors"
    >
      {/* Subtle atmospheric texture */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Soft directional accent lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10 my-auto">
        <div className="text-center max-w-3xl mx-auto">
          {/* Status pill - Honest, purposeful metadata */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-obsidian-850 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium">Lima, Peru</span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="text-teal-600 dark:text-teal-400 font-medium">Available for Global Remote Projects</span>
          </motion.div>

          {/* Heading - Typographic authority */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.08] mb-6"
          >
            Jordy Montalvo
          </motion.h1>

          {/* Dynamic role banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="h-10 sm:h-12 flex items-center justify-center mb-6"
          >
            <motion.div
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl sm:text-2xl md:text-3xl font-medium text-teal-600 dark:text-teal-400 font-display"
            >
              {roles[roleIndex]}
            </motion.div>
          </motion.div>

          {/* Body proposition */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Specialist in enterprise web architectures, Shopify Plus ecosystems, and modern frontend applications. I transform complex requirements into high-converting, resilient digital platforms with Core Web Vitals under 1.2s.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-3.5 mb-12"
          >
            <a 
              href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-medium text-sm rounded-xl shadow-sm hover:shadow-teal-500/20 transition-all duration-200 inline-flex items-center gap-2"
            >
              Explore Projects <ArrowRight className="w-4 h-4" />
            </a>

            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-white dark:bg-obsidian-850 hover:bg-slate-50 dark:hover:bg-obsidian-800 text-slate-800 dark:text-slate-100 font-medium text-sm rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-200"
            >
              Get In Touch
            </a>

            <a 
              href="https://github.com/JordyMontalvo/cv_generetor"
              target="_blank"
              rel="noopener noreferrer" 
              className="px-5 py-3 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 font-medium text-sm rounded-xl shadow-sm transition-all duration-200 inline-flex items-center gap-2 group"
            >
              <Sparkles className="w-4 h-4 text-teal-400 dark:text-teal-600 transition-transform group-hover:rotate-12" />
              <span>CV Tailor AI</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </motion.div>

          {/* Direct channels */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-5 text-slate-500 dark:text-slate-400"
          >
            <a
              href="https://github.com/JordyMontalvo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-obsidian-850 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/jordy-joseph-montalvo-/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-obsidian-850 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:jordyjosephmontalvo@gmail.com"
              aria-label="Email Me"
              className="p-2 rounded-lg hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-obsidian-850 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Real Engineering Metrics Bar - Grounded Evidence */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/70 dark:bg-obsidian-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-sm"
        >
          <div className="text-center px-3 py-2 border-r border-slate-100 dark:border-slate-800/60 last:border-0">
            <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">4+ Years</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Enterprise Experience</div>
          </div>
          <div className="text-center px-3 py-2 md:border-r border-slate-100 dark:border-slate-800/60">
            <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">50+ Projects</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Shipped to Production</div>
          </div>
          <div className="text-center px-3 py-2 border-r border-slate-100 dark:border-slate-800/60 last:border-0">
            <div className="font-display text-2xl sm:text-3xl font-bold text-teal-600 dark:text-teal-400">+40% Lift</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Checkout Conversions</div>
          </div>
          <div className="text-center px-3 py-2">
            <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">&lt;1.2s</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Core Web Vitals (LCP)</div>
          </div>
        </motion.div>
      </div>

      {/* Down indicator */}
      <div className="flex justify-center mt-6">
        <a 
          href="#about" 
          aria-label="Scroll to About"
          className="p-2 text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <ArrowDown className="h-5 w-5 animate-pulse" />
        </a>
      </div>
    </section>
  );
};

export default Hero;