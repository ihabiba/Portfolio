import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Languages from './components/Languages';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
                 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white 
                 focus:rounded-lg"
      >
        Skip to main content
      </a>
      
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Certificates />
        <Languages />
        <Contact />
      </main>
      
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
