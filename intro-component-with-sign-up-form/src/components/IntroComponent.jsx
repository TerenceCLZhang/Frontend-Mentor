import SignUpForm from "./SignUpForm";
import "../css/IntroComponent.css";

function IntroComponent() {
  return (
    <>
      <section className="main-header">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </section>

      <section className="sign-up-container">
        <div className="deal">
          <p>
            <span style={{ fontWeight: "600" }}>Try it free 7 days</span> then
            $20/mo. thereafter
          </p>
        </div>

        <div className="sign-up-form-container">
          <SignUpForm />
          <span>
            By clicking the button, you are agreeing to our{" "}
            <a href="#">Terms and Services</a>
          </span>
        </div>
      </section>
    </>
  );
}

export default IntroComponent;
