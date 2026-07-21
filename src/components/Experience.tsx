import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      role: "Lead Shopify Developer",
      company: "Fuxion",
      location: "Remote",
      period: "2020 - Present",
      description: [
        "Technical leadership in creating and scaling high-traffic stores on Shopify and WooCommerce.",
        "Advanced development of custom themes using Liquid, HTML5, CSS3, and modern JavaScript.",
        "Integration of complex APIs (ERPs, CRMs) and severe optimization of Core Web Vitals (60% load reduction)."
      ],
      technologies: ["Shopify", "Liquid", "JavaScript", "HTML/CSS", "APIs"]
    },
    {
      id: 2,
      role: "Senior Full Stack Developer",
      company: "Corporate Consulting",
      location: "Lima, Peru",
      period: "2020 - 2022",
      description: [
        "Comprehensive development of corporate websites and custom virtual stores.",
        "Built over 50 websites using WordPress, PHP, and Advanced Custom Fields (ACF).",
        "Pixel-Perfect interfaces from Figma designs and aggressive technical SEO practices."
      ],
      technologies: ["WordPress", "PHP", "SEO", "Elementor", "cPanel"]
    },
    {
      id: 3,
      role: "Web Developer & Support",
      company: "Tech Startup",
      location: "Lima, Peru",
      period: "2020 - 2021",
      description: [
        "Maintenance of in-house systems and development of high-converting Landing Pages.",
        "Object-Oriented Programming in PHP and agile resolution of technical incidents.",
        "Constant collaboration under agile methodologies (Scrum) using tools like Jira and Git."
      ],
      technologies: ["PHP", "MySQL", "JavaScript", "Git", "Jira"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-2">Work Experience</h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mb-10"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-slate-300 dark:bg-slate-600 origin-top"
            />
            
            {/* Experience items */}
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id} 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                className={`relative z-10 mb-12 md:mb-20 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto' : 'md:pl-12'
                } md:w-1/2`}
              >
                {/* Timeline dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5, type: "spring" }}
                  className="absolute top-0 md:top-1/2 left-0 md:left-auto md:transform md:-translate-y-1/2 w-4 h-4 rounded-full bg-teal-500 shadow-[0_0_0_4px_rgba(20,184,166,0.2)] hidden md:block" 
                  style={{ 
                    [index % 2 === 0 ? 'right' : 'left']: '-8px' 
                  }}
                />
                
                {/* Experience card */}
                <div className="ml-8 md:ml-0 bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100 dark:border-slate-800">
                  <div className="md:flex md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">{exp.role}</h3>
                    <div className="inline-flex items-center justify-center px-3 py-1 mt-2 md:mt-0 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-400 text-sm font-medium rounded-full">
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center text-slate-600 dark:text-slate-400 mb-1 justify-start md:justify-start">
                      <span className="font-medium text-teal-600 dark:text-teal-400">{exp.company}</span>
                    </div>
                    <div className="flex items-center text-slate-500 dark:text-slate-500 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <ul className="list-disc list-inside mb-4 text-slate-600 dark:text-slate-300 space-y-2 text-left">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm">{item}</li>
                    ))}
                  </ul>
                  
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;