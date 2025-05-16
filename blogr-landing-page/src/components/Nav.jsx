import { useState } from "react";
import logo from "../images/logo.svg";
import NavLinkWithDropDown from "./NavLinkWithDropDown";
import { getSublinks } from "../utils/LandingPageLinks";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(null);

  const handleToggleMenu = (menuName) => {
    setCurrentMenu((prev) => (prev === menuName ? null : menuName));
  };

  return (
    <nav className="absolute z-10 padding w-full lg:static lg:pt-20 lg:flex gap-10 lg:gap-0 lg:justify-between">
      <div className="flex justify-between items-center">
        <a href="/" aria-label="Go to home page">
          <img src={logo} alt="blogr logo" className="w-[75px] md:w-auto" />
        </a>
        <button
          className={`${
            !isMenuOpen
              ? "bg-[url(images/icon-hamburger.svg)]"
              : "bg-[url(images/icon-close.svg)]"
          } bg-no-repeat bg-center w-10 h-10 cursor-pointer lg:hidden`}
          aria-label={
            isMenuOpen
              ? "Close mobile navigation menu"
              : "Open mobile navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></button>
      </div>

      {/* Mobile version */}
      {isMenuOpen && (
        <ul
          id="mobile-navigation"
          className="mt-8 bg-white p-8 rounded-md flex flex-col justify-center items-center gap-5 shadow-2xl lg:hidden"
          aria-label="Mobile main navigation"
        >
          {["Product", "Company", "Connect"].map((name) => (
            <NavLinkWithDropDown
              key={name}
              page={{ name }}
              sublinks={getSublinks(name)}
              isOpen={currentMenu === name}
              onToggle={() => handleToggleMenu(name)}
            />
          ))}
          <hr className="border border-gray-600/25 w-full" />
          <li className="nav-menu-btn mt-1">
            <a href="#" role="menuitem">
              Login
            </a>
          </li>
          <li>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-300 to-red-550 w-fit text-white py-3 px-10 text-xl rounded-full hover:from-red-400 hover:to-red-400"
              role="menuitem"
            >
              Sign Up
            </a>
          </li>
        </ul>
      )}

      {/* Desktop version */}
      <ul className="hidden lg:flex items-center justify-between w-[85%] gap-10">
        <ul className="flex gap-10">
          {["Product", "Company", "Connect"].map((name) => (
            <NavLinkWithDropDown
              key={name}
              page={{ name }}
              sublinks={getSublinks(name)}
              isOpen={currentMenu === name}
              onToggle={() => handleToggleMenu(name)}
            />
          ))}
        </ul>
        <ul>
          <li className="ml-auto">
            <a href="#" className="mr-6 hover:underline nav-menu-btn-desktop">
              Login
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-300 to-red-550 text-white py-3 px-10 text-xl font-bold rounded-full hover:from-red-400 hover:to-red-400 lg:from-white lg:to-white lg:text-red-500 lg:text-base lg:hover:text-white"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default Nav;
