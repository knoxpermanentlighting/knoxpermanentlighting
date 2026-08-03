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
import { SECTIONS, type SectionId } from "@/lib/sections";

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
  const visibility = useRef<Map<SectionId, number>>(new Map());

  useEffect(() => {
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id as SectionId;
          visibility.current.set(id, entry.intersectionRatio);
        }

        let bestId: SectionId | null = null;
        let bestRatio = 0;
        for (const section of SECTIONS) {
          const ratio = visibility.current.get(section.id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = section.id;
          }
        }

        if (bestId) {
          setActiveId(bestId);
        }
      },
      {
        threshold: [0, 0.1, 0.25, 0.4, 0.5, 0.6, 0.75, 0.9, 1],
        rootMargin: "-15% 0px -15% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const active = useMemo(
    () => SECTIONS.find((s) => s.id === activeId) ?? SECTIONS[0],
    [activeId]
  );

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent", active.color);
    root.style.setProperty("--accent-glow", active.glow);
    root.style.setProperty("--accent-text", active.text);
  }, [active]);

  const scrollTo = useCallback((id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const value = useMemo(
    () => ({
      activeId,
      color: active.color,
      glow: active.glow,
      textColor: active.text,
      scrollTo,
    }),
    [activeId, active, scrollTo]
  );

  return (
    <SectionColorContext.Provider value={value}>{children}</SectionColorContext.Provider>
  );
}
