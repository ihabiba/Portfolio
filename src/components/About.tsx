import { aboutData } from '../data';
import { useInView } from '../hooks/useInView';

export default function About() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-canvas-dark"
      aria-labelledby="about-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-4">
            About <span className="text-primary dark:text-secondary">Me</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 text-center mb-12">
            Get to know my background and interests
          </p>

          <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            {aboutData.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg text-justify">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}