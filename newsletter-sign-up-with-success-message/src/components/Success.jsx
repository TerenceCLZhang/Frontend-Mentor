import "../css/Success.css";
import success from "../assets/images/icon-success.svg";

function Success() {
  return (
    <section className="success">
      <div className="main-contents mid-gap">
        <img src={success} alt="" className="success-img" />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to{" "}
          <span className="bold">ash@loremcompany.com</span>. Please open it and
          click the button inside to confirm your subscription.
        </p>
      </div>
      <a href="/" className="dismiss">
        Dismiss message
      </a>
    </section>
  );
}

export default Success;
