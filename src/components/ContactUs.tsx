import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, ChevronDown } from 'lucide-react';

interface ContactFormData {
  fullName: string;
  email: string;
  companyName: string;
  jobTitle: string;
  companyWebsite: string;
  phoneNumber: string;
  interest: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  companyName?: string;
  interest?: string;
  message?: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    companyName: '',
    jobTitle: '',
    companyWebsite: '',
    phoneNumber: '',
    interest: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Local submissions logger for testing/debugging
  const [submissions, setSubmissions] = useState<ContactFormData[]>([]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid work email address';
    }
    
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!formData.interest) {
      newErrors.interest = 'Please select what you are interested in';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a message with at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear specific error as user types/interacts
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Simulate real-world network delay for API submission
      await new Promise((resolve) => setTimeout(resolve, 1200));

      console.log('Contact Form submitted successfully:', formData);

      // Log locally
      setSubmissions((prev) => [...prev, formData]);
      setIsSuccess(true);
      
    } catch (err) {
      console.error('Contact submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      companyName: '',
      jobTitle: '',
      companyWebsite: '',
      phoneNumber: '',
      interest: '',
      message: '',
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
          Let’s talk about what ORI can do for your business
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
          Tell us a little about your business, current workflows, and what you would like to automate. Our team will review your request and get in touch.
        </p>
      </div>

      <div className="glass-panel border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 sm:p-10 shadow-xl bg-white/70 dark:bg-[#020617]/70 backdrop-blur-md">
        {isSuccess ? (
          <div className="text-center py-8 space-y-6 animate-fade-in" id="contact-success-container">
            <div className="mx-auto h-16 w-16 bg-green-50 dark:bg-green-950/30 text-green-500 dark:text-green-400 flex items-center justify-center rounded-full border border-green-100 dark:border-green-900/20 shadow-md">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Thank You, {formData.fullName}!
              </h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto text-sm leading-relaxed">
                We've received your inquiry for <strong>{formData.companyName}</strong>. A solutions expert will contact you at <strong>{formData.email}</strong> shortly regarding <strong>{formData.interest}</strong>.
              </p>
            </div>

            <div className="h-px bg-slate-100 dark:bg-slate-800 max-w-md mx-auto" />

            <button
              onClick={handleReset}
              id="contact-reset-btn"
              className="px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all shadow shadow-blue-500/10 hover:shadow-blue-500/25 cursor-pointer"
            >
              Send Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6" id="contact-form" noValidate>
            {/* Row 1: Full Name & Work Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className={`w-full bg-slate-50 dark:bg-[#020617]/50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.fullName
                        ? 'border-red-500 focus:ring-red-500/20 text-red-950 dark:text-red-200'
                        : 'border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-blue-500/20 text-slate-900 dark:text-white'
                    }`}
                  />
                  {errors.fullName && (
                    <div className="flex items-center gap-1 text-xs text-red-500 mt-1.5" id="error-fullName">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.fullName}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Work Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className={`w-full bg-slate-50 dark:bg-[#020617]/50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-red-500 focus:ring-red-500/20 text-red-950 dark:text-red-200'
                        : 'border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-blue-500/20 text-slate-900 dark:text-white'
                    }`}
                  />
                  {errors.email && (
                    <div className="flex items-center gap-1 text-xs text-red-500 mt-1.5" id="error-email">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Row 2: Company Name & Job Title */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="companyName" className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    className={`w-full bg-slate-50 dark:bg-[#020617]/50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.companyName
                        ? 'border-red-500 focus:ring-red-500/20 text-red-950 dark:text-red-200'
                        : 'border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-blue-500/20 text-slate-900 dark:text-white'
                    }`}
                  />
                  {errors.companyName && (
                    <div className="flex items-center gap-1 text-xs text-red-500 mt-1.5" id="error-companyName">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.companyName}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="jobTitle" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center justify-between">
                  <span>Job Title</span>
                  <span className="text-xs text-slate-400 dark:text-slate-500 font-normal">Optional</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="Customer Operations Manager"
                    className="w-full bg-slate-50 dark:bg-[#020617]/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:border-blue-500 focus:ring-blue-500/20 transition-all text-slate-900 dark:text-white"
                  />
                </div>
              </div>
            </div>

            {/* Row 3: Company Website & Phone Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="companyWebsite" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center justify-between">
                  <span>Company Website</span>
                  <span className="text-xs text-slate-400 dark:text-slate-500 font-normal">Optional</span>
                </label>
                <div className="relative">
                  <input
                    type="url"
                    id="companyWebsite"
                    name="companyWebsite"
                    value={formData.companyWebsite}
                    onChange={handleChange}
                    placeholder="https://example.com"
                    className="w-full bg-slate-50 dark:bg-[#020617]/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:border-blue-500 focus:ring-blue-500/20 transition-all text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phoneNumber" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center justify-between">
                  <span>Phone Number</span>
                  <span className="text-xs text-slate-400 dark:text-slate-500 font-normal">Optional</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-slate-50 dark:bg-[#020617]/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:border-blue-500 focus:ring-blue-500/20 transition-all text-slate-900 dark:text-white"
                  />
                </div>
              </div>
            </div>

            {/* Row 4: What are you interested in? */}
            <div className="space-y-2">
              <label htmlFor="interest" className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                What are you interested in? <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className={`w-full bg-slate-50 dark:bg-[#020617]/50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all appearance-none cursor-pointer pr-10 text-slate-900 dark:text-white ${
                    errors.interest
                      ? 'border-red-500 focus:ring-red-500/20'
                      : 'border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-blue-500/20'
                  }`}
                >
                  <option value="" disabled className="text-slate-400">Select an option...</option>
                  <option value="Book a demo" className="text-slate-900 dark:text-white">Book a demo</option>
                  <option value="Product inquiry" className="text-slate-900 dark:text-white">Product inquiry</option>
                  <option value="Integration inquiry" className="text-slate-900 dark:text-white">Integration inquiry</option>
                  <option value="Partnership" className="text-slate-900 dark:text-white">Partnership</option>
                  <option value="Technical support" className="text-slate-900 dark:text-white">Technical support</option>
                  <option value="Other" className="text-slate-900 dark:text-white">Other</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
              {errors.interest && (
                <div className="flex items-center gap-1 text-xs text-red-500 mt-1.5" id="error-interest">
                  <AlertCircle className="h-3.5 w-3.5" />
                  <span>{errors.interest}</span>
                </div>
              )}
            </div>

            {/* Row 5: Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                How can ORI support your business? <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your support volume, channels, or tool integration requirements..."
                  className={`w-full bg-slate-50 dark:bg-[#020617]/50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all resize-none ${
                    errors.message
                      ? 'border-red-500 focus:ring-red-500/20 text-red-950 dark:text-red-200'
                      : 'border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-blue-500/20 text-slate-900 dark:text-white'
                  }`}
                />
                {errors.message && (
                  <div className="flex items-center gap-1 text-xs text-red-500 mt-1.5" id="error-message">
                    <AlertCircle className="h-3.5 w-3.5" />
                    <span>{errors.message}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Row 6: Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              id="contact-submit-btn"
              className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-500/70 disabled:cursor-not-allowed rounded-xl transition-all shadow shadow-blue-500/10 hover:shadow-blue-500/20 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin h-4 w-4 mr-2" />
                  <span>Submitting Inquiry...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  <span>Submit Inquiry</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
