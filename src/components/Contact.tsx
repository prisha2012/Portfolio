import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill out all required fields.');
      setIsSubmitting(false);
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset submission status after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out! I'm always open to discussing new opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-blue-600 dark:text-blue-400 mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-medium">Email</h4>
                    <a href="mailto:alex@example.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    prisha.arora1920@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-blue-600 dark:text-blue-400 mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-medium">Phone</h4>
                    <a href="tel:+1234567890" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      +91 9465467054
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-blue-600 dark:text-blue-400 mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-medium">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                     Chandigarh, India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-gray-900 dark:text-white font-medium mb-4">Social Media</h4>
                <div className="flex space-x-4">
                  {['linkedin', 'github', 'twitter', 'dribbble'].map((social) => (
                    <a 
                      key={social}
                      href="#" 
                      className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors duration-300"
                      aria-label={`${social} profile`}
                    >
                      <span className="capitalize">{social.charAt(0)}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send Me a Message
              </h3>
              
              {isSubmitted ? (
                <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 p-4 rounded-lg mb-6">
                  Thank you for your message! I'll get back to you as soon as possible.
                </div>
              ) : error ? (
                <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 p-4 rounded-lg mb-6">
                  {error}
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Subject of your message"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full md:w-auto px-8 py-3 rounded-lg font-medium text-white flex items-center justify-center transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;