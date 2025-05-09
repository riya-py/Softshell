// Mock version of the chat API for testing without an OpenAI API key

export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    try {
      const { message } = req.body;
      
      // Simulate API processing time
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock responses for common questions
      const mockResponses = {
        "How do I sell my license?": "To sell your license, go to your account dashboard, select the license you want to sell, and click on the 'Transfer License' option. Follow the instructions to complete the transfer.",
        "What payment methods do you accept?": "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for business accounts.",
        "How can I contact support?": "You can contact our support team by email at support@example.com or use the help center on our website. Our support hours are Monday to Friday, 9 AM to 6 PM EST.",
        "What is your refund policy?": "We offer a 30-day money-back guarantee on all purchases. If you're not satisfied with our product, you can request a full refund within 30 days of purchase."
      };
  
      // Check for exact match first
      if (mockResponses[message]) {
        return res.status(200).json({ content: mockResponses[message] });
      }
      
      // Check for partial matches
      const lowerMessage = message.toLowerCase();
      
      if (lowerMessage.includes("sell") || lowerMessage.includes("transfer") || lowerMessage.includes("license")) {
        return res.status(200).json({ content: mockResponses["How do I sell my license?"] });
      }
      
      if (lowerMessage.includes("payment") || lowerMessage.includes("pay") || lowerMessage.includes("credit card")) {
        return res.status(200).json({ content: mockResponses["What payment methods do you accept?"] });
      }
      
      if (lowerMessage.includes("contact") || lowerMessage.includes("support") || lowerMessage.includes("help")) {
        return res.status(200).json({ content: mockResponses["How can I contact support?"] });
      }
      
      if (lowerMessage.includes("refund") || lowerMessage.includes("money back") || lowerMessage.includes("return")) {
        return res.status(200).json({ content: mockResponses["What is your refund policy?"] });
      }
      
      // Default response
      return res.status(200).json({ 
        content: "I'm here to help! If you have questions about our products, licenses, or anything else, feel free to ask."
      });
      
    } catch (error) {
      console.error('Error in mock API:', error);
      return res.status(500).json({ 
        error: 'Error processing your request', 
        details: error.message 
      });
    }
  }