import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { CampaignNews } from "../components/home/CampaignNews";
import { MissionSection } from "../components/home/MissionSection";
import { CampaignSchedule } from "../components/home/CampaignSchedule";
import { QuoteSection } from "../components/home/QuoteSection";
import { GallerySection } from "../components/home/GallerySection";
import { StatisticsSection } from "../components/home/StatisticsSection";
import BlueSection from "../components/home/BlueSecion";
import AnimatedHeader from "../components/home/AnimatedHeader";
import { HeroSlider } from "@/components/home/HeroSlider";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AnimatedHeader />
      <main>
        <HeroSlider />
        <BlueSection />
        <div id="campaignnews">
          <CampaignNews />
        </div>
        <MissionSection />
        <CampaignSchedule />
        <QuoteSection />
        <GallerySection />
        <StatisticsSection />
      </main>
      <Footer />
    </div>
  );
}
