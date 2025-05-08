import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  
  const navLinks = [
    { name: 'How It Works', href: '#how' },
    { name: 'Why Choose Us', href: '#why' },
    { name: 'Testimonials', href: '#testimonials' }
  ];

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      color: "#4f46e5", // indigo-600
      transition: { duration: 0.2 }
    }
  };

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
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.header 
      className="bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800/50 sticky top-0 z-50 transition-colors duration-300"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1 
          className="text-xl font-bold text-indigo-600 dark:text-indigo-400"
          variants={logoVariants}
          whileHover="hover"
        >
          <motion.span
            animate={{
              textShadow: [
                "0px 0px 0px rgba(79, 70, 229, 0)",
                "0px 0px 5px rgba(79, 70, 229, 0.3)",
                "0px 0px 0px rgba(79, 70, 229, 0)"
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
        
        <motion.ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300 font-medium" variants={navVariants}>
          {navLinks.map((link, index) => (
            <motion.li key={index} variants={linkVariants}>
              <motion.a 
                href={link.href}
                className="relative py-2 px-1 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                whileHover="hover"
                onHoverStart={() => setActiveLink(index)}
                onHoverEnd={() => setActiveLink(null)}
              >
                {link.name}
                {activeLink === index && (
                  <motion.div 
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-500 dark:bg-indigo-400"
                    layoutId="underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.a>
            </motion.li>
          ))}
          <ThemeToggle />
        </motion.ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;