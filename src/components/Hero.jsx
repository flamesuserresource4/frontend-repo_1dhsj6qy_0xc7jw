import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] grid lg:grid-cols-2 items-stretch">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/7Qm3b1z2nMuS3b0a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white via-white/40 to-transparent" />
      </div>

      <div className="relative flex items-center">
        <div className="mx-auto max-w-2xl px-6 py-16 lg:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
            AI + Heritage
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
            Virtual reconstruction of ancient ruins, sculptures and paintings
          </h1>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            A sleek mini-project exploring how GANs can restore and reimagine damaged artifacts—bridging deep learning and cultural heritage.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#gallery" className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2.5 text-white font-medium hover:bg-slate-800 transition">View reconstructions</a>
            <a href="#method" className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2.5 text-slate-800 font-medium hover:bg-slate-50 transition">How it works</a>
          </div>
        </div>
      </div>
    </section>
  );
}
