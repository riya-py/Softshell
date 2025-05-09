import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaPaperPlane, FaTimes, FaTrash } from 'react-icons/fa';
import { saveChatHistory, loadChatHistory, clearChatHistory, formatMessageDate } from '../utils/chatUtils';
import config from '../config'; // Import configuration values

const ChatWidget = () => {
  // Use configuration values from config.js
  const [open, setOpen] = useState(config.behavior.initiallyOpen);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Get quick questions from config
  const quickQuestions = config.quickQuestions;
  
  // Load chat history from localStorage on component mount
  useEffect(() => {
    const savedMessages = loadChatHistory();
    if (savedMessages && savedMessages.length > 0) {
      setMessages(savedMessages);
    }
  }, []);

  // Scroll to bottom when messages update
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle sending messages
  const handleSendMessage = async (content) => {
    const userMessage = { 
      role: 'user', 
      content: content || inputValue,
      timestamp: new Date().toISOString()
    };
    
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    saveChatHistory(updatedMessages);
    
    setInputValue('');
    setIsLoading(true);

    try {
      // Using the API endpoint from config
      const response = await fetch(config.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: content || inputValue,
          history: messages 
        }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const result = await response.json();
      
      const assistantMessage = { 
        role: 'assistant', 
        content: result.content || "I'm sorry, I couldn't process that request. Please try again.",
        timestamp: new Date().toISOString()
      };
      
      const newMessages = [...updatedMessages, assistantMessage];
      setMessages(newMessages);
      saveChatHistory(newMessages);
    } catch (error) {
      console.error('Error calling AI API:', error);
      const errorMessage = { 
        role: 'assistant', 
        content: "I'm sorry, I'm having trouble connecting right now. Please try again later.",
        timestamp: new Date().toISOString()
      };
      
      const newMessages = [...updatedMessages, errorMessage];
      setMessages(newMessages);
      saveChatHistory(newMessages);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      handleSendMessage();
    }
  };

  // Handle quick question click
  const handleQuickQuestionClick = (question) => {
    handleSendMessage(question);
  };
  
  // Clear chat history
  const handleClearChat = () => {
    setMessages([]);
    clearChatHistory();
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.button
        onClick={() => setOpen(!open)}
        className="bg-indigo-600 dark:bg-indigo-800
hover:bg-indigo-700 dark:hover:bg-indigo-900 text-white p-4 rounded-full shadow-lg transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaComments size={20} />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl mt-4 w-80 sm:w-96 overflow-hidden"
          >
            {/* Chat header */}
            <div className={`bg-${config.appearance.primaryColor}-600 dark:bg-gray-900 text-white p-4 flex justify-between items-center`}>
              <h3 className="font-medium">Customer Support</h3>
              <div className="flex items-center space-x-2">
                {messages.length > 0 && (
                  <button
                    onClick={handleClearChat}
                    title="Clear chat history"
                    className="p-1 rounded-full hover:bg-opacity-30 hover:bg-white transition-colors"
                  >
                    <FaTrash size={14} />
                  </button>
                )}
                <button
                  onClick={() => setOpen(false)}
                  title="Close chat"
                  className="p-1 rounded-full hover:bg-opacity-30 hover:bg-white transition-colors"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Chat messages */}
            <div className="bg-gray-50 dark:bg-gray-900 h-80 overflow-y-auto p-4">
              {messages.length === 0 ? (
                <div className="text-center py-8">
                  <h4 className="font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Welcome to our support chat!
                  </h4>
                  <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                    How can we help you today?
                  </p>
                  <div className="space-y-2">
                    {quickQuestions.map((question, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleQuickQuestionClick(question)}
                        className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-white text-sm py-2 px-3 rounded-full border border-opacity-50 border-gray-300 dark:border-gray-700 shadow-sm w-full text-left"
                      >
                        {question}
                      </motion.button>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`mb-3 flex ${
                        message.role === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-3/4 rounded-lg px-4 py-2 ${
                          message.role === 'user'
                            ? `bg-${config.appearance.primaryColor}-600 dark:bg-${config.appearance.primaryColor}-700 text-white`
                            : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-600'
                        }`}
                      >
                        <div>
                          {message.content}
                          {message.timestamp && (
                            <div className="text-xs opacity-70 mt-1 text-right">
                              {formatMessageDate(message.timestamp)}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start mb-3">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="max-w-3/4 rounded-lg px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-600"
                      >
                        <div className="flex items-center space-x-1">
                          <motion.span
                            animate={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 1, delay: 0 }}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                          />
                          <motion.span
                            animate={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                          />
                          <motion.span
                            animate={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                          />
                        </div>
                      </motion.div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            {/* Chat input */}
            <form onSubmit={handleSubmit} className="p-3 border-t flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className={`flex-1 py-2 px-3 rounded-l-lg focus:outline-none bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white focus:ring-1 focus:ring-${config.appearance.primaryColor}-500`}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className={`bg-${config.appearance.primaryColor}-600 dark:bg-${config.appearance.primaryColor}-700 hover:bg-${config.appearance.primaryColor}-700 dark:hover:bg-${config.appearance.primaryColor}-800 text-white p-2 rounded-r-lg disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <FaPaperPlane />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatWidget;