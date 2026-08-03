"use client";

import { Section } from "@/components/section";
import { useSectionColor } from "@/components/section-color-provider";

const PACKAGES = [
  {
    name: "Roofline Essentials",
    price: "Starting at $18/ft",
    features: [
      "Permanent LED channel on primary roofline",
      "Unlimited colors & preset shows",
      "App control + voice assistant support",
      "1-year warranty",
    ],
  },
  {
    name: "Full Home",
    price: "Starting at $24/ft",
    features: [
      "Roofline, eaves, gables & soffits",
      "Zone-by-zone color control",
      "Holiday scheduling & sunset auto-on",
      "3-year warranty + annual tune-up",
    ],
    featured: true,
  },
  {
    name: "Estate & Landscape",
    price: "Custom Quote",
    features: [
      "Whole property: home, trees, walkways",
      "Music sync for events & game days",
      "Priority service & concierge support",
      "5-year warranty",
    ],
  },
];

export function Services() {
  const { color } = useSectionColor();

  return (
    <Section id="services">
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color }}>
        Services &amp; Packages
      </h2>
      <p className="mt-3 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
        Permanent lighting built for Utah roofs and Utah winters.
      </p>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {PACKAGES.map((pkg) => (
          <div
            key={pkg.name}
            className="flex flex-col rounded-2xl border p-8 transition-colors duration-700"
            style={{
              borderColor: pkg.featured ? color : "rgba(255,255,255,0.1)",
              backgroundColor: pkg.featured ? `${color}14` : "rgba(255,255,255,0.03)",
            }}
          >
            {pkg.featured && (
              <span
                className="mb-4 w-fit rounded-full px-3 py-1 text-xs font-semibold text-black transition-colors duration-700"
                style={{ backgroundColor: color }}
              >
                Most Popular
              </span>
            )}
            <h3 className="text-xl font-semibold text-white">{pkg.name}</h3>
            <p className="mt-1 text-2xl font-bold text-white/90">{pkg.price}</p>
            <ul className="mt-6 flex-1 space-y-3 text-sm text-white/65">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-700"
                    style={{ backgroundColor: color }}
                  />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-8 rounded-full border border-white/20 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Request This Package
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
