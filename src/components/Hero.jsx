import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ancient toned background */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-stone-50 to-amber-100" />

      {/* Soft noise/texture overlay using radial gradients */}
      <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(60rem_40rem_at_10%_-10%,rgba(124,93,35,0.08),transparent),radial-gradient(50rem_30rem_at_110%_10%,rgba(60,47,16,0.07),transparent)]" />

      {/* Decorative monuments - left */}
      <motion.img
        src="https://images.unsplash.com/photo-1578926375605-eaf7559b145d?q=80&w=1200&auto=format&fit=crop"
        alt="Ancient statue"
        className="pointer-events-none select-none absolute -left-24 bottom-[-2rem] w-72 sm:w-80 md:w-96 rotate-[-8deg] opacity-50 md:opacity-70 drop-shadow-xl rounded"
        initial={{ opacity: 0, y: 40, rotate: -12 }}
        animate={{ opacity: 0.7, y: 0, rotate: -8 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      {/* Decorative monuments - right */}
      <motion.img
        src="https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1200&auto=format&fit=crop"
        alt="Ancient temple column"
        className="pointer-events-none select-none absolute -right-24 top-6 w-72 sm:w-80 md:w-96 rotate-[10deg] opacity-40 md:opacity-60 drop-shadow-xl rounded"
        initial={{ opacity: 0, y: -40, rotate: 14 }}
        animate={{ opacity: 0.6, y: 0, rotate: 10 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="min-h-[78vh] grid lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 py-20">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50/80 px-3 py-1 text-xs font-medium text-stone-700 shadow-sm"
            >
              Deep Learning • Cultural Heritage • GANs
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-stone-900"
            >
              Virtual reconstruction of ancient ruins, sculptures, and paintings
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-stone-700 text-lg leading-relaxed max-w-2xl"
            >
              A modern, minimal interface that showcases GAN-powered restoration—bringing timeworn artifacts back to life with respectful aesthetics inspired by parchment and stone.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#gallery" className="inline-flex items-center rounded-md bg-stone-900 px-4 py-2.5 text-amber-50 font-medium shadow-sm hover:bg-stone-800 transition">View reconstructions</a>
              <a href="#method" className="inline-flex items-center rounded-md border border-stone-300 bg-white/70 backdrop-blur px-4 py-2.5 text-stone-800 font-medium hover:bg-white transition">How it works</a>
            </motion.div>
          </div>

          {/* Accent panel */}
          <div className="lg:col-span-5 h-full">
            <div className="relative h-[26rem] lg:h-[32rem]">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="absolute inset-0 rounded-3xl border border-amber-200/70 bg-gradient-to-br from-amber-100 to-stone-100 shadow-lg overflow-hidden"
              >
                {/* Subtle animated shimmer */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-transparent via-amber-200/30 to-transparent"
                  animate={{ x: ['-20%', '120%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />

                <div className="relative h-full grid grid-rows-2 md:grid-cols-2 gap-px p-4">
                  <ShowcaseCard title="Ruined Fresco" subtitle="Before → After" img="https://images.unsplash.com/photo-1558980664-10f9163e3fd8?q=80&w=1200&auto=format&fit=crop" />
                  <ShowcaseCard title="Marble Bust" subtitle="GAN Output" img="https://images.unsplash.com/photo-1622495891210-5c50b62ddb29?q=80&w=1200&auto=format&fit=crop" />
                  <ShowcaseCard title="Temple Relief" subtitle="Restored" img="https://images.unsplash.com/photo-1596495578066-3b1a7b5ace6f?q=80&w=1200&auto=format&fit=crop" />
                  <ShowcaseCard title="Mosaic" subtitle="Upscaled" img="https://images.unsplash.com/photo-1608746827679-6bb2f44cdbad?q=80&w=1200&auto=format&fit=crop" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShowcaseCard({ title, subtitle, img }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-2xl overflow-hidden bg-white border border-amber-200"
    >
      <img src={img} alt={title} className="h-full w-full object-cover" />
      <div className="absolute inset-x-0 bottom-0 p-3">
        <div className="inline-flex items-center gap-2 rounded bg-stone-900/80 px-2 py-1 text-[11px] font-medium text-amber-50">
          {title}
          <span className="text-amber-200/80">•</span>
          {subtitle}
        </div>
      </div>
    </motion.div>
  );
}
