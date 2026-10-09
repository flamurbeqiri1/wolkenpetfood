export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-[var(--background)] text-[var(--brand-ink)]">
      <header className="border-b border-brand-sky/25 bg-white/70 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <p className="text-lg font-semibold tracking-tight">
            Wolken<span className="text-brand-sky-deep"> Pet Food</span>
          </p>
          <span className="rounded-full bg-brand-cream px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-moss">
            Coming soon
          </span>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 py-16 md:py-24">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-brand-moss">
          Cloud-light · Earth-grounded
        </p>
        <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          Honest nutrition for dogs & cats, as gentle as a clear sky.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--brand-ink)]/75">
          We&apos;re crafting recipes with transparent sourcing and balanced
          nutrition. Wolken Pet Food launches soon — built locally, deployed from
          Git, and made for pets who deserve the best.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Clean recipes",
              body: "Short ingredient lists you can actually read.",
            },
            {
              title: "Balanced batches",
              body: "Formulated with vets, tested for everyday feeding.",
            },
            {
              title: "Sustainable pace",
              body: "Small batches, less waste, thoughtful packaging.",
            },
          ].map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-brand-sky/30 bg-white p-5 shadow-sm"
            >
              <h2 className="font-semibold text-brand-sky-deep">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--brand-ink)]/70">
                {item.body}
              </p>
            </li>
          ))}
        </ul>

        <form
          className="mt-12 flex max-w-md flex-col gap-3 sm:flex-row"
          action="#"
          aria-label="Notify me when Wolken Pet Food launches"
        >
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="min-w-0 flex-1 rounded-full border border-brand-sky/40 bg-white px-5 py-3 text-sm outline-none ring-brand-sky-deep/30 focus:ring-2"
            disabled
          />
          <button
            type="button"
            disabled
            className="rounded-full bg-brand-sky-deep px-6 py-3 text-sm font-medium text-white opacity-60"
          >
            Notify me
          </button>
        </form>
        <p className="mt-3 text-xs text-[var(--brand-ink)]/50">
          Launch list opens when we go live on staging.
        </p>
      </main>

      <footer className="border-t border-brand-sky/20 py-8 text-center text-sm text-[var(--brand-ink)]/55">
        © 2026 Wolken Pet Food · wolkenpetfood.com (domain
        pending)
      </footer>
    </div>
  );
}
