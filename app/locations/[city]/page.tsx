import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LOCATIONS } from "@/lib/locations";
import { FAQS } from "@/lib/faqs";
import { FaqAccordion } from "@/components/faq-accordion";

type Theme = { color: string; glow: string; text: string };

const RED: Theme = { color: "#ff4136", glow: "#ff7a70", text: "#dc2626" };
const GOLD: Theme = { color: "#ffc93c", glow: "#ffdd85", text: "#b45309" };
const GREEN: Theme = { color: "#2ecc71", glow: "#6fe3a4", text: "#15803d" };
const BLUE: Theme = { color: "#3b82f6", glow: "#7fabff", text: "#1d4ed8" };
const PURPLE: Theme = { color: "#a855f7", glow: "#cf9bff", text: "#7e22ce" };

const BENEFITS = [
  { title: "No Ladders", body: "Once it's installed, you never climb a ladder to hang or take down lights again." },
  { title: "Safer", body: "No extension cords across the yard and no risk of a fall - the wiring is sealed and permanent." },
  {
    title: "Versatile",
    body: "Red and green for Christmas, red-white-and-blue for the Fourth, orange and purple for Halloween - one system, every occasion.",
  },
  { title: "Home Value", body: "A clean, well-lit exterior is a visible upgrade neighbors and buyers both notice." },
];

const PRICING = [
  { name: "Roofline Essentials", range: "$2,000 – $4,000" },
  { name: "Full Home", range: "$4,000 – $7,000" },
  { name: "Estate & Landscape", range: "$7,000+" },
];

const LOCAL_FAQ_SLICE = [0, 3, 4, 9];

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const location = LOCATIONS.find((l) => l.slug === city);
  if (!location) return {};

  const title = `Permanent Christmas Lights in ${location.name}, UT | Knox Lighting`;
  const description = `Professional permanent LED lighting for homes in ${location.name}, Utah. One install, every color, every holiday - controlled from your phone.`;

  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { title, description },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const location = LOCATIONS.find((l) => l.slug === city);
  if (!location) notFound();

  const nearby = LOCATIONS.filter((l) => l.slug !== location.slug).slice(0, 6);
  const localFaqs = LOCAL_FAQ_SLICE.map((i) => FAQS[i]);

  return (
    <main className="flex-1 font-sans">
      <section
        data-accent-color={RED.color}
        data-accent-glow={RED.glow}
        data-accent-text={RED.text}
        className="mx-auto w-full max-w-6xl px-6 pt-40 pb-16 sm:px-8 sm:pt-44 sm:pb-20"
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: RED.color }}>
              {location.name}, Utah &middot; {location.county}
            </p>
            <h1 className="mt-3 max-w-xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">
              Permanent Christmas lights for {location.name} homes.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/70">
              One professional LED install on your roofline, controlled from your phone - Christmas, game day, or
              just a Tuesday. No ladders, every season.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/get-a-quote"
                className="rounded-full px-7 py-3.5 text-base font-semibold text-black transition-transform hover:scale-105"
                style={{ backgroundColor: "#ff4136", boxShadow: "0 0 30px 4px #ff413655" }}
              >
                Get a Free Quote
              </Link>
              <Link
                href="/permanent-christmas-lights"
                className="rounded-full border border-white/20 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                See Full Guide
              </Link>
            </div>
          </div>

          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/photos/house-victorian-color.jpg"
              alt={`A home exterior with permanent lighting, representing installs near ${location.name}, Utah`}
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section
        data-accent-color={GOLD.color}
        data-accent-glow={GOLD.glow}
        data-accent-text={GOLD.text}
        className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 sm:py-20"
      >
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: GOLD.color }}>
          Why {location.name} Homeowners Choose Permanent
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => (
            <div key={b.title} className="rounded-2xl border border-black/10 bg-neutral-50 p-6">
              <h3 className="text-sm font-semibold text-black">{b.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-black">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        data-accent-color={GREEN.color}
        data-accent-glow={GREEN.glow}
        data-accent-text={GREEN.text}
        className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 sm:py-20"
      >
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: GREEN.color }}>
          Pricing in {location.name}
        </h2>
        <p className="mt-3 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
          Priced the same $18–$24/ft as everywhere we serve.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {PRICING.map((tier) => (
            <div key={tier.name} className="rounded-2xl border border-black/10 bg-neutral-50 p-6 text-center">
              <p className="text-sm font-semibold text-black">{tier.name}</p>
              <p className="mt-1 text-2xl font-bold text-black">{tier.range}</p>
            </div>
          ))}
        </div>
        <Link
          href="/permanent-christmas-lights#pricing"
          className="mt-6 inline-block text-sm font-semibold underline"
          style={{ color: GREEN.color }}
        >
          See full pricing breakdown &rarr;
        </Link>
      </section>

      <section
        data-accent-color={BLUE.color}
        data-accent-glow={BLUE.glow}
        data-accent-text={BLUE.text}
        className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 sm:py-20"
      >
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: BLUE.color }}>
          {location.name} FAQ
        </h2>
        <div className="mt-8">
          <FaqAccordion items={localFaqs} />
        </div>
      </section>

      <section
        data-accent-color={PURPLE.color}
        data-accent-glow={PURPLE.glow}
        data-accent-text={PURPLE.text}
        className="mx-auto w-full max-w-6xl px-6 pb-32 sm:px-8"
      >
        <div className="rounded-2xl border border-black/10 bg-neutral-50 p-10 text-center sm:p-14">
          <p className="text-2xl font-bold text-black sm:text-3xl">
            Ready to light up your {location.name} home?
          </p>
          <Link
            href="/get-a-quote"
            className="mt-8 inline-block rounded-full px-8 py-4 text-base font-semibold text-black transition-transform hover:scale-105"
            style={{ backgroundColor: "#ff4136", boxShadow: "0 0 30px 4px #ff413655" }}
          >
            Get Your Free Quote
          </Link>
        </div>

        <div className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">Nearby Areas</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {nearby.map((l) => (
              <Link
                key={l.slug}
                href={`/locations/${l.slug}`}
                className="rounded-full border border-white/20 px-4 py-2 text-sm text-white transition-colors hover:bg-white/10"
              >
                {l.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
