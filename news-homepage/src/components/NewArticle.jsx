const NewArticle = ({ title, description }) => {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-xl font-bold hover:text-soft-orange lg:text-2xl">
        <a href="#">{title}</a>
      </h2>
      <p className="text-grayish-blue">{description}</p>
    </section>
  );
};

export default NewArticle;
