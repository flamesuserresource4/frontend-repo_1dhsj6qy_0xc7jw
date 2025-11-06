import Hero from './components/Hero';
import BeforeAfter from './components/BeforeAfter';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-amber-50 text-stone-900 font-inter">
      {/* Focused 4-section layout: immersive hero, comparison, gallery, footer */}
      <Hero />

      <BeforeAfter
        title="Ancient Artifact Restoration"
        before="https://source.unsplash.com/1600x900/?ancient,artifact,weathered,broken"
        after="https://source.unsplash.com/1600x900/?ancient,artifact,restored,museum"
        credit="Images via Unsplash"
      />

      <Gallery />

      <Footer />
    </div>
  );
}
