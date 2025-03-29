import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { Background } from "@/components/ui/background";
import { DownloadResume } from "@/components/ui/download-resume";
import { Dashboard } from "@/components/sections/dashboard";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen">
        <Background />
        <Hero />
        <Dashboard />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
      
      <DownloadResume />
    </>
  );
} 