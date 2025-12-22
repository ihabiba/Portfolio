import { Award, ExternalLink } from 'lucide-react';
import { certificates } from '../data';
import { useInView } from '../hooks/useInView';

export default function Certificates() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="certificates"
      className="py-20 bg-canvas-alt dark:bg-canvas-dark"
      aria-labelledby="certificates-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 id="certificates-heading" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-4">
            <span className="text-primary dark:text-secondary">Certificates</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 text-center mb-12">
            Professional certifications and achievements
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <article
                key={index}
                className="bg-white dark:bg-canvas-darkAlt rounded-xl p-6 
                           shadow-sm border border-gray-200 dark:border-gray-700
                           hover:shadow-md hover:border-primary/30 dark:hover:border-secondary/30
                           transition-all duration-300 group flex flex-col h-full"
              >
                <div className="flex items-start gap-4 mb-4">
                  {/* Icon container */}
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg 
                                group-hover:bg-primary transition-all duration-300 shrink-0">
                    <Award 
                      size={24} 
                      className="text-primary dark:text-secondary 
                               group-hover:text-white transition-colors" 
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {cert.issuer}
                    </p>
                    <p className="text-primary dark:text-secondary text-sm font-medium mt-1">
                      {cert.year}
                    </p>
                  </div>
                </div>

                {/* ADDED: Skill Chips Loop */}
                <div className="flex flex-wrap gap-2 mt-auto mb-4">
                  {cert.skills && cert.skills.map((skill, sIndex) => (
                    <span 
                      key={sIndex} 
                      className="px-2 py-1 text-xs font-medium rounded-md bg-tint/50 dark:bg-gray-800 text-primary dark:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium 
                           text-primary dark:text-secondary 
                           hover:text-primary-hover dark:hover:text-white
                           transition-colors mt-2 pt-4 border-t border-gray-100 dark:border-gray-700 w-full"
                  aria-label={`View ${cert.title} certificate`}
                >
                  View Certificate
                  <ExternalLink size={14} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}