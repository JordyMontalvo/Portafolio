import React, { useState } from 'react';
import { ShoppingCart, Layout, Server, Gauge, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SkillsOrbit from './SkillsOrbit';

interface SkillItem {
  name: string;
  category: 'ecommerce' | 'frontend' | 'backend' | 'performance';
  experience: string;
  context: string;
  isCore: boolean;
}

const skillsData: SkillItem[] = [
  // E-Commerce & Storefront
  { name: 'Shopify Plus', category: 'ecommerce', experience: '4+ Years', context: 'Custom theme dev, checkout extensibility, enterprise store migrations', isCore: true },
  { name: 'Liquid', category: 'ecommerce', experience: '4+ Years', context: 'Bespoke templates, schema architecture, performance tuning', isCore: true },
  { name: 'WordPress & WooCommerce', category: 'ecommerce', experience: '4+ Years', context: '50+ custom sites, ACF Pro, high-speed corporate portals', isCore: true },
  { name: 'Storefront & REST APIs', category: 'ecommerce', experience: '3+ Years', context: 'ERP/CRM synchronization, custom cart drawers, third-party apps', isCore: false },

  // Frontend
  { name: 'JavaScript (ES6+)', category: 'frontend', experience: '4+ Years', context: 'Modern idioms, asynchronous workflows, DOM optimization', isCore: true },
  { name: 'React & Vite', category: 'frontend', experience: '3+ Years', context: 'Interactive portals, component libraries, state architecture', isCore: true },
  { name: 'Vue.js & Vuex', category: 'frontend', experience: '3+ Years', context: 'Full MLM platform architecture, dashboards, reactive trees', isCore: true },
  { name: 'TypeScript', category: 'frontend', experience: '2+ Years', context: 'Strong typing, maintainable contracts, scalable codebases', isCore: false },
  { name: 'Framer Motion', category: 'frontend', experience: '2+ Years', context: 'Physics-based micro-interactions, layout transitions', isCore: false },
  { name: 'Tailwind CSS', category: 'frontend', experience: '3+ Years', context: 'Design token mapping, rapid prototyping, clean utility systems', isCore: true },

  // Backend & Cloud
  { name: 'Node.js & Express', category: 'backend', experience: '3+ Years', context: 'RESTful microservices, auth middlewares, payment processors', isCore: true },
  { name: 'PHP', category: 'backend', experience: '4+ Years', context: 'OOP architectures, custom WordPress plugins, server-rendered views', isCore: true },
  { name: 'MongoDB & Prisma', category: 'backend', experience: '2+ Years', context: 'Document modeling, relational schemas, ORM migrations', isCore: false },
  { name: 'MySQL', category: 'backend', experience: '3+ Years', context: 'Relational data querying, indexing, normalized models', isCore: false },

  // Performance & Infrastructure
  { name: 'Core Web Vitals Optimization', category: 'performance', experience: '4+ Years', context: 'Sub-second LCP, CLS zeroing, asset minification & critical CSS', isCore: true },
  { name: 'Technical SEO', category: 'performance', experience: '4+ Years', context: 'Structured schema data, OpenGraph, crawlability audits', isCore: true },
  { name: 'GA4 / GTM DataLayers', category: 'performance', experience: '3+ Years', context: 'Custom conversion events, multi-domain tracking, funnel setup', isCore: true },
  { name: 'Git & GitHub Workflows', category: 'performance', experience: '4+ Years', context: 'CI/CD deployment hooks, code review, branch protection', isCore: false },
];

const categoryTabs = [
  { id: 'all', label: 'All Capabilities' },
  { id: 'ecommerce', label: 'E-Commerce & Liquid', icon: <ShoppingCart className="w-3.5 h-3.5" /> },
  { id: 'frontend', label: 'Frontend Engineering', icon: <Layout className="w-3.5 h-3.5" /> },
  { id: 'backend', label: 'Backend & APIs', icon: <Server className="w-3.5 h-3.5" /> },
  { id: 'performance', label: 'Performance & SEO', icon: <Gauge className="w-3.5 h-3.5" /> },
];

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills = activeTab === 'all'
    ? skillsData
    : skillsData.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="py-24 bg-white dark:bg-[#05080e] transition-colors">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            Technical Stack & Production Domains
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Proven competencies applied across enterprise storefronts, high-traffic portals, and full-stack platforms.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-slate-200/60 dark:border-slate-800/60">
          {categoryTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                  : 'bg-slate-100/70 dark:bg-obsidian-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Layout split for Orbit and Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mt-8">
          
          <div className="lg:col-span-5 sticky top-24 pt-8">
            <SkillsOrbit />
          </div>

          <div className="lg:col-span-7">
            {/* Skills Grid */}
            <motion.div layout className="grid sm:grid-cols-2 gap-4">
              <AnimatePresence mode="popLayout">
                {filteredSkills.map((skill) => (
                  <motion.div
                    layout
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="p-5 rounded-xl bg-slate-50 dark:bg-obsidian-900/70 border border-slate-200/70 dark:border-slate-800/80 hover:border-teal-500/40 dark:hover:border-teal-500/40 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                          {skill.name}
                        </h3>
                        <span className="font-mono text-xs px-2 py-0.5 rounded bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20 font-medium">
                          {skill.experience}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-normal mb-4">
                        {skill.context}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-200/50 dark:border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-400 dark:text-slate-500">
                      <span className="capitalize">{skill.category}</span>
                      {skill.isCore && (
                        <span className="inline-flex items-center gap-1 text-teal-600 dark:text-teal-400 font-sans font-medium">
                          <Sparkles className="w-3 h-3" /> Core Mastery
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;