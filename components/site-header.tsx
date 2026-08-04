"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
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

const DROPDOWN_GROUPS_BY_SECTION: Partial<Record<SectionId, typeof SERVICES_GROUPS>> = {
  services: SERVICES_GROUPS,
  "service-area": SERVICE_AREA_GROUPS,
};

export function SiteHeader() {
  const { color, scrollTo } = useSectionColor();
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<SectionId | null>(null);

  function goToSection(id: SectionId) {
    setMobileOpen(false);
    if (isHome) {
      scrollTo(id);
    } else {
      router.push(`/#${id}`);
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 sm:px-8">
        <button type="button" onClick={() => goToSection("home")} className="flex items-center gap-3">
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
          {SECTIONS.filter((s) => s.id !== "home").map((s) => {
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

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => goToSection("contact")}
            className="rounded-full px-4 py-2 text-sm font-semibold text-black transition-transform hover:scale-105"
            style={{ backgroundColor: color }}
          >
            Get a Quote
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 items-center justify-center rounded-full text-black md:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="max-h-[75vh] overflow-y-auto border-t border-black/10 bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col text-base text-black">
            {SECTIONS.filter((s) => s.id !== "home").map((s) => {
              const dropdownGroups = DROPDOWN_GROUPS_BY_SECTION[s.id];

              if (dropdownGroups) {
                const isOpen = mobileSubmenu === s.id;
                return (
                  <div key={s.id} className="border-b border-black/10">
                    <button
                      type="button"
                      onClick={() => setMobileSubmenu(isOpen ? null : s.id)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between py-3 text-left font-medium"
                    >
                      {s.label}
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <div
                        className={`grid gap-x-3 gap-y-1 pb-3 ${
                          dropdownGroups.flatMap((group) => group.links).length > 4 ? "grid-cols-2" : "grid-cols-1"
                        }`}
                      >
                        {dropdownGroups.flatMap((group) => group.links).map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="rounded-lg px-2 py-1.5 text-sm leading-snug text-black/70"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => goToSection(s.id)}
                  className="border-b border-black/10 py-3 text-left font-medium"
                >
                  {s.label}
                </button>
              );
            })}
          </nav>
        </div>
      )}

      <HeaderLights />
    </header>
  );
}
