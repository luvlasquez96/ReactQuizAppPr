import quizImage from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={quizImage} alt="Quiz Logo" />
      <h1>React Quiz</h1>
    </header>
  );
}
