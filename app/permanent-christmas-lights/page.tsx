import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TreePine, Ghost, Heart, Trophy } from "lucide-react";
import { FaqAccordion } from "@/components/faq-accordion";

const TITLE = "Permanent Christmas Lights in Utah | Knox Lighting";
const DESCRIPTION =
  "Everything to know about permanent Christmas lights: how the technology works, what it costs, and why Utah homeowners are switching from ladders and tangled strands to one system that runs every holiday.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION },
  twitter: { title: TITLE, description: DESCRIPTION },
};

type Theme = { color: string; glow: string; text: string };

const RED: Theme = { color: "#ff4136", glow: "#ff7a70", text: "#dc2626" };
const GOLD: Theme = { color: "#ffc93c", glow: "#ffdd85", text: "#b45309" };
const GREEN: Theme = { color: "#2ecc71", glow: "#6fe3a4", text: "#15803d" };
const BLUE: Theme = { color: "#3b82f6", glow: "#7fabff", text: "#1d4ed8" };
const PURPLE: Theme = { color: "#a855f7", glow: "#cf9bff", text: "#7e22ce" };

function PageSection({
  id,
  theme,
  eyebrow,
  title,
  subtitle,
  className = "",
  children,
}: {
  id?: string;
  theme: Theme;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <section
      id={id}
      data-accent-color={theme.color}
      data-accent-glow={theme.glow}
      data-accent-text={theme.text}
      className={`mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-16 sm:px-8 sm:py-20 ${className}`}
    >
      {eyebrow && (
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: theme.text }}>
          {eyebrow}
        </h2>
      )}
      {title && (
        <p className={`max-w-2xl text-3xl font-bold text-black sm:text-4xl ${eyebrow ? "mt-3" : ""}`}>{title}</p>
      )}
      {subtitle && <p className="mt-4 max-w-2xl text-black">{subtitle}</p>}
      {children && <div className={title || subtitle ? "mt-12" : ""}>{children}</div>}
    </section>
  );
}

const FEATURES = [
  {
    title: "Individually Addressable LEDs",
    body: "Every single bulb on your home can be its own color, so you can build patterns, animations, and effects - not just one flat color across the whole run.",
  },
  {
    title: "Full Smart Home Control",
    body: "Schedule shows, set timers, and change colors from the app, from anywhere - no ladder, no remote to dig out of a drawer.",
  },
  {
    title: "Nearly Invisible By Day, Brilliant By Night",
    body: "A discreet, low-profile track is installed to match your trim, so it blends into your roofline until the moment you turn it on.",
  },
  {
    title: "Weatherproof & Built to Last",
    body: "Rated for extreme temperatures and sealed against rain, snow, wind, and UV - built to run outdoors through Utah's full four seasons.",
  },
];

const HIGHLIGHTS = [
  {
    title: "Dimmable & Programmable",
    body: "Customize brightness and schedule lights to run automatically based on sunset and sunrise.",
  },
  {
    title: "Multiple Color Options",
    body: "RGB + true warm white LEDs give you vibrant holiday colors and a clean, classic white - not a tinted RGB imitation.",
  },
  {
    title: "Seamless Installation",
    body: "A color-matched, powder-coated aluminum track keeps every wire hidden, so the system disappears into your trim.",
  },
  {
    title: "Warranty Backed",
    body: "Every install is backed by a materials and workmanship warranty covering both the lights and the installation itself.",
  },
];

const APPLICATIONS = [
  {
    title: "Holidays",
    body: "Program festive displays for Christmas, Halloween, the 4th of July, Valentine's Day, Diwali, Hanukkah, and more.",
  },
  {
    title: "Parties & Special Occasions",
    body: "Set the mood for birthdays, anniversaries, weddings, or graduation celebrations with custom colors and animations.",
  },
  {
    title: "Security & Safety",
    body: "Light up pathways, driveways, and dark corners to improve visibility around your property at night.",
  },
  {
    title: "Game Days & Sporting Events",
    body: "Show team spirit by lighting up your home in your favorite team's colors for college, pro, or local games.",
  },
  {
    title: "Everyday Ambiance",
    body: "Use soft white or warm tones for architectural accent lighting - perfect for daily curb appeal, not just holidays.",
  },
  {
    title: "Awareness Campaigns",
    body: "Support causes like breast cancer awareness (pink), autism awareness (blue), or other charitable events.",
  },
];

