"use client";

import { useEffect, useState } from "react";
import { SECTIONS } from "@/lib/sections";
import { useSectionColor } from "@/components/section-color-provider";

export function LedScrollRail() {
  const { activeId, scrollTo } = useSectionColor();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? doc.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Section color guide"
      className="fixed right-1.5 top-1/2 z-40 flex -translate-y-1/2 sm:right-4 md:right-6"
    >
      <div className="relative flex flex-col items-center gap-0">
        <div className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-white/10" />
        <div
          className="absolute left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/40 to-transparent transition-[height] duration-300 ease-out"
          style={{ height: `${Math.max(2, progress * 100)}%`, top: 0 }}
        />
        <ul className="relative flex flex-col justify-between gap-3.5 py-1 sm:gap-6 md:gap-7">
          {SECTIONS.map((section) => {
            const isActive = section.id === activeId;
            return (
              <li key={section.id} className="group relative flex items-center justify-end">
                <span
                  className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-black/80 px-2.5 py-1 text-[11px] font-medium text-white opacity-0 shadow-lg ring-1 ring-white/10 transition-opacity duration-150 group-hover:opacity-100"
                  style={{ color: section.color }}
                >
                  {section.label}
                </span>
                <button
                  type="button"
                  onClick={() => scrollTo(section.id)}
                  aria-label={`Jump to ${section.label}`}
                  aria-current={isActive}
                  className="relative flex h-4 w-4 items-center justify-center rounded-full transition-transform duration-300 ease-out hover:scale-125 sm:h-3.5 sm:w-3.5"
                  style={{
                    backgroundColor: section.color,
                    boxShadow: isActive
                      ? `0 0 10px 3px ${section.glow}, 0 0 22px 6px ${section.color}66`
                      : `0 0 4px 1px ${section.color}55`,
                    transform: isActive ? "scale(1.35)" : undefined,
                    opacity: isActive ? 1 : 0.55,
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
