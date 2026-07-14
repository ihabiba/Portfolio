import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { heroData } from '../data';

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleVisible(false);
      setTimeout(() => {
        setRoleIdx(i => (i + 1) % heroData.roles.length);
        setRoleVisible(true);
      }, 350);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center hero-gradient pt-16 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Ambient effects */}
      <div className="hero-grid-overlay" aria-hidden="true" />
      <div className="hero-orb hero-orb--violet" aria-hidden="true" />
      <div className="hero-orb hero-orb--rose" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-28">
        <div className="animate-fade-in flex flex-col lg:flex-row items-center gap-12">

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur-2xl opacity-40 group-hover:opacity-60 animate-pulse transition-opacity duration-500" />
              <div className="absolute -inset-2 bg-gradient-to-br from-primary via-purple-400 to-secondary rounded-full opacity-30 animate-spin-slow" />
              <div className="absolute -inset-1 bg-gradient-to-tr from-primary/80 to-secondary/80 rounded-full" />
              <div className="absolute -inset-0.5 bg-white dark:bg-gray-900 rounded-full" />
              <img
                src={heroData.profileImage}
                alt={heroData.name}
                className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Availability pill */}
            <div className="flex justify-center lg:justify-start mb-5">
              <span className="availability-pill">
                <span className="availability-dot" />
                Open to opportunities
              </span>
            </div>

            {/* Name with gradient */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
              <span className="text-primary dark:text-secondary font-medium text-2xl sm:text-3xl md:text-4xl tracking-wide block mb-1">
                Hello, I'm
              </span>
              <span className="gradient-name">{heroData.name}</span>
            </h1>

            {/* Typewriter role */}
            <h2
              className={`text-xl sm:text-2xl font-semibold mb-5 transition-opacity duration-300 ${
                roleVisible ? 'opacity-100' : 'opacity-0'
              } text-primary dark:text-secondary`}
              aria-live="polite"
            >
              {heroData.roles[roleIdx]}
            </h2>

            {/* Location */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-500 dark:text-gray-400 mb-6">
              <MapPin size={16} className="text-primary dark:text-secondary" />
              <span className="text-sm">{heroData.location}</span>
            </div>

            {/* Pitch */}
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              {heroData.pitch}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <a
                href={heroData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                aria-label="View GitHub profile"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href={heroData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                aria-label="View LinkedIn profile"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href={`mailto:${heroData.email}`}
                className="btn-secondary"
                aria-label="Send email"
              >
                <Mail size={18} />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — anchored to bottom of section */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-primary dark:border-secondary rounded-full flex justify-center opacity-60">
          <div className="w-1 h-3 bg-primary dark:bg-secondary rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}
