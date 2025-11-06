import { Rocket, Github } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-indigo-600 via-fuchsia-500 to-rose-500 text-white">
            <Rocket size={18} />
          </span>
          <span className="text-slate-800">NeoRestoration</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#method" className="hover:text-slate-900 transition-colors">Method</a>
          <a href="#gallery" className="hover:text-slate-900 transition-colors">Showcase</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3 py-2 text-sm font-medium hover:bg-slate-800 transition-colors"
          >
            <Github size={16} />
            View Code
          </a>
        </div>
      </nav>
    </header>
  );
}
