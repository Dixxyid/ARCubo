import React, { useState, lazy, Suspense } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { OverviewSection } from './components/OverviewSection';
import { FeaturesSection } from './components/FeaturesSection';
import { BackToTop } from './components/BackToTop';
import { Footer } from './components/Footer';

// Lazy loading heavy below-the-fold components
const MindARSection = lazy(() => import('./components/MindARSection').then(m => ({ default: m.MindARSection })));
const ARSimulatorSection = lazy(() => import('./components/ARSimulatorSection').then(m => ({ default: m.ARSimulatorSection })));
const SpecificationsSection = lazy(() => import('./components/SpecificationsSection').then(m => ({ default: m.SpecificationsSection })));
const PricingSection = lazy(() => import('./components/PricingSection').then(m => ({ default: m.PricingSection })));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const TrustBadgesSection = lazy(() => import('./components/TrustBadgesSection').then(m => ({ default: m.TrustBadgesSection })));
const ContactSection = lazy(() => import('./components/ContactSection').then(m => ({ default: m.ContactSection })));

const SectionLoader: React.FC = () => (
  <div className="py-16 flex items-center justify-center text-slate-500 font-mono text-xs animate-pulse">
    <span>Loading spatial module...</span>
  </div>
);

export default function App() {
  const [initialContactMessage, setInitialContactMessage] = useState<string>('');

  const handleSelectPlan = (message: string) => {
    setInitialContactMessage(message);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <OverviewSection />
        <FeaturesSection />
        <Suspense fallback={<SectionLoader />}>
          <MindARSection />
          <ARSimulatorSection />
          <SpecificationsSection />
          <PricingSection onSelectPlan={handleSelectPlan} />
          <TestimonialsSection />
          <TrustBadgesSection />
          <ContactSection initialMessage={initialContactMessage} />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
