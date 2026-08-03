import type { SectionId } from "@/lib/sections";

export function Section({
  id,
  className = "",
  children,
}: {
  id: SectionId;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-24 sm:px-8 md:py-32 ${className}`}
    >
      {children}
    </section>
  );
}
