import { useState } from "react";
import logo from "../images/logo.svg";

const Header = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <header className="relative flex justify-between padding gap-10 w-full">
      <a
        href="/"
        className="h-[25px] w-[25px] self-center md:h-[32] md:w-[32px]"
      >
        <img src={logo} alt="logo" />
      </a>

      <button
        type="button"
        className={`${
          !navOpen
            ? "bg-[url(images/icon-hamburger.svg)]"
            : "bg-[url(images/icon-close.svg)]"
        } bg-center bg-no-repeat w-[32px] h-[32px] cursor-pointer md:hidden`}
        onClick={() => setNavOpen(!navOpen)}
        aria-label={`${navOpen ? "Close" : "Open"} mobile nav menu`}
        aria-controls="mobile-nav"
        aria-expanded={navOpen}
      ></button>

      {navOpen && (
        <nav
          id="mobile-nav"
          className="md:hidden absolute left-1/2 -translate-x-1/2 top-25 bg-white w-[88%] shadow-2xl drop-shadow-sm drop-shadow-very-dark-blue/15 z-20 py-5 font-barlow-c uppercase"
        >
          <ul className="flex flex-col items-center gap-3">
            <li>
              <ul className="flex flex-col gap-5 items-center">
                <li>
                  <a href="#" className="nav-menu-btn">
                    Product
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-menu-btn">
                    Features
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="nav-menu-btn">
                    Pricing
                  </a>
                </li>
              </ul>
            </li>
            <li className="w-[85%]">
              <hr className="border-grayish-blue" />
            </li>
            <li className="mt-2">
              <a
                href="#"
                className="text-grayish-blue font-bold hover:underline"
              >
                Login
              </a>
            </li>
          </ul>
        </nav>
      )}

      <nav className="hidden md:block py-5 font-barlow-c uppercase">
        <ul className="flex gap-10 items-center">
          <li>
            <a href="#" className="nav-menu-btn">
              Product
            </a>
          </li>
          <li>
            <a href="#" className="nav-menu-btn">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="nav-menu-btn">
              Pricing
            </a>
          </li>
          <li className="text-grayish-blue">•</li>
          <li>
            <a href="#" className="text-grayish-blue font-bold hover:underline">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
