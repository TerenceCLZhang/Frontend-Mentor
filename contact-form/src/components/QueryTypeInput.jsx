import QueryTypeIndividual from "./QueryTypeIndividual";

const QueryTypeInput = ({ register, error, rules, watch }) => {
  return (
    <div className="flex flex-col gap-3">
      <span>
        Query Type <span className="text-green-600">*</span>
      </span>
      <div className="flex flex-col gap-3 lg:flex-row lg:justify-between">
        {["General Enquiry", "Support Request"].map((item) => (
          <QueryTypeIndividual
            key={item}
            item={item}
            register={register}
            rules={rules}
            watch={watch}
          />
        ))}
      </div>
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
};

export default QueryTypeInput;
