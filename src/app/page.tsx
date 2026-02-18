import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Single gradient spanning Hero → WhyChooseUs → Services */}
      <div className="bg-gradient-to-b from-primary to-primary-blue">
        <Hero />
        <WhyChooseUs />
        <Services />
      </div>
      <Team />
      <Gallery />
      <Testimonials />
      <Contact />
    </main>
  );
}
