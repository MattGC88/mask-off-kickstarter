import { Hero } from './components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { GameplayPreview } from '@/components/landing/GameplayPreview';
import { Gallery } from '@/components/landing/Gallery';
import { SocialWall } from '@/components/landing/SocialWall';
import { CallToAction } from '@/components/landing/CallToAction';

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Urgency Bar */}
      {/*<UrgencyBar />*/}

      {/* Block 1: The Header (Hero with UVP) */}
      <Hero />

      {/* Block 2: The Problem (The Villain) */}
      <Features />

      {/* Block 2.5: Gameplay Preview (See It In Action) */}
      <GameplayPreview />

      {/* Block 4: The Plan (3 Steps to Authenticity) */}
      {/* <ThePlan /> */}

      {/* Block 4.5: Backer Rewards (Tier Breakdown) */}
      {/* <BackerRewards /> */}

      {/* Block 5: Social Proof (Testimonials) */}
      <Gallery />

      {/* Block 5.5: Social Wall (UGC Community) */}
      <SocialWall />

      {/* Block 6: Stakes & Cure (Final CTA) */}
      <CallToAction />
    </div>
  );
}

export default App;
