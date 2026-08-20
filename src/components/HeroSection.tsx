import React from 'react';
import { ArrowRight, Boxes } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative pt-12 pb-24 md:py-32 overflow-hidden border-b border-slate-900">
      {/* Decorative glowing gradient spheres */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[120px] -top-40 -left-60 pointer-events-none"></div>
      <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[120px] top-60 right-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Headline and Badges */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Tech Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Next-Gen Augmented Reality App
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none">
              Project Infinite Projections With <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">ARCubo</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Hold physical 3D simulations in the palm of your hand. ARCubo is a highly optimized, responsive physical tracking cube paired with a revolutionary companion app designed for creators, students, and engineers.
            </p>

            {/* Micro Metrics Grid */}
            <div className="grid grid-cols-3 gap-4 pt-4 max-w-md mx-auto lg:mx-0">
              <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                <div className="text-2xl font-bold text-white font-mono">&lt; 5ms</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Latency</div>
              </div>
              <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                <div className="text-2xl font-bold text-white font-mono">100+</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">3D Models</div>
              </div>
              <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                <div className="text-2xl font-bold text-white font-mono">4K</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Projection</div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#simulator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-all duration-200 shadow-lg shadow-indigo-500/25 group"
              >
                Test Live Simulator <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-slate-300 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white transition-all duration-200"
              >
                View Pricing Plans
              </a>
            </div>
          </div>

          {/* Right Column: Hero Graphic */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[400px] aspect-square rounded-3xl bg-slate-900/40 border border-slate-800/80 p-8 flex items-center justify-center overflow-hidden shadow-2xl backdrop-blur-md">
              {/* Decorative orbital pathways */}
              <div className="absolute w-72 h-72 rounded-full border border-dashed border-indigo-500/20 animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute w-56 h-56 rounded-full border border-dashed border-purple-500/20 animate-[spin_12s_linear_infinite_reverse]"></div>

              {/* Glowing core holographic light column */}
              <div className="absolute bottom-0 w-24 h-64 bg-gradient-to-t from-indigo-500/20 to-transparent blur-xl rounded-b-full"></div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="relative flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 shadow-xl shadow-indigo-500/30 animate-bounce">
                  <Boxes className="w-12 h-12 text-white" />
                  <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl blur opacity-40"></div>
                </div>
                <span className="mt-6 text-sm font-semibold tracking-widest text-indigo-300 uppercase">Interactive Device</span>
                <h3 className="mt-1 text-2xl font-bold text-white">The Physical ARCubo</h3>
                <p className="text-xs text-slate-500 text-center mt-2 max-w-xs leading-relaxed">
                  Etched trackers on high-density materials guarantee pixel-perfect tracking for any tablet or phone camera.
                </p>
              </div>

              {/* Absolute positioning of tiny tracking points */}
              <div className="absolute top-8 left-8 flex items-center gap-1 bg-slate-950/80 px-2.5 py-1 rounded-full border border-slate-800 text-[9px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                TRACKER_POINT_01: ACTIVE
              </div>
              <div className="absolute bottom-8 right-8 flex items-center gap-1 bg-slate-950/80 px-2.5 py-1 rounded-full border border-slate-800 text-[9px] font-mono text-indigo-400">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping"></span>
                SYNC: 100%
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
