import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A full-featured online store with product catalog, shopping cart, and secure checkout process.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1600",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application for managing tasks, projects, and deadlines with a clean interface.",
    image: "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1600",
    tags: ["React", "Firebase", "Tailwind CSS"],
    demoLink: "https://task-manager-efb5b.web.app/",
    codeLink: "https://github.com/prisha2012/Task-Manager"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with a modern design.",
    image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1600",
    tags: ["HTML", "CSS", "JavaScript"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "An interactive weather application displaying forecasts and conditions for locations worldwide.",
    image: "https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1600",
    tags: ["React", "API", "CSS"],
    demoLink: "https://ornate-dusk-6e1f74.netlify.app/",
    codeLink: "https://github.com/prisha2012/WeatherDashboard"
  },
  {
    id: 5,
    title: "Social Media Platform",
    description: "A community platform with user profiles, posts, comments, and real-time notifications.",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1600",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    demoLink: "https://social-media-app-pfm2.vercel.app/",
    codeLink: "https://github.com/prisha2012/Social-Media-app"
  },
  {
    id: 6,
    title: "Recipe Finder App",
    description: "A culinary app for discovering recipes based on available ingredients and dietary preferences.",
    image: "https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=1600",
    tags: ["React", "API", "Tailwind CSS"],
    demoLink: "https://jazzy-pasca-c2040c.netlify.app/",
    codeLink: "https://github.com/prisha2012/recipe-finder"
  }
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  
  const allTags = ['All', ...new Set(projectsData.flatMap(project => project.tags))];
  
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(filter));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was carefully crafted to solve specific problems and deliver exceptional user experiences.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {allTags.map(tag => (
            <motion.button
              key={tag}
              onClick={() => setFilter(tag)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                filter === tag 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-60 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end"
                >
                  <div className="p-4 w-full flex justify-between items-center">
                    <motion.a 
                      href={project.demoLink}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300"
                      aria-label="View demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a 
                      href={project.codeLink}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-white bg-gray-800 hover:bg-gray-900 p-2 rounded-full transition-colors duration-300"
                      aria-label="View code"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <motion.span 
                      key={`${project.id}-${tag}`}
                      whileHover={{ scale: 1.05 }}
                      className="text-xs px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
