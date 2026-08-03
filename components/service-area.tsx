"use client";

import Link from "next/link";
import { Section } from "@/components/section";
import { useSectionColor } from "@/components/section-color-provider";
import { LOCATIONS } from "@/lib/locations";

export function ServiceArea() {
  const { color, textColor } = useSectionColor();

  return (
    <Section id="service-area">
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: textColor }}>
        Service Area
      </h2>
      <p className="mt-3 max-w-2xl text-3xl font-bold text-black sm:text-4xl">
        Proudly lighting up homes along the Wasatch Front.
      </p>
      <p className="mt-4 max-w-2xl text-black">
        Based in Utah and growing. Don&apos;t see your city? Reach out - we&apos;re adding new install areas every
        season.
      </p>

      <div className="mt-12 flex flex-wrap gap-3">
        {LOCATIONS.map((location) => (
          <Link
            key={location.slug}
            href={`/locations/${location.slug}`}
            className="rounded-full border px-4 py-2 text-sm text-black shadow-sm transition-colors duration-700 hover:opacity-75"
            style={{ borderColor: `${color}55`, backgroundColor: `${color}14` }}
          >
            {location.name}
          </Link>
        ))}
      </div>
    </Section>
  );
}
