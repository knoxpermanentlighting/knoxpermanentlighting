"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { SECTIONS, type SectionId } from "@/lib/sections";
import { LOCATIONS } from "@/lib/locations";
import { useSectionColor } from "@/components/section-color-provider";
import { HeaderLights } from "@/components/header-lights";
import { NavDropdown } from "@/components/nav-dropdown";

const SERVICES_GROUPS = [
  {
    links: [{ href: "/permanent-christmas-lights", label: "Permanent Christmas Lights" }],
  },
];

const SERVICE_AREA_GROUPS = [
  {
    heading: "Cities We Serve",
    links: LOCATIONS.map((l) => ({ href: `/locations/${l.slug}`, label: l.name })),
  },
];

export function SiteHeader() {
  const { color, scrollTo } = useSectionColor();
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  function goToSection(id: SectionId) {
    if (isHome) {
      scrollTo(id);
    } else {
      router.push(`/#${id}`);
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 sm:px-8">
        <button type="button" onClick={() => goToSection("hero")} className="flex items-center gap-3">
          <Image
            src="/knox-logo-cropped.png"
            alt="Knox Lighting"
            width={843}
            height={423}
            priority
            className="h-14 w-auto sm:h-16"
          />
          <span className="hidden text-sm font-semibold uppercase tracking-[0.15em] text-black sm:block">
            Knox Lighting
          </span>
        </button>

        <nav className="hidden items-center gap-6 text-sm text-black md:flex">
          {SECTIONS.filter((s) => s.id !== "hero").map((s) => {
            if (s.id === "services") {
              return <NavDropdown key={s.id} label={s.label} groups={SERVICES_GROUPS} />;
            }
            if (s.id === "service-area") {
              return <NavDropdown key={s.id} label={s.label} groups={SERVICE_AREA_GROUPS} />;
            }
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => goToSection(s.id)}
                className="transition-colors hover:opacity-60"
              >
                {s.label}
              </button>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => goToSection("contact")}
          className="rounded-full px-4 py-2 text-sm font-semibold text-black transition-transform hover:scale-105"
          style={{ backgroundColor: color }}
        >
          Get a Quote
        </button>
      </div>

      <HeaderLights />
    </header>
  );
}
