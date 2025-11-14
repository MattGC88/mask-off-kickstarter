import { Hero } from './components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { Stats } from '@/components/landing/Stats';
import { Gallery } from '@/components/landing/Gallery';
import { CallToAction } from '@/components/landing/CallToAction';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Hero />
      <Features />
      <Stats />
      <Gallery />
      <CallToAction />
    </div>
  );
}

export default App;
