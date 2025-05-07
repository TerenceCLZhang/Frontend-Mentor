import logo from "../assets/images/logo.svg";
import menu from "../assets/images/icon-menu.svg";
import menuClose from "../assets/images/icon-menu-close.svg";
import { useEffect, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center padding bg-off-white lg:static lg:w-[85vw] max-w-[1200px]">
      {isMenuOpen && (
        <div className="fixed inset-0 bg-very-dark-blue opacity-50 md:hidden"></div>
      )}
      <a href="#">
        <img src={logo} alt="logo" />
      </a>

      {/* Hamburger button (hidden on sm and up) */}
      <button
        className="cursor-pointer sm:hidden"
        onClick={() => setIsMenuOpen(true)}
      >
        <img src={menu} alt="Menu" />
      </button>

      {/* Desktop nav (visible from sm and up) */}
      <ul className="hidden sm:flex gap-10">
        <li>
          <a href="#" className="hover-red">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover-red">
            New
          </a>
        </li>
        <li>
          <a href="#" className="hover-red">
            Popular
          </a>
        </li>
        <li>
          <a href="#" className="hover-red">
            Trending
          </a>
        </li>
        <li>
          <a href="#" className="hover-red">
            Categories
          </a>
        </li>
      </ul>

      {/* Mobile nav (only shown on small screens when open) */}
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } absolute right-0 top-0 w-[75vw] h-screen padding pl-10 bg-off-white flex-col gap-20 sm:hidden`}
      >
        <button
          className="cursor-pointer self-end"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src={menuClose} alt="Close menu" />
        </button>
        <ul className="flex flex-col justify-start gap-5 text-2xl">
          <li>
            <a href="#" className="hover-red">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover-red">
              New
            </a>
          </li>
          <li>
            <a href="#" className="hover-red">
              Popular
            </a>
          </li>
          <li>
            <a href="#" className="hover-red">
              Trending
            </a>
          </li>
          <li>
            <a href="#" className="hover-red">
              Categories
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
