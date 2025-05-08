import { useState } from 'react';
import { FaComments } from 'react-icons/fa';

const ChatWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition"
      >
        <FaComments />
      </button>
      {open && (
        <div className="bg-white p-4 rounded-lg shadow-xl w-72 mt-2">
          <p className="text-sm text-gray-800 mb-2">Hi! 👋 How can we help you today?</p>
          <input className="w-full p-2 border rounded text-sm" placeholder="Type a message..." />
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
