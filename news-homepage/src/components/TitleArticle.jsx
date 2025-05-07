import web3Mobile from "../assets/images/image-web-3-mobile.jpg";
import web3Desktop from "../assets/images/image-web-3-desktop.jpg";

const TitleArticle = () => {
  return (
    <article className="flex flex-col gap-5">
      <picture className="">
        <source media="(min-width: 768px)" srcSet={web3Desktop} />
        <img src={web3Mobile} alt="Bright Future of Web 3.0?" />
      </picture>

      <div className="flex flex-col gap-5 lg:flex-row">
        <h1 className="text-5xl/13 font-extrabold lg:font-bold lg:w-1/2 lg:text-6xl/15">
          The Bright Future of Web 3.0?
        </h1>
        <div className="flex flex-col gap-5 justify-between lg:w-1/2">
          <p className="text-dark-grayish-blue lg:text-[1.1rem]">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fufilling its promise?
          </p>
          <a
            href="#"
            className="bg-soft-red px-10 py-3 w-fit uppercase font-bold tracking-widest hover:text-off-white hover:bg-very-dark-blue"
          >
            Read More
          </a>
        </div>
      </div>
    </article>
  );
};

export default TitleArticle;
