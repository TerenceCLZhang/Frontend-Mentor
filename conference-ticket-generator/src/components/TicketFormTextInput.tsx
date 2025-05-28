import InfoIcon from "./InfoIcon";
import type { UseFormRegister } from "react-hook-form";
import type { FormData } from "./TicketForm";

interface Props {
  register: UseFormRegister<FormData>;
  error: string | undefined;
  label: string;
  name: "avatar" | "name" | "email" | "username";
  placeholder?: string;
  handleOnBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const TicketFormTextInput = ({
  register,
  error,
  label,
  name,
  placeholder = "",
  handleOnBlur,
}: Props) => {
  return (
    <div className="form-input-container">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        id={name}
        type="text"
        className={`input-text bg-overlay ${error && "!border-orange-700"}`}
        placeholder={placeholder}
        {...register(name)}
        onBlur={handleOnBlur}
      />
      {error && (
        <p className="error-msg">
          <InfoIcon error={error} />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};

export default TicketFormTextInput;
