import React from 'react';
import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#resume', label: 'Experience' }, // Changed from #expirences to #resume
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Footer = () => {
  // Social links with flip animation
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub',
      text: 'Github'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
      text: 'Linkedin'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com',
      label: 'Twitter',
      text: 'Twitter'
    },
    {
      icon: Mail,
      href: 'mailto:alex@example.com',
      label: 'Email',
      text: 'Email'
    },
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Flip Link Component
  const FlipLink = ({ children, href, label }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden grayspace-nowrap text-xl md:text-2xl lg:text-3xl font-bold uppercase text-gray hover:text-gray-300 transition-colors duration-300"
        style={{
          lineHeight: 0.75,
        }}
        aria-label={label}
      >
        <div className="flex">
          {children.split("").map((letter, i) => (
            <span
              key={i}
              className="inline-block transition-transform duration-300 ease-in-out group-hover:-translate-y-[110%]"
              style={{
                transitionDelay: `${i * 25}ms`,
              }}
            >
              {letter}
            </span>
          ))}
        </div>
        <div className="absolute inset-0 flex">
          {children.split("").map((letter, i) => (
            <span
              key={i}
              className="inline-block translate-y-[110%] transition-transform duration-300 ease-in-out group-hover:translate-y-0"
              style={{
                transitionDelay: `${i * 25}ms`,
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </a>
    );
  };

  return (
    <footer className="relative bg-black border-t border-gray-800">
      <div className="container-custom section-padding py-12">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-grad-accent rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">AJ</span>
              </div>
              <span className="text-2xl font-bold font-display text-white">
                Alex<span className="gradient-text">Johnson</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Full-Stack Developer passionate about creating exceptional digital experiences. 
              Let's build something amazing together.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:gradient-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>alex@example.com</p>
              <p>+1 (555) 123-4567</p>
              <p>New York, NY</p>
            </div>
          </div>
        </div>

        {/* Animated Social Links Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="mb-8 md:mb-0">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              {socialLinks.map((social) => (
                <FlipLink 
                  key={social.label} 
                  href={social.href}
                  label={social.label}
                >
                  {social.text}
                </FlipLink>
              ))}
            </div>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 group"
            aria-label="Back to top"
          >
            <span className="text-sm">Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-800 mt-8">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" /> by Alex Johnson
          </p>
          <p className="text-gray-500 text-xs mt-2">
            © {new Date().getFullYear()} Alex Johnson. All rights reserved.
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 bg-geometric-pattern opacity-5 pointer-events-none"></div>
    </footer>
  );
};

export default Footer;