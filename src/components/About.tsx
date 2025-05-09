import React from 'react';
import { Code, Briefcase, GraduationCap, Globe, Coffee } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-2">About Me</h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mb-10"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-xl bg-slate-200 dark:bg-slate-800 overflow-hidden shadow-xl">
                {/* Placeholder for profile image */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-300 to-slate-100 dark:from-slate-700 dark:to-slate-900">
                  <span className="text-6xl text-slate-500 dark:text-slate-400">[Photo]</span>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                <Code className="w-12 h-12 text-white" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                Who am I?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                I'm a passionate software engineer with a keen eye for creating elegant, efficient, and user-friendly 
                solutions. With 2 years of experience in the industry, I've worked across the full stack development 
                lifecycle, from concept to deployment.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                My journey in technology began with [your background story]. Today, I specialize in 
                [your specializations] and am constantly exploring new technologies and methodologies 
                to enhance my skill set.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Briefcase className="w-5 h-5 text-teal-500 mr-2" />
                  <span className="text-slate-700 dark:text-slate-300">2 Years Experience</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="w-5 h-5 text-teal-500 mr-2" />
                  <span className="text-slate-700 dark:text-slate-300">UPC</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-teal-500 mr-2" />
                  <span className="text-slate-700 dark:text-slate-300">Lima, Peru</span>
                </div>
                <div className="flex items-center">
                  <Coffee className="w-5 h-5 text-teal-500 mr-2" />
                  <span className="text-slate-700 dark:text-slate-300">videogames, football, coding</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;