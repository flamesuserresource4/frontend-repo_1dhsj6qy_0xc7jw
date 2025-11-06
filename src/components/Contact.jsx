export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-amber-50">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-stone-900">Get in touch</h2>
          <p className="mt-3 text-stone-700 max-w-2xl mx-auto">
            Want the report, code, or dataset links? Reach out and I’ll share the full mini-project package with details on training and evaluation.
          </p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 grid gap-4 sm:grid-cols-2"
        >
          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded-md border border-amber-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-stone-900/10"
            required
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-md border border-amber-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-stone-900/10"
            required
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="sm:col-span-2 w-full rounded-md border border-amber-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-stone-900/10"
            required
          />
          <button
            type="submit"
            className="sm:col-span-2 inline-flex items-center justify-center rounded-md bg-stone-900 px-5 py-3 text-amber-50 font-medium hover:bg-stone-800 transition"
          >
            Send request
          </button>
        </form>
      </div>
    </section>
  );
}
