import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              I'm Prisha, a passionate web developer and designer
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
  Second-year Computer Science Engineering student with foundational skills in Python, C++, and Java, and a strong interest in software development, AI, and web technologies. Committed to continuous learning and eager to contribute to impactful projects and collaborative environments.
            </p>
            
  
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Name:</h4>
                <p className="text-gray-700 dark:text-gray-300">Prisha Arora</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Email:</h4>
                <p className="text-gray-700 dark:text-gray-300">prisha.arora1920@gmail.com</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">From:</h4>
                <p className="text-gray-700 dark:text-gray-300">Chandigarh, India</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Availability:</h4>
                <p className="text-gray-700 dark:text-gray-300">Freelance/Full-time</p>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Hire Me
            </a>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="aspect-w-4 aspect-h-5 w-full">
                <img 
                  src="C:\Users\hp\Downloads\project-bolt-sb1-qt4odj6l\project\public\prisha.jpeg" 
                  alt="Professional portrait"
                  className="object-cover w-full h-full rounded-2xl transform transition duration-500 hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 rounded-2xl"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-blue-600/20 dark:bg-blue-400/10 rounded-full"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-teal-600/20 dark:bg-teal-400/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;