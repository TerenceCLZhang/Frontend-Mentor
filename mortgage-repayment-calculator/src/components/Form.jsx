import FormInputContainer from "./FormInputContainer";
import FormTypeContainer from "./FormTypeContainer";

const Form = ({ data, setData, reset }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const newData = {
      amount: formData.get("amount"),
      term: formData.get("term"),
      interestRate: formData.get("interest-rate"),
      mortgageType: formData.get("mortgageType") ?? "",
    };

    setData(newData);
  };

  return (
    <form action="#" onSubmit={handleSubmit} className="flex flex-col gap-5">
      <FormInputContainer
        label={"Mortgage Amount"}
        innerText={"£"}
        name={"amount"}
        dataValue={data.amount}
        reset={reset}
        left={true}
      />

      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between">
        <FormInputContainer
          label={"Mortgage Term"}
          innerText={"years"}
          name={"term"}
          dataValue={data.term}
          reset={reset}
          left={false}
        />
        <FormInputContainer
          label={"Interest Rate"}
          innerText={"%"}
          name={"interest-rate"}
          dataValue={data.interestRate}
          reset={reset}
          left={false}
        />
      </div>

      <FormTypeContainer dataValue={data.mortgageType} reset={reset} />

      <button
        type="submit"
        className="w-full bg-lime p-4 rounded-4xl text-slate-900 font-bold text-lg cursor-pointer hover:opacity-80 lg:w-fit lg:px-10"
      >
        <div className=" flex items-center justify-center gap-2">
          <div className="bg-calculator w-[24px] h-[24px]"></div>
          <span>Calculate Repayments</span>
        </div>
      </button>
    </form>
  );
};

export default Form;
