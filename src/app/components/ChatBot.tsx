import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    text: "Hi! I'm Zynbot, your integration assistant. How can I help you today?",
    sender: 'bot',
    timestamp: new Date(),
  },
];

const BOT_RESPONSES: { [key: string]: string } = {
  pricing: 'We don`t have a public pricing yet, please contact us at info@z-ninth.com',
  features: 'Zyntegrate offers workflow automation, unified data layer, real-time sync, enterprise security, analytics & insights, and cloud & legacy support. Which feature interests you most?',
  demo: "I'd be happy to schedule a demo for you! Please click the 'Schedule Demo' button at the top of the page, or reach out to sales@zyntegrate.com.",
  integration: 'We support 50+ pre-built connectors including Salesforce, SAP, AWS, Azure, Google Cloud, and more.',
  support: 'We offer 24/7 support. Enterprise plans include a dedicated account manager.',
  trial: 'Yes! We offer a 14-day free trial with no credit card required.',
  default: "That's a great question! For more details, please check our docs or contact our sales team.",
};

function getBotResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();

  if (message.includes('price') || message.includes('pricing') || message.includes('cost'))
    return BOT_RESPONSES.pricing;

  if (message.includes('feature') || message.includes('capability'))
    return BOT_RESPONSES.features;

  if (message.includes('demo'))
    return BOT_RESPONSES.demo;

  if (message.includes('integrate') || message.includes('connector') || message.includes('api'))
    return BOT_RESPONSES.integration;

  if (message.includes('support') || message.includes('help'))
    return BOT_RESPONSES.support;

  if (message.includes('trial') || message.includes('free'))
    return BOT_RESPONSES.trial;

  if (message.includes('hello') || message.includes('hi') || message.includes('hey'))
    return 'Hello! How can I assist you with Zyntegrate today?';

  return BOT_RESPONSES.default;
}

export function ChatBot() {

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () =>
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => scrollToBottom(), [messages]);

  const handleSendMessage = () => {

    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(userMessage.text),
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);

    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-brand-600 to-brand-500 text-white rounded-full shadow-2xl shadow-brand-500/40 flex items-center justify-center hover:scale-105 transition-transform"
          >
            <Sparkles className="w-6 h-6 text-white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-3rem)] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-brand-100"
          >

            {/* Header */}
            <div className="bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-4 flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">Zynbot</h3>
                  <p className="text-sm text-brand-100">
                    Ask me anything about Zyntegrate!
                  </p>
                </div>

              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-white via-brand-50 to-white">

              {messages.map((message) => (

                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${
                    message.sender === 'user'
                      ? 'flex-row-reverse'
                      : 'flex-row'
                  }`}
                >

                  {message.sender === 'bot' && (
                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-brand-600 to-brand-500">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                  )}

                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                      message.sender === 'bot'
                        ? 'bg-white border border-brand-100 text-brand-900'
                        : 'bg-gradient-to-r from-brand-600 to-brand-500 text-white'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">
                      {message.text}
                    </p>
                  </div>

                </motion.div>
              ))}

              {/* Typing */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3"
                >

                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-600 to-brand-500 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>

                  <div className="bg-white border border-brand-100 rounded-2xl px-4 py-3">

                    <div className="flex gap-1">

                      {[0, 0.2, 0.4].map((delay, i) => (
                        <motion.div
                          key={i}
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay,
                          }}
                          className="w-2 h-2 bg-brand-400 rounded-full"
                        />
                      ))}

                    </div>

                  </div>

                </motion.div>
              )}

              <div ref={messagesEndRef} />

            </div>

            {/* Input */}
            <div className="border-t border-brand-100 p-4 bg-white">

              <div className="flex gap-2">

                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) =>
                    setInputValue(e.target.value)
                  }
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 border border-brand-200 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                />

                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="w-12 h-12 bg-gradient-to-r from-brand-600 to-brand-500 rounded-full flex items-center justify-center hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-brand-500/30"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>

              </div>

              <p className="text-xs text-brand-700 mt-2 text-center">
                Powered by Zyntegrate AI
              </p>

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}