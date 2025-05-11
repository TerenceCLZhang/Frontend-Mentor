const TextInput = ({ label, name, register, rules, error }) => {
  return (
    <div className="flex flex-col gap-1 lg:w-1/2">
      <label htmlFor={label}>
        {label} <span className="text-green-600">*</span>
      </label>
      <input
        type="text"
        className={`inputs ${error && "border-red"}`}
        {...register(name, rules)}
      />
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
};

export default TextInput;
