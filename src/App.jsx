import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Cpu,
  Layers,
  Sparkles,
  Globe,
  Terminal,
  CheckCircle,
  Zap,
  Gamepad2,
  Boxes,
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
  Send,
  Star,
  Smartphone,
  Check,
  Code,
  RotateCw,
  Eye,
  Settings,
  Activity,
  Heart,
  Orbit,
  Building2,
  Compass,
  Download,
  ShieldCheck,
  BadgeAlert,
  Award,
  EyeOff
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('space');

  // Simulator State
  const [rotationX, setRotationX] = useState(25);
  const [rotationY, setRotationY] = useState(45);
  const [autoRotate, setAutoRotate] = useState(true);
  const [projectionIntensity, setProjectionIntensity] = useState(85);

  // Auto rotation effect
  useEffect(() => {
    let interval;
    if (autoRotate) {
      interval = setInterval(() => {
        setRotationY((prev) => (prev + 1) % 360);
      }, 50);
    }
    return () => clearInterval(interval);
  }, [autoRotate]);

  // Form State
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  // Active Specifications Category Tab
  const [specsTab, setSpecsTab] = useState('hardware');

  // Copy Code State
  const [copiedCode, setCopiedCode] = useState(false);

  const codeSnippet = `<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Mind-AR Marker-to-World & Touch Gestures Demo | ARCubo</title>
    <!-- A-Frame & Mind-AR Library -->
    <script src="https://aframe.io/releases/1.5.0/aframe.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/mind-ar@1.2.5/dist/mindar-image-aframe.prod.js"></script>
    
    <script>
      // 1. Komponen 'detach-on-target': Mengunci posisi objek ke koordinat dunia (World Space)
      AFRAME.registerComponent('detach-on-target', {
        init: function () {
          const el = this.el;
          const target = document.querySelector('#mytarget');
          let isDetached = false;

          target.addEventListener("targetFound", () => {
            if (isDetached) return; // Jalankan sekali saja saat marker pertama terdeteksi

            const worldPos = new THREE.Vector3();
            const worldQuat = new THREE.Quaternion();
            const worldScale = new THREE.Vector3();

            el.object3D.getWorldPosition(worldPos);
            el.object3D.getWorldQuaternion(worldQuat);
            el.object3D.getWorldScale(worldScale);

            const sceneEl = el.sceneEl;
            sceneEl.object3D.add(el.object3D);

            el.object3D.position.copy(worldPos);
            el.object3D.quaternion.copy(worldQuat);
            el.object3D.scale.copy(worldScale);

            isDetached = true;
            console.log("Objek berhasil dikunci di posisi dunia!");
          });
        }
      });

      // 2. Komponen Gesture Controls: Drag to Rotate & Pinch to Scale
      AFRAME.registerComponent('gesture-handler', {
        schema: {
          enabled: { default: true },
          rotationFactor: { default: 5 },
          minScale: { default: 0.1 },
          maxScale: { default: 5 }
        },
        init: function () {
          this.handleTouchMove = this.handleTouchMove.bind(this);
          this.handleTouchStart = this.handleTouchStart.bind(this);
          this.touchStartPos = { x: 0, y: 0 };
          this.touchStartDist = 0;

          window.addEventListener('touchstart', this.handleTouchStart);
          window.addEventListener('touchmove', this.handleTouchMove);
        },
        handleTouchStart: function (e) {
          if (e.touches.length === 1) {
            this.touchStartPos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
          } else if (e.touches.length === 2) {
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            this.touchStartDist = Math.hypot(dx, dy);
          }
        },
        handleTouchMove: function (e) {
          if (!this.data.enabled) return;

          // Drag to Rotate
          if (e.touches.length === 1) {
            const deltaX = e.touches[0].clientX - this.touchStartPos.x;
            const deltaY = e.touches[0].clientY - this.touchStartPos.y;

            this.el.object3D.rotation.y += (deltaX * 0.005) * (this.data.rotationFactor / 2);
            this.el.object3D.rotation.x += (deltaY * 0.005) * (this.data.rotationFactor / 2);

            this.touchStartPos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
          }
          // Pinch to Scale
          else if (e.touches.length === 2 && this.touchStartDist > 0) {
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            const newDist = Math.hypot(dx, dy);

            const factor = newDist / this.touchStartDist;
            let newScale = this.el.object3D.scale.x * factor;
            newScale = Math.min(Math.max(newScale, this.data.minScale), this.data.maxScale);
            this.el.object3D.scale.set(newScale, newScale, newScale);

            this.touchStartDist = newDist;
          }
        }
      });
    </script>
  </head>
  <body>
    <a-scene 
      mindar-image="imageTargetSrc: ./mindar/targets.mind;" 
      color-space="sRGB" 
      renderer="colorManagement: true, physicallyCorrectLights" 
      vr-mode-ui="enabled: false" 
      device-orientation-permission-ui="enabled: false">
      
      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <!-- Target Marker -->
      <a-entity id="mytarget" mindar-image-target="targetIndex: 0">
        <!-- Objek 3D dengan detach-on-target & gesture-handler -->
        <a-gltf-model 
          id="my-model" 
          src="./mindar/model.glb" 
          scale="0.5 0.5 0.5" 
          detach-on-target 
          gesture-handler>
        </a-gltf-model>
      </a-entity>
    </a-scene>
  </body>
</html>`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 3000);
  };

  // Handle Form Submissions
  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (contactName && contactEmail && contactMessage) {
      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 5000);
      setContactName('');
      setContactEmail('');
      setContactMessage('');
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubmitted(true);
      setTimeout(() => setNewsletterSubmitted(false), 5000);
      setNewsletterEmail('');
    }
  };

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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* HEADER SECTION */}
      <header className="sticky top-0 z-50 glassmorphism border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/20">
                <Boxes className="w-5 h-5 text-white" />
                <div className="absolute -inset-0.5 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              </div>
              <div>
                <span className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
                  ARCubo
                </span>
                <span className="block text-[10px] text-indigo-400 font-medium tracking-widest uppercase">Augmented Reality</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#overview" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200">Overview</a>
              <a href="#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200">Features</a>
              <a href="#mindar" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200">Mind-AR Engine</a>
              <a href="#simulator" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200">AR Simulator</a>
              <a href="#specs" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200">Specifications</a>
              <a href="#pricing" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200">Pricing</a>
              <a href="#contact" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200">Contact</a>
            </nav>

            {/* Header CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#pricing"
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-slate-100 rounded-lg group bg-gradient-to-br from-indigo-600 to-purple-600 group-hover:from-indigo-600 group-hover:to-purple-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-indigo-800 transition duration-300"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-slate-950 rounded-md group-hover:bg-opacity-0">
                  Pre-Order Now
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glassmorphism border-b border-slate-900 transition-all duration-300 ease-in-out">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              <a
                href="#overview"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900"
              >
                Overview
              </a>
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900"
              >
                Features
              </a>
              <a
                href="#mindar"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900"
              >
                Mind-AR Engine
              </a>
              <a
                href="#simulator"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900"
              >
                AR Simulator
              </a>
              <a
                href="#specs"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900"
              >
                Specifications
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900"
              >
                Pricing
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900"
              >
                Contact
              </a>
              <div className="pt-4 pb-2 px-3">
                <a
                  href="#pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25"
                >
                  Pre-Order Now
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTAINER */}
      <main className="flex-grow">

        {/* HERO SECTION */}
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

        {/* PRODUCT OVERVIEW SECTION */}
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

        {/* CORE FEATURES SECTION */}
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

        {/* MIND-AR FLEXIBILITY & MARKER-TO-WORLD SECTION */}
        <section id="mindar" className="py-24 bg-slate-900/40 border-b border-slate-900 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
                <Globe className="w-3.5 h-3.5 text-cyan-400" /> Solusi Fleksibilitas Perangkat Maksimal
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                Kenapa Tetap Memilih <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">Mind-AR</span>?
              </h2>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                Jika fleksibilitas perangkat (dukungan HP yang luas) adalah prioritas utama, tetap menggunakan <strong>Mind-AR</strong> adalah pilihan yang paling tepat.
              </p>
            </div>

            {/* Comparison & Explanation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* WebXR Hit-Test Limitations */}
              <div className="p-8 bg-slate-950/80 border border-rose-500/30 rounded-2xl relative overflow-hidden">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400">
                    <BadgeAlert className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Keterbatasan WebXR Hit-Test</h3>
                    <span className="text-xs text-rose-400 font-mono">Membutuhkan Sensor ARKhusus</span>
                  </div>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  WebXR Hit-Test membutuhkan sensor khusus (<strong>ARCore</strong> di Android / <strong>ARKit</strong> di iOS) yang sering kali <strong>tidak tersedia</strong> di HP kelas entry-level atau browser iOS (Safari) tertentu. Hal ini membatasi jangkauan pengguna aplikasi AR Anda.
                </p>
              </div>

              {/* Mind-AR Solution Advantage */}
              <div className="p-8 bg-slate-950/80 border border-emerald-500/30 rounded-2xl relative overflow-hidden">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Keunggulan Mind-AR</h3>
                    <span className="text-xs text-emerald-400 font-mono">Dapat Berjalan di Hampir Semua HP</span>
                  </div>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Sebaliknya, Mind-AR dapat berjalan di hampir semua HP selama memiliki kamera dan browser modern. Murni mengandalkan Computer Vision ringan via JavaScript (TensorFlow.js / Three.js) tanpa ketergantungan hardware khusus.
                </p>
              </div>
            </div>

            {/* Marker-to-World Steps */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white text-center mb-8">
                Solusi Fleksibel: Trik <span className="text-indigo-400 font-mono">"Marker-to-World"</span> di Mind-AR
              </h3>
              <p className="text-center text-slate-400 text-sm max-w-2xl mx-auto mb-10">
                Agar tetap bisa menggunakan Mind-AR namun mendapatkan fitur bebas meletakkan/mengunci objek di ruang nyata:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Step 1 */}
                <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-sm mb-4 font-mono">01</div>
                    <h4 className="text-lg font-bold text-white mb-2">Marker Sebagai Pemicu Awal (Initial Anchor)</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Pengguna melakukan scan marker/kartu di atas meja. Begitu objek 3D muncul, kamu langsung melepas ikatan (unparent) objek dari marker tersebut.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-sm mb-4 font-mono">02</div>
                    <h4 className="text-lg font-bold text-white mb-2">Kunci Objek ke Koordinat Dunia (World Coordinates)</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Setelah dilepas, objek 3D akan menetap di posisi meja tersebut meskipun kartu ditarik, digeser, atau disimpan.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold text-sm mb-4 font-mono">03</div>
                    <h4 className="text-lg font-bold text-white mb-2">Tambahkan Kontrol Manual (Sentuhan Layar)</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Beri fitur gesture touch pada layar HP agar pengguna bisa memutar (rotate), menggeser (translate), atau mengubah ukuran (scale) objek 3D secara manual jika posisinya ingin disesuaikan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Code Snippet Box */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-2xl mb-16">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-indigo-400" />
                  <span className="font-bold text-white text-sm">Contoh Kode Siap Pakai (A-Frame + Mind-AR)</span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="./mindar-demo.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600/20 border border-indigo-500/40 text-xs font-semibold text-indigo-300 hover:bg-indigo-600 hover:text-white transition-all"
                  >
                    Buka Demo Langsung <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={handleCopyCode}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-all"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Code className="w-3.5 h-3.5" />}
                    {copiedCode ? 'Tersalin!' : 'Salin Kode'}
                  </button>
                </div>
              </div>

              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Skrip komponen berikut mengunci posisi objek di ruang 3D nyata tepat saat marker pertama kali terdeteksi:
              </p>

              <pre className="bg-slate-900/90 p-4 rounded-xl text-xs font-mono text-emerald-300 overflow-x-auto border border-slate-800/80 leading-relaxed">
                {codeSnippet}
              </pre>
            </div>

            {/* Advantages Summary */}
            <div className="bg-gradient-to-r from-indigo-950/40 via-slate-900/60 to-purple-950/40 border border-indigo-500/30 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Keuntungan Pendekatan Ini</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-white mb-1">Kompatibilitas Maksimal</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">Berjalan lancar di Android murah, iPhone lama, Chrome, Safari, maupun Firefox.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-white mb-1">Tidak Butuh ARCore/ARKit</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">Murni mengandalkan Computer Vision ringan via JavaScript (TensorFlow.js/Three.js).</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-white mb-1">Bebas Hambatan Pengguna</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">Pengguna tidak perlu repot menahan kartu di depan kamera terus-menerus.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* INTERACTIVE AR SIMULATOR SECTION */}
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

        {/* TECHNICAL SPECIFICATIONS SECTION */}
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

        {/* PRICING PLANS SECTION */}
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
                      setContactMessage("Hello! I'm interested in purchasing the ARCubo Pro Companion Kit. Please provide details.");
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
                      setContactMessage("Hello! I want to inquire about custom ARCubo Enterprise options for our institution.");
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

        {/* CUSTOMER REVIEWS / TESTIMONIALS SECTION */}
        <section className="py-24 bg-slate-950 border-b border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                Loved by <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Creators & Educators</span>
              </h2>
              <p className="text-lg text-slate-400">
                See how ARCubo is changing the perspective of visualization and interaction across the globe.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Testimonial 1 */}
              <div className="p-8 bg-slate-900/40 border border-slate-900 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    <Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" />
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                    "ARCubo completely transformed my grade 7 biology curriculum. Being able to pass a physical cube around and let students hold and inspect a beating human heart hologram is absolutely mind-blowing."
                  </p>
                </div>
                <div>
                  <strong className="block text-white text-sm font-bold">Dr. Amanda Vance</strong>
                  <span className="block text-xs text-slate-500">STEM Curriculum Director, Lincoln Academy</span>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="p-8 bg-slate-900/40 border border-slate-900 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    <Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" />
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                    "The latency is incredibly low. I've integrated the WebXR SDK with my React Three Fiber dashboard in minutes. Previewing real estate layouts dynamically on physical desk objects is exactly the UX improvement we needed."
                  </p>
                </div>
                <div>
                  <strong className="block text-white text-sm font-bold">Marcus Sterling</strong>
                  <span className="block text-xs text-slate-500">Principal UX Architect, NexaSpace Studio</span>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="p-8 bg-slate-900/40 border border-slate-900 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    <Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" />
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                    "The passive design of the cube is pure genius. No recharging required, no battery degraded. I just drop the cube in my bag, and it's always ready to display game elements on my phone in 120FPS."
                  </p>
                </div>
                <div>
                  <strong className="block text-white text-sm font-bold">Zackery Finch</strong>
                  <span className="block text-xs text-slate-500">Indie Game Developer, FINCH_GAMES</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECURE PURCHASE BADGES SECTION */}
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

        {/* NEWSLETTER & CONTACT FORM SECTION WITH VALIDATION */}
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
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Your Message</label>
                  <textarea
                    id="message"
                    required
                    rows="4"
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
                    <span className="block text-xs text-emerald-400/80 mt-0.5">Thank you for contacting ARCubo. Our engineers are already review your inquiry.</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER SECTION */}
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
    </div>
  );
}
