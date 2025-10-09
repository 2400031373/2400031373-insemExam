import React, { useState } from "react";

const QuizPage = ({ onBackClick }) => {
  const [topic, setTopic] = useState("Basics");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  // Quiz Data (Topic-based)
  const quizData = {
    Basics: [
      {
        question: "Who wrote the Preamble? (Hint: Not Shakespeare 😜)",
        options: [
          "Dr. B.R. Ambedkar",
          "Mahatma Gandhi",
          "Thomas Edison",
          "Albert Einstein",
        ],
        answer: "Dr. B.R. Ambedkar",
      },
      {
        question: "How many Fundamental Rights are there?",
        options: ["5", "6", "7", "8"],
        answer: "6",
      },
      {
        question: "Which animal is NOT in the emblem of India? 🐘",
        options: ["Lion", "Elephant", "Horse", "Bull"],
        answer: "Elephant",
      },
    ],
    Rights: [
      {
        question: "Under which Article is 'Right to Equality' mentioned?",
        options: ["Article 12", "Article 14", "Article 19", "Article 32"],
        answer: "Article 14",
      },
      {
        question: "Which Article guarantees 'Freedom of Speech and Expression'?",
        options: ["Article 16", "Article 17", "Article 19(1)(a)", "Article 22"],
        answer: "Article 19(1)(a)",
      },
      {
        question: "Right to Constitutional Remedies is under which Article?",
        options: ["Article 32", "Article 21", "Article 45", "Article 370"],
        answer: "Article 32",
      },
    ],
    Amendments: [
      {
        question: "Which amendment lowered the voting age from 21 to 18?",
        options: ["42nd", "44th", "61st", "97th"],
        answer: "61st",
      },
      {
        question: "Which amendment added the Fundamental Duties?",
        options: ["42nd", "44th", "46th", "52nd"],
        answer: "42nd",
      },
      {
        question: "Which article allows amending the Constitution?",
        options: ["Article 360", "Article 368", "Article 370", "Article 356"],
        answer: "Article 368",
      },
    ],
  };

  const questions = quizData[topic];

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) setScore(score + 1);

    const nextQ = currentQuestion + 1;
    if (nextQ < questions.length) setCurrentQuestion(nextQ);
    else setShowScore(true);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setQuizStarted(false);
  };

  return (
    <>
      <style>{`
        body { margin:0; font-family: 'Open Sans', sans-serif; background-color: #f9f9f9; }
        .container { padding: 2rem; max-width: 700px; margin: auto; }
        h1 { font-family: 'Roboto Slab', serif; color: #003366; text-align: center; }
        select, button { padding: 0.6rem 1rem; margin-top: 1rem; border-radius: 5px; border: none; }
        select { width: 100%; background: #fff; border: 1px solid #ccc; }
        button { cursor: pointer; background-color: #2e8c81ff; color: white; font-weight: bold; }
        button:hover { background-color: #003366; }
        .question { margin-top: 2rem; font-weight: bold; font-size: 1.1rem; }
        .options { margin-top: 1rem; display: flex; flex-direction: column; gap: 0.8rem; }
        .options button { background-color: #2e8c81ff; color: white; font-size: 1rem; }
        .options button:hover { background-color: #003366; }
        .score { text-align: center; margin-top: 2rem; font-size: 1.2rem; font-style: italic; color: #003366; }
        .top-buttons { display: flex; justify-content: space-between; margin-bottom: 1.5rem; }
      `}</style>

      <div className="container">
        <h1>🧠 Test Your Constitution Knowledge!</h1>

        {!quizStarted && !showScore && (
          <>
            <label>Select Topic:</label>
            <select value={topic} onChange={(e) => setTopic(e.target.value)}>
              <option value="Basics">Basics of Constitution</option>
              <option value="Rights">Fundamental Rights</option>
              <option value="Amendments">Amendments</option>
            </select>

            <button onClick={() => setQuizStarted(true)}>Start Quiz ▶</button>
            <button onClick={onBackClick} style={{ marginLeft: "1rem" }}>
              🏠 Back to Home
            </button>
          </>
        )}

        {quizStarted && !showScore && (
          <>
            <div className="top-buttons">
              <div>Topic: <b>{topic}</b></div>
              <div>Question {currentQuestion + 1}/{questions.length}</div>
            </div>

            <div className="question">{questions[currentQuestion].question}</div>
            <div className="options">
              {questions[currentQuestion].options.map((opt, index) => (
                <button key={index} onClick={() => handleAnswer(opt)}>
                  {opt}
                </button>
              ))}
            </div>
          </>
        )}

        {showScore && (
          <div className="score">
            <h2>
              You scored {score} out of {questions.length}! 🎉
            </h2>
            <p>
              {score === questions.length
                ? "🔥 Perfect! You’re a Constitution Master!"
                : score >= 2
                ? "⚡ Great job! Keep learning more!"
                : "📘 Keep going — knowledge is power!"}
            </p>

            <button onClick={handleRestart}>🔁 Restart Quiz</button>
            <button onClick={onBackClick} style={{ marginLeft: "1rem" }}>
              🏠 Back to Home
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default QuizPage;
