import React, { useState } from 'react';
import { Menu, X, Boxes } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
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
              aria-label="Toggle menu"
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
  );
};
