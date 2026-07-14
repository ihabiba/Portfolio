import { useRef, useState, useEffect, useCallback } from 'react';
import { Award, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { certificates } from '../data';
import { useInView } from '../hooks/useInView';

const GAP = 20;

export default function Certificates() {
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
    const clamped = (index + certificates.length) % certificates.length;
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
      id="certificates"
      className="py-20 bg-canvas-alt dark:bg-canvas-dark"
      aria-labelledby="certificates-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 id="certificates-heading" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-2">
            <span className="text-primary dark:text-secondary">Certificates</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 text-center mb-10">
            Professional certifications and achievements
          </p>

          {/* Carousel */}
          <div
            className="relative"
            onMouseEnter={() => { isPaused.current = true; }}
            onMouseLeave={() => { isPaused.current = false; }}
          >
            {/* Left arrow */}
            <button
              onClick={() => slideTo(currentIndex - 1)}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 hidden sm:flex items-center justify-center rounded-full bg-white dark:bg-canvas-darkAlt border border-gray-200 dark:border-gray-700 shadow-md text-primary dark:text-secondary hover:bg-tint dark:hover:bg-gray-700 transition-all duration-200"
              aria-label="Previous certificate"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Right arrow */}
            <button
              onClick={() => slideTo(currentIndex + 1)}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 hidden sm:flex items-center justify-center rounded-full bg-white dark:bg-canvas-darkAlt border border-gray-200 dark:border-gray-700 shadow-md text-primary dark:text-secondary hover:bg-tint dark:hover:bg-gray-700 transition-all duration-200"
              aria-label="Next certificate"
            >
              <ChevronRight size={20} />
            </button>

            <div className="carousel-wrapper">
              <div ref={trackRef} className="carousel-track" style={{ gap: `${GAP}px` }}>
                {certificates.map((cert, index) => (
                  <article
                    key={index}
                    ref={index === 0 ? (cardRef as React.RefObject<HTMLElement>) : undefined}
                    className="carousel-card bg-white dark:bg-canvas-darkAlt rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-primary/30 dark:hover:border-secondary/30 transition-all duration-300 group flex flex-col"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2.5 bg-tint dark:bg-gray-800 rounded-xl group-hover:bg-primary transition-all duration-300 shrink-0">
                        <Award size={22} className="text-primary dark:text-secondary group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1 leading-snug">
                          {cert.title}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{cert.issuer}</p>
                        <p className="text-primary dark:text-secondary text-sm font-semibold mt-0.5">{cert.year}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-4 flex-grow">
                      {cert.skills.map((skill, i) => (
                        <span key={i} className="px-2 py-1 text-xs font-medium rounded-md bg-tint/60 dark:bg-gray-800 text-primary dark:text-gray-300">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary dark:text-secondary hover:text-primary-hover dark:hover:text-white transition-colors pt-3 border-t border-gray-100 dark:border-gray-700 mt-auto"
                    >
                      View Certificate
                      <ExternalLink size={14} />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6 flex-wrap">
            {certificates.map((_, i) => (
              <button
                key={i}
                onClick={() => slideTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? 'w-8 bg-primary dark:bg-secondary'
                    : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-secondary'
                }`}
                aria-label={`Go to certificate ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
