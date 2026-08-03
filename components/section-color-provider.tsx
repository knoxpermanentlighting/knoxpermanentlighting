"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import { SECTIONS, type SectionId } from "@/lib/sections";

type Accent = { color: string; glow: string; text: string };

const DEFAULT_ACCENT: Accent = { color: SECTIONS[0].color, glow: SECTIONS[0].glow, text: SECTIONS[0].text };

type SectionColorContextValue = {
  activeId: SectionId;
  color: string;
  glow: string;
  textColor: string;
  scrollTo: (id: SectionId) => void;
};

const SectionColorContext = createContext<SectionColorContextValue | null>(null);

export function useSectionColor() {
  const ctx = useContext(SectionColorContext);
  if (!ctx) {
    throw new Error("useSectionColor must be used within SectionColorProvider");
  }
  return ctx;
}

export function SectionColorProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [activeId, setActiveId] = useState<SectionId>(SECTIONS[0].id);
  const [accent, setAccent] = useState<Accent>(DEFAULT_ACCENT);
  const visibility = useRef<Map<Element, number>>(new Map());
  const pathname = usePathname();

  useEffect(() => {
    visibility.current.clear();

    // Any element on any page can opt into the scroll-color effect by carrying
    // these data attributes - not just the fixed homepage SECTIONS list.
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-accent-color]"));

    if (elements.length === 0) {
      // No color sections on this page - fall back to the default brand color
      // instead of leaving it frozen on whatever was last active before navigating here.
      const frame = requestAnimationFrame(() => setAccent(DEFAULT_ACCENT));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.current.set(entry.target, entry.intersectionRatio);
        }

        let best: HTMLElement | null = null;
        let bestRatio = 0;
        for (const el of elements) {
          const ratio = visibility.current.get(el) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = el;
          }
        }

        if (best) {
          const { accentColor, accentGlow, accentText } = best.dataset;
          if (accentColor && accentGlow && accentText) {
            setAccent({ color: accentColor, glow: accentGlow, text: accentText });
          }
          const section = SECTIONS.find((s) => s.id === best!.id);
          if (section) {
            setActiveId(section.id);
          }
        }
      },
      {
        threshold: [0, 0.1, 0.25, 0.4, 0.5, 0.6, 0.75, 0.9, 1],
        rootMargin: "-15% 0px -15% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent", accent.color);
    root.style.setProperty("--accent-glow", accent.glow);
    root.style.setProperty("--accent-text", accent.text);
  }, [accent]);

  const scrollTo = useCallback((id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const value = useMemo(
    () => ({
      activeId,
      color: accent.color,
      glow: accent.glow,
      textColor: accent.text,
      scrollTo,
    }),
    [activeId, accent, scrollTo]
  );

  return (
    <SectionColorContext.Provider value={value}>{children}</SectionColorContext.Provider>
  );
}
