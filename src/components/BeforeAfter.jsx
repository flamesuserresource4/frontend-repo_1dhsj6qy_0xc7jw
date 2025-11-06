import { useState } from 'react';
import { motion } from 'framer-motion';

// Simple before/after slider using a range input and CSS clip-path
export default function BeforeAfter({
  title = 'Restoration Preview',
  before,
  after,
  credit,
}) {
  const [pos, setPos] = useState(55); // percentage of reveal for "after"

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-stone-50 to-amber-100/60">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-8">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-stone-900">{title}</h2>
          <p className="mt-3 text-stone-700">Drag the handle to compare the original damaged artifact with the GAN-restored result.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden border border-amber-200 bg-amber-50 shadow-md"
          style={{ aspectRatio: '16 / 9' }}
        >
          {/* Before layer */}
          <img src={before} alt="Before restoration" className="absolute inset-0 h-full w-full object-cover select-none" />

          {/* After layer with clip controlled by slider position */}
          <img
            src={after}
            alt="After restoration"
            className="absolute inset-0 h-full w-full object-cover select-none"
            style={{ clipPath: `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)` }}
          />

          {/* Divider line */}
          <div
            className="absolute top-0 bottom-0 w-px bg-white/80 shadow-[0_0_0_1px_rgba(0,0,0,0.08)]"
            style={{ left: `${pos}%` }}
          />

          {/* Handle */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -ml-3 h-10 w-10 rounded-full bg-stone-900 text-amber-50 grid place-items-center shadow-lg"
            style={{ left: `${pos}%` }}
          >
            ⇆
          </div>

          {/* Range input overlay */}
          <input
            aria-label="Before after slider"
            type="range"
            min="0"
            max="100"
            value={pos}
            onChange={(e) => setPos(parseInt(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
          />

          {credit && (
            <div className="absolute right-3 bottom-3 text-[10px] px-2 py-1 rounded bg-stone-900/80 text-amber-100">{credit}</div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
