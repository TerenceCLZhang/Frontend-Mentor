import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header className="pt-15 lg:pt-0">
      <a href="/">
        <img src={logo} alt="Splitter logo" />
      </a>
    </header>
  );
};

export default Header;
