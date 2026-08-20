import React, { useState } from 'react';
import { Globe, BadgeAlert, ShieldCheck, Code, ArrowRight, Check, CheckCircle } from 'lucide-react';

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

export const MindARSection: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 3000);
  };

  return (
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
                <span className="text-xs text-rose-400 font-mono">Membutuhkan Sensor AR Khusus</span>
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
  );
};
