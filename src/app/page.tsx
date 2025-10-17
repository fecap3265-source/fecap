import { HeroSection } from "@/components/features/home/HeroSection";
import { AboutSection } from "@/components/features/home/AboutSection";
import { ProfessorsSection } from "@/components/features/home/ProfessorsSection";
import { MissionSection } from "@/components/features/home/MissionSection";
import { HomeContactSection } from "@/components/features/home/HomeContactSection";
import { PartnersSection } from "@/components/features/home/PartnersSection";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <ProfessorsSection />
      <HomeContactSection />
      <PartnersSection />
    </>
); }