import React from 'react';
import { ShoppingBag, LayoutTemplate, Cpu, Check, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    tag: 'E-COMMERCE ARCHITECTURE',
    title: 'Shopify Plus & Liquid Engineering',
    description: 'Custom theme development, Magento/WooCommerce migrations, and high-load store optimization. Engineered for frictionless checkout and maximum revenue conversion.',
    metric: '+40% Avg. Conversion Lift',
    deliverables: [
      'Bespoke Liquid & Headless themes from Figma designs',
      'Custom ERP, CRM, and payment gateway integrations',
      'Checkout Extensibility & cart drawer optimizations',
      'Core Web Vitals auditing and sub-second asset pipelines'
    ],
    tech: ['Shopify Plus', 'Liquid', 'Storefront API', 'WooCommerce', 'Tailwind CSS'],
    icon: <ShoppingBag className="w-5 h-5 text-teal-600 dark:text-teal-400" />
  },
  {
    tag: 'FRONTEND ENGINEERING',
    title: 'High-Performance Web Applications',
    description: 'Pixel-perfect, accessible single-page applications and client portals crafted with React, Vue, and TypeScript. Fluid motion design that elevates product perception.',
    metric: '<1.2s LCP Load Times',
    deliverables: [
      'Accessible, scalable component design systems',
      'Fluid physics-based motion with Framer Motion',
      'Complex reactive state management (Vuex, Pinia, Redux)',
      'Cross-browser optimization & full responsive fluidity'
    ],
    tech: ['React', 'Vue.js', 'TypeScript', 'Framer Motion', 'Vite'],
    icon: <LayoutTemplate className="w-5 h-5 text-teal-600 dark:text-teal-400" />
  },
  {
    tag: 'FULL-STACK & AUTOMATION',
    title: 'Bespoke APIs, Tracking & AI Agents',
    description: 'Robust server-side integrations, headless analytics (GTM / GA4 custom DataLayers), and modern AI automation pipelines tailored to specific operational needs.',
    metric: '100% Tracking Accuracy',
    deliverables: [
      'REST & GraphQL backend services with Node.js & PHP',
      'Custom DataLayer instrumentation for GA4, Meta & Klaviyo',
      'Automated resume tailoring & PDF generation via Gemini API',
      'MongoDB & Prisma database architecture'
    ],
    tech: ['Node.js', 'Express', 'PHP', 'GA4 / GTM', 'Gemini AI', 'Prisma'],
    icon: <Cpu className="w-5 h-5 text-teal-600 dark:text-teal-400" />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-obsidian-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="max-w-2xl mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            Engineered for performance, conversion, and longevity.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            I don't build generic brochure sites. Every solution is architected with enterprise-grade standards, meticulous typography, and verifiable performance metrics.
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-teal-500/40 dark:hover:border-teal-500/40 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Header & Overview */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/20">
                      {service.icon}
                    </div>
                    <span className="font-mono text-xs font-semibold tracking-wider uppercase text-teal-600 dark:text-teal-400">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/50 text-xs font-semibold text-teal-700 dark:text-teal-300">
                    <Zap className="w-3.5 h-3.5 text-teal-500" />
                    <span>{service.metric}</span>
                  </div>
                </div>

                {/* Deliverables & Stack */}
                <div className="lg:col-span-7 bg-slate-50 dark:bg-obsidian-950/50 p-5 sm:p-6 rounded-xl border border-slate-100 dark:border-slate-800/80">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 font-semibold">
                    Core Deliverables
                  </div>
                  <ul className="space-y-2.5 mb-6">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                        <Check className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-wrap gap-1.5">
                    {service.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-white dark:bg-obsidian-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
