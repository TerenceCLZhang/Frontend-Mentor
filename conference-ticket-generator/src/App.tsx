import { Route, Routes } from "react-router";
import SignUp from "./pages/SignUp";
import Ticket from "./pages/Ticket";
import logo from "./assets/images/logo-full.svg";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <div className="bg-img bg-[url(assets/images/pattern-lines.svg)] bg-top lg:mt-[-25rem] bg-size-[250%] sm:bg-size-[200%] md:bg-size-[150%] lg:bg-size-[100%]"></div>
      <div className="bg-img bg-[url(assets/images/pattern-squiggly-line-top.svg)] bg-position-[top_3rem_right] bg-size-[25%]"></div>
      <div className="bg-img md:bg-[url(assets/images/pattern-circle.svg)] md:bg-[center_right_-7rem] lg:bg-[center_right_15rem]"></div>
      <div className="bg-img bg-[url(assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg)] lg:bg-[url(assets/images/pattern-squiggly-line-bottom-desktop.svg)] bg-bottom-left bg-size-[80%] sm:bg-size-[65%] md:bg-size-[50%] lg:bg-size-[60%]"></div>
      <header>
        <a href="/">
          <img src={logo} alt="logo" className="m-auto" />
        </a>
      </header>

      <main className="md:w-[70vw] xl:w-[50vw]">
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/ticket" element={<Ticket />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
