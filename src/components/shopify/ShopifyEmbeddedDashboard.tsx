import React from 'react';
import { AgentInfo, DashboardTab, ActivityItem } from '../../types/shopify';
import { mockDashboardMetrics, mockActivityFeed } from '../../data/mockShopifyData';
import { 
  Bot, 
  MessageSquare, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  ExternalLink, 
  Check, 
  ArrowRight, 
  Store, 
  HelpCircle, 
  Truck, 
  RefreshCw, 
  Tag, 
  Users, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight,
  Settings,
  ChevronRight
} from 'lucide-react';
import { ConversationsView } from './ConversationsView';
import { AgentConfigView } from './AgentConfigView';

interface ShopifyEmbeddedDashboardProps {
  agent: AgentInfo;
  activeTab: DashboardTab;
  storeChatEnabled: boolean;
  onTabChange: (tab: DashboardTab) => void;
  onCustomizeAgent: () => void;
  onViewConversations: () => void;
  onOpenFullOri: () => void;
  onEnableStoreChat: () => void;
  onOpenActionModal: (orderId?: string) => void;
  onUpdateTone: (tone: any) => void;
  storeName?: string;
}

/**
 * ============================================================================
 * [SCREEN 5: MAIN ORI SHOPIFY EMBEDDED DASHBOARD]
 * ============================================================================
 * [ENGINEERING INTEGRATION POINT 8: Metrics Sync]
 * [ENGINEERING INTEGRATION POINT 9: Storefront Chat Extension Bridge]
 * [ENGINEERING INTEGRATION POINT 10: Shopify Action Confirmation]
 * ============================================================================
 */
