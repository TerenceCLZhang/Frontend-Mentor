import { useState } from "react";
import ResultsSection from "./components/ResultsSection";
import FormSection from "./components/FormSection";

function App() {
  const [data, setData] = useState({
    amount: null,
    term: null,
    interestRate: null,
    mortgageType: null,
  });

  return (
    <main className="w-screen max-w-[985px] md:w-fit md:my-10 md:bg-white md:rounded-4xl md:overflow-hidden md:shadow-xl lg:flex">
      <FormSection data={data} setData={setData} />
      <ResultsSection data={data} />
    </main>
  );
}

export default App;
