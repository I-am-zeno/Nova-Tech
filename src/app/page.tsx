import Hero from "@/components/sections/Hero";
import Lineup from "@/components/sections/Lineup";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import VisitOurStore from "@/components/sections/VisitOurStore";
import Contact from "@/components/sections/Contact";
import Testimonials from "@/components/sections/Testimonials";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Lineup />
      <WhyChooseUs />
      <VisitOurStore />
      <Contact />
      <Testimonials />
      <CtaSection />
    </>
  );
}
