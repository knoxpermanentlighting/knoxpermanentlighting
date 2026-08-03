"use client";

import { Section } from "@/components/section";
import { useSectionColor } from "@/components/section-color-provider";

const REVIEWS = [
  {
    quote:
      "We used to spend an entire Saturday every November on the ladder. Now I change our lights from my phone in the driveway. Best home upgrade we've made.",
    name: "Sarah M.",
    city: "Draper, UT",
  },
  {
    quote:
      "The crew was fast, clean, and the lighting looks factory-installed. We run Utah red and blue for BYU game days now.",
    name: "Tyler H.",
    city: "Lehi, UT",
  },
  {
    quote:
      "Neighbors keep asking who did our lights. Switching from Christmas to Halloween to everyday white takes ten seconds.",
    name: "Priya K.",
    city: "Sandy, UT",
  },
];

export function Testimonials() {
  const { color, textColor } = useSectionColor();

  return (
    <Section id="testimonials">
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: textColor }}>
        Reviews
      </h2>
      <p className="mt-3 max-w-2xl text-3xl font-bold text-black sm:text-4xl">
        Trusted by homeowners across the Wasatch Front.
      </p>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {REVIEWS.map((r) => (
          <figure
            key={r.name}
            className="flex flex-col justify-between rounded-2xl border border-black/10 bg-neutral-50 p-7"
          >
            <blockquote className="text-black">&ldquo;{r.quote}&rdquo;</blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span
                className="h-9 w-9 shrink-0 rounded-full transition-colors duration-700"
                style={{ backgroundColor: color, opacity: 0.85 }}
              />
              <span>
                <span className="block text-sm font-semibold text-black">{r.name}</span>
                <span className="block text-xs text-black">{r.city}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
