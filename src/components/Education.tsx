import { GraduationCap, Award, Calendar } from 'lucide-react';
import { education } from '../data';
import { useInView } from '../hooks/useInView';

export default function Education() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="education"
      className="py-20 bg-white dark:bg-canvas-dark"
      aria-labelledby="education-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 id="education-heading" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-4">
            <span className="text-primary dark:text-secondary">Education</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 text-center mb-12">
            My academic background
          </p>

          <div className="max-w-2xl mx-auto">
            <article className="relative bg-gradient-to-r from-gray-50 to-white 
                             dark:from-gray-800 dark:to-gray-800/50 
                             rounded-xl p-8 shadow-sm border border-gray-200 
                             dark:border-gray-700">
              {/* Decorative corner - Tyrian Tint */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 
                           dark:bg-secondary/10 rounded-bl-full"></div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary dark:bg-secondary rounded-xl">
                  <GraduationCap className="text-white" size={32} />
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {education.institution}
                  </h3>
                  <p className="text-lg text-primary dark:text-secondary font-medium mb-3">
                    {education.degree}
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                      <Calendar size={18} />
                      <span>{education.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award size={18} className="text-primary dark:text-secondary" />
                      <span className="text-gray-700 dark:text-gray-200 font-semibold">
                        CGPA: {education.cgpa}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}