import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'other';
}

interface Education {
  school: string;
  location: string;
  period: string;
  details: string[];
}

const skillsData: Skill[] = [
  { name: 'HTML & CSS', level: 95, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'React', level: 85, category: 'frontend' },

  { name: 'Node.js', level: 75, category: 'backend' },
  { name: 'Express', level: 80, category: 'backend' },
  { name: 'MongoDB', level: 70, category: 'backend' },
  { name: 'C', level: 70, category: 'backend' },
  { name: 'C++', level: 70, category: 'backend' },
  { name: 'Python', level: 80, category: 'backend' },
  { name: 'Java', level: 80, category: 'backend' },
  { name: 'Responsive Design', level: 90, category: 'design' },
  { name: 'Git & GitHub', level: 85, category: 'other' },
  { name: 'Agile/Scrum', level: 70, category: 'other' },
];

const educationData: Education[] = [
    {
    school: 'Vivek High School',
    location: 'Chandigarh, India',
    period: '2008 - 2021',
    details: [
      'X Boards: 91.6%'
    ]
  },
    {
    school: 'Sri Guru Gobind Singh Senior Secondary School',
    location: 'Chandigarh, India',
    period: '2021 - 2023',
    details: [
      'XII Boards: 82.4%'
    ]
  },
  {
    school: 'Chitkara University',
    location: 'Rajpura, India',
    period: '2023 - 2027',
    details: [
      'Bachelor of Engineering in Computer Science and Engineering',
      'CGPA: 9.12'
    ]
  }


];

const experienceData = []; // Empty for now as per the current profile

const Skills: React.FC = () => {
  const [category, setCategory] = useState<'all' | 'frontend' | 'backend' | 'design' | 'other'>('all');
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animated]);

  const filteredSkills = category === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === category);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Skills Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My <span className="text-blue-600 dark:text-blue-400">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'frontend', 'backend', 'design', 'other'].map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setCategory(cat as any)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-full transition-all duration-300 ${
                  category === cat 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </motion.button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{skill.name}</h3>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-blue-600 to-teal-400 rounded-full origin-left"
                    style={{ width: `${skill.level}%` }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="text-blue-600 dark:text-blue-400">Education</span>
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          </div>

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {edu.school}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    {edu.location}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">•</span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {edu.period}
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  {edu.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;