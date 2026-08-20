import React from 'react';
import { Smartphone, Boxes, Sparkles, ArrowRight } from 'lucide-react';

export const OverviewSection: React.FC = () => {
  return (
    <section id="overview" className="py-24 border-b border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            How <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">ARCubo Works</span>
          </h2>
          <p className="text-lg text-slate-400">
            ARCubo bridges physical manipulation with spatial computing. It requires no cables, no batteries, and no expensive setups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="p-8 bg-slate-900/45 border border-slate-900 rounded-2xl flex flex-col justify-between hover:border-slate-800 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">1. Launch the Companion App</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Download and open the ARCubo app on your iOS or Android device, or access the responsive WebXR portal through any browser.
              </p>
            </div>
            <div className="mt-6 text-xs font-semibold text-indigo-400 uppercase tracking-wider flex items-center gap-1">
              Get the app <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 bg-slate-900/45 border border-slate-900 rounded-2xl flex flex-col justify-between hover:border-slate-800 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6">
                <Boxes className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">2. Point and Auto-Detect</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Aim your camera at the physical cube. The app instantly locks onto high-precision infrared spatial tracking surfaces etched onto the cube's faces.
              </p>
            </div>
            <div className="mt-6 text-xs font-semibold text-purple-400 uppercase tracking-wider flex items-center gap-1">
              Learn about tracking <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-8 bg-slate-900/45 border border-slate-900 rounded-2xl flex flex-col justify-between hover:border-slate-800 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">3. Interact & Manipulate</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Rotate, move, and scale the virtual models simply by rotating the physical cube in your hands. High-frequency tracking translates your actions in real-time.
              </p>
            </div>
            <div className="mt-6 text-xs font-semibold text-pink-400 uppercase tracking-wider flex items-center gap-1">
              Explore use cases <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
