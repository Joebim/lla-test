import PhraseList from "./PhraseList";

const SecondHero = () => {
  const phrases = [
    { text: "Hello – Hola", pronunciation: "O-la" },
    { text: "Good morning – Buenos días", pronunciation: "BWAY-nos DEE-as" },
    {
      text: "Good afternoon/good evening – Buenas tardes",
      pronunciation: "BWAY-nas TAR-des",
    },
    { text: "Good night – Buenas noches", pronunciation: "BWAY-nas NOH-chays" },
    {
      text: "How are you? (formal – to a stranger) – Cómo está?",
      pronunciation: "KOH-moh eh-STAH",
    },
    {
      text: "I&apos;m fine, thank you – Bien, gracias",
      pronunciation: "bee-EN GRA-thee-as",
    },
    {
      text: "What&apos;s your name? – Cómo te llamas?",
      pronunciation: "KOH-moh te ya-mas?",
    },
    { text: "My name is… – Me llamo…", pronunciation: "May ya-moh…" },
    {
      text: "Nice to meet you – Mucho gusto",
      pronunciation: "MOO-choh GOO-stoh",
    },
    { text: "Please – Por favor", pronunciation: "por fa-vor" },
    { text: "Thank you – Gracias", pronunciation: "GRA-thee-as" },
  ];
  return (
    <div className="px-[10%] py-10 text-center text-[18px] leading-tight lg:text-left">
      <p className="mt-6">
        Did you know that Spanish is the official language of 20 countries, with
        the second largest number of native speakers in the world? Here are some
        useful facts and phrases that every traveller should know before
        travelling to a Spanish-speaking country.
      </p>
      <p className="mt-6">
        Travelling to a Spanish-speaking country? Fortunately, Spanish is one of
        the easiest languages for English-speakers to pick up. While we all know
        our &apos;sí&apos; from our &apos;no&apos;, there are so many more
        complex but useful Spanish phrases to learn that will help you on your
        travels.
      </p>
      <p className="mt-6">
        Whether you want to confidently chat with the locals, make friends
        abroad or find the nearest toilet with zero hassle, these useful Spanish
        phrases will make sure you&apos;re making the most of your holiday.
        Diviértete! (have fun!) Let&apos;s start with the simple ones. Here are
        some basic Spanish phrases for you to learn:
      </p>
      <PhraseList phrases={phrases} />
    </div>
  );
};
export default SecondHero;
