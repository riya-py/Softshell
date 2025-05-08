import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const licenseTypes = [
    "Select License Type",
    "Enterprise Software",
    "Creative Suite",
    "Development Tools",
    "Business Applications",
    "Security Software",
    "Other"
  ];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    // Company validation
    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    }
    
    // License Type validation
    if (!formData.licenseType || formData.licenseType === "Select License Type") {
      newErrors.licenseType = 'Please select a license type';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    // Form is valid, proceed with submission
    console.log('Form submitted:', formData);
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 3000);
    // You would typically send the data to your backend here
  };

  return (
    <section className="bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-800 dark:text-white py-20 px-6 md:px-16 relative transition-colors duration-300">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-10 right-20 w-64 h-64 rounded-full bg-purple-400 dark:bg-purple-700 blur-3xl"
        ></motion.div>
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-blue-300 dark:bg-indigo-600 blur-3xl"
        ></motion.div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="bg-blue-100 text-blue-600 dark:bg-indigo-900/50 dark:text-indigo-300 px-4 py-1 rounded-full text-sm font-medium transition-colors duration-300">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 text-gray-800 dark:text-white transition-colors duration-300">
            Get in <span className="text-blue-500 dark:text-indigo-400 transition-colors duration-300">Touch</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Have questions about selling your licenses? Our team is ready to help you get the best value for your unused software.
          </p>
        </motion.div>
        
        <div className="max-w-xl mx-auto">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-indigo-500/30 transition-all duration-300 shadow-lg"
          >
            <AnimatePresence>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-10"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl mb-4"
                  >
                    ✅
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Thank You!</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">Your message has been submitted successfully.</p>
                </motion.div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name" 
                      className={`w-full p-3 rounded bg-gray-50 dark:bg-gray-700 border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-indigo-500 transition-colors duration-200`} 
                    />
                    {errors.name && (
                      <motion.p 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-400"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email" 
                      className={`w-full p-3 rounded bg-gray-50 dark:bg-gray-700 border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-indigo-500 transition-colors duration-200`} 
                    />
                    {errors.email && (
                      <motion.p 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-400"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label htmlFor="company" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Company</label>
                    <input 
                      type="text" 
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company" 
                      className={`w-full p-3 rounded bg-gray-50 dark:bg-gray-700 border ${errors.company ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-indigo-500 transition-colors duration-200`} 
                    />
                    {errors.company && (
                      <motion.p 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-400"
                      >
                        {errors.company}
                      </motion.p>
                    )}
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label htmlFor="licenseType" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">License Type</label>
                    <select 
                      id="licenseType"
                      name="licenseType"
                      value={formData.licenseType}
                      onChange={handleChange}
                      className={`w-full p-3 rounded bg-gray-50 dark:bg-gray-700 border ${errors.licenseType ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-indigo-500 transition-colors duration-200`}
                    >
                      {licenseTypes.map((type, index) => (
                        <option key={index} value={type === "Select License Type" ? "" : type}>{type}</option>
                      ))}
                    </select>
                    {errors.licenseType && (
                      <motion.p 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-400"
                      >
                        {errors.licenseType}
                      </motion.p>
                    )}
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4" 
                      placeholder="Your Message" 
                      className={`w-full p-3 rounded bg-gray-50 dark:bg-gray-700 border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-indigo-500 transition-colors duration-200`}
                    ></textarea>
                    {errors.message && (
                      <motion.p 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-400"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <button 
                      type="submit" 
                      className="bg-blue-600 hover:bg-blue-500 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white font-semibold py-3 px-8 rounded-xl shadow-md transition-all w-full"
                    >
                      Send Message
                    </button>
                  </motion.div>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              We typically respond within 24 hours. Your information is secure and will not be shared.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;