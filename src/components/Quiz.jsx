import { useState, useCallback, useRef } from "react";
import QUESTIONS from "../questions";
import QuizCompleted from "../assets/quiz-complete.png";
import Question from "./Question";

export default function Quiz() {
  /*question to show for the user const [
    activeQuestionIndex,
    setActiveQuestionIndex,
  ] = useState(0);*/

  //const shuffledAnswersRef = useRef();
  /*anwer to be stored*/ const [userAnswers, setUserAnswers] = useState([]);
  //const [answerState, setAnswerState] = useState("");
  const activeQuestionIndex = /*answerState === "" ? */ userAnswers.length;

  const quizCompleted = activeQuestionIndex === QUESTIONS.length;

  /*const handleSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  }, []);*/

  const handleSelectAnswer = useCallback(
    function handleAnswer(selectedAnswer) {
      //setAnswerState("answered");
      setUserAnswers((prevAnswers) => {
        return [...prevAnswers, selectedAnswer];
      });
      /*setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);,*/
    },
    [
      /*activeQuestionIndex*/
    ],
  );

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

  /*if (!shuffledAnswersRef.current) {
    /*create a new array to sort the answers const shuffledAnswersRef.current =
      [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswersRef.current.sort(() => Math.random() - 0.5);
  }*/

  return (
    <div id="quiz">
      <div id="question">
        <Question
          key={activeQuestionIndex}
          index={activeQuestionIndex}
          onSelectAnswer={handleSelectAnswer}
          onSkipAnswer={handleSkipAnswer}
        />
        {/*<QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <Answers
          key={activeQuestionIndex}
          answers={QUESTIONS[activeQuestionIndex].answers}
          selectedAnswer={userAnswers[userAnswers.length - 1]}
          answerState={answerState}
          onSelect={handleSelectAnswer}
        />
        {/*<ul id="answers">
          {shuffledAnswersRef.current.map((answer) => {
            const isSelected = userAnswers[userAnswers.length - 1] === answer;
            let cssClass = "";
            if (answerState === "answered" && isSelected) {
              cssClass = "selected";
            }

            if (
              (answerState === "correct" || answerState === "wrong") &&
              isSelected
            ) {
              cssClass = answerState;
            }

            return (
              <li key={answer} className="answer">
                <button
                  onClick={() => handleSelectAnswer(answer)}
                  className={cssClass}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>*/}
      </div>
    </div>
  );
}
