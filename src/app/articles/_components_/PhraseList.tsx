type Phrase = {
  text: string;
  pronunciation: string;
};

const PhraseList = ({ phrases }: { phrases: Phrase[] }) => {
  return (
    <ul className="mt-6 list-disc pl-10">
      {phrases.map((phrase, index) => (
        <li key={index} className="mt-6 list-item">
          <div className="flex flex-col">
            <span>{phrase.text}</span>
            <span className="ml-2 text-sm">({phrase.pronunciation})</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PhraseList;
