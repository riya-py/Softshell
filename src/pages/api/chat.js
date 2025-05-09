import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// System prompt to guide the assistant's behavior
const systemPrompt = `
You are a helpful customer support assistant for a software license company.
Be concise, professional, and helpful. Answer questions about licenses, payments, refunds, and technical support.
If you don't know the answer, suggest contacting the support team directly.
`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, history } = req.body;
    
    // Format conversation history for OpenAI API
    const formattedMessages = [
      { role: 'system', content: systemPrompt },
      ...history, // Previous conversation history
      { role: 'user', content: message } // Current user message
    ];

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // You can use 'gpt-4' if you have access
      messages: formattedMessages,
      max_tokens: 300, // Adjust as needed
      temperature: 0.7, // Adjust as needed
    });

    // Extract and return the assistant's response
    const responseContent = completion.choices[0].message.content;
    
    return res.status(200).json({ content: responseContent });
  } catch (error) {
    console.error('OpenAI API error:', error);
    return res.status(500).json({ 
      error: 'Error processing your request', 
      details: error.message 
    });
  }
}