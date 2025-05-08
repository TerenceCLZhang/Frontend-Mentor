import { useEffect, useState } from "react";
import OutputField from "./OutputField";

const TipOutput = ({ bill, tip, people, setReset }) => {
  const [amountPP, setAmountPP] = useState(0);
  const [totalPP, setTotalPP] = useState(0);

  useEffect(() => {
    if (people > 0 && !isNaN(people)) {
      const tipAmount = (bill / people) * tip;
      const totalAmount = bill / people + tipAmount;

      setAmountPP(tipAmount);
      setTotalPP(totalAmount);
    } else {
      setAmountPP(0);
      setTotalPP(0);
    }
  }, [bill, tip, people]);

  const handleReset = () => {
    setAmountPP(0);
    setTotalPP(0);
    setReset((prev) => !prev);
  };

  return (
    <div className="bg-green-900 px-5 py-10 rounded-xl flex flex-col gap-7 justify-between lg:w-1/2">
      <div className="flex flex-col gap-7">
        <OutputField label={"Tip Amount"} value={amountPP} />
        <OutputField label={"Total"} value={totalPP} />
      </div>
      <button
        className="uppercase bg-green-400 text-green-900 p-2 rounded-md"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
};

export default TipOutput;
