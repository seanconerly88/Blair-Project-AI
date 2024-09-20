import React, { useState } from 'react';
import { Send } from 'lucide-react';

const AskBlair = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the question to an API and get a response
    // For now, we'll just set a placeholder answer
    setAnswer(`Thank you for your question: "${question}". Blair AI is processing your request.`);
    setQuestion('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <form onSubmit={handleSubmit} className="mb-4 relative">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask Blair anything about the recruiting process..."
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 min-h-[150px] resize-none pr-12"
        />
        <button
          type="submit"
          className="absolute bottom-3 right-3 text-purple-600 hover:text-purple-800 transition-all duration-300 hover:scale-110"
          aria-label="Send question"
        >
          <Send size={24} />
        </button>
      </form>
      {answer && (
        <div className="mt-4 p-4 bg-purple-50 rounded-lg">
          <h3 className="font-semibold text-purple-800 mb-2">Blair's Response:</h3>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default AskBlair;
