import MainArticle from "./MainArticle";
import retroPCs from "../assets/images/image-retro-pcs.jpg";
import topLaptops from "../assets/images/image-top-laptops.jpg";
import gamingGrowth from "../assets/images/image-gaming-growth.jpg";

const MainArticles = () => {
  return (
    <div className="flex flex-col gap-7 items-center justify-between lg:justify-center lg:flex-wrap lg:flex-row xl:flex-nowrap">
      {[
        {
          img: retroPCs,
          imgAlt: "Retro PCs",
          title: "Reviving Retro PCs",
          description: "What happens when old PCs are given modern upgrades?",
        },
        {
          img: topLaptops,
          imgAlt: "Latptop",
          title: "Top 10 Laptops of 2022",
          description: "Our best picks for various needs and budgets.",
        },
        {
          img: gamingGrowth,
          imgAlt: "Gaming controller",
          title: "The Growth of Gaming",
          description: "How the pandemic has sparked fresh opportunities.",
        },
      ].map((item, index) => (
        <MainArticle
          key={index}
          id={index + 1}
          img={item.img}
          imgAlt={item.imgAlt}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default MainArticles;
