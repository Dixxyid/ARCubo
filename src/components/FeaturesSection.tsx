import React from 'react';
import { Cpu, Layers, Globe, Terminal, Zap, Gamepad2 } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-950/80 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-4 uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" /> Uncompromised Tech Stack
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            A Spatial Masterpiece of <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Power & Simplicity</span>
          </h2>
          <p className="text-lg text-slate-400">
            ARCubo is engineered down to the pixel, ensuring a buttery-smooth 120Hz tracking loop while preserving battery life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Feature 1 */}
          <div className="glassmorphism-card p-8 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Low-Latency Tracking</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Advanced machine learning markers map features with less than 5ms latency, matching professional VR systems without wearing any bulky accessories.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="glassmorphism-card p-8 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Offline-First Spatial Anchors</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              No constant internet connection required. Download educational libraries locally and access stunning 3D models anytime, anywhere.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="glassmorphism-card p-8 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 mb-6 border border-pink-500/20">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Universal WebXR Engine</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Built to work with standard WebXR. Run interactive holograms on any desktop, browser, tablet, or headsets like Meta Quest 3 or Apple Vision Pro.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="glassmorphism-card p-8 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Open-Source Developer SDK</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Our developer SDK makes it easy to integrate with Unity, Unreal Engine, and React Three Fiber. Write custom code in JavaScript, C#, or C++.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="glassmorphism-card p-8 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6 border border-amber-500/20">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Battery-Optimized</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              A pure hardware tracker needs no internal battery. Your smartphone is only executing calculations when actively analyzing spatial matrices, saving up to 60% juice.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="glassmorphism-card p-8 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Multi-Marker Synchronization</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Combine up to 4 physical ARCubos together on the same surface to trigger complex multi-object chemical bonds, tactical layouts, or multi-player gaming maps.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
