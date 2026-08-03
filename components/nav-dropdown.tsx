"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type NavDropdownGroup = {
  heading?: string;
  links: { href: string; label: string }[];
};

export function NavDropdown({ label, groups }: { readonly label: string; readonly groups: NavDropdownGroup[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex items-center gap-1 transition-colors hover:opacity-60"
      >
        {label}
        <span aria-hidden="true" className={`text-xs transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>

      {open && (
        <div className="absolute top-full left-1/2 z-50 mt-3 w-72 -translate-x-1/2 rounded-2xl border border-black/10 bg-white p-3 shadow-xl">
          {groups.map((group, i) => (
            <div key={group.heading ?? i} className={i > 0 ? "mt-3 border-t border-black/10 pt-3" : ""}>
              {group.heading && (
                <p className="px-2 pb-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-black/40">
                  {group.heading}
                </p>
              )}
              <ul className={`grid gap-x-2 gap-y-0.5 ${group.links.length > 4 ? "grid-cols-2" : "grid-cols-1"}`}>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block truncate rounded-lg px-2 py-1.5 text-sm text-black transition-colors hover:bg-black/5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
