import React from 'react';
import { Database, Code2, Monitor, Server, Layout, ShieldCheck, BrainCircuit, Gauge } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Frontend
    { name: 'HTML/CSS', level: 90, icon: <Layout className="w-5 h-5" />, category: 'Frontend' },
    { name: 'JavaScript', level: 85, icon: <Code2 className="w-5 h-5" />, category: 'Frontend' },
    { name: 'React', level: 80, icon: <Monitor className="w-5 h-5" />, category: 'Frontend' },
    { name: 'TypeScript', level: 75, icon: <Code2 className="w-5 h-5" />, category: 'Frontend' },
    
    // Backend
    { name: 'Node.js', level: 80, icon: <Server className="w-5 h-5" />, category: 'Backend' },
    { name: 'Python', level: 70, icon: <Code2 className="w-5 h-5" />, category: 'Backend' },
    { name: 'Express', level: 75, icon: <Server className="w-5 h-5" />, category: 'Backend' },
    { name: 'APIs', level: 85, icon: <Server className="w-5 h-5" />, category: 'Backend' },
    
    // Database
    { name: 'SQL', level: 80, icon: <Database className="w-5 h-5" />, category: 'Database' },
    { name: 'MongoDB', level: 75, icon: <Database className="w-5 h-5" />, category: 'Database' },
    
    // Other
    { name: 'Git/GitHub', level: 85, icon: <Code2 className="w-5 h-5" />, category: 'Other' },
    { name: 'DevOps', level: 65, icon: <Gauge className="w-5 h-5" />, category: 'Other' },
    { name: 'Testing', level: 70, icon: <ShieldCheck className="w-5 h-5" />, category: 'Other' },
    { name: 'AI/ML', level: 60, icon: <BrainCircuit className="w-5 h-5" />, category: 'Other' },
  ];

  // Group skills by category
  const categories = [...new Set(skills.map(skill => skill.category))];
  
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-2">My Skills</h2>
        <div className="w-16 h-1 bg-teal-500 mx-auto mb-10"></div>
        
        <div className="max-w-5xl mx-auto">
          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-6">{category}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <div 
                      key={index} 
                      className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-3">
                          <span className="text-teal-600 dark:text-teal-400">{skill.icon}</span>
                        </div>
                        <h4 className="font-medium text-slate-800 dark:text-white">{skill.name}</h4>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-teal-400 to-teal-600 h-2 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <div className="mt-2 text-right text-sm text-slate-600 dark:text-slate-400">
                        {skill.level}%
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;