import React from 'react';
import { motion } from 'framer-motion';
import { Database, ShoppingBag, Server, Smartphone, Globe } from 'lucide-react';

const DataFlowDiagram: React.FC = () => {
  // SVG coordinates for nodes
  const nodes = {
    client: { x: 50, y: 150, label: 'Storefront', icon: <Smartphone className="w-6 h-6 text-teal-400" /> },
    cdn: { x: 200, y: 150, label: 'CDN Edge', icon: <Globe className="w-6 h-6 text-slate-300" /> },
    shopify: { x: 400, y: 150, label: 'Shopify Plus', icon: <ShoppingBag className="w-6 h-6 text-emerald-400" /> },
    api: { x: 600, y: 80, label: 'Middleware API', icon: <Server className="w-6 h-6 text-blue-400" /> },
    erp: { x: 800, y: 150, label: 'Enterprise ERP', icon: <Database className="w-6 h-6 text-amber-400" /> },
  };

  const drawPath = (start: {x: number, y: number}, end: {x: number, y: number}, curvature = 0) => {
    return `M ${start.x} ${start.y} Q ${(start.x + end.x) / 2} ${start.y - curvature} ${end.x} ${end.y}`;
  };

  return (
    <div className="relative w-full overflow-hidden bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-inner hidden md:block">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
          Live Architecture Telemetry
        </h4>
        <div className="text-[10px] font-mono text-slate-500">System: 100% Operational</div>
      </div>
      
      <div className="relative w-full h-[250px] mt-8">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 900 250" preserveAspectRatio="xMidYMid meet">
          {/* Static Paths */}
          <path d={drawPath(nodes.client, nodes.cdn)} fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
          <path d={drawPath(nodes.cdn, nodes.shopify)} fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
          <path d={drawPath(nodes.shopify, nodes.api, 50)} fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
          <path d={drawPath(nodes.api, nodes.erp, -50)} fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
          <path d={drawPath(nodes.shopify, nodes.erp, -100)} fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />

          {/* Animated Packets */}
          <motion.circle r="3" fill="#2dd4bf" filter="drop-shadow(0 0 4px #2dd4bf)">
            <animateMotion dur="2s" repeatCount="indefinite" path={drawPath(nodes.client, nodes.cdn)} />
          </motion.circle>
          <motion.circle r="3" fill="#2dd4bf" filter="drop-shadow(0 0 4px #2dd4bf)">
            <animateMotion dur="2s" begin="1s" repeatCount="indefinite" path={drawPath(nodes.client, nodes.cdn)} />
          </motion.circle>

          <motion.circle r="3" fill="#fbbf24" filter="drop-shadow(0 0 4px #fbbf24)">
            <animateMotion dur="3s" repeatCount="indefinite" path={drawPath(nodes.cdn, nodes.shopify)} />
          </motion.circle>

          <motion.circle r="3" fill="#60a5fa" filter="drop-shadow(0 0 4px #60a5fa)">
            <animateMotion dur="2.5s" repeatCount="indefinite" path={drawPath(nodes.shopify, nodes.api, 50)} />
          </motion.circle>

          <motion.circle r="3" fill="#34d399" filter="drop-shadow(0 0 4px #34d399)">
            <animateMotion dur="2.5s" begin="1.2s" repeatCount="indefinite" path={drawPath(nodes.api, nodes.erp, -50)} />
          </motion.circle>

          <motion.circle r="3" fill="#f87171" filter="drop-shadow(0 0 4px #f87171)">
            <animateMotion dur="4s" repeatCount="indefinite" path={drawPath(nodes.erp, nodes.shopify, -100)} />
          </motion.circle>
        </svg>

        {/* Nodes rendering */}
        {Object.entries(nodes).map(([key, node]) => (
          <div 
            key={key} 
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
            style={{ left: `${(node.x / 900) * 100}%`, top: `${(node.y / 250) * 100}%` }}
          >
            <div className="w-12 h-12 rounded-xl bg-obsidian-800 border border-slate-700 flex items-center justify-center shadow-lg relative z-10 group hover:border-teal-500 transition-colors cursor-pointer">
              {node.icon}
              <div className="absolute inset-0 rounded-xl bg-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-[10px] font-mono text-slate-400 whitespace-nowrap bg-slate-900/80 px-1.5 rounded">{node.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataFlowDiagram;
