import Footer from "~/components/footer/Footer";
import FirstHero from "./_components_/FirstHero";
import FourthHero from "./_components_/FourthHero";
import SecondHero from "./_components_/SecondHero";

const AboutPage = () => {
  return (
    <section className="w-full">
      <FirstHero />
      <SecondHero />
      <FourthHero />
      <Footer />
    </section>
  );
};
export default AboutPage;
