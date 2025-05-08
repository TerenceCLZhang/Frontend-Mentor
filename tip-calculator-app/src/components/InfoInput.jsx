import NumberInput from "./NumberInput";
import dollar from "../images/icon-dollar.svg";
import person from "../images/icon-person.svg";
import TipPercentage from "./TipPercentage";

const TipInfoInput = ({
  bill,
  tip,
  people,
  setBill,
  setTip,
  setPeople,
  reset,
}) => {
  return (
    <div className="flex flex-col gap-8 lg:w-1/2">
      <NumberInput
        label={"Bill"}
        img={dollar}
        placeholder={"0"}
        setVal={setBill}
        val={bill}
        reset={reset}
      />
      <TipPercentage setVal={setTip} val={tip} reset={reset} />
      <NumberInput
        label={"Number of People"}
        img={person}
        placeholder={"0"}
        setVal={setPeople}
        val={people}
        reset={reset}
      />
    </div>
  );
};

export default TipInfoInput;
