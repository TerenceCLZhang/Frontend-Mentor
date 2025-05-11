const MessageInput = ({ register, error, rules }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="message">Message * </label>
      <textarea
        id="message"
        className={`inputs resize-none ${error ? "border-red" : ""}`}
        rows={5}
        {...register("message", rules)}
      ></textarea>
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
};

export default MessageInput;
