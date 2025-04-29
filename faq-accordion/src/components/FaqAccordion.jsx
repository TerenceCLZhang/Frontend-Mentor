import Faq from "./Faq";
import "../css/FaqAccordion.css";
import data from "../data/data.json";

function FaqAccordion() {
  return (
    <section className="faq-accordion flex">
      <div className=" title flex">
        <img src="src/assets/images/icon-star.svg" alt="" />
        <h1>FAQs</h1>
      </div>
      <div className="faqs flex">
        {data.map((item, index) => (
          <Faq
            key={index}
            id={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </section>
  );
}

export default FaqAccordion;
