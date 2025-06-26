
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const MotionDiv = motion.div;

const skills = [
  { name: 'React.js', level: 95 },
  { name: 'Node.js', level: 90 },
  { name: 'TypeScript', level: 88 },
  { name: 'Python', level: 85 },
  { name: 'MongoDB', level: 82 },
  { name: 'AWS', level: 80 },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="min-h-screen py-20 px-8 md:px-16 lg:px-24 segmented-panel relative"
    >
      <div className="space-y-12 max-w-6xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold text-iron-gold text-center text-iron-glow mb-4">
            ABOUT ME
          </h2>
          <div className="w-25 h-0.5 bg-gradient-to-r from-iron-gold to-iron-blue mx-auto mb-8" />
        </MotionDiv>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex flex-col items-start space-y-6">
              <h3 className="text-xl md:text-2xl font-orbitron text-iron-blue font-bold">
                THE DEVELOPER BEHIND THE CODE
              </h3>
              <p className="text-md md:text-lg text-iron-gold leading-relaxed opacity-90">
                I'm a passionate full-stack developer with over 5 years of experience 
                building scalable web applications. My expertise spans from creating 
                stunning user interfaces to architecting robust backend systems.
              </p>
              <p className="text-md md:text-lg text-iron-gold leading-relaxed opacity-90">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or mentoring upcoming developers. 
                I believe in writing clean, maintainable code that stands the test of time.
              </p>
              
              <div className="flex space-x-8 mt-6">
                <div className="flex flex-col items-start">
                  <span className="text-iron-blue font-bold text-2xl">50+</span>
                  <span className="text-iron-gold text-sm">Projects Completed</span>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-iron-blue font-bold text-2xl">5+</span>
                  <span className="text-iron-gold text-sm">Years Experience</span>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-iron-blue font-bold text-2xl">15+</span>
                  <span className="text-iron-gold text-sm">Technologies</span>
                </div>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-orbitron text-iron-blue font-bold self-start">
                TECHNICAL EXPERTISE
              </h3>
              
              {skills.map((skill, index) => (
                <MotionDiv
                  key={skill.name}
                  className="w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-iron-gold font-medium">
                      {skill.name}
                    </span>
                    <span className="text-iron-blue text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="relative">
                    <Progress
                      value={isInView ? skill.level : 0}
                      className="h-3 bg-iron-900"
                    />
                  </div>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};
