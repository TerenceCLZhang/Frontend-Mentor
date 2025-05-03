import "../css/Success.css";
import success from "../assets/images/icon-success.svg";
import { useLocation } from "react-router-dom";

function Success() {
  const location = useLocation();
  const email = location.state?.email;

  return (
    <section className="success">
      <div className="main-contents mid-gap">
        <img src={success} alt="" className="success-img" />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to{" "}
          <span className="bold">{email}</span>. Please open it and click the
          button inside to confirm your subscription.
        </p>
      </div>
      <a href="/" className="dismiss">
        Dismiss message
      </a>
    </section>
  );
}

export default Success;
