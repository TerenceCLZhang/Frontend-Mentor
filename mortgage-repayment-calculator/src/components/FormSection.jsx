import { useState } from "react";
import Form from "./Form";

const FormSection = ({ data, setData }) => {
  const [reset, setReset] = useState(0);

  const onClearAll = () => {
    setReset((prev) => (prev === 0 ? 1 : 0));
    setData({
      amount: null,
      term: null,
      interestRate: null,
      mortgageType: null,
    });
  };

  return (
    <section className="px-5 py-7 flex flex-col gap-7 lg:basis-1/2 lg:p-10">
      <div className="flex flex-col gap-2 items-start lg:flex-row lg:justify-between lg:items-center">
        <h1 className="text-2xl font-bold text-slate-900">
          Mortgage Calculator
        </h1>
        <button className="underline cursor-pointer" onClick={onClearAll}>
          Clear All
        </button>
      </div>

      <Form data={data} setData={setData} reset={reset} />
    </section>
  );
};

export default FormSection;
