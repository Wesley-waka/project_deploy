import React, { useState } from "react";

const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: [
      { id: "A", text: "Paris" },
      { id: "B", text: "Madrid" },
      { id: "C", text: "Berlin" },
      { id: "D", text: "London" },
    ],
    answer: "A",
  },
  {
    id: 2,
    question: "What is the largest planet in our solar system?",
    options: [
      { id: "A", text: "Venus" },
      { id: "B", text: "Mars" },
      { id: "C", text: "Jupiter" },
      { id: "D", text: "Saturn" },
    ],
    answer: "C",
  },
  {
    id: 3,
    question: "What is the highest mountain in the world?",
    options: [
      { id: "A", text: "Mount Kilimanjaro" },
      { id: "B", text: "Mount Everest" },
      { id: "C", text: "Mount Fuji" },
      { id: "D", text: "Mount Olympus" },
    ],
    answer: "B",
  },
];

function Test() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill(null)
  );

  const handleAnswerClick = (answer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = answer;
    setUserAnswers(updatedAnswers);
  };

  const handleNextClick = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleSubmitClick = () => {
    console.log(userAnswers);
    // You can send the userAnswers to the backend for grading
  };

  return (
    <div style={{ paddingLeft: "600px", paddingTop: "50px" }}>
      <h1 className="pb-5 text-2xl font-bold">Multiple-Choice Test</h1>
      <p className="pb-5 text-2xl" style={{ paddingLeft: "30px" }}>
        Question {currentQuestion + 1} of {questions.length}
      </p>
      <h2 className="pb-3" style={{ paddingLeft: "0px" }}>
        {questions[currentQuestion].question}
      </h2>
      <ul>
        {questions[currentQuestion].options.map((option) => (
          <li key={option.id}>
            <label>
              <input
              
                type="radio"
                name={`question${currentQuestion}`}
                value={option.id}
                checked={userAnswers[currentQuestion] === option.id}
                onChange={() => handleAnswerClick(option.id)}
              />
           
                {option.text}
            
              
            </label>
          </li>
        ))}
      </ul>
      <div className="pt-3">
        <button
          className="bg-yellow-500 p-1 rounded-md ml-2"
          disabled={currentQuestion === 0}
          onClick={() => setCurrentQuestion(currentQuestion - 1)}
        >
          Previous
        </button>
        <button
          className="bg-yellow-500 p-1 rounded-md ml-5"
          disabled={currentQuestion === questions.length - 1}
          onClick={handleNextClick}
        >
          Next
        </button>
        <button
          disabled={userAnswers.includes(null)}
          onClick={handleSubmitClick}
          className="bg-black text-yellow-500 p-1 rounded-md ml-5"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Test;
