import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { education } from '../data';
import { useInView } from '../hooks/useInView';

export default function Education() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="education"
      className="py-20 bg-gray-50 dark:bg-canvas-dark"
      aria-labelledby="education-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 id="education-heading" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
            <span className="text-primary dark:text-secondary">Education</span>
          </h2>

          {/* CARD CONTAINER - PREMIUM GRADIENT LOOK */}
          <div className="relative group">
            {/* Glow Effect behind the card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 
                          shadow-xl border border-white/20 dark:border-gray-700
                          hover:transform hover:-translate-y-1 transition-all duration-300">
              
              <div className="flex flex-col md:flex-row gap-8 items-start">
                
                {/* Icon Box with Gradient */}
                <div className="bg-gradient-to-br from-primary/10 to-purple-100 dark:from-gray-700 dark:to-gray-600 p-5 rounded-2xl shadow-inner shrink-0 hidden md:block">
                  <GraduationCap size={40} className="text-primary dark:text-secondary" />
                </div>

                {/* Mobile Icon (Smaller) */}
                <div className="md:hidden flex items-center gap-4 mb-2">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <GraduationCap size={28} className="text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-primary bg-primary/5 px-3 py-1 rounded-full">
                    {education.period}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-grow space-y-4">
                  
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                        {education.institution}
                      </h3>
                      <p className="text-lg md:text-xl text-primary dark:text-secondary font-medium mt-1">
                        {education.degree}
                      </p>
                    </div>
                    
                    {/* Desktop Date Badge */}
                    <div className="hidden md:flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700/50 px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-600 shrink-0">
                      <Calendar size={14} />
                      {education.period}
                    </div>
                  </div>

                  {/* CGPA Badge */}
                  <div className="inline-block">
                     <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-primary dark:text-purple-200 font-bold border border-purple-100 dark:border-purple-800/30">
                       <Award size={16} />
                       CGPA: {education.cgpa}
                     </span>
                  </div>

                  {/* Honors & Coursework Section */}
                  {education.honors && (
                    <div className="pt-6 mt-2 border-t border-gray-100 dark:border-gray-700 space-y-4">
                      {education.honors.map((honor, index) => {
                        // Check if it's the "Coursework" line to use a Book icon
                        const isCoursework = honor.startsWith('Relevant Coursework');
                        return (
                          <div key={index} className="flex items-start gap-3 group/item">
                            {isCoursework ? (
                              <BookOpen size={20} className="text-gray-400 dark:text-gray-500 mt-1 shrink-0 group-hover/item:text-primary transition-colors" />
                            ) : (
                              <Award size={20} className="text-yellow-500 mt-1 shrink-0" />
                            )}
                            <span className={`text-sm md:text-base ${isCoursework ? 'text-gray-600 dark:text-gray-400 leading-relaxed' : 'text-gray-900 dark:text-white font-medium'}`}>
                              {honor}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}