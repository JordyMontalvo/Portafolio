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
    <div className="relative w-full max-w-[380px] aspect-square mx-auto hidden lg:flex items-center justify-center select-none pointer-events-auto">
      <style>{`
        @keyframes orbitClockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbitCounterClockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .orbit-spin-slow {
          animation: orbitClockwise 28s linear infinite;
          will-change: transform;
        }
        .orbit-spin-reverse {
          animation: orbitCounterClockwise 36s linear infinite;
          will-change: transform;
        }
        .orbit-counter-slow {
          animation: orbitCounterClockwise 28s linear infinite;
          will-change: transform;
        }
        .orbit-counter-reverse {
          animation: orbitClockwise 36s linear infinite;
          will-change: transform;
        }
      `}</style>

      {/* Central Core */}
      <div className="relative z-10 w-20 h-20 rounded-full bg-slate-900 dark:bg-obsidian-900 border-2 border-teal-500/50 flex items-center justify-center shadow-[0_0_35px_rgba(20,184,166,0.3)]">
        <div className="w-14 h-14 rounded-full bg-teal-500/20 flex items-center justify-center animate-pulse">
          <Code2 className="w-7 h-7 text-teal-400" />
        </div>
      </div>

      {/* Inner Orbit Path */}
      <div className="absolute w-[200px] h-[200px] rounded-full border border-slate-200/60 dark:border-slate-800 pointer-events-none" />
      
      {/* Inner Orbit Items Container */}
      <div className="absolute w-[200px] h-[200px] orbit-spin-slow">
        {innerOrbit.map((skill, i) => {
          const angle = (i * 360) / innerOrbit.length;
          const rad = (angle * Math.PI) / 180;
          const r = 100;
          const x = Math.round(r * Math.cos(rad));
          const y = Math.round(r * Math.sin(rad));

          return (
            <div 
              key={skill.label}
              className="absolute top-1/2 left-1/2"
              style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
            >
              <div className="orbit-counter-slow">
                <div 
                  className="w-11 h-11 rounded-full bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-center group relative cursor-pointer hover:border-teal-400 transition-colors"
                >
                  {skill.icon}
                  <div className="absolute -bottom-7 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] px-2 py-0.5 rounded shadow pointer-events-none whitespace-nowrap z-30">
                    {skill.label}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Outer Orbit Path */}
      <div className="absolute w-[320px] h-[320px] rounded-full border border-slate-200/40 dark:border-slate-800/60 pointer-events-none" />

      {/* Outer Orbit Items Container */}
      <div className="absolute w-[320px] h-[320px] orbit-spin-reverse">
        {outerOrbit.map((skill, i) => {
          const angle = (i * 360) / outerOrbit.length;
          const rad = (angle * Math.PI) / 180;
          const r = 160;
          const x = Math.round(r * Math.cos(rad));
          const y = Math.round(r * Math.sin(rad));

          return (
            <div 
              key={skill.label}
              className="absolute top-1/2 left-1/2"
              style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
            >
              <div className="orbit-counter-reverse">
                <div 
                  className="w-12 h-12 rounded-full bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-slate-800 shadow-md flex items-center justify-center group relative cursor-pointer hover:border-teal-500 transition-colors"
                >
                  {skill.icon}
                  <div className="absolute -bottom-7 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] px-2 py-0.5 rounded shadow pointer-events-none whitespace-nowrap z-30">
                    {skill.label}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(SkillsOrbit);
