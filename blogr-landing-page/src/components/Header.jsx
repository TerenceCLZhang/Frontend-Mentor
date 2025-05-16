const Header = () => {
  return (
    <header className="padding text-white flex flex-col items-center text-center gap-5">
      <h1 className="text-[2.15rem]/12 mt-30 lg:text-6xl lg:mt-10">
        A modern publishing platform
      </h1>
      <p className="font-light mx-10 mb-7 lg:text-xl">
        Grow your audience and build your online brand
      </p>
      <div className="flex justify-around w-full mb-25 md:w-auto md:gap-5">
        <a
          href="#"
          className="bg-white text-red-500 hover:bg-red-400 hover:text-white header-btn"
        >
          Start for Free
        </a>
        <a
          href="#"
          className="border border-white hover:bg-white hover:text-red-500 header-btn"
        >
          Learn More
        </a>
      </div>
    </header>
  );
};

export default Header;
