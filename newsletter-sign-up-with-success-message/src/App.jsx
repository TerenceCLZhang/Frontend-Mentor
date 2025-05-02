import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Success from "./components/Success";
import "./css/App.css";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </main>
  );
}

export default App;
