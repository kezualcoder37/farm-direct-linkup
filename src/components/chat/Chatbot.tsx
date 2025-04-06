import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, CornerDownLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Message {
  id: number;
  type: 'user' | 'bot';
  text: string;
  timestamp: string;
}

const initialMessages: Message[] = [
  {
    id: 1,
    type: 'bot',
    text: "Hello! I'm AgroBot. How can I help you today? You can ask me about crops, farming practices, or navigating the AgroBridge platform.",
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }
];

// Function to format current time
const getCurrentTime = () => {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Mock responses for demo purposes
  const mockResponses: Record<string, string> = {
    'hello': 'Hello there! How can I assist you today?',
    'hi': 'Hi! What can I help you with?',
    'crop': 'We have a variety of crops available on our marketplace. You can browse them by visiting the Marketplace section.',
    'price': 'Prices vary based on crop type, quality, and season. You can check current prices on individual product pages.',
    'organic': 'Organic crops are grown without synthetic pesticides or fertilizers. Look for the organic badge on our product listings.',
    'payment': 'We support various payment methods including UPI, net banking, and card payments.',
    'delivery': 'Delivery options depend on your location and order size. Most orders are delivered within 2-3 business days.',
    'farmer': 'We work with verified farmers from across India. You can view farmer profiles on each product page.',
    'contact': 'You can reach our support team at support@agrobridge.com or call us at +91 1800-123-4567.',
    'help': 'I can help with information about crops, ordering, pricing, and our platform features. What specific information do you need?'
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      text: input,
      timestamp: getCurrentTime()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Simulate bot typing
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      
      // Generate bot response
      let botResponse = "I'm sorry, I don't have information on that topic yet. Please try asking something about crops, organic farming, or how to use our platform.";
      
      // Check for keywords in the input
      const lowercaseInput = input.toLowerCase();
      for (const [keyword, response] of Object.entries(mockResponses)) {
        if (lowercaseInput.includes(keyword)) {
          botResponse = response;
          break;
        }
      }
      
      const botMessage: Message = {
        id: messages.length + 2,
        type: 'bot',
        text: botResponse,
        timestamp: getCurrentTime()
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 1500);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat bubble button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-agro-primary hover:bg-agro-dark shadow-lg flex items-center justify-center"
        >
          <MessageCircle className="text-white" size={24} />
        </Button>
      )}
      
      {/* Chat window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-[350px] sm:w-[380px] max-h-[500px] flex flex-col overflow-hidden border border-gray-200">
          {/* Chat header */}
          <div className="bg-agro-primary text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
              <Avatar className="h-8 w-8 mr-2 bg-white text-agro-primary">
                <span>A</span>
              </Avatar>
              <div>
                <h3 className="font-medium">AgroBot</h3>
                <div className="flex items-center text-xs">
                  <span className="h-2 w-2 bg-green-400 rounded-full mr-1"></span>
                  <span>Online</span>
                </div>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-agro-dark rounded-full h-8 w-8 p-0"
            >
              <X size={18} />
            </Button>
          </div>
          
          {/* Chat messages */}
          <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === 'user' 
                        ? 'bg-agro-primary text-white rounded-br-none' 
                        : 'bg-white border border-gray-200 rounded-bl-none'
                    }`}
                  >
                    <div className="text-sm">{message.text}</div>
                    <div 
                      className={`text-xs mt-1 ${
                        message.type === 'user' ? 'text-white/80' : 'text-gray-500'
                      }`}
                    >
                      {message.timestamp}
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-lg border border-gray-200 rounded-bl-none">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          {/* Quick replies */}
          <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 overflow-x-auto flex space-x-2 scrollbar-thin scrollbar-thumb-gray-200">
            <Badge variant="outline" className="cursor-pointer whitespace-nowrap hover:bg-gray-100" onClick={() => setInput("Tell me about organic crops")}>Organic crops</Badge>
            <Badge variant="outline" className="cursor-pointer whitespace-nowrap hover:bg-gray-100" onClick={() => setInput("How does payment work?")}>Payment methods</Badge>
            <Badge variant="outline" className="cursor-pointer whitespace-nowrap hover:bg-gray-100" onClick={() => setInput("Contact support")}>Contact support</Badge>
            <Badge variant="outline" className="cursor-pointer whitespace-nowrap hover:bg-gray-100" onClick={() => setInput("Delivery information")}>Delivery info</Badge>
          </div>
          
          {/* Chat input */}
          <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-gray-200 flex items-center">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-grow"
              autoFocus
            />
            <Button 
              type="submit" 
              disabled={!input.trim()}
              className="ml-2 bg-agro-primary hover:bg-agro-dark h-10 w-10 p-0"
            >
              <Send size={18} />
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
