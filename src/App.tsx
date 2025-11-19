import { Hero } from './components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { Stats } from '@/components/landing/Stats';
import { ThePlan } from '@/components/landing/ThePlan';
import { Gallery } from '@/components/landing/Gallery';
import { CallToAction } from '@/components/landing/CallToAction';

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Block 1: The Header (Hero with UVP) */}
      <Hero />

      {/* Block 2: The Problem (The Villain) */}
      <Features />

      {/* Block 3: The Guide (MaskOff as the Cure) */}
      <Stats />

      {/* Block 4: The Plan (3 Steps to Authenticity) */}
      <ThePlan />

      {/* Block 5: Social Proof (Testimonials) */}
      <Gallery />

      {/* Block 6: Stakes & Cure (Final CTA) */}
      <CallToAction />
    </div>
  );
}

export default App;
