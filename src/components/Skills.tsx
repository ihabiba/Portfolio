import { skills } from '../data';
import { useInView } from '../hooks/useInView';
import { 
  Database, 
  Server, 
  Layout, 
  HardDrive, 
  Wrench 
} from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  'Data / ML': <Database className="text-primary dark:text-secondary" size={24} />,
  'Backend': <Server className="text-primary dark:text-secondary" size={24} />,
  'Frontend': <Layout className="text-primary dark:text-secondary" size={24} />,
  'Databases': <HardDrive className="text-primary dark:text-secondary" size={24} />,
  'Tools': <Wrench className="text-primary dark:text-secondary" size={24} />,
};

export default function Skills() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-canvas-dark"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 id="skills-heading" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Technical <span className="text-primary dark:text-secondary">Skills</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 text-center mb-12">
            Technologies and tools I work with
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => {
              // For 5 cards: center the last 2 in the second row
              if (skills.length === 5 && index === 3) {
                return (
                  <div key="skills-row-2" className="col-span-full flex flex-col md:flex-row justify-center gap-6">
                    <div className="project-card w-full md:max-w-[calc(50%-12px)] lg:max-w-[calc(33.333%-16px)] p-6">
                      <div className="flex items-center gap-3 mb-4">
                        {categoryIcons[skills[3].category] || (
                          <Wrench className="text-primary dark:text-secondary" size={24} />
                        )}
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {skills[3].category}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skills[3].items.map((skill, sIndex) => (
                          <span key={sIndex} className="skill-chip">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="project-card w-full md:max-w-[calc(50%-12px)] lg:max-w-[calc(33.333%-16px)] p-6">
                      <div className="flex items-center gap-3 mb-4">
                        {categoryIcons[skills[4].category] || (
                          <Wrench className="text-primary dark:text-secondary" size={24} />
                        )}
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {skills[4].category}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skills[4].items.map((skill, sIndex) => (
                          <span key={sIndex} className="skill-chip">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              if (skills.length === 5 && (index === 4)) {
                return null;
              }
              return (
                <div
                  key={index}
                  className="project-card p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {categoryIcons[skillGroup.category] || (
                      <Wrench className="text-primary dark:text-secondary" size={24} />
                    )}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {skillGroup.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, sIndex) => (
                      <span key={sIndex} className="skill-chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}