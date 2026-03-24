import { HeroSection } from "@/components/HeroSection";
import { LaptopPreview } from "@/components/LaptopPreview";
import { CustomSection } from "@/components/CustomSection";
import { FeedbackSection } from "@/components/FeedbackSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      <LaptopPreview />
      <CustomSection />
      <FeedbackSection />
      <ContactSection />
    </div>
  );
};

export default Index;