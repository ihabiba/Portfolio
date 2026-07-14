import { useRef, useState, useEffect } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data';
import { useInView } from '../hooks/useInView';

export default function Projects() {
  const { ref, isVisible } = useInView();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const GAP = 24;

  const getCardWidth = () => {
    const slider = sliderRef.current;
    if (!slider) return 0;
    const card = slider.children[0] as HTMLElement;
    return card ? card.offsetWidth + GAP : 0;
  };

  const scrollToIndex = (index: number) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const clamped = Math.max(0, Math.min(projects.length - 1, index));
    slider.scrollTo({ left: clamped * getCardWidth(), behavior: 'smooth' });
    setCurrentIndex(clamped);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    const onScroll = () => {
      const cardWidth = getCardWidth();
      if (cardWidth > 0) {
        setCurrentIndex(Math.round(slider.scrollLeft / cardWidth));
      }
    };
    slider.addEventListener('scroll', onScroll, { passive: true });
    return () => slider.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="projects"
      className="py-20 bg-canvas-alt dark:bg-canvas-dark"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-2">
            Featured <span className="text-primary dark:text-secondary">Projects</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 text-center mb-10">
            A selection of my recent work
          </p>

          {/* Slider wrapper */}
          <div className="relative">
            {/* Left arrow */}
            <button
              onClick={() => scrollToIndex(currentIndex - 1)}
              disabled={currentIndex === 0}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-canvas-darkAlt border border-gray-200 dark:border-gray-700 shadow-md text-primary dark:text-secondary disabled:opacity-30 hover:bg-tint dark:hover:bg-gray-700 transition-all duration-200 hidden sm:flex"
              aria-label="Previous project"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Right arrow */}
            <button
              onClick={() => scrollToIndex(currentIndex + 1)}
              disabled={currentIndex === projects.length - 1}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-canvas-darkAlt border border-gray-200 dark:border-gray-700 shadow-md text-primary dark:text-secondary disabled:opacity-30 hover:bg-tint dark:hover:bg-gray-700 transition-all duration-200 hidden sm:flex"
              aria-label="Next project"
            >
              <ChevronRight size={20} />
            </button>

            {/* Scrollable track */}
            <div
              ref={sliderRef}
              className="slider-track flex gap-6 overflow-x-auto pb-4"
            >
              {projects.map((project, index) => (
                <article
                  key={index}
                  className="slider-card project-card p-6 flex flex-col flex-none snap-center"
                >
                  {/* Card number */}
                  <span className="text-xs font-bold text-gray-300 dark:text-gray-600 mb-3 tracking-widest">
                    {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4 flex-grow">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        <span className="text-primary dark:text-secondary mt-1.5 flex-none">▸</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech, tIndex) => (
                      <span key={tIndex} className="skill-chip text-xs py-1 px-2.5">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-gray-100 dark:border-gray-700">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium
                                 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800
                                 rounded-lg hover:bg-primary hover:text-white
                                 transition-all duration-200 border border-gray-200 dark:border-gray-700"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github size={14} />
                        Repo
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium
                                 text-white bg-primary rounded-lg hover:bg-primary-hover
                                 transition-all duration-200 shadow-sm"
                        aria-label={`View ${project.title} demo`}
                      >
                        <ExternalLink size={14} />
                        {project.demoUrl2 ? 'Demo 1' : 'Demo'}
                      </a>
                    )}
                    {project.demoUrl2 && (
                      <a
                        href={project.demoUrl2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium
                                 text-white bg-primary rounded-lg hover:bg-primary-hover
                                 transition-all duration-200 shadow-sm"
                      >
                        <ExternalLink size={14} />
                        Demo 2
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? 'w-8 bg-primary dark:bg-secondary'
                    : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-secondary dark:hover:bg-secondary'
                }`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="flex justify-center mt-8">
            <a
              href="https://github.com/ihabiba"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm px-6 py-2.5"
            >
              <Github size={16} />
              More projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
