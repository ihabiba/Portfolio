import { Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { heroData } from '../data';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center hero-gradient pt-16"
      aria-label="Introduction"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="animate-fade-in flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-30 animate-pulse"></div>
              <img
                src={heroData.profileImage}
                alt={heroData.name}
                className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
          {/* Greeting with Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            <span className="text-primary dark:text-secondary font-medium text-2xl sm:text-3xl md:text-4xl tracking-wide">Hello, I'm </span>
            {heroData.name}!
          </h1>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary/90 dark:text-secondary mb-4">
            {heroData.title}
          </h2>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 mb-6">
            <MapPin size={18} className="text-primary dark:text-secondary" />
            <span>{heroData.location}</span>
          </div>

          {/* Pitch */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed text-justify lg:text-left">
            {heroData.pitch}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href={heroData.resumeUrl}
              download
              className="btn-primary"
              aria-label="Download CV"
            >
              <Download size={20} />
              Download CV
            </a>

            <a
              href={heroData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              aria-label="View GitHub profile"
            >
              <Github size={20} />
              GitHub
            </a>

            <a
              href={heroData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              aria-label="View LinkedIn profile"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>

            <a
              href={`mailto:${heroData.email}`}
              className="btn-secondary"
              aria-label="Send email"
            >
              <Mail size={20} />
              Email
            </a>
          </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-primary dark:border-secondary rounded-full flex justify-center opacity-70">
            <div className="w-1 h-3 bg-primary dark:bg-secondary rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}