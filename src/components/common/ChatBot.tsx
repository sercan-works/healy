import React, { useState, useEffect, useRef } from 'react';
import { FaPaperPlane, FaTimes } from 'react-icons/fa';
import OpenAI from 'openai';

const suggestedMessages = [
  "I-Ching konusunda yardım eder misin?",

]

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState<Array<{text: string, isBot: boolean}>>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestion, setShowSuggestion] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, isBot: false }]);
    setIsLoading(true);
    
    try {
      const openai = new OpenAI({
        apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
      });

      // Yeni bir thread oluştur (eğer henüz yoksa)
      const thread = await openai.beta.threads.create();

      // Kullanıcı mesajını threade ekle
      await openai.beta.threads.messages.create(thread.id, {
        role: "user",
        content: input
      });

      // Asistanı çalıştır
      const run = await openai.beta.threads.runs.create(thread.id, {
        assistant_id: "asst_F4e0D2fq7uR5co6ER6bhpFJG", // Eğittiğiniz asistanın ID'si
      });

      // Cevabı bekle
      let response;
      while (true) {
        const runStatus = await openai.beta.threads.runs.retrieve(
          thread.id,
          run.id
        );
        
        if (runStatus.status === 'completed') {
          const messages = await openai.beta.threads.messages.list(thread.id);
          response = messages.data[0].content[0].text.value;
          break;
        }
        
        if (runStatus.status === 'failed') {
          throw new Error('Assistant failed to respond');
        }
        
        // Kısa bir bekleme
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      setMessages(prev => [...prev, { text: response, isBot: true }]);
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
        <h4 className="text-white text-sm">yapay zeka healy asistanınız...</h4>
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
        <div ref={messagesEndRef} />
      </div>
      {/* önerilen mesajlar */}
      <div className="p-4">
        {showSuggestion && (
          <button 
            onClick={() => {
              setInput("I-Ching konusunda yardım eder misin?");
              setShowSuggestion(false);
              handleSend();
            }}
            className="w-full text-left text-gray-500 text-sm bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            I-Ching konusunda yardım eder misin?
          </button>
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