import logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <header>
      <div>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <h1>Extensions</h1>
      </div>
      <button></button>
    </header>
  );
};

export default Header;
