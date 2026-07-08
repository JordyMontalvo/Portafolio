import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

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

  return (
    <section 
      id="home" 
      className="h-screen relative flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-teal-500/30 to-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-orange-500/20 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-teal-600 dark:text-teal-400 font-semibold mb-4 animate-fadeIn">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-white mb-4 animate-fadeIn">
            Jordy Montalvo 
          </h1>
          <div className="h-8 md:h-12">
            <h2 className="text-2xl md:text-4xl font-medium text-slate-600 dark:text-slate-300 animate-fadeIn inline-block">
              {text}
              <span className="animate-blink">|</span>
            </h2>
          </div>
          
          <p className="mt-6 text-slate-600 dark:text-slate-400 text-lg animate-fadeIn max-w-2xl mx-auto">
            Senior Specialist in enterprise web architectures. I transform complex Figma designs into high-performance Shopify Plus stores and WordPress platforms, maximizing speed and conversion rates.
          </p>
          
          <div className="mt-8 flex justify-center space-x-4 animate-fadeIn">
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
          </div>
          
          <div className="mt-10 flex justify-center space-x-6 animate-fadeIn">
            <a href="https://github.com/JordyMontalvo" className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition duration-300">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/jordy-joseph-montalvo-/" className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition duration-300">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="" className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition duration-300">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
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
      </div>
    </section>
  );
};

export default Hero;