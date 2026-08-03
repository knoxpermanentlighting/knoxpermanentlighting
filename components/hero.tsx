"use client";

import { Section } from "@/components/section";
import { useSectionColor } from "@/components/section-color-provider";

export function Hero() {
  const { color, textColor, scrollTo } = useSectionColor();

  return (
    <Section id="hero" className="flex min-h-[92vh] flex-col justify-center pt-44 sm:pt-40">
      <div className="flex flex-wrap items-center gap-3">
        {["#ff4136", "#ffc93c", "#2ecc71", "#3b82f6", "#a855f7"].map((c) => (
          <span
            key={c}
            className="twinkle h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: c, boxShadow: `0 0 8px 2px ${c}` }}
          />
        ))}
        <span className="ml-1 text-xs font-semibold uppercase tracking-[0.2em] text-black">
          Serving the Wasatch Front, Utah
        </span>
      </div>

      <h1 className="mt-8 max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-black sm:text-6xl md:text-7xl">
        Permanent lights.
        <br />
        <span className="transition-colors duration-700" style={{ color: textColor }}>
          Every holiday, every color.
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-lg text-black sm:text-xl">
        We install professional-grade LED lighting on your roofline once —
        then you control it from your phone for Christmas, game day,
        birthdays, or just a Tuesday. No more ladders. No more tangled
        strands.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={() => scrollTo("contact")}
          className="rounded-full px-7 py-3.5 text-base font-semibold text-black transition-transform hover:scale-105"
          style={{ backgroundColor: color, boxShadow: `0 0 30px 4px ${color}55` }}
        >
          Get a Free Quote
        </button>
        <button
          type="button"
          onClick={() => scrollTo("how-it-works")}
          className="rounded-full border border-black/15 px-7 py-3.5 text-base font-semibold text-black transition-colors hover:bg-black/5"
        >
          How It Works
        </button>
      </div>

      <p className="mt-4 text-sm text-black">
        Follow the color rail on the right &mdash; it lights up as you scroll.
      </p>
    </Section>
  );
}
