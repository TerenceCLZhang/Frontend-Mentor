import "../css/Success.css";

function Success() {
  return (
    <section className="success">
      <div className="main-contents mid-gap">
        <img
          src="src/assets/images/icon-success.svg"
          alt=""
          className="success-img"
        />
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
