import { skills } from '../data';
import { useInView } from '../hooks/useInView';
import { 
  Brain,
  Database, 
  Server, 
  Layout, 
  HardDrive, 
  Cloud,
  Cpu,
  Wrench 
} from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  'AI & Machine Learning': <Brain className="text-primary dark:text-secondary" size={24} />,
  'Data Engineering & Analytics': <Database className="text-primary dark:text-secondary" size={24} />,
  'Backend & API Development': <Server className="text-primary dark:text-secondary" size={24} />,
  'Frontend Development': <Layout className="text-primary dark:text-secondary" size={24} />,
  'Databases': <HardDrive className="text-primary dark:text-secondary" size={24} />,
  'Tools, Cloud & Infrastructure': <Cloud className="text-primary dark:text-secondary" size={24} />,
  'IoT & Embedded Systems': <Cpu className="text-primary dark:text-secondary" size={24} />,
};

export default function Skills() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-canvas-dark"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => {
              const isLastOdd = skills.length % 2 !== 0 && index === skills.length - 1;
              return (
                <div
                  key={index}
                  className={`project-card p-6 hover:shadow-xl transition-shadow duration-300 ${
                    isLastOdd ? 'lg:col-span-2 lg:max-w-[calc(50%-12px)] lg:mx-auto' : ''
                  }`}
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