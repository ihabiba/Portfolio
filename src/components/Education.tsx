import { GraduationCap, Calendar, Award } from 'lucide-react';
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
          <h2 id="education-heading" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
            <span className="text-primary dark:text-secondary">Education</span>
          </h2>

          <div className="bg-canvas-alt dark:bg-canvas-darkAlt rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex flex-col md:flex-row gap-6 md:items-start">
              
              {/* Icon Box */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm inline-flex shrink-0">
                <GraduationCap size={32} className="text-primary dark:text-secondary" />
              </div>

              {/* Content */}
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    {education.institution}
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-3 py-1 rounded-full border border-gray-100 dark:border-gray-700 shrink-0">
                    <Calendar size={14} />
                    {education.period}
                  </div>
                </div>

                <p className="text-lg text-primary dark:text-secondary font-medium mb-4">
                  {education.degree}
                </p>

                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium mb-6">
                   <span className="px-3 py-1 rounded-md bg-tint/50 dark:bg-primary/20 text-primary dark:text-purple-200 text-sm border border-primary/10">
                     CGPA: {education.cgpa}
                   </span>
                </div>

                {/* NEW: Honors Section */}
                {education.honors && (
                  <div className="space-y-2 border-t border-gray-200 dark:border-gray-700 pt-4">
                    {education.honors.map((honor, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Award size={18} className="text-primary dark:text-secondary mt-0.5 shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                          {honor}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}