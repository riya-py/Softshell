// Utility functions for the chat widget

/**
 * Save chat history to localStorage
 * @param {Array} messages - Array of message objects
 */
export const saveChatHistory = (messages) => {
    try {
      // Limit the number of messages saved to prevent localStorage overflow
      const limitedMessages = messages.slice(-50);
      localStorage.setItem('chatHistory', JSON.stringify(limitedMessages));
    } catch (error) {
      console.error('Error saving chat history:', error);
    }
  };
  
  /**
   * Load chat history from localStorage
   * @returns {Array} - Array of message objects or empty array if none found
   */
  export const loadChatHistory = () => {
    try {
      const savedHistory = localStorage.getItem('chatHistory');
      return savedHistory ? JSON.parse(savedHistory) : [];
    } catch (error) {
      console.error('Error loading chat history:', error);
      return [];
    }
  };
  
  /**
   * Clear chat history from localStorage
   */
  export const clearChatHistory = () => {
    try {
      localStorage.removeItem('chatHistory');
    } catch (error) {
      console.error('Error clearing chat history:', error);
    }
  };
  
  /**
   * Format date to display in chat messages
   * @param {Date} date - Date object
   * @returns {string} - Formatted date string
   */
  export const formatMessageDate = (date) => {
    const now = new Date();
    const messageDate = new Date(date);
    
    // If message is from today, show time only
    if (messageDate.toDateString() === now.toDateString()) {
      return messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    
    // Otherwise show date and time
    return messageDate.toLocaleDateString([], { month: 'short', day: 'numeric' }) + 
      ' ' + messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  /**
   * Sanitize message content to prevent XSS attacks
   * @param {string} content - Raw message content
   * @returns {string} - Sanitized message content
   */
  export const sanitizeMessage = (content) => {
    const div = document.createElement('div');
    div.textContent = content;
    return div.innerHTML;
  };