import { useEffect, useState, type JSX } from "react";

interface Props {
  date: Date | null;
}

type Age = {
  years: number | null;
  months: number | null;
  days: number | null;
};

const AgeContainer = ({ date }: Props): JSX.Element => {
  const [age, setAge] = useState<Age>({
    years: null,
    months: null,
    days: null,
  });

  useEffect(() => {
    if (date instanceof Date) {
      console.log("Calculating Age");

      const today: Date = new Date();
      today.setHours(0, 0, 0, 0);

      let years: number = today.getFullYear() - date.getFullYear();
      let months: number = today.getMonth() - date.getMonth();
      let days: number = today.getDate() - date.getDate();

      // Adjust for negative days (i.e., haven't reached birth day this month)
      if (days < 0) {
        months -= 1;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate(); // days in the previous month
      }

      // Adjust for negative months (i.e., haven't reached birth month this year)
      if (months < 0) {
        years -= 1;
        months += 12;
      }

      setAge({ years: years, months: months, days: days });
    } else {
      console.log("ERROR: date is null");
    }
  }, [date]);

  return (
    <div className="self-start flex flex-col gap-3 italic text-5xl mt-5 md:mt-0 font-extrabold md:text-7xl xl:text-8xl">
      <p>
        <span className="text-purple-500">{age.years ?? "--"}</span>{" "}
        {age.years === 1 ? "year" : "years"}
      </p>
      <p>
        <span className="text-purple-500">{age.months ?? "--"}</span>{" "}
        {age.months === 1 ? "month" : "months"}
      </p>
      <p>
        <span className="text-purple-500">{age.days ?? "--"}</span>{" "}
        {age.days === 1 ? "day" : "days"}
      </p>
    </div>
  );
};

export default AgeContainer;
