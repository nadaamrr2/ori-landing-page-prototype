import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AgentDemo from './components/AgentDemo';
import Integrations from './components/Integrations';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import Onboarding from './components/Onboarding';
import Dashboard from './components/Dashboard';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

export type View = 'landing' | 'signup' | 'login' | 'onboarding' | 'dashboard' | 'privacy' | 'terms' | 'contact';

const getViewFromPath = (): View => {
  const path = window.location.pathname.toLowerCase();
  if (path === '/privacy-policy' || path === '/privacy') return 'privacy';
  if (path === '/contact') return 'contact';
  if (path === '/signup') return 'signup';
  if (path === '/login') return 'login';
  if (path === '/onboarding') return 'onboarding';
  if (path === '/dashboard') return 'dashboard';
  return 'landing';
};

const getPathFromView = (view: View): string => {
  switch (view) {
    case 'privacy':
      return '/privacy-policy';
    case 'contact':
      return '/contact';
    case 'signup':
      return '/signup';
    case 'login':
      return '/login';
    case 'onboarding':
      return '/onboarding';
    case 'dashboard':
      return '/dashboard';
    default:
      return '/';
  }
};

const App: React.FC = () => {
  const [view, setView] = useState<View>(() => getViewFromPath());
  const [activeSection, setActiveSection] = useState('hero');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('agentic_theme');
    // Default to false (light mode)
    return saved !== null ? saved === 'dark' : false;
  });

  useEffect(() => {
    const handlePopState = () => {
      setView(getViewFromPath());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('agentic_theme', 'dark');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('agentic_theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const navigateTo = (newView: View) => {
    setView(newView);
    const targetPath = getPathFromView(newView);
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    if (view !== 'landing') return;

    const handleScroll = () => {
      const sections = ['hero', 'features', 'integrations', 'how-it-works', 'use-cases', 'pricing', 'customers', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust offset threshold for header overlap
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [view]);

  // Shared Header + Main Page layouts for Landing, Privacy, Terms, Contact
  const showNavAndFooter = view === 'landing' || view === 'privacy' || view === 'terms' || view === 'contact';

  return (
    <div className={`min-h-screen selection:bg-blue-500/30 transition-colors duration-300 ${
      isDarkMode ? 'bg-[#020617] text-slate-50' : 'bg-white text-slate-900'
    }`}>
      {showNavAndFooter && (
        <Navbar
          activeSection={activeSection}
          onNavigate={navigateTo}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
        />
      )}

      {/* Main Routing Render */}
      <main>
        {view === 'landing' && (
          <div className="relative">
            {/* Smooth anchor sections */}
            <section id="hero">
              <Hero onNavigate={navigateTo} isDarkMode={isDarkMode} />
            </section>

            <section id="features" className={`py-24 border-t border-slate-100 dark:border-slate-900/60 ${isDarkMode ? 'bg-slate-950/20' : 'bg-slate-50/50'}`}>
              <Features isDarkMode={isDarkMode} />
            </section>

            <section id="integrations" className="py-24 border-t border-slate-100 dark:border-slate-900/60 relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
              <Integrations />
            </section>

            <section id="how-it-works" className={`py-24 border-t border-slate-100 dark:border-slate-900/60 ${isDarkMode ? 'bg-slate-950/20' : 'bg-slate-50/50'}`}>
              <HowItWorks />
            </section>

            <section id="demo" className="py-24 border-t border-slate-100 dark:border-slate-900/60 relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
              <AgentDemo />
            </section>

            <section id="use-cases" className={`py-24 border-t border-slate-100 dark:border-slate-900/60 ${isDarkMode ? 'bg-slate-950/20' : 'bg-slate-50/50'}`}>
              <UseCases />
            </section>

            <section id="pricing" className="py-24 border-t border-slate-100 dark:border-slate-900/60 relative overflow-hidden">
              <Pricing onNavigate={navigateTo} isDarkMode={isDarkMode} />
            </section>

            <section id="customers" className={`py-24 border-t border-slate-100 dark:border-slate-900/60 ${isDarkMode ? 'bg-slate-950/20' : 'bg-slate-50/50'}`}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
              <Testimonials />
            </section>

            <section id="contact" className="py-20 border-t border-slate-100 dark:border-slate-900/60 relative overflow-hidden">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center py-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                  Ready to build your first ORI agent?
                </h2>
                <p className="text-base text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
                  Tell us what you want your agent to know and what you need it to do.
                </p>
                <button
                  onClick={() => navigateTo('contact')}
                  id="landing-contact-cta-btn"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-150 rounded-lg shadow-sm shadow-blue-500/10 hover:shadow-blue-500/20 cursor-pointer"
                >
                  Contact Us
                </button>
              </div>
            </section>
          </div>
        )}

        {view === 'privacy' && <PrivacyPolicy />}
        {view === 'terms' && <TermsOfService />}
        {view === 'contact' && <ContactUs />}
        {view === 'signup' && <SignupPage onNavigate={navigateTo} />}
        {view === 'login' && <LoginPage onNavigate={navigateTo} />}
        {view === 'onboarding' && <Onboarding onNavigate={navigateTo} isDarkMode={isDarkMode} />}
        {view === 'dashboard' && <Dashboard onNavigate={navigateTo} isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />}
      </main>

      {showNavAndFooter && <Footer onNavigate={navigateTo} />}
    </div>
  );
};

export default App;
