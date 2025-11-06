import { motion } from 'framer-motion';

const items = [
  {
    title: 'Roman Bust (Marble)',
    img:
      'https://images.unsplash.com/photo-1622495891210-5c50b62ddb29?q=80&w=1640&auto=format&fit=crop',
  },
  {
    title: 'Fresco Fragment',
    img:
      'https://images.unsplash.com/photo-1612320654028-26a2e5207b16?q=80&w=1640&auto=format&fit=crop',
  },
  {
    title: 'Greek Relief',
    img:
      'https://images.unsplash.com/photo-1596495578066-3b1a7b5ace6f?q=80&w=1640&auto=format&fit=crop',
  },
  {
    title: 'Mosaic Detail',
    img:
      'https://images.unsplash.com/photo-1608746827679-6bb2f44cdbad?q=80&w=1640&auto=format&fit=crop',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-stone-900">Curated Showcase</h2>
            <p className="mt-3 text-stone-700">A glimpse of reconstructions with an editorial layout.</p>
          </div>
          <div className="text-sm text-stone-500">Scroll for more</div>
        </div>

        <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]"><div className="grid gap-4">
          {items.map((card, idx) => (
            <motion.figure
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="break-inside-avoid rounded-2xl overflow-hidden border border-amber-200 bg-amber-50 shadow-sm"
            >
              <img src={card.img} alt={card.title} className="w-full object-cover" />
              <figcaption className="p-4">
                <h3 className="font-semibold text-stone-900 text-sm">{card.title}</h3>
                <p className="mt-1 text-xs text-stone-700">GAN-enhanced restoration preview.</p>
              </figcaption>
            </motion.figure>
          ))}
        </div></div>
      </div>
    </section>
  );
}
