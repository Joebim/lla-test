import FirstHero from "../_components_/FirstHero";
import FourthHero from "../_components_/FourthHero";
import PhraseList from "../_components_/PhraseList";
import SecondHero from "../_components_/SecondHero";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  // Here you would typically fetch the article data based on the slug
  // For now, we'll just display the slug and the components

  return (
    <div>
      <h1>Article: {params.slug}</h1>
      <FirstHero />
      <SecondHero />
      <PhraseList phrases={[]} />
      <FourthHero />
    </div>
  );
}
