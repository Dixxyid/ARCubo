import React, { useState } from 'react';
import { Award } from 'lucide-react';
import { SpecsCategory } from '../types';

export const SpecificationsSection: React.FC = () => {
  const [specsTab, setSpecsTab] = useState<SpecsCategory>('hardware');

  return (
    <section id="specs" className="py-24 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Technical <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">Specifications</span>
          </h2>
          <p className="text-lg text-slate-400">
            Crafted for durability and extreme performance. Let's look inside the engineering that powers ARCubo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Specs Tabs Selection */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <button
              onClick={() => setSpecsTab('hardware')}
              className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                specsTab === 'hardware'
                  ? 'bg-slate-900 border-indigo-500/50 shadow-lg shadow-indigo-500/10'
                  : 'bg-transparent border-slate-900 hover:border-slate-800'
              }`}
            >
              <h3 className="font-bold text-white text-base">Physical & Hardware Specs</h3>
              <p className="text-xs text-slate-500 mt-1">Materials, size, precision tracking coatings, and durability.</p>
            </button>
            <button
              onClick={() => setSpecsTab('software')}
              className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                specsTab === 'software'
                  ? 'bg-slate-900 border-indigo-500/50 shadow-lg shadow-indigo-500/10'
                  : 'bg-transparent border-slate-900 hover:border-slate-800'
              }`}
            >
              <h3 className="font-bold text-white text-base">Software & Rendering Engine</h3>
              <p className="text-xs text-slate-500 mt-1">WebXR compatibility, latency metrics, and API framework support.</p>
            </button>
            <button
              onClick={() => setSpecsTab('compatibility')}
              className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                specsTab === 'compatibility'
                  ? 'bg-slate-900 border-indigo-500/50 shadow-lg shadow-indigo-500/10'
                  : 'bg-transparent border-slate-900 hover:border-slate-800'
              }`}
            >
              <h3 className="font-bold text-white text-base">Device Compatibility</h3>
              <p className="text-xs text-slate-500 mt-1">Supported smartphones, tablets, operating systems, and browsers.</p>
            </button>
          </div>

          {/* Specs Table Display */}
          <div className="lg:col-span-8 bg-slate-900/40 border border-slate-900 p-8 rounded-3xl flex flex-col justify-between">
            {specsTab === 'hardware' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="border-b border-slate-800/60 pb-4">
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">Dimensions</span>
                    <span className="text-lg font-bold text-white">8.2cm x 8.2cm x 8.2cm</span>
                  </div>
                  <div className="border-b border-slate-800/60 pb-4">
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">Weight</span>
                    <span className="text-lg font-bold text-white">120 grams (Lightweight core)</span>
                  </div>
                  <div className="border-b border-slate-800/60 pb-4">
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">Core Material</span>
                    <span className="text-lg font-bold text-white">Recycled Biodegradable Composite Polymer</span>
                  </div>
                  <div className="border-b border-slate-800/60 pb-4">
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">Optical Pattern Coating</span>
                    <span className="text-lg font-bold text-white">Ultra-Matte Anti-Reflective UV Laser-Etched Ink</span>
                  </div>
                  <div className="border-b border-slate-800/60 pb-4">
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">Internal Battery</span>
                    <span className="text-lg font-bold text-white text-indigo-400">None Required (100% passive hardware)</span>
                  </div>
                  <div className="border-b border-slate-800/60 pb-4">
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">Drop-Proof Resistance</span>
                    <span className="text-lg font-bold text-white">Up to 2 meters on solid oak</span>
                  </div>
                </div>
              </div>
            )}

            {specsTab === 'software' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="border-b border-slate-800/60 pb-4">
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">Tracking Framework</span>
                    <span className="text-lg font-bold text-white">WebXR Spatial Anchors, ARKit, ARCore</span>
                  </div>
                  <div className="border-b border-slate-800/60 pb-4">
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">Maximum Latency</span>
                    <span className="text-lg font-bold text-white text-emerald-400">&lt; 4.8ms under standard indoor light</span>
                  </div>
                  <div className="border-b border-slate-800/60 pb-4">
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">Holographic Refresh Rate</span>
                    <span className="text-lg font-bold text-white">60Hz to 120Hz (Device-Dependent)</span>
                  </div>
                  <div className="border-b border-slate-800/60 pb-4">
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">Programming SDKs</span>
                    <span className="text-lg font-bold text-white">JavaScript/TypeScript (three.js), Unity, Unreal</span>
                  </div>
                  <div className="border-b border-slate-800/60 pb-4">
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">Offline Support</span>
                    <span className="text-lg font-bold text-white">Full. Models saved locally as glTF/glb binary</span>
                  </div>
                  <div className="border-b border-slate-800/60 pb-4">
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">Simultaneous Anchors</span>
                    <span className="text-lg font-bold text-white">Supports up to 4 cubes concurrently</span>
                  </div>
                </div>
              </div>
            )}

            {specsTab === 'compatibility' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="border-b border-slate-800/60 pb-4">
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">Apple iOS devices</span>
                    <span className="text-lg font-bold text-white">iPhone XS and later, iPad Pro (all generations)</span>
                  </div>
                  <div className="border-b border-slate-800/60 pb-4">
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">Android devices</span>
                    <span className="text-lg font-bold text-white">Google Pixel 4+, Samsung Galaxy S20+, or newer</span>
                  </div>
                  <div className="border-b border-slate-800/60 pb-4">
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">Supported OS Versions</span>
                    <span className="text-lg font-bold text-white">iOS 14+, Android 10+</span>
                  </div>
                  <div className="border-b border-slate-800/60 pb-4">
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">Browsers Supported</span>
                    <span className="text-lg font-bold text-white">Google Chrome, Apple Safari, Microsoft Edge</span>
                  </div>
                  <div className="border-b border-slate-800/60 pb-4">
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">Holographic Headsets</span>
                    <span className="text-lg font-bold text-white">Meta Quest 3 / Pro, Apple Vision Pro, Magic Leap</span>
                  </div>
                  <div className="border-b border-slate-800/60 pb-4">
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">Minimum Camera Req.</span>
                    <span className="text-lg font-bold text-white">720p at 30fps with autofocus</span>
                  </div>
                </div>
              </div>
            )}

            {/* Additional engineering badge */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-white">CE & FCC Certified Safety Standards</span>
                  <span className="block text-xs text-slate-500">Manufactured with toxic-free kid-friendly coating materials.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
