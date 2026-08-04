import type { Metadata } from "next";
import { QuoteForm } from "@/components/quote-form";

const TITLE = "Get a Free Quote | Knox Lighting";
const DESCRIPTION =
  "Tell us about your home and get a free, no-pressure quote for permanent Christmas lighting in Utah. We usually follow up within one business day.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const RED = "#ff4136";
const RED_GLOW = "#ff7a70";
const RED_TEXT = "#dc2626";

const TRUST_POINTS = [
  { title: "No Ladders", body: "We handle the whole install so you never have to climb a roofline again." },
  { title: "Free Consultation", body: "We measure your home and design a layout before you spend a dollar." },
  { title: "Fast Response", body: "Most quote requests get a reply within one business day." },
];

export default function GetAQuotePage() {
  return (
    <main className="flex-1 font-sans">
      <section
        data-accent-color={RED}
        data-accent-glow={RED_GLOW}
        data-accent-text={RED_TEXT}
        className="mx-auto w-full max-w-6xl px-6 pt-40 pb-20 sm:px-8 sm:pt-44 sm:pb-28"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: RED }}>
          Get a Quote
        </p>
        <h1 className="mt-3 max-w-xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">
          Let&apos;s design your permanent lighting.
        </h1>
        <p className="mt-4 max-w-md text-white/70">
          Tell us about your home and we&apos;ll follow up with a free, no-pressure quote - usually within one
          business day.
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div>
            <dl className="space-y-4 text-sm text-white/80">
              <div className="flex items-center gap-3">
                <dt className="w-20 shrink-0 text-white/50">Call</dt>
                <dd>
                  <a href="tel:+18015550123" className="hover:underline">
                    (801) 555-0123
                  </a>
                </dd>
              </div>
              <div className="flex items-center gap-3">
                <dt className="w-20 shrink-0 text-white/50">Email</dt>
                <dd>
                  <a href="mailto:hello@knoxpermanentlighting.com" className="hover:underline">
                    hello@knoxpermanentlighting.com
                  </a>
                </dd>
              </div>
              <div className="flex items-center gap-3">
                <dt className="w-20 shrink-0 text-white/50">Area</dt>
                <dd>Wasatch Front, Utah</dd>
              </div>
            </dl>

            <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {TRUST_POINTS.map((point) => (
                <div key={point.title} className="rounded-2xl border border-black/10 bg-neutral-50 p-5">
                  <h3 className="text-sm font-semibold text-black">{point.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-black">{point.body}</p>
                </div>
              ))}
            </div>
          </div>

          <QuoteForm color={RED} />
        </div>
      </section>
    </main>
  );
}
