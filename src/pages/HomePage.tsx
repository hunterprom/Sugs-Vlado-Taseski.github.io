import PageTransition from "@/components/PageTransition";
import HeroSection from "@/components/HeroSection";
import HomeGallery from "@/components/HomeGallery";

const HomePage = () => {
  return (
    <PageTransition>
      <HeroSection />
      <HomeGallery />
    </PageTransition>
  );
};

export default HomePage;
