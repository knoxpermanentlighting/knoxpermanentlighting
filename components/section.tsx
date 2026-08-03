import { SECTIONS, type SectionId } from "@/lib/sections";

export function Section({
  id,
  className = "",
  children,
}: {
  id: SectionId;
  className?: string;
  children: React.ReactNode;
}) {
  const meta = SECTIONS.find((s) => s.id === id);

  return (
    <section
      id={id}
      data-accent-color={meta?.color}
      data-accent-glow={meta?.glow}
      data-accent-text={meta?.text}
      className={`relative mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-24 sm:px-8 md:py-32 ${className}`}
    >
      {children}
    </section>
  );
}
