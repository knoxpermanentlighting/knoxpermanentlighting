"use client";

import Image from "next/image";
import { Section } from "@/components/section";
import { useSectionColor } from "@/components/section-color-provider";

const LOOKS = [
  {
    name: "Classic Red & Green",
    colors: ["#ff4136", "#2ecc71"],
    photo: "/photos/house-aerial-rgb.jpg",
  },
  {
    name: "Cool Blue & Violet",
    colors: ["#3b82f6", "#a855f7"],
    photo: "/photos/house-victorian-color.jpg",
  },
  {
    name: "Everyday Warm White",
    colors: ["#ffe1a8", "#ffc93c"],
    photo: "/photos/house-victorian-warm.jpg",
  },
  {
    name: "Architectural Accent",
    colors: ["#ffc93c", "#ff8a00"],
    photo: "/photos/house-modern-eave.jpg",
  },
  {
    name: "Halloween Glow",
    colors: ["#ff8a00", "#a855f7"],
  },
  {
    name: "Patriotic",
    colors: ["#ff4136", "#eaf6ff", "#3b82f6"],
  },
];

function HouseCard({ name, colors, photo }: { name: string; colors: string[]; photo?: string }) {
  const roofGradient = `linear-gradient(90deg, ${colors.join(", ")})`;
  return (
    <div className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
      <div className="relative flex h-48 items-end justify-center overflow-hidden bg-[#050507] px-8 pb-0">
        {photo ? (
          <Image
            src={photo}
            alt={`House exterior with permanent LED lighting in the ${name} look`}
            fill
            sizes="(min-width: 1024px) 30vw, 90vw"
            className="object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
          />
        ) : (
          <>
            <div
              className="absolute top-6 h-16 w-[85%] rounded-full opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-50"
              style={{ background: roofGradient }}
            />
            <div
              className="house-silhouette relative h-28 w-full max-w-[220px] bg-[#15151a]"
              style={{
                clipPath: "polygon(50% 0%, 100% 38%, 88% 38%, 88% 100%, 12% 100%, 12% 38%, 0% 38%)",
              }}
            >
              <div
                className="absolute inset-x-0 top-0 h-[3px] rounded-full"
                style={{ background: roofGradient, boxShadow: `0 0 12px 2px ${colors[0]}99` }}
              />
            </div>
          </>
        )}
      </div>
      <div className="flex items-center justify-between px-5 py-4">
        <p className="text-sm font-semibold text-black">{name}</p>
        <div className="flex gap-1.5">
          {colors.map((c) => (
            <span key={c} className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: c }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Gallery() {
  const { textColor } = useSectionColor();

  return (
    <Section id="gallery">
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: textColor }}>
        Gallery
      </h2>
      <p className="mt-3 max-w-2xl text-3xl font-bold text-black sm:text-4xl">
        One system. Endless looks, all year.
      </p>
      <p className="mt-4 max-w-2xl text-black">
        A preview of looks our customers switch between with a tap - swap in real install photos once your project
        is complete.
      </p>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {LOOKS.map((look) => (
          <HouseCard key={look.name} name={look.name} colors={look.colors} photo={look.photo} />
        ))}
      </div>
    </Section>
  );
}
