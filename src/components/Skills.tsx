import { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Brain, Database, Server, Layout, Cloud, Wrench, Cpu } from 'lucide-react';
import { skills } from '../data';
import { useInView } from '../hooks/useInView';

const categoryIcons: Record<string, React.ReactNode> = {
  'AI & Machine Learning':        <Brain size={22} />,
  'Data Engineering & Analytics': <Database size={22} />,
  'Backend & API Development':    <Server size={22} />,
  'Frontend Development':         <Layout size={22} />,
  'Databases & Cloud':            <Cloud size={22} />,
  'Tools & DevOps':               <Wrench size={22} />,
  'IoT & Embedded Systems':       <Cpu size={22} />,
};

const GAP = 24;

export default function Skills() {
  const { ref, isVisible } = useInView();
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isPaused = useRef(false);
  const currentRef = useRef(0);
  currentRef.current = currentIndex;

  const getCardWidth = useCallback(() => {
    const card = cardRef.current;
    return card ? card.offsetWidth + GAP : 0;
  }, []);

  const slideTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = (index + skills.length) % skills.length;
    track.style.transform = `translateX(-${clamped * getCardWidth()}px)`;
    setCurrentIndex(clamped);
    currentRef.current = clamped;
  }, [getCardWidth]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused.current) slideTo(currentRef.current + 1);
    }, 3500);
    return () => clearInterval(timer);
  }, [slideTo]);

  useEffect(() => {
    const onResize = () => slideTo(currentRef.current);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [slideTo]);

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
          <h2 id="skills-heading" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-2">
            Technical <span className="text-primary dark:text-secondary">Skills</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 text-center mb-10">
            Technologies and tools I work with
          </p>

          {/* Carousel */}
          <div
            className="relative"
            onMouseEnter={() => { isPaused.current = true; }}
            onMouseLeave={() => { isPaused.current = false; }}
          >
            <button
              onClick={() => slideTo(currentIndex - 1)}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 hidden sm:flex items-center justify-center rounded-full bg-white dark:bg-canvas-darkAlt border border-gray-200 dark:border-gray-700 shadow-md text-primary dark:text-secondary hover:bg-tint dark:hover:bg-gray-700 transition-all duration-200"
              aria-label="Previous skill group"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => slideTo(currentIndex + 1)}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 hidden sm:flex items-center justify-center rounded-full bg-white dark:bg-canvas-darkAlt border border-gray-200 dark:border-gray-700 shadow-md text-primary dark:text-secondary hover:bg-tint dark:hover:bg-gray-700 transition-all duration-200"
              aria-label="Next skill group"
            >
              <ChevronRight size={20} />
            </button>

            <div className="carousel-wrapper">
              <div ref={trackRef} className="carousel-track" style={{ gap: `${GAP}px` }}>
                {skills.map((group, index) => (
                  <article
                    key={index}
                    ref={index === 0 ? (cardRef as React.RefObject<HTMLElement>) : undefined}
                    className="carousel-card project-card p-6 flex flex-col"
                  >
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-100 dark:border-gray-700">
                      <div className="w-10 h-10 rounded-xl bg-tint dark:bg-gray-800 flex items-center justify-center text-primary dark:text-secondary flex-none">
                        {categoryIcons[group.category] ?? <Wrench size={22} />}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                        {group.category}
                      </h3>
                    </div>

                    {/* Chips */}
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item, i) => (
                        <span key={i} className="skill-chip text-xs py-1 px-2.5">
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {skills.map((_, i) => (
              <button
                key={i}
                onClick={() => slideTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? 'w-8 bg-primary dark:bg-secondary'
                    : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-secondary'
                }`}
                aria-label={`Go to skill group ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
