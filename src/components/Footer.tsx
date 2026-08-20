import React, { useState } from 'react';
import { Boxes, Twitter, Linkedin, Github, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubmitted(true);
      setTimeout(() => setNewsletterSubmitted(false), 5000);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center">
                <Boxes className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                ARCubo
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              The next dimension of visual learning, design, and interactive play. Transforming any desk into a high-fidelity augmented reality projection space.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" aria-label="Twitter" className="p-2 rounded-full bg-slate-900 hover:bg-indigo-600 text-slate-400 hover:text-white transition-all duration-200">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-full bg-slate-900 hover:bg-indigo-600 text-slate-400 hover:text-white transition-all duration-200">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" aria-label="GitHub" className="p-2 rounded-full bg-slate-900 hover:bg-indigo-600 text-slate-400 hover:text-white transition-all duration-200">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-slate-200 mb-6 tracking-wide text-sm uppercase">Product</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#overview" className="text-slate-400 hover:text-indigo-400 transition-colors">Overview</a></li>
              <li><a href="#features" className="text-slate-400 hover:text-indigo-400 transition-colors">Features</a></li>
              <li><a href="#simulator" className="text-slate-400 hover:text-indigo-400 transition-colors">AR Simulator</a></li>
              <li><a href="#specs" className="text-slate-400 hover:text-indigo-400 transition-colors">Specifications</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="font-semibold text-slate-200 mb-6 tracking-wide text-sm uppercase">Developers</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Developer Portal</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">WebXR SDK Docs</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">API References</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Unity/Unreal Plugins</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="font-semibold text-slate-200 mb-6 tracking-wide text-sm uppercase">Stay Updated</h3>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Receive release dates, software update notes, and special early-bird discount codes.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="relative flex items-center">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg py-2.5 pl-4 pr-12 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1.5 p-1.5 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            {newsletterSubmitted && (
              <p className="mt-3 text-xs text-emerald-400 font-medium animate-pulse">
                ✓ Successfully subscribed to ARCubo news!
              </p>
            )}
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} ARCubo Inc. All rights reserved. Made for creators & visionaries.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <a href="#" className="hover:text-slate-300">Contact Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
