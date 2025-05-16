import editorMobile from "../images/illustration-editor-mobile.svg";
import editorDesktop from "../images/illustration-editor-desktop.svg";
import phones from "../images/illustration-phones.svg";
import laptopMobile from "../images/illustration-laptop-mobile.svg";
import laptopDesktop from "../images/illustration-laptop-desktop.svg";

const Main = () => {
  return (
    <main className="text-center">
      <section className="mt-10 flex flex-col gap-10 text-gray-600 overflow-hidden lg:mt-0 lg:py-45">
        <div className="flex flex-col gap-10 relative lg:gap-20">
          <h2 className="md:!text-4xl">Designed for the future</h2>

          <picture className="scale-110 my-7 m-auto lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:-right-120 xl:-right-70 lg:scale-100">
            <source media="(min-width: 1024px)" srcSet={editorDesktop} />
            <img src={editorMobile} alt="" />
          </picture>

          <div className="flex flex-col gap-10 pt-0 padding lg:w-[60%] lg:text-left">
            <div className="text-section-div">
              <h2>Introducing an extensible editor</h2>
              <p>
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </p>
            </div>
            <div className="text-section-div">
              <h2>Robust content management</h2>
              <p>
                Robust content management Flexible content management enables
                users to easily move through posts. Increase the usability of
                your blog by adding customized categories, sections, format, or
                flow. With this functionality, you’re in full control.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mt-55 lg:mt-20">
        <img
          src={phones}
          alt=""
          className="absolute z-10 -top-45 left-1/2 -translate-x-1/2 md:w-[375px] lg:w-[650px] xl:w-auto lg:left-75 xl:left-100 lg:top-2/5 lg:-translate-y-2/5 lg:flex"
        />
        <div className="relative bg-gradient-to-b from-purple-950 to-purple-900 text-white rounded-tr-[8rem] rounded-bl-[8rem] overflow-hidden lg:py-20 lg:flex lg:justify-end">
          <div className="bg-[url(images/bg-pattern-circles.svg)] h-150 w-150 absolute -top-60 left-1/2 -translate-x-1/2 bg-center bg-no-repeat bg-cover lg:left-70 lg:scale-175 lg:-top-75"></div>
          <div className="relative z-10 lg:text-left lg:w-[45%] xl:w-[60%] padding">
            <h3 className="text-4xl mb-7 mt-40 lg:mt-0">
              State of the Art Infrastructure
            </h3>
            <p className="mb-12 text-gray-200 lg:mb-0">
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-20 flex flex-col gap-5 overflow-hidden relative lg:py-75">
        <picture className="scale-120 w-fit lg:scale-100 m-auto lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:-left-120 xl:-left-75">
          <source media="(min-width: 1024px)" srcSet={laptopDesktop} />
          <img src={laptopMobile} alt="" className="w-full h-auto" />
        </picture>
        <div className="padding flex flex-col gap-10 text-gray-600 pb-10 md:pb-25 lg:pb-auto lg:text-left lg:w-[60%] lg:self-end">
          <div className="text-section-div">
            <h2>Free, open, simple</h2>
            <p>
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>
          <div className="text-section-div">
            <h2>Powerful tooling</h2>
            <p>
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
