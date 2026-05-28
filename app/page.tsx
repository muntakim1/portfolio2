import { Hero } from "@/components/sections/Hero";
import { ProfileFit } from "@/components/sections/ProfileFit";
import { About } from "@/components/sections/About";
import { ResearchInterests } from "@/components/sections/ResearchInterests";
import { Publications } from "@/components/sections/Publications";
import { Achievements } from "@/components/sections/Achievements";
import { Events } from "@/components/sections/Events";
import { Leadership } from "@/components/sections/Leadership";
import { TechnicalExpertise } from "@/components/sections/TechnicalExpertise";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ProfileFit />
      <About />
      <ResearchInterests />
      <Publications />
      <Achievements />
      <Events />
      <Education />
      <TechnicalExpertise />
      <Leadership />
      <Certifications />
      <Testimonials />
    </div>
  );
}
