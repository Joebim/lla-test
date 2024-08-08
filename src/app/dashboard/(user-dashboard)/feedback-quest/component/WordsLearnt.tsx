// components/WordsLearnt.tsx
import React from "react";

interface Word {
  word: string;
  translation: string;
  correct: boolean;
}

interface WordsLearntProperties {
  words: Word[];
}

const WordsLearnt: React.FC<WordsLearntProperties> = ({ words }) => {
  return (
    <div className="shadow-md mt-6 rounded-md border border-gray-200 bg-white p-4">
      <h3 className="mb-2 text-lg font-bold">New Words Learnt</h3>
      <div className="max-h-60 overflow-y-auto">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="p-2">Word</th>
              <th className="p-2"></th>
              <th className="p-2">Translation</th>
              <th className="p-2">Correct</th>
            </tr>
          </thead>
          <tbody>
            {words.map((word, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="p-2">{word.word}</td>
                <td className="p-2">-</td>
                <td className="p-2">{word.translation}</td>
                <td className="p-2">
                  {word.correct ? (
                    <span className="text-green-500">&#x2714;</span>
                  ) : (
                    <span className="text-gray-400">&#x2716;</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WordsLearnt;
