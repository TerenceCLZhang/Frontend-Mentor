import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import success from "../assets/images/icon-success-check.svg";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const SuccessNotification = ({ closeModal }) => {
  return (
    <div
      className="bg-grey-900 text-white rounded-lg p-5 w-[80vw] md:w-fit fixed left-1/2 -translate-x-1/2 top-3"
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <img src={success} alt="" />
          <h2 className="font-bold">Message Sent!</h2>
        </div>
        <button
          className="text-xl cursor-pointer"
          aria-label="Close success notifcation"
          onClick={() => closeModal(false)}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <p>Thanks for completing the form. We'll be in touch soon!</p>
    </div>
  );
};

export default SuccessNotification;
