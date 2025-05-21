import devices from "../images/illustration-devices.svg";

const Main = () => {
  return (
    <main className="flex flex-col items-center lg:items-start gap-5 mt-10 w-full lg:m-0 lg:justify-center lg:grow">
      <div className="absolute left-1/2 top-0 h-105 lg:h-1/2 w-1/2 rounded-bl-[4rem] bg-light-grayish-blue -z-10"></div>
      <div>
        <img
          src={devices}
          alt=""
          className="scale-135 origin-top-left md:scale-100 lg:scale-75 xl:scale-100 2xl:scale-125 lg:origin-top-right lg:absolute lg:-right-65 lg:top-1/2 lg:-translate-y-1/4 xl:-translate-y-[47%]"
        />
      </div>

      <div className="padding flex flex-col gap-5 xl:gap-10 mt-35 lg:w-1/2 lg:mt-0 max-w-[700px]">
        <div className="flex gap-4 items-center uppercase text-sm lg:text-lg">
          <span className="bg-black text-white px-2 rounded-full">New</span>
          <span className="tracking-widest lg:tracking-[4px] text-dark-grayish-blue">
            Monograph dashboard
          </span>
        </div>
        <h1 className="font-barlow-c font-bold text-4xl uppercase lg:text-6xl lg:pr-5">
          Powerful insights into your team
        </h1>
        <p className="lg:pr-60">
          Project planning and time tracking for agile teams
        </p>
        <div className="flex justify-between items-center font-barlow-c uppercase text-sm mt-2 lg:text-lg lg:justify-start lg:gap-5 lg:mt-5">
          <a
            href="#"
            className="px-5 lg:px-10 py-2 w-1/2 text-center bg-red hover:opacity-85 text-white rounded-md lg:w-fit"
          >
            Schedule a demo
          </a>
          <div className="w-1/2 flex justify-center lg:w-fit">
            <a
              href="#"
              className="text-dark-grayish-blue tracking-widest lg:tracking-[4px]"
            >
              To see a preview
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
