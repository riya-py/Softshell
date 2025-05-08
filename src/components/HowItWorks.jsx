import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaExchangeAlt, FaMoneyBillWave } from "react-icons/fa";

const HowItWorks = () => {
    const steps = [
        {
            Icon: <FaCheckCircle className="text-4xl text-blue-500 dark:text-indigo-400 mb-4" />,
            title: "Submit your license",
            description: "Upload the details of your unused software license securely through our platform. We ensure your data is protected and confidential.",
        },
        {
            Icon: <FaExchangeAlt className="text-4xl text-blue-500 dark:text-indigo-400 mb-4" />,
            title: "Get Evaluated",
            description: "Our team of experts will evaluate your license and provide you with a fair market value based on current demand and supply.",
        },
        {
            Icon: <FaMoneyBillWave className="text-4xl text-blue-500 dark:text-indigo-400 mb-4" />,
            title: "Receive Payment",
            description: "Once you accept the offer, we will process the payment quickly and securely. You can choose from various payment methods.",
        },
    ];

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

    const stepNumberAnimation = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: 0.5
            }
        }
    };

    return (
        <section className="bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-800 dark:text-white py-20 px-6 md:px-16 relative">
            {/* Background decorative elements */}
            <motion.div 
                className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 1.5 }}
            >
                <motion.div 
                    className="absolute top-10 right-10 w-64 h-64 rounded-full bg-blue-300 dark:bg-indigo-600 blur-3xl"
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
                    className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-purple-200 dark:bg-purple-700 blur-3xl"
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
                        className="bg-blue-100 dark:bg-indigo-900/50 text-blue-700 dark:text-indigo-300 px-4 py-1 rounded-full text-sm font-medium inline-block"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        Simple 3-Step Process
                    </motion.span>
                    <motion.h2 
                        className="text-3xl sm:text-4xl font-bold mt-4 text-gray-900 dark:text-white"
                        variants={fadeIn}
                    >
                        How it <motion.span 
                            className="text-blue-600 dark:text-indigo-400"
                            animate={{ 
                                color: ["#3b82f6", "#60a5fa", "#3b82f6"],
                                dark: { color: ["#818cf8", "#a5b4fc", "#818cf8"] }
                            }}
                            transition={{ 
                                duration: 3, 
                                repeat: Infinity,
                                ease: "easeInOut" 
                            }}
                        >Works</motion.span>
                    </motion.h2>
                    <motion.p 
                        className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                        variants={fadeIn}
                    >
                        Converting your unused software licenses into cash has never been easier. Follow these three simple steps to get started.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, i) => (
                        <motion.div 
                            key={i} 
                            className="relative"
                            variants={fadeIn}
                            custom={i}
                            viewport={{ once: true }}
                        > 
                            {/* Step number indicator */}
                            <motion.div 
                                className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-blue-500 dark:bg-indigo-500 text-white flex items-center justify-center font-bold z-10"
                                variants={stepNumberAnimation}
                                whileHover={{ scale: 1.1 }}
                            >
                                {i + 1}
                            </motion.div>
                            
                            {/* Step card */}
                            <motion.div 
                                className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-200 dark:border-gray-700 h-full flex flex-col items-center text-center shadow-sm"
                                variants={cardAnimation}
                                whileHover="hover"
                            >
                                <motion.div 
                                    className="p-4 bg-blue-50 dark:bg-indigo-900/50 rounded-full mb-6"
                                    variants={iconAnimation}
                                    whileHover="hover"
                                >
                                    {step.Icon}
                                </motion.div>
                                <motion.h3 
                                    className="text-xl font-semibold mb-3 text-gray-900 dark:text-white"
                                >
                                    {step.title}
                                </motion.h3>
                                <motion.p 
                                    className="text-gray-600 dark:text-gray-300"
                                >
                                    {step.description}
                                </motion.p>
                                
                                {/* Hover effect */}
                                <motion.div 
                                    className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-indigo-600/5 dark:to-purple-600/5 opacity-0 rounded-xl"
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                ></motion.div>
                            </motion.div>
                            
                            {/* Connector line (hidden on mobile) */}
                            {i < steps.length - 1 && (
                                <motion.div 
                                    className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-300 dark:bg-indigo-400/30"
                                    initial={{ scaleX: 0, originX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        delay: 0.5 + (i * 0.3), 
                                        duration: 0.5 
                                    }}
                                >
                                    <motion.div 
                                        className="absolute right-0 -top-1 w-0 h-0 border-t-4 border-r-0 border-b-4 border-l-8 border-t-transparent border-b-transparent border-l-blue-300 dark:border-l-indigo-400/30"
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
                        className="bg-blue-600 hover:bg-blue-500 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white font-semibold py-3 px-8 rounded-xl shadow-md transition-all"
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
                        Get Started Now
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HowItWorks;