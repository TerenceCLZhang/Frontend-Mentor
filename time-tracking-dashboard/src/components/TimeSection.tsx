interface Props {
  label: string;
  value: number;
  valueBefore: number;
}

const TimeSection = ({ label, value, valueBefore }: Props) => {
  const background: Record<string, { color: string; image: string }> = {
    Work: { color: "bg-orange-300", image: "bg-[url(images/icon-work.svg)]" },
    Play: { color: "bg-blue-300", image: "bg-[url(images/icon-play.svg)]" },
    Study: { color: "bg-pink-400", image: "bg-[url(images/icon-study.svg)]" },
    Exercise: {
      color: "bg-green-400",
      image: "bg-[url(images/icon-exercise.svg)]",
    },
    Social: {
      color: "bg-purple-700",
      image: "bg-[url(images/icon-social.svg)]",
    },
    "Self Care": {
      color: "bg-yellow-300",
      image: "bg-[url(images/icon-self-care.svg)]",
    },
  };

  const bgClass = background[label].color;
  const bgImage = background[label].image;

  return (
    <section className="relative h-45 flex items-end overflow-hidden rounded-edge cursor-pointer lg:w-full lg:h-55 xl:h-full">
      <div className={`absolute top-0 left-0 w-full h-1/2 ${bgClass} -z-10`}>
        <div
          className={`${bgImage} bg-no-repeat bg-position-[position:92%_-10px] h-full bg-image`}
        ></div>
      </div>

      <div className="padding rounded-edge bg-navy-900 w-full hover:bg-navy-700">
        <div className=" flex justify-between">
          <h2 className="font-bold text-white">{label}</h2>
          <button
            type="button"
            aria-label="More information"
            className="bg-[url(images/icon-ellipsis.svg)] bg-center bg-no-repeat h-7 w-7 cursor-pointer"
          ></button>
        </div>
        <div className="flex justify-between items-center mt-2 lg:flex-col lg:items-start lg:gap-3 lg:mt-7">
          <span className="text-white text-3xl font-light xl:text-5xl">
            {value}hrs
          </span>
          <span className="text-base">Last Week - {valueBefore}hrs</span>
        </div>
      </div>
    </section>
  );
};

export default TimeSection;
