import { languages } from '../data';
import { useInView } from '../hooks/useInView';

export default function Languages() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="languages"
      className="py-20 bg-white dark:bg-canvas-dark"
      aria-labelledby="languages-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 id="languages-heading" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-4">
            <span className="text-primary dark:text-secondary">Languages</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 text-center mb-10">
            Languages I speak and my proficiency
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="w-full max-w-xs bg-gray-50 dark:bg-canvas-darkAlt rounded-xl 
                           shadow-sm border border-gray-200 dark:border-gray-700 
                           p-6 flex flex-col items-center hover:shadow-md 
                           hover:border-primary/20 dark:hover:border-secondary/20 
                           transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {lang.name}
                </h3>
                <span className="text-primary dark:text-secondary text-base font-medium mb-1">
                  {lang.proficiency}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}