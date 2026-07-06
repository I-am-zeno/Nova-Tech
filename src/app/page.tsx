import Hero from "@/components/sections/Hero";
import Lineup from "@/components/sections/Lineup";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import VisitOurStore from "@/components/sections/VisitOurStore";
import Testimonials from "@/components/sections/Testimonials";
import CtaSection from "@/components/sections/CtaSection";

function SectionDivider() {
  return <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />;
}

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <Lineup />
      <SectionDivider />
      <WhyChooseUs />
      <SectionDivider />
      <VisitOurStore />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <CtaSection />
    </>
  );
}
