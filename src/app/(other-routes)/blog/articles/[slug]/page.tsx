import FirstHero from "../_components_/FirstHero";
import FourthHero from "../_components_/FourthHero";
import PhraseList from "../_components_/PhraseList";
import SecondHero from "../_components_/SecondHero";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  console.log(`Article slug: ${params.slug}`);

  return (
    <div>
      <FirstHero />
      <SecondHero />
      <PhraseList phrases={[]} />
      <FourthHero />
    </div>
  );
}
