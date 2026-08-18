import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, CornerDownRight, RefreshCw, Sparkles, Image as ImageIcon } from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'agent';
  text: string;
  timestamp: string;
  thoughts?: string[];
  toolsCalled?: { name: string; args: string; result: string }[];
  attachment?: string;
}

interface SamplePrompt {
  label: string;
  text: string;
  reply: string;
  thoughts: string[];
  tools: { name: string; args: string; result: string }[];
  response: string;
  attachment?: string;
}

const AgentDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'msg-1',
      sender: 'agent',
      text: "Hi, I'm ORI. I'm an AI agent configured with knowledge, instructions, and connected tools. Choose a scenario below to see how different ORI agents can work.",
      timestamp: 'Just now',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const samplePrompts: SamplePrompt[] = [
    {
      label: '📄 Search Knowledge',
      text: 'Can you find the key takeaways from the Q3 Strategy Report in my connected Google Drive?',
      reply: 'Querying connected Google Drive knowledge base for the Q3 Strategy Report.',
      thoughts: [
        'Recognized intent: document_search',
        'Querying Knowledge Base (Google Drive integration)',
        'Extracting top semantic matches from "Q3_Strategy_Report.pdf"',
        'Synthesizing concise bullet points adhering to configured summary instructions',
      ],
      tools: [
        {
          name: 'KnowledgeBase.search',
          args: '{"source": "Google Drive", "query": "Q3 Strategy Report key takeaways"}',
          result: '{"matches": 3, "top_document": "Q3_Strategy_Report.pdf", "confidence": 0.98}',
        },
      ],
      response: 'Based on the Q3 Strategy Report retrieved from your connected Google Drive, here are the key takeaways:\n\n• Expansion: Core initiatives are on track with a 24% increase in user adoption across all regions.\n• Priorities: Accelerate tool integrations and rollout automated scheduling workflows.\n• Efficiency: Team operational overhead was reduced by 35% following agent deployment.',
    },
    {
      label: '📅 Schedule a Meeting',
      text: 'Find an available time tomorrow afternoon and create a 30-min strategy review with Sarah.',
      reply: 'Checking your Google Calendar availability for tomorrow afternoon.',
      thoughts: [
        'Recognized intent: schedule_event',
        'Extracting entities: date="tomorrow", time_window="afternoon", duration=30, attendee="Sarah"',
        'Invoking GoogleCalendarAPI.checkAvailability({ date: "tomorrow", window: "13:00-17:00" })',
        'Identified open slot at 2:30 PM',
        'Invoking GoogleCalendarAPI.createEvent({ title: "Strategy Review with Sarah", start: "14:30", duration: 30 })',
      ],
      tools: [
        {
          name: 'GoogleCalendarAPI.checkAvailability',
          args: '{"date": "2026-08-18", "window": "afternoon"}',
          result: '{"available_slots": ["14:30-15:00", "16:00-16:30"]}',
        },
        {
          name: 'GoogleCalendarAPI.createEvent',
          args: '{"summary": "Strategy Review with Sarah", "start": "2026-08-18T14:30:00", "attendees": ["sarah@company.com"]}',
          result: '{"status": "confirmed", "event_id": "cal_evt_9812", "htmlLink": "https://calendar.google.com/event?id=9812"}',
        },
      ],
      response: "I checked your Google Calendar and found an open slot tomorrow afternoon. I have scheduled the 'Strategy Review with Sarah' for tomorrow at 2:30 PM - 3:00 PM and sent calendar invites to both participants.",
    },
    {
      label: '📦 Check an Order',
      text: 'Check the status of order #1009.',
      reply: 'Looking up order #1009 in Shopify.',
      thoughts: [
        'Recognized intent: order_lookup',
        'Extracting entities: order_id="1009"',
        'Invoking ShopifyAPI.getOrderDetails({ orderId: "1009" })',
        'Verifying delivery estimate and carrier tracking info',
      ],
      tools: [
        {
          name: 'ShopifyAPI.getOrderDetails',
          args: '{"orderId": "1009"}',
          result: '{"id": "1009", "status": "In Transit", "carrier": "FedEx", "tracking_no": "94001118992", "eta": "Aug 19, 2026"}',
        },
      ],
      response: 'I looked up order #1009 in your Shopify store. The order is currently in transit with FedEx (Tracking #94001118992) and is estimated to be delivered on Wednesday, August 19. All tracking updates are synchronized.',
    },
    {
      label: '👥 Find CRM Contact',
      text: "Find this contact's recent notes and status in HubSpot CRM: Alex Rivera.",
      reply: 'Searching HubSpot CRM for contact Alex Rivera.',
      thoughts: [
        'Recognized intent: crm_lookup',
        'Extracting contact: name="Alex Rivera"',
        'Invoking HubSpotAPI.getContact({ name: "Alex Rivera" })',
        'Formatting recent lifecycle stage and activity logs',
      ],
      tools: [
        {
          name: 'HubSpotAPI.getContact',
          args: '{"query": "Alex Rivera"}',
          result: '{"id": "hs_44921", "name": "Alex Rivera", "stage": "Qualified Lead", "last_activity": "Call logged Aug 15", "owner": "Sales Team"}',
        },
      ],
      response: "I retrieved Alex Rivera's record from HubSpot CRM:\n\n• Lifecycle Stage: Qualified Lead\n• Account Owner: Sales Team\n• Recent Activity: Discovery call logged on August 15 with interest in multi-agent workflows\n• Next Action: Follow-up demo scheduled for next week.",
    },
  ];

  const handleSendMessage = (textToSend: string, customProps?: Partial<Message>) => {
    if (!textToSend.trim()) return;

    const userMsg: Message = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      attachment: customProps?.attachment,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setSelectedImage(null);
    setIsTyping(true);

    // Match simulated response
    setTimeout(() => {
      const match = samplePrompts.find((p) => textToSend.includes(p.text) || p.text.includes(textToSend));
      
      const agentMsg: Message = {
        id: `msg-${Date.now() + 1}`,
        sender: 'agent',
        text: match ? match.response : "I've received your query! As a demonstration agent, I can search knowledge bases, schedule calendar events, look up orders, or query CRM records. Click one of the scenarios below to see me in action!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        thoughts: match ? match.thoughts : ['Classified query', 'Selecting best-match answer', 'Output clean response'],
        toolsCalled: match ? match.tools : undefined,
      };

      setMessages((prev) => [...prev, agentMsg]);
      setIsTyping(false);
    }, 1200);
  };

  const handlePromptClick = (p: typeof samplePrompts[0]) => {
    if (isTyping) return;
    handleSendMessage(p.text, { attachment: p.attachment });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 animate-fade-in">
          Experience ORI in Action
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
          Explore how an ORI agent can use knowledge, follow instructions, and interact with connected tools in real time.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Chat Playground Column */}
        <div className="flex flex-col h-[550px] rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#020617]/90 shadow-2xl overflow-hidden">
          {/* Widget Header */}
          <div className="bg-slate-50 dark:bg-slate-900/50 px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow shadow-blue-500/20">
                O
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">ORI Workspace Agent</h3>
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                </div>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold font-mono">WORKSPACE AGENT · KNOWLEDGE & TOOLS CONNECTED</p>
              </div>
            </div>

            <button
              onClick={() => {
                setMessages([
                  {
                    id: 'msg-init',
                    sender: 'agent',
                    text: "Hi, I'm ORI. I'm an AI agent configured with knowledge, instructions, and connected tools. Choose a scenario below to see how different ORI agents can work.",
                    timestamp: 'Just now',
                  },
                ]);
              }}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Reset Chat"
            >
              <RefreshCw className="h-4 w-4" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6 custom-scrollbar bg-slate-50/20 dark:bg-[#020617]/20">
            {messages.map((msg) => (
              <div
                key={msg.id}
                id={`chat-msg-${msg.id}`}
                className={`flex items-start gap-3.5 ${msg.sender === 'user' ? 'justify-end' : ''}`}
              >
                {/* Avatar */}
                {msg.sender === 'agent' && (
                  <div className="h-8 w-8 rounded-full bg-blue-600/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/20 shadow-sm">
                    <Bot className="h-4.5 w-4.5" />
                  </div>
                )}

                {/* Bubble Container */}
                <div className={`space-y-2 max-w-[80%] ${msg.sender === 'user' ? 'text-right' : ''}`}>
                  {/* Message Bubble */}
                  <div
                    className={`rounded-2xl p-4 text-sm leading-relaxed shadow-sm text-left ${
                      msg.sender === 'user'
                        ? 'bg-blue-600 text-white rounded-tr-none'
                        : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none'
                    }`}
                  >
                    {/* Attachment label if present */}
                    {msg.attachment && (
                      <div className="flex items-center gap-2 mb-2 bg-blue-700/30 dark:bg-slate-800 px-3 py-1.5 rounded-lg text-xs font-semibold text-white dark:text-slate-300 w-fit ml-auto">
                        <ImageIcon className="h-4 w-4 text-blue-300 dark:text-blue-400" />
                        <span>{msg.attachment}</span>
                      </div>
                    )}
                    <p className="whitespace-pre-line">{msg.text}</p>
                    <span className={`block text-[10px] mt-2 ${msg.sender === 'user' ? 'text-blue-200' : 'text-slate-400 dark:text-slate-500'}`}>
                      {msg.timestamp}
                    </span>
                  </div>

                  {/* Thoughts Section (Only for Agent) */}
                  {msg.sender === 'agent' && msg.thoughts && msg.thoughts.length > 0 && (
                    <div className="bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-900/60 p-3.5 rounded-xl text-left space-y-2">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-blue-600 dark:text-blue-400 font-mono tracking-wider uppercase">
                        <Sparkles className="h-3 w-3 animate-pulse" />
                        <span>ORI Thought Process</span>
                      </div>
                      <div className="space-y-1.5 pl-2 border-l border-blue-500/20">
                        {msg.thoughts.map((thought, idx) => (
                          <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                            <CornerDownRight className="h-3.5 w-3.5 text-slate-400 shrink-0 mt-0.5" />
                            <span>{thought}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tools Invoked */}
                      {msg.toolsCalled && msg.toolsCalled.length > 0 && (
                        <div className="pt-2 border-t border-slate-100 dark:border-slate-800/60 mt-2 space-y-2">
                          <div className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 font-mono uppercase tracking-wider">
                            Tools Invoked
                          </div>
                          {msg.toolsCalled.map((tool, tIdx) => (
                            <div key={tIdx} className="bg-white dark:bg-slate-900 rounded border border-slate-100 dark:border-slate-800/60 p-2 font-mono text-[10px] space-y-1 text-slate-600 dark:text-slate-400">
                              <div className="font-semibold text-slate-800 dark:text-slate-300">
                                <span className="text-blue-500">CALL:</span> {tool.name}({tool.args})
                              </div>
                              <div className="text-emerald-500 truncate">
                                <span className="text-slate-400 dark:text-slate-600">RESULT:</span> {tool.result}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* User Avatar */}
                {msg.sender === 'user' && (
                  <div className="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center shrink-0 border border-slate-200/25">
                    <User className="h-4.5 w-4.5" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-blue-600/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/20">
                  <Bot className="h-4.5 w-4.5" />
                </div>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl rounded-tl-none p-4 shadow-sm">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Prompt quick actions */}
          <div className="bg-slate-50 dark:bg-slate-900/30 px-4 py-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2.5 items-center">
            <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Demo Scenarios:</span>
            {samplePrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handlePromptClick(p)}
                disabled={isTyping}
                id={`demo-prompt-${idx}`}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-slate-200 dark:border-slate-800 hover:border-blue-500/20 dark:hover:border-blue-500/20 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Form Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputText);
            }}
            className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#020617] flex items-center gap-3"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask ORI a question or click a demo scenario..."
              disabled={isTyping}
              className="flex-1 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isTyping}
              id="demo-chat-send-btn"
              className="p-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 disabled:bg-slate-100 dark:disabled:bg-slate-800 disabled:text-slate-400 dark:disabled:text-slate-600 transition-colors shadow-md shadow-blue-500/10 cursor-pointer"
            >
              <Send className="h-4.5 w-4.5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AgentDemo;
