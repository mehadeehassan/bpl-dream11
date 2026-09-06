export default function HeroBanner() {
  return (
    <section className="mx-auto mt-6 max-w-6xl px-4 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl bg-navy-950 px-6 py-12 text-center sm:px-10">
        {/* Soft colour blobs to reproduce the gradient glow behind the hero art */}
        <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-pink-500/30 blur-3xl" />

        <span className="relative mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-lime-400">
          Bangladesh Premier League
        </span>

        <h1 className="relative mx-auto max-w-2xl font-display text-2xl font-bold text-white sm:text-4xl">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="relative mx-auto mt-3 max-w-lg text-sm text-gray-300 sm:text-base">
          Pick your best eleven from the current BPL squads and compete with
          fans across the country every match day.
        </p>

        <button className="relative mt-6 rounded-full bg-lime-400 px-6 py-2.5 text-sm font-semibold text-navy-950 shadow-lg shadow-lime-400/20 transition-transform hover:scale-105">
          Start Building
        </button>
      </div>
    </section>
  );
}