export const ShopifyEmbeddedDashboard: React.FC<ShopifyEmbeddedDashboardProps> = ({
  agent,
  activeTab,
  storeChatEnabled,
  onTabChange,
  onCustomizeAgent,
  onViewConversations,
  onOpenFullOri,
  onEnableStoreChat,
  onOpenActionModal,
  onUpdateTone,
  storeName = 'Cairo Threads',
}) => {
  const capabilitiesList = [
    { name: 'Product questions', status: 'Active' },
    { name: 'Product recommendations', status: 'Active' },
    { name: 'Order tracking', status: 'Active' },
    { name: 'Order actions', status: 'Active' },
    { name: 'Customer information', status: 'Active' },
    { name: 'Discount actions', status: 'Active' },
  ];

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto space-y-6 font-sans">
      {/* Top Header: ORI App Branding & Status Pill */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-200/80">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-sm">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">ORI</h1>
              <span className="text-xs text-slate-400 font-normal">|</span>
              <span className="text-xs font-semibold text-slate-500">
                AI Agent for Shopify
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Connected to <strong className="text-slate-700">{storeName}</strong>
            </p>
          </div>
        </div>

        {/* Status Pill */}
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200/80 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Active</span>
          </div>

          <button
            type="button"
            onClick={onOpenFullOri}
            className="text-xs text-slate-500 hover:text-slate-900 font-medium px-2 py-1 rounded hover:bg-slate-200/60 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Full ORI</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Minimal Embedded Navigation Bar */}
      <nav className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200/90 shadow-2xs w-fit">
        <button
          type="button"
          onClick={() => onTabChange('overview')}
          className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'overview'
              ? 'bg-slate-900 text-white shadow-2xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          Overview
        </button>
        <button
          type="button"
          onClick={() => onTabChange('conversations')}
          className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'conversations'
              ? 'bg-slate-900 text-white shadow-2xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <span>Conversations</span>
          <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
            activeTab === 'conversations' ? 'bg-slate-700 text-white' : 'bg-slate-200 text-slate-700'
          }`}>
            34
          </span>
        </button>
        <button
          type="button"
          onClick={() => onTabChange('agent')}
          className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'agent'
              ? 'bg-slate-900 text-white shadow-2xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          Agent
        </button>
      </nav>

      {/* TAB CONTENT */}
      {activeTab === 'conversations' && (
        <ConversationsView onOpenActionModal={onOpenActionModal} />
      )}

      {activeTab === 'agent' && (
        <AgentConfigView
          agent={agent}
          onUpdateTone={onUpdateTone}
          onOpenFullOri={onOpenFullOri}
          storeName={storeName}
        />
      )}

      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Main Overview Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Card 1: Conversations today */}
            <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-2xs space-y-1">
              <div className="text-xs font-semibold text-slate-500">Conversations today</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {mockDashboardMetrics.conversationsToday}
              </div>
              <div className="text-[11px] text-slate-400">Across storefront chat & channels</div>
            </div>

            {/* Card 2: Handled by ORI */}
            <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-2xs space-y-1">
              <div className="text-xs font-semibold text-slate-500 flex items-center justify-between">
                <span>Handled by ORI</span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded">
                  85%
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 tracking-tight">
                {mockDashboardMetrics.handledByOri}
              </div>
              <div className="text-[11px] text-slate-400">Resolved autonomously with 0 human effort</div>
            </div>

            {/* Card 3: Needs attention */}
            <div 
              onClick={() => onTabChange('conversations')}
              className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-2xs space-y-1 hover:border-amber-300 transition-colors cursor-pointer group"
            >
              <div className="text-xs font-semibold text-slate-500 flex items-center justify-between">
                <span>Needs attention</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-transform group-hover:translate-x-0.5" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 tracking-tight">
                {mockDashboardMetrics.needsAttention}
              </div>
              <div className="text-[11px] text-slate-400">Pending write approvals or agent handoffs</div>
            </div>
          </div>

          {/* Secondary Grid: Your Agent Card & Store Chat Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* "Your agent" Card (Col 7) */}
            <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200/90 p-6 shadow-2xs space-y-5">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Your Agent
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                    {agent.name}
                  </h2>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {agent.description}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/80 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>{agent.status}</span>
                </div>
              </div>

              {/* Connected Data */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-2">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  Connected Data
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {agent.connectedData.map((item) => (
                    <div key={item} className="flex items-center gap-1.5 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                      <span className="font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={onCustomizeAgent}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
                >
                  Customize agent
                </button>

                <button
                  type="button"
                  onClick={onViewConversations}
                  className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                >
                  View conversations
                </button>

                <button
                  type="button"
                  onClick={onOpenFullOri}
                  className="px-3 py-2 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors ml-auto flex items-center gap-1 cursor-pointer"
                >
                  <span>Open full ORI</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* "Store chat" Card (Col 5) */}
            <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200/90 p-6 shadow-2xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Store Chat
                  </div>
                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${
                      storeChatEnabled
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : 'bg-slate-100 text-slate-600 border-slate-200'
                    }`}
                  >
                    {storeChatEnabled ? '● Enabled' : 'Not enabled'}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 tracking-tight">
                  Storefront AI Assistant
                </h3>
                
                <p className="text-xs text-slate-600 leading-relaxed">
                  Add ORI to your storefront so customers can chat with your agent while they shop.
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onEnableStoreChat}
                  className={`w-full py-2.5 px-4 rounded-lg text-xs font-semibold shadow-2xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    storeChatEnabled
                      ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300'
                      : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/10'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{storeChatEnabled ? 'Configure store chat' : 'Enable store chat'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Tertiary Grid: Agent Capabilities & Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Agent Capabilities Section (Col 6) */}
            <div className="lg:col-span-6 bg-white rounded-xl border border-slate-200/90 p-5 sm:p-6 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                    Agent Capabilities
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Tasks ORI is authorized to execute in {storeName}
                  </p>
                </div>
                
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Status
                </span>
              </div>

              <div className="divide-y divide-slate-100">
                {capabilitiesList.map((cap) => (
                  <div key={cap.name} className="py-2.5 flex items-center justify-between gap-2 text-xs">
                    <span className="font-semibold text-slate-800">{cap.name}</span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      <span>{cap.status}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity Section (Col 6) */}
            <div className="lg:col-span-6 bg-white rounded-xl border border-slate-200/90 p-5 sm:p-6 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                    Recent Activity
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Live stream of AI interactions & actions
                  </p>
                </div>
                <span className="text-[10px] text-blue-600 font-semibold cursor-pointer hover:underline" onClick={onViewConversations}>
                  View all
                </span>
              </div>

              <div className="space-y-3">
                {mockActivityFeed.map((activity) => (
                  <div
                    key={activity.id}
                    className={`p-3 rounded-xl border transition-all text-xs ${
                      activity.requiresApproval
                        ? 'bg-amber-50/70 border-amber-200/80 shadow-2xs'
                        : 'bg-slate-50/60 border-slate-200/60 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        {activity.requiresApproval && (
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        )}
                        <span className="font-bold text-slate-900">
                          {activity.title}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400 shrink-0">
                        {activity.timestamp}
                      </span>
                    </div>

                    {activity.description && (
                      <p className="text-[11px] text-slate-600 leading-normal">
                        {activity.description}
                      </p>
                    )}

                    {activity.requiresApproval && (
                      <div className="mt-2.5 pt-2 border-t border-amber-200/60 flex items-center justify-between">
                        <span className="text-[10px] font-semibold text-amber-800">
                          Action requires confirmation
                        </span>
                        <button
                          type="button"
                          onClick={() => onOpenActionModal(activity.orderId)}
                          className="px-2.5 py-1 bg-amber-600 hover:bg-amber-700 text-white rounded text-[11px] font-bold transition-colors cursor-pointer"
                        >
                          Review Cancellation
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
