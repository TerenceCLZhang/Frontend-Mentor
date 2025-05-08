import { useEffect, useState } from "react";

const TipPercentage = ({ setVal, val, reset }) => {
  const [isCustomVal, setIsCustomVal] = useState(false);
  const [customInput, setCustomInput] = useState("");

  useEffect(() => {
    setIsCustomVal(false);
    setCustomInput("");
  }, [reset]);

  return (
    <div className="flex flex-col gap-4">
      <span className="text-base lg:text-lg">Select Tip %</span>
      <div className="flex flex-wrap justify-between gap-4">
        {[0.05, 0.1, 0.15, 0.25, 0.5].map((v) => (
          <button
            key={v}
            value={v}
            onClick={() => {
              setVal(v);
              setIsCustomVal(false);
            }}
            className={`px-4 py-2 rounded-md w-[47%] lg:w-[30%] ${
              v === val && !isCustomVal
                ? "bg-green-400 text-gray-900"
                : "bg-green-900 text-white"
            }`}
          >
            {v * 100}%
          </button>
        ))}
        <input
          type="number"
          placeholder="Custom"
          className="rounded-md w-[47%] lg:w-[30%] text-right text-green-900 placeholder:text-grey-400 bg-grey-50 px-4 py-2 cursor-pointer border-2 border-transparent hover:border-green-400 focus-within:border-green-400 focus:outline-none"
          onChange={(e) => {
            setIsCustomVal(true);
            setCustomInput(e.target.value);
          }}
          onBlur={(e) => {
            const value = e.target.value;
            const num = parseFloat(value);

            if (!value || isNaN(num)) {
              setVal(0);
              setCustomInput("0");
            } else {
              setVal(num / 100);
            }
          }}
          value={customInput}
        />
      </div>
    </div>
  );
};

export default TipPercentage;
