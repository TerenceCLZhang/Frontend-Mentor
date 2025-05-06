import { useEffect, useState } from "react";

const TypeLabel = ({ checkedValue, value, handleChange, label }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    checkedValue === value ? setChecked(true) : setChecked(false);
  }, [checkedValue, value]);

  return (
    <label
      className={`form-input-container radio-input-container group ${
        checked && "bg-lime/10 border-lime"
      }`}
    >
      <div
        className={`border flex items-center justify-center w-5 h-5 rounded-full group-hover:border-lime ${
          checked ? "border-lime" : "border-slate-700"
        }`}
      >
        <input
          type="radio"
          name="mortgageType"
          className="radio"
          checked={checkedValue === value}
          onChange={handleChange}
          value={value}
        />
      </div>

      <span>{label}</span>
    </label>
  );
};

export default TypeLabel;
