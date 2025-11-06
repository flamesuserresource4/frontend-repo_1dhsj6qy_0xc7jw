import { Landmark, Github } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-amber-50/70 bg-amber-50/80 border-b border-amber-200/70">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-stone-900 via-stone-800 to-stone-700 text-amber-50">
            <Landmark size={18} />
          </span>
          <span className="text-stone-900">NeoRestoration</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-stone-700">
          <a href="#method" className="hover:text-stone-900 transition-colors">Method</a>
          <a href="#gallery" className="hover:text-stone-900 transition-colors">Showcase</a>
          <a href="#contact" className="hover:text-stone-900 transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-2 rounded-md bg-stone-900 text-amber-50 px-3 py-2 text-sm font-medium hover:bg-stone-800 transition-colors shadow-sm"
          >
            <Github size={16} />
            View Code
          </a>
        </div>
      </nav>
    </header>
  );
}