const TECH = [
  {
    title: "Commercial-Grade LEDs",
    body: "Durable, energy-efficient bulbs housed in a sleek aluminum track that mounts discreetly under your roofline.",
  },
  {
    title: "Individually Addressable",
    body: "Each bulb displays its own color independently - that's what makes patterns, animations, and dynamic effects possible.",
  },
  {
    title: "Smartphone App Control",
    body: "Choose from preset themes or design your own custom looks and save them - all from your phone.",
  },
  {
    title: "Smart Scheduling",
    body: "Set the lights to turn on automatically at sunset, or trigger a show with one tap when guests arrive.",
  },
];

const BENEFITS = [
  {
    title: "No Ladders",
    body: "Once it's installed, you never climb a ladder to hang, fix, or take down lights again.",
  },
  {
    title: "Safer",
    body: "No extension cords across the yard, no overloaded outlets, no risk of a fall - the wiring is sealed and permanent.",
  },
  {
    title: "Versatile",
    body: "Red and green for Christmas, pastels for Easter, red-white-and-blue for the Fourth, orange and purple for Halloween - one system, every occasion.",
  },
  {
    title: "Home Value",
    body: "A clean, well-lit exterior is a visible upgrade - the kind buyers and neighbors both notice.",
  },
  {
    title: "Long-Term Savings",
    body: "One installation replaces years of buying, replacing, and hanging seasonal strings.",
  },
];

const THEMES = [
  { Icon: TreePine, color: "#15803d", name: "Christmas", body: "Classic red & green patterns and animated displays." },
  { Icon: Ghost, color: "#ea580c", name: "Halloween", body: "Spooky orange & purple effects and eerie animations." },
  { Icon: Heart, color: "#dc2626", name: "Valentine's", body: "Romantic pinks, reds, and soft white glows." },
  { Icon: Trophy, color: "#1d4ed8", name: "Game Day", body: "Your team's colors, pulsing during the big game." },
];

const COMPARISON = [
  { feature: "Installation", traditional: "Every single year", permanent: "One-time professional install" },
  { feature: "Color Options", traditional: "One fixed look", permanent: "16 million+ colors" },
  { feature: "App Control", traditional: "Not available", permanent: "Full smartphone control" },
  { feature: "Safety", traditional: "Ladders & extension cords", permanent: "No climbing required" },
  { feature: "Year-Round Use", traditional: "Christmas only", permanent: "Every holiday & event" },
  { feature: "Home Value", traditional: "No impact", permanent: "Increases curb appeal" },
];

const PROCESS = [
  {
    step: "1",
    title: "Free Consultation",
    body: "We walk your property, measure your roofline, and talk through the look you want.",
  },
  {
    step: "2",
    title: "Design & Quote",
    body: "You get a custom lighting plan and a detailed quote - no hidden costs, no surprises.",
  },
  {
    step: "3",
    title: "Professional Install",
    body: "We mount the track, run the hidden wiring, and set up your app - typically in a single day.",
  },
  {
    step: "4",
    title: "Enjoy Your Lights",
    body: "We walk you through the app and make sure everything is running exactly how you want it.",
  },
];

const PRICING = [
  {
    name: "Roofline Essentials",
    range: "$2,000 – $4,000",
    note: "Small to mid-size homes, primary roofline",
    features: ["Permanent LED channel on primary roofline", "Unlimited colors & preset shows", "App control", "1-year warranty"],
  },
  {
    name: "Full Home",
    range: "$4,000 – $7,000",
    note: "Roofline, eaves, gables & soffits",
    features: ["Full exterior coverage", "Zone-by-zone color control", "Holiday scheduling & sunset auto-on", "3-year warranty"],
    featured: true,
  },
  {
    name: "Estate & Landscape",
    range: "$7,000+",
    note: "Whole property, custom scope",
    features: ["Home, trees & walkways", "Music sync for events", "Priority service", "5-year warranty"],
  },
];

const SPECIALTIES = [
  {
    title: "Outdoor Living Spaces",
    body: "Beyond the roofline, we light patios, dining areas, walkways, and entryways so your outdoor space works after dark too.",
  },
  {
    title: "Architectural Accents",
    body: "Highlight columns, gables, and trim year-round with a warm, subtle glow - not just for the holidays.",
  },
  {
    title: "Tree Lighting",
    body: "Wrap trunks and canopies to make your landscape part of the display, blended in with your home's overall lighting plan.",
  },
];

