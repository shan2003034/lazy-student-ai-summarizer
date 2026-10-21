import { useState } from 'react';

export default function Flashcard({ question, answer }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="cursor-pointer bg-gray-700 p-6 rounded-xl border border-gray-600 hover:border-green-400 transition-all min-h-[120px] flex items-center justify-center text-center shadow-md"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {isFlipped ? (
        <p className="text-green-300 font-medium text-lg animate-pulse">{answer}</p>
      ) : (
        <p className="text-white font-bold text-lg">{question}</p>
      )}
    </div>
  );
}