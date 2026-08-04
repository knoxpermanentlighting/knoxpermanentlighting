export type SectionId =
  | "home"
  | "how-it-works"
  | "services"
  | "gallery"
  | "testimonials"
  | "service-area";

export type SectionMeta = {
  id: SectionId;
  label: string;
  /** Vivid bulb color: dots, glows, button/tint backgrounds (paired with dark text). */
  color: string;
  glow: string;
  /** Darker, WCAG-friendlier variant of `color` for text set directly on a white page. */
  text: string;
};

export const SECTIONS: SectionMeta[] = [
  { id: "home", label: "Welcome", color: "#ff4136", glow: "#ff7a70", text: "#dc2626" },
  { id: "how-it-works", label: "How It Works", color: "#ffc93c", glow: "#ffdd85", text: "#b45309" },
  { id: "services", label: "Services", color: "#2ecc71", glow: "#6fe3a4", text: "#15803d" },
  { id: "gallery", label: "Gallery", color: "#3b82f6", glow: "#7fabff", text: "#1d4ed8" },
  { id: "testimonials", label: "Reviews", color: "#a855f7", glow: "#cf9bff", text: "#7e22ce" },
  { id: "service-area", label: "Service Area", color: "#ff8a00", glow: "#ffb366", text: "#c2410c" },
];