const SHOWCASE_LOOKS = [
  { name: "Classic Christmas", colors: ["#ff4136", "#2ecc71", "#ffc93c"], photo: "/photos/house-aerial-rgb.jpg" },
  {
    name: "Everyday Warm White",
    colors: ["#ffe1a8", "#ffc93c"],
    photo: "/photos/house-victorian-warm.jpg",
  },
  { name: "Halloween Glow", colors: ["#ff8a00", "#a855f7"] },
  { name: "Patriotic", colors: ["#ff4136", "#eaf6ff", "#3b82f6"] },
];

function ShowcaseCard({
  name,
  colors,
  photo,
}: {
  readonly name: string;
  readonly colors: string[];
  readonly photo?: string;
}) {
  const roofGradient = `linear-gradient(90deg, ${colors.join(", ")})`;
  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
      <div className="relative flex h-40 items-end justify-center overflow-hidden bg-[#050507] px-8">
        {photo ? (
          <Image
            src={photo}
            alt={`House exterior with permanent LED lighting in the ${name} look`}
            fill
            sizes="(min-width: 1024px) 22vw, 90vw"
            className="object-cover opacity-90"
          />
        ) : (
          <>
            <div
              className="absolute top-6 h-14 w-[85%] rounded-full opacity-30 blur-2xl"
              style={{ background: roofGradient }}
            />
            <div
              className="relative h-24 w-full max-w-[200px] bg-[#15151a]"
              style={{ clipPath: "polygon(50% 0%, 100% 38%, 88% 38%, 88% 100%, 12% 100%, 12% 38%, 0% 38%)" }}
            >
              <div
                className="absolute inset-x-0 top-0 h-[3px] rounded-full"
                style={{ background: roofGradient, boxShadow: `0 0 12px 2px ${colors[0]}99` }}
              />
            </div>
          </>
        )}
      </div>
      <p className="px-4 py-3 text-sm font-semibold text-black">{name}</p>
    </div>
  );
}

