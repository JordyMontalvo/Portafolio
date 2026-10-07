import React from 'react';
import { MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  impactHighlight: string;
  description: string[];
  technologies: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      role: "Lead Shopify & E-Commerce Developer",
      company: "Fuxion",
      location: "Remote (Global)",
      period: "2022 - Present",
      impactHighlight: "60% Load Time Reduction & Enterprise ERP Automation",
      description: [
        "Technical leadership in architecting and scaling enterprise storefronts on Shopify Plus and WooCommerce.",
        "Advanced custom theme engineering with Liquid, modern JavaScript, and Tailwind CSS.",
        "Complex bi-directional API synchronizations between Shopify, custom ERP systems, and CRM pipelines."
      ],
      technologies: ["Shopify Plus", "Liquid", "Storefront API", "JavaScript", "REST APIs", "Tailwind CSS"]
    },
    {
      id: 2,
      role: "Senior Full Stack & CMS Engineer",
      company: "Corporate Consulting",
      location: "Lima, Peru",
      period: "2020 - 2022",
      impactHighlight: "50+ Production Platforms Delivered & Sub-1.2s LCP",
      description: [
        "Comprehensive architecture of multi-language enterprise web platforms using WordPress, PHP, and ACF Pro.",
        "Engineered pixel-perfect component systems translating complex Figma designs with zero visual drift.",
        "Aggressive Core Web Vitals optimization, caching architectures, and technical SEO structure."
      ],
      technologies: ["WordPress", "PHP", "ACF Pro", "MySQL", "Technical SEO", "JavaScript"]
    },
    {
      id: 3,
      role: "Web Developer & Systems Engineer",
      company: "Tech Startup",
      location: "Lima, Peru",
      period: "2020 - 2021",
      impactHighlight: "High-Converting Landing Pages & Agile Delivery",
      description: [
        "Full lifecycle development of high-conversion marketing funnels and internal portal tools.",
        "Object-Oriented PHP development, MySQL schema queries, and rapid issue resolution.",
        "Cross-functional collaboration under Agile/Scrum with continuous git-based releases."
      ],
      technologies: ["PHP", "MySQL", "JavaScript", "Git", "Jira", "Linux"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-[#05080e] transition-colors">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="max-w-2xl mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            Professional Track & Leadership
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            4+ years of proven delivery across high-traffic digital retail, custom platforms, and enterprise web solutions.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-obsidian-950 border-2 border-teal-500 group-hover:scale-125 group-hover:bg-teal-500 transition-all duration-200" />

              <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-obsidian-900/70 border border-slate-200/70 dark:border-slate-800/80 shadow-sm hover:border-teal-500/40 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                      <span className="font-semibold text-teal-600 dark:text-teal-400">{exp.company}</span>
                      <span className="text-slate-300 dark:text-slate-700">•</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-slate-800 text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-teal-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Highlight callout */}
                <div className="my-4 px-3.5 py-2 rounded-lg bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200/60 dark:border-teal-800/40 text-xs sm:text-sm font-medium text-teal-800 dark:text-teal-300">
                  ⚡ Impact: {exp.impactHighlight}
                </div>

                <ul className="space-y-2 mb-5">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200/50 dark:border-slate-800/60">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded text-xs font-mono bg-white dark:bg-obsidian-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
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
    </section>
  );
};

export default Experience;