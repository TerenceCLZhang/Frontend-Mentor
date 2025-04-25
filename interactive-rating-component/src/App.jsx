import { useState } from "react";
import "./App.css";

function App() {
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setRating(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating) {
      setSubmitted(true);
    } else {
      alert("Please select a rating before submitting.");
    }
  };

  return (
    <main>
      {!submitted ? (
        <>
          <div className="star"></div>
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="options">
              {[1, 2, 3, 4, 5].map((num) => (
                <label key={num} className="rating-option">
                  <input
                    type="radio"
                    name="rating"
                    value={num}
                    onChange={handleChange}
                  />
                  <span>{num}</span>
                </label>
              ))}
            </div>

            <input type="submit" value="Submit" className="rating-submit" />
          </form>
        </>
      ) : (
        <>
          <div className="thank-you-img">
            <img src="src/images/illustration-thank-you.svg" alt="" />
          </div>
          <span className="rating">You selected {rating} out of 5</span>
          <h2>Thank you!</h2>
          <p style={{ textAlign: "center" }}>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </>
      )}
    </main>
  );
}

export default App;
