const PrivateMessage = ({
  name,
  avatar,
  message,
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
      <div>
        <div>
          <div>
            <a href="#" className="name">
              {name}
            </a>{" "}
            sent you a private message{" "}
            {unread && <span className="red-dot">•</span>}
          </div>
          <span className="time">{time} ago</span>
          <a
            href="#"
            className="border border-light-grayish-blue-2 p-3 rounded-lg mt-3 hover:bg-light-grayish-blue-1 block hover:!text-dark-grayish-blue"
          >
            {message}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivateMessage;
