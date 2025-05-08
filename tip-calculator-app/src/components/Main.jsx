import { useEffect, useState } from "react";
import InfoInput from "./InfoInput";
import Output from "./Output";

const Main = () => {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0.15);
  const [people, setPeople] = useState("");
  const [reset, setReset] = useState(0);

  useEffect(() => {
    setBill("");
    setTip(0.15);
    setPeople("");
  }, [reset]);

  return (
    <main className="bg-white w-screen rounded-t-3xl p-8 flex flex-col gap-8 max-w-[1000px] md:rounded-3xl md:w-[95vw] md:shadow-2xl lg:flex-row lg:justify-between">
      <InfoInput
        bill={bill}
        tip={tip}
        people={people}
        setBill={setBill}
        setTip={setTip}
        setPeople={setPeople}
        reset={reset}
      />
      <Output bill={bill} tip={tip} people={people} setReset={setReset} />
    </main>
  );
};

export default Main;
