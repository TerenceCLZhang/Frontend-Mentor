import { useEffect, useState } from "react";
import Form from "./components/Form";
import AnimatedSuccessNotification from "./components/AnimatedSuccessNotification";

function App() {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    let timeout;
    if (showSuccess) {
      timeout = setTimeout(() => {
        setShowSuccess(false);
      }, 10000);
    }
    return () => clearTimeout(timeout);
  }, [showSuccess]);

  return (
    <>
      <AnimatedSuccessNotification
        showSuccess={showSuccess}
        setShowSuccess={setShowSuccess}
      />
      <main className="bg-white rounded-xl p-5 w-[90vw] flex flex-col gap-6 my-10 max-w-[650px]">
        <h1 className="font-bold text-4xl">Contact Us</h1>
        <Form setShowSuccess={setShowSuccess} />
      </main>
    </>
  );
}

export default App;
