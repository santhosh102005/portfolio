
import { motion } from 'framer-motion';

const MotionDiv = motion.div;
const MotionText = motion.h1;

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="h-screen relative overflow-hidden bg-iron-gradient">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-full h-full z-[1]">
        <div className="w-full h-full bg-gradient-to-br from-iron-black via-iron-dark to-iron-gray animate-pulse">
          {/* Tech grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
              {[...Array(144)].map((_, i) => (
                <div
                  key={i}
                  className="border border-iron-gold/20 animate-pulse"
                  style={{
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-[2] h-full flex flex-col justify-center items-start pl-8 md:pl-16 lg:pl-24 space-y-6">
        <MotionText
          className="text-2xl md:text-4xl lg:text-6xl font-orbitron font-bold text-iron-gold text-iron-glow"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          SANTHOSH
        </MotionText>

        <MotionText
          className="text-xl md:text-3xl lg:text-5xl font-orbitron font-bold text-iron-blue text-glow"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          SHANMUGAM
        </MotionText>

        <MotionDiv
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h2 className="text-lg md:text-xl lg:text-2xl text-iron-gold font-medium opacity-90">
            Full Stack Developer
          </h2>
          <p className="text-md md:text-lg text-iron-blue font-normal opacity-80 max-w-[500px] mt-2">
            Crafting cutting-edge web experiences with modern technologies.
            Specializing in React, Node.js, and innovative UI/UX design.
          </p>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex space-x-4 mt-6"
        >
          <button 
            onClick={() => scrollToSection('projects')}
            className="glow-button px-8 py-3 rounded-md font-orbitron font-bold text-iron-black hover:translate-y-[-2px] transition-transform cursor-pointer"
          >
            View Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="border-2 border-iron-blue px-8 py-3 rounded-md font-orbitron font-bold text-iron-blue bg-transparent tech-border hover:bg-iron-blue hover:text-iron-black hover:translate-y-[-2px] transition-all duration-300 cursor-pointer"
          >
            Contact Me
          </button>
        </MotionDiv>
      </div>

      {/* Floating particles effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <MotionDiv
            key={i}
            className="absolute w-0.5 h-0.5 bg-iron-gold rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};
