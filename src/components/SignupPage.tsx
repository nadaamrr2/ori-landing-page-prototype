import React, { useState } from 'react';
import { View } from '../App';
import { ArrowLeft, Lock, Mail, User, Building, Loader2 } from 'lucide-react';

interface SignupPageProps {
  onNavigate: (view: View) => void;
}

const SignupPage: React.FC<SignupPageProps> = ({ onNavigate }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !companyName || !password) {
      setError('Please fill in all fields');
      return;
    }
    setError('');
    setLoading(true);

    // Simulate registration and redirect to onboarding
    setTimeout(() => {
      setLoading(false);
      onNavigate('onboarding');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative bg-white dark:bg-[#020617] transition-colors duration-300">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Back button */}
      <div className="absolute top-6 left-6">
        <button
          onClick={() => onNavigate('landing')}
          id="signup-back-to-landing-btn"
          className="inline-flex items-center space-x-2 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </button>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        {/* Brand logo */}
        <div className="flex justify-center mb-6">
          <div className="h-12 w-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-blue-500/20">
            O
          </div>
        </div>

        <h2 className="text-center text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Create Your Workspace
        </h2>
        <p className="mt-2 text-center text-sm text-slate-500 dark:text-slate-400">
          Get started with your free 14-day trial of ORI Agent.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10 px-4 sm:px-0">
        <div className="glass-panel border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <form className="space-y-5" onSubmit={handleSignup} id="signup-form">
            {error && (
              <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/40 rounded-xl text-xs font-semibold text-red-600 dark:text-red-400 flex items-center gap-2 animate-fade-in">
                <span>{error}</span>
              </div>
            )}

            {/* Name */}
            <div className="space-y-1.5">
              <label htmlFor="signup-name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="h-4 w-4" />
                </div>
                <input
                  type="text"
                  id="signup-name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Jane Doe"
                  className="w-full bg-slate-50 dark:bg-[#020617]/50 border border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none transition-all text-slate-900 dark:text-white"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label htmlFor="signup-email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                Work Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="h-4 w-4" />
                </div>
                <input
                  type="email"
                  id="signup-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@company.com"
                  className="w-full bg-slate-50 dark:bg-[#020617]/50 border border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none transition-all text-slate-900 dark:text-white"
                />
              </div>
            </div>

            {/* Company Name */}
            <div className="space-y-1.5">
              <label htmlFor="signup-company" className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                Company Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Building className="h-4 w-4" />
                </div>
                <input
                  type="text"
                  id="signup-company"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Acme Corp"
                  className="w-full bg-slate-50 dark:bg-[#020617]/50 border border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none transition-all text-slate-900 dark:text-white"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label htmlFor="signup-password" className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="h-4 w-4" />
                </div>
                <input
                  type="password"
                  id="signup-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimum 8 characters"
                  className="w-full bg-slate-50 dark:bg-[#020617]/50 border border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none transition-all text-slate-900 dark:text-white"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              id="signup-submit-btn"
              className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-500/70 rounded-xl transition-all shadow shadow-blue-500/10 hover:shadow-blue-500/20 cursor-pointer pt-3"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin h-4 w-4 mr-2" />
                  <span>Creating Account...</span>
                </>
              ) : (
                <span>Create Workspace</span>
              )}
            </button>
          </form>

          {/* Alternative links */}
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/60 text-center">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Already have an account?{' '}
              <button
                onClick={() => onNavigate('login')}
                id="signup-to-login-btn"
                className="font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
              >
                Log in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
