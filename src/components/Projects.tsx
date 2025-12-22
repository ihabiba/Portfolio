import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data';
import { useInView } from '../hooks/useInView';

export default function Projects() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="projects"
      className="py-20 bg-canvas-alt dark:bg-canvas-dark"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Featured <span className="text-primary dark:text-secondary">Projects</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 text-center mb-12">
            A selection of my recent work and personal projects
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <article
                key={index}
                className="project-card p-6 flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-4 flex-grow">
                  {project.highlights.map((highlight, hIndex) => (
                    <li
                      key={hIndex}
                      className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                    >
                      <span className="text-primary dark:text-secondary mt-1">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className="skill-chip"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium 
                             text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 
                             rounded-lg hover:bg-primary hover:text-white 
                             transition-all duration-200 border border-gray-200 dark:border-gray-700"
                    aria-label={`View ${project.title} repository on GitHub`}
                  >
                    <Github size={16} />
                    Repo
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium 
                               text-white bg-primary rounded-lg hover:bg-primary-hover 
                               transition-all duration-200 shadow-sm"
                      aria-label={`View ${project.title} demo`}
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Explore more on GitHub CTA */}
          <div className="flex justify-center mt-12">
            <a
              href="https://github.com/ihabiba"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base px-8 py-3"
              aria-label="Explore more projects on GitHub"
            >
              See more of my work on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}