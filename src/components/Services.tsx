import React from 'react';
import { Layers, Server, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Interactive Frontend',
    description: 'Building immersive, high-performance web applications using React, Vue.js, and Framer Motion. Focused on responsive design, smooth animations, and pixel-perfect UI/UX.',
    icon: <Layers className="w-8 h-8 text-teal-500" />
  },
  {
    title: 'Backend Architecture',
    description: 'Designing scalable APIs and database architectures with Node.js, Express, MongoDB, and Prisma. Integrating robust payment gateways and communication services.',
    icon: <Server className="w-8 h-8 text-indigo-500" />
  },
  {
    title: 'E-commerce & CMS',
    description: 'Creating high-converting Shopify Plus stores and custom WordPress solutions. Optimizing technical SEO, load times, and headless architectures.',
    icon: <ShoppingCart className="w-8 h-8 text-pink-500" />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 dark:opacity-[0.02]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-2">My Services</h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mb-16"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-slate-50 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-700/50 group"
            >
              <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
