import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { 
    title: "Verified Buyers", 
    desc: "Only legit businesses buy your license.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-4 text-indigo-500 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  { 
    title: "Secure Process", 
    desc: "Encrypted submissions and secure payments.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-4 text-indigo-500 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  },
  { 
    title: "Lightning Fast", 
    desc: "Most deals close within 24 hours.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-4 text-indigo-500 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

const WhyChooseUs = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      borderColor: "rgba(99, 102, 241, 0.4)",
      transition: { duration: 0.3 }
    }
  };
  
  const iconAnimation = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.3
      }
    },
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, -5, 0],
      transition: { duration: 0.5 }
    }
  };
  
  const buttonAnimation = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section className="bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-800 dark:text-white py-20 px-6 md:px-16 relative">
      {/* Background decorative elements - only visible in dark mode */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-0 dark:opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div 
          className="absolute top-10 left-10 w-64 h-64 rounded-full bg-indigo-300 dark:bg-indigo-600 blur-3xl"
          animate={{ 
            x: [0, 15, 0],
            y: [0, -10, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-purple-200 dark:bg-purple-700 blur-3xl"
          animate={{ 
            x: [0, -20, 0],
            y: [0, 15, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 12,
            ease: "easeInOut",
            delay: 0.5
          }}
        ></motion.div>
      </motion.div>
      
      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerChildren}
      >
        <motion.div 
          className="text-center mb-16"
          variants={fadeIn}
        >
          <motion.span 
            className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-4 py-1 rounded-full text-sm font-medium inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Our Advantage
          </motion.span>
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mt-4 text-gray-900 dark:text-white"
            variants={fadeIn}
          >
            Why <motion.span 
              className="text-indigo-600 dark:text-indigo-400"
              animate={{ 
                color: ["#4f46e5", "#6366f1", "#4f46e5"],
                dark: { color: ["#818cf8", "#a5b4fc", "#818cf8"] }
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >Choose Us</motion.span>?
          </motion.h2>
          <motion.p 
            className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            variants={fadeIn}
          >
            We stand out from the competition with our commitment to security, speed, and reliability.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              className="relative bg-gray-50 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center shadow-sm dark:shadow-none"
              variants={cardAnimation}
              whileHover="hover"
              custom={i}
              viewport={{ once: true }}
            >
              <motion.div 
                className="p-4 bg-indigo-100 dark:bg-indigo-900/50 rounded-full mb-4"
                variants={iconAnimation}
                whileHover="hover"
              >
                {f.icon}
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold mb-3 text-gray-900 dark:text-white"
              >
                {f.title}
              </motion.h3>
              <motion.p 
                className="text-gray-600 dark:text-gray-300"
              >
                {f.desc}
              </motion.p>
              
              {/* Hover effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-indigo-200/20 to-purple-200/20 dark:from-indigo-600/5 dark:to-purple-600/5 opacity-0 rounded-xl"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
              
              {/* Feature number indicator */}
              <motion.div 
                className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-indigo-500 dark:bg-indigo-600 text-white flex items-center justify-center font-bold z-10"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  delay: 0.3 + (i * 0.2)
                }}
                whileHover={{ scale: 1.1 }}
              >
                {i + 1}
              </motion.div>
              
              {/* Connector line (hidden on mobile) */}
              {i < features.length - 1 && (
                <motion.div 
                  className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-indigo-300 dark:bg-indigo-500/30"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 0.5 + (i * 0.3), 
                    duration: 0.5 
                  }}
                >
                  <motion.div 
                    className="absolute right-0 -top-1 w-0 h-0 border-t-4 border-r-0 border-b-4 border-l-8 border-t-transparent border-b-transparent border-l-indigo-300 dark:border-l-indigo-500/30"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + (i * 0.3) }}
                  ></motion.div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          variants={fadeIn}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <motion.button 
            className="bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white font-semibold py-3 px-8 rounded-xl shadow-md transition-all"
            whileHover={buttonAnimation.hover}
            whileTap={buttonAnimation.tap}
            animate={{ 
              boxShadow: ["0 4px 6px -1px rgba(0,0,0,0.1)", "0 6px 10px -1px rgba(0,0,0,0.15)", "0 4px 6px -1px rgba(0,0,0,0.1)"]
            }}
            transition={{ 
              boxShadow: { 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut" 
              }
            }}
          >
            Learn More About Our Process
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;