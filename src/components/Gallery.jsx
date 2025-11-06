import { motion } from 'framer-motion';

const items = [
  { title: 'Roman Bust (Marble)' },
  { title: 'Fresco Fragment' },
  { title: 'Greek Relief' },
  { title: 'Mosaic Detail' },
  { title: 'Bronze Coin' },
  { title: 'Temple Column' },
];

function PlaceholderTile({ label }) {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-100 to-stone-100">
      {/* Soft pattern */}
      <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(circle_at_1px_1px,rgba(120,113,108,0.15)_1px,transparent_1px)]; [background-size:20px_20px]" />
      {/* Subtle inner shadow */}
      <div className="pointer-events-none absolute inset-0 shadow-inner shadow-black/5" />
      {/* Label */}
      <div className="absolute inset-x-0 bottom-0 p-4">
        <div className="inline-flex items-center gap-2 rounded bg-stone-900/80 px-2 py-1 text-[11px] font-medium text-amber-50">
          {label}
          <span className="text-amber-200/80">•</span>
          GAN-enhanced preview
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-stone-900">Curated Showcase</h2>
            <p className="mt-3 text-stone-700">No external images required — clean, modern placeholders that keep focus on content.</p>
          </div>
          <div className="text-sm text-stone-500">Subtle motion, fast load</div>
        </div>

        <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]"><div className="grid gap-4">
          {items.map((card, idx) => (
            <motion.figure
              key={card.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: idx * 0.03, ease: 'easeOut' }}
              className="break-inside-avoid rounded-2xl overflow-hidden border border-amber-200 bg-amber-50 shadow-sm"
            >
              <PlaceholderTile label={card.title} />
              <figcaption className="p-4">
                <h3 className="font-semibold text-stone-900 text-sm">{card.title}</h3>
                <p className="mt-1 text-xs text-stone-700">Replace with your artifact photos anytime.</p>
              </figcaption>
            </motion.figure>
          ))}
        </div></div>
      </div>
    </section>
  );
}
