import Dessert from "./Dessert";
import desserts from "../data.json";

const Desserts = () => {
  return (
    <section className="lg:flex-none lg:w-[70%]">
      <h1 className="font-bold text-4xl mb-7 xl:text-5xl xl:mb-10">Desserts</h1>
      <div className="flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
        {desserts.map((item, index) => (
          <Dessert key={index} dessert={item} />
        ))}
      </div>
    </section>
  );
};

export default Desserts;
