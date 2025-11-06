import { Brain, Layers, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: Brain,
    title: 'Curate + Prepare',
    desc:
      'Collect damaged and reference datasets, align pairs, normalize color/scale, and create train/val/test splits.',
  },
  {
    icon: Layers,
    title: 'Train the Model',
    desc:
      'Use a GAN-based pipeline (e.g., Pix2Pix/CycleGAN) with perceptual and adversarial losses to learn restoration mappings.',
  },
  {
    icon: Sparkles,
    title: 'Infer + Evaluate',
    desc:
      'Run inference on unseen artifacts and evaluate with SSIM/LPIPS while capturing qualitative before/after comparisons.',
  },
];

export default function Method() {
  return (
    <section id="method" className="relative py-20 sm:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            How the reconstruction pipeline works
          </h2>
          <p className="mt-3 text-slate-600">
            A minimal yet effective deep learning workflow tailored for cultural heritage restoration.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-slate-900 text-white">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
