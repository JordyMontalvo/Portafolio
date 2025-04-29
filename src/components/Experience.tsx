import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      role: "Senior Software Engineer",
      company: "Tech Company ABC",
      location: "San Francisco, CA",
      period: "2021 - Present",
      description: [
        "Led the development of a microservices architecture that improved system reliability by 35%",
        "Mentored junior developers and conducted code reviews to maintain code quality",
        "Implemented automated CI/CD pipelines that reduced deployment time by 40%"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes"]
    },
    {
      id: 2,
      role: "Software Developer",
      company: "Startup XYZ",
      location: "Austin, TX",
      period: "2018 - 2021",
      description: [
        "Developed responsive web applications using modern JavaScript frameworks",
        "Designed and implemented RESTful APIs for mobile and web clients",
        "Contributed to open-source projects and maintained documentation"
      ],
      technologies: ["JavaScript", "React", "Express", "MongoDB", "Git"]
    },
    {
      id: 3,
      role: "Junior Web Developer",
      company: "Digital Agency",
      location: "Chicago, IL",
      period: "2016 - 2018",
      description: [
        "Built and maintained client websites using modern web technologies",
        "Collaborated with designers to implement responsive UI components",
        "Optimized website performance through code refactoring and best practices"
      ],
      technologies: ["HTML/CSS", "JavaScript", "PHP", "WordPress"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-2">Work Experience</h2>
        <div className="w-16 h-1 bg-teal-500 mx-auto mb-10"></div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-slate-300 dark:bg-slate-600"></div>
            
            {/* Experience items */}
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`relative z-10 mb-12 md:mb-20 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto' : 'md:pl-12'
                } md:w-1/2`}
              >
                {/* Timeline dot */}
                <div className="absolute top-0 md:top-1/2 left-0 md:left-auto md:transform md:-translate-y-1/2 w-4 h-4 rounded-full bg-teal-500 shadow-lg hidden md:block" style={{ 
                  [index % 2 === 0 ? 'right' : 'left']: '-8px' 
                }}></div>
                
                {/* Experience card */}
                <div className="ml-8 md:ml-0 bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="md:flex md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">{exp.role}</h3>
                    <div className="inline-flex items-center justify-center px-3 py-1 mt-2 md:mt-0 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-400 text-sm font-medium rounded-full">
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center text-slate-600 dark:text-slate-400 mb-1">
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center text-slate-500 dark:text-slate-500 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <ul className="list-disc list-inside mb-4 text-slate-600 dark:text-slate-300 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;