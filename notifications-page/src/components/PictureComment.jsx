const PictureComment = ({
  name,
  avatar,
  img,
  imgAlt,
  time,
  unread = true,
  handleMarkAsRead,
}) => {
  return (
    <div
      className={`notification-card ${unread ? "unread" : ""}`}
      onClick={() => {
        if (unread) handleMarkAsRead();
        // navigate(...) // If using React Router or other client side routing
      }}
    >
      <img src={avatar} alt={`${name} avatar`} className="img" />
      <div className="flex justify-between w-full">
        <div>
          <div>
            <a href="#" className="name">
              {name}
            </a>{" "}
            commented on your picture
            {unread && <span className="red-dot">•</span>}
          </div>
          <span className="time">{time} ago</span>
        </div>
        <a href="#">
          <img src={img} alt={imgAlt} className="img" />
        </a>
      </div>
    </div>
  );
};

export default PictureComment;
