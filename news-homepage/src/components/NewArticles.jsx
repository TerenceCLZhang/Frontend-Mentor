import NewArticle from "./NewArticle";

const NewArticles = () => {
  return (
    <article className="flex flex-col justify-around gap-5 bg-very-dark-blue text-off-white padding lg:w-[83%]">
      <h2 className="text-soft-orange text-4xl font-bold lg:text-5xl">New</h2>
      {[
        {
          title: "Hydrogen VS Electric Cars",
          description: "Will hydrogen-fueled cars ever catch up to EVs?",
        },
        {
          title: "The Downsides of AI Artistry",
          description:
            "What are the possible adverse effects of on-demand AI image generation?",
        },
        {
          title: "Is VC Funding Drying Up?",
          description:
            "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
        },
      ].map((item, index, array) => (
        <div
          key={index}
          className={`${
            index !== array.length - 1
              ? "border-b border-b-dark-grayish-blue pb-5"
              : ""
          }`}
        >
          <NewArticle title={item.title} description={item.description} />
        </div>
      ))}
    </article>
  );
};

export default NewArticles;
