import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header className="pt-15 lg:pt-0">
      <a href="/">
        <img src={logo} alt="Splitter logo" />
        <h1 className="sr-only">Splitter</h1>
      </a>
    </header>
  );
};

export default Header;
