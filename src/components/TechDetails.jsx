import { Cpu, Layers, BarChart } from 'lucide-react';

export default function TechDetails() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-3 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-stone-900">Technical Details</h2>
            <p className="mt-3 text-stone-700">High-level overview of the architecture, data, and evaluation used in the mini-project.</p>
          </div>
          <ul className="grid gap-6 lg:col-span-2">
            <li className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 grid place-items-center rounded-md bg-stone-900 text-amber-50"><Layers size={18} /></div>
                <div>
                  <h3 className="font-semibold text-stone-900">Model</h3>
                  <p className="text-stone-700 text-sm mt-1">Conditional GAN with perceptual + adversarial loss. Alternatives: CycleGAN for unpaired; ESRGAN for upscaling.</p>
                </div>
              </div>
            </li>
            <li className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 grid place-items-center rounded-md bg-stone-900 text-amber-50"><Cpu size={18} /></div>
                <div>
                  <h3 className="font-semibold text-stone-900">Dataset</h3>
                  <p className="text-stone-700 text-sm mt-1">Curated damaged/reference pairs of frescoes, sculptures, and mosaics. Preprocessing includes alignment, color normalization, and cropping.</p>
                </div>
              </div>
            </li>
            <li className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 grid place-items-center rounded-md bg-stone-900 text-amber-50"><BarChart size={18} /></div>
                <div>
                  <h3 className="font-semibold text-stone-900">Metrics</h3>
                  <p className="text-stone-700 text-sm mt-1">SSIM, PSNR, and LPIPS for quantitative evaluation; qualitative gallery and before/after comparisons for visual assessment.</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
