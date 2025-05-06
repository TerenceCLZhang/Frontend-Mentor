import { useEffect, useState } from "react";
import TypeLabel from "./TypeLabel";

const FormTypeContainer = ({ dataValue, reset }) => {
  const [value, setValue] = useState("");

  useEffect(() => setValue(""), [reset]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="form-container">
      <span>Mortgage Type</span>

      <TypeLabel
        checkedValue={value}
        value={"repayment"}
        handleChange={handleChange}
        label={"Repayment"}
      />

      <TypeLabel
        checkedValue={value}
        value={"interest-only"}
        handleChange={handleChange}
        label={"Interest Only"}
      />

      {dataValue === "" && (
        <span className="text-red font-bold">This field is required</span>
      )}
    </div>
  );
};

export default FormTypeContainer;
