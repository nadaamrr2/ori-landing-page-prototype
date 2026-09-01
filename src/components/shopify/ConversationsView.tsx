import React, { useState } from 'react';
import { ConversationItem } from '../../types/shopify';
import { mockConversations } from '../../data/mockShopifyData';
import { 
  MessageSquare, 
  Search, 
  Filter, 
  CheckCircle2, 
  AlertTriangle, 
  User, 
  Bot, 
  ShoppingBag, 
  Clock, 
  ArrowUpRight, 
  ShieldAlert,
  Sparkles
} from 'lucide-react';

interface ConversationsViewProps {
  onOpenActionModal?: (orderId: string) => void;
}

/**
 * ============================================================================
 * [CONVERSATIONS TAB VIEW]
 * Clean Shopify-native list & viewer of customer dialogues handled by ORI.
 * ============================================================================
 * [ENGINEERING INTEGRATION POINT 7: Conversation Stream]
 * In production, connect via WebSocket or poll GET /api/ori/conversations
 * ============================================================================
 */
export const ConversationsView: React.FC<ConversationsViewProps> = ({
  onOpenActionModal,
}) => {
  const [conversations, setConversations] = useState<ConversationItem[]>(mockConversations);
  const [selectedId, setSelectedId] = useState<string>(mockConversations[0]?.id || '');
  const [filterStatus, setFilterStatus] = useState<'all' | 'handled_by_ori' | 'needs_attention'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const selectedConv = conversations.find((c) => c.id === selectedId) || conversations[0];

  const filteredConversations = conversations.filter((c) => {
    if (filterStatus !== 'all' && c.status !== filterStatus) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        c.customerName.toLowerCase().includes(q) ||
        c.customerEmail.toLowerCase().includes(q) ||
        c.lastMessage.toLowerCase().includes(q) ||
        (c.orderNumber && c.orderNumber.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div className="space-y-4">
      {/* Top Header Filter Bar */}
      <div className="bg-white rounded-xl border border-slate-200/90 p-3 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
        {/* Status Filter Tabs */}
        <div className="flex items-center gap-1.5 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => setFilterStatus('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              filterStatus === 'all'
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            All ({conversations.length})
          </button>
          <button
            type="button"
            onClick={() => setFilterStatus('handled_by_ori')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              filterStatus === 'handled_by_ori'
                ? 'bg-emerald-700 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>Handled by ORI ({conversations.filter((c) => c.status === 'handled_by_ori').length})</span>
          </button>
          <button
            type="button"
            onClick={() => setFilterStatus('needs_attention')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              filterStatus === 'needs_attention'
                ? 'bg-amber-600 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            <span>Needs attention ({conversations.filter((c) => c.status === 'needs_attention').length})</span>
          </button>
        </div>

        {/* Search input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search customer, order #..."
            className="w-full text-xs bg-slate-50 border border-slate-200 pl-8 pr-3 py-1.5 rounded-lg focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-400 text-slate-800"
          />
        </div>
      </div>

      {/* Two Column Layout: List on Left, Active Chat Transcript on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        {/* Left: Conversation List */}
        <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-xs">
          <div className="divide-y divide-slate-100 max-h-[600px] overflow-y-auto custom-scrollbar">
            {filteredConversations.length === 0 ? (
              <div className="p-8 text-center text-xs text-slate-400">
                No conversations match the selected filter.
              </div>
            ) : (
              filteredConversations.map((conv) => {
                const isSelected = selectedConv?.id === conv.id;
                return (
                  <div
                    key={conv.id}
                    onClick={() => setSelectedId(conv.id)}
                    className={`p-3.5 text-left cursor-pointer transition-colors ${
                      isSelected
                        ? 'bg-blue-50/80 border-l-4 border-blue-600'
                        : 'hover:bg-slate-50/80'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900">
                          {conv.customerName}
                        </span>
                        {conv.orderNumber && (
                          <span className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-1.5 py-0.2 rounded border border-slate-200">
                            {conv.orderNumber}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-slate-400 shrink-0">
                        {conv.timestamp}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-2">
                      {conv.lastMessage}
                    </p>

                    <div className="flex items-center justify-between gap-2 text-[10px]">
                      <span className="text-slate-400 font-medium">{conv.intent}</span>

                      {conv.status === 'handled_by_ori' ? (
                        <span className="inline-flex items-center gap-1 font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                          <span>Handled by ORI</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                          <span className="w-1 h-1 rounded-full bg-amber-500"></span>
                          <span>Needs attention</span>
                        </span>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right: Active Chat Inspector Panel */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-xs flex flex-col min-h-[500px]">
          {selectedConv ? (
            <>
              {/* Header */}
              <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 text-xs font-bold">
                    {selectedConv.customerName.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs font-bold text-slate-900">
                        {selectedConv.customerName}
                      </h3>
                      {selectedConv.orderNumber && (
                        <span className="text-[10px] bg-slate-100 text-slate-700 px-1.5 py-0.2 rounded font-semibold border border-slate-200">
                          {selectedConv.orderNumber}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500">{selectedConv.customerEmail}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {selectedConv.status === 'needs_attention' && selectedConv.orderNumber && (
                    <button
                      type="button"
                      onClick={() => onOpenActionModal && onOpenActionModal(selectedConv.orderNumber!)}
                      className="px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-lg shadow-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>Review Action</span>
                    </button>
                  )}
                  
                  <span className="text-[11px] text-slate-400">{selectedConv.channel}</span>
                </div>
              </div>

              {/* Chat Message Transcript */}
              <div className="p-4 space-y-4 flex-1 overflow-y-auto max-h-[420px] custom-scrollbar bg-[#fafafa]">
                {selectedConv.messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${
                      msg.sender === 'customer' ? 'items-start' : 'items-end'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-400 mb-1 px-1">
                      {msg.sender === 'customer' ? (
                        <>
                          <User className="w-3 h-3 text-slate-400" />
                          <span>{selectedConv.customerName}</span>
                        </>
                      ) : (
                        <>
                          <Bot className="w-3 h-3 text-blue-600" />
                          <span className="font-semibold text-slate-700">ORI Agent</span>
                        </>
                      )}
                      <span>· {msg.timestamp}</span>
                    </div>

                    <div
                      className={`p-3.5 rounded-2xl max-w-md text-xs leading-relaxed ${
                        msg.sender === 'customer'
                          ? 'bg-white border border-slate-200 text-slate-800 rounded-tl-xs shadow-xs'
                          : 'bg-slate-900 text-white rounded-tr-xs shadow-sm'
                      }`}
                    >
                      {msg.text}
                    </div>

                    {msg.actionTaken && (
                      <div className="mt-1.5 flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200/70 text-[10px] font-semibold text-blue-800">
                        <Sparkles className="w-3 h-3 text-blue-600" />
                        <span>Tool Execution: {msg.actionTaken}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Footer status notice */}
              <div className="p-3 border-t border-slate-100 bg-white text-xs text-slate-500 flex items-center justify-between">
                <span className="text-[11px]">
                  All messages are logged & synced to Shopify customer timeline.
                </span>
                <span className="text-[11px] font-semibold text-emerald-700">
                  AI Guardrails Active
                </span>
              </div>
            </>
          ) : (
            <div className="p-12 text-center text-slate-400 text-xs my-auto">
              Select a conversation to view the transcript.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
