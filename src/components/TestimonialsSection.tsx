import React from 'react';
import { Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
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
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
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
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
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
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
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
  );
};
