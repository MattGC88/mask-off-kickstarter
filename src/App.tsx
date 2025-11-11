import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Stats } from "./components/Stats";
import { Gallery } from "./components/Gallery";
import { CallToAction } from "./components/CallToAction";

export default function App() {
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
