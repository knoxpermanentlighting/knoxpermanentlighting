"use client";

import { SECTIONS } from "@/lib/sections";
import { useSectionColor } from "@/components/section-color-provider";

export function SiteHeader() {
  const { color, scrollTo } = useSectionColor();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-8">
        <button
          type="button"
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 text-sm font-semibold tracking-wide text-white"
        >
          <span
            className="h-2.5 w-2.5 rounded-full transition-colors duration-700"
            style={{ backgroundColor: color, boxShadow: `0 0 10px 2px ${color}` }}
          />
          KNOX PERMANENT LIGHTING
        </button>

        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          {SECTIONS.filter((s) => s.id !== "hero").map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => scrollTo(s.id)}
              className="transition-colors hover:text-white"
            >
              {s.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => scrollTo("contact")}
          className="rounded-full px-4 py-2 text-sm font-semibold text-black transition-transform hover:scale-105"
          style={{ backgroundColor: color }}
        >
          Get a Quote
        </button>
      </div>
    </header>
  );
}
