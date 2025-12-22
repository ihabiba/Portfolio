import { Briefcase, Calendar } from 'lucide-react';
import { experiences } from '../data';
import { useInView } from '../hooks/useInView';

export default function Experience() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="experience"
      className="py-20 bg-canvas-alt dark:bg-canvas-dark"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 id="experience-heading" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Experience & <span className="text-primary dark:text-secondary">Leadership</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 text-center mb-12">
            My professional journey and contributions
          </p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <article
                key={index}
                className="relative bg-white dark:bg-canvas-darkAlt rounded-xl p-6 
                           shadow-sm border border-gray-200 dark:border-gray-700
                           hover:shadow-md transition-shadow duration-300"
              >
                {/* Tyrian accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary dark:bg-secondary rounded-l-xl"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase size={18} className="text-primary dark:text-secondary" />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                    </div>
                    <p className="text-primary dark:text-secondary font-medium">
                      {exp.organization}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li
                      key={hIndex}
                      className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                    >
                      <span className="text-primary dark:text-secondary mt-1.5">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}