import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  
  // Animation variants for the entire navbar
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  // Animation variants for each link
  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      color: "#4f46e5", // indigo-600
      transition: {
        duration: 0.2
      }
    }
  };
  
  // Logo animation variants
  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      textShadow: "0px 0px 8px rgba(79, 70, 229, 0.6)",
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.header 
      className="bg-white dark:bg-gray-900 shadow-md dark:shadow-blue-900/20 sticky top-0 z-50 transition-colors duration-300"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1 
          className="text-xl font-bold text-blue-600 dark:text-indigo-400"
          variants={logoVariants}
          whileHover="hover"
        >
          <motion.span
            animate={{
              textShadow: [
                "0px 0px 0px rgba(59, 130, 246, 0)",
                "0px 0px 4px rgba(59, 130, 246, 0.5)",
                "0px 0px 0px rgba(59, 130, 246, 0)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            SoftShell
          </motion.span>
        </motion.h1>
        
        <motion.ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300 font-medium">
          <motion.li variants={linkVariants}>
            <motion.a 
              href="#how" 
              className="relative hover:text-blue-500 dark:hover:text-indigo-400 transition-colors"
              whileHover="hover"
              onMouseEnter={() => setActiveLink('how')}
              onMouseLeave={() => setActiveLink(null)}
            >
              How It Works
              {activeLink === 'how' && (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 dark:bg-indigo-400"
                  layoutId="underline"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.a>
          </motion.li>
          
          <motion.li variants={linkVariants}>
            <motion.a 
              href="#why" 
              className="relative hover:text-blue-500 dark:hover:text-indigo-400 transition-colors"
              whileHover="hover"
              onMouseEnter={() => setActiveLink('why')}
              onMouseLeave={() => setActiveLink(null)}
            >
              Why Choose Us
              {activeLink === 'why' && (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 dark:bg-indigo-400"
                  layoutId="underline"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.a>
          </motion.li>
          
          <motion.li variants={linkVariants}>
            <motion.a 
              href="#testimonials" 
              className="relative hover:text-blue-500 dark:hover:text-indigo-400 transition-colors"
              whileHover="hover"
              onMouseEnter={() => setActiveLink('testimonials')}
              onMouseLeave={() => setActiveLink(null)}
            >
              Testimonials
              {activeLink === 'testimonials' && (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 dark:bg-indigo-400"
                  layoutId="underline"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.a>
          </motion.li>
          
          <motion.li variants={linkVariants}>
            <ThemeToggle />
          </motion.li>
        </motion.ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;