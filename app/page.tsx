import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Certifications } from "@/components/sections/Certifications";
import { Publications } from "@/components/sections/Publications";
import { Achievements } from "@/components/sections/Achievements";
import { TechnicalExpertise } from "@/components/sections/TechnicalExpertise";
import { Education } from "@/components/sections/Education";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <TechnicalExpertise />
      <Education />
      <Certifications />
      <Publications />
      <Achievements />
      <Testimonials />
    </div>
  );
}
