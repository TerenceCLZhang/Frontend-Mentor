const MessageInput = ({ register, error, rules }) => {
  return (
    <div className="flex flex-col gap-2">
      <span>Message * </span>
      <textarea
        className={`inputs resize-none ${error ? "border-red" : ""}`}
        rows={5}
        {...register("message", rules)}
      ></textarea>
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
};

export default MessageInput;
