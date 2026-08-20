import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { OverviewSection } from './components/OverviewSection';
import { FeaturesSection } from './components/FeaturesSection';
import { MindARSection } from './components/MindARSection';
import { ARSimulatorSection } from './components/ARSimulatorSection';
import { SpecificationsSection } from './components/SpecificationsSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TrustBadgesSection } from './components/TrustBadgesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

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
        <MindARSection />
        <ARSimulatorSection />
        <SpecificationsSection />
        <PricingSection onSelectPlan={handleSelectPlan} />
        <TestimonialsSection />
        <TrustBadgesSection />
        <ContactSection initialMessage={initialContactMessage} />
      </main>
      <Footer />
    </div>
  );
}
