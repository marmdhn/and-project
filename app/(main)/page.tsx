import HeroSection from "@/components/sections/HeroSection";
import ServiceSection from "@/components/sections/Service";
import WhyUsSection from "@/components/sections/WhyUs";
import CtaSection from "@/components/sections/Cta";

export default function Home() {
  return (
    <div className="px-5 lg:px-20">
      <HeroSection />
      <div className="lg:px-20">
        <ServiceSection />
        <WhyUsSection />
        <CtaSection />
      </div>
    </div>
  );
}
