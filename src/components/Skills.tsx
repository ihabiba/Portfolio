import { skills } from '../data';
import { useInView } from '../hooks/useInView';

// Split skills into two rows for the opposite-direction marquees
const row1Categories = skills.slice(0, 4);  // AI/ML, Data, Backend, Frontend
const row2Categories = skills.slice(4);     // DB/Cloud, DevOps, IoT

// Flatten all chips from a set of categories into one array
const flatChips = (cats: typeof skills) =>
  cats.flatMap(cat =>
    cat.items.map(item => ({ category: cat.category, item }))
  );

const row1Chips = flatChips(row1Categories);
const row2Chips = flatChips(row2Categories);

export default function Skills() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-canvas-dark overflow-hidden"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 id="skills-heading" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-2">
            Technical <span className="text-primary dark:text-secondary">Skills</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 text-center mb-12">
            Technologies and tools I work with
          </p>
        </div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="marquee-wrapper mb-4">
        <div className="marquee-track marquee-track--left">
          {[...row1Chips, ...row1Chips].map(({ category, item }, i) => (
            <div
              key={i}
              className="flex-none flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-canvas-darkAlt border border-gray-200 dark:border-gray-700 shadow-sm whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-primary dark:bg-secondary flex-none" aria-hidden="true" />
              <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">{category.split(' ')[0]}</span>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="marquee-wrapper">
        <div className="marquee-track marquee-track--right">
          {[...row2Chips, ...row2Chips].map(({ category, item }, i) => (
            <div
              key={i}
              className="flex-none flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-canvas-darkAlt border border-gray-200 dark:border-gray-700 shadow-sm whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-secondary dark:bg-secondary flex-none" aria-hidden="true" />
              <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">{category.split(' ')[0]}</span>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
