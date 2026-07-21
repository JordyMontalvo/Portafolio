import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Shopify Plus Migration",
      description: "Led the complete migration of a Magento store to Shopify Plus for an international brand.",
      longDescription: "Led the complete migration of a Magento store to Shopify Plus for an international brand. Developed a custom Liquid theme with real-time ERP integrations, resulting in a 40% increase in checkout conversions and significantly reduced page load times.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      tags: ["Shopify", "Liquid", "APIs"],
      github: "https://github.com/JordyMontalvo",
      demo: "https://shopify.com",
      featured: true
    },
    {
      id: 2,
      title: "B2B Corporate Redesign",
      description: "Architecture of a multi-language platform using WordPress, ACF, and Elementor.",
      longDescription: "Architecture of a multi-language platform using WordPress, ACF, and Elementor. Aggressively optimized Core Web Vitals, reducing LCP to under 1.2s. Implemented custom post types and complex taxonomy structures for B2B product catalogs.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tags: ["WordPress", "PHP", "SEO"],
      github: "https://github.com/JordyMontalvo",
      demo: "https://wordpress.org",
      featured: true
    },
    {
      id: 3,
      title: "Headless Analytics Ecosystem",
      description: "Implementation of a data measurement ecosystem using GTM and GA4.",
      longDescription: "Implementation of a data measurement ecosystem (custom DataLayer) using GTM and GA4. Integrated with Meta Pixel and Klaviyo for automated funnels, ensuring 100% accurate tracking of user journeys across multiple domains.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["GA4", "GTM", "Analytics"],
      github: "https://github.com/JordyMontalvo",
      featured: false
    },
    {
      id: 4,
      title: "Bibliotecas AIEP Portal",
      description: "Development of the official library portal for AIEP students and teachers.",
      longDescription: "Development of the official library portal for AIEP students and teachers. Provides access to digital resources, career bibliography, and study room management. Built a robust frontend architecture ensuring accessibility and performance.",
      image: "https://portalbibliotecas.aiep.cl/img/og-biblioteca-aiep.jpg",
      tags: ["Vue.js", "Web Portal", "Education"],
      github: "https://github.com/PedroFlores28/DisenoBiblioteca",
      demo: "https://portalbibliotecas.aiep.cl/",
      featured: true
    },
    {
      id: 5,
      title: "Sifrah - Full-Stack MLM Platform",
      description: "Complete Multi-Level Marketing (MLM) platform with commission charts and interactive trees.",
      longDescription: "Complete Multi-Level Marketing (MLM) platform. The frontend features a Vue.js & Vuex SPA with commission charts, interactive genealogy trees, and dashboards. The backend runs on Node.js/Express, utilizing MongoDB, Prisma ORM, and integrates MercadoPago for automated payouts and Nodemailer for communications.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["Vue.js", "Node.js", "MongoDB", "Prisma", "MercadoPago"],
      github: "https://github.com/JordyMontalvo/Sifrah_app",
      demo: "http://sifrah.vercel.app/",
      featured: true
    },
    {
      id: 6,
      title: "Semilla de Compromisos",
      description: "Immersive interactive web experience developed for UNACEM's THM event.",
      longDescription: "Immersive interactive web experience developed for UNACEM's THM event. Participants register personal commitments through a game-like narrative featuring a dynamic animated seed. Built with React, TypeScript, and Framer Motion for highly fluid, physics-based animations.",
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/JordyMontalvo/exp_semilla",
      demo: "https://serve-unacem.vercel.app/es",
      featured: true
    },
    {
      id: 7,
      title: "CV Tailor AI Agent",
      description: "An AI-powered hybrid tool to tailor resumes to specific job descriptions.",
      longDescription: "An 'Agent-Ready' tool to adapt CVs to specific job offers optimizing for ATS filters. Works directly with AI code editors (Cursor/Antigravity) or via a Node.js automation script using the Gemini API and Puppeteer for PDF export.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
      tags: ["Node.js", "Puppeteer", "AI / Gemini", "Automation"],
      github: "https://github.com/JordyMontalvo/cv_generetor",
      featured: true
    }
  ];

  const allTags = ['all', ...new Set(projects.flatMap(project => project.tags))];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-2">My Projects</h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mb-10"></div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center flex-wrap gap-3 mb-12"
        >
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeFilter === tag
                  ? 'bg-teal-500 text-white shadow-md shadow-teal-500/30'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </motion.div>
        
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedProject(project)}
                key={project.id} 
                className={`group cursor-pointer bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-300 ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="relative h-56 overflow-hidden bg-slate-200 dark:bg-slate-700">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-teal-500 transition-colors">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex justify-between items-center mt-auto">
                    <span className="inline-flex items-center text-teal-600 dark:text-teal-400 font-medium">
                      View Details <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-900 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl relative border border-slate-200 dark:border-slate-800 flex flex-col max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="h-64 sm:h-80 relative flex-shrink-0">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6 sm:p-10 overflow-y-auto">
                <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">{selectedProject.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-sm font-medium bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full border border-teal-200 dark:border-teal-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Project Overview</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                  {selectedProject.longDescription || selectedProject.description}
                </p>
                
                <div className="flex flex-wrap gap-4 mt-auto">
                  {selectedProject.demo && (
                    <a 
                      href={selectedProject.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-300 shadow-lg font-medium"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" /> Live Demo
                    </a>
                  )}
                  {selectedProject.github && (
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center px-6 py-3 bg-slate-800 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-700 dark:hover:bg-slate-600 transition duration-300 shadow-lg font-medium"
                    >
                      <Github className="w-5 h-5 mr-2" /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;