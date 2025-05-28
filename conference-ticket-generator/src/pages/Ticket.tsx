import TicketFilled from "../components/TicketFilled";
import { useLocation, useNavigate } from "react-router-dom";
import type { FormData } from "../components/TicketForm";
import { useEffect, useState } from "react";

const Ticket = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [data, setData] = useState<FormData | null>(null);

  useEffect(() => {
    const state = location.state as FormData | undefined;

    if (
      !state ||
      !state.name ||
      !state.email ||
      !state.avatar ||
      !state.username
    ) {
      navigate("/not-found");
    } else {
      setData(state);
    }
  }, [location.state, navigate]);

  if (!data) return null;

  return (
    <div className="mt-10 pb-35 lg:pb-0 flex flex-col items-center md:gap-15">
      <div className="flex flex-col text-center gap-5 xl:w-[75%]">
        <h1>
          Congrats,{" "}
          {data.name.split(/\s+/).map((val, index) => (
            <span
              key={index}
              className="bg-gradient-to-r from-gradient-text-start to-gradient-text-end bg-clip-text text-transparent"
            >
              {val +
                (index < 1 && data.name.split(/\s+/).length > 1 ? " " : "")}
            </span>
          ))}
          ! Your ticket is ready.
        </h1>
        <p className="wrap-break-word">
          We've emailed your ticket to{" "}
          <span className="text-orange-500">{data.email}</span> and will send
          updates in the run up to the event.
        </p>
      </div>

      <TicketFilled
        avatar={data.avatar[0]}
        name={data.name}
        username={data.username}
      />
    </div>
  );
};

export default Ticket;
