import React from 'react';
import {
  Code,
  Palette,
  Zap,
  Users,
  ArrowRight,
} from 'lucide-react';
import ProfileImage from '../assets/profile-pic.png';

const About = () => {
  const skills = [
    { icon: Code, name: 'Frontend Development', desc: 'React, Vue, TypeScript, Next.js' },
    { icon: Zap, name: 'Backend Development', desc: 'Node.js, Python, Express, FastAPI' },
    { icon: Palette, name: 'UI/UX Design', desc: 'Figma, Adobe XD, Responsive Design' },
    { icon: Users, name: 'Team Collaboration', desc: 'Agile, Git, Code Reviews, Mentoring' },
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '15+', label: 'Technologies' },
    { number: '99%', label: 'Client Satisfaction' },
  ];

  const profileTexts = [
    { 
      text: "I'm a <span class='gradient-text font-semibold'>Full-Stack Developer</span> with a love for building efficient, scalable, and elegant solutions.",
    },
    { 
      text: "Skilled in <span class='text-white font-semibold'>React</span>, <span class='text-white font-semibold'>Node.js</span>, and <span class='text-white font-semibold'>UI/UX design</span>, I blend logic with creativity to deliver exceptional digital experiences.",
    },
    { 
      text: "Outside of coding, I enjoy exploring new tech, contributing to open-source, and helping the community grow.",
    },
    { 
      text: "With over 3 years of professional experience, I take pride in writing clean code and designing with purpose.",
    }
  ];

  return (
    <section id="about" className="relative bg-black-500 section-padding">
      <div className="absolute inset-0 bg-geometric-pattern opacity-5"></div>

      <div className="relative z-10 container-custom">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-white mb-4 md:mb-6 font-mono">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            I'm a passionate developer who loves turning complex problems into simple, beautiful solutions.
          </p>
        </div>

        {/* Profile Section */}
        <div className="relative mb-9 md:mb-12">
          {/* Mobile layout */}
          <div className="md:hidden">
            <div className="flex flex-col items-center gap-8">
              <img
                src={ProfileImage}
                alt="Profile"
                className="w-48 sm:w-56 md:w-64 lg:w-72 h-auto rounded-2xl shadow-lg"
              />
              <div className="grid grid-cols-1 gap-4 w-full max-w-lg">
                {profileTexts.map((text, index) => (
                  <div
                    key={index}
                    className="bg-bg-card p-4 rounded-md border-4 border-double border-gray-600 shadow-lg text-gray-300 text-sm font-mono"
                    dangerouslySetInnerHTML={{ __html: text.text }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Medium and up layout */}
          <div className="hidden md:block">
            <div className="grid grid-cols-3 grid-rows-2 gap-6">
              <div className="col-start-2 row-start-1 row-span-2 flex justify-center items-center">
                <img
                  src={ProfileImage}
                  alt="Profile"
                  className="w-48 sm:w-56 md:w-64 lg:w-72 h-auto rounded-2xl shadow-lg"
                />
              </div>
              {profileTexts.map((text, index) => (
                <div
                  key={index}
                  className="bg-bg-card p-6 rounded-md border-4 border-double border-gray-600 shadow-lg text-gray-300 text-base font-mono"
                  dangerouslySetInnerHTML={{ __html: text.text }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mb-12 md:mb-20">
          <p className="text-gray-300 text-base sm:text-lg mb-4 md:mb-6 px-4">
            I'm always seeking meaningful collaborations where I can bring value and grow as a developer and teammate.
          </p>
          <a href="#contact" className="btn-primary inline-flex items-center gap-2 text-sm sm:text-base">
            Let's Work Together <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 md:mb-20">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group p-5 sm:p-6 bg-bg-card backdrop-blur-sm rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-300 card-glow hover:bg-bg-card-hover"
            >
              <div className="mb-3 sm:mb-4">
                <skill.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">{skill.name}</h3>
              <p className="text-gray-400 text-xs sm:text-sm">{skill.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-1 sm:mb-2">{stat.number}</div>
              <div className="text-gray-400 font-medium text-xs sm:text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;