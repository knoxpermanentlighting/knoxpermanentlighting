"use client";

import { Section } from "@/components/section";
import { useSectionColor } from "@/components/section-color-provider";

const STEPS = [
  {
    title: "Free Design Consult",
    body: "We measure your roofline and walk your property to plan a clean, custom LED layout — no cost, no obligation.",
  },
  {
    title: "Professional Install",
    body: "Our crew installs a permanent, weatherproof channel that hugs your roofline year-round and disappears in daylight.",
  },
  {
    title: "Color It From Your Phone",
    body: "Pick from millions of colors and preset shows in our app — Christmas, Halloween, game day, birthdays, or every day.",
  },
  {
    title: "We Maintain It",
    body: "Your system is backed by a warranty and annual checkup, so it keeps working exactly like day one.",
  },
];

export function HowItWorks() {
  const { color } = useSectionColor();

  return (
    <Section id="how-it-works">
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color }}>
        How It Works
      </h2>
      <p className="mt-3 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
        Install once. Light up every season for years.
      </p>

      <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => (
          <li key={step.title} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-black transition-colors duration-700"
              style={{ backgroundColor: color }}
            >
              {i + 1}
            </span>
            <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
