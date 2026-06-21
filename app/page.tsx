import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SystemMonitor from "@/components/SystemMonitor";
import Capabilities from "@/components/Capabilities";
import Testimonials from "@/components/Testimonials";
import Pitch from "@/components/Pitch";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div id="scroll-progress" className="scroll-progress"></div>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SystemMonitor />
        <Capabilities />
        <Testimonials />
        <Pitch />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
