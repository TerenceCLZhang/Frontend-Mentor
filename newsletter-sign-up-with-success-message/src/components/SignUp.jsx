import { useNavigate } from "react-router-dom";
import "../css/SignUp.css";
import { useEffect, useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [hasBlurred, setHasBlurred] = useState(false);
  const [userTyping, setUserTyping] = useState(false);

  const navigate = useNavigate();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  useEffect(() => {
    const trimmedEmail = email.trim();
    setIsValidEmail(trimmedEmail !== "" && emailRegex.test(trimmedEmail));
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasBlurred(true); // Show error if form was submitted
    if (isValidEmail) navigate("/success");
  };

  return (
    <section className="sign-up">
      <div className="img-header"></div>
      <div className="main-contents">
        <div className="mid-gap">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className="feature-list small-gap">
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
        </div>
        <form className="sign-up-form mid-gap" onSubmit={handleSubmit}>
          <div className="small-gap">
            <div className="labels">
              <label htmlFor="email" className="bold">
                Email address
              </label>
              {hasBlurred && !isValidEmail && (
                <span className="error bold">Valid email required</span>
              )}
            </div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@company.com"
              value={email}
              className={
                hasBlurred && !isValidEmail && !userTyping ? "error-state" : ""
              }
              onChange={(e) => {
                setUserTyping(true);
                setEmail(e.target.value);
              }}
              onBlur={() => {
                setUserTyping(false);
                setHasBlurred(true);
              }}
            />
          </div>
          <input type="submit" value="Subscribe to monthly newsletter" />
        </form>
      </div>
    </section>
  );
}

export default SignUp;
