const NavLinkWithDropDown = ({ page, sublinks, isOpen, onToggle }) => {
  return (
    <li className="w-full relative">
      <div className="flex items-center justify-center gap-2 mb-3 lg:mb-0">
        <h3>
          <a
            href={page.href || "#"}
            className={`nav-menu-btn nav-menu-btn-desktop ${
              isOpen && "text-gray-600/75 lg:text-white"
            }`}
          >
            {page.name}
          </a>
        </h3>
        <button
          className={`bg-[url(images/icon-arrow-dark.svg)] lg:bg-[url(images/icon-arrow-light.svg)] bg-no-repeat bg-center bg-cover bg-s h-[10px] w-[15px] cursor-pointer transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          onClick={onToggle}
          aria-label="Toggle sublinks menu"
        ></button>
      </div>
      {isOpen && (
        <ul className="text-center text-lg text-blue-900/75 bg-gray-600/15 rounded-lg p-5 flex flex-col gap-3 lg:absolute lg:bg-white lg:-left-5 lg:top-12 lg:text-left lg:w-[175px] lg:drop-shadow-xl lg:shadow-2xl">
          {sublinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.href || "#"}
                className="hover:font-bold hover:text-gray-900"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavLinkWithDropDown;
