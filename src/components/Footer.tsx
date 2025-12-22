import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { footerData } from '../data';

export default function Footer() {
  return (
    // CHANGED: bg-primary (Tyrian Purple) for a strong brand look
    <footer className="bg-primary dark:bg-tertiary text-white py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-purple-100/80">
            <span>{footerData.copyright}</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:flex items-center gap-1">
              Made with <Heart size={14} className="text-secondary" fill="currentColor" /> 
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {footerData.socialLinks.map((link, index) => {
              const Icon = 
                link.platform === 'GitHub' ? Github :
                link.platform === 'LinkedIn' ? Linkedin : Mail;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  // CHANGED: Hover effect is now a lighter purple tint
                  className="p-2 rounded-lg text-purple-100 hover:bg-white/20 hover:text-white transition-all duration-200"
                  aria-label={`Visit ${link.platform}`}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-purple-100/60">
          <p>
            Open for internship opportunities starting March 2026
          </p>
        </div>
      </div>
    </footer>
  );
}