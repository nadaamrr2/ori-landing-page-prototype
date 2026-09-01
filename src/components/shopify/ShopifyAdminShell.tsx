import React from 'react';
import { 
  Search, 
  Bell, 
  Home, 
  ShoppingBag, 
  Tag, 
  Users, 
  FileText, 
  BarChart2, 
  Megaphone, 
  Percent, 
  Store, 
  ExternalLink, 
  Settings, 
  Sparkles,
  Bot
} from 'lucide-react';

interface ShopifyAdminShellProps {
  children: React.ReactNode;
  storeName?: string;
  onNavigateToStorefront?: () => void;
}

export const ShopifyAdminShell: React.FC<ShopifyAdminShellProps> = ({
  children,
  storeName = 'Cairo Threads',
  onNavigateToStorefront,
}) => {
  return (
    <div className="min-h-screen bg-[#f1f1f1] text-[#202223] font-sans antialiased flex flex-col selection:bg-blue-100 selection:text-blue-900">
      {/* Top Shopify Admin Header Bar */}
      <header className="bg-[#1a1a1a] text-white h-14 px-4 flex items-center justify-between border-b border-black/20 shrink-0 z-20">
        {/* Left: Shopify Logo & Store Switcher */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity">
            <svg 
              className="w-7 h-7 text-[#95bf47] fill-current" 
              viewBox="0 0 24 24"
              aria-label="Shopify"
            >
              <path d="M19.27 5.33c-.06-.39-.38-.63-.73-.63h-1.57c-.12-.89-.48-2.31-1.74-3.21C13.88.51 12.38.5 12.19.5c-.2 0-1.7.01-3.04.99C7.89 2.39 7.53 3.81 7.41 4.7H5.84c-.35 0-.67.24-.73.63L3.12 18.28c-.08.53.27 1.02.8 1.1.06.01.12.01.18.01.47 0 .88-.34.96-.82l1.63-10.98h1.27c.07.69.29 1.48.74 2.21-1.07.66-2.11 1.76-2.11 3.23 0 2.24 1.83 4.06 4.07 4.06.77 0 1.48-.22 2.08-.6.59.38 1.3.6 2.07.6 2.24 0 4.07-1.82 4.07-4.06 0-1.47-1.04-2.57-2.11-3.23.45-.73.67-1.52.74-2.21h1.27l1.63 10.98c.08.48.49.82.96.82.06 0 .12 0 .18-.01.53-.08.88-.57.8-1.1L19.27 5.33zM12.19 2.5c.78 0 1.62.46 2.09 1.25.13.22.24.47.32.74H9.78c.08-.27.19-.52.32-.74.47-.79 1.31-1.25 2.09-1.25z"/>
            </svg>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-white/10 text-xs font-medium text-slate-200">
              <span className="font-semibold text-white">{storeName}</span>
              <span className="text-[10px] text-slate-400">▾</span>
            </div>
          </div>
        </div>

        {/* Center: Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-lg mx-6">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              readOnly
              placeholder="Search in Shopify Admin... (⌘K)"
              className="w-full bg-[#303030] text-xs text-slate-200 pl-9 pr-4 py-1.5 rounded-lg border border-white/10 focus:outline-none placeholder-slate-400 cursor-default"
            />
          </div>
        </div>

        {/* Right: Notifications & Merchant Profile */}
        <div className="flex items-center gap-2">
          <button 
            type="button" 
            aria-label="View notifications"
            className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-md relative transition-colors"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full ring-2 ring-[#1a1a1a]"></span>
          </button>
          
          <div className="flex items-center gap-2 pl-2 border-l border-white/10">
            <div className="w-7 h-7 rounded-full bg-[#4a5568] flex items-center justify-center text-white text-xs font-semibold shadow-inner">
              CT
            </div>
            <span className="hidden lg:inline text-xs text-slate-300 font-medium">Cairo Threads</span>
          </div>
        </div>
      </header>

      {/* Admin Body (Sidebar + Content Workspace) */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Shopify Admin Navigation Sidebar */}
        <aside className="hidden lg:flex w-60 bg-[#ebebeb] border-r border-[#d4d4d4] flex-col justify-between shrink-0 select-none">
          <div className="p-2 space-y-5 overflow-y-auto">
            {/* Core Admin Nav */}
            <div className="space-y-0.5">
              <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-md text-xs font-medium text-[#303030] hover:bg-[#dedede] cursor-pointer">
                <Home className="w-4 h-4 text-[#5c5f62]" />
                <span>Home</span>
              </div>
              <div className="flex items-center justify-between px-3 py-1.5 rounded-md text-xs font-medium text-[#303030] hover:bg-[#dedede] cursor-pointer">
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className="w-4 h-4 text-[#5c5f62]" />
                  <span>Orders</span>
                </div>
                <span className="text-[10px] bg-slate-300 text-slate-700 px-1.5 py-0.2 rounded-full font-semibold">
                  12
                </span>
              </div>
              <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-md text-xs font-medium text-[#303030] hover:bg-[#dedede] cursor-pointer">
                <Tag className="w-4 h-4 text-[#5c5f62]" />
                <span>Products</span>
              </div>
              <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-md text-xs font-medium text-[#303030] hover:bg-[#dedede] cursor-pointer">
                <Users className="w-4 h-4 text-[#5c5f62]" />
                <span>Customers</span>
              </div>
              <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-md text-xs font-medium text-[#303030] hover:bg-[#dedede] cursor-pointer">
                <FileText className="w-4 h-4 text-[#5c5f62]" />
                <span>Content</span>
              </div>
              <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-md text-xs font-medium text-[#303030] hover:bg-[#dedede] cursor-pointer">
                <BarChart2 className="w-4 h-4 text-[#5c5f62]" />
                <span>Analytics</span>
              </div>
              <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-md text-xs font-medium text-[#303030] hover:bg-[#dedede] cursor-pointer">
                <Megaphone className="w-4 h-4 text-[#5c5f62]" />
                <span>Marketing</span>
              </div>
              <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-md text-xs font-medium text-[#303030] hover:bg-[#dedede] cursor-pointer">
                <Percent className="w-4 h-4 text-[#5c5f62]" />
                <span>Discounts</span>
              </div>
            </div>

            {/* Sales Channels */}
            <div>
              <div className="px-3 text-[11px] font-semibold text-[#6d7175] uppercase tracking-wider mb-1">
                Sales channels
              </div>
              <div 
                onClick={onNavigateToStorefront}
                className="flex items-center justify-between px-3 py-1.5 rounded-md text-xs font-medium text-[#303030] hover:bg-[#dedede] cursor-pointer group"
              >
                <div className="flex items-center gap-2.5">
                  <Store className="w-4 h-4 text-[#5c5f62]" />
                  <span>Online Store</span>
                </div>
                <ExternalLink className="w-3 h-3 text-[#8c9196] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Installed Apps */}
            <div>
              <div className="px-3 text-[11px] font-semibold text-[#6d7175] uppercase tracking-wider mb-1 flex items-center justify-between">
                <span>Apps</span>
                <span className="text-[10px] text-blue-600 font-normal lowercase cursor-pointer hover:underline">
                  installed
                </span>
              </div>
              
              {/* ORI Active App Entry in Sidebar */}
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold bg-[#e0e0e0] text-[#111213] border border-[#cfcfcf] shadow-sm">
                <div className="w-5 h-5 rounded-md bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-xs">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1 flex items-center justify-between">
                  <span className="font-bold tracking-tight">ORI</span>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Settings */}
          <div className="p-2 border-t border-[#d4d4d4]">
            <div className="flex items-center gap-2.5 px-3 py-2 rounded-md text-xs font-medium text-[#303030] hover:bg-[#dedede] cursor-pointer">
              <Settings className="w-4 h-4 text-[#5c5f62]" />
              <span>Settings</span>
            </div>
          </div>
        </aside>

        {/* Embedded App Main Canvas (Where ORI renders) */}
        <main className="flex-1 overflow-y-auto bg-[#f6f6f7] min-h-[calc(100vh-3.5rem)]">
          {children}
        </main>
      </div>
    </div>
  );
};
