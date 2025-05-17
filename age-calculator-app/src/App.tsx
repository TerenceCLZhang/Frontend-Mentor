import { useState, type JSX } from "react";
import Form from "./components/Form";
import AgeContainer from "./components/AgeContainer";

function App(): JSX.Element {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <main className="w-[90vw] flex flex-col gap-15 items-center justify-center bg-white px-5 py-10 rounded-3xl rounded-br-[5rem] md:rounded-br-[13rem] shadow-md md:w-[75vw] max-w-[800px] md:p-12">
      <h1 className="hidden">Age calculator</h1>
      <Form setDate={setDate} />
      <hr className="border border-grey-100 w-full" />
      <AgeContainer date={date} />
    </main>
  );
}

export default App;
