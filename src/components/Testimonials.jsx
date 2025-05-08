import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Arjun Mehta",
    title: "CTO at DevCrate",
    quote:
      "Selling our unused licenses on SoftShell was a game changer. Seamless process and fast payouts!",
    avatar: "AM"
  },
  {
    name: "Priya Sharma",
    title: "Product Manager at FinNest",
    quote:
      "I was skeptical at first, but SoftShell delivered. Transparent, quick, and totally worth it.",
    avatar: "PS"
  },
  {
    name: "Kabir Anand",
    title: "Freelancer",
    quote:
      "Earned more than I expected by reselling software I no longer needed. Highly recommend SoftShell!",
    avatar: "KA"
  },
];

const Testimonials = () => {
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
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: i * 0.1
      }
    }),
    hover: {
      y: -10,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      borderColor: "rgba(99, 102, 241, 0.4)",
      transition: { duration: 0.3 }
    }
  };

  const quoteAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.3,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.2
      }
    }
  };

  const avatarAnimation = {
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
      transition: { duration: 0.2 }
    }
  };

  const linkAnimation = {
    hover: {
      x: 5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className="bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-800 dark:text-white py-20 px-6 md:px-16 relative">
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-0 dark:opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div 
          className="absolute top-10 right-10 w-64 h-64 rounded-full bg-indigo-200 dark:bg-indigo-600 blur-3xl"
          animate={{ 
            x: [0, -15, 0],
            y: [0, 10, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 12,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-purple-100 dark:bg-purple-700 blur-3xl"
          animate={{ 
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 15,
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
            Success Stories
          </motion.span>
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mt-4 mb-6 text-gray-900 dark:text-white"
            variants={fadeIn}
          >
            What Our <motion.span 
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
            >Clients Say</motion.span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            variants={fadeIn}
          >
            Don't just take our word for it. Here's what our clients have to say about their experience with SoftShell.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-200 dark:border-gray-700 relative"
              variants={cardAnimation}
              custom={i}
              whileHover="hover"
            >
              {/* Quotation mark */}
              <motion.div 
                className="absolute -top-5 -left-2 text-6xl text-indigo-300/40 dark:text-indigo-500/30 font-serif leading-none"
                variants={quoteAnimation}
              >
                &ldquo;
              </motion.div>
              
              <motion.p 
                className="text-gray-600 dark:text-gray-300 mb-6 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
              >
                "{t.quote}"
              </motion.p>
              
              <div className="flex items-center">
                {/* Avatar */}
                <motion.div 
                  className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-600 text-indigo-600 dark:text-white flex items-center justify-center font-medium mr-3"
                  variants={avatarAnimation}
                  whileHover="hover"
                >
                  {t.avatar}
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -5 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                >
                  <p className="font-semibold text-gray-900 dark:text-white">{t.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t.title}</p>
                </motion.div>
              </div>
              
              {/* Hover effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-indigo-200/20 to-purple-200/20 dark:from-indigo-600/5 dark:to-purple-600/5 opacity-0 rounded-xl"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
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
          <motion.a 
            href="#" 
            className="text-indigo-600 dark:text-indigo-300 hover:text-indigo-500 dark:hover:text-indigo-200 font-medium flex items-center justify-center gap-2 mx-auto w-fit"
            whileHover={linkAnimation}
          >
            See more customer stories
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              initial={{ x: 0 }}
              animate={{ x: [0, 3, 0] }}
              transition={{ 
                repeat: Infinity, 
                repeatDelay: 1.5,
                duration: 0.8 
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;