import { useEffect, useState } from "react";

const FormInputContainer = ({
  label,
  innerText,
  name,
  dataValue,
  reset,
  left,
}) => {
  const [value, setValue] = useState("");
  const [displayError, setDisplayError] = useState(false);

  useEffect(() => {
    setValue("");
    setDisplayError(false);
  }, [reset]);

  useEffect(() => {
    if (dataValue === "") setDisplayError(true);
  }, [dataValue]);

  const handleChange = (e) => {
    const input = e.target.value;
    const filteredNumber = filterNumber(input);
    setValue(filteredNumber);
  };

  const filterNumber = (num) => {
    let filtered = num.replace(/[^0-9.]/g, "");

    const parts = filtered.split(".");
    if (parts.length > 2) {
      filtered = filtered.slice(0, filtered.length - 1);
    }

    return filtered;
  };

  const handleOnBlur = () => {
    const formattedNumber = formatNumber(value);
    setValue(formattedNumber);
    setDisplayError(value === "");
  };

  const formatNumber = (num) => {
    const [integerPart, decimalPart] = num.toString().split(".");
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return decimalPart
      ? `${formattedInteger}.${decimalPart}`
      : formattedInteger;
  };

  return (
    <div className="form-container">
      <span>{label}</span>
      <label
        className={`form-input-container num-input-container ${
          displayError ? "border-red" : ""
        }`}
      >
        {left && (
          <span
            className={`inner-input ${displayError ? "bg-red text-white" : ""}`}
          >
            {innerText}
          </span>
        )}
        <input
          type="text"
          name={name}
          className="num-input"
          value={value}
          onChange={handleChange}
          onBlur={handleOnBlur}
          onFocus={(e) => setValue(e.target.value.replace(/[,]/g, ""))}
        />
        {!left && (
          <span
            className={`inner-input ${displayError ? "bg-red text-white" : ""}`}
          >
            {innerText}
          </span>
        )}
      </label>
      {displayError && (
        <span className="text-red font-bold">This field is required</span>
      )}
    </div>
  );
};

export default FormInputContainer;
