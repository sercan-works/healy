import React, { useState, useEffect } from 'react';
import { FaPaperPlane, FaTimes } from 'react-icons/fa';
import OpenAI from 'openai';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState<Array<{text: string, isBot: boolean}>>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, isBot: false }]);
    setIsLoading(true);
    
    try {
      const openai = new OpenAI({
        apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
      });

      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "user", content: input }
        ]
      });

      const botResponse = completion.choices[0]?.message?.content || 'Üzgünüm, bir hata oluştu.';
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { text: 'Bir hata oluştu, lütfen tekrar deneyin.', isBot: true }]);
    } finally {
      setIsLoading(false);
    }

    setInput('');
  };

  return isOpen ? (
    <div className="fixed inset-0 w-full h-full lg:inset-auto lg:right-4 lg:bottom-4 lg:w-[400px] lg:h-[600px] bg-white flex flex-col z-50 lg:rounded-xl lg:shadow-2xl">
      {/* Header */}
      <div className="bg-indigo-500 text-white p-4 flex justify-between items-center lg:rounded-t-xl">
        <h3 className="font-semibold text-lg text-white">Aura</h3>
        <h4 className="text-white text-sm">healy asistanınız...</h4>
        <button 
          onClick={() => setIsOpen(false)}
          className="text-2xl hover:opacity-80"
        >
          <FaTimes />
        </button>
      </div>
      
      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`max-w-[80%] mb-3 p-3 rounded-lg ${
              msg.isBot 
                ? 'bg-gray-100 mr-auto' 
                : 'bg-green-500 text-white ml-auto'
            }`}
          >
            {msg.text}
          </div>
        ))}
        {isLoading && (
          <div className="max-w-[80%] mb-3 p-3 rounded-lg bg-gray-100 mr-auto">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"></div>
              <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        )}
      </div>
      
      {/* Input */}
      <div className="border-t border-gray-200 p-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Mesajınızı yazın..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button 
          onClick={handleSend}
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  ) : null;
};

export default ChatBot;