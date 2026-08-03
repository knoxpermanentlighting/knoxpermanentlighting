import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LedScrollRail } from "@/components/led-scroll-rail";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Services } from "@/components/services";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { ServiceArea } from "@/components/service-area";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col font-sans">
      <div className="ambient-glow" aria-hidden="true" />
      <SiteHeader />
      <LedScrollRail />
      <main className="relative z-10">
        <Hero />
        <HowItWorks />
        <Services />
        <Gallery />
        <Testimonials />
        <ServiceArea />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
