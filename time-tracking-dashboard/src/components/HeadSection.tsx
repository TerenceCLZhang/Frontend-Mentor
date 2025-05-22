import avatar from "../images/image-jeremy.png";
import OptionButton from "./Option";
import type { TimeframeOption } from "../App";

interface Props {
  currentOption: TimeframeOption;
  setCurrentOption: React.Dispatch<React.SetStateAction<TimeframeOption>>;
}

const HeadSection = ({ currentOption, setCurrentOption }: Props) => {
  return (
    <section className="bg-navy-900 rounded-edge overflow-hidden lg:row-span-2">
      <div className="bg-purple-600 rounded-edge flex items-center padding gap-5 lg:flex-col lg:items-start lg:h-[65%] lg:gap-7 xl:gap-10">
        <img
          src={avatar}
          alt="jeremy robson avatar"
          className="border-3 border-white rounded-full w-17 lg:w-20"
        />
        <div className="font-light">
          <span className="text-base lg:text-lg">Report for</span>
          <h1 className="text-2xl text-white lg:text-3xl xl:text-4xl 2xl:text-5xl lg:mt-2">
            Jeremy Robson
          </h1>
        </div>
      </div>
      <div className="p-5 px-8 flex justify-between lg:flex-col lg:h-[35%] lg:items-start lg:justify-center xl:gap-3">
        <OptionButton
          value={"daily"}
          currentOption={currentOption}
          setCurrentOption={setCurrentOption}
        />
        <OptionButton
          value={"weekly"}
          currentOption={currentOption}
          setCurrentOption={setCurrentOption}
        />
        <OptionButton
          value={"monthly"}
          currentOption={currentOption}
          setCurrentOption={setCurrentOption}
        />
      </div>
    </section>
  );
};

export default HeadSection;
