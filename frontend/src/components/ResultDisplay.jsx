import ReactMarkdown from 'react-markdown';
import Flashcard from './Flashcard';

export default function ResultDisplay({ loading, result }) {
  
  let summaryText = "";
  let flashcards = [];

  if (result && result.summary) {
    const parts = result.summary.split('---FLASHCARDS---');
    summaryText = parts[0];
    
    if (parts[1]) {
      flashcards = parts[1].split('\n')
        .filter(line => line.includes('Q:') && line.includes('| A:'))
        .map((line) => {
          const qPart = line.split('| A:')[0].replace('Q:', '').trim();
          const aPart = line.split('| A:')[1].trim();
          return { question: qPart, answer: aPart };
        });
    }
  }

  return (
    <div className="lg:col-span-2 bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 min-h-[500px]">
      <h2 className="text-2xl font-bold mb-6">Generated Summary & Flashcards</h2>
      
      {loading && (
        <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
          <span className="text-6xl animate-bounce">🦥</span>
          <p className="text-green-400 text-xl font-medium animate-pulse">Taking it slow and steady...</p>
        </div>
      )}

      {!loading && !result && (
        <div className="flex items-center justify-center h-full text-gray-500">
          Upload a lecture to see the magic happen.
        </div>
      )}

      {!loading && result && (
        <div className="space-y-6">
          <div className="bg-gray-900 p-5 rounded-xl border border-gray-700">
            <h3 className="text-xl font-bold text-green-400 mb-3">📝 Summary</h3>
            <div className="text-gray-300 leading-relaxed prose prose-invert max-w-none">
              <ReactMarkdown>{summaryText}</ReactMarkdown>
            </div>
          </div>

          {flashcards.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-bold text-blue-400 mb-4">🃏 Flashcards (Click to flip)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {flashcards.map((card, index) => (
                  <Flashcard key={index} question={card.question} answer={card.answer} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}