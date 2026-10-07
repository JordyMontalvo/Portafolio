import React, { useRef, useState } from 'react';
import { Briefcase, GraduationCap, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };
  const highlights = [
    {
      icon: <Briefcase className="w-4 h-4 text-teal-600 dark:text-teal-400" />,
      title: "4+ Years Production Experience",
      desc: "Architecting high-volume E-commerce & corporate platforms"
    },
    {
      icon: <GraduationCap className="w-4 h-4 text-teal-600 dark:text-teal-400" />,
      title: "Computer Science Background",
      desc: "Universidad Peruana de Ciencias Aplicadas (UPC)"
    },
    {
      icon: <MapPin className="w-4 h-4 text-teal-600 dark:text-teal-400" />,
      title: "Lima, Peru (GMT-5)",
      desc: "Seamless remote collaboration with US, LATAM & Europe"
    },
    {
      icon: <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400" />,
      title: "AI-Augmented Engineering",
      desc: "LLMs, automated workflows, and agentic workflows"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#05080e] transition-colors">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Avatar side */}
          <motion.div 
            className="lg:col-span-5 relative group perspective-1000"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div 
              ref={cardRef}
              onMouseMove={handleMouseMove}
              className="relative mx-auto max-w-sm rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-obsidian-900 shadow-xl transition-all duration-300"
            >
              {/* Holographic interactive overlay */}
              <div 
                className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay dark:mix-blend-color-dodge"
                style={{
                  background: `radial-gradient(800px circle at ${mousePos.x}% ${mousePos.y}%, rgba(20, 184, 166, 0.15), transparent 40%)`
                }}
              />
              <div 
                className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-screen"
                style={{
                  background: `radial-gradient(400px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 255, 255, 0.1), transparent 40%)`
                }}
              />

              <div className="aspect-[4/5] overflow-hidden bg-slate-100 dark:bg-obsidian-850 relative">
                <img 
                  src="/avatar_pro.png" 
                  alt="Jordy Montalvo" 
                  className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-[1.03] group-hover:contrast-125 group-hover:saturate-110 transition-all duration-700 ease-out"
                />
              </div>
              <div className="p-4 bg-white/90 dark:bg-obsidian-900/90 backdrop-blur-md border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between relative z-30">
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">Jordy Montalvo</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Senior Engineer</div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-xs font-medium border border-emerald-200 dark:border-emerald-800/50 shadow-inner">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Verified
                </div>
              </div>
            </div>
            
            {/* Subtle floating shadow blob */}
            <div className="absolute -inset-4 bg-teal-500/20 dark:bg-teal-500/10 blur-3xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </motion.div>

          {/* Copy side */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
              Crafting resilient web architectures that drive measurable business impact.
            </h2>
            
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-5">
              I am a Senior Software Engineer specializing in enterprise E-commerce architectures and modern web platforms. Over the past 4+ years, I have architected custom Shopify Plus stores, engineered high-converting Liquid themes, and built bespoke full-stack applications with React, Vue, Node.js, and WordPress.
            </p>
            
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              My engineering philosophy focuses on speed, accessibility, and clean architecture. I bridge the gap between design fidelity and technical execution—guaranteeing sub-second page loads, seamless API integrations, and conversion-optimized user journeys.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-obsidian-900/60 border border-slate-200/60 dark:border-slate-800/60 flex items-start gap-3 hover:border-teal-500/40 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/20 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;