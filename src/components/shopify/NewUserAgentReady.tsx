import React from 'react';
import { Bot, Check, ArrowRight, Store, Sparkles, ShieldCheck } from 'lucide-react';

interface NewUserAgentReadyProps {
  onSetupAgent: () => void;
  storeName?: string;
}

/**
 * ============================================================================
 * [SCREEN 3B: NEW ORI USER - AGENT READY]
 * ============================================================================
 * [ENGINEERING INTEGRATION POINT 4: Agent Creation]
 * In production, automatically bootstrap a default Shopify agent via:
 * POST /api/ori/agents/bootstrap { storeId: ..., storeName: ... }
 * ============================================================================
 */
export const NewUserAgentReady: React.FC<NewUserAgentReadyProps> = ({
  onSetupAgent,
  storeName = 'Cairo Threads',
}) => {
  const connectedData = ['Products', 'Inventory', 'Orders', 'Customers'];

  return (
    <div className="min-h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-md w-full mx-auto space-y-6">
        {/* Brand Header */}
        <div className="flex items-center justify-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm">
            <Bot className="w-4 h-4" />
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">ORI</span>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 text-center space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200/60 mb-1">
              <Sparkles className="w-3 h-3 text-blue-600" />
              <span>Workspace & Agent Provisioned</span>
            </div>
            
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Your Shopify agent is ready
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
              We created an ORI agent for your store. You can customize how it behaves at any time.
            </p>
          </div>

          {/* Agent Card */}
          <div className="bg-slate-50 rounded-xl border border-slate-200/80 p-5 text-left space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-xs">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-900">Shopify Assistant</h2>
                  <p className="text-xs text-slate-500">AI agent for {storeName}</p>
                </div>
              </div>

              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Active</span>
              </span>
            </div>

            {/* Connected items */}
            <div className="pt-3 border-t border-slate-200/70">
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                Connected Data Sources
              </div>
              <div className="grid grid-cols-2 gap-2">
                {connectedData.map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Primary Action */}
          <div className="pt-2">
            <button
              type="button"
              onClick={onSetupAgent}
              className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm font-semibold shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Set up my agent</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        <p className="text-center text-[11px] text-slate-400">
          Takes less than 1 minute · You can edit this anytime
        </p>
      </div>
    </div>
  );
};
