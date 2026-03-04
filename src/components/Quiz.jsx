import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import QuizCompleted from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";

export default function Quiz() {
  /*question to show for the user const [
    activeQuestionIndex,
    setActiveQuestionIndex,
  ] = useState(0);*/

  /*anwer to be stored*/ const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const quizCompleted = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer],
  );

  if (quizCompleted) {
    return (
      <div id="summary">
        <img src={QuizCompleted} alt="Quiz Completed" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }
  /*create a new array to sort the answers*/ const shuffledAnswers = [
    ...QUESTIONS[activeQuestionIndex].answers,
  ];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
