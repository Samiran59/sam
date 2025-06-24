import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Magnetic } from '@/components/ui/magnetic';

const Hero = () => {
  // Social links data
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:alex@example.com',
      label: 'Email',
    },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center bg-grad-dark overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-spotlight"></div>
      <div className="absolute inset-0 bg-geometric-pattern opacity-10"></div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-white rounded-full animate-float opacity-20"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-gray-400 rounded-full animate-float opacity-15" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-gray-300 rounded-full animate-float opacity-25" style={{animationDelay: '4s'}}></div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Main heading */}
        <div className="animate-fadeIn">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 text-shadow">
            <span className="text-white block">I'M</span>
            <span className="gradient-text block">SAMIRAN MALAKAR</span>
          </h1>
          
          <div className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-300 mb-4">
            <span className="text-white">FULL-STACK</span>{' '}
            <span className="gradient-text">DEVELOPER</span>
          </div>
        </div>

        {/* Tagline */}
        <div className="animate-slideUp" style={{animationDelay: '0.3s'}}>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with modern technologies. 
            Passionate about clean code, innovative solutions, and bringing ideas to life.
          </p>
        </div>

        {/* Call to action buttons */}
        <div className="animate-slideUp flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" style={{animationDelay: '0.6s'}}>
          <Magnetic intensity={0.3} springOptions={{ bounce: 0 }}>
            <a 
              href="#projects" 
              className="btn-primary inline-flex items-center gap-2 group hover:scale-105 transform transition-all duration-300 subtle-glow"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </Magnetic>
          
          <Magnetic intensity={0.2} springOptions={{ bounce: 0 }}>
            <a 
              href="#contact" 
              className="btn-secondary"
            >
              Get In Touch
            </a>
          </Magnetic>
        </div>

        {/* Social links with magnetic effect */}
        <div className="animate-slideUp flex justify-center items-center gap-6" style={{animationDelay: '0.9s'}}>
          {socialLinks.map((social) => (
            <Magnetic 
              key={social.label}
              intensity={0.4} 
              springOptions={{ bounce: 0.2 }}
            >
              <a 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex shrink-0 items-center justify-center w-12 h-12 rounded-full bg-gray-850 backdrop-blur-sm border border-gray-700 text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                
                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {social.label}
                </span>
              </a>
            </Magnetic>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-white to-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;