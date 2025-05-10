const QueryTypeIndividual = ({ item, register, rules, watch }) => {
  return (
    <label
      className={`inputs flex items-center gap-3 py-3 px-4 lg:w-1/2 cursor-pointer ${
        watch == item && "bg-green-200 border-green-900"
      }`}
    >
      <span
        className={`flex items-center justify-center w-5 h-5 border-1 rounded-full ${
          watch == item ? "border-green-600" : "border-grey-500"
        }`}
      >
        <input
          type="radio"
          className="w-3 h-3 border border-transparent rounded-full appearance-none checked:bg-green-600"
          value={item}
          {...register("type", rules)}
        />
      </span>
      <span>{item}</span>
    </label>
  );
};

export default QueryTypeIndividual;
