'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { agents, getRandomAgent } from '@/lib/healthcare-data';
import { usePathname } from 'next/navigation';

interface Message {
  id: string;
  type: 'bot' | 'user';
  text: string;
}

interface ConversationFlow {
  id: string;
  message: string;
  options?: Array<{
    text: string;
    nextFlowId: string;
  }>;
  isEmail?: boolean;
}

const ExcellenceAgent = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentAgent, setCurrentAgent] = useState(agents[0]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentFlowId, setCurrentFlowId] = useState('greeting');
  const [userEmail, setUserEmail] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Don't show chat on contact page
  if (pathname === '/contact') {
    return null;
  }

  const conversationFlows: { [key: string]: ConversationFlow } = {
    greeting: {
      id: 'greeting',
      message: "Hey — I'm Sarah from Dr. Capital VA. Are you looking for VA support for your practice, or looking to join our team?",
      options: [
        { text: "Looking for VA support", nextFlowId: 'practice_type' },
        { text: "Looking to join the team", nextFlowId: 'applicant' },
        { text: "Just browsing", nextFlowId: 'browsing' },
      ],
    },
    practice_type: {
      id: 'practice_type',
      message: "What type of practice do you run?",
      options: [
        { text: "Primary Care", nextFlowId: 'primary_care_response' },
        { text: "Dental", nextFlowId: 'dental_response' },
        { text: "Mental Health", nextFlowId: 'mental_health_response' },
        { text: "Cardiology", nextFlowId: 'cardiology_response' },
        { text: "Multi-Specialty", nextFlowId: 'multi_response' },
        { text: "Other", nextFlowId: 'other_response' },
      ],
    },
    primary_care_response: {
      id: 'primary_care_response',
      message:
        'Perfect. Primary care VAs handle annual wellness visits, chronic care management, prescription refills, and lab result follow-ups. We manage all the admin so your clinical team focuses on patients. Want to set up a quick 15-minute call? We\'ll match you within 48 hours.',
      options: [{ text: "Yes, book a call", nextFlowId: 'email_capture' }],
    },
    dental_response: {
      id: 'dental_response',
      message:
        'Great. Dental VAs handle hygiene scheduling, treatment plan follow-up, insurance pre-auth, and recall management. We become your operational backbone. Ready to book a 15-minute strategy call?',
      options: [{ text: "Yes, book a call", nextFlowId: 'email_capture' }],
    },
    mental_health_response: {
      id: 'mental_health_response',
      message:
        'Excellent. Mental health VAs handle session scheduling, intake assessments, insurance verification, and care coordination. We\'ve built expertise in HIPAA compliance for behavioral health. Book a call?',
      options: [{ text: "Yes, book a call", nextFlowId: 'email_capture' }],
    },
    cardiology_response: {
      id: 'cardiology_response',
      message:
        'Perfect. Our cardiology VAs manage stress test scheduling, echocardiogram coordination, and medication follow-up. We understand the clinical workflow. Ready to talk?',
      options: [{ text: "Yes, book a call", nextFlowId: 'email_capture' }],
    },
    multi_response: {
      id: 'multi_response',
      message:
        'Multi-location support is our specialty. We handle centralized scheduling, standardized intake, cross-location reporting, and consistent compliance. Let\'s book a call to discuss your specific setup.',
      options: [{ text: "Yes, book a call", nextFlowId: 'email_capture' }],
    },
    other_response: {
      id: 'other_response',
      message:
        "No problem. We support 8+ specialties and can quickly train on your specific needs. Let's discuss. Ready to book a 15-minute call?",
      options: [{ text: "Yes, book a call", nextFlowId: 'email_capture' }],
    },
    email_capture: {
      id: 'email_capture',
      message: "What's your email? We'll send you a calendar link and follow up within 24 hours.",
      isEmail: true,
    },
    email_submitted: {
      id: 'email_submitted',
      message:
        "Perfect! We'll be in touch within 24 hours with your personalized calendar link. In the meantime, check out our resources on HIPAA compliance and pricing at drcapitalva.com.",
      options: [{ text: "Thanks", nextFlowId: 'end' }],
    },
    applicant: {
      id: 'applicant',
      message:
        "Awesome! We're always looking for experienced VAs. What's your email? We'll send you our application and requirements.",
      isEmail: true,
    },
    applicant_submitted: {
      id: 'applicant_submitted',
      message:
        "Excellent! We'll send you the full application details and our hiring process. We're selective because we only hire the top 3% of applicants.",
      options: [{ text: "Great", nextFlowId: 'end' }],
    },
    browsing: {
      id: 'browsing',
      message:
        "No problem! Feel free to explore our site. Check out /pricing for details, /how-it-works for the process, or /compliance/hipaa for our standards. Any questions, I'm here.",
      options: [{ text: "Thanks", nextFlowId: 'end' }],
    },
    end: {
      id: 'end',
      message: "Talk soon! 👋",
      options: [],
    },
  };

  // Random agent on mount
  useEffect(() => {
    setCurrentAgent(getRandomAgent());
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage(conversationFlows.greeting.message);
    }
  }, [isOpen]);

  const addBotMessage = (text: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { id: Math.random().toString(), type: 'bot', text }]);
      setIsTyping(false);
    }, 500);
  };

  const addUserMessage = (text: string) => {
    setMessages((prev) => [...prev, { id: Math.random().toString(), type: 'user', text }]);
  };

  const handleOptionClick = (nextFlowId: string) => {
    const flow = conversationFlows[currentFlowId];
    const selectedOption = flow.options?.find((opt) => opt.nextFlowId === nextFlowId);
    if (selectedOption) {
      addUserMessage(selectedOption.text);
      setCurrentFlowId(nextFlowId);
      const nextFlow = conversationFlows[nextFlowId];
      if (nextFlow) {
        addBotMessage(nextFlow.message);
      }
    }
  };

  const handleEmailSubmit = (email: string) => {
    addUserMessage(email);
    setUserEmail(email);

    // Send to backend
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        source: 'chat-widget',
        agent: currentAgent.name,
        type: currentFlowId === 'applicant' ? 'applicant' : 'prospect',
      }),
    }).catch((err) => console.error('Chat submission error:', err));

    const nextFlowId =
      currentFlowId === 'email_capture' ? 'email_submitted' : currentFlowId === 'applicant' ? 'applicant_submitted' : 'end';
    setCurrentFlowId(nextFlowId);
    const nextFlow = conversationFlows[nextFlowId];
    if (nextFlow) {
      addBotMessage(nextFlow.message);
    }
  };

  const currentFlow = conversationFlows[currentFlowId];

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-teal-deep hover:bg-teal-mid text-white rounded-full flex items-center justify-center shadow-lg transition-all"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-24px)] bg-white rounded-2xl shadow-2xl flex flex-col h-96 overflow-hidden">
          {/* Header */}
          <div className="bg-teal-deep text-white p-4 flex items-center gap-3">
            {currentAgent.image && (
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image src={currentAgent.image} alt={currentAgent.name} fill className="object-cover" />
              </div>
            )}
            <div className="flex-1">
              <h3 className="font-semibold text-sm">{currentAgent.name}</h3>
              <p className="text-xs text-teal-100">Dr. Capital VA</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:opacity-70 transition"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-warm-white">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                    msg.type === 'user' ? 'bg-teal-deep text-white' : 'bg-white text-text-primary border border-gray-200'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-text-primary border border-gray-200 px-4 py-2 rounded-lg">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input/Options */}
          <div className="p-4 border-t bg-white">
            {currentFlow?.isEmail ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const input = e.currentTarget.querySelector('input') as HTMLInputElement;
                  if (input.value) {
                    handleEmailSubmit(input.value);
                    input.value = '';
                  }
                }}
                className="flex gap-2"
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-teal-deep"
                  autoFocus
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-teal-deep text-white rounded-lg text-sm font-semibold hover:bg-teal-mid transition"
                >
                  Send
                </button>
              </form>
            ) : (
              <div className="space-y-2">
                {currentFlow?.options?.map((option) => (
                  <button
                    key={option.nextFlowId}
                    onClick={() => handleOptionClick(option.nextFlowId)}
                    className="w-full text-left px-3 py-2 text-sm text-teal-deep border border-teal-deep rounded-lg hover:bg-warm-cream transition"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ExcellenceAgent;
