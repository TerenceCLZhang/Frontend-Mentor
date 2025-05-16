import logo from "../images/logo.svg";
import FooterNavLinks from "./FooterNavLinks";
import { getSublinks } from "../utils/LandingPageLinks";

const Footer = () => {
  return (
    <footer className="bg-purple-950 padding py-20 md:py-15 rounded-tr-[8rem]">
      <div className="flex flex-col items-center gap-13 md:gap-0 md:w-[80%] md:flex-row md:justify-around md:items-start">
        <a href="/" aria-label="Go to home page">
          <img src={logo} alt="blogr logo" />
        </a>
        {["Product", "Company", "Connect"].map((name) => (
          <FooterNavLinks
            key={name}
            page={{ name }}
            sublinks={getSublinks(name)}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
