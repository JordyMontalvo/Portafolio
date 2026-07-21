import React from 'react';
import { Database, Code2, Monitor, Server, Layout, ShieldCheck, BrainCircuit, Gauge } from 'lucide-react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // E-commerce & CMS
    { name: 'Shopify Plus', level: 95, icon: <Monitor className="w-5 h-5" />, category: 'E-commerce' },
    { name: 'WordPress', level: 90, icon: <Layout className="w-5 h-5" />, category: 'E-commerce' },
    { name: 'Liquid', level: 90, icon: <Code2 className="w-5 h-5" />, category: 'E-commerce' },
    { name: 'WooCommerce', level: 85, icon: <Database className="w-5 h-5" />, category: 'E-commerce' },
    
    // Core Web
    { name: 'JavaScript (ES6+)', level: 85, icon: <Code2 className="w-5 h-5" />, category: 'Frontend' },
    { name: 'TypeScript', level: 75, icon: <Code2 className="w-5 h-5" />, category: 'Frontend' },
    { name: 'HTML5/CSS3', level: 95, icon: <Layout className="w-5 h-5" />, category: 'Frontend' },
    { name: 'React', level: 80, icon: <Monitor className="w-5 h-5" />, category: 'Frontend' },
    
    // Backend & APIs
    { name: 'PHP', level: 85, icon: <Server className="w-5 h-5" />, category: 'Backend' },
    { name: 'Node.js', level: 75, icon: <Server className="w-5 h-5" />, category: 'Backend' },
    { name: 'REST/GraphQL', level: 80, icon: <BrainCircuit className="w-5 h-5" />, category: 'Backend' },
    { name: 'MySQL', level: 80, icon: <Database className="w-5 h-5" />, category: 'Backend' },
    
    // Tools & Performance
    { name: 'Tech SEO', level: 90, icon: <Gauge className="w-5 h-5" />, category: 'Tools' },
    { name: 'GA4 / GTM', level: 85, icon: <ShieldCheck className="w-5 h-5" />, category: 'Tools' },
    { name: 'Git/GitHub', level: 85, icon: <Code2 className="w-5 h-5" />, category: 'Tools' },
    { name: 'Linux/cPanel', level: 75, icon: <Server className="w-5 h-5" />, category: 'Tools' },
  ];

  // Group skills by category
  const categories = [...new Set(skills.map(skill => skill.category))];
  
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-2">My Skills</h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mb-10"></div>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          {categories.map((category, catIndex) => (
            <motion.div 
              key={category} 
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-6">{category}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <motion.div 
                      key={index} 
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md transition-shadow duration-300 hover:shadow-xl"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-3">
                          <span className="text-teal-600 dark:text-teal-400">{skill.icon}</span>
                        </div>
                        <h4 className="font-medium text-slate-800 dark:text-white">{skill.name}</h4>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                        <motion.div 
                          className="bg-gradient-to-r from-teal-400 to-teal-600 h-2 rounded-full" 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
                        />
                      </div>
                      <div className="mt-2 text-right text-sm text-slate-600 dark:text-slate-400">
                        {skill.level}%
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;