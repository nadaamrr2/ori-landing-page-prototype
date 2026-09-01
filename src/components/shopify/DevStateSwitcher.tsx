import React, { useState } from 'react';
import { ShopifyAppScreen, DashboardTab } from '../../types/shopify';
import { 
  Sliders, 
  Layers, 
  RotateCcw, 
  MessageSquare, 
  AlertTriangle, 
  Bot, 
  Sparkles, 
  CheckCircle2, 
  Layout, 
  ChevronDown, 
  ChevronUp,
  Eye
} from 'lucide-react';

interface DevStateSwitcherProps {
  currentScreen: ShopifyAppScreen;
  activeTab: DashboardTab;
  storeChatEnabled: boolean;
  showAdminShell: boolean;
  onScreenChange: (screen: ShopifyAppScreen) => void;
  onTabChange: (tab: DashboardTab) => void;
  onToggleStoreChat: (enabled: boolean) => void;
  onToggleAdminShell: (show: boolean) => void;
  onTriggerActionModal: () => void;
  onTriggerChatSetupModal: () => void;
  onResetFlow: () => void;
}

export const DevStateSwitcher: React.FC<DevStateSwitcherProps> = ({
  currentScreen,
  activeTab,
  storeChatEnabled,
  showAdminShell,
  onScreenChange,
  onTabChange,
  onToggleStoreChat,
  onToggleAdminShell,
  onTriggerActionModal,
  onTriggerChatSetupModal,
  onResetFlow,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const screens: { id: ShopifyAppScreen; label: string; number: string }[] = [
    { id: 'install', label: '1. First Install', number: '1' },
    { id: 'connect-account', label: '2. Connect Account', number: '2' },
    { id: 'select-agent', label: '3A. Existing User (Pick Agent)', number: '3A' },
    { id: 'agent-ready', label: '3B. New User (Agent Ready)', number: '3B' },
    { id: 'agent-setup', label: '4. Simple Agent Setup', number: '4' },
    { id: 'dashboard', label: '5. Main Embedded App', number: '5' },
  ];

  return (
    <div className="fixed bottom-3 right-3 z-50 max-w-xl w-full sm:w-auto shadow-2xl font-sans">
      <div className="bg-[#1e293b] text-white rounded-xl border border-slate-700/80 backdrop-blur-md overflow-hidden text-xs">
        {/* Header bar of switcher */}
        <div 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between px-3.5 py-2.5 bg-[#0f172a] border-b border-slate-700/60 cursor-pointer select-none hover:bg-slate-900 transition-colors"
        >
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="font-bold tracking-wide uppercase text-[10px] text-amber-400 bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-800/40">
              Prototype Controls
            </span>
            <span className="text-slate-300 font-medium hidden sm:inline">
              Shopify Embedded App State Switcher
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onResetFlow();
              }}
              title="Reset to first install flow"
              className="p-1 rounded hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <div className="text-slate-400">
              {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
            </div>
          </div>
        </div>

        {/* Collapsible Panel */}
        {isExpanded && (
          <div className="p-3.5 space-y-3 bg-[#1e293b]/95 max-h-[80vh] overflow-y-auto custom-scrollbar">
            {/* Screen Selector Buttons */}
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                <span>Jump to Screen State</span>
                <span className="text-slate-500">Quick Preview</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                {screens.map((s) => {
                  const isActive = currentScreen === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => onScreenChange(s.id)}
                      className={`text-left px-2.5 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                        isActive
                          ? 'bg-blue-600 border-blue-400 text-white shadow-sm ring-1 ring-blue-300'
                          : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white'
                      }`}
                    >
                      <div className="truncate font-semibold">{s.label}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dashboard Sub-Tabs (Active when in dashboard) */}
            {currentScreen === 'dashboard' && (
              <div className="pt-2 border-t border-slate-700/60">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Dashboard View Tabs
                </div>
                <div className="flex gap-1.5">
                  {(['overview', 'conversations', 'agent'] as DashboardTab[]).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => onTabChange(tab)}
                      className={`flex-1 capitalize px-2 py-1 rounded-md text-xs font-medium border text-center transition-all ${
                        activeTab === tab
                          ? 'bg-emerald-600 border-emerald-400 text-white font-semibold'
                          : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Interactive Demo Triggers */}
            <div className="pt-2 border-t border-slate-700/60">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Interactive Modals & Toggles
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {/* Action Confirmation Modal */}
                <button
                  onClick={onTriggerActionModal}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 text-left font-medium"
                >
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-amber-400" />
                  <span className="truncate">Cancel Order #1053 Modal</span>
                </button>

                {/* Store Chat Setup Modal */}
                <button
                  onClick={onTriggerChatSetupModal}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 hover:bg-indigo-500/30 text-left font-medium"
                >
                  <MessageSquare className="w-3.5 h-3.5 shrink-0 text-indigo-400" />
                  <span className="truncate">Theme Chat Setup Modal</span>
                </button>

                {/* Store Chat Enabled/Disabled Toggle */}
                <button
                  onClick={() => onToggleStoreChat(!storeChatEnabled)}
                  className={`flex items-center justify-between px-2.5 py-1.5 rounded-md border text-left font-medium transition-colors ${
                    storeChatEnabled
                      ? 'bg-emerald-950/50 border-emerald-700/60 text-emerald-300'
                      : 'bg-slate-800 border-slate-700 text-slate-300'
                  }`}
                >
                  <span className="text-xs">Store Chat:</span>
                  <span className={`text-[11px] font-bold px-1.5 py-0.2 rounded ${
                    storeChatEnabled ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-300'
                  }`}>
                    {storeChatEnabled ? 'Enabled' : 'Disabled'}
                  </span>
                </button>

                {/* Shopify Admin Frame Toggle */}
                <button
                  onClick={() => onToggleAdminShell(!showAdminShell)}
                  className="flex items-center justify-between px-2.5 py-1.5 rounded-md bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 font-medium"
                >
                  <span className="flex items-center gap-1">
                    <Layout className="w-3 h-3 text-slate-400" />
                    <span>Admin Shell:</span>
                  </span>
                  <span className={`text-[11px] font-bold px-1.5 py-0.2 rounded ${
                    showAdminShell ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300'
                  }`}>
                    {showAdminShell ? 'Visible' : 'Canvas Only'}
                  </span>
                </button>
              </div>
            </div>

            {/* Helper Note */}
            <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-700/40 flex items-center justify-between">
              <span>Frontend prototype with local state</span>
              <span className="text-slate-500">v1.0.0</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
