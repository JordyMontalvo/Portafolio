import React from 'react';
import { ShoppingCart, Layout, Server, Gauge, Code2, Database, Smartphone, Cloud, Globe } from 'lucide-react';

const SkillsOrbit: React.FC = () => {
  // Inner orbit skills (Frontend & Core)
  const innerOrbit = [
    { icon: <Code2 className="w-5 h-5 text-teal-400" />, label: 'React' },
    { icon: <Layout className="w-5 h-5 text-blue-400" />, label: 'Tailwind' },
    { icon: <ShoppingCart className="w-5 h-5 text-emerald-400" />, label: 'Shopify Plus' },
    { icon: <Smartphone className="w-5 h-5 text-purple-400" />, label: 'TypeScript' }
  ];

  // Outer orbit skills (Backend, Cloud, Performance)
  const outerOrbit = [
    { icon: <Server className="w-5 h-5 text-green-400" />, label: 'Node.js' },
    { icon: <Database className="w-5 h-5 text-blue-500" />, label: 'MySQL' },
    { icon: <Globe className="w-5 h-5 text-indigo-400" />, label: 'WordPress' },
    { icon: <Gauge className="w-5 h-5 text-orange-400" />, label: 'SEO & Perf' },
    { icon: <Cloud className="w-5 h-5 text-slate-300" />, label: 'AWS/GCP' }
  ];

  return (
    <div className="relative w-full max-w-[400px] aspect-square mx-auto flex items-center justify-center hidden lg:flex">
      {/* Central Core */}
      <div className="relative z-10 w-24 h-24 rounded-full bg-slate-900 dark:bg-obsidian-900 border-2 border-teal-500/50 flex items-center justify-center shadow-[0_0_40px_rgba(20,184,166,0.3)]">
        <div className="w-16 h-16 rounded-full bg-teal-500/20 flex items-center justify-center animate-pulse">
          <Code2 className="w-8 h-8 text-teal-400" />
        </div>
      </div>

      {/* Inner Orbit Path */}
      <div className="absolute w-[220px] h-[220px] rounded-full border border-slate-200/50 dark:border-slate-700/50 animate-[spin_15s_linear_infinite]" />
      
      {/* Inner Orbit Items */}
      <div className="absolute w-[220px] h-[220px] animate-[spin_15s_linear_infinite]">
        {innerOrbit.map((skill, i) => {
          const angle = (i * 360) / innerOrbit.length;
          return (
            <div 
              key={skill.label}
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-[0_110px]"
              style={{ transform: `translateX(-50%) translateY(-50%) rotate(${angle}deg)` }}
            >
              <div 
                className="w-12 h-12 rounded-full bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-slate-700 shadow-lg flex items-center justify-center group relative cursor-pointer hover:border-teal-400 transition-colors"
              >
                <div className="animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse', animationTimingFunction: 'linear' }}>
                  {skill.icon}
                </div>
                <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap">
                  {skill.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Outer Orbit Path */}
      <div className="absolute w-[360px] h-[360px] rounded-full border border-slate-200/30 dark:border-slate-800 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse', animationTimingFunction: 'linear' }} />

      {/* Outer Orbit Items */}
      <div className="absolute w-[360px] h-[360px] animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse', animationTimingFunction: 'linear' }}>
        {outerOrbit.map((skill, i) => {
          const angle = (i * 360) / outerOrbit.length;
          return (
            <div 
              key={skill.label}
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-[0_180px]"
              style={{ transform: `translateX(-50%) translateY(-50%) rotate(${angle}deg)` }}
            >
              <div 
                className="w-14 h-14 rounded-full bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-slate-800 shadow-md flex items-center justify-center group relative cursor-pointer hover:border-teal-500 transition-colors"
              >
                <div className="animate-spin" style={{ animationDuration: '25s', animationTimingFunction: 'linear' }}>
                  {skill.icon}
                </div>
                <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap">
                  {skill.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsOrbit;
