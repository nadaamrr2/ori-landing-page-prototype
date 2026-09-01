import React, { useState } from 'react';
import { AgentInfo, AgentTone } from '../../types/shopify';
import { 
  Bot, 
  Sparkles, 
  ExternalLink, 
  Check, 
  Volume2, 
  Store, 
  Sliders, 
  Send, 
  Database, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  BookOpen, 
  ArrowUpRight 
} from 'lucide-react';

interface AgentConfigViewProps {
  agent: AgentInfo;
  onUpdateTone: (tone: AgentTone) => void;
  onOpenFullOri: () => void;
  storeName?: string;
}

/**
 * ============================================================================
 * [AGENT CONFIGURATION SUMMARY VIEW]
 * Compact embedded view showing active agent status, tone, and connected data,
 * with links to deep configuration on the standalone ORI platform.
 * ============================================================================
 */
export const AgentConfigView: React.FC<AgentConfigViewProps> = ({
  agent,
  onUpdateTone,
  onOpenFullOri,
  storeName = 'Cairo Threads',
}) => {
  const [testInput, setTestInput] = useState('');
  const [testHistory, setTestHistory] = useState<Array<{ sender: 'user' | 'agent'; text: string }>>([
    {
      sender: 'agent',
      text: `Hello! I am your AI assistant for ${storeName}. Ask me anything about your products, sizes, inventory or order policies to test my responses.`,
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const capabilitiesList = [
    { label: 'Answer product questions', desc: 'Product specs, sizing, materials' },
    { label: 'Recommend products', desc: 'Suggestions, matching styles, upsells' },
    { label: 'Track orders', desc: 'Realtime courier & fulfillment lookups' },
    { label: 'Handle order requests', desc: 'Cancellations, address updates (with confirmation)' },
    { label: 'Customer information', desc: 'Contextual past orders & preferences' },
    { label: 'Discount actions', desc: 'Applying valid promotions & vouchers' },
  ];

  const toneOptions: AgentTone[] = ['Friendly', 'Professional', 'Casual', 'Custom'];

  const handleSendTestMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testInput.trim()) return;

    const userText = testInput.trim();
    setTestHistory((prev) => [...prev, { sender: 'user', text: userText }]);
    setTestInput('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = '';
      const lower = userText.toLowerCase();
      if (lower.includes('linen') || lower.includes('shirt') || lower.includes('product') || lower.includes('size')) {
        reply = `Yes! Our Oversized Linen Shirt in Sand (EGP 1,250) is available in S, M, and L. 100% pure Egyptian linen, relaxed fit. Would you like care instructions or styling suggestions?`;
      } else if (lower.includes('order') || lower.includes('track') || lower.includes('ship')) {
        reply = `To track an order, shoppers simply provide their order number or email. I pull live courier updates directly from your Shopify fulfillment stream.`;
      } else if (lower.includes('return') || lower.includes('policy')) {
        reply = `According to ${storeName}'s policy, unworn items with tags can be exchanged or returned for store credit within 14 days of delivery.`;
      } else {
        reply = `I'm using ${agent.tone} tone and accessing your real-time Shopify catalog, inventory, and order systems to assist shoppers seamlessly.`;
      }

      setTestHistory((prev) => [...prev, { sender: 'agent', text: reply }]);
      setIsTyping(false);
    }, 500);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner with Quick Switch to Full ORI */}
      <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[11px] font-semibold border border-blue-400/30 mb-1">
            <Sparkles className="w-3 h-3 text-blue-400" />
            <span>Standalone Agent Engine</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold tracking-tight">
            {agent.name}
          </h2>
          <p className="text-xs text-slate-300 max-w-xl">
            This agent is actively powering your storefront chat and customer inquiries. For deep knowledge bases, custom prompt engineering, and external tool integrations, open the full ORI platform.
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenFullOri}
          className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold rounded-lg shadow-sm flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
        >
          <span>Open Full ORI</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Grid: Settings summary on Left, Interactive Test Sandbox on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Embedded Agent Settings */}
        <div className="lg:col-span-7 space-y-5">
          {/* Card 1: Brand Voice / Tone */}
          <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Brand Voice Tone
              </h3>
              <span className="text-[11px] text-slate-500">Currently: <strong>{agent.tone}</strong></span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {toneOptions.map((tone) => {
                const isSelected = agent.tone === tone;
                return (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => onUpdateTone(tone)}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all text-center cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900 border-slate-900 text-white shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {tone}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Card 2: Active Capabilities */}
          <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Active Shopify Capabilities
              </h3>
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                All Active
              </span>
            </div>

            <div className="divide-y divide-slate-100">
              {capabilitiesList.map((cap) => (
                <div key={cap.label} className="py-2.5 flex items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="font-semibold text-slate-800">{cap.label}</span>
                    <p className="text-[11px] text-slate-500">{cap.desc}</p>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>Active</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Connected Data Sources */}
          <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-xs space-y-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Connected Shopify Data Sources
            </h3>

            <div className="grid grid-cols-2 gap-2 text-xs">
              {['Products & Variants', 'Live Inventory Levels', 'Orders & Fulfillments', 'Customer Profiles'].map((item) => (
                <div key={item} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200/70">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Live Testing Sandbox */}
        <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200/90 shadow-xs overflow-hidden flex flex-col h-[520px]">
          {/* Header */}
          <div className="p-3.5 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center">
                <Bot className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-slate-900">Live Agent Sandbox</span>
            </div>

            <span className="text-[10px] text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
              Mock Store Data
            </span>
          </div>

          {/* Sandbox Transcript */}
          <div className="p-3.5 space-y-3 flex-1 overflow-y-auto custom-scrollbar bg-[#f8fafc]">
            {testHistory.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  item.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`p-3 rounded-xl max-w-xs text-xs leading-relaxed ${
                    item.sender === 'user'
                      ? 'bg-slate-900 text-white rounded-tr-xs'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-tl-xs shadow-xs'
                  }`}
                >
                  {item.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 text-slate-400 text-xs p-2">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            )}
          </div>

          {/* Input Box */}
          <form onSubmit={handleSendTestMessage} className="p-2.5 border-t border-slate-100 bg-white flex items-center gap-2">
            <input
              type="text"
              value={testInput}
              onChange={(e) => setTestInput(e.target.value)}
              placeholder="Ask about sizes, orders, shipping..."
              className="flex-1 text-xs bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-400 text-slate-800"
            />
            <button
              type="submit"
              className="p-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-colors cursor-pointer shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
