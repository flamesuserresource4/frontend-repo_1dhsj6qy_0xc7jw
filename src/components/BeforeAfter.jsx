import { useState } from 'react';
import { motion } from 'framer-motion';

// Before/After slider with graceful fallback if image URLs are unavailable.
export default function BeforeAfter({
  title = 'Restoration Preview',
  before,
  after,
  credit,
}) {
  const [pos, setPos] = useState(55); // percentage of reveal for "after"

  const hasBefore = typeof before === 'string' && before.length > 0;
  const hasAfter = typeof after === 'string' && after.length > 0;

  return (
    <section id="compare" className="py-20 sm:py-24 bg-gradient-to-b from-stone-50 to-amber-100/60">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-8">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-stone-900">{title}</h2>
          <p className="mt-3 text-stone-700">Drag the handle to compare the original damaged artifact with the GAN-restored result.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative rounded-3xl overflow-hidden border border-amber-200 bg-amber-50 shadow-sm"
          style={{ aspectRatio: '16 / 9' }}
        >
          {/* Before layer */}
          {hasBefore ? (
            <img src={before} alt="Before restoration" className="absolute inset-0 h-full w-full object-cover select-none" />
          ) : (
            <div className="absolute inset-0 select-none" aria-label="Before restoration" style={{
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.25), rgba(250, 250, 249, 0.6))',
            }} />
          )}

          {/* After layer with clip controlled by slider position */}
          {hasAfter ? (
            <img
              src={after}
              alt="After restoration"
              className="absolute inset-0 h-full w-full object-cover select-none"
              style={{ clipPath: `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)` }}
            />
          ) : (
            <div
              className="absolute inset-0 select-none"
              aria-label="After restoration"
              style={{
                clipPath: `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)`,
                background: 'linear-gradient(135deg, rgba(12,12,12,0.85), rgba(41,37,36,0.75))',
                mixBlendMode: 'multiply',
              }}
            />
          )}

          {/* Divider line */}
          <div
            className="absolute top-0 bottom-0 w-px bg-white/80 shadow-[0_0_0_1px_rgba(0,0,0,0.06)]"
            style={{ left: `${pos}%` }}
          />

          {/* Handle */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -ml-3 h-10 w-10 rounded-full bg-stone-900 text-amber-50 grid place-items-center shadow-md"
            style={{ left: `${pos}%` }}
            aria-hidden
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
