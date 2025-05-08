import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
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

  const slideInFromLeft = {
    hidden: { x: -60, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 12
      }
    }
  };

  const slideInFromRight = {
    hidden: { x: 60, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 12
      }
    }
  };

  const buttonHover = {
    scale: 1.05,
    transition: { duration: 0.2 }
  };

  const priceReveal = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.8
      }
    }
  };
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.3 }
    }
  };

  const backgroundCircles = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 0.1,
      transition: { duration: 1.5 }
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={backgroundCircles}
      >
        <motion.div 
          className="absolute top-10 left-10 w-64 h-64 rounded-full bg-indigo-600 blur-3xl"
          animate={{ 
            x: [0, 10, 0],
            y: [0, 15, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-purple-700 blur-3xl"
          animate={{ 
            x: [0, -15, 0],
            y: [0, -10, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10,
            ease: "easeInOut",
            delay: 0.5
          }}
        ></motion.div>
      </motion.div>
      
      <div className="max-w-6xl mx-auto z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content */}
          <motion.div 
            className="flex-1 text-left"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.div 
              className="inline-block px-4 py-1 rounded-full bg-indigo-900/50 text-indigo-300 text-sm font-medium mb-6"
              variants={fadeIn}
            >
              Trusted by 10,000+ customers worldwide
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6"
              variants={slideInFromLeft}
            >
              Sell Unused Software Licenses 
              <motion.span 
                className="text-indigo-400"
                animate={{ 
                  color: ["#818cf8", "#a5b4fc", "#818cf8"],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              > with Confidence</motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl max-w-2xl mb-8 text-gray-300"
              variants={fadeIn}
            >
              SoftShell is your trusted resale platform for turning inactive software into real value. Fast, easy and 100% secure.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              variants={staggerChildren}
            >
              <motion.button 
                className="bg-indigo-600 hover:bg-indigo-500 transition-all text-white font-semibold py-3 px-8 rounded-xl shadow-lg flex items-center justify-center gap-2"
                variants={fadeIn}
                whileHover={buttonHover}
                whileTap={{ scale: 0.95 }}
              >
                Get instant quote
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1.5,
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </motion.svg>
              </motion.button>
              <motion.button 
                className="bg-white text-gray-900 hover:bg-gray-100 transition-all font-semibold py-3 px-8 rounded-xl shadow-lg"
                variants={fadeIn}
                whileHover={buttonHover}
                whileTap={{ scale: 0.95 }}
              >
                Learn more
              </motion.button>
            </motion.div>
            
            {/* Trust badges */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6"
              variants={staggerChildren}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
            >
              {[
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
                  text: "100% Secure Transactions"
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />,
                  text: "Verified Authenticity"
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
                  text: "Fast Payouts"
                }
              ].map((badge, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3"
                  variants={fadeIn}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="p-2 rounded-full bg-indigo-900/50"
                    whileHover={{ 
                      backgroundColor: "rgba(79, 70, 229, 0.3)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-indigo-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      animate={{ rotate: [0, index % 2 === 0 ? 10 : -10, 0] }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 3,
                        delay: index * 0.5
                      }}
                    >
                      {badge.icon}
                    </motion.svg>
                  </motion.div>
                  <span className="text-gray-300 font-medium">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right image/feature section */}
          <motion.div 
            className="flex-1 w-full"
            variants={slideInFromRight}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700"
              whileHover={{ 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                borderColor: "rgba(99, 102, 241, 0.4)",
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="bg-indigo-600/10 p-8 rounded-xl border border-indigo-500/20 mb-4"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <motion.div 
                  className="flex flex-col gap-4"
                  variants={staggerChildren}
                >
                  {[
                    { software: "Adobe Creative Cloud", price: "$423" },
                    { software: "Microsoft 365", price: "$189" },
                    { software: "Autodesk Maya", price: "$567" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      className={`flex justify-between items-center ${index < 2 ? 'pb-4 border-b border-gray-700' : ''}`}
                      variants={priceReveal}
                      whileHover={{ 
                        backgroundColor: "rgba(79, 70, 229, 0.1)",
                        borderRadius: "0.5rem",
                        padding: "0.5rem",
                        transition: { duration: 0.2 }
                      }}
                    >
                      <span className="font-semibold text-gray-300">{item.software}</span>
                      <motion.span 
                        className="text-indigo-400 font-bold text-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 + (index * 0.3) }}
                      >
                        {item.price}
                      </motion.span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              <motion.div 
                className="text-center p-4 bg-indigo-600/20 rounded-lg"
                variants={fadeInUp}
              >
                <motion.p 
                  className="text-lg font-medium text-gray-300"
                >
                  Average customer earnings
                </motion.p>
                <motion.p 
                  className="text-3xl font-bold text-white mt-1"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ 
                    opacity: 1, 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    delay: 1.8,
                    duration: 0.8,
                    times: [0, 0.5, 1]
                  }}
                >
                  $350+
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;