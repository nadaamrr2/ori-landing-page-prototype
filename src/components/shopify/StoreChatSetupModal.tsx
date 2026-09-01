import React from 'react';
import { MessageSquare, Check, X, Palette, ExternalLink, Sparkles, Layers } from 'lucide-react';

interface StoreChatSetupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

/**
 * ============================================================================
 * [STORE CHAT SETUP MODAL]
 * Explains how the storefront chat widget is linked to Shopify Theme App Extension.
 * ============================================================================
 * [ENGINEERING INTEGRATION POINT 9: Storefront Chat Activation]
 * In production, trigger Shopify Admin deep link to Theme Editor:
 * window.open(`https://${shopDomain}/admin/themes/current/editor?context=apps&activateAppId=ori-store-chat`)
 * ============================================================================
 */
export const StoreChatSetupModal: React.FC<StoreChatSetupModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs font-sans animate-in fade-in duration-150">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl border border-slate-200 max-w-md w-full shadow-2xl overflow-hidden text-slate-900"
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-4 flex items-start justify-between gap-3 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/60 text-blue-600 flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Store chat setup</h3>
              <p className="text-xs text-slate-500">
                Enable ORI storefront widget for shoppers
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-md hover:bg-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200/70 text-xs text-blue-900 leading-relaxed space-y-2">
            <p className="font-semibold">
              Your engineer will connect this action to Shopify&apos;s Theme App Extension.
            </p>
            <p className="text-blue-800 text-[11px]">
              When enabled, customers will see a discreet floating AI chat bubble on your storefront to ask about sizes, shipping, and order status in real time.
            </p>
          </div>

          <div className="space-y-2 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold shrink-0">
                ✓
              </div>
              <span>No liquid code modifications required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold shrink-0">
                ✓
              </div>
              <span>Compatible with Online Store 2.0 themes (Dawn, Horizon, etc.)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold shrink-0">
                ✓
              </div>
              <span>Synchronizes real-time product stock & customer cart context</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-2.5">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors cursor-pointer"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-xs transition-colors cursor-pointer"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
