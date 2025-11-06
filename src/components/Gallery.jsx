import { motion } from 'framer-motion';

const items = [
  {
    title: 'Roman Bust (Marble)',
    before:
      'https://images.unsplash.com/photo-1578926375605-eaf7559b145d?q=80&w=1640&auto=format&fit=crop',
    after:
      'https://images.unsplash.com/photo-1622495891210-5c50b62ddb29?q=80&w=1640&auto=format&fit=crop',
  },
  {
    title: 'Fresco Fragment',
    before:
      'https://images.unsplash.com/photo-1558980664-10f9163e3fd8?q=80&w=1640&auto=format&fit=crop',
    after:
      'https://images.unsplash.com/photo-1612320654028-26a2e5207b16?q=80&w=1640&auto=format&fit=crop',
  },
  {
    title: 'Greek Relief',
    before:
      'https://images.unsplash.com/photo-1562514948-1b46bb19b7a2?q=80&w=1640&auto=format&fit=crop',
    after:
      'https://images.unsplash.com/photo-1596495578066-3b1a7b5ace6f?q=80&w=1640&auto=format&fit=crop',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Before → After</h2>
            <p className="mt-3 text-slate-600">Sample reconstructions to illustrate the visual restoration.</p>
          </div>
          <div className="text-sm text-slate-500">Drag to compare</div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3]">
                <img src={card.after} alt="after" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <span className="inline-flex rounded bg-emerald-500/90 text-white text-xs font-medium px-2 py-1">GAN Output</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-1 text-sm text-slate-600">Reconstructed using a conditional GAN with perceptual loss.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
