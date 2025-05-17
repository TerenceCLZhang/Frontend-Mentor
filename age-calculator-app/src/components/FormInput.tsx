import type { JSX } from "react";
import type { Inputs } from "./Form";
import type { RegisterOptions, UseFormRegister } from "react-hook-form";

interface Props {
  name: keyof Inputs;
  register: UseFormRegister<Inputs>;
  rules?: RegisterOptions<Inputs, keyof Inputs>;
  error?: string;
  placeholder: string;
  maxDigits: number;
}

const FormInput = ({
  name,
  register,
  rules,
  error,
  placeholder,
  maxDigits,
}: Props): JSX.Element => {
  const handleDigitInput = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    const allowedKeys: string[] = [
      "Backspace",
      "ArrowLeft",
      "ArrowRight",
      "Delete",
      "Tab",
    ];
    if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <div className="input-container">
      <label
        htmlFor={String(name)}
        className={`input-label uppercase ${error ? "text-red-400" : ""}`}
      >
        {name}
      </label>
      <input
        id={String(name)}
        type="text"
        className={`inputs ${error ? "border-red-400" : ""}`}
        placeholder={placeholder}
        maxLength={maxDigits}
        inputMode="numeric"
        onKeyDown={handleDigitInput}
        {...register(name, rules)}
      />
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
};

export default FormInput;