export default function PermanentChristmasLightsPage() {
  return (
    <main className="flex-1 font-sans">
      {/* Hero */}
      <PageSection theme={RED} className="pt-40 sm:pt-44">
        <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: RED.text }}>
          Permanent Christmas Lights
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-black sm:text-5xl md:text-6xl">
          Switch between accent lighting for nightly use and holiday lighting for any occasion - with the tap of a
          button.
        </h1>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/#contact"
            className="rounded-full px-7 py-3.5 text-base font-semibold text-black transition-transform hover:scale-105"
            style={{ backgroundColor: "#ff4136", boxShadow: "0 0 30px 4px #ff413655" }}
          >
            Get a Free Quote
          </Link>
          <a
            href="#pricing"
            className="rounded-full border border-black/15 px-7 py-3.5 text-base font-semibold text-black transition-colors hover:bg-black/5"
          >
            See Pricing
          </a>
        </div>
      </PageSection>

      {/* What are permanent christmas lights */}
      <PageSection
        id="what-is-it"
        eyebrow="What Are Permanent Christmas Lights?"
        theme={GOLD}
        title="One system, installed once, that runs every night of the year."
      >
        <p className="max-w-3xl text-black">
          Permanent Christmas lights are professional-grade LED lighting systems that are installed once and stay on
          your home year-round. Unlike traditional string lights that you hang each November and take down each
          January, permanent lights are discreetly mounted along your roofline, soffits, and architectural features
          where they blend seamlessly into your home&apos;s exterior. When they&apos;re off, they&apos;re virtually
          invisible. When they&apos;re on, they transform your home with a brilliant, fully customizable color
          display - any night, any holiday, any occasion.
        </p>
      </PageSection>

      {/* Features */}
      <PageSection eyebrow="Product Features" theme={GREEN}>
        <div className="grid gap-6 sm:grid-cols-2">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-2xl border border-black/10 bg-neutral-50 p-6">
              <h3 className="text-lg font-semibold text-black">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-black">{f.body}</p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Product highlights */}
      <PageSection
        eyebrow="Product Highlights"
        theme={RED}
        title="Knox Lighting installs the highest-quality permanent holiday lights."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h) => (
            <div key={h.title} className="rounded-2xl border border-black/10 bg-neutral-50 p-6">
              <h3 className="text-base font-semibold text-black">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-black">{h.body}</p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Technology */}
      <PageSection
        id="technology"
        eyebrow="The Technology"
        theme={BLUE}
        title="How permanent Christmas lights work"
        subtitle="Our system uses commercial-grade LED bulbs housed in a sleek aluminum track that mounts under your roofline or along architectural features. Each bulb can display millions of colors and is individually addressable, meaning you can create patterns, animations, and effects."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TECH.map((t) => (
            <div key={t.title} className="rounded-2xl border border-black/10 bg-neutral-50 p-6">
              <h3 className="text-base font-semibold text-black">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-black">{t.body}</p>
            </div>
          ))}
        </div>
        <Link
          href="/#contact"
          className="mt-8 inline-block rounded-full px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
          style={{ backgroundColor: "#3b82f6" }}
        >
          Schedule a Free Consultation
        </Link>
      </PageSection>

      {/* Why go permanent */}
      <PageSection
        eyebrow="Why Go Permanent?"
        theme={PURPLE}
        title="Never climb a ladder for holiday lights again."
        subtitle="Convenience is just the start. Permanent Christmas lights are also safer, more versatile, and - over time - often cheaper than buying and hanging traditional lights every year."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {BENEFITS.map((b) => (
            <div key={b.title} className="rounded-2xl border border-black/10 bg-neutral-50 p-5">
              <h3 className="text-sm font-semibold text-black">{b.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-black">{b.body}</p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Applications */}
      <PageSection
        eyebrow="Applications"
        theme={BLUE}
        title="One system, built for more than just Christmas."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {APPLICATIONS.map((a) => (
            <div key={a.title} className="rounded-2xl border border-black/10 bg-neutral-50 p-6">
              <h3 className="text-base font-semibold text-black">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-black">{a.body}</p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Why choose Knox */}
      <PageSection eyebrow="Why Choose Knox Lighting" theme={RED} title="Our promise on every install.">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-black/10 bg-neutral-50 p-6 text-center">
            <p className="text-4xl font-bold text-black">3</p>
            <p className="mt-1 text-sm text-black">Year workmanship warranty on every install</p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-neutral-50 p-6 text-center">
            <p className="text-4xl font-bold text-black">50k+</p>
            <p className="mt-1 text-sm text-black">Rated bulb hours before end of service life</p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-neutral-50 p-6 text-center">
            <p className="text-4xl font-bold text-black">1</p>
            <p className="mt-1 text-sm text-black">Typical days to complete a full install</p>
          </div>
        </div>
        <p className="mt-4 max-w-2xl text-xs text-black/60">
          Warranty terms vary by package - your quote will spell out exactly what&apos;s covered.
        </p>
      </PageSection>

      {/* Color customization */}
      <PageSection
        eyebrow="Customization"
        theme={GOLD}
        title="16 million+ colors, hundreds of preset themes."
        subtitle="With over 16 million color options per bulb, your creativity is the limit. The app includes preset themes for every holiday, plus the ability to build, save, and switch between your own custom looks."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {THEMES.map((t) => (
            <div key={t.name} className="rounded-2xl border border-black/10 bg-neutral-50 p-6">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-full"
                style={{ backgroundColor: `${t.color}1a` }}
              >
                <t.Icon size={22} color={t.color} strokeWidth={2} />
              </span>
              <h3 className="mt-3 text-base font-semibold text-black">{t.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-black">{t.body}</p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Comparison */}
      <PageSection
        eyebrow="Comparison"
        theme={GREEN}
        title="Permanent vs. traditional Christmas lights"
        subtitle="Traditional lights cost less upfront, but come with hidden costs every year: your time to install and remove them, replacement bulbs and strands, and the physical toll of ladder work."
      >
        <div className="overflow-x-auto rounded-2xl border border-black/10 bg-neutral-50">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-black/10">
                <th className="px-5 py-3 font-semibold text-black">Feature</th>
                <th className="px-5 py-3 font-semibold text-black">Traditional</th>
                <th className="px-5 py-3 font-semibold text-black">Permanent</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row.feature} className="border-b border-black/10 last:border-0">
                  <td className="px-5 py-3 font-medium text-black">{row.feature}</td>
                  <td className="px-5 py-3 text-black/70">✕ {row.traditional}</td>
                  <td className="px-5 py-3 font-medium text-black">✓ {row.permanent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PageSection>

      {/* Process */}
      <PageSection eyebrow="How It Works" theme={BLUE} title="Installation process">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p) => (
            <div key={p.step} className="rounded-2xl border border-black/10 bg-neutral-50 p-6">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-black"
                style={{ backgroundColor: "#3b82f6" }}
              >
                {p.step}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-black">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-black">{p.body}</p>
            </div>
          ))}
        </div>
        <Link
          href="/#contact"
          className="mt-8 inline-block rounded-full px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
          style={{ backgroundColor: "#3b82f6" }}
        >
          Start Your Free Consultation
        </Link>
      </PageSection>

      {/* Pricing */}
      <PageSection
        id="pricing"
        eyebrow="Investment"
        theme={PURPLE}
        title="How much do permanent Christmas lights cost?"
        subtitle="Most systems run $2,000–$8,000+ depending on your home size, roofline complexity, and linear footage - priced from the same $18–$24/ft rates as our packages on the homepage."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {PRICING.map((tier) => (
            <div
              key={tier.name}
              className="flex flex-col rounded-2xl border p-8 shadow-sm"
              style={{
                borderColor: tier.featured ? "#a855f7" : "rgba(0,0,0,0.1)",
                backgroundColor: tier.featured ? "#a855f712" : "#fafafa",
              }}
            >
              {tier.featured && (
                <span
                  className="mb-4 w-fit rounded-full px-3 py-1 text-xs font-semibold text-black"
                  style={{ backgroundColor: "#a855f7" }}
                >
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-black">{tier.name}</h3>
              <p className="mt-1 text-2xl font-bold text-black">{tier.range}</p>
              <p className="mt-1 text-xs text-black/60">{tier.note}</p>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-black">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/#contact"
                className="mt-8 rounded-full border border-black/15 py-3 text-center text-sm font-semibold text-black transition-colors hover:bg-black/5"
              >
                Get a Free Quote
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm text-black">
          This is a one-time cost for a permanent home improvement you&apos;ll use for decades. We provide a detailed
          quote after a free design consultation, so you know exactly what to expect.
        </p>
      </PageSection>

      {/* Dual mode banner */}
      <PageSection theme={RED}>
        <div className="rounded-2xl border border-black/10 bg-neutral-50 p-10 text-center sm:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: RED.text }}>
            Switch between
          </p>
          <p className="mt-3 text-2xl font-bold text-black sm:text-3xl">
            Accent lighting for nightly use and holiday lighting for any occasion.
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-block rounded-full px-7 py-3.5 text-base font-semibold text-black transition-transform hover:scale-105"
            style={{ backgroundColor: "#ff4136", boxShadow: "0 0 30px 4px #ff413655" }}
          >
            Get a Free Quote
          </Link>
        </div>
      </PageSection>

      {/* FAQ */}
      <PageSection eyebrow="Frequently Asked Questions" theme={GOLD} title="Questions, answered.">
        <FaqAccordion />
      </PageSection>

      {/* Specialties */}
      <PageSection eyebrow="Our Specialties" theme={GREEN} title="Beyond holiday lighting.">
        <div className="grid gap-6 lg:grid-cols-3">
          {SPECIALTIES.map((s) => (
            <div key={s.title} className="rounded-2xl border border-black/10 bg-neutral-50 p-7">
              <h3 className="text-lg font-semibold text-black">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-black">{s.body}</p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Showcase */}
      <PageSection eyebrow="Look Inspiration" theme={BLUE} title="A few of the looks you can switch between.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SHOWCASE_LOOKS.map((look) => (
            <ShowcaseCard key={look.name} name={look.name} colors={look.colors} photo={look.photo} />
          ))}
        </div>
        <p className="mt-6 text-sm text-black">
          See more real install photos on our{" "}
          <Link href="/#gallery" className="font-semibold underline">
            homepage gallery
          </Link>
          .
        </p>
      </PageSection>

      {/* Final CTA */}
      <PageSection theme={RED} className="pb-32 text-center">
        <p className="mx-auto max-w-xl text-2xl font-bold text-black sm:text-3xl">
          Ready to stop climbing the ladder?
        </p>
        <Link
          href="/#contact"
          className="mt-8 inline-block rounded-full px-8 py-4 text-base font-semibold text-black transition-transform hover:scale-105"
          style={{ backgroundColor: "#ff4136", boxShadow: "0 0 30px 4px #ff413655" }}
        >
          Get Your Free Quote
        </Link>
      </PageSection>
    </main>
  );
}
