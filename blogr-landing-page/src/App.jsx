import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="rounded-bl-[8rem] bg-gradient-to-r from-orange-300 to-red-550 overflow-hidden">
        <div className=" w-full h-full bg-[url(images/bg-pattern-intro-mobile.svg)] bg-no-repeat bg-[position:35%_40%] lg:bg-[url(images/bg-pattern-intro-desktop.svg)] lg:bg-[position:30%_50%]">
          <Nav />
          <Header />
        </div>
      </div>
      <Main />
      <Footer />
    </>
  );
}

export default App;
