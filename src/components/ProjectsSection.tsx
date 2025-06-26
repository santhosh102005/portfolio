
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const MotionDiv = motion.div;

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include real-time inventory, payment integration, and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=300&fit=crop',
  },
  {
    title: 'Real-Time Chat App',
    description: 'WebSocket-based chat application with real-time messaging, file sharing, and group conversations. Built with Socket.io and React.',
    tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop',
  },
  {
    title: 'Task Management System',
    description: 'Collaborative project management tool with Kanban boards, time tracking, and team collaboration features.',
    tech: ['Vue.js', 'Python', 'Django', 'Redis'],
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&h=300&fit=crop',
  },
  {
    title: 'AI-Powered Analytics',
    description: 'Machine learning dashboard for business analytics with predictive modeling and data visualization.',
    tech: ['React', 'Python', 'TensorFlow', 'D3.js'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop',
  },
  {
    title: 'IoT Monitoring System',
    description: 'Real-time IoT device monitoring with data visualization, alerts, and device management capabilities.',
    tech: ['React', 'Node.js', 'InfluxDB', 'MQTT'],
    image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=500&h=300&fit=crop',
  },
  {
    title: 'Blockchain Wallet',
    description: 'Secure cryptocurrency wallet with multi-currency support, transaction history, and portfolio tracking.',
    tech: ['React', 'Web3.js', 'Solidity', 'Ethereum'],
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=300&fit=crop',
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MotionDiv
      className="segmented-panel rounded-lg overflow-hidden relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        y: -10,
        rotateX: 5,
        rotateY: 5,
        transition: { duration: 0.3 },
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      <div
        className="h-48 bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div
          className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-iron-dark/80 to-iron-blue/20 transition-opacity duration-300 ${
            isHovered ? 'opacity-90' : 'opacity-60'
          }`}
        />
        <MotionDiv
          className="absolute top-4 right-4"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
        >
          <div className="w-10 h-10 rounded-full bg-iron-gold flex items-center justify-center animate-glow-pulse">
            <span className="text-iron-black font-bold text-lg">
              {index + 1}
            </span>
          </div>
        </MotionDiv>
      </div>

      <div className="flex flex-col items-start p-6 space-y-4">
        <h3
          className={`text-xl font-orbitron font-bold text-iron-gold transition-all duration-300 ${
            isHovered ? 'text-iron-glow' : ''
          }`}
        >
          {project.title}
        </h3>

        <p className="text-iron-gold opacity-80 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className={`bg-iron-blue text-iron-black px-3 py-1 rounded-md text-xs font-bold ${
                isHovered ? 'animate-glow-pulse' : ''
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        <MotionDiv
          className={`w-full h-0.5 bg-gradient-to-r from-transparent via-iron-gold to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    </MotionDiv>
  );
};

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="min-h-screen py-20 px-8 md:px-16 lg:px-24 bg-iron-black relative"
    >
      <div className="space-y-12 max-w-7xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold text-iron-gold text-center text-iron-glow mb-4">
            FEATURED PROJECTS
          </h2>
          <div className="w-38 h-0.5 bg-gradient-to-r from-iron-gold to-iron-blue mx-auto mb-8" />
          <p className="text-center text-iron-gold opacity-80 text-lg max-w-2xl mx-auto">
            A showcase of my latest work, featuring cutting-edge technologies and innovative solutions.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
