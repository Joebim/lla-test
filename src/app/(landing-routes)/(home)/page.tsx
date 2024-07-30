import HeroSection from "~/components/HeroSection";
import LearningGoalModal from "~/components/modals/LearningGoalModal";

function page() {
  return (
    <div className="relative flex h-full w-full flex-col">
      <HeroSection />
      <LearningGoalModal />
    </div>
  );
}
export default page;
