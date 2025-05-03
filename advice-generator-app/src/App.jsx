import { useEffect, useState } from "react";
import dice from "./images/icon-dice.svg";
import { getAdvice } from "./api";

function App() {
  const [advice, setAdvice] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadAdvice = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const result = await getAdvice();
      setAdvice({ id: result.id, msg: result.advice });
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch advice...");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadAdvice();
  }, []);

  return (
    <main>
      <section className="text-center relative flex flex-col gap-7 py-12 px-8 bg-blue-900 w-[90vw] max-w-[600px] rounded-2xl shadow-2xl ">
        <h1 className="text-green-300 text-sm uppercase tracking-[5px]">
          Advice #{!isLoading && advice ? advice.id : "..."}
        </h1>
        <div
          className="text-blue-200 text-center text-[28px]"
          aria-live="polite"
        >
          {isLoading ? (
            <span>Loading...</span>
          ) : error ? (
            <span>{error}</span>
          ) : advice && advice.msg ? (
            <q>{advice.msg}</q>
          ) : (
            <span>No advice available.</span>
          )}
        </div>

        <div className="relative h-[16px] mb-5">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-blue-600 -translate-y-1/2"></div>
          <div className="absolute bg-divider-mobile h-[16px] w-[50px] bg-blue-900 bg-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:bg-divider-desktop"></div>
        </div>
        <button
          aria-label="Generate new advice"
          className="bg-green-300 rounded-full w-fit p-5 absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 cursor-pointer transition duration-75 ease-in hover:scale-110"
          onClick={loadAdvice}
        >
          <img src={dice} alt="Generate new advice icon" />
        </button>
      </section>
    </main>
  );
}

export default App;
