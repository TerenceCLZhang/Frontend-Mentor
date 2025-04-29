import { useState } from "react";
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
            backgroundImage: `url(${
              !answerRevealed
                ? "src/assets/images/icon-plus.svg"
                : "src/assets/images/icon-minus.svg"
            })`,
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
