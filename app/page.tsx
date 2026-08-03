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
    <>
      <LedScrollRail />
      <main className="flex-1 font-sans">
        <Hero />
        <HowItWorks />
        <Services />
        <Gallery />
        <Testimonials />
        <ServiceArea />
        <ContactSection />
      </main>
    </>
  );
}
