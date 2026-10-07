import React from 'react';
import { MapPin, Calendar, CheckCircle2, FileText, Award, ExternalLink } from 'lucide-react';
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
  recommendationLetter?: string;
  workCertificate?: string;
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
      technologies: ["Shopify Plus", "Liquid", "Storefront API", "JavaScript", "REST APIs", "Tailwind CSS"],
      recommendationLetter: "/cartas/Carta_Recomendacion_Fuxion_Jordy_Montalvo.pdf",
      workCertificate: "/cartas/Certificado_Trabajo_Planilla_Fuxion_Jordy_Montalvo.pdf"
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
      technologies: ["WordPress", "PHP", "ACF Pro", "MySQL", "Technical SEO", "JavaScript"],
      recommendationLetter: "/cartas/Carta_Recomendacion_Sifrah_Jordy_Montalvo.pdf",
      workCertificate: "/cartas/Certificado_Trabajo_Planilla_Sifrah_Jordy_Montalvo.pdf"
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
      technologies: ["PHP", "JavaScript", "MySQL", "Bootstrap", "Git", "REST APIs"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-[#05080e] transition-colors">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-mono mb-4 border border-teal-500/20">
            Career Timeline
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Professional Track Record
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            A chronological timeline of production engineering roles, ownership, and measurable business impact.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 sm:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-6 sm:pl-8 group"
            >
              {/* Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-obsidian-900 border-2 border-slate-400 dark:border-slate-600 group-hover:border-teal-500 group-hover:scale-110 transition-all duration-300" />

              {/* Card */}
              <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-obsidian-900/60 border border-slate-200/70 dark:border-slate-800/80 hover:border-teal-500/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-teal-600 dark:text-teal-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3 font-medium">
                  <span className="font-semibold text-slate-700 dark:text-slate-200">{exp.company}</span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {exp.location}
                  </span>
                </div>

                {/* Highlight Badge */}
                <div className="inline-block px-3 py-1 rounded-md bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20 text-xs font-medium mb-4">
                  ⚡ {exp.impactHighlight}
                </div>

                <ul className="space-y-2 mb-5">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200/50 dark:border-slate-800/60">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded text-xs font-mono bg-white dark:bg-obsidian-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2">
                    {exp.recommendationLetter && (
                      <a
                        href={exp.recommendationLetter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 dark:bg-teal-900/30 hover:bg-teal-100 dark:hover:bg-teal-900/50 text-teal-700 dark:text-teal-300 text-xs font-semibold rounded-lg border border-teal-200 dark:border-teal-800/50 transition-colors"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        Carta Recomendación
                      </a>
                    )}
                    {exp.workCertificate && (
                      <a
                        href={exp.workCertificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 dark:bg-obsidian-850 hover:bg-slate-200 dark:hover:bg-obsidian-800 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700 transition-colors"
                      >
                        <Award className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                        Certificado Laboral
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Documentation Hub Footer Banner */}
        <div className="mt-14 text-center">
          <div className="p-5 rounded-2xl bg-gradient-to-r from-teal-500/10 via-slate-50 dark:via-obsidian-900 to-teal-500/10 border border-teal-500/20 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Award className="w-4 h-4 text-teal-500" />
                Documentación Laboral y Referencias
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Cartas de recomendación y certificados oficiales (Planilla y Locación).
              </p>
            </div>
            <a
              href="/cartas/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white font-medium text-xs rounded-xl shadow-sm hover:shadow-teal-500/20 transition-all inline-flex items-center gap-1.5 shrink-0"
            >
              <span>Ver los 6 Documentos</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;