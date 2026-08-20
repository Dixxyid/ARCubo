import React, { useState, useEffect } from 'react';
import { Sparkles, Settings, Orbit, Heart, Building2, Gamepad2, Activity, Smartphone, Cpu, Compass } from 'lucide-react';
import { ActiveTab } from '../types';

export const ARSimulatorSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('space');

  // Simulator State
  const [rotationX, setRotationX] = useState<number>(25);
  const [rotationY, setRotationY] = useState<number>(45);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [projectionIntensity, setProjectionIntensity] = useState<number>(85);

  // Auto rotation effect using requestAnimationFrame for butter-smooth 60fps & low CPU
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      if (autoRotate) {
        const delta = time - lastTime;
        if (delta >= 50) {
          setRotationY((prev) => (prev + 1) % 360);
          lastTime = time;
        }
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    if (autoRotate) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [autoRotate]);

  // Projection Rendering details
  const renderProjection = () => {
    const intensityStyle = { opacity: projectionIntensity / 100 };

    switch (activeTab) {
      case 'space':
        return (
          <div className="relative w-64 h-64 flex items-center justify-center transition-all duration-500" style={intensityStyle}>
            {/* Hologram Beams */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-64 bg-gradient-to-t from-indigo-500/30 via-cyan-500/10 to-transparent clip-path-beam pointer-events-none rounded-b-full"></div>

            {/* Solar System Orbitals */}
            <div className="absolute w-48 h-48 border border-indigo-500/20 rounded-full animate-[spin_10s_linear_infinite] flex items-center justify-center">
              <div className="absolute top-0 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
            </div>
            <div className="absolute w-32 h-32 border border-purple-500/30 rounded-full animate-[spin_6s_linear_infinite_reverse] flex items-center justify-center">
              <div className="absolute right-0 w-2 h-2 bg-pink-400 rounded-full shadow-[0_0_8px_#f472b6]"></div>
            </div>

            {/* Center Star / Sun */}
            <div className="relative w-12 h-12 bg-gradient-to-tr from-amber-400 to-yellow-300 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.6)] animate-pulse">
              <Orbit className="w-6 h-6 text-amber-900 animate-spin" />
            </div>

            {/* Floating telemetry text */}
            <div className="absolute top-4 left-4 bg-slate-950/85 px-2 py-1 rounded border border-cyan-500/30 text-[9px] font-mono text-cyan-400 backdrop-blur-sm">
              SYS: ORBIT_SIM_v2.4<br/>
              BODIES: 3 | DIST: 1.2 AU
            </div>
          </div>
        );
      case 'anatomy':
        return (
          <div className="relative w-64 h-64 flex items-center justify-center transition-all duration-500" style={intensityStyle}>
            {/* Hologram Beams */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-64 bg-gradient-to-t from-rose-500/30 via-red-500/10 to-transparent clip-path-beam pointer-events-none rounded-b-full"></div>

            {/* Beating Heart Silhouette and Rings */}
            <div className="absolute w-40 h-40 border border-rose-500/20 rounded-full animate-ping opacity-25"></div>
            <div className="absolute w-32 h-32 border border-rose-500/30 rounded-full animate-pulse flex items-center justify-center">
              <Heart className="w-16 h-16 text-rose-500 drop-shadow-[0_0_15px_rgba(244,63,94,0.6)] animate-[bounce_1s_infinite]" />
            </div>

            {/* ECG Grid Line Overlay */}
            <svg className="absolute bottom-6 left-6 w-52 h-12 text-rose-400/60" viewBox="0 0 200 50">
              <path
                d="M 0 25 L 30 25 L 40 10 L 50 40 L 60 25 L 100 25 L 110 5 L 120 45 L 130 25 L 200 25"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="200"
                strokeDashoffset="0"
                className="animate-[dash_2s_linear_infinite]"
              />
            </svg>

            {/* Floating telemetry text */}
            <div className="absolute top-4 left-4 bg-slate-950/85 px-2 py-1 rounded border border-rose-500/30 text-[9px] font-mono text-rose-400 backdrop-blur-sm">
              BPM: 72 | SRV: OK<br/>
              FLOW: 5.2 L/MIN
            </div>
          </div>
        );
      case 'architecture':
        return (
          <div className="relative w-64 h-64 flex items-center justify-center transition-all duration-500" style={intensityStyle}>
            {/* Hologram Beams */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-64 bg-gradient-to-t from-emerald-500/30 via-teal-500/10 to-transparent clip-path-beam pointer-events-none rounded-b-full"></div>

            {/* Architectural Building Mock */}
            <div className="relative w-32 h-44 border border-emerald-500/40 rounded bg-emerald-950/10 flex flex-col justify-between p-2 shadow-[0_0_20px_rgba(16,185,129,0.15)] animate-pulse">
              <div className="w-full h-1/4 border-b border-dashed border-emerald-500/30 flex items-center justify-center">
                <span className="text-[8px] text-emerald-400 font-mono">PENTHOUSE</span>
              </div>
              <div className="w-full h-1/2 border-b border-dashed border-emerald-500/30 flex items-center justify-around">
                <div className="w-3 h-full border-r border-dashed border-emerald-500/20"></div>
                <div className="w-3 h-full border-l border-dashed border-emerald-500/20"></div>
              </div>
              <div className="w-full h-1/4 flex items-center justify-center gap-1">
                <Building2 className="w-4 h-4 text-emerald-400" />
                <span className="text-[7px] text-emerald-500 font-mono">LEVEL 01-34</span>
              </div>
            </div>

            {/* Scanning Laser Line */}
            <div className="absolute w-44 h-0.5 bg-emerald-400 shadow-[0_0_10px_#34d399] animate-[scan_3s_ease-in-out_infinite]"></div>

            {/* Floating telemetry text */}
            <div className="absolute top-4 left-4 bg-slate-950/85 px-2 py-1 rounded border border-emerald-500/30 text-[9px] font-mono text-emerald-400 backdrop-blur-sm">
              STRUCT: ECO_TOWER<br/>
              SCALE: 1:250 | UNIT: M
            </div>
          </div>
        );
      case 'gaming':
        return (
          <div className="relative w-64 h-64 flex items-center justify-center transition-all duration-500" style={intensityStyle}>
            {/* Hologram Beams */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-64 bg-gradient-to-t from-purple-500/30 via-violet-500/10 to-transparent clip-path-beam pointer-events-none rounded-b-full"></div>

            {/* Retro Gaming Grid and Spacecraft */}
            <div className="absolute bottom-12 w-48 h-24 border border-purple-500/30 rounded bg-purple-950/10 overflow-hidden [perspective:60px]">
              <div className="w-full h-full border-t border-purple-500/30 [transform:rotateX(45deg)] flex flex-wrap justify-between p-1">
                {/* Simulated Grid Lines */}
                <div className="w-full h-full border border-purple-400/20 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:10px_10px] animate-[grid-move_2s_linear_infinite]"></div>
              </div>
            </div>

            <div className="absolute top-1/3 animate-bounce">
              <Gamepad2 className="w-12 h-12 text-purple-400 drop-shadow-[0_0_15px_rgba(167,139,250,0.6)]" />
            </div>

            {/* Floating telemetry text */}
            <div className="absolute top-4 left-4 bg-slate-950/85 px-2 py-1 rounded border border-purple-500/30 text-[9px] font-mono text-purple-400 backdrop-blur-sm">
              GAME: RETRO_CYBER<br/>
              FPS: 120 | LIVES: 3
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="simulator" className="py-24 relative overflow-hidden bg-slate-950/40 border-b border-slate-900">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-4 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Lab
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Experience ARCubo <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Directly in Your Browser</span>
          </h2>
          <p className="text-lg text-slate-400">
            Play with our interactive virtual simulator below. Change the projections, rotate the cube, and preview how physical markers map digital assets seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* Simulator Controls Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-slate-900/50 border border-slate-800 p-8 rounded-2xl backdrop-blur-xl">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-indigo-400 animate-spin-slow" /> Hologram Controller
              </h3>
              <p className="text-sm text-slate-400 mb-6">
                Toggle active programs to update the holographic matrix. Use spatial sliders to view physical tracker orientation from any perspective.
              </p>

              {/* Hologram Presets / Tabs */}
              <div className="space-y-3 mb-8">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Active Module</span>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setActiveTab('space')}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-semibold transition-all duration-200 ${
                      activeTab === 'space'
                        ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.15)]'
                        : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <Orbit className="w-4 h-4" /> Space Orbit
                  </button>
                  <button
                    onClick={() => setActiveTab('anatomy')}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-semibold transition-all duration-200 ${
                      activeTab === 'anatomy'
                        ? 'bg-rose-600/20 border-rose-500 text-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.15)]'
                        : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <Heart className="w-4 h-4" /> Human Heart
                  </button>
                  <button
                    onClick={() => setActiveTab('architecture')}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-semibold transition-all duration-200 ${
                      activeTab === 'architecture'
                        ? 'bg-emerald-600/20 border-emerald-500 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                        : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <Building2 className="w-4 h-4" /> Eco Tower
                  </button>
                  <button
                    onClick={() => setActiveTab('gaming')}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-semibold transition-all duration-200 ${
                      activeTab === 'gaming'
                        ? 'bg-purple-600/20 border-purple-500 text-purple-300 shadow-[0_0_15px_rgba(139,92,246,0.15)]'
                        : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <Gamepad2 className="w-4 h-4" /> Cyber Grid
                  </button>
                </div>
              </div>

              {/* Manual Rotation Sliders */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Auto Rotate</span>
                  <button
                    onClick={() => setAutoRotate(!autoRotate)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none ${
                      autoRotate ? 'bg-indigo-600' : 'bg-slate-800'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                        autoRotate ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {!autoRotate && (
                  <div className="space-y-3 animate-fadeIn">
                    <div>
                      <div className="flex justify-between text-xs font-medium text-slate-400 mb-1">
                        <span>Yaw (Y-Axis)</span>
                        <span className="font-mono text-indigo-400">{rotationY}°</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="360"
                        value={rotationY}
                        onChange={(e) => setRotationY(Number(e.target.value))}
                        className="w-full accent-indigo-500 bg-slate-800 rounded-lg h-1.5 appearance-none cursor-pointer"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-medium text-slate-400 mb-1">
                        <span>Pitch (X-Axis)</span>
                        <span className="font-mono text-indigo-400">{rotationX}°</span>
                      </div>
                      <input
                        type="range"
                        min="-45"
                        max="45"
                        value={rotationX}
                        onChange={(e) => setRotationX(Number(e.target.value))}
                        className="w-full accent-indigo-500 bg-slate-800 rounded-lg h-1.5 appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                )}

                {/* Beam Intensity Slider */}
                <div>
                  <div className="flex justify-between text-xs font-medium text-slate-400 mb-1">
                    <span>Projection Intensity</span>
                    <span className="font-mono text-indigo-400">{projectionIntensity}%</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="100"
                    value={projectionIntensity}
                    onChange={(e) => setProjectionIntensity(Number(e.target.value))}
                    className="w-full accent-indigo-500 bg-slate-800 rounded-lg h-1.5 appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Tracking Telemetry Info Box */}
            <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span>Tracking Status: <strong className="text-emerald-400 font-mono">LOCKED</strong></span>
              </div>
              <span className="font-mono text-slate-500">RES: 2160p (WebXR)</span>
            </div>
          </div>

          {/* Holographic 3D Viewport Render */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center min-h-[450px] relative bg-slate-900/30 border border-slate-800 p-8 rounded-2xl backdrop-blur-xl overflow-hidden shadow-2xl">

            {/* Nebula Background Atmosphere */}
            <div className="absolute w-72 h-72 rounded-full bg-indigo-600/10 blur-3xl -top-12 -left-12 pointer-events-none"></div>
            <div className="absolute w-72 h-72 rounded-full bg-purple-600/10 blur-3xl -bottom-12 -right-12 pointer-events-none"></div>

            {/* 3D Hologram Projection (Active Module Graphic) */}
            <div className="absolute top-8 z-20 flex flex-col items-center">
              {renderProjection()}
            </div>

            {/* 3D CSS Cube Component */}
            <div className="mt-40 relative z-10 cube-container">
              <div
                className="cube"
                style={{
                  transform: `rotateX(${-rotationX}deg) rotateY(${rotationY}deg)`
                }}
              >
                <div className="cube-face cube-face-front">ARCubo</div>
                <div className="cube-face cube-face-back">ARCubo</div>
                <div className="cube-face cube-face-right">
                  <div className="flex flex-col items-center justify-center">
                    <Smartphone className="w-6 h-6 text-indigo-400 mb-1" />
                    <span className="text-[9px] font-mono tracking-widest uppercase">TRACKER</span>
                  </div>
                </div>
                <div className="cube-face cube-face-left">
                  <div className="flex flex-col items-center justify-center">
                    <Cpu className="w-6 h-6 text-indigo-400 mb-1" />
                    <span className="text-[9px] font-mono tracking-widest uppercase">SENSOR</span>
                  </div>
                </div>
                <div className="cube-face cube-face-top">
                  <div className="w-full h-full bg-indigo-500/10 flex items-center justify-center border-4 border-indigo-500/50">
                    <div className="w-8 h-8 rounded-full bg-indigo-500/40 animate-ping"></div>
                  </div>
                </div>
                <div className="cube-face cube-face-bottom">
                  <div className="w-full h-full bg-indigo-950/90 flex items-center justify-center">
                    <Compass className="w-8 h-8 text-indigo-400/50" />
                  </div>
                </div>
              </div>
            </div>

            {/* Physical Base Desk Ring Overlay */}
            <div className="absolute bottom-12 w-64 h-12 rounded-full bg-gradient-to-t from-indigo-950 to-transparent border border-indigo-500/20 shadow-[0_0_40px_rgba(99,102,241,0.15)] transform rotateX(65deg) pointer-events-none flex items-center justify-center">
              <div className="w-48 h-8 rounded-full border border-indigo-400/40 animate-pulse"></div>
            </div>

            {/* Viewport Scale Indicator */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 text-[10px] font-mono text-slate-500">
              <span>SCALE: 1:1 REAL_WORLD</span>
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
