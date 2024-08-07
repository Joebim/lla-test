import Footer from "~/components/footer/Footer";
import FirstHero from "./_components_/FirstHero";
import FourthHero from "./_components_/FourthHero";
import SecondHero from "./_components_/SecondHero";
import ThirdHero from "./_components_/ThirdHero";

const AboutPage = () => {
  return (
    <section className="w-full">
      <FirstHero />

      {/* MEET THE TEAM */}
      <SecondHero />
      {/* GET IN TOUCH */}
      <ThirdHero />
      {/* language adventure */}
      <FourthHero />
      {/* footer */}
      <Footer />
    </section>
  );
};
export default AboutPage;
