const ConsentInput = ({ register, error, rules }) => {
  return (
    <div className="flex flex-col gap-2 my-3 md:my-5">
      <label className="flex gap-4 items-center cursor-pointer">
        <input
          type="checkbox"
          className="w-4 h-4 checked:accent-green-900 cursor-pointer"
          {...register("consent", rules)}
        />
        <span>
          I consent to being contacted by the team{" "}
          <span className="text-green-600">*</span>
        </span>
      </label>
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
};

export default ConsentInput;
