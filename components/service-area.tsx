"use client";

import { Section } from "@/components/section";
import { useSectionColor } from "@/components/section-color-provider";

const CITIES = [
  "Salt Lake City",
  "Sandy",
  "Draper",
  "Lehi",
  "American Fork",
  "Provo",
  "Orem",
  "South Jordan",
  "Herriman",
  "Bountiful",
  "Layton",
  "Park City",
];

export function ServiceArea() {
  const { color } = useSectionColor();

  return (
    <Section id="service-area">
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color }}>
        Service Area
      </h2>
      <p className="mt-3 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
        Proudly lighting up homes along the Wasatch Front.
      </p>
      <p className="mt-4 max-w-2xl text-white/60">
        Based in Utah and growing. Don&apos;t see your city? Reach out &mdash;
        we&apos;re adding new install areas every season.
      </p>

      <div className="mt-12 flex flex-wrap gap-3">
        {CITIES.map((city) => (
          <span
            key={city}
            className="rounded-full border px-4 py-2 text-sm text-white/80 transition-colors duration-700"
            style={{ borderColor: `${color}55`, backgroundColor: `${color}12` }}
          >
            {city}
          </span>
        ))}
      </div>
    </Section>
  );
}
