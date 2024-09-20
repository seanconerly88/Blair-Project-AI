import React, { useState } from 'react';

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

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask Blair anything about the recruiting process..."
            className="flex-grow p-3 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-3 rounded-r-lg hover:bg-purple-700 transition duration-300"
          >
            Ask
          </button>
        </div>
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