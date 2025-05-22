import TimeSection from "./TimeSection";
import data from "../data.json";
import type { TimeframeOption } from "../App";

interface Props {
  currentOption: TimeframeOption;
}

const TimeSectionsContainer = ({ currentOption }: Props) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <TimeSection
            key={index}
            label={item.title}
            value={item.timeframes[currentOption].current}
            valueBefore={item.timeframes[currentOption].previous}
          />
        );
      })}
    </>
  );
};

export default TimeSectionsContainer;
