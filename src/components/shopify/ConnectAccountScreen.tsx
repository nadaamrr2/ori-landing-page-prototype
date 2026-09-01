import React, { useState } from 'react';
import { Bot, Sparkles, CheckCircle2, ArrowLeft, Building2, UserCheck } from 'lucide-react';

interface ConnectAccountScreenProps {
  onLoginSuccess: (isExistingUser: boolean) => void;
  onBack: () => void;
  storeName?: string;
}

/**
 * ============================================================================
 * [SCREEN 2: SIGN IN / LINK ORI ACCOUNT]
 * ============================================================================
 * [ENGINEERING INTEGRATION POINT 2: ORI Authentication]
 * In production, trigger Google OAuth popup or Shopify App Bridge session exchange
 * to authenticate merchant with ORI:
 * window.open('/api/auth/google?shopify_shop=' + shopDomain)
 * ============================================================================
 */
export const ConnectAccountScreen: React.FC<ConnectAccountScreenProps> = ({
  onLoginSuccess,
  onBack,
  storeName = 'Cairo Threads',
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [simulateUserType, setSimulateUserType] = useState<'existing' | 'new'>('existing');

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    // Simulate brief network handshake
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess(simulateUserType === 'existing');
    }, 600);
  };

  return (
    <div className="min-h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-md w-full mx-auto space-y-6">
        {/* Brand Header */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>
          
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <Bot className="w-4 h-4" />
            </div>
            <span className="text-base font-bold text-slate-900 tracking-tight">ORI</span>
          </div>

          <div className="w-12"></div> {/* spacer */}
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Connect your ORI account
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
              Sign in to connect this Shopify store to your ORI workspace.
            </p>
          </div>

          {/* Connected Store Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Store: <strong className="text-slate-900">{storeName}</strong></span>
          </div>

          {/* Primary Action: Continue with Google */}
          <div className="space-y-4 pt-2">
            <button
              type="button"
              disabled={isLoading}
              onClick={handleGoogleSignIn}
              className="w-full py-2.5 px-4 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-lg text-sm font-semibold shadow-xs hover:shadow transition-all flex items-center justify-center gap-3 cursor-pointer disabled:opacity-60"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-slate-300 border-t-blue-600 rounded-full animate-spin"></div>
              ) : (
                <>
                  {/* Google G Logo SVG */}
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span>Continue with Google</span>
                </>
              )}
            </button>

            {/* Sub-text */}
            <p className="text-xs text-slate-500 leading-normal">
              New to ORI? We&apos;ll create your workspace for you.
            </p>
          </div>

          {/* Prototype Simulation Selector */}
          <div className="pt-4 border-t border-slate-100 text-left">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Prototype Persona Simulation</span>
              <span className="text-[10px] text-blue-600 font-normal">Select for demo</span>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <label 
                className={`flex items-start gap-2 p-2 rounded-lg border text-xs cursor-pointer transition-colors ${
                  simulateUserType === 'existing' 
                    ? 'bg-blue-50/70 border-blue-200 text-blue-900' 
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100/70'
                }`}
              >
                <input
                  type="radio"
                  name="userType"
                  value="existing"
                  checked={simulateUserType === 'existing'}
                  onChange={() => setSimulateUserType('existing')}
                  className="mt-0.5 text-blue-600 focus:ring-blue-500"
                />
                <div>
                  <div className="font-semibold">Existing User</div>
                  <div className="text-[10px] text-slate-500">Pick from existing agents</div>
                </div>
              </label>

              <label 
                className={`flex items-start gap-2 p-2 rounded-lg border text-xs cursor-pointer transition-colors ${
                  simulateUserType === 'new' 
                    ? 'bg-blue-50/70 border-blue-200 text-blue-900' 
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100/70'
                }`}
              >
                <input
                  type="radio"
                  name="userType"
                  value="new"
                  checked={simulateUserType === 'new'}
                  onChange={() => setSimulateUserType('new')}
                  className="mt-0.5 text-blue-600 focus:ring-blue-500"
                />
                <div>
                  <div className="font-semibold">New User</div>
                  <div className="text-[10px] text-slate-500">Fresh Shopify agent ready</div>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Security / Privacy assurance */}
        <p className="text-center text-[11px] text-slate-400">
          Your Shopify store credentials and customer data are secured end-to-end.
        </p>
      </div>
    </div>
  );
};
