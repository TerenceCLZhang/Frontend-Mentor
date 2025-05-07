const MainArticle = ({ id, img, imgAlt, title, description }) => {
  return (
    <section className="flex gap-5 h-full sm:w-full lg:h-[150px] lg:w-[400px] xl:w-1/3 xl:h-auto">
      <img
        src={img}
        alt={imgAlt}
        className="w-[30%] lg:max-w-[115px] self-center"
      />
      <div className="w-2/3 flex flex-col justify-between md:justify-center md:gap-3.5 lg:justify-around">
        <span className="text-soft-red text-4xl font-bold">
          {String(id).padStart(2, "0")}
        </span>
        <h4 className="text-[1.15rem] font-extrabold hover:text-soft-red">
          <a href="#">{title}</a>
        </h4>
        <p className="text-dark-grayish-blue">{description}</p>
      </div>
    </section>
  );
};

export default MainArticle;
