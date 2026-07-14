import { Briefcase, MapPin } from 'lucide-react';
import { internships } from '../data';
import { useInView } from '../hooks/useInView';

export default function Internships() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="experience"
      className="py-20 bg-white dark:bg-canvas-dark"
      aria-labelledby="internships-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 id="internships-heading" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-2">
            Professional <span className="text-primary dark:text-secondary">Experience</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 text-center mb-12">
            Currently running two concurrent engineering internships
          </p>

          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent hidden sm:block" aria-hidden="true" />

            <div className="space-y-8">
              {internships.map((job, index) => (
                <article key={index} className="relative flex gap-6">
                  {/* Timeline dot */}
                  <div className="hidden sm:flex flex-none w-12 h-12 rounded-full bg-primary dark:bg-primary items-center justify-center z-10 shadow-lg shadow-primary/30 mt-1">
                    <Briefcase size={20} className="text-white" />
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-white dark:bg-canvas-darkAlt rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {job.title}
                        </h3>
                        <p className="text-primary dark:text-secondary font-semibold text-base">
                          {job.company}
                        </p>
                      </div>
                      <div className="flex flex-col gap-1 items-start sm:items-end flex-none">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          Present
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{job.period}</span>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <MapPin size={14} />
                      {job.location}
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-4">
                      {job.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          <span className="text-primary dark:text-secondary mt-1.5 flex-none">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag, i) => (
                        <span key={i} className="skill-chip text-xs py-1 px-2.5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
