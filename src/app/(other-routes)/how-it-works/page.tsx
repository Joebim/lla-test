import HeroSection from "~/components/HowItWorks/Hero/Hero";
import ReadyToStart from "~/components/HowItWorks/readytostart/Readytostart";
import StepTabs from "~/components/HowItWorks/Steps/Steps";

export default function HowItWorks() {
  return (
    <>
      <HeroSection />
      <StepTabs />
      <ReadyToStart />
    </>
  );
}
