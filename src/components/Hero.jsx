import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full">
      {/* Full-bleed cover height */}
      <div className="relative h-[72vh] sm:h-[78vh] lg:h-[86vh] overflow-hidden rounded-none">
        {/* Spline interactive cover */}
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Soft gradient overlays that don't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/70" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.25] [background:radial-gradient(60rem_40rem_at_10%_-10%,rgba(245,158,11,0.25),transparent),radial-gradient(50rem_30rem_at_110%_10%,rgba(120,113,108,0.25),transparent)]" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 h-full grid items-center">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 rounded-full border border-amber-200/60 bg-white/60 backdrop-blur px-3 py-1 text-xs font-medium text-stone-700 shadow-sm"
            >
              GAN Restoration • Cultural Heritage • Minimal UI
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
              className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-stone-900"
            >
              Virtual reconstruction of ancient artifacts — modern, subtle, and immersive
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              className="mt-4 text-stone-700 text-lg leading-relaxed max-w-2xl"
            >
              We showcase GAN-powered restorations through a minimalist canvas. Interact with the tiled cover and explore respectful, data-driven reconstructions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#compare" className="inline-flex items-center rounded-md bg-stone-900 px-4 py-2.5 text-amber-50 font-medium shadow-sm hover:bg-stone-800 transition">Compare reconstructions</a>
              <a href="#about" className="inline-flex items-center rounded-md border border-stone-300 bg-white/70 backdrop-blur px-4 py-2.5 text-stone-800 font-medium hover:bg-white transition">Learn the method</a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
