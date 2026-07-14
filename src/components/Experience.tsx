import { Users, Calendar } from 'lucide-react';
import { experiences } from '../data';
import { useInView } from '../hooks/useInView';

export default function Experience() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="leadership"
      className="py-20 bg-canvas-alt dark:bg-canvas-dark"
      aria-labelledby="leadership-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 id="leadership-heading" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-2">
            Leadership & <span className="text-primary dark:text-secondary">Extracurriculars</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 text-center mb-12">
            Community involvement and campus contributions
          </p>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <article
                key={index}
                className="relative bg-white dark:bg-canvas-darkAlt rounded-xl p-6
                           shadow-sm border border-gray-200 dark:border-gray-700
                           hover:shadow-md transition-shadow duration-300"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary rounded-l-xl" aria-hidden="true" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Users size={16} className="text-primary dark:text-secondary flex-none" />
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                    </div>
                    <p className="text-primary dark:text-secondary font-medium text-sm">
                      {exp.organization}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-sm flex-none">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-1.5">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-2.5 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      <span className="text-primary dark:text-secondary mt-1.5 flex-none">▸</span>
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
