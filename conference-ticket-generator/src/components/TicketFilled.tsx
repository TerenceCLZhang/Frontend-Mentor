import ticketPattern from "../assets/images/pattern-ticket.svg";
import logo from "../assets/images/logo-mark.svg";
import github from "../assets/images/icon-github.svg";
import Rand from "rand-seed";

interface Props {
  avatar: File;
  name: string;
  username: string;
}

const TicketFilled = ({ avatar, name, username }: Props) => {
  const avatarURL = URL.createObjectURL(avatar);

  const generateRandomTicketNumber = (): string => {
    const rand = new Rand(`${name}${username}`);
    const randomNumber = Math.floor(rand.next() * 99999) + 1;
    return String(randomNumber).padStart(5, "0");
  };

  return (
    <div className="mt-10 relative text-sm md:w-[75%] xl:w-[60%] 2xl:w-[50%]">
      <img src={ticketPattern} alt="" className="m-auto" />
      <div className="absolute top-5 left-5 xl:top-7 xl:left-7 flex gap-2">
        <img src={logo} alt="" className="w-7 h-7" />
        <div>
          <h2>Coding Conf</h2>
          <span>Jan 31, 2025 / Austin, TX</span>
        </div>
      </div>
      <div className="absolute bottom-5 left-5 xl:bottom-7 xl:left-7 flex gap-2 items-end">
        <img
          src={avatarURL}
          alt=""
          className="w-10 h-10 rounded-lg object-cover object-center md:w-12 md:h-12"
        />
        <div>
          <span className="text-lg/1 text-ellipsis xl:text-xl">{name}</span>
          <div className="flex items-center gap-1">
            <img src={github} alt="" className="inline-block w-5 h-5" />
            <span className="text-ellipsis">{username}</span>
          </div>
        </div>
      </div>
      <span className="absolute top-1/2 -translate-y-1/2 right-0 md:right-1 lg:right-2 text-xl text-neutral-500 rotate-90">
        #{generateRandomTicketNumber()}
      </span>
    </div>
  );
};

export default TicketFilled;
