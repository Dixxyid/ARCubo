import React from 'react';
import { ShieldCheck, Globe, CheckCircle, Cpu } from 'lucide-react';

export const TrustBadgesSection: React.FC = () => {
  return (
    <section className="py-12 border-b border-slate-900 bg-slate-950/40 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-around gap-8 text-center">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-indigo-400" />
            <span>256-bit Encrypted SSL Checkouts</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-indigo-400" />
            <span>Global Air Shipping With Tracking</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-indigo-400" />
            <span>30-Day Money Back Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-indigo-400" />
            <span>Made in ISO-Certified Green Facility</span>
          </div>
        </div>
      </div>
    </section>
  );
};
