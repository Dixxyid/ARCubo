import React from 'react';
import { CheckCircle, Check } from 'lucide-react';
import { PreOrderMessageSetter } from '../types';

interface PricingSectionProps {
  onSelectPlan: PreOrderMessageSetter;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-24 bg-slate-950/80 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-4 uppercase tracking-wider">
            <CheckCircle className="w-3.5 h-3.5" /> Flexible Packages
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Unlock ARCubo for <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Every Space & Budget</span>
          </h2>
          <p className="text-lg text-slate-400">
            Choose the best package for your journey. Try the digital-only plan or purchase the physical pro kit to get maximum tracking quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

          {/* Plan 1: Digital Only */}
          <div className="p-8 bg-slate-900/30 border border-slate-900 rounded-3xl flex flex-col justify-between hover:border-slate-800 transition-all">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-200">ARCubo App-Only</h3>
                <p className="text-xs text-slate-500 mt-1">Perfect for casual virtual AR exploration.</p>
              </div>
              <div className="flex items-baseline gap-1 text-white">
                <span className="text-5xl font-extrabold font-mono">$0</span>
                <span className="text-sm text-slate-500">Free forever</span>
              </div>
              <hr className="border-slate-800" />
              <ul className="space-y-3.5 text-sm">
                <li className="flex items-center gap-2.5 text-slate-300">
                  <Check className="w-4.5 h-4.5 text-emerald-400 flex-shrink-0" />
                  <span>Virtual On-Screen Cube Emulator</span>
                </li>
                <li className="flex items-center gap-2.5 text-slate-300">
                  <Check className="w-4.5 h-4.5 text-emerald-400 flex-shrink-0" />
                  <span>Access to 10 Basic 3D Models</span>
                </li>
                <li className="flex items-center gap-2.5 text-slate-300">
                  <Check className="w-4.5 h-4.5 text-emerald-400 flex-shrink-0" />
                  <span>Standard 60Hz Camera Tracking</span>
                </li>
                <li className="flex items-center gap-2.5 text-slate-300 line-through text-slate-600">
                  <Check className="w-4.5 h-4.5 text-slate-600 flex-shrink-0" />
                  <span>Physical 8.2cm Tracking Cube</span>
                </li>
                <li className="flex items-center gap-2.5 text-slate-300 line-through text-slate-600">
                  <Check className="w-4.5 h-4.5 text-slate-600 flex-shrink-0" />
                  <span>Premium Library & Developer Portal</span>
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <a
                href="#simulator"
                className="w-full inline-flex items-center justify-center py-3 rounded-xl text-sm font-semibold text-slate-300 bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 transition-all duration-200"
              >
                Launch Free Simulator
              </a>
            </div>
          </div>

          {/* Plan 2: Pro Companion Kit */}
          <div className="p-8 bg-slate-900 border-2 border-indigo-500 rounded-3xl flex flex-col justify-between shadow-2xl relative">
            <div className="absolute top-0 right-6 -translate-y-1/2 px-3 py-1 rounded-full bg-indigo-500 text-white text-[10px] font-bold uppercase tracking-wider">
              Highly Recommended
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">ARCubo Pro Kit</h3>
                <p className="text-xs text-indigo-400 mt-1">The ultimate physical + digital bundle.</p>
              </div>
              <div className="flex items-baseline gap-1 text-white">
                <span className="text-5xl font-extrabold font-mono">$49</span>
                <span className="text-sm text-slate-400">One-time purchase</span>
              </div>
              <hr className="border-slate-800" />
              <ul className="space-y-3.5 text-sm">
                <li className="flex items-center gap-2.5 text-slate-300">
                  <Check className="w-4.5 h-4.5 text-emerald-400 flex-shrink-0" />
                  <span className="font-semibold text-white">1x Physical ARCubo Laser-Etched Cube</span>
                </li>
                <li className="flex items-center gap-2.5 text-slate-300">
                  <Check className="w-4.5 h-4.5 text-emerald-400 flex-shrink-0" />
                  <span>Lifetime Access to ARCubo App Pro License</span>
                </li>
                <li className="flex items-center gap-2.5 text-slate-300">
                  <Check className="w-4.5 h-4.5 text-emerald-400 flex-shrink-0" />
                  <span>100+ Advanced Pro 3D Models</span>
                </li>
                <li className="flex items-center gap-2.5 text-slate-300">
                  <Check className="w-4.5 h-4.5 text-emerald-400 flex-shrink-0" />
                  <span>High-Performance 120Hz Tracking Mode</span>
                </li>
                <li className="flex items-center gap-2.5 text-slate-300">
                  <Check className="w-4.5 h-4.5 text-emerald-400 flex-shrink-0" />
                  <span>Complete Developer SDK Access (Unity/WebXR)</span>
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <button
                onClick={() => {
                  onSelectPlan("Hello! I'm interested in purchasing the ARCubo Pro Companion Kit. Please provide details.");
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full inline-flex items-center justify-center py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-500/25 transition-all duration-200"
              >
                Buy ARCubo Pro Kit
              </button>
            </div>
          </div>

          {/* Plan 3: Creator / Studio Suite */}
          <div className="p-8 bg-slate-900/30 border border-slate-900 rounded-3xl flex flex-col justify-between hover:border-slate-800 transition-all">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-200">ARCubo Enterprise</h3>
                <p className="text-xs text-slate-500 mt-1">For schools, museums, and software studios.</p>
              </div>
              <div className="flex items-baseline gap-1 text-white">
                <span className="text-4xl font-extrabold font-mono">Custom</span>
              </div>
              <hr className="border-slate-800" />
              <ul className="space-y-3.5 text-sm">
                <li className="flex items-center gap-2.5 text-slate-300">
                  <Check className="w-4.5 h-4.5 text-emerald-400 flex-shrink-0" />
                  <span className="font-semibold text-white">Custom Branded Physical Cubes (Bulk)</span>
                </li>
                <li className="flex items-center gap-2.5 text-slate-300">
                  <Check className="w-4.5 h-4.5 text-emerald-400 flex-shrink-0" />
                  <span>White-Label Companion App Integration</span>
                </li>
                <li className="flex items-center gap-2.5 text-slate-300">
                  <Check className="w-4.5 h-4.5 text-emerald-400 flex-shrink-0" />
                  <span>Dedicated Engineering Support Channel</span>
                </li>
                <li className="flex items-center gap-2.5 text-slate-300">
                  <Check className="w-4.5 h-4.5 text-emerald-400 flex-shrink-0" />
                  <span>On-Premise Offline Local Storage Server Setup</span>
                </li>
                <li className="flex items-center gap-2.5 text-slate-300">
                  <Check className="w-4.5 h-4.5 text-emerald-400 flex-shrink-0" />
                  <span>Unlimited Commercial Production License</span>
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <button
                onClick={() => {
                  onSelectPlan("Hello! I want to inquire about custom ARCubo Enterprise options for our institution.");
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full inline-flex items-center justify-center py-3 rounded-xl text-sm font-semibold text-slate-300 bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 transition-all duration-200"
              >
                Contact Enterprise Sales
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
