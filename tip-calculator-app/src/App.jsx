import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center gap-10 lg:gap-20">
      <Header />
      <Main />
    </div>
  );
}

export default App;
