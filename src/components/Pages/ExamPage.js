// import React, { useState } from "react";
// import ExamTimer from "./ExamTimer";
// import Test from "./Test";
// // import StudentDashboard from "./StudentDashboard";

// function ExamPage() {
//   const examDuration = 60 * 30; // 30 minutes
//   const [isExamStarted, setIsExamStarted] = useState(false);

//   function handleStartExam() {
//     setIsExamStarted(true);
//   }

//   function handleTimeUp() {
//     alert("Time's up!");
//     setIsExamStarted(false);
//   }
//   return (
//     <div>
//       <div className="text-center text-4xl font-black text-orange-500" style={ {paddingTop:"30px"}} >
//         {isExamStarted ? (
//           <ExamTimer duration={examDuration} onTimeUp={handleTimeUp} />
//         ) : (
//           <button onClick={handleStartExam}>Start Exam</button>
//         )}
//       </div>

//       < Test />
//     </div>
//   );
// }

// export default ExamPage;


// import React, { useState, useEffect } from 'react';

// const ExamPage = () => {
//   const [timeLeft, setTimeLeft] = useState(60); // 60 seconds for the exam
//   const [isActive, setIsActive] = useState(true);
//   const [selectedAnswers, setSelectedAnswers] = useState([]);
//   const [answers, setAnswers] = useState([
//     { id: 1, text: 'Option 1', correct: true },
//     { id: 2, text: 'Option 2', correct: false },
//     { id: 3, text: 'Option 3', correct: false },
//     { id: 4, text: 'Option 4', correct: false },
//     { id: 5, text: 'Option 5', correct: false }
//   ]);

//   useEffect(() => {
//     let interval = null;
//     if (timeLeft === 0) {
//       setIsActive(false);
//     } else if (isActive) {
//       interval = setInterval(() => {
//         setTimeLeft(timeLeft - 1);
//       }, 1000);
//     }
//     return () => clearInterval(interval);
//   }, [timeLeft, isActive]);

//   const handleFinishExam = (event) => {
//     event.preventDefault();
//     submitAnswers();
//   };

//   const handleAnswerChange = (event, answerId) => {
//     const newSelectedAnswers = [...selectedAnswers];
//     newSelectedAnswers[answerId] = event.target.value;
//     setSelectedAnswers(newSelectedAnswers);
//   };

//   const renderAnswerInputs = () => {
//     return answers.map((answer, index) => (
//       <div key={answer.id}>
//         <label htmlFor={`answer${answer.id}`}>{answer.text}</label>
//         <input
//           type="radio"
//           name={`answer${answer.id}`}
//           value={answer.id}
//           checked={selectedAnswers[answer.id - 1] === answer.id}
//           onChange={(event) => handleAnswerChange(event, answer.id - 1)}
//           disabled={!isActive}
//         />
//       </div>
//     ));
//   };

//   const submitAnswers = () => {
//     // TODO: submit the selected answers to the server
//     console.log('Selected answers:', selectedAnswers);
//   };

//   return (
//     <div>
//       <h1>Exam</h1>
//       <p>Time Left: {timeLeft} seconds</p>
//       <form onSubmit={handleFinishExam}>
//         {renderAnswerInputs()}
//         {isActive ? (
//           <button type="submit">
//             Finish Exam
//           </button>
//         ) : (
//           <div>
//             {renderAnswerInputs()}
//             <button type="submit" onClick={submitAnswers}>
//               Submit Answers
//             </button>
//           </div>
//         )}
//       </form>
//     </div>
//   );
// };

// export default ExamPage;

import React, { useState, useEffect } from "react";

const ExamPage = () => {
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds for the exam
  const [isActive, setIsActive] = useState(true);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    let interval = null;
    if (timeLeft === 0) {
      setIsActive(false);
    } else if (isActive) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 500);
    }
    return () => clearInterval(interval);
  }, [timeLeft, isActive]);

  const handleFinishExam = (event) => {
    event.preventDefault();
    submitAnswers();
  };

  const handleAnswerChange = (event, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  };

  const renderAnswerInputs = () => {
    const inputs = [];
    for (let i = 0; i < 10; i++) {
      // 10 questions in the exam
      inputs.push(
        <div key={i}>
          <label htmlFor={`answer${i}`}>Question {i + 1}:</label>
          <input
            type="text"
            id={`answer${i}`}
            value={answers[i] || ""}
            onChange={(event) => handleAnswerChange(event, i)}
            disabled={!isActive}
          />
        </div>
      );
    }
    return inputs;
  };

  const submitAnswers = () => {
    // TODO: submit the answers to the server
    // fetch("/students", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     // Authorization: `Bearer ${token}`
    //   },
    //   body: JSON.stringify({
    //     student_id: student,
    //     course_id: course,
    //     message: messages,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((response) => console.log(response));
    // console.log("Answers submitted:", answers);
  };

  return (
    <div className="mt-5 ml-10">
      <h1>Exam</h1>
      <p>Time Left: {timeLeft} seconds</p>
      <form onSubmit={handleFinishExam}>
        {renderAnswerInputs()}
        {isActive ? (
          <button type="submit">Finish Exam</button>
        ) : (
          <div>
            {/* {renderAnswerInputs()} */}
            <button type="submit" onClick={submitAnswers}>
              Submit Answers
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ExamPage;

