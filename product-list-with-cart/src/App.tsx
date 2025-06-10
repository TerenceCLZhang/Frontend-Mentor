import { useState } from "react";
import Cart from "./components/Cart";
import Confirmation from "./components/Confirmation";
import Desserts from "./components/Desserts";

function App() {
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

  return (
    <main className="flex flex-col items-center gap-8 px-5 py-8 lg:flex-row lg:p-10 xl:p-20 lg:items-start lg:justify-between">
      <Desserts />
      <Cart setShowConfirmation={setShowConfirmation} />

      {showConfirmation && (
        <>
          <div className="fixed w-screen h-screen top-0 left-0 bg-black/50 z-2"></div>
          <Confirmation />
        </>
      )}
    </main>
  );
}

export default App;
