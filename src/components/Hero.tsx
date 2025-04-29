import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ['Web Developer', 'UI/UX Designer', 'Creative Thinker'];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let currentTitle = titles[currentIndex];
    let isTyping = true;
    let charIndex = 0;

    const type = () => {
      if (isTyping) {
        if (charIndex < currentTitle.length) {
          setTypedText(prev => prev + currentTitle.charAt(charIndex));
          charIndex++;
          timer = setTimeout(type, 100);
        } else {
          isTyping = false;
          timer = setTimeout(type, 2000);
        }
      } else {
        if (charIndex > 0) {
          setTypedText(prev => prev.slice(0, -1));
          charIndex--;
          timer = setTimeout(type, 50);
        } else {
          isTyping = true;
          setCurrentIndex((currentIndex + 1) % titles.length);
          currentTitle = titles[(currentIndex + 1) % titles.length];
          timer = setTimeout(type, 500);
        }
      }
    };

    timer = setTimeout(type, 1000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
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

  const backgroundCircleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={backgroundCircleVariants}
        className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 dark:bg-blue-600/10 rounded-full filter blur-3xl"
      />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={backgroundCircleVariants}
        className="absolute bottom-20 right-20 w-96 h-96 bg-teal-400/20 dark:bg-teal-600/10 rounded-full filter blur-3xl"
      />
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
        >
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Prisha Arora</span>
        </motion.h1>
        
        <motion.div
          variants={itemVariants}
          className="h-12 mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-700 dark:text-gray-300">
            <span>I'm a </span>
            <span className="text-teal-600 dark:text-teal-400 inline-block min-w-[200px] sm:min-w-[280px] text-left">
              {typedText}
              <span className="animate-blink">|</span>
            </span>
          </h2>
        </motion.div>
        
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          Crafting beautiful, functional digital experiences with a passion for clean design and efficient code.
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.a 
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            View My Work
          </motion.a>
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium transition-colors duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
      
      <motion.a 
        href="#about"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} className="text-gray-600 dark:text-gray-400" />
      </motion.a>
    </section>
  );
};

export default Hero;