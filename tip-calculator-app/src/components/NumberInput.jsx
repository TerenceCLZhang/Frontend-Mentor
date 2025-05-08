import { useEffect, useState } from "react";

const NumberInput = ({ label, img, placeholder, setVal, val, reset }) => {
  const [isError, setIsError] = useState(false);

  useEffect(() => setIsError(false), [reset]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between text-base lg:text-lg">
        <span>{label}</span>
        {isError && <span className="text-red-500">Can't be zero</span>}
      </div>
      <label
        className={`bg-gray-50 rounded-md px-4 py-2 flex justify-between items-center gap-4 cursor-pointer border-2 ${
          isError
            ? "border-red-500!"
            : "border-transparent focus-within:border-green-400"
        } hover:border-green-400`}
      >
        <img src={img} alt="" className="w-[13px] h-[16px]" />
        <input
          type="number"
          placeholder={placeholder}
          className="text-right text-green-900 placeholder:text-grey-400 w-full focus:outline-none"
          onChange={(e) => {
            setVal(e.target.value);
            setIsError(false);
          }}
          onBlur={(e) => {
            const number = parseFloat(e.target.value);
            if (!e.target.value || number === 0) {
              setIsError(true);
            }
          }}
          value={val}
        />
      </label>
    </div>
  );
};

export default NumberInput;
