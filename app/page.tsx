import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WaveDivider from "@/components/WaveDivider";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WorkSection from "@/components/WorkSection";
// import TestimonialsSection from "@/components/TestimonialsSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import { DarkFooterSection, FooterBar } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="w-full flex flex-col overflow-x-hidden text-on-surface">
        {/* 1. Hero */}
        <HeroSection />

        {/* Wave: Surface → Tertiary-fixed */}
        <WaveDivider fromColor="bg-surface" toColor="text-tertiary-fixed" pathVariant={0} />

        {/* 2. About */}
        <AboutSection />

        {/* Wave: Tertiary-fixed → Surface */}
        <WaveDivider fromColor="bg-tertiary-fixed" toColor="text-surface" pathVariant={1} />

        {/* 3. Services */}
        <ServicesSection />

        {/* Wave: Surface → White */}
        <WaveDivider fromColor="bg-surface" toColor="text-surface-container-lowest" pathVariant={2} />

        {/* 4. Selected Work */}
        <WorkSection />

        {/* Wave: White (Selected Work) → Surface (Process) */}
        <WaveDivider fromColor="bg-surface-container-lowest" toColor="text-surface" pathVariant={3} />

        {/* 5. Testimonials (Disembunyikan sementara) */}
        {/* <TestimonialsSection /> */}

        {/* 6. Process */}
        <ProcessSection />

        {/* Wave: Surface → Red CTA */}
        <WaveDivider fromColor="bg-surface" toColor="text-secondary-container" pathVariant={5} />

        {/* 7. CTA */}
        <CTASection />

        {/* 8. Dark Footer Section */}
        <DarkFooterSection />
      </main>

      {/* 9. Secondary Footer Bar */}
      <FooterBar />
    </>
  );
}
