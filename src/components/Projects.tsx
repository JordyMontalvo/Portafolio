import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Shopify Plus Migration",
      description: "Led the complete migration of a Magento store to Shopify Plus for an international brand. Developed a custom Liquid theme with real-time ERP integrations.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      tags: ["Shopify", "Liquid", "APIs"],
      github: "https://github.com/JordyMontalvo",
      demo: "https://shopify.com",
      featured: true
    },
    {
      id: 2,
      title: "B2B Corporate Redesign",
      description: "Architecture of a multi-language platform using WordPress, ACF, and Elementor. Aggressively optimized Core Web Vitals, reducing LCP to under 1.2s.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tags: ["WordPress", "PHP", "SEO"],
      github: "https://github.com/JordyMontalvo",
      demo: "https://wordpress.org",
      featured: true
    },
    {
      id: 3,
      title: "Headless Analytics Ecosystem",
      description: "Implementation of a data measurement ecosystem (custom DataLayer) using GTM and GA4. Integrated with Meta Pixel and Klaviyo for automated funnels.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["GA4", "GTM", "Analytics"],
      github: "https://github.com/JordyMontalvo",
      featured: false
    },
    {
      id: 4,
      title: "Bibliotecas AIEP Portal",
      description: "Development of the official library portal for AIEP students and teachers. Provides access to digital resources, career bibliography, and study room management.",
      image: "https://portalbibliotecas.aiep.cl/img/og-biblioteca-aiep.jpg",
      tags: ["Vue.js", "Web Portal", "Education"],
      github: "https://github.com/PedroFlores28/DisenoBiblioteca",
      demo: "https://portalbibliotecas.aiep.cl/",
      featured: true
    },
    {
      id: 5,
      title: "Sifrah - Full-Stack MLM Platform",
      description: "Complete Multi-Level Marketing (MLM) platform. The frontend features a Vue.js & Vuex SPA with commission charts, interactive genealogy trees, and dashboards. The backend runs on Node.js/Express, utilizing MongoDB, Prisma ORM, and integrates MercadoPago for automated payouts and Nodemailer for communications.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["Vue.js", "Node.js", "MongoDB", "Prisma", "MercadoPago"],
      github: "https://github.com/JordyMontalvo/Sifrah_app",
      demo: "http://sifrah.vercel.app/",
      featured: true
    },
    {
      id: 6,
      title: "Semilla de Compromisos - UNACEM",
      description: "Immersive interactive web experience developed for UNACEM's THM event. Participants register personal commitments through a game-like narrative featuring a dynamic animated seed. Built with React, TypeScript, and Framer Motion for highly fluid, physics-based animations.",
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/JordyMontalvo/exp_semilla",
      demo: "https://serve-unacem.vercel.app/es",
      featured: true
    }
  ];

  // Get all unique tags from projects
  const allTags = ['all', ...new Set(projects.flatMap(project => project.tags))];
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
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
          className="flex justify-center flex-wrap gap-3 mb-10"
        >
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeFilter === tag
                  ? 'bg-teal-500 text-white shadow-md'
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
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
                key={project.id} 
                className={`bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="relative h-60 overflow-hidden bg-slate-200 dark:bg-slate-700">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.github && (
                      <motion.a whileHover={{ scale: 1.1 }} href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-slate-900 rounded-full shadow-lg">
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a whileHover={{ scale: 1.1 }} href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 bg-teal-500 text-white rounded-full shadow-lg">
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
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
                  
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                  
                  <div className="flex justify-between items-center mt-auto">
                    <a 
                      href="#" 
                      className="inline-flex items-center text-teal-600 dark:text-teal-400 font-medium hover:text-teal-700 dark:hover:text-teal-300 transition-colors duration-300 group"
                    >
                      View Details <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com/JordyMontalvo" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-6 py-3 bg-slate-800 dark:bg-white text-white dark:text-slate-800 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-100 transition duration-300 shadow-lg hover:shadow-xl font-medium group"
          >
            View All Projects <Github className="ml-2 h-5 w-5 transform group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;