import React, { useState, useEffect } from 'react';
import { Send, CheckCircle } from 'lucide-react';

interface ContactSectionProps {
  initialMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialMessage = '' }) => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState(initialMessage);
  const [emailError, setEmailError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (initialMessage) {
      setContactMessage(initialMessage);
    }
  }, [initialMessage]);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');

    if (!validateEmail(contactEmail)) {
      setEmailError('Please enter a valid email address (e.g., name@domain.com).');
      return;
    }

    if (contactName && contactEmail && contactMessage) {
      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 5000);
      setContactName('');
      setContactEmail('');
      setContactMessage('');
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative">
      {/* Background overlay lights */}
      <div className="absolute w-72 h-72 rounded-full bg-indigo-500/5 blur-3xl bottom-12 left-1/3 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-900/60 border border-slate-900 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-extrabold text-white mb-2">Have Questions About ARCubo?</h2>
            <p className="text-sm text-slate-400">
              Fill out the form below and our spatial engineering support team will respond within 24 hours. Let's design the next dimension together.
            </p>
          </div>

          <form onSubmit={handleContactSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Full Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="e.g. Liam Smith"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="e.g. liam@domain.com"
                  value={contactEmail}
                  onChange={(e) => {
                    setContactEmail(e.target.value);
                    if (emailError) setEmailError('');
                  }}
                  className={`w-full bg-slate-950 border rounded-xl py-3 px-4 text-sm text-slate-100 placeholder-slate-600 focus:outline-none transition-all ${
                    emailError
                      ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                      : 'border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                  }`}
                />
                {emailError && (
                  <p className="mt-1 text-xs text-rose-400 font-medium">{emailError}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Your Message</label>
              <textarea
                id="message"
                required
                rows={4}
                placeholder="Tell us what you want to build or any inquiry you might have regarding ARCubo..."
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
              <span className="text-[11px] text-slate-500">
                By submitting you agree to our privacy policy and security standards.
              </span>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/20 transition-all"
              >
                Send Spatial Message <Send className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Toast confirmation for contact form */}
          {formSubmitted && (
            <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium flex items-center gap-3 animate-pulse">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <div>
                <span className="block font-bold">Message Received Successfully!</span>
                <span className="block text-xs text-emerald-400/80 mt-0.5">Thank you for contacting ARCubo. Our engineers are already reviewing your inquiry.</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
