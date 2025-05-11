const EmailInput = ({ register, error, rules }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="email">
        Email Address <span className="text-green-600">*</span>
      </label>
      <input
        type="text"
        className={`inputs ${error && "border-red"}`}
        {...register("email", rules)}
      />
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
};

export default EmailInput;
