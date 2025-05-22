import { useState } from "react";
import HeadSection from "./components/HeadSection";
import TimeSectionsContainer from "./components/TimeSectionsContainer";

export type TimeframeOption = "daily" | "weekly" | "monthly";

function App() {
  const [currentOption, setCurrentOption] = useState<TimeframeOption>("weekly");

  return (
    <main className="w-[90vw] xl:h-[65vh] lg:max-w-[1100px] lg:max-h-[520px] flex flex-col gap-8 lg:grid lg:grid-cols-4 lg:grid-rows-2">
      <HeadSection
        currentOption={currentOption}
        setCurrentOption={setCurrentOption}
      />
      <TimeSectionsContainer currentOption={currentOption} />
    </main>
  );
}

export default App;
