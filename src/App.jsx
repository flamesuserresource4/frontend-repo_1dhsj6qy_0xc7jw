import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BeforeAfter from './components/BeforeAfter';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-amber-50 text-stone-900 font-inter">
      <Navbar />
      <Hero />
      {/* Subtle, modern sections with no external image dependency */}
      <BeforeAfter title="Before/After Comparison" credit="Drag to compare" />
      <Gallery />
      <Footer />
    </div>
  );
}
