import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-atmosphere relative flex min-h-full flex-1 flex-col items-center justify-center overflow-hidden px-6 py-16">
      <div
        aria-hidden
        className="glow-orb pointer-events-none absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-sky/30 blur-3xl"
      />

      <div className="animate-fade-up relative z-10 flex flex-col items-center text-center">
        <Image
          src="/wolken-logo.png"
          alt="Wolken"
          width={520}
          height={200}
          priority
          className="h-auto w-[min(78vw,22rem)] md:w-[26rem]"
        />
      </div>

      <p className="animate-fade-up-delay relative z-10 mt-10 font-[family-name:var(--font-display)] text-2xl font-medium tracking-[0.08em] text-brand-navy md:text-3xl">
        Coming soon
      </p>
    </main>
  );
}
