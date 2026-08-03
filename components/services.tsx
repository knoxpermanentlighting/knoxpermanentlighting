"use client";

import Link from "next/link";
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
  const { color, textColor } = useSectionColor();

  return (
    <Section id="services">
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: textColor }}>
        Services &amp; Packages
      </h2>
      <p className="mt-3 max-w-2xl text-3xl font-bold text-black sm:text-4xl">
        Permanent lighting built for Utah roofs and Utah winters.
      </p>
      <Link
        href="/permanent-christmas-lights"
        className="mt-3 inline-block text-sm font-semibold underline"
        style={{ color: textColor }}
      >
        See full pricing, specs &amp; FAQ &rarr;
      </Link>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {PACKAGES.map((pkg) => (
          <div
            key={pkg.name}
            className="flex flex-col rounded-2xl border p-8 shadow-sm transition-colors duration-700"
            style={{
              borderColor: pkg.featured ? color : "rgba(0,0,0,0.1)",
              backgroundColor: pkg.featured ? `${color}12` : "#fafafa",
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
            <h3 className="text-xl font-semibold text-black">{pkg.name}</h3>
            <p className="mt-1 text-2xl font-bold text-black">{pkg.price}</p>
            <ul className="mt-6 flex-1 space-y-3 text-sm text-black">
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
              className="mt-8 rounded-full border border-black/15 py-3 text-center text-sm font-semibold text-black transition-colors hover:bg-black/5"
            >
              Request This Package
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
