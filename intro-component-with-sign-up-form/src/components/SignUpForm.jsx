import { useState } from "react";
import InputContainer from "./InputContainer";
import "../css/SignUpForm.css";

function SignUpForm() {
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateField = (name, value) => {
    switch (name) {
      case "firstName":
      case "lastName":
      case "password":
        return value.trim() === "" ? "empty" : "";
      case "email":
        if (value.trim() === "") return "empty";
        if (!emailRegex.test(value.trim())) return "invalidEmail";
        return "";
      default:
        return "";
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    const newErrors = {
      firstName: validateField("firstName", firstName),
      lastName: validateField("lastName", lastName),
      email: validateField("email", email),
      password: validateField("password", password),
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (!hasErrors) {
      alert("Check your email to claim your free trial!");
    }
  };

  return (
    <div className="sign-up-form">
      <form action="#" onSubmit={handleSubmit}>
        <InputContainer
          name="firstName"
          type="text"
          placeholder="First Name"
          errorType={errors.firstName}
          onBlurFunction={handleBlur}
        />
        <InputContainer
          name="lastName"
          type="text"
          placeholder="Last Name"
          errorType={errors.lastName}
          onBlurFunction={handleBlur}
        />
        <InputContainer
          name="email"
          type="text"
          placeholder="Email Address"
          errorType={errors.email}
          onBlurFunction={handleBlur}
        />
        <InputContainer
          name="password"
          type="password"
          placeholder="Password"
          errorType={errors.password}
          onBlurFunction={handleBlur}
        />
        <input type="submit" value="Claim your free trial" />
      </form>
    </div>
  );
}

export default SignUpForm;
