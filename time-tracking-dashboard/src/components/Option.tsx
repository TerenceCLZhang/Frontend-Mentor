import type { TimeframeOption } from "../App";

interface Props {
  value: TimeframeOption;
  currentOption: TimeframeOption;
  setCurrentOption: React.Dispatch<React.SetStateAction<TimeframeOption>>;
}

const OptionButton = ({ value, currentOption, setCurrentOption }: Props) => {
  return (
    <button
      type="button"
      value={value}
      onClick={(e) =>
        setCurrentOption(e.currentTarget.value as TimeframeOption)
      }
      className={`${currentOption === value && "option-selected"} option`}
    >
      {value}
    </button>
  );
};

export default OptionButton;
