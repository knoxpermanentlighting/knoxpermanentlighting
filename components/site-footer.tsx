import Image from "next/image";
import Link from "next/link";
import { LOCATIONS } from "@/lib/locations";

const COMPANY_LINKS = [
  { href: "/#home", label: "Home" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#services", label: "Services" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#testimonials", label: "Reviews" },
  { href: "/#service-area", label: "Service Area" },
  { href: "/#contact", label: "Get a Quote" },
  { href: "/permanent-christmas-lights", label: "Permanent Christmas Lights" },
];

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-black/10 bg-neutral-50">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/knox-logo-cropped.png"
              alt="Knox Lighting"
              width={843}
              height={423}
              className="h-12 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm text-black">
              Professional permanent LED lighting for Utah homes. Installed once, controlled from your phone, every
              holiday of the year.
            </p>
            <dl className="mt-5 space-y-1.5 text-sm text-black">
              <div className="flex gap-2">
                <dt className="text-black/50">Call</dt>
                <dd>
                  <a href="tel:+18015550123" className="hover:underline">
                    (801) 555-0123
                  </a>
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-black/50">Email</dt>
                <dd>
                  <a href="mailto:hello@knoxpermanentlighting.com" className="hover:underline">
                    hello@knoxpermanentlighting.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-black/40">Company</p>
            <ul className="mt-4 space-y-2 text-sm text-black">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-black/40">Service Areas</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-black sm:grid-cols-3">
              {LOCATIONS.map((l) => (
                <li key={l.slug}>
                  <Link href={`/locations/${l.slug}`} className="hover:underline">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-black/10 pt-6 text-xs text-black sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Knox Lighting. All rights reserved.</p>
          <p>Utah-owned &amp; operated.</p>
        </div>
      </div>
    </footer>
  );
}
