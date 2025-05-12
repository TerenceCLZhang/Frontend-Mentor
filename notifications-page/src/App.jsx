import notifications from "./data";
import PostReaction from "./components/PostReaction";
import Follow from "./components/Follow";
import Group from "./components/Group";
import PrivateMessage from "./components/PrivateMessage";
import PictureComment from "./components/PictureComment";
import { useState } from "react";

function App() {
  const [notificationsList, setNotificationsList] = useState(notifications);
  const notificationsNumber = notificationsList.filter((n) => n.unread).length;

  const handleReadAll = () => {
    const updated = notificationsList.map((n) => ({ ...n, unread: false }));
    setNotificationsList(updated);
  };

  const handleMarkAsRead = (id) => {
    setNotificationsList((prev) =>
      prev.map((n) => (n.id === id ? { ...n, unread: false } : n))
    );
  };

  return (
    <main className="mx-5 my-8 md:bg-white max-w-[700px] sm:w-[90vw] md:p-8 md:pb-0 md:rounded-2xl md:m-0 md:shadow-md">
      <div className="flex justify-between mb-8">
        <div className="flex gap-2">
          <h1 className="text-xl text-very-dark-blue font-extrabold md:text-2xl">
            Notifications
          </h1>
          <span className="bg-blue text-white px-3 py-0.5 rounded-lg m-auto">
            {notificationsNumber}
          </span>
        </div>
        <button
          className="cursor-pointer hover:text-blue"
          onClick={handleReadAll}
        >
          Mark all as read
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {notificationsList.map((n) => {
          switch (n.type) {
            case "post":
              return (
                <PostReaction
                  key={n.id}
                  name={n.name}
                  avatar={n.avatar}
                  postTitle={n.postTitle}
                  time={n.time}
                  unread={n.unread}
                  handleMarkAsRead={() => handleMarkAsRead(n.id)}
                />
              );
            case "follow":
              return (
                <Follow
                  key={n.id}
                  name={n.name}
                  avatar={n.avatar}
                  time={n.time}
                  unread={n.unread}
                  handleMarkAsRead={() => handleMarkAsRead(n.id)}
                />
              );
            case "group":
              return (
                <Group
                  key={n.id}
                  name={n.name}
                  avatar={n.avatar}
                  groupName={n.groupName}
                  time={n.time}
                  joined={n.joined}
                  unread={n.unread}
                  handleMarkAsRead={() => handleMarkAsRead(n.id)}
                />
              );
            case "message":
              return (
                <PrivateMessage
                  key={n.id}
                  name={n.name}
                  avatar={n.avatar}
                  message={n.message}
                  time={n.time}
                  unread={n.unread}
                  handleMarkAsRead={() => handleMarkAsRead(n.id)}
                />
              );
            case "picture":
              return (
                <PictureComment
                  key={n.id}
                  name={n.name}
                  avatar={n.avatar}
                  img={n.img}
                  imgAlt={n.imgAlt}
                  time={n.time}
                  unread={n.unread}
                  handleMarkAsRead={() => handleMarkAsRead(n.id)}
                />
              );
            default:
              return null;
          }
        })}
      </div>
    </main>
  );
}

export default App;
