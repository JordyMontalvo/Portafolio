import React from 'react';
import { Code, Briefcase, GraduationCap, Globe, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-2">About Me</h2>
            <div className="w-16 h-1 bg-teal-500 mx-auto mb-10"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <div className="aspect-square rounded-xl bg-slate-200 dark:bg-slate-800 overflow-hidden shadow-xl">
                <img 
                  src="/avatar_pro.png" 
                  alt="Jordy Montalvo" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
              <motion.div 
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="absolute -bottom-5 -right-5 w-24 h-24 bg-teal-500 rounded-xl flex items-center justify-center shadow-lg"
              >
                <Code className="w-12 h-12 text-white" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            >
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                Who am I?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                I'm a passionate software engineer with a keen eye for creating elegant, efficient, and user-friendly 
                solutions. With over 4 years of experience since 2020, I've worked across the full stack development 
                lifecycle, specializing in enterprise-grade E-commerce architecture.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                My journey in technology began developing simple corporate sites. Today, I specialize in 
                Shopify Plus, Liquid, and high-performance WordPress systems, constantly pushing the limits of
                Core Web Vitals and conversion rates.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center hover:text-teal-500 transition-colors">
                  <Briefcase className="w-5 h-5 text-teal-500 mr-2" />
                  <span className="text-slate-700 dark:text-slate-300">4+ Years Experience</span>
                </div>
                <div className="flex items-center hover:text-teal-500 transition-colors">
                  <GraduationCap className="w-5 h-5 text-teal-500 mr-2" />
                  <span className="text-slate-700 dark:text-slate-300">UPC</span>
                </div>
                <div className="flex items-center hover:text-teal-500 transition-colors">
                  <Globe className="w-5 h-5 text-teal-500 mr-2" />
                  <span className="text-slate-700 dark:text-slate-300">Lima, Peru</span>
                </div>
                <div className="flex items-center hover:text-teal-500 transition-colors">
                  <Coffee className="w-5 h-5 text-teal-500 mr-2" />
                  <span className="text-slate-700 dark:text-slate-300">videogames, football, coding</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;