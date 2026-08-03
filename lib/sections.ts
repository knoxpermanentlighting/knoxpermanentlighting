export type SectionId =
  | "hero"
  | "how-it-works"
  | "services"
  | "gallery"
  | "testimonials"
  | "service-area"
  | "contact";

export type SectionMeta = {
  id: SectionId;
  label: string;
  color: string;
  glow: string;
};

export const SECTIONS: SectionMeta[] = [
  { id: "hero", label: "Welcome", color: "#ff4136", glow: "#ff7a70" },
  { id: "how-it-works", label: "How It Works", color: "#ffc93c", glow: "#ffdd85" },
  { id: "services", label: "Services", color: "#2ecc71", glow: "#6fe3a4" },
  { id: "gallery", label: "Gallery", color: "#3b82f6", glow: "#7fabff" },
  { id: "testimonials", label: "Reviews", color: "#a855f7", glow: "#cf9bff" },
  { id: "service-area", label: "Service Area", color: "#ffc93c", glow: "#ffdd85" },
  { id: "contact", label: "Get a Quote", color: "#ff4136", glow: "#ff7a70" },
];

export const DEFAULT_COLOR = SECTIONS[0].color;
export const DEFAULT_GLOW = SECTIONS[0].glow;
