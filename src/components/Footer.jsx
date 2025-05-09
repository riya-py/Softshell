import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Animation variants
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };
  
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };
  
  // Social media links
  const socialLinks = [
    { name: 'Twitter', icon: '🐦' },
    { name: 'LinkedIn', icon: '💼' },
    { name: 'GitHub', icon: '💻' }
  ];

  return (
    <motion.footer 
      className="bg-gray-100 dark:bg-gray-900 py-8 relative overflow-hidden transition-colors duration-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={footerVariants}
    >
      {/* Background decorative elements - similar to HowItWorks */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div 
          className="absolute top-10 right-10 w-32 h-32 rounded-full bg-blue-300 dark:bg-indigo-600 blur-3xl"
          animate={{ 
            x: [0, 10, 0],
            y: [0, -5, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-purple-200 dark:bg-purple-700 blur-3xl"
          animate={{ 
            x: [0, -10, 0],
            y: [0, 7, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10,
            ease: "easeInOut",
            delay: 0.5
          }}
        ></motion.div>
      </motion.div>
      
      {/* Footer content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="flex flex-col items-center"
          variants={contentVariants}
        >
          <motion.div 
            className="flex space-x-4 mb-4"
            variants={contentVariants}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-blue-600 dark:text-indigo-400 shadow-sm"
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "#3b82f6", 
                  color: "#ffffff",
                  boxShadow: "0px 0px 8px rgba(59, 130, 246, 0.5)",
                  dark: {
                    backgroundColor: "#4f46e5",
                    boxShadow: "0px 0px 8px rgba(99, 102, 241, 0.5)"
                  }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{link.icon}</span>
              </motion.a>
            ))}
          </motion.div>
          
          <motion.p 
            className="text-center text-sm text-gray-500 dark:text-gray-400"
            variants={contentVariants}
          >
            &copy; {currentYear} SoftSell. All rights reserved.
          </motion.p>
          
          <motion.div 
            className="mt-4 text-xs text-gray-400 dark:text-gray-500"
            variants={contentVariants}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <p>Convert unused software licenses to cash</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;