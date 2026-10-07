import Intro from "@/components/sections/Intro";
import QuickActions from "@/components/sections/QuickActions";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ClinicTour from "@/components/sections/ClinicTour";
import SmileGallery from "@/components/sections/SmileGallery";
import Team from "@/components/sections/Team";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import CtaBand from "@/components/sections/CtaBand";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Intro />
      <QuickActions />
      <Stats />
      <Services />
      <WhyChooseUs />
      <ClinicTour />
      <SmileGallery />
      <Team />
      <Gallery />
      <Testimonials />
      <CtaBand />
      <Contact />
    </main>
  );
}
