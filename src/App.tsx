import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Terminal from './components/Terminal';

function App() {
  useEffect(() => {
    document.title = 'Jordy Montalvo — Senior Software Engineer & E-Commerce Architect';
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#05080e] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <Terminal />
    </div>
  );
}

export default App;