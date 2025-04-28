import { useEffect, useState } from "react";
import "../css/InputContainer.css";

function InputContainer({
  name,
  type,
  placeholder,
  errorType,
  onBlurFunction,
}) {
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!errorType) {
      setErrorMessage("");
      return;
    }

    switch (errorType) {
      case "empty":
        setErrorMessage(`${placeholder} cannot be empty`);
        break;
      case "invalidEmail":
        setErrorMessage("Looks like this is not an email");
        break;
      default:
        setErrorMessage("Invalid input");
        break;
    }
  }, [errorType, placeholder]);

  return (
    <div className="input-container">
      <div>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className={errorMessage ? "error" : ""}
          onBlur={onBlurFunction}
        />
        {errorMessage && (
          <span className="error-icon">
            <img src="src/images/icon-error.svg" alt="" />
          </span>
        )}
      </div>
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
}

export default InputContainer;
