import React from 'react';
import { Check, CheckCircle2, Store, Bot, ArrowRight, ShieldCheck } from 'lucide-react';

interface FirstInstallScreenProps {
  onContinue: () => void;
  onSignInExisting: () => void;
  storeName?: string;
}

/**
 * ============================================================================
 * [SCREEN 1: FIRST INSTALL / WELCOME]
 * Shown immediately after the merchant installs ORI from the Shopify App Store.
 * ============================================================================
 */
export const FirstInstallScreen: React.FC<FirstInstallScreenProps> = ({
  onContinue,
  onSignInExisting,
  storeName = 'Cairo Threads',
}) => {
  const connectedItems = [
    { label: 'Products', description: 'Catalog details, variants and pricing' },
    { label: 'Inventory', description: 'Stock levels and fulfillment locations' },
    { label: 'Orders', description: 'Order lookups, tracking and status updates' },
    { label: 'Customers', description: 'Customer context for tailored support' },
  ];

  return (
    <div className="min-h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-md w-full mx-auto space-y-6">
        {/* Brand Header */}
        <div className="flex items-center justify-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/10">
            <Bot className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">ORI</span>
        </div>

        {/* Main Installation Card */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 text-center space-y-6">
          {/* Success Check Icon */}
          <div className="mx-auto w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-600">
            <Check className="w-7 h-7 stroke-[2.5]" />
          </div>

          {/* Heading & Supporting Copy */}
          <div className="space-y-2">
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Your Shopify store is connected
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
              ORI can now use your store information to help customers, answer questions and take actions when needed.
            </p>
          </div>

          {/* Connected Resources Box */}
          <div className="bg-slate-50/80 rounded-xl border border-slate-200/70 p-4 text-left">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Store className="w-3.5 h-3.5 text-slate-400" />
              <span>Connected from Shopify</span>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              {connectedItems.map((item) => (
                <div key={item.label} className="flex items-center gap-2 py-1 px-1.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="text-xs font-semibold text-slate-800">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Primary Action Button */}
          <div className="space-y-3 pt-2">
            <button
              type="button"
              onClick={onContinue}
              className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm font-semibold shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Secondary subtle action */}
            <div className="text-center">
              <button
                type="button"
                onClick={onSignInExisting}
                className="text-xs text-slate-500 hover:text-blue-600 font-medium transition-colors cursor-pointer"
              >
                Already use ORI? <span className="underline font-semibold text-slate-700 hover:text-blue-600">Sign in</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footnote */}
        <p className="text-center text-[11px] text-slate-400">
          Connected to {storeName} · Origin Technology Solution
        </p>
      </div>
    </div>
  );
};
