import { useState } from "react";
import iconPlus from "../assets/images/icon-plus.svg";
import iconMinus from "../assets/images/icon-minus.svg";
import "../css/Faq.css";

function Faq({ id, question, answer }) {
  const [answerRevealed, setAnswerRevealed] = useState(false);

  return (
    <div className="faq flex">
      <div className="question flex">
        <h2>{question}</h2>
        <button
          onClick={() => setAnswerRevealed(!answerRevealed)}
          className="reveal-btn"
          style={{
            backgroundImage: `url(${answerRevealed ? iconMinus : iconPlus})`,
          }}
          aria-expanded={answerRevealed}
          aria-controls={`answer-${id}`}
        ></button>
      </div>
      {answerRevealed && (
        <p id={`answer-${id}`} className="answer">
          {answer}
        </p>
      )}
    </div>
  );
}

export default Faq;
