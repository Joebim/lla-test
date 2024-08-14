import HeroSection from "~/components/HeroSection";
import HomeBlog from "~/components/LandingPageComponents/HomeBlog";
import HomeKeyFeaturesSection from "~/components/LandingPageComponents/HomeKeyFeaturesSection";
import HomeSection2 from "~/components/LandingPageComponents/HomeSection2";
import HomeSection3 from "~/components/LandingPageComponents/HomeSection3";
import ReadytoStartSection from "~/components/LandingPageComponents/ReadytoStartSection";

function page() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-x-hidden">
      <HeroSection />
      <HomeSection2 />
      <HomeSection3 />
      <HomeKeyFeaturesSection />
      <ReadytoStartSection />
      <HomeBlog />
    </div>
  );
}
export default page;
