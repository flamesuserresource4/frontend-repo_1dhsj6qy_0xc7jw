import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Method from './components/Method';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="border-t border-amber-200/70 bg-amber-50/60">
      <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-stone-600 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} NeoRestoration — Virtual Reconstruction with GANs</p>
        <div className="flex items-center gap-4">
          <a href="#method" className="hover:text-stone-800">Method</a>
          <a href="#gallery" className="hover:text-stone-800">Showcase</a>
          <a href="#contact" className="hover:text-stone-800">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-amber-50 text-stone-900 font-inter">
      <Navbar />
      <Hero />
      <Method />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
