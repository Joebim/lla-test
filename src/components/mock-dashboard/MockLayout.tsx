import MockNav from "./MockNav";
import Card from "./MockQuestCard";

export default function MockLayout() {
  return (
    <div className="fixed left-0 top-0 -z-10 h-screen w-screen bg-transparent-black-40 blur brightness-50">
      <MockNav />
      <div className="flex min-h-screen w-full flex-col gap-12 p-4 md:p-6">
        <h1 className="text-center font-axiformaSemiBold text-5xl leading-normal tracking-[4.5px] md:text-7xl">
          Start Your Quest
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {[
            "hero_image1.jpg",
            "hero_image2.jpg",
            "hero_image3.jpg",
            "hero_image4.jpg",
          ].map((img, index) => (
            <Card img={img} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
