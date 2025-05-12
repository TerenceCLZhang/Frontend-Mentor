const JoinedGroup = ({
  name,
  avatar,
  groupName,
  time,
  joined,
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
      <div>
        <div>
          <a href="#" className="name">
            {name}
          </a>{" "}
          has {joined ? "joined" : "left"} your group{" "}
          <a href="#" className="font-extrabold text-blue">
            {groupName}
          </a>
          {unread && <span className="red-dot">•</span>}
        </div>
        <span className="time">{time} ago</span>
      </div>
    </div>
  );
};

export default JoinedGroup;
