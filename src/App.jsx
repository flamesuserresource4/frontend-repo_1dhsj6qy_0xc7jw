import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Method from './components/Method';
import Gallery from './components/Gallery';
import BeforeAfter from './components/BeforeAfter';
import TechDetails from './components/TechDetails';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-amber-50 text-stone-900 font-inter">
      <Navbar />
      <Hero />
      <Method />
      <BeforeAfter
        title="Before/After Comparison"
        before="https://images.unsplash.com/photo-1558980664-10f9163e3fd8?q=80&w=1600&auto=format&fit=crop"
        after="https://images.unsplash.com/photo-1585320806297-9794b3c04c19?q=80&w=1600&auto=format&fit=crop"
        credit="Images via Unsplash"
      />
      <Gallery />
      <TechDetails />
      <Contact />
      <Footer />
    </div>
  );
}
