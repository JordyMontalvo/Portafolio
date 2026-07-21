import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = 'Software Engineer';
  const typingSpeed = 150;

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section 
      id="home" 
      className="h-screen relative flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-teal-500/30 to-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-orange-500/20 to-pink-500/10 rounded-full blur-3xl"
        />
      </div>
      
      <motion.div 
        className="container mx-auto px-4 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.p variants={itemVariants} className="text-teal-600 dark:text-teal-400 font-semibold mb-4">Hello, I'm</motion.p>
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-white mb-4">
            Jordy Montalvo 
          </motion.h1>
          <motion.div variants={itemVariants} className="h-8 md:h-12">
            <h2 className="text-2xl md:text-4xl font-medium text-slate-600 dark:text-slate-300 inline-block">
              {text}
              <motion.span 
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >|</motion.span>
            </h2>
          </motion.div>
          
          <motion.p variants={itemVariants} className="mt-6 text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Senior Specialist in enterprise web architectures. I transform complex Figma designs into high-performance Shopify Plus stores and WordPress platforms, maximizing speed and conversion rates.
          </motion.p>
          
          <motion.div variants={itemVariants} className="mt-8 flex justify-center space-x-4">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-300 shadow-lg hover:shadow-xl font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              Get In Touch
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition duration-300 shadow-lg hover:shadow-xl font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              View Projects
            </a>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mt-10 flex justify-center space-x-6">
            <motion.a whileHover={{ scale: 1.2, rotate: 5 }} href="https://github.com/JordyMontalvo" className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition duration-300">
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2, rotate: -5 }} href="https://www.linkedin.com/in/jordy-joseph-montalvo-/" className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition duration-300">
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2, rotate: 5 }} href="" className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition duration-300">
              <Mail className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1.5, duration: 1 }, y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <a 
          href="#about" 
          className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition duration-300"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({
              behavior: 'smooth',
            });
          }}
        >
          <ArrowDown className="h-6 w-6" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;