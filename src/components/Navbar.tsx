import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { navItems } from '../data';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          // CHANGED: Purple background when scrolled
          ? 'bg-primary/95 dark:bg-tertiary/95 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Force White text since background is purple */}
          <a
            href="#"
            className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-white' : 'text-primary dark:text-white'}`}
            aria-label="Home"
          >
            HH
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                // CHANGED: Text colors to work on both purple (scrolled) and white (unscrolled) backgrounds
                className={`px-4 py-2 font-medium transition-colors rounded-lg
                  ${scrolled 
                    ? 'text-purple-100 hover:text-white hover:bg-white/10' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-tint dark:hover:bg-white/10 hover:text-primary dark:hover:text-white'
                  }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={toggleDarkMode}
              className={`ml-4 p-2 rounded-lg transition-colors
                ${scrolled
                  ? 'bg-white/10 text-white hover:bg-white/20'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-secondary'
                }`}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-2">
             <button
              onClick={toggleDarkMode}
               className={`p-2 rounded-lg transition-colors
                ${scrolled
                  ? 'bg-white/10 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-secondary'
                }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors
                ${scrolled
                  ? 'text-white hover:bg-white/10'
                  : 'text-gray-600 dark:text-gray-300'
                }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 bg-white dark:bg-tertiary border-t border-gray-100 dark:border-white/10 shadow-lg rounded-b-xl">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-4 py-3 text-gray-600 dark:text-purple-100 
                           hover:text-primary dark:hover:text-white hover:bg-tint 
                           dark:hover:bg-white/10 font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}