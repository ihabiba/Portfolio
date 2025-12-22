import { useState, FormEvent } from 'react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { contactData } from '../data';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const { ref, isVisible } = useInView();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${contactData.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-canvas-alt dark:bg-canvas-dark"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Get In <span className="text-primary dark:text-secondary">Touch</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 text-center mb-12">
            Feel free to reach out for collaborations or opportunities
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${contactData.email}`}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-canvas-darkAlt 
                           rounded-xl shadow-sm border border-gray-200 dark:border-gray-700
                           hover:border-primary/30 dark:hover:border-secondary/30
                           transition-all duration-200 group"
                >
                  <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg 
                                group-hover:bg-primary transition-colors duration-300">
                    <Mail className="text-primary dark:text-secondary 
                                   group-hover:text-white transition-colors duration-300" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="text-gray-900 dark:text-white font-medium">
                      {contactData.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${contactData.phone}`}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-canvas-darkAlt 
                           rounded-xl shadow-sm border border-gray-200 dark:border-gray-700
                           hover:border-primary/30 dark:hover:border-secondary/30
                           transition-all duration-200 group"
                >
                  <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg 
                                group-hover:bg-primary transition-colors duration-300">
                    <Phone className="text-primary dark:text-secondary 
                                    group-hover:text-white transition-colors duration-300" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <p className="text-gray-900 dark:text-white font-medium">
                      {contactData.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={contactData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-canvas-darkAlt 
                           rounded-xl shadow-sm border border-gray-200 dark:border-gray-700
                           hover:border-primary/30 dark:hover:border-secondary/30
                           transition-all duration-200 group"
                >
                  <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg 
                                group-hover:bg-primary transition-colors duration-300">
                    <Linkedin className="text-primary dark:text-secondary 
                                       group-hover:text-white transition-colors duration-300" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                    <p className="text-gray-900 dark:text-white font-medium">
                      linkedin.com/in/ihabiba
                    </p>
                  </div>
                </a>

                <a
                  href={contactData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-canvas-darkAlt 
                           rounded-xl shadow-sm border border-gray-200 dark:border-gray-700
                           hover:border-primary/30 dark:hover:border-secondary/30
                           transition-all duration-200 group"
                >
                  <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg 
                                group-hover:bg-primary transition-colors duration-300">
                    <Github className="text-primary dark:text-secondary 
                                     group-hover:text-white transition-colors duration-300" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
                    <p className="text-gray-900 dark:text-white font-medium">
                      github.com/ihabiba
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 
                             rounded-lg bg-white dark:bg-canvas-darkAlt 
                             text-gray-900 dark:text-white
                             focus:ring-2 focus:ring-secondary/50 focus:border-secondary
                             transition-colors outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 
                             rounded-lg bg-white dark:bg-canvas-darkAlt 
                             text-gray-900 dark:text-white
                             focus:ring-2 focus:ring-secondary/50 focus:border-secondary
                             transition-colors outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 
                             rounded-lg bg-white dark:bg-canvas-darkAlt 
                             text-gray-900 dark:text-white
                             focus:ring-2 focus:ring-secondary/50 focus:border-secondary
                             transition-colors outline-none resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}