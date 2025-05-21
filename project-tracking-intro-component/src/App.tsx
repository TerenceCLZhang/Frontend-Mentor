import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="py-10 lg:px-10 xl:px-25 w-screen lg:flex lg:flex-col lg:gap-10 xl:gap-0 lg:min-h-screen lg:relative lg:overflow-hidden">
      <Header />
      <Main />
    </div>
  );
}

export default App;
