import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from "../images/avatar-michelle.jpg";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "../css/LowerSection.css";
import { useState } from "react";

function LowerSection() {
  const [showingShare, setShowingShare] = useState(false);

  return (
    <section className={`lower-sec ${showingShare ? "showing-share" : ""}`}>
      <div className="left-container">
        <div className="author-info">
          <img
            src={avatar}
            alt="Avatar of Michelle Appleton"
            className="avatar"
          />
          <div>
            <a href="#" className="bold">
              Michelle Appleton
            </a>
            <span>28 Jun 2020</span>
          </div>
        </div>
        {showingShare && (
          <div className="share-info">
            <h2>Share</h2>
            <div className="links">
              <a href="#" className="link">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
              <a href="#" className="link">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="link">
                <FontAwesomeIcon icon={faPinterest} />
              </a>
            </div>
            <div className="arrow"></div>
          </div>
        )}
      </div>
      <button
        className="share-icon"
        onClick={() => setShowingShare(!showingShare)}
      >
        <FontAwesomeIcon icon={faShare} className="icon" />
      </button>
    </section>
  );
}

export default LowerSection;
