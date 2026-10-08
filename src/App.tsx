import React, { useEffect, Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
const Terminal = lazy(() => import('./components/Terminal'));

function App() {
  useEffect(() => {
    document.title = 'Jordy Montalvo — Senior Software Engineer & E-Commerce Architect';
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#05080e] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-32 flex items-center justify-center text-slate-500">Cargando sección...</div>}>
          <About />
          <Services />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <Suspense fallback={null}>
        <Terminal />
      </Suspense>
    </div>
  );
}

export default App;