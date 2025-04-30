import "../css/ArticlePreviewComponent.css";
import LowerSection from "./LowerSection";

function ArticlePreviewComponent() {
  return (
    <div className="article-preview-component">
      <div className="article-img"></div>

      <div className="main-contents">
        <div className="text-sec">
          <h1 className="bold">
            <a href="#">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </a>
          </h1>
          <p>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
        </div>

        <LowerSection />
      </div>
    </div>
  );
}

export default ArticlePreviewComponent;
