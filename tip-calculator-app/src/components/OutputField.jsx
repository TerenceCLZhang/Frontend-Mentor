const TipOutputField = ({ label, value }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col">
        <span className="text-grey-50 text-base lg:text-lg">{label}</span>
        <span className="text-sm lg:text-base">/ person</span>
      </div>
      <span className="text-green-400 text-3xl lg:text-4xl">
        ${value <= 999999999 ? value.toFixed(2) : "999999999.00+"}
      </span>
    </div>
  );
};

export default TipOutputField;
