import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, ArrowRight, X, Sparkles, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DataFlowDiagram from './DataFlowDiagram';

interface Project {
  id: number;
  title: string;
  category: 'ecommerce' | 'apps' | 'fullstack';
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  metrics?: string;
  github?: string;
  demo?: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Lock body scroll & listen for Escape key when modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };

    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const projects: Project[] = [
    {
      id: 1,
      title: "Enterprise Shopify Plus Migration",
      category: "ecommerce",
      description: "Complete migration from legacy Magento to Shopify Plus with custom Liquid themes and ERP synchronization.",
      longDescription: "Led the end-to-end migration of a high-volume international brand from Magento to Shopify Plus. Designed and implemented a bespoke Liquid theme from Figma, integrated real-time inventory synchronization with an enterprise ERP, engineered a custom AJAX cart drawer, and configured Checkout Extensibility, resulting in a 40% boost in checkout conversions and 60% faster page loads.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
      tags: ["Shopify Plus", "Liquid", "Storefront API", "Tailwind CSS"],
      metrics: "+40% Conversion Lift",
      github: "https://github.com/JordyMontalvo",
      demo: "https://shopify.com",
      featured: true
    },
    {
      id: 7,
      title: "CV Tailor AI Agent",
      category: "fullstack",
      description: "Automated agentic workflow tailoring candidate CVs to job offers using Gemini AI and Puppeteer.",
      longDescription: "An Agent-Ready hybrid tool designed to adapt resumes dynamically to specific job descriptions optimizing for ATS filters. Supports direct execution via AI code editors or autonomous CLI execution through a Node.js pipeline using Google Gemini API for structural tailoring and Puppeteer for pixel-perfect PDF document rendering.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80",
      tags: ["Node.js", "Gemini API", "Puppeteer", "Automation"],
      metrics: "ATS Optimization & Instant PDF",
      github: "https://github.com/JordyMontalvo/cv_generetor",
      featured: true
    },
    {
      id: 5,
      title: "Sifrah - Full-Stack MLM Platform",
      category: "fullstack",
      description: "Scalable network marketing system featuring interactive commission trees and payment gateways.",
      longDescription: "Complete Multi-Level Marketing (MLM) platform built with a Vue.js & Vuex SPA frontend and a Node.js/Express backend. Features real-time visual genealogy trees, multi-tier commission charts, MercadoPago automated payouts, Nodemailer communications, and MongoDB data persistence managed with Prisma ORM.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      tags: ["Vue.js", "Node.js", "MongoDB", "Prisma", "MercadoPago"],
      metrics: "Real-time Genealogy Engine",
      github: "https://github.com/JordyMontalvo/Sifrah_app",
      demo: "http://sifrah.vercel.app/",
      featured: true
    },
    {
      id: 4,
      title: "Bibliotecas AIEP Portal",
      category: "apps",
      description: "Official institutional library portal serving over 40,000+ students and educators.",
      longDescription: "High-accessibility institutional web portal developed for AIEP. Allows students and faculty to search catalog bibliographies, reserve physical study rooms, and access digital repository subscriptions. Built with a component-driven Vue architecture ensuring strict WCAG accessibility and fast rendering across low-bandwidth environments.",
      image: "https://portalbibliotecas.aiep.cl/img/og-biblioteca-aiep.jpg",
      tags: ["Vue.js", "Accessible UI", "Education Portal"],
      metrics: "40k+ Active Students",
      github: "https://github.com/PedroFlores28/DisenoBiblioteca",
      demo: "https://portalbibliotecas.aiep.cl/",
      featured: true
    },
    {
      id: 6,
      title: "Semilla de Compromisos",
      category: "apps",
      description: "Interactive physics-driven web experience engineered for UNACEM's annual event.",
      longDescription: "Immersive narrative web experience developed for UNACEM's corporate THM event. Participants submit and explore pledges through an interactive gamified metaphor featuring physics-based seed dynamics. Built with React, TypeScript, and Framer Motion for high-fidelity animations.",
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=80",
      tags: ["React", "TypeScript", "Framer Motion", "Physics UI"],
      metrics: "High-Fidelity Interaction",
      github: "https://github.com/JordyMontalvo/exp_semilla",
      demo: "https://serve-unacem.vercel.app/es",
      featured: false
    },
    {
      id: 2,
      title: "B2B Corporate Multi-Site",
      category: "ecommerce",
      description: "High-performance WordPress platform with ACF Pro, optimized to sub-1.2s LCP load time.",
      longDescription: "Architecture of a multi-language platform using WordPress, PHP, and Advanced Custom Fields (ACF Pro). Optimized Core Web Vitals to achieve sub-1.2s Largest Contentful Paint (LCP). Implemented custom post types, structured schemas for B2B catalogs, and technical SEO protocols.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      tags: ["WordPress", "PHP", "ACF Pro", "Technical SEO"],
      metrics: "Sub-1.2s LCP Score",
      github: "https://github.com/JordyMontalvo",
      demo: "https://wordpress.org",
      featured: false
    },
    {
      id: 3,
      title: "Headless Analytics & DataLayer Ecosystem",
      category: "fullstack",
      description: "Cross-domain conversion measurement pipeline using Google Tag Manager and GA4.",
      longDescription: "Architected a custom JavaScript DataLayer tracking pipeline across headless e-commerce surfaces. Connected Google Analytics 4, Meta Conversions API, and Klaviyo with custom ecommerce events (view_item, add_to_cart, purchase) ensuring 100% attribution reliability.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      tags: ["GA4", "GTM DataLayer", "Klaviyo", "Meta CAPI"],
      metrics: "100% Attributed Journeys",
      github: "https://github.com/JordyMontalvo",
      featured: false
    }
  ];

  // Extract unique tags and sort them
  const allTags = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags))).sort()];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(activeFilter));

  const flagship = projects[0];

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-[#090d16]/40 border-t border-slate-200/60 dark:border-slate-800/60 transition-colors">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            Selected Works & Architecture Case Studies
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Production-grade systems delivering business growth, verified speed, and refined interactions.
          </p>
        </div>

        {/* Flagship Spotlight Hero Card */}
        {activeFilter === 'All' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-card dark:shadow-card-dark group"
          >
            <div className="grid lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-auto overflow-hidden bg-slate-100 dark:bg-obsidian-850">
                <img
                  src={flagship.image}
                  alt={flagship.title}
                  fetchPriority="high"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 dark:bg-white/90 text-white dark:text-slate-900 text-xs font-semibold backdrop-blur-md">
                  <Trophy className="w-3.5 h-3.5 text-amber-400 dark:text-amber-600" />
                  <span>Flagship Showcase</span>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800/50 text-xs font-mono font-medium mb-4">
                    <Sparkles className="w-3 h-3 text-teal-500" />
                    <span>{flagship.metrics}</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {flagship.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {flagship.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {flagship.tags.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-0.5 rounded text-xs font-mono bg-slate-100 dark:bg-obsidian-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(flagship)}
                    className="text-sm font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-500 inline-flex items-center gap-1.5 focus:outline-none"
                  >
                    View Architecture Specs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a
                    href="https://shopify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tag Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                activeFilter === tag
                  ? 'bg-teal-500/10 dark:bg-teal-500/20 text-teal-700 dark:text-teal-300 border border-teal-500/50 shadow-sm'
                  : 'bg-white dark:bg-obsidian-900 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200/80 dark:border-slate-800 hover:border-teal-500/50 dark:hover:border-teal-500/50 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-obsidian-850">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    {project.metrics && (
                      <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-mono font-medium">
                        {project.metrics}
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-[11px] font-mono bg-slate-100 dark:bg-obsidian-850 text-slate-600 dark:text-slate-400 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-5 pt-2 flex items-center justify-between text-xs font-semibold text-teal-600 dark:text-teal-400">
                  <span className="inline-flex items-center gap-1">
                    Details & Architecture <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  {project.demo && <ExternalLink className="w-3.5 h-3.5 text-slate-400" />}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Accessible Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selectedProject.title}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-obsidian-900 w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl relative border border-slate-200 dark:border-slate-800 flex flex-col max-h-[88vh]"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                aria-label="Close dialog"
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white backdrop-blur-md transition-colors focus:outline-none"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className="h-60 sm:h-72 relative shrink-0">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  {selectedProject.metrics && (
                    <span className="inline-block px-2.5 py-1 rounded bg-teal-500 text-white font-mono text-xs font-semibold mb-2">
                      {selectedProject.metrics}
                    </span>
                  )}
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-mono font-medium bg-slate-100 dark:bg-obsidian-850 text-slate-800 dark:text-slate-200 rounded-lg border border-slate-200 dark:border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 dark:text-slate-500 font-semibold mb-2">
                    Architecture & Impact
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {selectedProject.longDescription || selectedProject.description}
                  </p>
                  
                  {/* Show diagram only for the flagship project (id: 1) or specific ones */}
                  {selectedProject.id === 1 && (
                    <div className="mt-6 mb-2">
                      <DataFlowDiagram />
                    </div>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                  {selectedProject.demo && (
                    <a 
                      href={selectedProject.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-500 text-white rounded-xl text-sm font-semibold transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Platform
                    </a>
                  )}
                  {selectedProject.github && (
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-obsidian-800 hover:bg-slate-800 text-white rounded-xl text-sm font-semibold border border-slate-700 transition-colors"
                    >
                      <Github className="w-4 h-4" /> Repository
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;