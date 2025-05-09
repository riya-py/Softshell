// Configuration for the chat widget

const config = {
    // API endpoint to use for chat
    // Options:
    // - '/api/chat' (Direct OpenAI implementation)
    // - '/api/chat-langchain' (Langchain implementation)
    // - '/api/chat-mock' (Mock implementation without API key)
    apiEndpoint: '/api/chat',
    
    // Quick questions to show in the widget
    quickQuestions: [
      "How do I sell my license?",
      "What payment methods do you accept?",
      "How can I contact support?",
      "What is your refund policy?"
    ],
    
    // Visual customization
    appearance: {
      primaryColor: 'indigo',
      darkMode: true, // Set to false to disable dark mode support
      animationsEnabled: true,
    },
    
    // Widget behavior
    behavior: {
      initiallyOpen: false,
      messageHistoryLimit: 50,
    }
  };
  
  export default config;