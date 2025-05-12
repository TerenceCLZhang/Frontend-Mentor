const Follow = ({ name, avatar, time, unread = true, handleMarkAsRead }) => {
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
          followed you
          {unread && <span className="red-dot">•</span>}
        </div>
        <span className="time">{time} ago</span>
      </div>
    </div>
  );
};

export default Follow;
