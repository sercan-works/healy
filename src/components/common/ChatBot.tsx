import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import OpenAI from 'openai';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState<Array<{text: string, isBot: boolean}>>([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    // Kullanıcı mesajını ekle
    setMessages(prev => [...prev, { text: input, isBot: false }]);
    
    try {
      const openai = new OpenAI({
        apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
    });

      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: input }]
      });

      const botResponse = completion.choices[0]?.message?.content || 'Üzgünüm, bir hata oluştu.';
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { text: 'Bir hata oluştu, lütfen tekrar deneyin.', isBot: true }]);
    }

    setInput('');
  };

  return isOpen ? (
    <div className="fixed bottom-24 right-5 w-[350px] h-[500px] bg-white rounded-xl shadow-2xl flex flex-col z-50 md:w-[400px] overflow-hidden">
      {/* Header */}
      <div className="bg-green-500 text-white p-4 flex justify-between items-center">
        <h3 className="font-semibold text-lg">Chat Bot</h3>
        <button 
          onClick={() => setIsOpen(false)}
          className="text-2xl hover:opacity-80"
        >
          ×
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
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  ) : null;
};

export default ChatBot;