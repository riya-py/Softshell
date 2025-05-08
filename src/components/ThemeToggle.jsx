import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');
  
  // Initialize theme on component mount
  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    
    // Check system preference if no saved preference
    if (!savedTheme) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
      return;
    }
    
    setTheme(savedTheme);
  }, []);
  
  // Apply theme changes
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.button 
      onClick={toggleTheme}
      className="p-2 rounded-full flex items-center space-x-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="relative w-10 h-6 bg-gray-200 dark:bg-gray-700 rounded-full"
      >
        <motion.div
          initial={false}
          animate={{ 
            x: theme === 'dark' ? 16 : 0,
            backgroundColor: theme === 'dark' ? '#6366F1' : '#60A5FA' 
          }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="absolute w-6 h-6 rounded-full shadow-sm flex items-center justify-center top-0"
        >
          {theme === 'dark' ? 
            <span className="text-xs">🌙</span> : 
            <span className="text-xs">☀️</span>
          }
        </motion.div>
      </motion.div>
      <span className="text-sm font-medium hidden sm:block">
        {theme === 'dark' ? 'Dark' : 'Light'}
      </span>
    </motion.button>
  );
}