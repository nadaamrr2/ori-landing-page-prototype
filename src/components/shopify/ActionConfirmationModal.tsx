import React, { useState } from 'react';
import { AlertTriangle, Check, X, ShieldAlert, ShoppingBag, User, DollarSign, CheckCircle2 } from 'lucide-react';

interface ActionConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

/**
 * ============================================================================
 * [ACTION CONFIRMATION UX MODAL]
 * Demonstrates how sensitive/write actions in Shopify (like cancellations,
 * refunds, or address modifications) prompt for merchant confirmation.
 * ============================================================================
 * [ENGINEERING INTEGRATION POINT 10: Shopify Action Handlers]
 * In production, when confirmed, trigger:
 * POST /api/shopify/orders/1053/cancel { reason: 'customer_request' }
 * ============================================================================
 */
export const ActionConfirmationModal: React.FC<ActionConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleConfirmAction = () => {
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onConfirm();
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs font-sans animate-in fade-in duration-150">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl border border-slate-200 max-w-md w-full shadow-2xl overflow-hidden text-slate-900"
      >
        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="mx-auto w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center">
              <Check className="w-7 h-7 stroke-[3]" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900">Order #1053 Cancelled</h3>
              <p className="text-xs text-slate-600">
                Shopify inventory restocked & Sarah Ahmed notified via chat.
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="px-6 pt-6 pb-4 flex items-start justify-between gap-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/60 text-amber-600 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Confirm action</h3>
                  <p className="text-xs text-slate-500">
                    ORI is about to cancel <strong className="text-slate-900">Order #1053</strong>
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

            {/* Body */}
            <div className="p-6 space-y-4">
              <p className="text-xs text-slate-600 leading-relaxed">
                Customer Sarah Ahmed requested cancellation through storefront chat before order fulfillment. Confirm to cancel in Shopify and restock inventory.
              </p>

              {/* Order summary box */}
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 space-y-2 text-xs">
                <div className="flex items-center justify-between py-1 border-b border-slate-200/60 font-semibold text-slate-900">
                  <span>Order Number</span>
                  <span>#1053</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-200/60 text-slate-700">
                  <span>Customer</span>
                  <span className="font-medium text-slate-900">Sarah Ahmed</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-200/60 text-slate-700">
                  <span>Item</span>
                  <span className="text-slate-900">Oversized Linen Shirt (Sand / M)</span>
                </div>
                <div className="flex items-center justify-between py-1 text-slate-900 font-bold">
                  <span>Total Amount</span>
                  <span className="text-emerald-700 font-extrabold">EGP 1,250</span>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-amber-50/70 border border-amber-200/60 text-[11px] text-amber-800">
                <ShieldAlert className="w-4 h-4 shrink-0 text-amber-600" />
                <span>Sensitive write action requires merchant confirmation.</span>
              </div>
            </div>

            {/* Footer buttons */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors cursor-pointer"
              >
                Keep order
              </button>

              <button
                type="button"
                onClick={handleConfirmAction}
                className="px-4 py-2 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                Confirm cancellation
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
