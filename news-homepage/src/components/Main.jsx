import NewArticles from "./NewArticles";
import MainArticles from "./MainArticles";
import TitleArticle from "./TitleArticle";

const Main = () => {
  return (
    <main className="padding flex flex-col gap-13 pt-30 lg:pt-8 lg:w-[85vw] max-w-[1200px]">
      <div className="flex flex-col gap-13 lg:flex-row lg:gap-5">
        <TitleArticle />
        <NewArticles />
      </div>

      <MainArticles />
    </main>
  );
};

export default Main;
